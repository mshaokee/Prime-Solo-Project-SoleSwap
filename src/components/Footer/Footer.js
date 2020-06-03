import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
  return ({
    footer: {
      marginTop: 'calc(100vh - 150px - 450px)',
      padding: '20px 0px 20px 20px',
      backgroundColor: 'black',
      color: 'white',
      boxShadow: '0px 0px 2px #28283e',
    }
  })//end return
}//end style

class Footer extends Component {

  render() {
    //allows us to use withStyles
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        &copy; Shaokee Moua 2020
      </footer>
    )
  }
};

//connect withStyles and component Footer
export default (withStyles(styles)(Footer));
