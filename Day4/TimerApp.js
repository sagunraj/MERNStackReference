let minutes = 1;
let seconds = minutes * 60;
let sixty = 59;

const x = setInterval(decrement, 1000);

function decrement() {
    console.clear();
    console.log(minutes - 1 + ":" + sixty--);
    if (sixty == -1) {
        minutes--;
        sixty = 59;
    }
}

setTimeout(() => {
    clearInterval(x);
}, (seconds + 1) * 1000);