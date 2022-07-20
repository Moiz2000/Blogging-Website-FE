import React from 'react';
import img from 'E:/blog/src/images/logo.png';
import 'E:/blog/src/App.css';
import { Navigate } from "react-router-dom";

function HeaderTag(){
   
   const [gotologin, setgotologin] = React.useState(false);
 

if(gotologin){
   return <Navigate to="/Login"/>;
 }

   return(
      <div class="header">
  <img className='logo-img' src={img} alt="" />
  <a href="#default" class="logo">Blog Buzz</a>
  <div class="header-right">
    <a className="home" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="team">Team</a>
    <a href="blogs">Blogs</a>
    <button className="get-started" onClick={() =>
   {setgotologin(true);
   }}
   >Get started</button>
</div>
</div>

   )
   }
        
export default HeaderTag;