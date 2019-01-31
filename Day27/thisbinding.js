/* function play(){
    console.log(this);
}

play(); */

let dog = {
    name: "Subash",
    age: 5,
    makeSound(sound){
        console.log(`${this.name} produces ${sound}.`);
    }
}
// dog.makeSound("Bhow");
let makeSound = dog.makeSound.bind(dog);

makeSound("Meow");

setTimeout(()=>dog.makeSound.bind(dog), 3000);