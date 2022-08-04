import React from "react";
import "E:/blog/src/App.css";
import bg from "E:/blog/src/images/1.jpg";
import img from 'E:/blog/src/images/logo.jpg';
import {useNavigate} from "react-router-dom";


const HomeTag = () => {
  const navigate = useNavigate()

  return (

<div className="home-container" id="home">
      <img src={bg}  alt="background-image" className="bg-img" />
   
<div className="top-left">
    <a href="#home" className="logo-name" >Blog Buzz</a>
</div>  
   
      <div class="centered">
      <div class="row">
    <div class="column-66">
             <h1>
             Welcome To   
             <span>Blog Buzz</span>
             </h1>
          <p>
          Blog Buzz is a blogging website where a user can post blogs and
          view, comment and like other user's blogs. This is the home
          page where the user can read the website description, get to
          kniw about it's services and get to know about the team who
          developed this website
          </p>
  </div>
  </div>
  <div >

    <a className="sidebarList sidebarlistItem" onClick={() => navigate('/homepage')}>Blogs</a>
    <button className="sidebarList sidebarlistItem get-started" onClick={() => navigate('/loginpage')}> Get Started</button>

  </div>
</div>
</div>

          
     

  );
};
export default HomeTag;
