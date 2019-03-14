const func = require('./steamroller2.challenge');

describe('Steamroller 2 requirements', () => {

    let result1 = func([1,3,10,[[4,13,6],5],[6,7,8,1,2,[[3,[6,7]],[9,[[10],11]],[[[[[13]]]]],12,[12],12]]]);
    let result2 = func([2,4,5,6,[1,2,3,4,[[[[[7]]]]]],8,[9],10,10,1,[[11]]]);
    it('returns an array',()=>{
        expect(Array.isArray(result1)).toBe(true);
        expect(Array.isArray(result2)).toBe(true);
    });

    it('returns the correct values, without duplicate numbers, sorted in numerical order',()=>{
        expect(result1).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13]);
        expect(result2).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
    });

});