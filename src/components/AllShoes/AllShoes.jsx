import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import MUI
import { Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
//import moment for formatting date
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
            borderBottom: '2px solid black',
            width: '100%',
            marginRight: '2%',
            marginLeft: '2%',
        },
        media: {
            height: '275px',
            width: '450px',
            maxWidth: '450px',
            position: 'center',
            width: '100%'
        },
        button: {
            width: '250px',
            letterSpacing: '5px',
            paddingTop: '0px'
        },
        card: {
            boxShadow: '0px 0px 2px #28283e',
            maxWidth: '90%',
            width: '450px',
            margin: '18px 0px',
            padding: '5px'
        },
        grid: {
            marginRight: '2%',
            marginLeft: '2%',
            width: '100%'
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


class AllShoes extends Component {
    componentDidMount() {
        console.log('AllShoes MOUNTED');
        //GET request to saga which will retrieve data from DB and send to our reducer.
        this.props.dispatch({
            type: 'fetch_all'
        })
        //takes us back to the top of the page when component loaded
        window.scrollTo(0, 0);
    };//end componentDidMount

    handleClick = (shoe) => {
        //when the image is clicked, send us to the details page for that specifc shoe.
        this.props.history.push(`/allShoes/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        //allows us to use withStyles
        const { classes } = this.props;
        return (
            <Box className={classes.page}>
                {/* <Box> */}
                <Typography variant="h3" className={classes.title}>All Shoes</Typography>
                {/* </Box> */}
                {/* <Box>
                    <Typography>DESCRIPTION BOX</Typography>
                </Box> */}
                {/* BUTTON APPEARS IF USER */}
                {this.props.user.id && (
                    <>
                        <Link to="/create"><Button className={classes.createBtn} variant="outlined">Create Post</Button></Link>
                    </>
                )}
                {/* BEGIN GRID */}
                <Grid container className={classes.grid} item xs s md l direction="row" justify="center" spacing={2}>
                    {this.props.reduxState.allShoesReducer.map((shoe, index) => {
                        let date = moment(shoe.post_date).format('MMM Do, YYYY')
                        return (
                            <Grid container key={index} item xs s={6} md={4} l={4}>
                                {/* allows home page to show all shoes from all categories with ternary */}
                                {shoe.post_cat === 1 | 2 | 3 &&
                                    <Card variant="outlined" className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="h6">{shoe.post_name}</Typography>
                                                <CardMedia className={classes.media} onClick={(event) => this.handleClick(shoe)} image={shoe.post_image} title={shoe.post_name} />
                                            </CardContent>
                                            <CardActions>
                                                <Button onClick={(event) => this.handleClick(shoe)} className={classes.button}>DETAILS</Button>
                                                <Typography className={classes.user}>posted by {shoe.username} on {date}</Typography>

                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                }  {/* END TERNARY */}
                            </Grid>
                        )//end return
                    })} {/* END MAP */}
                </Grid>
            </Box>


            // <Box>
            //     <h1>AllShoes</h1>
            //     <br />
            //  
            //     {/* Map all shoes so they can all be displayed on the DOM */}
            //     {this.props.reduxState.allShoesReducer.map((shoe, index) => {
            //         return (
            //             <div key={index}>
            //                 <img onClick={(event) => this.handleClick(shoe)} src={shoe.post_image} alt={shoe.post_name} width="450px" />
            //             </div>
            //         )//end return
            //     })}
            // </Box>
        )//end return
    };//end render
};//end class

//connect redux to props
const putPropsOnState = reduxState => ({ reduxState, user: reduxState.user })
//connect to component with withStyles
export default connect(putPropsOnState)(withStyles(styles)(AllShoes));
