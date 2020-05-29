import React, { Component } from 'react';
import {connect} from 'react-redux';

class SellSelectShoe extends Component {

    componentDidMount(){
        console.log('SELL SELECT SHOE MOUNTED', this.props.match.params.id)
        this.props.dispatch({
            type: 'fetch_sell_detail',
            payload: this.props.match.params.id
        })
    }

    render() {
        return (
            <div>
                <h1>SellSelectShoe</h1>
                {this.props.detail.map((shoe) => 
                    <h1 key={shoe.post_id}>{shoe.post_name}</h1>
                )}
            </div>
        )
    }
};//end class



const putPropsOnState = reduxState => ({reduxState, detail: reduxState.getSellDetail})
export default connect(putPropsOnState)(SellSelectShoe);
