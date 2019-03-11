const func = require('./getKeys.challenge');

describe('Get Keys should',()=>{

    const result1 = func({item01:"coffee cup",item02:"coffee beans",item03:"cream"});

    it('return an array containing the property keys of the object passed as a parameter',()=>{
        expect(result1.includes('item01')).toBe(true);
        expect(result1.includes('item02')).toBe(true);
        expect(result1.includes('item03')).toBe(true);
    });

    it('return an array whose length matches the number of keys in the parameter object', () =>{
        expect(result1.length).toEqual(3);
    });

});
