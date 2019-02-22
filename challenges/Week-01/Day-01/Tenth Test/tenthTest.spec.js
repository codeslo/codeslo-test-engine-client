const tenthTest = require('./tenthTest.challenge');

describe('tenthTest functionality',()=>{

    it('is a function',()=>{
        expect(typeof(tenthTest)).toBe('function');
    });

    it('returns "<word> is the word."',()=>{
        expect(tenthTest()).toBe('tenth');
    });
});

