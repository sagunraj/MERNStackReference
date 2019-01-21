import React, { Component } from 'react'

export default class SearchButton extends Component {
  render() {
    return (
      <div>
        <input type = "text" className="searchform" name="name" placeholder="Input your search query here..." onChange = {this.props.handleChange}/>
      </div>
    )
  }
}
