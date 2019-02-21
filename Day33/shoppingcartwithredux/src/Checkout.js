import React, { Component } from 'react'
import {connect} from 'react-redux';
import CheckoutItem from './CheckoutItem';
import {withRouter} from 'react-router-dom';

class Checkout extends Component {
    componentDidMount(){
        if(this.props.itemData.items.length === 0){
            this.props.history.replace("/");
        }
    }
  render() {
    return (
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        {this.props.itemData.items.map((item)=>{
            return <CheckoutItem item = {item}/>;
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    itemData: state.item
})
export default connect(mapStateToProps)(Checkout);
