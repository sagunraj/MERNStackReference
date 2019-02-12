import React from 'react'
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import '../App.css';
import {useContext} from 'react';
import {ProductContext} from '../ProductContextProvider';
import {Link} from 'react-router-dom';
export default function Cart(props) {
  const value = useContext(ProductContext);
  return (
    <div className="cart">
       <Link to = "/checkout"><Button variant="contained" color="primary" to="/checkout">Cart &nbsp;&nbsp;&nbsp; <Badge color="secondary" badgeContent={value.state.addedItems.length}></Badge></Button>
       </Link>
    </div>
  )
}
