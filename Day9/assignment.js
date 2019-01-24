const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstInput = [];
let secondInput = [];
let array1 = [];
let array2 = [];
let array3 = [];
rl.question("Input the first array of 5 numbers:", (answer)=>{
    firstInput = answer.split(",");
    array1 = firstInput.map(element=>Number(element));
    rl.question("Input the second array of 5 numbers:", (answer)=>{
        secondInput = answer.split(',');
        array2 = secondInput.map(element=>Number(element));
        rl.close();
        console.log(...array1);
        console.log(...array2);
        for(let i=0, j=0; i<array1.length, j<array2.length; i++, j++){
            array3.push(array1[i]);
            array3.push(array2[j]);
        }
        for(j=0; j<array3.length; j=j+2){
            console.log(array3[j] + " " + array3[j+1]);
        }
    });
});
