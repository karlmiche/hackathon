import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Appbar from './Appbar'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
title: {
    paddingTop: "300px",
    paddingLeft: "100px",
},
button: {
    backgroundColor: "#00B4EB",
    marginLeft: "50px",
    color: "#fff",
    paddingLeft: "30px",
    paddingRight: "30px",
    
}
}))

const Home = () => {
const classes = useStyles()

    return (
        <div>
            <Grid container spacing={12} className={classes.title}>
                <Grid item></Grid>
                <Grid item xs={6}>
                    <h1>There's magic in the making...I wonder what I'll be!</h1>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://placekitten.com/200/150" />
                </Grid>
                <Button className={classes.button}>Explore</Button>
            </Grid>
            <Grid container spacing={12}>
                
            </Grid>


        </div>
    );
};

export default Home;