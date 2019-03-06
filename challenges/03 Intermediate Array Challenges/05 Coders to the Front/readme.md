## Coders to the Front

Create a function `codersFirst` that takes an array as a parameter.

`codersFirst` should return an array that contains the elements of the original array, but the string "Coders" has moved from it's original position to the first position in the array.

If "Coders" is not in the array, the function should add "Coders" to the front of the array.

``` javascript
codersFirst(["Doctors","Lawyers","Coders"]); // should return ["Coders","Doctors","Lawyers"]
codersFirst(["Doctors","Lawyers","Bankers"]); // should return ["Coders","Doctors","Lawyers","Bankers"]
```

#### Requirements
* `codersFirst` should take an array as a parameter
* `codersFirst` should return an array
* The array that is returned should contain the elements of the array parameter with "Coders" moved to the front of the array.

#### Bonus Challenge
* Try to do the same challenge, but without using the built-in `Array.unshift()` method.
