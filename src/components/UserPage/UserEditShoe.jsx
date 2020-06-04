import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import MUI
import { withStyles } from '@material-ui/core/styles';
import { Box, Button, TextField, FormControl, MenuItem, Select, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
//require moment for date formatting
const moment = require('moment');

const styles = theme => {
    return ({
        button: {
            lettingSpacing: '2px',
        },
        formControl: {
            minWidth: '120px',
            marginLeft: '2%',
            paddingBottom: '20px'
        },
        header: {
            display: 'inline-block',
            height: '50px',
            marginTop: '120px',
            marginBottom: '15px',
            width: '100%',
            textAlign: 'center',
            paddingBottom: '38px',
            borderBottom: '2px solid black',
            marginLeft: '1%',
            marginRight: '1%',
        },
        backBtn: {
            marginLeft: '2%',
            padding: '7px',
            letterSpacing: '3px',
            marginBottom: '10px',
        },
        desc: {
            minWidth: '1000px',
            minHeight: '100px',
            padding: '5px'
        },
        title: {
            padding: '5px',
            width: '300px',
            textSize: '40px'
        },
        contTitle: {
            marginLeft: '2%',
            margin: '10px 0px 10px 0px',
            paddingRight: '50px'
        },
        selector: {
            width: '200px'
        },
        submitBtn: {
            marginLeft: '2%',
            padding: '10px',
            lettingSpacing: '2px',
        },
        deleteBtn: {
            padding: '10px',
            lettingSpacing: '2px',
            marginLeft: '2%',
        },
        media: {
            height: '500px',
            maxWidth: '750px'
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
        //send data to get specified shoe
        this.props.dispatch({
            type: 'fetch_edit_shoe',
            payload: this.props.match.params.id
        })
        //takes us back to the top of the page when component loaded
        window.scrollTo(0, 0);
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

    //manages deleting information with DELETE
    handleDelete = () => {
        this.props.dispatch({
            type: 'delete',
            payload: this.props.match.params.id
        })
        //take us to account page
        this.props.history.push(`/account`);
    };//end handleDelete


    render() {
        const { classes } = this.props;
        let shoe = this.props.editShoe;
        // console.log('What is the date the shoe was posted:', shoe.post_date)
        return (
            <Box>
                <Typography variant="h2" className={classes.header}>Edit Your Shoe Info</Typography>
                <Link to="/account"><Button className={classes.backBtn} variant="outlined">Go Back To My Shoes</Button></Link>
                {/* Data below will be a part of PUT */}
                <Box>
                    <Typography className={classes.contTitle} variant="h4">Title: <TextField className={classes.title} onChange={(event) => this.handleTitle(event)} value={shoe.post_name} /></Typography>
                    <Typography className={classes.contTitle} variant="h4">Description: <TextField className={classes.desc} onChange={(event) => this.handleDesc(event)} value={shoe.post_body} multiline rowsMax={5} variant="filled" /></Typography>
                    {/* SELECTOR OPTION FROM MUI */}
                    <Typography variant="h4" className={classes.contTitle}>Current Topic: {shoe.cat_name}</Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            className={classes.selector}
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
                    {/* only allows users who are logged in as the user to view the page */}
                    <Box>
                        {this.props.user.id === shoe.user_id &&
                            <>
                                <Button className={classes.submitBtn} onClick={this.handleSubmit} variant="outlined">Submit Changes</Button>
                                <Button className={classes.deleteBtn} onClick={this.handleDelete} variant="outlined">delete</Button>
                            </>
                        }
                    </Box>
                    {/* Displays Image on the DOM */}
                    <Card>
                        <CardContent>
                            <CardMedia className={classes.media} image={shoe.post_image} title={shoe.post_name}/>
                        </CardContent>
                    </Card>
                    {/* <img src={shoe.post_image} alt={shoe.post_name} width="400px" /> */}
                </Box>
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user, editShoe: reduxState.editShoeReducer, theShoe: reduxState.shoeToEdit })
export default connect(putPropsOnState)(withStyles(styles)(UserEditShoe));
