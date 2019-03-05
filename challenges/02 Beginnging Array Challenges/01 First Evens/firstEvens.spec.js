const func = require('./firstEvens.challenge');

describe('First Evens requirements',()=>{

    const result1 = func([1,2,3,4]);
    const result2 = func([1,2,3,5,7,8]);
    const result3 = func([1,2,3,5,9]);
    it('returns an array',()=>{
        expect(Array.isArray(result1)).toBe(true);
    });

    it('returns the first two even numbers from array [1,2,3,4]',()=>{
        expect(result1).toEqual([2,4]);
    });

    it('returns the first two even numbers from array [1,2,3,5,7,8]',()=>{
        expect(result2).toEqual([2,8]);
    });

    it('returns -1 if the parameter array does not contain two even numbers',()=>{
        expect(result3).toBe(-1);
    });

});