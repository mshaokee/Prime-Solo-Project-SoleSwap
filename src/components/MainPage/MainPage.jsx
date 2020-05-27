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
        console.log('Main Page MOUNTED', this.props.reduxState.mainPageReducer);
        //dispatch to redux GET
        this.props.dispatch({
            type: 'FETCH_MAIN'
        });//end dispatch
    };//end componentDidMount


    render() {
        return (
            <Box>
                <h1>Main Page</h1>
                {JSON.stringify(this.props.reduxState.mainPageReducer)}
                {this.props.reduxState.mainPageReducer.map((shoe, index) => {
                    return(
                        <div key={index}>
                            <h1>{shoe.username}</h1>
                        </div>
                    );//end return
                }//end map
                )}
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({reduxState})
export default connect(putPropsOnState)(withStyles(styles)(MainPage));
