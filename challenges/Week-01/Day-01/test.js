const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const testMe = require('./testMe');
const user = require('../../../user_settings/config');

jasmine.loadConfig({
    spec_dir: './',
    spec_files: [
        '*.spec.js'
    ]
});

// Register a Custom Reporter
const Reporter = require('jasmine-console-reporter');
jasmine.jasmine.getEnv().addReporter(new Reporter());

jasmine.onComplete(function (passed) {
    if (passed) {
        let codeString = "" + testMe;
        let package = {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            code: codeString,
            pass:passed
        }
        console.log(package);

    } else {
        console.log('aw, didn\'t pass');
    }
});

jasmine.execute();