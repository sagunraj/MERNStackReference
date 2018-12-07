let personObject = {
    name: "Sagun Raj Lage",
    college: "Samriddhi College",
    age: 22,
    _friends: ["Asim", "Subash"],
    isOld: true,
    nextObject: {job: "Developer"}
}

// console.log(personObject.friends[0]); // this will throw an error

// console.log(typeof(personObject['name'])); // if the key of an object begins with an underscore, this should be used

console.log(personObject.nextObject.job);