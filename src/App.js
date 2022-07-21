import React, { Component } from 'react';
import './App.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Login from './Components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Landingpage/>} />
        <Route path='/login' exact element={<Login/>} />
       </Routes>
       </BrowserRouter> 
      </div>
    );
  }
}

export default App;
