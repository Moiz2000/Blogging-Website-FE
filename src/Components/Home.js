import React from "react";
import "E:/blog/src/Components/Home.css";
import bg from "E:/blog/src/images/1.jpg";
import img from 'E:/blog/src/images/logo.jpg';
import {useNavigate} from "react-router-dom";
import { Home } from "@mui/icons-material";


const HomeTag = () => {
  const navigate = useNavigate()

  return (
  <header>
<div  className="conatiner" id="home">
     <img src={bg} className="bg-img" />
     <h1 href="#home" className="logo-name"> Blog Buzz </h1>
<div className="name">
             <h1>
             Welcome To   
             <span>Blog Buzz</span>
             </h1>
          <p>
          Blog Buzz is a blogging website where a user can post blogs and
          view, comment and like other user's blogs. This is the home
          page where the user  can read the website description, get to
          kniw about it's services and  get to know about the team who
          developed this website
          </p>
          </div>
          <ul className="list">
         <span><li><a onClick={() => navigate('/homepage')}>BLOGS</a></li></span>  
          <span><li><a onClick={() => navigate('/loginpage')}>GET STARTED</a></li></span> 
          </ul>
 
</div>

</header>          
     

  );
};
export default HomeTag;
