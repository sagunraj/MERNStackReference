import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <div style={{padding: "0 20px 20px 20px", border: "1px solid black", marginBottom: "10px", borderRadius: "5px", background: "white", cursor: "pointer"}} onClick = {()=>this.props.showPostDetails(this.props.post.id)}>
        <h3>{this.props.post.id}. {this.props.post.title}</h3>
        <div style={{textAlign: "justify"}}>{this.props.post.body}</div>
      </div>
    )
  }
}

export default withRouter(Post);
