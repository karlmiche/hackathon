import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Appbar from './Appbar'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles';
import TextTransition from './Text'
const useStyles = makeStyles((theme) => ({
title: {
    paddingTop: "100px",
    paddingLeft: "50px",
    textAlign: "left",
},
button: {
    backgroundColor: "#00B4EB",
    marginLeft: "30px",
    color: "#fff",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontSize: "30px",
    textDecoration: "none",
},
picture: {
    width: "300px",
    height: "300px",
    textAlign: "right",
    marginLeft: "200px"
},
tagline: {
    fontSize: "36pt"
}
}))
const Home = () => {
const classes = useStyles()
    return (
        <div>
            <Grid container spacing={12} className={classes.title}>
                <Grid item></Grid>
                <Grid item xs={6}>
                    <h1 className={classes.tagline}>There's magic in the making...I wonder what I'll be! <TextTransition /></h1> 
                </Grid>
                <Grid item xs={6}>
                    <img src="./DoctorFemale.png" className={classes.picture}/>
                </Grid>
                <Button className={classes.button}><Link style={{ textDecoration:"none"}} to="/explore">Explore</Link></Button>
            </Grid>
            <Grid container spacing={12}>
                
            </Grid>
        </div>
    );
};
export default Home;