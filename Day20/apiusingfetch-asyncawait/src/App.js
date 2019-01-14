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

  async callApi() {
    this.setState({ loading: true });
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    this.setState({ posts, loading: false });
  }

  async formSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.title.value,
        body: e.target.body.value,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    let data = await response.json();
    console.log(data);
    this.setState({ posts: [...this.state.posts, data], loading: false });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.callApi.bind(this)}>Call API</button>
        {this.state.loading ? <Loading /> : ""}
        {this.state.posts.map(post => {
          return (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          );
        })}
        <form onSubmit={this.formSubmit.bind(this)}>
          <input type="text" name="title" placeholder="Input your title" />
          <textarea name="body" placeholder="Input your text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
