let user1 = {
    name: "Sagun",
    age: 25,
    showInfo: function(){
        return `${this.name} is ${this.age} years old.`
    },
    isOld: function(){
        if(this.age<50)
            return "Young";
        else
            return "Old";
    }
}

let user2 = {
    name: "Ram",
    age:60,
    showInfo: function(){
        return `${this.name} is ${this.age} years old.`
    },
    isOld: function(){
        if(this.age<50)
            return "Young";
        else
            return "Old";
    }
}

console.log(user1.showInfo());
console.log(user1.isOld());
console.log(user2.showInfo());
console.log(user2.isOld());