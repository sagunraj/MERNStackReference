const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?", (answer) => {
    console.log(answer);
    rl.close();
});
