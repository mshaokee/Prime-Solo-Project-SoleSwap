import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
  return ({
    footer: {
      // marginTop: '100px',
      padding: '20px 0px 20px 20px',
      backgroundColor: 'black',
      color: 'white',
      boxShadow: '0px 0px 2px #28283e',
      width: '100%',
      position: 'fixed',
      bottom: '0',
      height: '28px'
    }

  })
}

class Footer extends Component {

  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.footer}>
        &copy; Shaokee Moua 2020
      </footer>
    )
  }
};

export default connect()(withStyles(styles)(Footer));
