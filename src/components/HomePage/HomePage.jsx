import React, { Component } from 'react';
import { connect } from 'react-redux';
//import for MUI
import { withStyles } from '@material-ui/core/styles';
import { Grid, Box, Container, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions, Button } from '@material-ui/core'; //Typography, Button, Link, Grid,


//styles to call MUI
const styles = theme => {
    return ({
        page: {
            marginTop: '0px',
            overflow: 'hidden',
            width: '100%'
        },
        title: {
            display: 'inline-block',
            fontSize: '50px',
            height: '50px',
            marginTop: '120px',
            marginBottom: '15px',
            borderBottom: '2px solid black',
            width: '100%'
        },
        media: {
            height: '275px',
            maxWidth: '400px',
            position: 'center'
            // paddingLeft: '50px'
        },
        button: {
            width: '400px',
            letterSpacing: '5px',
            paddingTop: '0px'
        },
        card: {
            boxShadow: '0px 0px 2px #28283e',
            maxWidth: '440px'
        },
    })
};//end styles

class HomePage extends Component {

    componentDidMount() {
        console.log('Home Page MOUNTED', this.props.reduxState);
        //dispatch to redux GET
        this.props.dispatch({
            type: 'fetch_shoes'
        });//end dispatch
    };//end componentDidMount

    //this event pushes us to the selected shoe page by id
    handleClick = (shoe) => {
        console.log('WHAT IS MY SHOE', shoe);
        this.props.history.push(`/home/details/${shoe.post_id}`)
    };//end handleClick

    render() {
        //allows us to use withStyles in render
        const { classes } = this.props;
        return (
            <Container maxWidth="m" className={classes.page} >
                <Typography variant="h3" className={classes.title}>Recent Posts</Typography>
                {/* BEGIN GRID */}
                <Grid direction="row" justify="center" alignItems="center">
                    {this.props.reduxState.homeReducer.map((shoe, index) => {
                        return (
                            <Box key={index}>
                                {/* allows home page to show all shoes from all categories with ternary */}
                                {shoe.post_cat === 1 | 2 | 3 &&
                                    <Card variant="outlined" className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="h6">{shoe.post_name}</Typography>
                                                <CardMedia className={classes.media} onClick={(event) => this.handleClick(shoe, event)} image={shoe.post_image} title={shoe.post_name} />
                                            </CardContent>
                                            <CardActions>
                                                <Button className={classes.button}>DETAILS</Button>
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                }  {/* END TERNARY */}
                            </Box>
                        )//end return
                    })} {/* END MAP */}
                </Grid>
            </Container>
        )//end return
    }//end render
};//end class

//connect redux to props
const putPropsOnState = reduxState => ({ reduxState })
//wrap withStyles to allow MUI styling
export default connect(putPropsOnState)(withStyles(styles)(HomePage));
