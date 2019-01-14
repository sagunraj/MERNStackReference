console.log("Hey!");

const newTask = () => {
let i = 0;

  while (i < 10000000000000) {
    i++;
  }
  return i+"Done";
};
const task = new Promise((resolve, reject) => {
  resolve(()=>{
     return()=>{ let i =0;
      while(i<100000000){
        i++;
      }}
  });
});

task.then(data => console.log(data));
console.log("00");
