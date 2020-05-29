import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Box, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

class TradeSelectShoe extends Component{

    componentDidMount(){
        console.log('TradeSelectShoe MOUNTED')
        this.props.dispatch({
            type: 'fetch_trade_detail',
            payload: this.props.match.params.id
        })
    };

    render(){
        return(
            <h1>TradeSelectShoe</h1>
        )//end return
    }//end render
};//end class


//connect redux to props.
const putStateOnProps = reduxState => ({reduxState})

export default connect(putStateOnProps)(TradeSelectShoe);