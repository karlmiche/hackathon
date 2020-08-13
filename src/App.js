import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Home from './components/Home';
import ActivityTracker from './components/ActivityTracker'
import TaskView from './components/TaskView'
import Carousel from './components/Carousel.jsx'


function App() {
  return (
    <div className="App">
      <Route exact path='/home' component={Home} />
      <Route path='/activityTracker' component={ActivityTracker} />
      <Route exact path='/tasks' component={TaskView} />
      <Route path="/carousel" component={Carousel} />
    </div>
  );
}

export default App;
