const ninthTest = require('./ninthTest.challenge');

describe('ninthTest functionality',()=>{

    it('is a function',()=>{
        expect(typeof(ninthTest)).toBe('function');
    });

    it('returns ninth',()=>{
        expect(ninthTest()).toBe('ninth');
    });
});

