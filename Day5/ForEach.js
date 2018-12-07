let personObject = [{
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

/* for(let i=0; i<personObject.length; i++){
    console.log(personObject[i].name);
} */

personObject.forEach((element,id) => {
    console.log(`S.N.: ${id+1} \n Name: ${element.name} \n Age: ${element.age} \n Location: ${element.location}`);
});