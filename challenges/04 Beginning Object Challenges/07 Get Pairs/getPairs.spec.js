const func = require('./getPairs.challenge');

describe('Get Pairs should',()=>{

    const result1 = func({item01:"coffee cup",item02:"coffee beans",item03:"cream"});

    it('return an array containing the key/value pairs of the object passed as a parameter',()=>{
        expect(result1.includes('item01:coffee cup')).toBe(true);
        expect(result1.includes('item02:coffee beans')).toBe(true);
        expect(result1.includes('item03:cream')).toBe(true);
    });

    it('return an array whose length matches the number of properties in the parameter object', () =>{
        expect(result1.length).toEqual(3);
    });

});
