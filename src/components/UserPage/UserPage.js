import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
const moment = require('moment');

class UserPage extends Component {

  componentDidMount() {
    console.log('UserPage MOUTED');
    // console.log(`CHECK THE DATE`, date);
    this.props.dispatch({
      type: 'fetch_account'
    })
  };//end componentDidMount

  handleEdit = (shoe) => {
    console.log('Take me to the Edit Page.');
    this.props.history.push(`/account/edit/${shoe.post_id}`);
  }//end handleEdit

  render() {
    //format the date to month day, year
    let date = moment(this.props.user.user_date).format(`MMM Do, YYYY`);
    return (
      <Box>
        <h1 id="welcome">Welcome, {this.props.user.username}!</h1>
        <h3>Been a member since: {date}</h3>

        {this.props.account.map((shoe, index) => {
          let postDate = moment(shoe.post_date).format('MMM Do, YYYY');
          return (
            <Box key={index}>
              <h4>{shoe.post_name}</h4>
              <h4>Date posted: {postDate}</h4>
              <img src={shoe.post_image} alt={shoe.post_name} width="400px" />
              <Button onClick={(event) => this.handleEdit(shoe)} variant="outlined">EDIT</Button>
            </Box>
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
