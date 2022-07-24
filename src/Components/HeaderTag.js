import React from 'react';
import img from 'E:/blog/src/images/logo.png';
import 'E:/blog/src/App.css';
import {useNavigate} from "react-router-dom";


function HeaderTag(){
   const navigate = useNavigate()

// function onloginclick()
//       {
//       navigate("/Login")
//        }
      
   return(
      <div class="header">
  <img className='logo-img' src={img} alt="" />
  <a href="#home" class="logo">Blog Buzz</a>
  <div class="header-right">
    <a className=
    "home" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#team">Team</a>
    <a  onClick={() => navigate('/Masterpage')}>Blogs</a>
    <button onClick={() => navigate('/login')} className="get-started"> Get Started</button>
    {/* <Link to="/login">< className="get-started">Get started */}
</div>
</div>

   )
   }
        
export default HeaderTag;