## First Jenny

Create a function, `firstJenny`, that takes **up to** two parameters: an array and, optionally, a number.

The goal is to return the index of the first occurrence of the name "Jenny".

If a number is provided, consider that the "starting index" for your search. Only return the index of the first occurrence of "Jenny" that is equal to or greater than that "starting index."

If "Jenny" is not found in the array (or after the starting index), the function should return `-1`.

If the "starting index" is greater than the length of the array, it should be ignored and the entire array should be searched.

#### Requirements
* `firstJenny` should accept up to two parameters: an array, and an optional number.
* `firstJenny` should return an index value for the first occurrence of the word "Jenny" in the array, or after the starting index, if one is provided.
* `firstJenny` should return `-1` if "Jenny" is not found in the array, or after the starting index, if one is provided.
* `firstJenny` should not use the built-in `Array.indexOf()` method.