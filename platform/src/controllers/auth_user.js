const { CompareHash } = require("@/lib/configuration_bcrypt");
const { Usuario } = require("@/lib/configuration_Sequelize");

const SearchUser = async (JsonData) => {
  const { nombre_Usuario, contrasena_Usuario } = JsonData;

  const users = await Usuario.findAll();

  const userPromises = users.map(async (user) => {
    const verifyCard = await CompareHash(
      contrasena_Usuario,
      user.contrasena_Usuario
    );
    if (verifyCard) return user;
    return null;
  });

  const userResults = await Promise.all(userPromises);
  const userToUse = userResults.filter((user) => user !== null);

  if (userResults[0]?.nombre_Usuario != nombre_Usuario)
    throw new Error("Account invalid");
  if (userToUse[0] == null) throw new Error("Account invalid");
  return userToUse[0];
};

const authUser = async ({ JsonData }) => {
  const userToAuth = await SearchUser(JsonData);
  return userToAuth;
};

module.exports = { authUser };
