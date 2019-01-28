import React, { Component } from 'react'
import PopularUserComponent from './PopularUserComponent';
import '../App.css';
import Spinner from '../spinner.gif';
export default class SearchComponent extends Component {
  state = {
    results: [],
    loading: false,
    err: false 
  }
  
  handleChange = async (e) => {
    if(e.target.value!=""){
      this.setState({loading:true})
      await fetch(`https://api.github.com/search/users?q=${e.target.value}`, {
        headers: new Headers({
          'Authorization': "token 626a617bee4664bf74dd58a286b2660e65820164"
        }) 
      }).then((res)=>res.json()).then((results)=>{
        if(results.total_count == 0){
          this.setState({err: true, loading: false});
        }
        else {
        return this.setState({results: results.items, loading: false, err: false});
        }
      });
    }
}

  render() {
    return (
      <div>
      <div className="search-div">
        <input type="text" className="form-control input-field" onChange={this.handleChange} placeholder="Enter search query"/>
        </div>
        <div className="search">
        {this.state.loading?<img src={Spinner}/>:<div className="user-card">{
          this.state.err?"No match found":
        this.state.results?this.state.results.map((result)=>{
          return <PopularUserComponent user = {result}/>
        }):""}
        </div>}
      </div>
      </div>
    )
  }
}
