const wait = new Promise((resolve, reject)=>{
   /*  setTimeout(()=>{
        resolve("I love momo");
    }, 3000);
    reject("Error has been encountered.");
 */

//     resolve("I love momo.");
// reject("Error has been encountered.");
resolve(1);

});
console.log("Before wait");
// wait.then(data=>console.log({data})).catch(e=>console.log({e})).finally(()=>console.log("Finally executed."));

console.log("After wait");

// Async-Await

const getData = async () => {
    try{
    let data = await wait;
    if(data){
        console.log(data);
    }
    else{
        throw new Error("Unexpected data");
    }
    }
    catch(e){
        console.log(e);
    }
}

getData();