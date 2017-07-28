const clipboardy = require('clipboardy');

var Helper = {
  emailError: 'Invalid email entered!',
  startMsg: 'Starting with JWT token generation.',
  copiedMsg: 'The JWT has been copied to your clipboard!',
  validateEmail: function(email) {
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/.test(email);
  },
  copy: function(token) {
    clipboardy.writeSync(token);
  }
}

module.exports = Helper;