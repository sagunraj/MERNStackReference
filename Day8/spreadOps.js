let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr);


let school = {
    name: "GES",
    location: "Bhaktapur"
};

let student = {
    stdname: "Ram",
    roll: 2
};

let combined = {...school, ...student};

console.log(combined);


