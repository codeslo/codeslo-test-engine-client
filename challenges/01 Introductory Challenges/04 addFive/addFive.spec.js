const func = require('./addFive.challenge');

describe('Add Five requirements',()=>{
    it('returns a number',()=>{
        expect(typeof(func(7))).toBe('number');
    });

    it('returns a value equal to five plus the parameter passed to it',()=>{
        let test1 = func(1);
        let test2 = func(5);
        let test3 = func(11);
        expect(test1).toBe(6);
        expect(test2).toBe(10);
        expect(test3).toBe(16);
    });
});