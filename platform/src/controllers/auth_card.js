const { socket } = require("@/app/socket_client");
const { Identificaciones } = require("@/lib/configuration_Sequelize");
const { CompareHash } = require("@/lib/configuration_bcrypt");
const { CreateAsistencia } = require("@/methods/methods_Asistencia");
CreateAsistencia;

const searchCard = async (uuid) => {
  const cards = await Identificaciones.findAll();
  if (cards == null) throw new Error("Card not found");
  const cardPromises = cards.map(async (card) => {
    const verifyCard = await CompareHash(uuid, card?.uuid_Identificacion);
    if (verifyCard) return card;
    return null;
  });

  const cardResults = await Promise.all(cardPromises);

  const cardToUse = cardResults.filter((card) => card !== null);

  if (cardToUse[0] == null) throw new Error("Token card invalid");
  return cardToUse[0];
};

const authCard = async (uuid) => {
  try {
    const cardToAuth = await searchCard(uuid);

    const JsonData = { id_Identificacion: cardToAuth?.id_Identificacion };
    socket.emit("hello", "true");
    await CreateAsistencia({ JsonData });
    return "Envio exitoso";
  } catch (error) {
    socket.emit("hello", "false");
    throw new Error(error);
  }
};

module.exports = { authCard };
