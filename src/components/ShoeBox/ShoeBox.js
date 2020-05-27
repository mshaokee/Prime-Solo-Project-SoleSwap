import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Box } from '@material-ui/core';

class ShoeBox extends Component {

  componentDidMount(){
    console.log('ShoeBox MOUNTED');
    //dispatch to redux GET
    this.props.dispatch({
      type: 'FETCH_shoeBox'
    });//end dispatch
  };//end ShoeBox

  render() {
    return (
      <Box>
        <h1>Shoe Box</h1>
        {this.props.reduxState.getShoesReducer.map((shoe, index) => {
          return (
            <div key={index}>
              <h1>{shoe.post_name}</h1>
              <img src={shoe.post_image} alt={shoe.post_name} width="330" height="280" />
              <h1>by: {shoe.username}</h1>
            </div>
          );//end return
        }//end map
        )}
      </Box>
    )
  }
};

//connect to saga and redux
const putStateOnProps = reduxState => ({reduxState})
export default connect(putStateOnProps)(ShoeBox);
