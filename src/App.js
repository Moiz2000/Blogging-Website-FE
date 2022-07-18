import React, { Component } from 'react';
import './App.css';
import HeaderTag from './Components/HeaderTag';
import HomeTag from './Components/Home';
import About from './Components/About';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderTag/>
       <HomeTag/>
       <About/>
        <Router>
         <Routes>
          {/* <Route exact path="/LogIn.js" Component={LogIn.js} /> */}
          {/* <Route exact path="/LogIn" Component={LogIn} /> */}
          </Routes>

         </Router> 

      </div>
    );
  }
}

export default App;
