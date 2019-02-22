const second = require('./secondTest.challenge');

describe('Second Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(second)).toBe('function');
    });

    it('returns "second"',()=>{
        expect(second()).toBe('second');
    });
});

