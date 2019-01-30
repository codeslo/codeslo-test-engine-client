const Jasmine = require('jasmine');
const jasmine = new Jasmine();
const testMe = require('./challenges/Week-01/Day-01/testMe');

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
    if(passed){
        let code = ""+testMe;
        console.log(code);
    }else{
        console.log('aw');
    }
});

jasmine.execute();