import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    name: 'SRL',
    showComponent: true,
  }
  componentWillMount(){ // this is called before render function is executed
    console.log("This is called before component mounts.");
  }

  componentDidMount(){ // this is called after render function is called
    console.log("This is called after component mounts.")
  }

  updateState(){
    this.setState({
      name: 'Sagun'
    });
  }

  toggleComponent(){
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

  render() {
    console.log("Componented mounted.");
    return (
      <div className="App">
        {this.state.showComponent && <Person name={this.state.name}/>}
        <Button color="primary" variant="contained" onClick={this.updateState.bind(this)}>
          Update
        </Button>
        <Button color="secondary" variant="contained" onClick = {this.toggleComponent.bind(this)}>
        Toggle
        </Button>
      </div>
    );
  }
}

export default App;
