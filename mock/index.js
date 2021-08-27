const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const user = require('./routes/user');
const category = require('./routes/category');
const { generateId } = require('./utils');

const server = jsonServer.create();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789';

// Create a token from a payload
function createToken(payload, expiresIn = '1h') {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

function removeToken(payload) {
  createToken(payload, '-100000');
}

// Check if the user exists in database
function isAuthenticated({ username, password }) {
  return findUser({ username, password }) !== -1;
}

function findUser({ username, password }) {
  return user.find((u) => u.username === username && u.password === password);
}
// Register New User
server.post('/auth/register', (req, res) => {
  console.log('register endpoint called; request body:');
  console.log(req.body);
  const { username, password, fullname, phone, address, role } = req.body;

  if (isAuthenticated({ username, password })) {
    const status = 401;
    const message = 'Username and Password already exist';
    res.status(status).json({ status, message });
    return;
  }
  //Add new user
  user.push({
    id: generateId(),
    username,
    password,
    fullname,
    phone,
    address,
    role,
  });
  // Create token for new user
  const token = createToken({ username, password });
  const user = findUser({ username, password });
  res.status(200).json({ token, user });
});

// Login to one of the users from ./users.json
server.post('/auth/login', (req, res) => {
  console.log('login endpoint called; request body:');
  console.log(req.body);
  const { username, password } = req.body;
  if (isAuthenticated({ username, password }) === false) {
    const status = 401;
    const message = 'Incorrect username or password';
    res.status(status).json({ status, message });
    return;
  }
  const token = createToken({ username, password });
  const user = findUser({ username, password });
  res.status(200).json({ token, user });
});

server.post('/auth/logout', (req, res) => {
  console.log('logout endpoint called; request body:');
  console.log(req.body);
  const { username, password } = req.body;
  removeToken({ username, password });
  res.status(200);
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Error in authorization format';
    res.status(status).json({ status, message });
    return;
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = 'Access token not provided';
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error access_token is revoked';
    res.status(status).json({ status, message });
  }
});

server.use(jsonServer.router({ category, user }));

server.listen(8000, () => {
  console.log('Run Auth API Server');
  console.log('http://localhost:8000');
});
