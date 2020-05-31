import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import { Link } from 'react-router-dom';


class UserPage extends Component {

  componentDidMount() {
    console.log('UserPage MOUTED', this.props.user);
    this.props.dispatch({
      type: 'fetch_account',
      payload: this.props.user.id
    })
  };//end componentDidMount

  handleClick = (shoe) => {
    this.props.history.push(`/account/details/${shoe.post_id}`)
  };//end handleClick


  render() {
    return (
      <Box>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <h3>Been a member since: {this.props.user.user_date}</h3>
        {this.props.account.map((shoe, index) => {
          return (
            <div key={index}>
              <img
                onClick={(event) => this.handleClick(shoe)}
                src={shoe.post_image}
                alt={shoe.post_name}
                width="400px" 
                />
            </div>
          )
        })}
        {/* <p>Your ID is: {this.props.user.id}</p> */}
        {/* <Link to="/home"><LogOutButton className="log-in" /></Link> */}
      </Box>
    )//end return
  }//end render
};//end class


const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user, account: reduxState.accountsReducer });

export default connect(putPropsOnState)(UserPage);
