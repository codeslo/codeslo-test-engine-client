const func = require('./getValues.challenge');

describe('Get Values should',()=>{

    const result1 = func({item01:"coffee cup",item02:"coffee beans",item03:"cream"});

    it('return an array containing the property values of the object passed as a parameter',()=>{
        expect(result1.includes('coffee cup')).toBe(true);
        expect(result1.includes('coffee beans')).toBe(true);
        expect(result1.includes('cream')).toBe(true);
    });

    it('return an array whose length matches the number of values in the parameter object', () =>{
        expect(result1.length).toEqual(3);
    });

});
