import React from 'react';
import img from 'E:/blog/src/images/logo.png';
import 'E:/blog/src/App.css';
// import { useNavigate } from "react-router-dom";


const headerTag = () => {
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
    <a className="get-started" href="#">Get started</a>
</div>
</div>

   )
   }
        
export default headerTag;