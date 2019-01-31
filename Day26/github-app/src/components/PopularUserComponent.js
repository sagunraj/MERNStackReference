import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class PopularUserComponent extends Component {
  state = {
    data: {}
  }

  handleClick = async (login) => {
    await fetch(`https://api.github.com/users/${login}`).then(res=>res.json()).then(data=>this.setState({data}));
    await this.props.history.push("/user-details", this.state.data);
  }

  render() {
    return (
      <div className = "user" onClick={()=>this.handleClick(this.props.user.login)}>
      <img src = {this.props.user.avatar_url} alt="user_avatar"/>
      <h4>{this.props.user.login}</h4>
  </div>
    )
  }
}

export default withRouter(PopularUserComponent);