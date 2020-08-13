import React from 'react'
import './ActivityTracker.css'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

export default function ActivityTracker() {
  
  return (
    <div className="papaDiv">
      <div className="circle1Div">
        <img className="circleImg" src="./circle1.png" alt="first progress bar" />
      </div>
      <div className="circle2Div">
        <img className="circleImg" src="./circle2.png" alt="second progress bar" />
      </div>
      <div className="circle3Div">
        <img className="circleImg" src="./circle3.png" alt="third progress bar" />
      </div>
      <div className="circle4Div">
        <img className="circleImg" src="./circle4.png" alt="fourth progress bar" />
      </div>
      <Button
        variant="contained"
        color="primary"
        >
        <Link
        className='link' to='/tasks'>Check Your Progress</Link>
        </Button>
    </div>
  )
}