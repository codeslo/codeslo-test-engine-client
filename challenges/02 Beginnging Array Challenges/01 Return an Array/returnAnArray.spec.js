const func = require('./returnAnArray.challenge');

describe('Return an Array requirements',()=>{
    let result = func();
    it('returns an array',()=>{
        expect(Array.isArray(result)).toBe(true);
    });

    it('returns a non-empty array',()=>{
        expect(result.length).not.toBe(0);
    });
    
});

