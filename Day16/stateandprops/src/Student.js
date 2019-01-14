import React from 'react';

const Student = (props) => {
    return (
        <div>
            <span>Name: {props.student.name}</span><br/>
            <span>Age: {props.student.age}</span><br/>
            <span>Roll No.: {props.student.roll}</span>
            <button onClick = {props.addStudent}>Add Student</button>
            <button onClick = {()=>props.deleteStudent(props.index)}>Delete Student</button>
        </div>
    )
}

export default Student;