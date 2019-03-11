## New Employee
Create an object constructor called **addEmployee**. **addEmployee** should accept an array as a parameter in the format below. The employee data in the array should be used by the constructor to create an object with the following properties: firstName, lastName, department, and jobTitle.

*Array Format*
```javascript
[first name, last name, department, job title];
```

*Sample function call (used by test specs)*
```javascript
let employee1 = new addEmployee(['Jim','Stevens','Marketing','Product Manager']);
```

*Expected value of employee1 after function call (note: property names must match exactly)*
```javascript
{
    FirstName:'Jim',
    LastName:'Stevens',
    Department:'Marketing',
    JobTitle:'Product Manager'
}
```

#### Requirements
* addEmployee should be an object constructor
* An instance of addEmployee should be an object with all the properties described above.
* An instance of addEmployee should have the correct values assigned to each property, based on the described format of the parameter array