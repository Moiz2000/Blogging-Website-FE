import React, { Component } from 'react';
import './App.css';
import HeaderTag from './Components/HeaderTag';
import HomeTag from './Components/Home';
import About from './Components/About';
import Divider from './Components/Divider';
import Services from './Components/Services';
import {BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderTag/>
       <HomeTag/>
       <Divider/>
       <About/> 
       <Services/>
  {/* <Router>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </Router> */}
      </div>
    );
  }
}

export default App;
