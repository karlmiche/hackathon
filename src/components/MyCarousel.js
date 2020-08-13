import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Artist',
    imgPath:
      './ArtistFemale.png',
  },
  {
    label: 'Chef',
    imgPath:
      './ChefFemale.png',
  },
  {
    label: 'Doctor',
    imgPath:
      './DoctorFemale.png',
  },
  {
    label: 'Driver',
    imgPath:
      './DriverFemale.png',
  },
  {
    label: 'Engineer',
    imgPath:
      './Engineer.png',
  },
  {
    label: 'Judge',
    imgPath:
      './Judge.png',
  },
  {
    label: 'Nurse',
    imgPath:
      './Nurse.png',
  },
  {
    label: 'Scientist',
    imgPath:
      './Scientist.png',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
    margin: "0 auto",
    marginTop: "7vw"
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  startBtn: {
    marginTop: "7vw",
    backgroundColor: "#00B4EB",
    fontFamily: "Montserrat",
    color: "white",
    textDecoration: "none",
    borderRadius: "25px",
    height: "4vw",
    width: "27vw",
},
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Link to="/tasks"><Typography>{tutorialSteps[activeStep].label}</Typography></Link>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <Button className={classes.startBtn}><Link className="link" to="/activityTracker">Let's get started!</Link></Button>
    </div>
  );
}

export default SwipeableTextMobileStepper;