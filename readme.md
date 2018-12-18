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
Day 8
------------------------------------------------------------------------------------
Object Destructuring

"When an array or object (non primitive datatypes) is assigned to a variable, its reference is copied to the variable, not the data. Example is in `Day8/arrayCopying.js`."

Rest and Spread Operators

Assignment
```
let array1 = [
{id: 1, name: "Ram"},
{id: 2, name: "Shyam"},
{id: 3, name: "Hari"}
];
let array2 = [
{id: 1, age: 100},
{id: 2, age: 200},
{id: 3, age: 300}
];
// expected output array = [{id: 1, name: "Ram", age: 100}, {id: 2, name: "Shyam", age: 200}, {id: 3, name: "Hari", age: 300}]
```

------------------------------------------------------------------------------------
Day 9
------------------------------------------------------------------------------------
Modules in Node JS: Module Export and Import, readline, rl.on (Event), rl.setPrompt, rl.prompt
firstinput: 1,2,3,4,5
secondinput: 6,7,8,9,10

set them into array1 and array2 respectively. Then, display output as 
1 2 3 4 5
6 7 8 9 10

1 6 <br/>
2 7 <br/>
3 8 <br/>
4 9 <br/>
5 10 <br/>

------------------------------------------------------------------------------------
Day 10
------------------------------------------------------------------------------------
FileSystem (fs): 

```
fs.writeFile("filename/path", "content", callback);
fs.appendFile("filename/path", "content", callback);
fs.readFile("filename/path", callback);
fs.rename("oldfilename", "newfilename", callback);
fs.unlink("filename", callback);
fs.readFileSync();
fs.writeFileSync();
```

#### Assignment
Show a menu in console with the following items:
1. Insert todo
	- Todo name
	- Todo description
2. Show all todo
3. Delete todo (Delete the todo with number)
4. Exit

### NPM
- Initialize Node application: ``` npm init ```
- Fill up all the details asked and exit with 'Yes' at last
- Install packages in the application by typing: ``` npm install --save <packagename> ```

------------------------------------------------------------------------------------
Day 11
------------------------------------------------------------------------------------
### NPM
- Install package globally in the machine: ``` npm install -g <packagename> ```
- Uninstall locally installed package: ``` npm uninstall --save <packagename> ```
- Uninstall globally installed package: ``` npm uninstall -g <packagename> ```

#### Underscore package installation from NPM
#### Facebook-Chat-API package installation from NPM

Assignment:
Find a package for Twitter search.