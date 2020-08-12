import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Home from './Home';
import ActivityTracker from './components/ActivityTracker'



function App() {
  return (
    <div className="App">
      our hackathon project!
      <Route exact path='/home' component={Home} />
      <Route path='/activityTracker' component={ActivityTracker} />
    </div>
  );
}

export default App;
