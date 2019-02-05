import React, {useState, Fragment, useEffect} from 'react'

export default function Counter() {
const [name, changeName] = useState("Subash");
const [surname, changeSurname] = useState("Shrestha")
useEffect(()=>{ // componentDidMount() in functional component
    // setInterval(()=>{changeName(new Date().getSeconds())}, 1000);
    console.log({name})
    return () => {
        // console.log("Unmount");
    }
}, [name])
  return (
      <>
    <div>
      <input type="text" value = {name} onChange={e=>{changeName(e.target.value)}}/>
      <input type="text" value = {surname} onChange={e=>{changeSurname(e.target.value)}}/>

    </div>
    <div>Hello I am {name} {surname}.</div>
    </>
  )
}
