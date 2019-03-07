const func = require('./hideAndSeek.challenge');

describe('Hide And Seek should',()=>{

    const result1 = func([1, 2, 3], 3);
    const result2 = func(['fun', 'happy things', 'kittens'], 'sad things');
    const result3 = func([5, 10, 15], '10');
    it('return a boolean',()=>{
        expect(typeof(result1)).toBe("boolean");
    });

    it('return true when the value is found in the array',()=>{
        expect(result1).toBe(true);
    });

    it('return false when the value is NOT found in the array',()=>{
        expect(result2).toBe(false);
    });

    it('return false if the value is only "loosely" equal to an element in the array',()=>{
        expect(result3).toBe(false);
    });

});
