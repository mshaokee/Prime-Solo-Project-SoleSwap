import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@material-ui/core';
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
        console.log('CHECKING STATE OF USER', this.props.reduxState.user);
        
        return (
            <Box>
                <h1>BuyPage</h1>
                <br />
                {/* only shows Create Post button if a user is logged in! */}
                {this.props.user.id && (
                    <>
                        <Link to="/create"><Button variant="outlined">Create Post</Button></Link>
                    </>
                )}

                {this.props.reduxState.buyReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            <BuyShoeDetails shoe={shoe} history={this.props.history}/>
                        </div>
                    )
                }//end map
                )}
            </Box>
        )

    }
};//end class

// const mapStateToProps = state => ({ user: state.user });
const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user });
export default connect(putPropsOnState)(BuyPage);