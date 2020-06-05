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
      flexWrap: 'wrap',
      paddingTop: '15px',
    },
    text1: {
      width: '200px',
      height: '70px',
    },
    divider: {
      marginTop: '20px',
      borderTop: '1px solid black'
    },
  })
};//end styles

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    location: ''
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          location: this.state.location
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Box>
        <form className={classes.box} onSubmit={this.registerUser}>
          <Typography variant="h2" className={classes.title}>Create an Account</Typography>
          {this.props.errors.registrationMessage && (
            <Alert severity="error" className={classes.alert} role="alert" >
              {this.props.errors.registrationMessage}
            </Alert>
          )}
          <Box className={classes.inputs}>
            {/* username input */}
            <Box className={classes.input1}>
              <label htmlFor="username">
                <TextField className={classes.text1} size="medium" label="Username" type="text" name="username" value={this.state.username} onChange={this.handleInputChangeFor('username')} />
              </label>
            </Box>
            {/* password input */}
            <Box className={classes.input1}>
              <label htmlFor="password">
                <TextField className={classes.text1} size="medium" label="Password" type="password" name="password" value={this.state.password} onChange={this.handleInputChangeFor('password')} />
              </label>
            </Box>
            {/* email input */}
            <Box className={classes.input1}>
              <label htmlFor="email">
                <TextField className={classes.text1} size="medium" label="Email" type="text" name="email" value={this.state.email} onChange={this.handleInputChangeFor('email')} />
              </label>
            </Box>
            {/* sign up button */}
            <Button variant="outlined" type="submit" name="submit" value="Sign Up">Sign Up</Button>
          </Box>
        </form>
        <center className={classes.divider}>
          <Typography>Already have an account?</Typography>
          <Button variant="outlined" type="button" className="link-button" onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}>
            Login
          </Button>
        </center>
      </Box>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
const mapStateToProps = state => ({
  errors: state.errors,
});
//connect redux to props and withStyles with our component
export default connect(mapStateToProps)(withStyles(styles)(RegisterPage));

