import React, { Component } from 'react';
// import {connect} from 'react-redux';

class SellSelectShoe extends Component {

    componentDidMount(){
        console.log('SELL SELECT SHOE MOUNTED', this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h1>SellSelectShoe</h1>
                {JSON.stringify(this.props.match.params.id)}
            </div>
        )
    }
};//end class

export default SellSelectShoe;

// const putPropsOnState = reduxState => ({reduxState})
// export default connect()(SellSelectShoe);
