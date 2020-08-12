import React, { useState }from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from './CheckBox';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const TaskView = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card className={classes.paper}>
                        <img src="http://placekitten.com/400/400"></img>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4">Lorem Impsum</Typography>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Button 
                variant="contained" 
                color="primary" 
                >
                <Link 
                className='link' to='/home'>Check Your Progress</Link>
                </Button>
                </Grid>
            </Grid>
            

        </div>
    );
};

export default TaskView;