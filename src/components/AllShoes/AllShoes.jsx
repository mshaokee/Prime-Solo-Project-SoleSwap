import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class AllShoes extends Component {

    componentDidMount() {
        console.log('AllShoes MOUNTED');
        //get all shoes on this page
        this.props.dispatch({
            type: 'fetch_all'
        })
    }

    handleClick = (shoe) => {
        this.props.history.push(`/allShoes/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        return (
            <Box>
                <h1>AllShoes</h1>
                <br />
                {/* BUTTON APPEARS IF USER */}
                {this.props.user.id && (
                    <>
                        <Link to="/create"><Button variant="outlined">Create Post</Button></Link>
                    </>
                )}
                {/* Map all shoes */}
                {this.props.reduxState.allShoesReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            <img
                                onClick={(event) => this.handleClick(shoe)}
                                src={shoe.post_image} alt={shoe.post_name}
                                width="450px" />
                        </div>
                    )
                })}
            </Box>
        )
    }
};//end class

const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user })
export default connect(putPropsOnState)(AllShoes);
