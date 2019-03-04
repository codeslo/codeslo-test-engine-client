const func = require('./return_a_string.challenge');

describe('Create_a_function test requirements',()=>{

    it('is a properly formatted JavaScript function',()=>{
        expect(typeof(func)).toBe('function');
    });

    it('returns a string',()=>{
        expect(typeof(func())).toBe('string');
    });
});

