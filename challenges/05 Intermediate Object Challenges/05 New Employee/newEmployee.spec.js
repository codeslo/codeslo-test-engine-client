const func = require('./newEmployee.challenge');

describe('New Employee requirements',()=>{
    let employee1 = new func(['Joe','Blow','Sales','Technical Sales Engineer']);
    let employee2 = new func(['Mary','Berry','Engineering','Senior Manager']);
    
    it('is an object constructor',()=>{
        expect(typeof employee1).toBe('object');
        expect(employee1).not.toBe(null);

    });

    it('creates an instance with the correct properties',()=>{
        let props = ['FirstName','LastName','Department','JobTitle'];
        props.forEach(prop=>{
            expect(employee1.hasOwnProperty(prop)).toBe(true);
            expect(employee2.hasOwnProperty(prop)).toBe(true);
        });
    });

    it('creates an instance with the correct values assigned to each property',()=>{
        expect(employee1.FirstName).toBe('Joe');
        expect(employee2.LastName).toBe('Berry');
        expect(employee1.Department).toBe('Sales');
        expect(employee2.JobTitle).toBe('Senior Manager');
    });
});