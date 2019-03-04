const func = require('./iLikeCoffee.challenge');

describe('I Like Coffee requirements',()=>{
    
    it('returns a value equal to five plus the parameter passed to it',()=>{
        let test1 = func('coffee');
        let test2 = func('tea');
        let test3 = func('coke');
        expect(test1).toBe('I like coffee.');
        expect(test2).toBe('Tea makes me sleepy.');
        expect(test3).toBe('I prefer coffee.');
    });
});