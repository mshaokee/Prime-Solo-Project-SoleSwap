import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class TradeSelectShoe extends Component {

    componentDidMount() {
        console.log('TradeSelectShoe MOUNTED')
        this.props.dispatch({
            type: 'fetch_trade_detail',
            payload: this.props.match.params.id
        })
    };

    render() {
        return (
            <Box>
                <h1>TradeSelectShoe</h1>
                {this.props.details.map(shoe =>
                    <div key="shoe.post_id">
                        <Link to="/trade"><Button variant="outlined">Back To Trade</Button></Link>
                        <h1 key={shoe.post_id}>{shoe.post_name}</h1>
                        <img src={shoe.post_image} alt={shoe.post_name} width="450px" />
                    </div>
                )}
            </Box>
        )//end return
    }//end render
};//end class


//connect redux to props.
const putStateOnProps = reduxState => ({ reduxState, details: reduxState.getTradeDetail })

export default connect(putStateOnProps)(TradeSelectShoe);