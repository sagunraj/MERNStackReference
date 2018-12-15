const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let firstName = [];
let secondName = [];
let arr = [];
let x;
rl.question("Enter the first name:", (answer) => {
    firstName = answer.split("");
    rl.question("Enter the second name:", (answer) => {
        secondName = answer.split("");
        rl.close();
        if (firstName.length > secondName.length) {
            for (let i = 0; i < firstName.length; i++) {
                if (firstName[i] === secondName[i]) {
                    arr.push(2);
                }
                else if (firstName[i] !== secondName[i]) {
                    if (i > secondName.length-1) {
                        arr.push(1);
                    }
                    else{ 
                        arr.push(1, 1);
                    }

                }

            }
        }
        else {
            for (let i = 0; i < secondName.length; i++) {
                if (firstName[i] === secondName[i]) {
                    arr.push(2);
                }
                else if (firstName[i] !== secondName[i]) {
                    if (i > firstName.length-1) {
                        arr.push(1);
                    }
                    else{ 
                        arr.push(1, 1);
                    }

                }
    
            }
        }
        if (arr.length % 2 == 0) {
            evenCalc(arr);
        }
        else {
            for (let j = 0, k = arr.length - 1; j <= Math.floor(arr.length / 2) - 1, k >= Math.ceil(arr.length / 2); j++ , k--) {
                if (j==k) {
                    break;
                }
                x = arr[j] + arr[k];
                arr.splice(j, 1, x);
                arr.splice(-1, 1);
            }
            console.log(arr);
            evenCalc(arr);
        }

        function evenCalc(arr){
            for (let j = 0, k = arr.length - 1; j <= (arr.length / 2) - 1, k >= (arr.length / 2); j++ , k--) {
                if (j == k) {
                    break;
                }
                x = arr[j] + arr[k];
                arr.splice(j, 1, x);
                arr.splice(-1, 1); 
            }
            x = arr[0] + arr[2];
            arr.splice(0, 1, x);
            arr.splice(-1, 1);
            console.log(arr.join("") + "%");
        }

    });
});