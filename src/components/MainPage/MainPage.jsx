import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {Typography, Button, Link, Grid, Box} from '@material-ui/core';

//styles to call MUI
const styles = theme => {
    return ({

    })
};//end styles

class MainPage extends Component {

    componentDidMount(){
        console.log('Main Page MOUNTED');
        //dispatch to redux GET
        this.props.dispatch({
            type: 'GET_MAIN'
        });//end dispatch
    };//end componentDidMount


    render() {
        return (
            <Box>
                <h1>Main Page</h1>
                <span>{JSON.stringify('hello')}</span>
            </Box>
        )
    }
};//end class


// const putPropsOnState = reduxState => ({reduxState})
export default connect()(withStyles(styles)(MainPage));
