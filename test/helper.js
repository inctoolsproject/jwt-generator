const assert = require('assert');
const helper = require('../helper.js');
const clipboardy = require('clipboardy');

describe('Helper', function() {
  describe('#validateEmail()', function() {
    it('should return false if not start with digits, characters, underscore, dash, or dot', function() {
      assert.equal(false, helper.validateEmail('*$!@example.com'));
    });

    it('should return false if not include @', function() {
      assert.equal(false, helper.validateEmail('test.example.com'));
    });

    it('should return false if @ is not between strings', function() {
      assert.equal(false, helper.validateEmail('testexample@.com'));
    });

    it('should return false if neither digits or characters after the dot after @', function() {
      assert.equal(false, helper.validateEmail('test@example.!?!'));
    });

    it('should return false if length after the dot after @ is less than 2', function() {
      assert.equal(false, helper.validateEmail('test@example.c'));
    });

    it('should return false if length after the dot after @ is greater than 4', function() {
      assert.equal(false, helper.validateEmail('test@example.coming'));
    });
  });

  describe('#copy()', function() {
    it('should copy a string to clipboard', function() {
      helper.copy('token');
      assert.equal('token', clipboardy.readSync());
    });
  });
});