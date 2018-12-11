function User(){
    this.loggedIn = false;
    this.login = function(){
        this.loggedIn = true;
        return this.loggedIn;
    }
    this.logout = function(){
        this.loggedIn = false;
        return this.loggedIn;
    }
    this.status = function(){
        return this.loggedIn;
    }
}

let user = new User();
console.log(`The user's current login status is: ${user.status()}.`);
user.login()
console.log(`Login process initiated.`);
console.log(`The user's current login status is: ${user.status()}.`);
user.logout();
console.log(`Logout process initiated.`);
console.log(`The user's current login status is: ${user.status()}.`);

