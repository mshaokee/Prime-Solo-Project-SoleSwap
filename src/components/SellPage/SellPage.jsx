import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
// import SellSelectShoe from './SellPage/SellSelectShoe'

class SellPage extends Component {

    componentDidMount() {
        console.log('SellPage MOUNTED', this.props.history.push)
        this.props.dispatch({
            type: 'fetch_sell'
        })
    }

    handleClick = (shoe, event) => {
        console.log('WHAT IS MY SHOE', shoe);
        this.props.history.push(`/sell/details/${shoe.id}`)
    };//end handleClick

    render() {
        return (
            <Box>
                <h1>SellPage</h1>
                <br />
                {this.props.user.id && (
                    <>
                        <Link to="/create"><Button variant="outlined">Create Post</Button></Link>
                    </>
                )}
                {/* sell Reducer */}
                {this.props.reduxState.sellReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                           <img
                            onClick={(event)=>this.handleClick(shoe, event)} 
                            src={shoe.post_image}
                                alt={shoe.post_name} 
                                width="300px"
                            />
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