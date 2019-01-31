import React, { Component } from 'react'
import PopularUserComponent from './PopularUserComponent';
import Spinner from '../spinner.gif';

export default class HomeComponent extends Component {
  state = {
    popular_users: [],
    loading: false
  }
  componentWillMount(){
    this.setState({loading:true})
    fetch("https://api.github.com/search/users?q=%22%22+repos:%3E1+followers:%3E1&per_page=100", {
      headers: new Headers({
        'Authorization': "token 626a617bee4664bf74dd58a286b2660e65820164"
      }) 
    }).then((res)=>res.json()).then((popular_users)=>this.setState({popular_users: popular_users.items, loading: false}))
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
      <h1 style={{marginTop: "0.5em"}}>Popular Users</h1>
      <hr/>
      <div className = "user-card">
      {this.state.loading?<img src={Spinner}/>:this.state.popular_users.map((user)=>{
        return <PopularUserComponent user = {user}/>
      })}
      </div>
      </div>
    )
  }
}
