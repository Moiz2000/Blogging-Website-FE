import React from "react";
import 'E:/blog/src/App.css';
import img3 from "E:/blog/src/images/groip.svg";
const aboutfunction = ( ) =>
{
 return(

  <div id="about">
     <div class="container">
  <div class="row">
    <div class="column-33">
    <img className='ii-img' src={img3} alt="" />
    </div>
    <div class="column-66">
    <h1>
      WHAT IS BLOG BUZZ?
     </h1>
     <p> Blog Buzz is a blogging website where a user can post blogs and <br />
          view, comment and like other user's blogs. This is the home <br />
          page where the user can read the website description, get to <br />
          kniw about it's services and get to know about the team who <br />
          developed this website</p>
    </div>
  </div>
</div>
  </div>

    );
}


export default aboutfunction;