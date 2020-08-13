import React, { useState } from 'react'
import './ActivityTracker.css'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Link, Redirect, withRouter} from 'react-router-dom';
import Clock from './ClockIcons/Clock'
import ClockOverlay from './ClockIcons/ClockOverlay'
import Section1 from './ClockIcons/Section1'
import Section2 from './ClockIcons/Section2'
import Section3 from './ClockIcons/Section3'
import Section4 from './ClockIcons/Section4'
import Section5 from './ClockIcons/Section5'

export default function ActivityTracker(props) {
  
  const [redirectToTasks, setRedirectToTasks] = useState(false)

  function handleClick() {
    setRedirectToTasks(true)
    console.log('handleClick')
  }
  if (redirectToTasks) {
    return (
    <Redirect to='./tasks' />
    )
  }
  return (
    <div>
      <h1>My Schedule</h1>
    <div className="papaDiv">
      <div className='clock' onClick={handleClick}>
        <Clock  />
      </div>
     <div className='clockOverlay'>
       <ClockOverlay />
     </div>
     <div className='section1'>
       <Section1 />
     </div>
     <div className='section2'>
       <Section2 />
     </div>
     <div className='section3'>
       <Section3 />
     </div>
     <div className='section4'>
       <Section4 />
     </div>
     <div className='section5'>
       <Section5 />
     </div>
     <div className='doctorDiv'>
       <img src='./DoctorFemale.png' />
     </div>
    </div>
    </div>
  )
}