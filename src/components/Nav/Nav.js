import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
//MUI imports
import { Box, Button, Typography } from '@material-ui/core';
//import withStyles to work with class components to style
import { withStyles } from '@material-ui/core/styles';

//styles for material ui
const styles = () => {
  return ({
    navTitle: {
      width: '30%',
      float: 'left',
      lineHeight: '50px',
      letterSpacing: '3px',
      paddingLeft: '5%',
      color: 'white',
      paddingTop: '20px'
    },
    nav: {
      overflow: 'hidden',
      backgroundColor: 'black',
      position: 'fixed',
      Top: '0',
      zIndex: '12',
      width: '100%',
      margin: 'auto 0',
      minHeight: '80px',
      maxHeight: '80px',
    },
    navLink: {
      display: 'inline-block',
      float: 'left',
      fontSize: '20px',
      margin: '0px 10px',
      backgroundColor: 'black',
      color: 'white',
      paddingTop: '23px',
      paddingBottom: '23px',
      // hover option
      '&:hover': {
        backgroundColor: '#28283e',
      }
    },
    navRight: {
      float: 'right',
      fontSize: '20px',
      margin: '0px 10px',
      backgroundColor: 'black',
      color: 'white'
    }
  });//end return
};//end styles

class Nav extends Component {

  render() {
    // allows us to use withStyles in render
    const { classes } = this.props;
    return (
      <Box className={classes.nav} boxShadow={8}>
        {/* link our title / icon to the home page on click */}
        <Link to="/home"><Typography variant="h3" className={classes.navTitle}>SoleSwap</Typography></Link>
        <nav className={classes.navRight}>
          {/* Show the link to the info page and the logout button if the user is logged in */}
          <Link to="/home"><Button className={classes.navLink}>Home</Button></Link>
          {/* When viewing shoes set it into a drop down menu */}
          <Link to="/allShoes"><Button className={classes.navLink}>All Shoes</Button></Link>
          <Link to="/buy"><Button className={classes.navLink}>Buy</Button></Link>
          <Link to="/sell"><Button className={classes.navLink}>Sell</Button></Link>
          <Link to="/trade"><Button className={classes.navLink}>Trade</Button></Link>
          <Link to="/account">
            {/* Show this link if they are logged in or not,
             but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
            {this.props.user.id ?
             <Button className={classes.navLink}>My Shoes</Button>
             :
              <Button className={classes.navLink}>Login</Button>}
          </Link>
          {/* If the user is logged in, show the Logout option */}
          {this.props.user.id && (
            <>
              <Link to="/home"><LogOutButton className={classes.navLink} /></Link>
            </>
          )}
          {/* Always show this link since the about page is not protected */}
          {/* <Link className="navLink" to="/about">
        About
      </Link> */}
        </nav>
      </Box>
    )
  }
};

//connect redux to props can target "user" to target user reducer
const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user })
//wrap withStyles to allow MUI styling
export default connect(putPropsOnState)(withStyles(styles)(Nav));
