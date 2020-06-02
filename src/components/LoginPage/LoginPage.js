import React, { Component } from 'react';
import { connect } from 'react-redux';
//import MUI
import {Button, Box} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = () => {
  return({
    box: {
      display: 'inline-block',
      fontSize: '50px',
      height: '50px',
      marginTop: '120px',
      marginBottom: '15px',
      borderBottom: '2px solid black',
      width: '100%',
    }
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
    const {classes} = this.props;
    return (
      <Box>
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form className={classes.box} onSubmit={this.login}>
          <h1>Login</h1>
          <Box>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </Box>
          <Box>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </Box>
          <Box>
            {/* <Link to="/home"> */}
              <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
            {/* </Link> */}
          </Box>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Sign Up
          </button>
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
