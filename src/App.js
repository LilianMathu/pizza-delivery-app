import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
                                                                                                      
import Navbar from './Components/Navbar';


import {  Switch, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return(
    <Router>
      <Navbar />

      <Switch>

      </Switch>
    </Router>
  )
}

export default App;
