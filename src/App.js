import React, { Component } from 'react';
import './App.css';
// import Landingpage from './src/Pages/Homepage';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import  Masterpage from './Pages/Masterpage';
import Homepage from './Pages/Homepage';
import Loginpage from './Pages/Loginpage';
import SignUp from './Pages/Signuppage';
import Afterloginpage from './Pages/Afterloginpage/Afterloginpage';
import SinglePost from './Components/Singlepost/Singlepost';
import Writepostpage from './Pages/Writepostpage/Writepostpage';
import Settings from './Pages/Setting/Setting';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/loginpage' exact element={<Loginpage/>} />
        <Route path='/signupage' exact element={<SignUp/>} />
        <Route path='/masterpage' exact element={<Masterpage/>} />
        <Route path='/afterloginpage' exact element={<Afterloginpage/>}/>
        <Route path='/Writepostpage' exact element={<Writepostpage/>}/>
        <Route path='/singlepost' exact element={<SinglePost/>}/>
        <Route path='setting' exact element={<Settings/>}/>

       </Routes>
       </BrowserRouter> 
      </div>
    );
  }
}

export default App;
