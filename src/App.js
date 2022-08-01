import React, { Component } from 'react';
import './App.css';
// import Landingpage from './src/Pages/Homepage';

import Firstpage from './Pages/Firstpage';
import Homepage from "./Pages/homepage/Homepage";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import  Masterpage from './Pages/Masterpage';
import Loginpage from './Pages/Loginpage';
import SignUp from './Pages/Signuppage';
import Comments from './Components/comments/Comments';



function App() {

  const currentUser = true;
    return (
      <div className="App">
      <BrowserRouter>
       <Routes>
        <Route exact path='/' element={<Firstpage/>} />
        {/* <Route path="/loginpage">{currentUser ? <Homepage /> : <Loginpage />}</Route> */}

        <Route path='/loginpage' exact element={<Loginpage/>} />
        <Route path='/signupage' exact element={<SignUp/>} />
        <Route path='/masterpage' exact element={<Masterpage/>} />
        <Route path='/homepage' exact element={<Homepage/>}/>
        <Route path='/write' exact element={<Write/>}/>
        <Route path='/single' exact element={<Single/>}/>
        <Route path='/settings' exact element={<Settings/>}/>
        <Route path='/comments' exact element={<Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />}/>
      </Routes>
       </BrowserRouter> 
      </div>
    );
  }
export default App;
