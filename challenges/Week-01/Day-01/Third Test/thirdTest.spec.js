const thirdTest = require('./thirdTest.challenge');

describe('Third Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(thirdTest)).toBe('function');
    });

    it('returns "<word> is the word."',()=>{
        expect(thirdTest()).toBe('third');
    });
});

