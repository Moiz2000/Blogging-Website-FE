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
  
  <div className="headerleft" >
    <img className='logo-img' src={img} alt="" />
    <a href="#home" class="logo">Blog Buzz</a>
  </div> 

  <div className="headercenter headerlist headerlistitem">
    <a className=
    "home" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#team">Team</a>
    <a  onClick={() => navigate('/Masterpage')}>Blogs</a>
  </div>

  <div className='headerright'>
    <button onClick={() => navigate('/loginpage')} className="get-started"> Get Started</button>
  </div>
</div>

   )
   }
        
export default HeaderTag;