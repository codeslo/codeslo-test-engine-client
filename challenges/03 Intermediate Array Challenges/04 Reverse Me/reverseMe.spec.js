const func = require('./reverseMe.challenge');

describe('Reverse Me should',()=>{

    const result1 = func([1,2,3,4]);
    const result2 = func(["one","two","three"]);
    it('return an array',()=>{
        expect(Array.isArray(result1)).toBe(true);
    });

    it('return an array equal to the array parameter in reverse',()=>{
        expect(result1).toEqual([4,3,2,1]);
        expect(result2).toEqual(["three","two","one"]);
    });

});
