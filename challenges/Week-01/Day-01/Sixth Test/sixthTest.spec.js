const sixthTest = require('./sixthTest.challenge');

describe('Sixth Test functionality',()=>{

    it('is a function',()=>{
        expect(typeof(sixthTest)).toBe('function');
    });

    it('returns sixth ',()=>{
        expect(sixthTest()).toBe('sixth');
    });
});

