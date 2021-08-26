const category = require('./routes/category');
const user = require('./routes/user');
const { deletePassword } = require('./utils');
module.exports = () => {
  user.forEach((u) => deletePassword(u));
  return {
    category,
    user,
  };
};
