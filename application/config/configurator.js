function config() {
    const Jasmine = require('jasmine');
    const jasmine = new Jasmine();
    const glob = require('glob');
    const path = require('path');
    const Reporter = require('jasmine-console-reporter');
    let user = require('../user_settings/config');
    let studentCode = "";
    glob('./*.challenge.js',(options,result)=>{
        studentCode = require(path.resolve(result[0]));
    });


    jasmine.loadConfig({
        spec_dir: './',
        spec_files: [
            '*.spec.js'
        ]
    });

    // Register a Custom Reporter
    jasmine.jasmine.getEnv().addReporter(new Reporter());

    jasmine.onComplete(function (passed) {
        if (passed) {
            let codeString = "" + studentCode;
            let package = {
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                code: codeString,
                pass: passed
            }
            console.log(package);

        } else {
            console.log('Tenacity is talent! Try again.');
        }
    });
    return jasmine.execute();
}

module.exports = config;