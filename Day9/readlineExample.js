const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/* rl.question("Input a number:\n", (answer)=> {
    let x = 0;
    x = Number(answer)*100;
    console.log(x);
    rl.close();
});
 */

 rl.on('line', (answer)=> {
    console.log(answer);
    rl.close();
});
