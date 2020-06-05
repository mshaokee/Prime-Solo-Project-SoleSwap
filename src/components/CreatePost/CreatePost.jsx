//import sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js';
import './create.scss';
//import react and router
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import MUI
import { Box, Button, TextField, InputLabel, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => {
    return ({
        button: {
            display: 'inline-block',
            marginLeft: '12%',
            padding: '10px',
            marginBottom: '50px',
        },
        createBtn: {
            padding: '14px',
            marginLeft: '67%',
            width: '250px'
        },
        formControl: {
            minWidth: '120px',
            marginLeft: '2%'
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
        },
        inputs: {
            marginLeft: '2%'
        },
        title: {
            width: '300px'
        },
        desc: {
            marginLeft: '20px',
            width: '1000px'
        },
        url: {
            margin: '30px 0px 50px 0px',
            width: '1320px'
        },
    })
};//end styles

class CreatePost extends Component {

    state = {
        topic: '',
        open: false,
        description: '',
        image: '',
        title: '',
        user: this.props.user.id
    }

    componentDidMount() {
        console.log('Create Post MOUNTED');
        //takes us back to the top of the page when component loaded
        window.scrollTo(0, 0);
    }

    //manages closing selector
    handleClose = () => {
        this.setState({
            open: false
        })
    };//end close of selector

    //manages opening the selector
    handleOpen = () => {
        this.setState({
            open: true
        })
    };//end open of selector

    //gets the value data entered to our selector
    handleChange = (event) => {
        console.log('You have set the topic value', event.target.value);
        this.setState({
            topic: event.target.value
        })
    };//end handleChange for topic selector

    //gets the value data entered for our description
    shoeDesc = (event) => {
        console.log('adding to the shoe description:', event.target.value);
        this.setState({
            description: event.target.value
        })
    };//end shoe description

    //gets the image url data
    imageUrl = (event) => {
        console.log('adding shoe url:', event.target.value);
        this.setState({
            image: event.target.value
        })
    };//end shoe description

    //gets the value data entered for our title
    title = (event) => {
        console.log('adding shoe title:', event.target.value);
        this.setState({
            title: event.target.value
        })
    };//end shoe description

    //manages the POST data we've retrieved from our change to state
    createPost = () => {
        // console.log('You have clicked Create Post.');
        //only create post if all inputs have been filled
        //if one of the inputs are missing, sweetalert to fill inputs!
        if (this.state.description === '' || this.state.image === '' || this.state.title === '' || this.state.topic === '') {
            Swal.fire({
                title: 'Empty Inputs!',
                text: 'Please fill in all of the inputs before creating.',
                confirmButtonText: 'OK'
            })
        } else {
            //if all of the inputs have been filled, sweetalert that post has been created!
            //send dispatch to POST to our database and take us to our account page
            this.props.dispatch({
                type: 'create_post',
                payload: {
                    description: this.state.description,
                    image: this.state.image,
                    catId: this.state.topic,
                    user: this.props.user.id,
                    title: this.state.title
                }
            });//end dispatch
            //take us to account page
            this.props.history.push('/account')
            //reload page when loaded
            // window.location.reload();
            Swal.fire({
                title: 'Post has been Created!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }//end if else
    };//end create post

    render() {
        // console.log('Create Post MOUNTED 2', this.props.user);
        //allows us to use withStyles through props on classes
        const { classes } = this.props;
        return (
            <Box>
                <Typography variant="h2" className={classes.header}>Create A Post</Typography>
                {/* back buttons */}
                <Link to="/allShoes"><Button className={classes.button} variant="outlined">All Shoes Page</Button></Link>
                <Link to="/buy"><Button className={classes.button} variant="outlined">Buyers Page</Button></Link>
                <Link to="/sell"><Button className={classes.button} variant="outlined">Sellers Page</Button></Link>
                <Link to="/trade"><Button className={classes.button} variant="outlined">Traders Page</Button></Link >
                {/* input fields, data will be gathered through function */}
                <Box className={classes.inputs}>
                    <TextField className={classes.title} onChange={(event) => this.title(event)} label="post title" variant="outlined" />
                    <TextField className={classes.desc} onChange={(event) => this.shoeDesc(event)} label="description of shoe and best contact method" multiline rowsMax={5} variant="filled" />
                    <TextField className={classes.url} onChange={(event) => this.imageUrl(event)} label="image url address" variant="outlined" />
                </Box>
                {/* Begin selector and send selected data to our function.*/}
                <FormControl className={classes.formControl}>
                    <InputLabel>Topic</InputLabel>
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
                <Button className={classes.createBtn} variant="outlined" size="large" onClick={this.createPost}>Create</Button>
            </Box>
        )//end return
    };//end render
};//end class


const reduxStateOnProps = state => ({ user }) => ({ user: state.user });
// const putPropsOnState = reduxState => ({reduxState})
export default connect(reduxStateOnProps)(withStyles(styles)(CreatePost));
