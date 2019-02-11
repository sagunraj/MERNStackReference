import React, {useContext} from 'react';
import '../items.json';
import ItemCard from './ItemCard.js';
import {ProductContext} from '../ProductContextProvider';

export default function Section() {
  const value = useContext(ProductContext);
  const {items} = value.state;
  return (
    <div className="section">
      {items.map((item)=><ItemCard item={item}/>)}
    </div>
  )
}
