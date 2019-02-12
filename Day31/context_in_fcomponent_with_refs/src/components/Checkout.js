import React, {useContext} from 'react'
import '../App.css';
import {ProductContext} from '../ProductContextProvider';
import CheckoutCard from './CheckoutCard';
import { Link } from 'react-router-dom';
export default function Checkout() {
  const value = useContext(ProductContext);
  console.log(value);
  return (
    <div className = "checkout">
      {value.state.addedItems.length>0?value.state.addedItems.map((item)=><CheckoutCard item = {item}/>):<div>
        No items added to cart yet. <Link to = "/">Click here to go to items page.</Link>
      </div>}
    </div>
  )
}
