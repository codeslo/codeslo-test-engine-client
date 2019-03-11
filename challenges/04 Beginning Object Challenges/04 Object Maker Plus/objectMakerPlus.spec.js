const func = require('./objectMakerPlus.challenge');

describe('Object Maker Plus should',()=>{

    const result1 = func("name", "Joe");
    const result2 = func("age", 21);

    it('return an object with the first parameter as the key and the second parameter as that key\'s value',()=>{
        expect(result1).toEqual({"name":"Joe"});
        expect(result2).toEqual({"age":21});
    });

});
