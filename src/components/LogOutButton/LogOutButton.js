import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  return ({
    navLink: {
      display: 'inline-block',
      float: 'left',
      fontSize: '20px',
      margin: '0px 10px',
      backgroundColor: 'black',
      color: 'white',
      // marginTop: '25px',
      padding: '25px',
      // hover option
      '&:hover': {
        backgroundColor: '#28283e',
      }
    }
  })
};//end styles

class LogOutButton extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Button
        // This button shows up in multiple locations and is styled differently
        // because it's styled differently depending on where it is used, the className
        // is passed to it from it's parents through React props
        className={classes.navLink}
        onClick={() => this.props.dispatch({ type: 'LOGOUT' })}
      >
        Log Out
      </Button>
    )
  }
};//end component

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(withStyles(styles)(LogOutButton));
