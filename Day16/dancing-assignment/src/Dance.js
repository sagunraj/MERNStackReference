import React from "react";
import one from "./1.jpg";
import two from "./2.jpg";
class Dance extends React.Component {
  constructor() {
    super();
    let toggle = false;
  }
  state = {
    img: one
  };

  changeImage() {
    this.toggle ? this.setState({ img: two }) : this.setState({ img: one });
    this.toggle = !this.toggle;
  }
  render() {
    return (
      <div>
        <a onClick={this.changeImage.bind(this)}>
          <img src={this.state.img} width="400px" />
        </a>
      </div>
    );
  }
}

export default Dance;
