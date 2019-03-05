const func = require('./getInLine.challenge');

describe('Get in Line requirements',()=>{
    let result = func([1,2,3,4],5);
    let result2 = func(['apple','banana','pear'],'tomato');
    it('returns an array equal to the first parameter, with the second parameter added to the end of the array.',()=>{
        expect(result).toEqual([1,2,3,4,5]);
    })

    it('returns another array equal to the first parameter, with the second parameter added to the end of the array.',()=>{
        expect(result2).toEqual(['apple','banana','pear','tomato']);
    });
    
});

