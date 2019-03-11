const func = require('./objectMaker.challenge');

describe('Object Maker should',()=>{

    const result1 = func();
    it('be a function',()=>{
        expect(typeof func).toEqual('function');
    });

    it('return an object',()=>{
        expect(result1).toEqual({});
    });

});
