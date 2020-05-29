import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'; //Typography, Button, Link, Grid,

//styles to call MUI
const styles = theme => {
    return ({

    })
};//end styles

class HomePage extends Component {

    componentDidMount() {
        console.log('Home Page MOUNTED', this.props.reduxState.getShoesReducer);
        //dispatch to redux GET
        this.props.dispatch({
            type: 'fetch_all'
        });//end dispatch
    };//end componentDidMount

    handleClick = (shoe, event) => {
        console.log('WHAT IS MY SHOE', shoe);
        this.props.history.push(`/home/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        return (
            <Box>
                <h1>Home Page</h1>
                <h1>Recent Posts</h1>
                {this.props.reduxState.allShoesReducer.map((shoe, index) => {
                    return (
                        <div key={index}>
                            {shoe.post_cat === 1 | 2 | 3 &&
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


const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(withStyles(styles)(HomePage));
