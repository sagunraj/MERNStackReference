import React, { Component } from 'react'
export default class Home extends Component {
    navigate = () => {
        this.props.history.push('/about');
    }
    render() {
    return (
      <div className="home">
        {console.log(this.props)}
        <button onClick = {this.navigate}>Navigate to About</button>
      </div>
    )
  }
}
