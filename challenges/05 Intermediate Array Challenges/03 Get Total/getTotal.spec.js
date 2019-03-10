const func = require('./getTotal.challenge');

describe('Get Total requirements',()=>{

    it('returns a number',()=>{
        expect(typeof func()).toBe('number');
    });

    it('returns the correct total',()=>{
        
        expect(func()).toBe(24.86);
    });
    
});