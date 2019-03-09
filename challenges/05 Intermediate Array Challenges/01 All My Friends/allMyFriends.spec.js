const func = require('./allMyFriends.challenge');

describe('All My Friends requirements',()=>{
    it('returns an array',()=>{
        expect(Array.isArray(func())).toBe(true);
    });

    it('has properly formatted names in each element',()=>{
        expect(func().includes('Joe Blow')).toBe(true);
        expect(func().includes('Mary Berry')).toBe(true);
    });

    it('returns an array containing all friend names',()=>{
        expect(func().length).toBe(4);
    });

    it('does not contain any names of relatives',()=>{
        expect(func().includes('Jesse James')).toBe(false);

        expect(func().includes('Annie Oakley')).toBe(false);
    });
    
});