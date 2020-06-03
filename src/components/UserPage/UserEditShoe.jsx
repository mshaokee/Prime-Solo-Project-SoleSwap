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
        topic: ''
    }

    componentDidMount() {
        console.log('UserEditShoe MOUNTED');
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
        this.props.dispatch({
            type: 'change_category',
            payload: event.target.value
        })
    };//end handleChange

    //manages title change
    handleTitle = (event) => {
        this.props.dispatch({
            type: 'change_title',
            payload: event.target.value
        })
    };//end handleTitle

    //manages description change
    handleDesc = (event) => {
        this.props.dispatch({
            type: 'change_description',
            payload: event.target.value
        })
    };//end handleDesc

    //manages submitting information with PUT
    handleSubmit = () => {
        console.log('UPDATING data');
        //send our new data to our saga to send to database
        this.props.dispatch({
            type: 'edit_shoe',
            payload: {
                shoe: this.props.editShoe,
                updatedDate: moment().format()
            }
        })
        //takes you back to your shoes
        this.props.history.push(`/account`);
    };//end handelSubmit

    handleDelete = () => {
        this.props.dispatch({
            type: 'delete',
            payload: this.props.match.params.id
        })
    };//end handleDelete


    render() {
        const { classes } = this.props;
        let shoe = this.props.editShoe;
        console.log('HELLLOOOOOOOOOOOOOO', shoe.post_date)
        return (
            <Box>
                <Link to="/account"><Button variant="outlined">My Shoes</Button></Link>
                <br />
                <h1>Edit Your Shoe Info</h1>
                {/* MAP THROUGH THIS */}
                {/* {this.props.editShoe.map((shoe, index) => {
                    return ( */}
                <Box>
                    <h2>Title: <TextField onChange={(event) => this.handleTitle(event)} value={shoe.post_name} /></h2>
                    <h2>Description: <TextField onChange={(event) => this.handleDesc(event)} value={shoe.post_body} multiline rowsMax={5} variant="filled" /></h2>
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
                    {this.props.user.id === shoe.user_id &&
                    <>
                        <Button onClick={this.handleSubmit} variant="outlined">Submit Changes</Button>
                        <Link to="/account"><Button onClick={this.handleDelete} variant="outlined">DELETE</Button></Link>
                        </>
                    }
                </Box>
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user, editShoe: reduxState.editShoeReducer, theShoe: reduxState.shoeToEdit })
export default connect(putPropsOnState)(withStyles(styles)(UserEditShoe));
