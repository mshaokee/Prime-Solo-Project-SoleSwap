import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SelectShoe extends Component {

    componentDidMount() {
        console.log('SelectShoe MOUNTED');
    };//end componentDidMount

    handleClick = () => {
        console.log('Clicked on shoe image. Going to details page.');
        //store our data in a reducer
        this.props.dispatch({
            type: 'select_shoe',
            payload: this.props.shoe
        })
    };//end handleClick

    render() {
        return (
            <span>
                <h1>{this.props.shoe.post_name}</h1>
                <Link to="/details">
                    <img onClick={this.handleClick} src={this.props.shoe.post_image} alt={this.props.shoe.post_name} style={{ width: 'auto', height: 'auto', maxWidth: '250px', minWidth: '250px' }} />
                </Link>
                <h1>by: {this.props.shoe.username}</h1>
            </span>
        );//end return
    }
};//end class


const putPropsOnState = reduxState => ({ reduxState })
export default connect(putPropsOnState)(SelectShoe);