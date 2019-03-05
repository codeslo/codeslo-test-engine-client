const func = require('./arrayBuilder.challenge');

describe('Array Builder requirements',()=>{
    let result = func();

    it('returns an array',()=>{
        expect(Array.isArray(result)).toBe(true);
    });

    it('has a length of 5',()=>{
        expect(result.length).toBe(5);
    });

    it('has "CodeSLO" in index position 2',()=>{
        expect(result[2]).toBe('CodeSLO');
    });
    
});

