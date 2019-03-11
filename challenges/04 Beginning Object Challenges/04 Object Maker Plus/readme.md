## Object Maker Plus

Create a function `objectMakerPlus` that takes two parameters, a string and a value of any type. `objectMakerPlus` must return an object with a single property with a key equal to the first parameter and that key's value is equal to the second parameter.

#### Requirements
* `objectMakerPlus` accepts two parameters, a string and a value of any type
* `objectMakerPlus` returns an object
* `objectMakerPlus` returns an object with only one property
* The returned object's property should have a key named after the first parameter
* The returned object's property should have a value equal to the second parameter

```javascript
// return value format
console.log(objectMakerPlus("day", "Monday")); // logs { day: 'Monday' };
```