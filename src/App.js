import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Home from './components/Home';
import ActivityTracker from './components/ActivityTracker'
import TaskView from './components/TaskView'


function App() {
  return (
    <div className="App">
      our hackathon project!
      <Route exact path='/home' component={Home} />
      <Route path='/activityTracker' component={ActivityTracker} />
      <Route exact path='/tasks' component={TaskView} />
    </div>
  );
}

export default App;
