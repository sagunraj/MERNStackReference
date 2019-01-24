import React from 'react';
import Person from './Person';

class State extends React.Component {
    state = {
        name: "Smart",
        class: 14,
        roll: 2,
        toggle: false
    }

    changeName(){
        if(this.state.toggle){
        this.setState({
            name: "Rama",
            toggle: false
        })}
        else{
            this.setState({
                name: "Smart",
                toggle: true
            })
        }
    }
    render(){
        return(<div>
            {this.state.toggle?<Person/>:""}
            <button onClick={this.changeName.bind(this)}>Change Name</button>
            {`Hello I am state
             ${this.state.name}
             ${this.state.class}
             ${this.state.roll}`}
        </div>);
    }
}

export default State;