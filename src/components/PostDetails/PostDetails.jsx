import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

class PostDetails extends Component {

    state = {
        postId: this.props.reduxState.selectShoeReducer.post_id,
        postName: this.props.reduxState.selectShoeReducer.post_name,
        image: this.props.reduxState.selectShoeReducer.post_image,
        description: this.props.reduxState.selectShoeReducer.post_body,
        username: this.props.reduxState.selectShoeReducer.username
    }

    componentDidMount() {
        console.log('PostDetails MOUNTED', this.props.reduxState.selectShoeReducer);
    }

    render() {
        return (
            <Box>
                <Link to="/home"><Button variant="outlined">Go Back Home</Button></Link>
                <h1>{this.state.postName}</h1>
                {/* // POST DATA CONTAINING IMAGE, TITLE, DESCRIPTION OF POST, USER */}
                {/* {JSON.stringify(this.state.postName)} */}
                <img src={this.state.image} alt={this.state.postName} style={{ width: 'auto', height: 'auto', maxWidth: '450px', minWidth: '450px' }} />
                <h1>Description: {this.state.description}</h1>
                <h1>by: {this.state.username}</h1>
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(PostDetails);
