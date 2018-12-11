let personArray = [{
    name: "Sagun",
    age: 22,
    location: "Bhaktapur",
    friends: ["Ram", "Shyam", "Hari"]
},
{
    name: "Ram",
    age: 21,
    location: "Kathmandu",
    friends: ["Krishna", "Kumar", "Harry"]
},
{
    name: "Sugam",
    age: 20,
    location: "Lalitpur",
    friends: ["John", "Joshua", "Rahul"]
},
{
    name: "Sandhya",
    age: 26,
    location: "Pokhara",
    friends: ["Bahadur", "Raj", "Sita"]
},
{
    name: "Bhakta",
    age: 30,
    location: "Chitwan",
    friends: ["Lal", "Sam", "Adi"]
},];

const everyResult = personArray.every((person)=>{ // returns true only if all the elements of the array fulfill the condition
    return person.age>20;
});

console.log(everyResult);