/* const x = setInterval(() => {
    console.log("Visual Studio Code is GOD!");
}, 1000);

setTimeout(() => {
    clearInterval(x);
}, 5000); */

const cfonts = require('cfonts');
const chalk = require('chalk')
setInterval(() => {
    let d = new Date();
    console.clear();

    cfonts.say(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds(),{font:'block', colors: ["cyan"]});
}, 1000);

