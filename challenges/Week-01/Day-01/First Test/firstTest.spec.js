const firstTest = require('./firstTest.challenge');

describe('First Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(firstTest)).toBe('function');
    });

    it('Returns first',()=>{
        expect(firstTest()).toBe('first');
    });
});

