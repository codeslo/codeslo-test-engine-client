const fourth = require('./fourthTest.challenge');

describe('Fourth Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(fourthTest)).toBe('function');
    });

    it('returns "<word> is the word."',()=>{
        expect(fourthTest()).toBe('fourth');
    });
});

