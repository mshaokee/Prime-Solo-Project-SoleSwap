import React, { Component } from 'react';
import { connect } from 'react-redux';
//import MUI
import { Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const moment = require('moment');

const styles = () => {
  return ({
    page: {
      margin: '0px',
      overflow: 'hidden',
      paddingBottom: '75px',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      // display: 'flex',
    },
    title: {
      display: 'inline-block',
      // fontSize: '50px', 
      height: '50px',
      marginTop: '120px',
      marginBottom: '15px',
      width: '100%',
      marginRight: '2%',
      marginLeft: '2%',
      textAlign: 'center',
      paddingBottom: '38px',
      borderBottom: '2px solid black'
    },
    description: {
      marginBottom: '23px',
      borderBottom: '2px solid black',
      paddingLeft: '300px',
      paddingBottom: '5px'
    },
    media: {
      height: '275px',
      width: '450px',
      maxWidth: '450px',
      position: 'center',
      width: '100%',
      boxShadow: '0px 0px 1px 0px'
    },
    button: {
      width: '180px',
      letterSpacing: '5px',
      paddingTop: '5px',
    },
    card: {
      boxShadow: '0px 0px 2px #28283e',
      maxWidth: '90%',
      width: '450px',
      margin: '18px 0px',
      padding: '5px'
    },
    shoeGrid: {
      paddingTop: '10px',
      marginRight: '2%',
      marginLeft: '1%',
      width: '100%'
    },
    user: {
      fontSize: '17px',
    },
    welcomeGrid: {
      width: '100%'
    },
    name: {
      fontSize: '60px',
      fontStyle: 'oblique',
    }
  })
};//end styles

class UserPage extends Component {
  componentDidMount() {
    console.log('UserPage MOUTED');
    // console.log(`CHECK THE DATE`, date);
    this.props.dispatch({
      type: 'fetch_account'
    });//end dispatch
    //takes us back to the top of the page when component loaded
    window.scrollTo(0, 0);
  };//end componentDidMount

  handleEdit = (shoe) => {
    console.log('Take me to the Edit Page.');
    this.props.history.push(`/account/edit/${shoe.post_id}`);
  }//end handleEdit

  render() {
    //format the date to month day, year
    let date = moment(this.props.user.user_date).format(`MMM Do, YYYY`);
    let username = this.props.user.username;
    const { classes } = this.props;
    return (
      <Box className={classes.page}>
        <Typography variant="h5" className={classes.title}><Typography className={classes.name}>{username}</Typography>  been a member since: {date}</Typography>
        {/* BEGIN GRID to display users shoes */}
        <Grid container className={classes.shoeGrid} justify="center" spacing={2}>
          {this.props.account.map((shoe, index) => {
            let date = moment(shoe.post_date).format('MMM Do, YYYY')
            return (
              <Grid key={index}>
                {/* ternary that shows all shoes sold by this user*/}
                {shoe.post_cat === 1 | 2 | 3 &&
                  <Card variant="outlined" className={classes.card}>
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="h6">{shoe.post_name}</Typography>
                        <CardMedia className={classes.media} image={shoe.post_image} title={shoe.post_name} />
                      </CardContent>
                      <CardActions>
                        <Button variant="outlined" onClick={(event) => this.handleEdit(shoe)} className={classes.button}>EDIT</Button>
                        <Typography className={classes.user}>posted on {date}</Typography>
                        <Typography variant="h6">{shoe.cat_name}</Typography>
                      </CardActions>
                    </CardActionArea>
                  </Card>
                }  {/* END TERNARY */}
              </Grid>
            )//end return
          })} {/* END MAP */}
        </Grid>
      </Box>
    )//end return
  }//end render
};//end class

//put props on redux
const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user, account: reduxState.accountsReducer });
//connect redux with component and withStyles
export default connect(putPropsOnState)(withStyles(styles)(UserPage));
