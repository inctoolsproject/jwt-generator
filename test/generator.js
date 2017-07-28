const assert = require('assert');
const jwtGenerator = require('../generator.js');
const jwt = require('jsonwebtoken');

describe('jwtGenerator', function() {
  describe('#generate()', function() {
    it('should return a JWT token', function() {
      let token = jwtGenerator.generate({ foo: 'bar' });
      assert.equal('bar', jwt.verify(token, jwtGenerator.secret).foo);
    });
  });
});