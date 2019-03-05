const func = require('./findPizza.challenge');

describe('Search Me requirements',()=>{
    it('returns true if the array passed to it contains "pizza"',()=>{
        expect(func(['corn','tacos','pizza','apples'])).toBe(true);
    });

    it('returns false if the array passed to it does not contain "pizza"',()=>{
        expect(func(['broccoli','green beans','oatmeal','french fries'])).toBe(false);
    });
    
});

