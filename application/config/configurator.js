function config(testName) {
    const Jasmine = require('jasmine');
    const jasmine = new Jasmine();
    const glob = require('glob');
    const path = require('path');
    const callsite = require('callsite');
    const root = require('app-root-path');
    const Reporter = require('jasmine-console-reporter');
    const axios = require('axios');
    const stack = callsite();
    const chalk = require('chalk');
    let requester = stack[1].getFileName();
    let user = require(root + '/user_settings/config');
    let studentCode = "";
    glob('./*.challenge.js', (options, result) => {
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
        // TODO - add exercise name from code

        let codeString = "" + studentCode;
        axios.post('http://codeslo-test-engine.herokuapp.com/test-results', {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            testName: testName,
            code: codeString,
            passed: passed
        }).then((response) => {
            console.log(chalk.green('Submission successful. ' + (response.data ? chalk.cyan(response.data) : '')));
            if (passed) {
                console.log(chalk.green('Good work! On to the next challenge.'));
                process.exit();
            }
            else {
                console.log(chalk.yellow('Tenacity is talent! Try again.'));
                process.exit();
            }
        }).catch((err) => {
            console.log(chalk.red('Submission failed. ') + 'Error code: ' + chalk.yellow(err.response.status) + ' ' + chalk.cyan(err.response.data));
        });

    });

    if (path.dirname(requester).includes('challenges')) {
        return console.log(chalk.red('You\'re in the challenges directory. Please copy-paste your code into my_solutions. Code on!'));
    }

    return jasmine.execute();
}

module.exports = config;