#!/usr/bin/env node
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
const jwt = require('./generator.js');
const helper = require('./helper.js');

program
  .command('start')
  .option('-u, --userId <userId>', 'The user to authenticate as')
  .option('-e, --email <email>', 'The user\'s email')
  .action(function(req, options) {
    helper.showStartMsg();

    co(function *() {
      let pairs = {};
      let haveExtra = false;
      let validMail = helper.validateEmail(req.email);

      pairs['userId'] = req.userId;
      pairs['email'] = req.email;

      while (!pairs['userId']) {
        pairs['userId'] = yield prompt('userId: ');
      }
      while (!validMail) {
        pairs['email'] = yield prompt('email: ');
        validMail = helper.validateEmail(pairs['email']);
        if (!validMail) helper.showEmailError();
      }

      do {
        if (haveExtra) {
          let key = yield prompt('key: ');
          let value = yield prompt('value: ');
          pairs[key] = value;
        }

        haveExtra = yield prompt('Any additional inputs? (yes/no) ');
        haveExtra = haveExtra === 'yes' ? true : false;

        if (!haveExtra) {
          helper.copy(jwt.generate(pairs));
          helper.showCopiedMsg()
          process.exit(1);
        }
      } while (haveExtra)
    });
  })
  .parse(process.argv);

program.parse(process.argv);