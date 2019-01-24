import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import Post from '../components/Post';
class UserDetails extends Component {
    state = {
        user: {
            address: {
            }
        },
        posts: []
        
    }
    async componentDidMount(){
        if(this.props.location.state){
        await this.setState({user:this.props.location.state}); // pause until state has been set
        }
        else {
            this.props.history.replace('/');
        }
        await this.loadPosts(this.state.user.id);
    }
    
    loadPosts = (id) => {
      fetch('https://jsonplaceholder.typicode.com/posts?userId='+id).then(res=>res.json()).then(posts=>this.setState({posts}));
    }

    showPostDetails = (id) => {
      let allPosts = [...this.state.posts];
      let currentPost = allPosts.find((post)=>post.id === id);
      this.props.history.push('/post', currentPost);
    }
  render() {
    return(
      <div className="userdetails">
            <div>Name: {this.state.user.name}</div>
            <div>Username: @{this.state.user.username}</div>
            <div>Email: {this.state.user.email}</div>
            <div>Street: {this.state.user.address.street}</div>
            <div>City: {this.state.user.address.city}</div>
            <div>Website: <a href={`http://www.${this.state.user.website}.com`}>{this.state.user.website}</a></div>
            <hr/>
            <div className="posts">
              <h3>Posts</h3>
              {this.state.posts.map((post)=><Post post={post} showPostDetails = {this.showPostDetails}/>)}
            </div>
      </div>
    )
  }
}

export default withRouter(UserDetails);
