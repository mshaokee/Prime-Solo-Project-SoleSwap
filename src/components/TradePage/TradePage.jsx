import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class TradePage extends Component {

    componentDidMount() {
        console.log('TradePage MOUNTED', this.props.reduxState.allShoesReducer);
        //Send a dispatch to get all shoes, will then display on the DOM.
        this.props.dispatch({
            type: 'fetch_all'
        })
    };//end componentDidMount

    handleClick = (shoe) => {
        //collect data from inside the map and set as shoe, call in handleclick to send to params.
        console.log('Selecting specific shoe for details from Trade Page.');
        this.props.history.push(`/trade/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        return (
            <Box>
                <h1>TradePage</h1>
                {/* If the user is logged in, please show a create button. */}
                {this.props.user.id && (
                    <Link to="/create"><Button variant="outlined">Create Post</Button></Link>
                )}
                {/* Map through data of all shoes. */}
                {this.props.reduxState.allShoesReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            {/* We are on the trade page, if the category is set to 3, or trade. Display data in category 3. */}
                            {shoe.post_cat === 3 &&
                                <img
                                    onClick={(event) => this.handleClick(shoe)}
                                    src={shoe.post_image}
                                    alt={shoe.post_name}
                                    width="300px"
                                />
                            }
                        </div>
                    )//end return
                })}
            </Box>
        )
    }
};//end class

//Connect redux to props.
const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user })
export default connect(putPropsOnState)(TradePage);
