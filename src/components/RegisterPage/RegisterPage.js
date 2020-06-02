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
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Create an Acount</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          {/* input */}
          <div>
            <label htmlFor="email">
              email:
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
          </div>

          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Sign Up"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

