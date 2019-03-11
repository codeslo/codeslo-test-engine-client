const func = require('./makeGosling.challenge');

describe('Ryan Gosling should',()=>{

    const result1 = func();

    it('return an object with the correct property keys and values',()=>{
        expect(result1).toEqual({firstName:"Ryan",lastName:"Gosling",occupation:"Actor",catchPhrase:"Hey girl, I'll store your key/value pairs."});
    });

});
