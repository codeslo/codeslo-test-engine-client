const testMe = require('./testMe');

describe('testMe functionality',()=>{

    it('is a function',()=>{
        expect(typeof(testMe)).toBe('function');
    });

    it('returns "<word> is the word."',()=>{
        expect(testMe('bird')).toBe('bird is the word.');
    });
});

