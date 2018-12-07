class Show {
    constructor() {
        this.name = "Asim";
    }
    showDetails(name, age, location) {
        if (this.name == name) {
            console.log(true);
        }
        else {
            console.log(false);
        }
        // console.log(name,age,location);
    }
}

let whatever = new Show();

whatever.showDetails('SRL', 22, "Bhaktapur");