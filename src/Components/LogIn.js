import React from 'react';
import {useNavigate} from 'react-router-dom';
import 'E:/blog/src/App.css';
// import { isMobile } from "react-device-detect";
// import { Box, Heading, Form, TextInput, Button, Text } from "grommet";


function Login(){

  const navigate = useNavigate()

  return (
        <div className='LogInmain'>
        <div className='heading'>LogIn to Account</div>
        <form action='/'>
        <input className='inputEmail' type='email' placeholder='Enter your Email here' required/>
        <input className='inputUsername' type="text" placeholder='Enter your Username here' required/>
        <input className='RememberCheck' type='checkbox'/>
        <p className='RememberText'>Remember Me</p>
        <p className='Forget'>Forget Password?</p>
        <button onClick={() => navigate('/masterpage')} className='SignInButton' type='submit'>Log In</button>
        </form>
        <div className='SignUpcontent'>
        <p className='Hello'><u>Hello, Friends!</u></p>
        <p className='Para'>Enter your information and share your journey with people accross the world</p>
        <form className='ForSignUp'>
        <button className='SignUpLink'>SignUp</button>
        </form>
        </div>
        </div>
    );
  }
  
  export default Login;
  