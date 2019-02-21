import React, {Component} from 'react'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './App.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
    render(){
        return (
        <div className="cart">
        <Link to = "/checkout" style={{textDecoration: "none"}}>
        <IconButton color="default" aria-label="Shopping Cart">
        <ShoppingCartIcon />  &nbsp;<Badge color="secondary" badgeContent={(this.props.state.items).length}></Badge>
      </IconButton>
      </Link>
    </div>
  )
}

}

const mapStateToProps = (state) => ({
    state: state.item
});


export default connect(mapStateToProps)(Navbar);