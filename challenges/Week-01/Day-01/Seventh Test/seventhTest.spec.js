const seventhTest = require('./seventhTest.challenge');

describe('Seventh Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(seventhTest)).toBe('function');
    });

    it('returns seventh',()=>{
        expect(seventhTest()).toBe('seventh');
    });
});

