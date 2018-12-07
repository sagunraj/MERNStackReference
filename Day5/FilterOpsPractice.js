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

const filteredArray = personArray.filter((person) => {
    if (person.age > 21) {
        return true;
    }
    else {
        return false;
    }
});
console.log(filteredArray);