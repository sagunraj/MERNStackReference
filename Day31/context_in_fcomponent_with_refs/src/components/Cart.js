import React from 'react'
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../App.css';
import {useContext} from 'react';
import {ProductContext} from '../ProductContextProvider';
import {Link} from 'react-router-dom';
export default function Cart(props) {
  const value = useContext(ProductContext);
  return (
    <div className="cart">
       <Link style={{"text-decoration": "none"}} to = "/checkout"> <IconButton color="default" aria-label="Add to shopping cart">
        <ShoppingCartIcon />  &nbsp;<Badge color="secondary" badgeContent={value.state.addedItems.length}></Badge>
      </IconButton> 
       </Link>
    </div>
  )
}
