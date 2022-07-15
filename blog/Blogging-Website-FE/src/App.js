import React, { Component } from 'react';
import './App.css';
import HeaderTag from './Components/HeaderTag';
import HomeTag from './Components/Home';
import {BrowserRouter as Router, Route,Switch } from "react-router-dom;"
class App extends Component {
  render() {
    return (
      <div className="App">
       <  HeaderTag/>
       <HomeTag/>
       <Router>
         <Switch>
          {/* <Route exact path="/LogIn.js" Component={LogIn} /> */}
          {/* <Route exact path="/LogIn" Component={LogIn} /> */}
          </Switch>

         </Router>
      </div>
    );
  }
}

export default App;
