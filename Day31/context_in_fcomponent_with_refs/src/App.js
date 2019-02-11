import React from 'react';
import './App.css';
import ShoppingCart from './containers/ShoppingCart';
import ProductContextProvider from './ProductContextProvider';

export default () => <ProductContextProvider><ShoppingCart/></ProductContextProvider>