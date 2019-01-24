class Calculator {
    constructor() {
        this.result = 0;
    }
    add(a, b) {
        return this.result = a + b;
    }
    subtract(a, b) {
        return this.result = a - b;
    }
    multiply(a, b) {
        return this.result = a * b;
    }
    divide(a, b) {
        return this.result = a / b;
    }
}

let calculate = new Calculator();
calculate.add(3, 4);
console.log(calculate.result);
calculate.subtract(3, 4);
console.log(calculate.result);
calculate.multiply(3, 4);
console.log(calculate.result);
calculate.divide(3, 4);
console.log(calculate.result);