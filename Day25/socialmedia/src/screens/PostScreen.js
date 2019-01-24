import React, { Component } from 'react'
import Post from '../components/Post';
import Comment from '../components/Comment';
export default class PostScreen extends Component {
    state = {
        post: {},
        comments: []
    }
    async componentWillMount(){
        await this.setState({post: this.props.location.state});
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.state.post.id}`).then(res=>res.json()).then((comments)=>this.setState({comments}));
    }

    render() {
    return (
      <div>
        <Post post = {this.state.post}/>
        <h2>Comments</h2>
         {this.state.comments.map((comment)=><Comment comment={comment}/>)}
      </div>
    )
  }
}
