import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
//import withStyles to work with class components to style
import { withStyles } from '@material-ui/core/styles';

//WILL USE MATERIAL UI AT LATER TIME
const styles = theme => {
  return ({
    YourStyle: 'red'
  });//end return
};//end styles

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <Link to="/home">
          <h2 className="nav-title">SoleSwap</h2>
        </Link>
        <div className="nav-right">
          {/* Show the link to the info page and the logout button if the user is logged in */}
          <Link className="nav-link" to="/home">Home</Link>
          {/* <Link className="nav-link" to="/shoeBox">Shoe Box</Link> !!THIS WILL BE A STRETCH - RATHER DO LIKES */}
          {/* ESSENTIALLY DROPDOWN MENU */}
          {/* <Link className="nav-link">View Shoes</Link> */}

          <Link className="nav-link" to="/allShoes">All Shoes</Link>
          <Link className="nav-link" to="/buy">Buy</Link>
          <Link className="nav-link" to="/sell">Sell</Link>
        
          <Link className="nav-link" to="/trade">Trade</Link>

          <Link className="nav-link" to="/account">
            {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
            {this.props.user.id ? 'My Shoes' : 'Login / Sign up'}
          </Link>
          {this.props.user.id && (
            <>
              <Link to="/home"><LogOutButton className="nav-link" /></Link>
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
        </div>
      </div>
    )
  }
};

const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user })

export default connect(putPropsOnState)(withStyles(styles)(Nav));
