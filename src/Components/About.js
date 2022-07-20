import React from "react";
import 'E:/blog/src/App.css';
import img3 from "E:/blog/src/images/groip.svg";
const aboutfunction = ( ) =>
{
 return(

  <div className="homesection" id="about">
  <img className='ii-img' src={img3} alt="" />

    <div className="person" >
     <h2>
      WHAT IS BLOG BUZZ?
     </h2>
     <p>Blog Buzz is a blogging website where a user can post blogs and 
          view, comment and like other user's blogs. This is the home 
          page where the user can read the website description, get to 
          kniw about it's services and get to know about the team who 
          developed this website</p>
     </div>

  </div>

    );
}


export default aboutfunction;