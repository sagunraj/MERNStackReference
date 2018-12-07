// Given an array of names, write a function to check whether the element provided exists in the array.

let nameArr = ["Ram", "Shyam", "Hari", "Om", "Shiva", "Krishna", "Jay", "Gopal"];
let searchedName = "Shyam";

// console.log(nameArr.includes(searchedName));

function searchName(searchedName) {
    let result = nameArr.indexOf(searchedName);

    if (result != -1) {
        console.log(`${searchedName} is present in the array.`);
    }
    else {
        console.log(`No match found!`);
    }
}

searchName(searchedName);