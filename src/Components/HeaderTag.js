import React from 'react';
import img from 'E:/blog/src/images/logo.png';
import 'E:/blog/src/App.css';
import { useNavigate } from "react-router-dom";


const headerTag = () => {

  let history = useNavigate;
   return(
      <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <img className="logo-image" src={img} alt="" />

        <span class="fs-4">Blog Buzz</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Team</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
        <button onClick={() => { history.push("/src/Components/LogIn.js");}}><li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Get started</a></li></button>

      </ul>
    </header>
  </div>
   )
   }
        
export default headerTag;