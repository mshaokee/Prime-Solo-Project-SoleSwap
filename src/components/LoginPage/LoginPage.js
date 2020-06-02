import React, { Component } from 'react';
import { connect } from 'react-redux';
//import MUI
import { Button, Box, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
  return ({
    box: {
      display: 'inline-block',
      height: '55vh',
      marginTop: '100px',
      width: '100%',
    },
    alert: {
      display: 'inline-block',
      float: 'right',
      marginRight: '10px',
      marginTop: '120px',
      fontSize: '40px',
      padding: '50px'
    },
    title: {
      borderBottom: '1px solid black',
      paddingLeft: '30px'
    },
    inputs: {
      marginTop: '50px',
      marginLeft: '30px'
    },
    input1: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    text1: {
      width: '200px',
      height: '70px',

    },
  })
};//end styles

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    //allows us to use MUI on props
    const { classes } = this.props;
    return (
      <Box>
        <form className={classes.box} onSubmit={this.login}>
          {this.props.errors.loginMessage && (
            <Alert severity="error" className={classes.alert} role="alert">
              {this.props.errors.loginMessage}
            </Alert>
          )}
          <Typography className={classes.title} variant="h1">Login</Typography>
          <Box className={classes.inputs}>
            <Box className={classes.input1}>
              <label htmlFor="username">
                <TextField className={classes.text1} label="Username" type="text" name="username" value={this.state.username} onChange={this.handleInputChangeFor('username')} />
              </label>
            </Box>
            <Box className={classes.input1}>
              <label htmlFor="password">
                <TextField className={classes.text1} label="Password" type="password" name="password" value={this.state.password} onChange={this.handleInputChangeFor('password')} />
              </label>
            </Box>
            <Button variant="outlined" type="submit" name="submit">Log In</Button>
          </Box>
        </form>
        <center>
          <Typography>Don't have an account?</Typography>
          <Button type="button" variant="outlined" onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}>Sign Up</Button>
        </center>
      </Box>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));
