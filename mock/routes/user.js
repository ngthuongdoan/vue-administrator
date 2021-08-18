const { generateId, role } = require('../utils');

module.exports = [
  {
    id: generateId(),
    name: 'Admin',
    username: 'admin',
    password: 'admin',
    role: role.ADMIN,
  },
  {
    id: generateId(),
    name: 'Editor',
    username: 'editor',
    password: 'editor',
    role: role.DEFAULT,
  },
];
