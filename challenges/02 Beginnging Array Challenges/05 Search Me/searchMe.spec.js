const func = require('./searchMe.challenge');

describe('Search Me requirements',()=>{
    let result = func(['apple','candy','kittens'],'kittens');
    let result2 = func([1,2,3,4,5],6);
    it('returns the correct index position if the array contains the search term',()=>{
        expect(result).toBe(2);
    });

    it('returns -1 if the array does not contain the search term',()=>{
        expect(result2).toBe(-1);
    });
    
});

