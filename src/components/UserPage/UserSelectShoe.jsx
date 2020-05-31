import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';

class UserSelectShoe extends Component {

    componentDidMount() {
        console.log('UserSelectShoe MOUNTED');
        this.props.dispatch({
            type: 'fetch_account_shoe',
            payload: this.props.match.params.id
        })
    };//end componentDidMount

    render() {
        return (
            <Box>
                {/* MAP THROUGH THIS */}
                {this.props.details.map((shoe, index) => {
                    return (
                        <Box key={index}>
                            <h4>{shoe.cat_name}</h4>
                            <img src={shoe.post_image} alt={shoe.post_name}/>
                            <Button variant="outlined">EDIT</Button>
                            <Button variant="outlined">DELETE</Button>
                        </Box>
                    )
                })}
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, details: reduxState.details })
export default connect(putPropsOnState)(UserSelectShoe);
