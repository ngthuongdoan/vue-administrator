const { generateId, role } = require('../utils');

module.exports = [
  {
    id: generateId(),
    username: 'admin',
    password: 'admin',
    fullname: 'Đoàn Ngọc Thưởng',
    phone: '0123456789',
    address: '',
    role: role.ADMIN,
  },
  {
    id: generateId(),
    username: 'editor',
    password: 'editor',
    fullname: 'Trần Kiều Diệu Thi',
    phone: '0123456789',
    address: '',
    role: role.DEFAULT,
  },
];
