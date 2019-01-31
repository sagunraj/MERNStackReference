import React, { Component } from 'react'

export default class UserDetailsComponent extends Component {
    state = {
        details: {},
    }

    async componentWillMount(){
        if(this.props.location.state){
       await this.setState({details: this.props.history.location.state});
    }
    else {
        this.props.history.replace("/");
    }
}

  render() {
    return (
      <div className = "userdetails">
        <div>
            <img className="img img-fluid" src={this.state.details.avatar_url} alt="avatar-url"/>
        </div>
        <div className="details">
        <h2>User Details</h2><hr/>
            Username: {this.state.details.login}<br/>
            Name: {this.state.details.name}<br/>
            Location: {this.state.details.location}<br/>
            Company: {this.state.details.company}<br/>
            Followers: {this.state.details.followers}<br/>
            Following: {this.state.details.following}<br/>
            Public repos: {this.state.details.public_repos}<br/>
            Member since: {this.state.details.created_at}
        </div>
      </div>
    )
  }
}
