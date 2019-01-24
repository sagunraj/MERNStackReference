users = [];

class User {
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    getName(){
        return `The name is ${this.name}.`;
    }
}

class Admin extends User {
    constructor(name, password){
        super(name, password);
    }

    showUsers(){
        return users;
    }

    addUser(name, password){
        users.push(new User(name, password));
    }
}

let admin = new Admin("sagun", "sagunkopassword");
console.log(admin.getName());
admin.addUser("Ram", "Bahadur");
admin.addUser("Shyam", "Krishna");
console.log(users);