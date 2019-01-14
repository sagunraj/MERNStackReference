const wait = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Hi!"), 3000);
});

/* console.log("Before");
wait.then(data=>console.log(data));
console.log("After"); */

const greeting = async () => {
    console.log("Before");
    const greet = await wait;
    console.log("After");
    console.log(greet);
}

greeting();