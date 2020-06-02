import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import MUI
import { Box, Button, Grid, Typography, Card, CardMedia, CardContent, CardActionArea, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {
    return ({
        title: {
            display: 'inline-block',
            fontSize: '50px',
            height: '50px',
            marginTop: '70px',
            marginBottom: '40px',
            width: '100%',
            marginRight: '2%',
            marginLeft: '2%',
        },
        button: {
            marginLeft: '2%',
            marginTop: '15px'
        },
        media: {
            height: '400px',
            maxWidth: '600px',
            boxShadow: '0px 0px 5px'
        },
        card: {
            boxShadow: '0px 0px 3px'
        }
    })
}

class HomeSelectShoe extends Component {

    componentDidMount() {
        console.log('HomeSelectShoe MOUNTED');
        this.props.dispatch({
            type: 'fetch_home_detail',
            payload: this.props.match.params.id
        })
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid>
                <Link to="/home"><Button className={classes.button} variant="outlined">Back To List</Button></Link>
                {this.props.detail.map((shoe) =>
                    <Card className={classes.card} variant="outlined" key="shoe.post_id">
                        <CardActionArea>
                            <CardContent>
                                <Typography className={classes.title}>{shoe.post_name}</Typography>
                                <CardMedia className={classes.media}image={shoe.post_image} title={shoe.post_name} />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </Grid>
        )
    }
};//end class

//put redux state on props
const putPropsOnState = reduxState => ({ reduxState, detail: reduxState.details })
//connect withStyles and props to component
export default connect(putPropsOnState)(withStyles(styles)(HomeSelectShoe));