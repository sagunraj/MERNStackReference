import React, {Component, createContext} from 'react';
import items from './items.json';
export const ProductContext = createContext();

export default class ProductContextProvider extends Component {
  state = {
    items: [],
    addedItems:[]
  }

  addItem = () => {
    console.log("Add items");
  }
  componentWillMount(){
    this.setState({items: items.items})
  }
  render() {
    return (
      <ProductContext.Provider value = {{state: this.state, addItem: this.addItem}}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
