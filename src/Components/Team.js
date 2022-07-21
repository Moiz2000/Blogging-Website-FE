import React from 'react';
import 'E:/blog/src/App.css';
import imgt from "E:/blog/src/images/Tayyaba.jpeg";
import imgs from "E:/blog/src/images/sawera.jpeg";
import imgi from  "E:/blog/src/images/Ibrahim.jpeg";
import imgm from   "E:/blog/src/images/Owais.jpeg";
import imgo from    "E:/blog/src/images/Mubeen.jpeg";


function Team() {
  return (
    
    <div id="team">
    <div className="container">
       <hr />
       <h1>OUR TEAM</h1>
       <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae illum quasi, ea nobis deleniti dolore tempora repudiandae totam dolores sed porro sequi nostrum natus earum. Cum voluptate magni est.</p> 
       <div className="row1">
      <div className="column">
        <div className="card">
        <img src={imgs} alt="" />
       </div>
       <h5>
        Sawera Rehman</h5>
        <p>Team-4 Leader</p>
      </div>
      <div className="column">
        <div className="card">
        <img src={imgt} alt="" />
        </div>
        <h5>Tayyaba Tbasssum</h5>
        <p>Team member</p>
      </div>
      <div className="column">
        <div className="card">
        <img src={imgi} alt="" />
        </div>
        <h5>Ibrahim Ali</h5>
        <p>Team member</p>
      </div>
      <div className="column">
        <div className="card">
        <img src={imgo} alt="" />
        </div>
        <h5>Mubeen  Riaz</h5>
        <p>Team Member</p>
      </div>
      <div className='owais-box'>
      <div className="column">
        <div className="card">
        <img src={imgm} alt="" />
        </div>
        <h5>Muhammad Owais </h5>
        <p>Team member</p>
      </div>
      </div>
    </div>
    
       </div>
        </div>
  )
  
}

export default Team;
