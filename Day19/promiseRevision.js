const fruit = ["Apple", "Ball", "Cat"];

const getApple = new Promise((resolve, reject)=>{
    resolve(fruit[0]);
});

console.log("Pineapple");
getApple.then(fruit=>console.log(fruit));

console.log("Jackfruit");