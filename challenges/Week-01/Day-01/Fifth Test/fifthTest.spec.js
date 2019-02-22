const fifthTest = require('./fifthTest.challenge');

describe('Fifth Challenge functionality',()=>{

    it('is a function',()=>{
        expect(typeof(fifthTest)).toBe('function');
    });

    it('returns fifth',()=>{
        expect(fifthTest()).toBe('fifth');
    });
});

