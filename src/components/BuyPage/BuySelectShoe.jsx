import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class BuySelectShoe extends Component {

    state = {
        postId: this.props.reduxState.selectShoeReducer.post_id,
        postName: this.props.reduxState.selectShoeReducer.post_name,
        image: this.props.reduxState.selectShoeReducer.post_image,
        username: this.props.reduxState.selectShoeReducer.username,
        date: this.props.reduxState.selectShoeReducer.post_date,
        description: this.props.reduxState.selectShoeReducer.post_body
    }

    componentDidMount() {
        console.log('BuySelectShoe MOUNTED');
    };

    //selectShoeReducer should now hold these
    /* id, post_body, post_date, post_image, post_name, username*/

    render() {
        return (
            <Box>
                <h1>BuySelectShoe</h1>
                <Link to="/buy"><Button variant="outlined">Back to Buy List</Button></Link>
                <h2>{this.state.postName}</h2>
                <img src={this.state.image} alt={this.state.postName} />
                <h4>{this.state.description}</h4>
                <h3>By {this.state.username}</h3>
                <h4>Date Posted : {this.state.date}</h4>
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(BuySelectShoe);