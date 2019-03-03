const func = require('./create_a_function.challenge');

describe('Create_a_function test requirements',()=>{

    it('is a properly formatted JavaScript function',()=>{
        expect(typeof(func)).toBe('function');
    });

    it('does not return undefined or null',()=>{
        expect(typeof(func())).not.toBe('undefined');
        expect(typeof(func())).not.toBe('null');
    });
});

