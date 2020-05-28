import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box } from '@material-ui/core';
import SelectShoe from '../SelectShoe/SelectShoe';
import { Link } from 'react-router-dom';

class BuyPage extends Component {

    componentDidMount() {
        console.log('Buy Page MOUNTED', this.props.reduxState.user)
    }

    render() {
        return (
            <Box>
                <h1>BuyPage</h1>
                {/* {this.props.user.id} */}
                <br />
                <Link to="/create"><button>Create Post</button></Link>
                {this.props.reduxState.getShoesReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            <SelectShoe shoe={shoe} />
                        </div>
                    )
                }//end map
                )}
            </Box>
        )

    }
};//end class

// const mapStateToProps = state => ({ user: state.user, });
//reduxState.user should be same thing.
const putPropsOnState = reduxState => ({ reduxState });
export default connect(putPropsOnState)(BuyPage);