/* function Animal(name, age) { // this is a class created on ES5
    this.age = age;
    this.name = name;
    this.makeSound = function () {
        return `${this.name} made a sound.`;
    }
} */

class Animal {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    makeSound(){
        return `${this.name} made a sound.`;
    }
}

let Dog = new Animal('dog', 20);
console.log(Dog.makeSound());

let Cat = new Animal('cat', 10);
console.log(Cat.makeSound());