const func = require('./hollaBack.challenge');

describe('Holla Back requirements',()=>{
    it('returns a value equal to the parameter passed to it',()=>{
        let test1 = func('hello');
        let test2 = func(5);
        let test3 = func('Echo this!');
        expect(test1).toBe('hello');
        expect(test2).toBe(5);
        expect(test3).toBe('Echo this!');
    });
});