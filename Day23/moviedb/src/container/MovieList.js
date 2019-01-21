import React, { Component } from "react";
import spinner from "./spinner.gif";
import SearchButton from "./SearchButton";

export default class MovieList extends Component {
  state = {
    movies: [],
    loading: true
  };
  componentDidMount() {
    fetch("https://yts.am/api/v2/list_movies.json")
      .then(res => res.json())
      .then(datas =>
        this.setState({
          movies: datas.data.movies,
          loading: false
        })
      );
  }

  handleChange(e){
    this.setState({loading: true});
    fetch(`https://yts.am/api/v2/list_movies.json?query_term=${e.target.value}`).then((res)=>res.json()).then((datas)=>{
      if(datas.data.movies){
      this.setState({
        movies: datas.data.movies,
        loading:false
      })
    }
    else {
      this.setState({
        loading:false,
      })
    }
    })
  }
  render() {
    return (
      <div>
        <SearchButton handleChange = {this.handleChange.bind(this)}/><br/>
      <div className="moviecontainer">
        {this.state.loading ? <img src={spinner} /> : this.state.movies.map(movie => {
          return <Movie movie={movie} />;
        })}
        
      </div>
      </div>
    );
  }
}

const Movie = props => {
  return (
    <div className="movie">
      <img src={props.movie.medium_cover_image} alt={props.movie.title} />
      <h3>{props.movie.title}</h3>
      <div>{props.movie.year}</div>
      <hr />
    </div>
  );
};
