import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
//import withStyles to work with class components to style
import { withStyles } from '@material-ui/core/styles';

//WILL USE MATERIAL UI AT LATER TIME
const styles = theme => {
  return ({

  });//end return
};//end styles

const Nav = (props) => (
  <div className="nav">
    <Link to="/main">
      <h2 className="nav-title">SoleSwap</h2>
    </Link>
    <div className="nav-right">

      {/* Show the link to the info page and the logout button if the user is logged in */}
      <Link className="nav-link" to="/main">Home</Link>
      <Link className="nav-link" to="/shoeBox">Shoe Box</Link>
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
        {props.user.id ? 'My Account' : 'Login / Sign up'}
      </Link>
      <Link className="nav-link" to="/myShoes">
        {props.user.id ? 'My Shoes' : null}
      </Link>
    
      {props.user.id && (
        <>
          <LogOutButton className="nav-link" />
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({ user: state.user, });

export default connect(mapStateToProps)(withStyles(styles)(Nav));
