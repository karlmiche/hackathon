import React, { useState }from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import PictureOptions from './PictureOptions';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    anya: {
        textAlign: "left",
        textEmphasis: "bold",
        width: "80vw",
        marginTop: "5vw"
    },
    bigBoy: {
        textAlign: "center",
        marginLeft: "100px"
    },
    patientBtn: {
        marginTop: "7vw"
    },
    caption: {
        textAlign: "left",
        marginBottom: "2vw"
    }
  }));

const TaskView = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid className={classes.bigBoy} container spacing={3}>
                <Grid item xs={12}></Grid>
                <Grid item xs={8}></Grid>
                <Typography className={classes.anya} variant="h5">Good Afternoon, Dr. Anya. Your patient Charlie is here to see you. First, let’s get ready to take care of Charlie.</Typography>
                <Grid item xs={12}></Grid>
                <Grid item xs={4}>
                    <Typography className={classes.caption} variant="h5">Task 1: Charlie has a broken leg. What should you put in your doctor’s bag?</Typography>
                    <Card className={classes.paper}>
                        <img src="./doctor.png">
                        </img>
                        <div>
                            <h6>Content</h6>
                            <p>Content paragraph</p>
                        </div>
                    </Card>
                </Grid>
                {/* <Typography variant="h5">Check off tasks to mark your progress!</Typography> */}
                <Grid item xs={5}>
                    <PictureOptions />
                </Grid>
                <Grid item xs={6}>
                <Button 
                        variant="contained" 
                        color="secondary" 
                        >
                        <Link 
                        className='link' to='/home'>Take Care of Patient</Link>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default TaskView;