import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import MUI
import { Box, Button, Grid, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//require moment for time
const moment = require('moment');

const styles = () => {
    return ({
        title: {
            display: 'flex',
            fontSize: '60px',
            height: '50px',
            marginTop: '70px',
            marginBottom: '40px',
            width: '100%',
            marginRight: '2%',
            marginLeft: '2%',
        },
        button: {
            marginLeft: '5%',
            marginTop: '15px',
            width: '200px',
            letterSpacing: '3px',
        },
        media: {
            height: '400px',
            maxHeight: '500px',
            maxWidth: '750px',
            boxShadow: '0px 0px 5px',
            marginLeft: '5%'
        },
        card: {
            boxShadow: '0px 0px 3px',
        },
        desc: {
            marginLeft: '2%',
            fontSize: '20px',
            borderTop: '1px solid black',
            paddingBottom: '100px'
        },
        user: {
            marginLeft: '2%',
            display: 'wrap',
            marginBottom: '5px',
        },

    })
}

class HomeSelectShoe extends Component {

    componentDidMount() {
        console.log('HomeSelectShoe MOUNTED');
        //send id data to get home shoe details
        this.props.dispatch({
            type: 'fetch_home_detail',
            payload: this.props.match.params.id
        })
    };

    render() {
        //allows us to use withStyles with class component
        const { classes } = this.props;
        return (
            <Grid>
                {this.props.detail.map((shoe) => {
                    let date = moment(shoe.post_date).format('MMM Do, YYYY');
                    return (
                            <Card className={classes.card} variant="outlined" key="shoe.post_id">
                                <CardActionArea>
                                    <CardContent>
                                        <Typography className={classes.title}>{shoe.post_name}</Typography>
                                        <Typography variant="h6" className={classes.user}>Posted by {shoe.username} on {date}</Typography>
                                        <Typography className={classes.desc}>{shoe.post_body}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActionArea>
                                    <CardMedia className={classes.media} image={shoe.post_image} title={shoe.post_name} />
                                    <CardActions>
                                        <Link to="/home"><Button className={classes.button} variant="outlined">Back To List</Button></Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                    )//end return
                })}
            </Grid>
        )//end return
    }//end render
};//end class

//put redux state on props
const putPropsOnState = reduxState => ({ reduxState, detail: reduxState.details })
//connect withStyles and props to component
export default connect(putPropsOnState)(withStyles(styles)(HomeSelectShoe));