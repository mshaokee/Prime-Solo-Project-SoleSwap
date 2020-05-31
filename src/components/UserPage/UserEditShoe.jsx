import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class UserEditShoe extends Component {

    componentDidMount() {
        console.log('UserEditShoe MOUNTED');
        this.props.dispatch({
            type: 'fetch_edit_shoe',
            payload: this.props.match.params.id
        })
    }

    render() {
        return (
            <Box>
                <h1>UserEditShoe</h1>
                {/* MAP THROUGH THIS */}
                {this.props.editShoe.map((shoe, index) => {
                    return (
                        <Box key={index}>
                            <Link to="/account"><Button variant="outlined">My Shoes</Button></Link>
                            <h4>Topic: {shoe.cat_name}</h4>
                            <img src={shoe.post_image} alt={shoe.post_name} width="400px" />
                            <Button variant="outlined">EDIT</Button>
                            <Button variant="outlined">DELETE</Button>
                        </Box>
                    )
                })}
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, editShoe: reduxState.editShoeReducer })
export default connect(putPropsOnState)(UserEditShoe);
