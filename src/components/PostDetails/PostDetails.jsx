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
                <h1>{this.state.postName}</h1>
                {/* // POST DATA CONTAINING IMAGE, TITLE, DESCRIPTION OF POST, USER */}
                {/* {JSON.stringify(this.state.postName)} */}
                <img src={this.state.image} alt={this.state.postName} style={{ width: 'auto', height: 'auto', maxWidth: '450px', minWidth: '450px' }}/>
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(PostDetails);
