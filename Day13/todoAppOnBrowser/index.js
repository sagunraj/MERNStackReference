const todoForm = document.getElementById('todoForm');
const todo = document.getElementById('todo');


const addTodo = (e) => {
    e.preventDefault();
    const ul = document.querySelector('ul');
    const li = document.createElement('li'); // create a new li element
    const text = document.createTextNode(todo.value);
    const reg = /\s/;
    if(reg.test(e.target.todo.value)==true || e.target.todo.value==""){
        window.alert("Please enter some text before clicking on Submit.");   
    }
    else {
        li.appendChild(text); // add text content within <li> </li> 
        ul.appendChild(li); // add li within <ul> </ul>
        todo.value = "";
    }
}

todoForm.addEventListener('submit', addTodo);
