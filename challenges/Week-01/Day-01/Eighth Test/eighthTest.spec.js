const eighthTest = require('./eighthTest.challenge');

describe('Eighth Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(eighthTest)).toBe('function');
    });

    it('returns eighth',()=>{
        expect(eighthTest()).toBe('eighth');
    });
});

