import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'; //Typography, Button, Link, Grid,
// import {Link} from 'react-router-dom';
import SelectShoe from '../SelectShoe/SelectShoe';

//styles to call MUI
const styles = theme => {
    return ({

    })
};//end styles

class HomePage extends Component {

    componentDidMount() {
        console.log('Home Page MOUNTED', this.props.reduxState.getShoesReducer);
        //dispatch to redux GET
        this.props.dispatch({
            type: 'FETCH_SHOES'
        });//end dispatch

    };//end componentDidMount

    render() {
        return (
            <Box>
                <h1>Home Page</h1>
                <h1>Recent Posts</h1>
                {this.props.reduxState.getShoesReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            <SelectShoe shoe={shoe} />
                        </div>
                    )
                }//end map
                )}
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(withStyles(styles)(HomePage));
