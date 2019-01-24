const Number = require('./Number');
let i;
let result = [];
function findPrime(Number){
    Number.forEach(element=>{
        for(i=2; i<element; i++){
            if(element%i == 0){
                return false;
            }
        }
        if (element>1){
            result.push(element);
        }
    });
}

findPrime(Number);
console.log(result);