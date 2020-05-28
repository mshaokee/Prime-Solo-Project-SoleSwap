import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

class BuyShoeDetails extends Component {

    componentDidMount() {
        console.log('BuyShoeDetails MOUNTED');

    }

    render() {
        return (
            <Box>
                <h1>{this.props.shoe.post_name}</h1>
                <img onClick={this.handleClick} src={this.props.shoe.post_image} alt={this.props.shoe.post_name} style={{ width: 'auto', height: 'auto', maxWidth: '250px', minWidth: '250px' }} />
                <h1>by: {this.props.shoe.username}</h1>
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(BuyShoeDetails);