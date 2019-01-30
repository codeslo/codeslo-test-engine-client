const testMe = require('../../../../challenges/Week-01/Day-01/testMe');

describe('testMe functionality',()=>{
    it('returns "<word> is the word."',()=>{
        expect(testMe('bird')).toBe('bird is the word.');
    });
});

