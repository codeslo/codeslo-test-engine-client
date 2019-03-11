const func = require('./firstJenny.challenge');

describe('First Jenny should',()=>{

    const result1 = func(["Suzie", "Jenny", "Lisa", "Jenny"]); // 1
    const result2 = func(["Sally", "Jenny", "Suzie", "Jenny", "Lisa", "Jenny"], 2); // 3
    const result3 = func(["Suzie", "Jennie", "Lisa"]); // -1
    const result4 = func(["Sally", "Jenny", "Suzie", "Jenny", "Lisa", "Gretchen"], 4); // -1
    const result5 = func(["Suzie", "Lisa", "Jenny"], 4); // 1
    const result6 = func(["Suzie", "Jennie", "Lisa"], 4); // -1
    it('return a number',()=>{
        expect(typeof(result1)).toBe("number");
    });

    it('return index when the "Jenny" is found in the array including after the starting index',()=>{
        expect(result1).toEqual(1);
        expect(result2).toBe(3);
    });

    it('return -1 when the "Jenny" is NOT found in the array, including after the "starting index"',()=>{
        expect(result3).toBe(-1);
        expect(result4).toBe(-1);
    });
    
    it('searches the entire array if start index is greater than the array length',()=>{
        expect(result5).toBe(2);
        expect(result6).toBe(-1);
    });

});
