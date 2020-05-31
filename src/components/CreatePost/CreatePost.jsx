import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import { Box, Button, TextField, InputLabel, FormControl, MenuItem, Select } from '@material-ui/core';

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
    }

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

    handleChange = (event) => {
        console.log('You have set the topic value', event.target.value);
        this.setState({
            topic: event.target.value
        })
    };//end handleChange for topic selector

    shoeDesc = (event) => {
        console.log('adding to the shoe description:', event.target.value);
        this.setState({
            description: event.target.value
        })
    };//end shoe description

    imageUrl = (event) => {
        console.log('adding shoe url:', event.target.value);
        this.setState({
            image: event.target.value
        })
    };//end shoe description

    title = (event) => {
        console.log('adding shoe title:', event.target.value);
        this.setState({
            title: event.target.value
        })
    };//end shoe description

    createPost = () => {
        console.log('You have clicked Create Post.');
        this.props.dispatch({
            type: 'create_post',
            payload: {
                description: this.state.description,
                image: this.state.image,
                catId: this.state.topic,
                user: this.props.user.id,
                title: this.state.title
            }
        })
    };//end create post

    render() {
        console.log('Create Post MOUNTED 2', this.props.user);
        const { classes } = this.props;
        return (
            <Box>
                <h1>CreatePost</h1>
                <Link to="/allShoes"><Button variant="outlined">All Shoes Page</Button></Link>
                <Link to="/buy"><Button variant="outlined">Buyers Page</Button></Link>
                <Link to="/sell"><Button variant="outlined">Sellers Page</Button></Link>
                <Link to="/trade"><Button variant="outlined">Traders Page</Button></Link >
                <br />
                <br />
                <TextField onChange={(event) => this.title(event)} label="post title" variant="outlined" />
                <TextField onChange={(event) => this.shoeDesc(event)} label="description of shoe" variant="outlined" />
                <TextField onChange={(event) => this.imageUrl(event)} label="image url address" variant="outlined" />
                {/* <Button onClick={this.handleOpen}>OPEN ME</Button> */}
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

                <Button variant="outlined" size="large" onClick={this.createPost}>Create</Button>
            </Box>
        )
    }
};//end class

const reduxStateOnProps = state => ({ user }) => ({ user: state.user });
// const putPropsOnState = reduxState => ({reduxState})
export default connect(reduxStateOnProps)(withStyles(styles)(CreatePost));
