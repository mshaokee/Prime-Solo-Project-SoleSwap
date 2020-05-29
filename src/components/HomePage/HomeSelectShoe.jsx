import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class HomeSelectShoe extends Component {

    componentDidMount() {
        console.log('HomeSelectShoe MOUNTED');
        this.props.dispatch({
            type: 'fetch_home_detail',
            payload: this.props.match.params.id
        })
    };

    render() {
        return (
            <Box>
                <h1>HomeSelectShoe</h1>
                {this.props.detail.map((shoe) =>
                    <div key="shoe.post_id">
                        <Link to="/home"><Button variant="outlined">Back To List</Button></Link>
                        <h1 key={shoe.post_id}>{shoe.post_name}</h1>
                        <img src={shoe.post_image} alt={shoe.post_name} width="450px" />
                    </div>
                )}
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, detail: reduxState.getHomeDetail })
export default connect(putPropsOnState)(HomeSelectShoe);