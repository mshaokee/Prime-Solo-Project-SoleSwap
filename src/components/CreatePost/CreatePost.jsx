import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles'
import { Box, Button, TextField, InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';

const styles = theme => {
    return({
        button: {
            display: 'block',
            // marginTop:
        },
        formControl: {
            minWidth: '120px'
        }
    })
};//end styles

class CreatePost extends Component {

    state = {
        topic: '',
        setTopic: '',
        open: false,
        setOpen: false,
        description: ''
    }

    componentDidMount() {
        console.log('Create Post MOUNTED');
    }

    handleClose = () => {
        this.setState({
            setOpen: false
        })
    };//end close of selector

    handleOpen = () => {
        this.setState({
            setOpen: true
        })
    };//end open of selector

    handleChange = (event) => {
        console.log('ASDFKASJFAKSJFALJALKDJFLAK', event.target.value);
        this.setState({
            setTopic: event.target.value
        })
    };//end handleChange for topic selector

    shoeDesc = (event) => {
        console.log('adding to the shoe description:', event.target.value);
        this.setState({
            description: event.target.value
        })
    };//end shoe description

    createPost = () => {
        console.log('You have clicked Create Post.');
        this.props.dispatch({
            type: 'create_post',
            payload: {
                description: this.state.description
            }
        })
    };//end create post

    render() {
        const {classes} = this.props;
        return (
            <Box>
                <h1>CreatePost</h1>
                <TextField onChange={(event)=>this.shoeDesc(event)} label="description of shoe" variant="outlined" />
                {/* <Button onClick={this.handleOpen}>OPEN ME</Button> */}
                <FormControl className={classes.formControl}>
                    <InputLabel>Topic</InputLabel>
                    <Select open={this.state.open} 
                    onClose={this.handleClose} 
                    onOpen={this.handleOpen} 
                    value={this.state.topic} 
                    onChange={(event)=>this.handleChange(event)}>
                        <MenuItem value="">None</MenuItem>
                        <MenuItem value="Buy">Buy</MenuItem>
                        <MenuItem value="Sell">Sell</MenuItem>
                        <MenuItem value="Trade">Trade</MenuItem>
                    </Select>
                </FormControl>

                <Button variant="outlined" onClick={this.createPost}>Create</Button>
            </Box>
        )
    }
};//end class

// const putPropsOnState = reduxState => ({reduxState})
export default connect()(withStyles(styles)(CreatePost));
