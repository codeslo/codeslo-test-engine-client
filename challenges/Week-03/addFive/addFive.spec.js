const func = require('./addFive.challenge');

describe('addFive tests',()=>{
    it('is a function',()=>{
        expect(typeof(func)).toBe('function');
    });

    it('returns five plus the number passed to it',()=>{
        expect(func(5).toEqual(10));
    });
});

