import React from 'react';
import Student from './Student';
import Person from './Person';
import FormComponent from './FormComponent';

class StudentList extends React.Component {
    state = {
        students: [{name: 'Asim', age: 30, roll: 1},
        {name: 'Subash', age: 31, roll: 2},
        {name: 'Sagun', age: 32, roll: 3},
        {name: 'Anika', age: 33, roll: 4},
        {name: 'Praful', age: 34, roll: 5}],
        somename: "",
        someothername: ""
    }

    addStudent(){
        this.setState({
            students: [
                ...this.state.students, {name: "Shrishma", age: 35, roll: 6}
            ]
        })
    }

    deleteStudent(i){
        let studentArr = [...this.state.students];
        let newArr = studentArr.filter((student, index)=> index!==i);
        this.setState({
            students: newArr
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const newStudent = {
            name: e.target.name.value,
            age: e.target.age.value,
            roll: e.target.roll.value
        }
        this.setState({
            students: [...this.state.students, newStudent]
        })
        console.log(this.state.students);
    }

    handleChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div>
                {/* {this.state.students.map((student)=>{
                   return <Student name = {student.name} age = {student.age} roll = {student.roll}/>
                })} */}
                <FormComponent handleSubmit = {this.handleSubmit.bind(this)}/>
                
                {this.state.students.map((student,i)=>{
                   return <Student student = {student} addStudent = {this.addStudent.bind(this)} deleteStudent = {this.deleteStudent.bind(this)} index = {i}/>
                })}
                <br/>
                <input type="text" onChange ={this.handleChange.bind(this)} name="somename" placeholder="Input anything..."/>
                <input type="text" onChange={this.handleChange.bind(this)} placeholder="Enter something else..." name="someothername"/>
                {this.state.somename}
                {this.state.someothername}
            </div>
        )
    }
}

export default StudentList;