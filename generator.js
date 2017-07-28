const jwt = require('jsonwebtoken');

var jwtGenerator = {
  secret: process.env.SECRET || 'secret',
  generate: function(pairs) {
    return jwt.sign(pairs, this.secret);
  }
}

module.exports = jwtGenerator;