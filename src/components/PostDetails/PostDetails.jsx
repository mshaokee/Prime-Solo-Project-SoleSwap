import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';

class PostDetails extends Component {

    state = {
        postId: this.props.reduxState.selectShoeReducer.post_id,
        postName: this.props.reduxState.selectShoeReducer.post_name,
        image: this.props.reduxState.selectShoeReducer.post_image
        //add username date later
    }

    componentDidMount() {
        console.log('PostDetails MOUNTED', this.props.reduxState.selectShoeReducer);
    }

    render() {
        return (
            <Box>
                <h1>Post Title</h1>
                {/* // POST DATA CONTAINING IMAGE, TITLE, DESCRIPTION OF POST, USER */}
                {JSON.stringify(this.state.postName)}
                {/* <h1>{this.state}</h1> */}
            </Box>
        )
    }
};//end class



const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(PostDetails);
