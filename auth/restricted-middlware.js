const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../api/jwt-config');

module.exports = (req, res, next) => {
// verify users are logged in
const token = req.headers.authorization;

if(token) {
  // the jwt library will try and decode the token to verifiy the validity
  jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if(err) {
      // if there is an err, there's a prob with the token
      res.status(401).json({ message: "Invalid token, you are not authorized"})
    } else {
      // if no err, token is valid and it's been decoded so decodedToken func is accessible
      // the payload is available for use, the app can access the data in the payload
      req.jwt = decodedToken;
      next();
    }
  })
} else {
res.status(401).json({ message: "Token required, you are not authorized"})
}
};