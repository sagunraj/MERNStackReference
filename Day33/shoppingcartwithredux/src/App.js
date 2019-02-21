import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import items from './items.json';
import {connect} from 'react-redux';
import {addItem} from './Actions';
import ItemCard from './ItemCard';
class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
         {items.items.map((item)=>{
           return <ItemCard item = {item}/>
         })}
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items
});

const mapDispatchToProps = (dispatch) => (
  {
    addItem:(item)=>dispatch(addItem(item))
  }
)


export default connect(mapStateToProps, mapDispatchToProps)(App);
