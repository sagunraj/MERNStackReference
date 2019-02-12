import React from 'react';
import './App.css';
import ShoppingCart from './containers/ShoppingCart';
import ProductContextProvider from './ProductContextProvider';
import Checkout from './components/Checkout';
import {Route, Switch} from 'react-router-dom';
export default () => 
    <ProductContextProvider>
    <Route path = "/" component = {ShoppingCart} exact={true}/>
    <Route path = "/checkout" component = {Checkout}/>
    </ProductContextProvider>