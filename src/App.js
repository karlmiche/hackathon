import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import Home from './components/Home';
import ActivityTracker from './components/ActivityTracker'
import TaskView from './components/TaskView'
import MyCarousel from './components/MyCarousel'
import theme from './theme'
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Appbar from './components/Appbar';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar />
      <Route exact path='/' component={Home} />
      <Route path='/activityTracker' component={ActivityTracker} />
      <Route exact path='/tasks' component={TaskView} />
      <Route exact path="/explore" component={MyCarousel} />
      </ThemeProvider>
    </div>
  );
}

export default App;
