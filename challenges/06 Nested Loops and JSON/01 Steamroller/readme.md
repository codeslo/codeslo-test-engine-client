## Steamroller
Create a function, **steamroller**, that accepts an array as a parameter. This array will be multidimensional, with an unknown number of arrays inside it. 
**steamroller** should return a single-dimensional array that contains all the values from the parameter array. 

Your solution should *not* use JavaScripts built-in Array.flat method.

```javascript
// Input example
[['apples','peaches'],['broccoli','spinach'],['cheese','yogurt']];

// Output example
['apples','peaches','broccoli','spinach','cheese','yogurt'];

```
#### Requirements
* steamroller should return an array
* the returned array should contain all the values from the parameter array
* the returned array cannot be multidimensional

*Note: stripping the elements out of a multidimensional array and pushing them to a single dimensional array is called **flattening** an array*

