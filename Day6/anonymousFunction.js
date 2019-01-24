const people = [{
    name: "Shree Kumar",
    age: 99,
    location: "Nepal"
},
{
    name: "Sagun Raj Lage",
    age: 45,
    location: "India"
},
{
    name: "Subash Shrestha",
    age: 50,
    location: "Pakistan"
}];

const showPeopleName = people.forEach(function(person){ // immediately invoked function/anonymous function
    console.log(person.name);
});

const showPeopleNameByMap = people.map((person)=>{
    return person.name;
})

console.log(`This is coming from showPeopleNameByMap: ${showPeopleNameByMap}`);