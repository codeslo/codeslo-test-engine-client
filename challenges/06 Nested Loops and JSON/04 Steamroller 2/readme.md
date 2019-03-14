## Steamroller 2
*Note: this is a tough challenge that should be considered optional. It involves ideas and techniques we didn't cover in class, such as recursion.*

Create a function called **steamroller2** that takes in a multi-dimensional array as a parameter and returns a flattened array. The parameter array will be a mix of numbers and arrays and may contain arrays nested multiple levels deep. 

Your flattened array should not contain duplicates of any number, and should be sorted in numerical order.

Your solution should *not* use the built-in Array.flat method.

```javascript
// Sample input
[1,3,10[[4,13,6],5],[6,7,8,1,2,[[3,[6,7]],[9,[[10],11]],[[[[[13]]]]],12,[12],12]]];

// same output
[1,2,3,4,5,6,7,8,9,10,11,12,13];