import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import BuyShoeDetails from './BuyShoeDetails';
import { Link } from 'react-router-dom';

class BuyPage extends Component {

    componentDidMount() {
        console.log('Buy Page MOUNTED')
        this.props.dispatch({
            type: 'fetch_buy'
        })
    }

    render() {
        return (
            <Box>
                <h1>BuyPage</h1>
                <br />
                <Link to="/create"><button>Create Post</button></Link>
                {this.props.reduxState.buyReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            <BuyShoeDetails shoe={shoe} />
                        </div>
                    )
                }//end map
                )}
            </Box>
        )

    }
};//end class

// const mapStateToProps = state => ({ user: state.user, });
const putPropsOnState = reduxState => ({ reduxState });
export default connect(putPropsOnState)(BuyPage);