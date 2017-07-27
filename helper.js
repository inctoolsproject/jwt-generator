const clipboardy = require('clipboardy');

var Helper = {
  validateEmail: function(email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
  },
  showEmailError: function() {
    console.log('Invalid email entered!');
  },
  showStartMsg: function() {
    console.log('Starting with JWT token generation.');
  },
  copy: function(token) {
    clipboardy.writeSync(token);
  },
  showCopiedMsg: function() {
    console.log('The JWT has been copied to your clipboard!');
  }
}

module.exports = Helper;