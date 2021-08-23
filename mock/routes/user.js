const { generateId, role } = require('../utils');

module.exports = [
  {
    id: generateId(),
    name: 'Admin',
    username: 'admin',
    password: 'admin',
    fullname: 'Đoàn Ngọc Thưởng',
    phone: '0123456789',
    address: '',
    role: role.ADMIN,
  },
  {
    id: generateId(),
    name: 'Editor',
    username: 'editor',
    password: 'editor',
    fullname: 'Trần Kiều Diệu Thi',
    phone: '0123456789',
    address: '',
    role: role.DEFAULT,
  },
];
