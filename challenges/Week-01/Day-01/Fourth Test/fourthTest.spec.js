const fourthTest = require('./fourthTest.challenge');

describe('Fourth Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(fourthTest)).toBe('function');
    });

    it('returns fourth',()=>{
        expect(fourthTest()).toBe('fourth');
    });
});

