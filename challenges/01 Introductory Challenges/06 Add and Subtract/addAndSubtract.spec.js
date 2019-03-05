const func = require('./addAndSubtract.challenge');

describe('Add and Subtract requirements',()=>{
    
    it('returns a value equal to (a+b)-c',()=>{
        let test1 = func(1,2,3);
        let test2 = func(10,5,5);
        let test3 = func(200,100,500);
        expect(test1).toBe(0);
        expect(test2).toBe(10);
        expect(test3).toBe(-200);
    });
});