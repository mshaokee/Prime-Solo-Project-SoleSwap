import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

class BuyShoeDetails extends Component {

    componentDidMount() {
        console.log('BuyShoeDetails MOUNTED');
    }

    handleClick = () => {
        console.log('Clicked on shoe image. Going to details page.');
        // this.props.history.push(`/buy/details/${this.props.shoe.id}`)
        //store our data in a reducer
        this.props.dispatch({
            type: 'select_shoe',
            payload: this.props.shoe
        })
    };//end handleClick

    render() {
        return (
            <Box>
                <h1>{this.props.shoe.post_name}</h1>
                <Link to="/buy/details">
                    <img onClick={this.handleClick} src={this.props.shoe.post_image} alt={this.props.shoe.post_name} style={{ width: 'auto', height: 'auto', maxWidth: '250px', minWidth: '250px' }} />
                </Link>
                <h1>by: {this.props.shoe.username}</h1>
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState });
export default connect(putPropsOnState)(BuyShoeDetails);