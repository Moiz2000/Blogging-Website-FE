import React, { Component } from 'react';
import './App.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Login from './Components/Login';
import  Masterpage from './Components/Bloglisting/Masterpage';
import Showblog from './Components/Bloglisting/Showblog';
import Postblog from './Components/Bloglisting/Postblog';
import Masterpage1 from 'E:/blog/src/Masterpage1';
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Landingpage/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/masterpage' exact element={<Masterpage/>}/>
        <Route path='/masterpage' exact element={<Masterpage1/>}/>
        <Route path='/showblog' exact element={<Showblog/>}/>
        {/* <Route path='postblog' exact element={<Postblog/>}/> */}

       </Routes>
       </BrowserRouter> 
      </div>
    );
  }
}

export default App;
