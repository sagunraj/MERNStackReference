import React, { useState, Fragment} from 'react'

export default function Todo() {
    const [todo, setTodo] = useState([]);
    const addTodo = (e) => {
        e.preventDefault();
        setTodo([...todo, e.target.todo.value]);
    }
  return (
    // fragment
    <>
    <div>
        <form onSubmit = {addTodo}>
            <input type="text" name="todo" placeholder="Input a todo item"/>
            <input type="submit"/>
        </form>
        {todo.map((td)=><div>{td}</div>)}
    </div>
    <p>Hi</p>
    </>
  )
}
