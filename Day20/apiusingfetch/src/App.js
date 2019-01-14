import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import Loading from "./Loading";

class App extends Component {
  state = {
    posts: [],
    loading: false
  };
  
  getDataFromServer() {
    this.setState({
      loading: true
    });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => setTimeout(()=>this.setState({ posts, loading: false }), 3000)); // setTimeout is just to make the API call slow so that the spinner is shown
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getDataFromServer.bind(this)}>
          Fetch data from server
        </button>
        {this.state.loading?<Loading/>:""}
        <div className="row">
        {this.state.posts.map(post => {
          return (
            <Post style={style}
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })}
        </div>
      </div>
    );
  }
}

const style = {
  border: "1px solid #0069D9",
  borderRadius: "10px",
  id: {
    fontSize: "20px"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold"
  }
}
export default App;
