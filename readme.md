Day 1
------------------------------------------------------------------------------------
```
console.log("Hello world!");
console.warn("Hello, I am log!");
console.error("Error!");
console.table([{name:"Sagun", Gender:"male"}, {name: "Subash", Gender:"male"}]); // suitable for debugging purposes
```
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
```
Math.min(args)
Math.max(args)
Math.ceil()
Math.floor()
Math.PI
Math.random()
Math.round()
```	

Date
```
Const d = new Date();
d.getDay();
d.getMinutes();
d.getDay();
d.getHours();
d.getSeconds();
d.getMonth();
d.getYear();
```
------------------------------------------------------------------------------------
Day 5
------------------------------------------------------------------------------------
Higher Order Functions of Arrays:
forEach(), map(), filter() -> the elements that return true values are stored in new array, sort()

------------------------------------------------------------------------------------
Day 6
------------------------------------------------------------------------------------
```
reduce(), some(), every(), includes(), find()
```

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

------------------------------------------------------------------------------------
Day 12
------------------------------------------------------------------------------------
#### JavaScript in Browser

`window` is a global object.
`console.dir(window);`
`window.alert("Hello world");` However, you can just write `alert()` since window is a global object.
`prompt("Are you a boy?");`
`confirm("Am I okay?");`

id and class

------------------------------------------------------------------------------------
Day 13
------------------------------------------------------------------------------------
Todo App with Vanilla JS <br/>
Calculator App with Vanilla JS

------------------------------------------------------------------------------------
Day 14
------------------------------------------------------------------------------------
### React JS
- Introduced by Facebook.
- Component Based: Components can be reused for multiple number of times.
- Virtual DOM: Makes it faster.
- Two-way data binding.

#### First React Application
- Install `create-react-app` CLI package globally by using `npm install -g create-react-app`.
- Create a new React application by typing `create-react-app <application-name>`.

#### JSX
- JSX enables the use of HTML within JavaScript code.

#### Assignment:
- Create a project with three components: Header, Section and Footer.
- Within Section, add two components: Headline and News.
- Within the Footer, add two components: Add and Contact.

------------------------------------------------------------------------------------
Day 15
------------------------------------------------------------------------------------
#### Class Component:
- A class is defined, extending `Component`, and `render()` method is used to render JSX.
- Logical operations like method definition, event actions are written in class components.
```
class App extends React.Component {
	render(){
		return (
			<div> Hello </div>
		)
	}
}
```

#### Functional Component:
- A normal JavaScript function that renders JSX.
- The representation of various components like Button, Textbox etc. (that need to be displayed but don't do any logical operations) is done in functional components.
```
const App = () => { return (<div>Hello</div>) }
```

<em>Notes about JSX usage:
- To include JavaScript code in JSX, include the JavaScript code within { } in JSX. However, for-loops, if else etc. cannot be used here.
For example: 
```
const person = "Ram";
const Logo = () => {
	return (<div>
	This is the answer: {2+2} {person}
	</div>)
}
```
- In JSX, HTML classes are renamed as `className`.
- Import a CSS file into a component by writing `import './index.css';`.
- To write inline CSS, the syntax will be something like: `<input type="text" style={{borderRadius:"10px"}}/>`. In other words, styles should be added by making objects.
</em>

------------------------------------------------------------------------------------
Day 16
------------------------------------------------------------------------------------
#### State:
- An object that holds the data that belong to a component.
- The objects present in `state` of a component are accessed by using `this.state`. 
- `this.setState({});` is used to update the values in a state.

<em>Quick tip: If you use `{condition && component}`, the component statement will execute only when condition is `true`.</em>

#### Props:
- Props enable us to send data from parent component to child component.
- For example, in `<Student name = 'Ram'/>` the prop is `name` which is sent to `Student` component.

------------------------------------------------------------------------------------
Day 17
------------------------------------------------------------------------------------
#### Assignment:
##### List of Employees App
- Two buttons: Add Employee and Delete Employee
- Add Employee button clicked means a form asking for Name, Address and Salary is displayed.
- Employee list with all the details should be shown.
- Clicking Delete Employee button displays buttons on all the items in Employee list.
- When one of the Delete buttons is clicked, a confirmation modal is displayed and if Yes is pressed, the item is deleted.
- A dropdown that allows the items to be sorted on the basis of Name or Salary should be present.

------------------------------------------------------------------------------------
Day 18
------------------------------------------------------------------------------------
#### Promise:
- Promise is a method that creates and executes asynchronous tasks.
- Generally, when there is a sequence of instructions, it stays in the call stack. But if there is an asynchronous task, it first stays in the event loop, then waits for the tasks in the call stack to be completed first and then finally gets executed.
- Promise takes two parameters: `resolve` and `reject`. If `resolve` is found, `then` function is executed and if `reject` is found, `catch` is executed. After all the tasks in `then` and `catch` are performed, `finally` is executed.

- Async-await waits for the asynchronous tasks to be executed normally along with the normal tasks.

------------------------------------------------------------------------------------
Day 19
------------------------------------------------------------------------------------
#### Async Await and Promise Revision

------------------------------------------------------------------------------------
Day 20
------------------------------------------------------------------------------------
#### Use of API using `fetch`

------------------------------------------------------------------------------------
Day 21
------------------------------------------------------------------------------------
#### Lifecycle:
- `componentWillMount()`: This method is called before the `render()` method is called. Appropriate to call APIs, since it will pull the required data before the component is rendered on the screen.
- `componentDidMount()`: This method is called after the `render()` method is called, or after the component is mounted.
- `componentDidUpdate()`: This method is called after the component has been updated.
- `componentWillUnmount()`: This method is called before the component is going to be unmounted.
- `componentWillReceiveProps(prevProp, nextProp)`: This method is called when the component receives any new props. `prevProp` has the props that were received before the component was updated and `nextProp` has the new props received after updating of the component. (Deprecated, since `componentDidUpdate()` is able to do the same thing.)

<i>Quick tip: Create anonymous arrow function to get rid of the hassle of having to use `bind(this)` in method references.</i>

------------------------------------------------------------------------------------
Day 22
------------------------------------------------------------------------------------
#### Children:
- It is a special type of prop that is used to pass children elements for rendering.

#### Higher Order Component:
- It is a special function that takes a component as an argument and performs manipulation on that and returns a new component.

------------------------------------------------------------------------------------
Day 22
------------------------------------------------------------------------------------
#### MovieDB app