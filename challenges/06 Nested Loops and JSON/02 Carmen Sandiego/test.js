// enter test name here. Be sure it matches a test name in the database. Add tests via the web interface /addtest
const testName = "Carmen Sandiego";
// do not change code below this line
const root = require('app-root-path');
const configRunner = require(root + '/application/config/configurator');
configRunner(testName);
