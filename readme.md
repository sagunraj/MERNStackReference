Day 1
------------------------------------------------------------------------------------
console.log("Hello world!");
console.warn("Hello, I am log!");
console.error("Error!");
console.table([{name:"Sagun", Gender:"male"}, {name: "Subash", Gender:"male"}]); // suitable for debugging purposes
------------------------------------------------------------------------------------
Day 2
------------------------------------------------------------------------------------
Object: {key:value} -> value may be string, boolean, number, array, object, function
------------------------------------------------------------------------------------
Day 3
------------------------------------------------------------------------------------
JavaScript Array Methods: toString(), join() -> acts like toString() but you can add a separator that separates the array elements, pop(), push(), shift() -> removes the first array element and shifts other elements to lower index, unshift() -> adds new element at the beginning of the array, splice(fromIndex, replaceIndices, values) -> add new elements inside certain index of array, concat(), slice(1) -> skips the first element and creates a new array by slicing out a piece of the original array, sort(), reverse()

JavaScript String Methods: length, charAt(), charCodeAt() -> returns ASCII value of the character code in the given index, indexOf(), toUpperCase(), toLowerCase(), substring(), split(), replace(), search(), concat(), trim() -> similar to sanitize() in PHP, valueOf(), startsWith()

Tasks:
	• Given an array of numbers, write a function to find the second maximum element in the array.
	• Given an array of names, write a function to check whether the element provided exists in the array.
------------------------------------------------------------------------------------
Day 4
------------------------------------------------------------------------------------
Math	
Math.min(args)
Math.max(args)
Math.ceil()
Math.floor()
Math.PI
Math.random()
Math.round()	

Date
Const d = new Date();
d.getDay();
d.getMinutes();
d.getDay();
d.getHours();
d.getSeconds();
d.getMonth();
d.getYear();
------------------------------------------------------------------------------------
Day 5
------------------------------------------------------------------------------------
Higher Order Functions of Arrays:
forEach(), map(), filter() -> the elements that return true values are stored in new array, sort()
------------------------------------------------------------------------------------
Day 6
------------------------------------------------------------------------------------
reduce(), some(), every(), includes(), find()
------------------------------------------------------------------------------------
Day 7
------------------------------------------------------------------------------------
Objects and OOP, Inclusion of function in objects, Class in ES5 and ES6, inheritance 

Assignment:
Make a class called 'Calculator' with methods add(a,b), subtract(a,b), multiply(a,b), divide(a,b) then store the result in variable result.
------------------------------------------------------------------------------------
