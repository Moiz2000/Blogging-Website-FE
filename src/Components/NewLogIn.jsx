import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {userInfo} from './UserData';
import './LogInCss.css';

// import { isMobile } from "react-device-detect";
// import { Box, Heading, Form, TextInput, Button, Text } from "grommet";

const NewLogin = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [allEntry,setAllEntry]=useState(userInfo);
    const SubmitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,username:username};
        localStorage.setItem("email", email)
        localStorage.setItem("username",username)
        setAllEntry([...allEntry, newEntry]);
    }
    return (
        <div className='LogInmain'>
        <button className='Backbtn'>Go Back</button>
        <div className='heading'>LogIn to Account</div>
        <form action='' onSubmit={SubmitForm}>
        <input className='inputEmail' type='email' name="email" placeholder='Enter your Email here' value={email} required
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input className='inputUsername' type="text" name="username" placeholder='Enter your Username here' value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        required/>
        <input className='RememberCheck' type='checkbox'/>
        <p className='RememberText'>Remember Me</p>
        <p className='Forget'>Forget Password?</p>
        <button className='SignInButton' type='submit'>Log In</button>
        </form>
        <div className='SignUpcontent'>
        <p className='Hello'><u>Hello, Friends!</u></p>
        <p className='Para'>Enter your information and share your journey with people accross the world</p>
        <form className='ForSignUp'>
        <button className='SignUpLink' type='submit'>SignUp</button>
        </form>
        </div>
        </div>
    );
  }
  
  export default NewLogin
  