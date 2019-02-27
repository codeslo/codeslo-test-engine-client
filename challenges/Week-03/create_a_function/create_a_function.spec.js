const func = require('./create_a_function.challenge');

describe('Create_a_function tests',()=>{

    it('is a function',()=>{
        expect(typeof(func)).toBe('function');
    });
});

