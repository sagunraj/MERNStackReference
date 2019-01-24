import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class UserDetails extends Component {
    state = {
        user: {
            address: {
            }
        }
        
    }
    componentDidMount(){
        console.log(this.props);
        if(this.props.location.state){
            this.setState({user:this.props.location.state});
        }
        else {
            this.props.history.replace('/');
        }
    }
    
  render() {
    return(
      <div className="userdetails">
            <div>Name: {this.state.user.name}</div>
            <div>Username: @{this.state.user.username}</div>
            <div>Email: {this.state.user.email}</div>
            <div>Street: {this.state.user.address.street}</div>
            <div>City: {this.state.user.address.city}</div>
      </div>
    )
  }
}

export default withRouter(UserDetails);
