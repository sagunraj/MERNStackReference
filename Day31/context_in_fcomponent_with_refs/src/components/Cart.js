import React from 'react'
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import '../App.css'
export default function Cart(props) {
  return (
    <div className="cart">
       <Button variant="contained" color="primary">Cart &nbsp;&nbsp;&nbsp; <Badge color="secondary" badgeContent={1}></Badge></Button>
    </div>
  )
}
