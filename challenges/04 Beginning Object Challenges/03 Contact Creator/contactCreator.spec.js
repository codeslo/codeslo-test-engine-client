const func = require('./contactCreator.challenge');

describe('Contact Creator should',()=>{

    const result1 = func("Mary","Smith","805.286.2222");

    it('return an object with keys firstName, lastName, and phoneNumber assigned values of the three parameters, respectively',()=>{
        expect(result1).toEqual({firstName:"Mary",lastName:"Smith",phoneNumber:"805.286.2222"});
    });

});
