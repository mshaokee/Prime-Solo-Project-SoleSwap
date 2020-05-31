import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const moment = require('moment');

const styles = theme => {
    return ({
        button: {
            display: 'block',
        },
        formControl: {
            minWidth: '120px'
        }
    })
};//end styles

class UserEditShoe extends Component {

    //state where we can set our data that we want to edit/send
    //this.props.editShoe.----
    state = {
        open: false,
        postId: this.props.editShoe.post_id,
        topic: this.props.editShoe.post_cat,
        description: this.props.editShoe.post_body,
        updatedDate: moment().format(`MMM Do YYYY, h:mm a`),
        image: this.props.editShoe.post_image,
        title: this.props.editShoe.post_name
    }

    componentDidMount() {
        console.log('UserEditShoe MOUNTED');
        //send page id back, and get shoe data
        this.props.dispatch({
            type: 'fetch_edit_shoe',
            payload: this.props.match.params.id
        })
    }//end componentDidMount

    //manage close and open options for topic selector
    handleClose = () => {
        this.setState({
            open: false
        })
    };//end close of selector
    handleOpen = () => {
        this.setState({
            open: true
        })
    };//end open of selector

    //manages your new topic as needed.
    handleChange = (event) => {
        console.log('You have set the new topic', event.target.value);
        this.setState({
            topic: event.target.value
        })
    };//end handleChange

    render() {
        const { classes } = this.props;
        return (
            <Box>
                <Link to="/account"><Button variant="outlined">My Shoes</Button></Link>
                <br />
                <h1>Edit Your Shoe Info</h1>
                {/* MAP THROUGH THIS */}
                {this.props.editShoe.map((shoe, index) => {
                    return (
                        <Box key={index}>
                            <h2>Title: <TextField defaultValue={shoe.post_name} /></h2>
                            <h2>Description: <TextField defaultValue={shoe.post_body} multiline rowsMax={5} variant="filled" /></h2>
                            {/* SELECTOR OPTION FROM MUI */}
                            <FormControl className={classes.formControl}>
                                <Typography variant="h4">Current Topic: {shoe.cat_name}</Typography>
                                <Select
                                    variant="outlined"
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    onOpen={this.handleOpen}
                                    value={this.state.topic}
                                    onChange={(event) => this.handleChange(event)}>
                                    <MenuItem value={1}><em>Buy</em></MenuItem>
                                    <MenuItem value={2}><em>Sell</em></MenuItem>
                                    <MenuItem value={3}><em>Trade</em></MenuItem>
                                </Select>
                            </FormControl>
                            <br />
                            <img src={shoe.post_image} alt={shoe.post_name} width="400px" />
                            <Button variant="outlined">Submit Changes</Button>
                            <Button variant="outlined">DELETE</Button>
                        </Box>
                    )
                })}
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, editShoe: reduxState.editShoeReducer })
export default connect(putPropsOnState)(withStyles(styles)(UserEditShoe));
