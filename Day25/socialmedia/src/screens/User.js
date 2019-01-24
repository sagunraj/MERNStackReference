import React, { Component } from 'react'

export default class User extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>this.setState({users: data}));
    }

    showDetails = (id) => {
        const newArr = [...this.state.users];
        const currentUser = newArr.find((user)=>user.id === id);
        this.props.history.push('/user-details', currentUser);
    }

  render() {
    return (
      <div className="users">
        {this.state.users.map((user)=><UserList user={user} showDetails = {this.showDetails} />)}
      </div>
    )
  }
}

const UserList = (props) => {
    return <div className="userlist" onClick={()=>props.showDetails(props.user.id)}>
        <div>{props.user.name}</div>
        <div>@{props.user.username}</div>
    </div>
}
