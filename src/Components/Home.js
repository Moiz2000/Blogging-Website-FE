import React from 'react';
import 'E:/blog/src/App.css';
import img1 from 'E:/blog/src/images/envelope.png';


const homeTag = () => {
   return(
    <div>
        <div className='home-design'>
<h1>Welcome To Blog Buzz</h1>
<img className="envelop-image" src={img1} alt="" />
<p>Blog Buzz is a blogging website where a user can post <br /> blogs and view, comment and like other user's blogs. <br /> This is the home page where the user can read the <br /> website description, get to kniw about it's services and  <br /> get to know about the team who developed this website</p>
</div>
 </div>
   )
}
export default homeTag;