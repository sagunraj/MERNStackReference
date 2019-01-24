const personDetails = {
    name: "Sagun",
    grade: 10,
    age: 20,
    friends:["a", "b", "c"]
}

// let {name} = personDetails; // let name = personDetails.name; 

let {name, grade, age} = personDetails;
console.log(name, grade, age);