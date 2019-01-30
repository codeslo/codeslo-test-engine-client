const Jasmine = require('jasmine');
const jasmine = new Jasmine();

// can we negate the need for this by keeping everything in the same file?
jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed){
    if(passed){
        console.log('yay');
    }else{
        console.log('aw');
    }
});

jasmine.execute();

// user function

// jasmine tests

// Jasmine config files that will be the same for all tests. Can be imported or copy/pasted