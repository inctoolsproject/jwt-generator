const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'secret';

var jwtGenerator = {
  generate: function(pairs) {
    return jwt.sign(pairs, secret);
  }
}

module.exports = jwtGenerator;