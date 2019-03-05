const func = require('./lengthOfThree.challenge');

describe('Length of Three requirements',()=>{
    let result = func();

    it('returns an array',()=>{
        expect(Array.isArray(result)).toBe(true);
    });

    it('returns an array with a length of three',()=>{
        expect(result.length).toBe(3);
    });
    
});

