import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Link } from 'react-router-dom';


class UserPage extends Component {

  componentDidMount(){
    console.log('UserPage MOUTED', this.props.user);
    this.props.dispatch({
      type: 'fetch_account',
      payload: this.props.user
    })
  };//end componentDidMount


  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <p>Your ID is: {this.props.user.id}</p>
        <Link to="/home"><LogOutButton className="log-in" /></Link>
      </div>
    )//end return
  }//end render
};//end class


const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user });

export default connect(putPropsOnState)(UserPage);
