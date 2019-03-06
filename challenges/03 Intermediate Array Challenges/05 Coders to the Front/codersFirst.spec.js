const func = require('./codersFirst.challenge');

describe('Coders to the Front should',()=>{

    const result1 = func(["Doctors","Lawyers","Coders"]);
    const result2 = func(["Coders","Doctors","Lawyers"]);
    const result3 = func(["Doctors","Lawyers","Bankers"]);
    it('return an array',()=>{
        expect(Array.isArray(result1)).toBe(true);
    });

    it('return an array with "Coders" moved to the first position',()=>{
        expect(result1).toEqual(["Coders","Doctors","Lawyers"]);
        expect(result2).toEqual(["Coders","Doctors","Lawyers"]);
        expect(result3).toEqual(["Coders","Doctors","Lawyers","Bankers"]);
    });

});
