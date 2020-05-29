import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class BuySelectShoe extends Component {

    componentDidMount() {
        console.log('BuySelectShoe MOUNTED');
        this.props.dispatch({
            type: 'fetch_buy_detail',
            payload: this.props.match.params.id
        })
    };

    render() {
        return (
            <Box>
                <h1>BuySelectShoe</h1>
                {this.props.detail.map((shoe) =>
                    <div key="shoe.post_id">
                        <Link to="/buy"><Button variant="outlined">Back To List</Button></Link>
                        <h1 key={shoe.post_id}>{shoe.post_name}</h1>
                        <img src={shoe.post_image} alt={shoe.post_name} width="450px" />
                    </div>
                )}
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, detail: reduxState.getBuyDetail })
export default connect(putPropsOnState)(BuySelectShoe);