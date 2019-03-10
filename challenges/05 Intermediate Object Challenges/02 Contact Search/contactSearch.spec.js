const func = require('./contactSearch.challenge');

describe('Contact Search requirements',()=>{
 it('returns a value of the object datatype',()=>{
    expect(typeof func('Jose','Garcia') === 'object').toBe(true);
    expect(func() !== null).toBe(true);
 });

 it('contains properties for firstName, lastName, and phoneNumber',()=>{
     let props = ['firstName','lastName','phoneNumber'];
     props.forEach(prop=>{
        expect(func('Jennifer','Lee').hasOwnProperty(prop)).toBe(true);
     }); 
 });

 it('returns the correct data based on the search parameters',()=>{
     let jb = func('Jennifer','Brown');
     expect(jb.firstName).toBe('Jennifer');
     expect(jb.lastName).toBe('Brown');
     expect(jb.phoneNumber).toBe('876-777-8999');
 });

 it('returns "no contact found" if the search parameters do not result in a match',()=>{
     expect(func('Joe','Blow').toLowerCase()).toBe('no contact found');
 });
    
});