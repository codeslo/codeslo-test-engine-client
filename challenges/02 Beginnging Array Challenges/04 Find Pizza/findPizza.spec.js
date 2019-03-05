const func = require('./findPizza.challenge');

describe('Search Me requirements',()=>{
    it('returns true if the array passed to it contains "pizza"',()=>{
        expect(func(['pizza'])).toBe(true);
    });

    it('returns false if the array passed to it does not contain "pizza"',()=>{
        expect(func(['broccoli'])).toBe(false);
    });
    
});

