const student = document.getElementsByClassName('student');

[...student].forEach(element => {
    element.style.border = "2px dotted red";
});
const shrishma = document.getElementById('shrishma');

// console.log(shrishma.innerText="Go");
shrishma.innerHTML = "<h1>Sachin</h1>";
console.dir(shrishma);

shrishma.style.fontFamily = "Arial";
// console.log(student);

const changeName = () => {
    document.getElementById('button').innerHTML = "New";
}