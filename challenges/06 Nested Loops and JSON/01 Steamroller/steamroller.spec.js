const func = require('./steamroller.challenge');

describe('Steamroller requirements', () => {
    let arr1 = [['apples', 'peaches'], ['broccoli', 'spinach'], ['cheese', 'yogurt']];

    let arr2 = [[1, 2, 3, 4], [5, 6], [7], [8, 9, 10]];

    it('returns an array',()=>{
        expect(Array.isArray(func(arr1))).toBe(true);
    });

    it('returns a flattened array containing all the values of the parameter array',()=>{

        expect(func(arr1)).toEqual(['apples', 'peaches', 'broccoli', 'spinach', 'cheese', 'yogurt']);

        expect(func(arr2)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('does not return a multidimensional array',()=>{
        let result1 = func(arr1);
        let result2 = func(arr2);

        result1.forEach(e =>{
            expect(Array.isArray(e)).toBe(false);
        });

        result2.forEach(e =>{
            expect(Array.isArray(e)).toBe(false);
        });
    });

});