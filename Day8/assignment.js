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

let output = [];

array1.forEach(element => {
    array2.forEach(elem=>{
        if(element.id == elem.id){
         output.push({id: element.id, name: element.name, age: elem.age});
        }
    });
});

console.log(output);
// expected output array = [{id: 1, name: "Ram", age: 100}, {id: 2, name: "Shyam", age: 200}, {id: 3, name: "Hari", age: 300}]