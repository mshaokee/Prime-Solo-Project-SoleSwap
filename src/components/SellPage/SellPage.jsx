import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'


class SellPage extends Component {

    componentDidMount() {
        console.log('SellPage MOUNTED', this.props.history.push)
        this.props.dispatch({
            type: 'fetch_all'
        })
    }
    handleClick = (shoe, event) => {
        console.log('WHAT IS MY SHOE', shoe);
        this.props.history.push(`/sell/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        return (
            <Box>
                <h1>SellPage</h1>
                <br />
                {/* BUTTON APPEARS IF USER */}
                {this.props.user.id && (
                    <>
                        <Link to="/create"><Button variant="outlined">Create Post</Button></Link>
                    </>
                )}
                {/* GET DATA FROM ALL SHOES AND SPECIFY */}
                {this.props.reduxState.allShoesReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            {shoe.post_cat === 2 &&
                                <img
                                    onClick={(event) => this.handleClick(shoe, event)}
                                    src={shoe.post_image}
                                    alt={shoe.post_name}
                                    width="300px"
                                />
                            }
                        </div>
                    )
                }//end map
                )}
            </Box>
        )
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user })
export default connect(putPropsOnState)(SellPage);