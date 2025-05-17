const bcrypt = require("bcrypt");

const EncryptHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const CompareHash = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { EncryptHash, CompareHash };
