/* const add = (a,b)=>{
    return a+b;
}
 */

const add = (a,b)=>a+b;
console.log(add(4,5));


// 1. Arrow function मा parameter/argument एउटा मात्र छ भने Bracket is not needed.
let name = "Ram";
const greeting = name => console.log(`Hello ${name}!`);
greeting(name);

// 2. Function ले सिधै return गर्दै छ भने curly braces '{}' are not needed.
let age = 22;
const showAge = age => console.log(`Your age is ${age}`);
showAge(age);

// 3. Logicless multiline statements return गर्नको लागि parentheses use गर्ने. No need to add 'return' keyword.
const makeObject = (name, age, location) => (
    {
        name:name,
        age: age,
        location:location
    }
);
console.log(makeObject("SRL", 1, "Bhaktapur"));