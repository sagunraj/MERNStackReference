import React, { useEffect, useState, Fragment } from 'react'
import People from './people.json';
export default function PeopleComponent() {
    const [name, changeName] = useState("");
    const [people, changePeople] = useState(People.people);
    const [peopleClone] = useState(People.people);
    useEffect(()=>{
        const regex = new RegExp(name, 'gi');
        changePeople(
        people.filter(person=>{
            return regex.test(person.name);
        })
        );
    }, [name]);
  return (
      <>
    <div>
      <input type="text" value={name} onChange = {e=>{changeName(e.target.value);}}/>
    </div>
    {people.map((person,i)=>{
       return <div key={i}>{person.name}</div>
    })}
    </>
  )
}
