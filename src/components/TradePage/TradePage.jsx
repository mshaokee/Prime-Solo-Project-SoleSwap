import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import MUI
import { Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//import moment for date formatting
const moment = require('moment');

const styles = () => {
    return ({
        page: {
            margin: '0px',
            overflow: 'hidden',
            paddingBottom: '75px',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
        },
        title: {
            display: 'inline-block',
            fontSize: '50px',
            height: '50px',
            marginTop: '120px',
            marginBottom: '15px',
            width: '100%',
            marginRight: '2%',
            marginLeft: '2%',
        },
        description: {
            marginBottom: '23px',
            borderBottom: '2px solid black',
            paddingLeft: '300px',
            paddingBottom: '5px',
        },
        media: {
            height: '275px',
            maxWidth: '450px',
            position: 'center',
            boxShadow: '0px 0px 1px 0px'
        },
        button: {
            width: '180px',
            letterSpacing: '5px',
            paddingTop: '0px',
        },
        card: {
            boxShadow: '0px 0px 2px #28283e',
            maxWidth: '90%',
            width: '450px',
            margin: '18px 0px',
            padding: '5px'
        },
        grid: {
            paddingTop: '10px',
            marginRight: '2%',
            marginLeft: '2%',
            width: '100%',
        },
        createBtn: {
            width: '250px',
            letterSpacing: '5px',
            padding: '3px',
            marginLeft: '50px',
        },
        user: {
            fontSize: '17px',
        }
    })
};//end styles

class TradePage extends Component {

    componentDidMount() {
        console.log('TradePage MOUNTED', this.props.reduxState.allShoesReducer);
        //Send a dispatch to get all shoes, will then display on the DOM.
        this.props.dispatch({
            type: 'fetch_all'
        });//end dispatch
        //takes us back to the top of the page when component loaded
        window.scrollTo(0, 0);
    };//end componentDidMount

    handleClick = (shoe) => {
        //collect data from inside the map and set as shoe, call in handleclick to send to params.
        console.log('Selecting specific shoe for details from Trade Page.');
        this.props.history.push(`/trade/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        //allows us to use withStyles on props through classes
        const { classes } = this.props;
        return (
            <Box className={classes.page}>
                <Typography variant="h3" className={classes.title}>Traders</Typography>
                <Typography className={classes.description}>This page views posts where users are looking to trade a shoe. If you would like to create a post,
                please log in. If you do not have an account please sign up at our log in page.</Typography>
                {/* BUTTON APPEARS IF USER */}
                {this.props.user.id && (
                    <>
                        <Link to="/create"><Button className={classes.createBtn} variant="outlined">Create Post</Button></Link>
                    </>
                )}
                {/* BEGIN GRID */}
                <Grid container className={classes.grid} justify="center" spacing={2}>
                    {this.props.reduxState.allShoesReducer.map((shoe, index) => {
                        let date = moment(shoe.post_date).format('MMM Do, YYYY')
                        return (
                            <Grid key={index}>
                                {/* ternary that allows only shows shoes in category 3, or trade*/}
                                {shoe.post_cat === 3 &&
                                    <Card variant="outlined" className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="h6">{shoe.post_name}</Typography>
                                                <CardMedia className={classes.media} onClick={(event) => this.handleClick(shoe)} image={shoe.post_image} title={shoe.post_name} />
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={(event) => this.handleClick(shoe)} className={classes.button}>DETAILS</Button>
                                                <Typography className={classes.user}>posted by {shoe.username} on {date}</Typography>
                                                <Typography variant="h6">{shoe.cat_name}</Typography>
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                }  {/* END TERNARY */}
                            </Grid>
                        )//end return
                    })} {/* END MAP */}
                </Grid>
            </Box>
        )//end return
    };//end render
};//end class

//put props on redux
const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user });
//connect redux with component and withStyles
export default connect(putPropsOnState)(withStyles(styles)(TradePage));
