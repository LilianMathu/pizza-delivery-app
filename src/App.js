import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
                                                                                                      
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Menu from './Components/Menu';

import {  Switch, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <Navbar />
      <Jumbotron />
      <Menu />

      <Switch>

      </Switch>
    </Router>
  )
}

export default App;
