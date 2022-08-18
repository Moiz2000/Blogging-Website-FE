<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./singlePost.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
=======
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Singlepost.css";
import axios from 'axios';

>>>>>>> 1806083672d04c5459091a842a3c9d7ce904d4e7
export default function SinglePost() {

  const user = true;
  const location = useLocation();
  const Id=location.pathname.split("/")[2];
  const [blog,setBlog]=useState([])
  const [cat,setCat]=useState([]);
  useEffect(()=>{
    const FetchBlog = async()=>{
      const response=await axios.get("http://localhost:5000/blog/"+Id)
      console.log(response)
      setBlog(response.data[0])

    }
    FetchBlog()
  },[Id])

  useEffect(()=>{
    const FetchPost = async()=>{
      const response=await axios.get("http://localhost:5000/blog/blogtag/"+Id)
      console.log(response)
      setCat(response.data)
    }
    FetchPost()
  },[Id])
  return (
    <div className="singlePost">
      {/* <br /> */}
      <div className="singlePostWrapper">
        <div className="grid">
       <h1 className="singlePostTitle">
<<<<<<< HEAD
        Create Hands-Free on Instagram </h1>
        <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
            Category : Music
            </Link>
          </span>
          <br />
          <div className="comment-image-contaierr">
      <Avatar alt="Tayyaba Tabassum"  className="imgg" src="/static/images/avatar/2.jpg" />        
      <div className="comment-right-partt">
        <div className="comment-contentt">
          <div className="comment-authorr">Tayyaba Tabassum</div>
          <div>12:30 pm</div>
        </div>
        </div>
        </div>  
      </div> 
        <div className="singlePostEdit">
         {
          user &&
          <ul>
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
          
          </ul>} 
            </div>
        <img className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> 
        <p className="singlePostDesc">
           
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit
=======
        {blog.Title}</h1>
        <span className="postCat">Category:
        {
          cat.map((c)=>(
            <Link className="link" to={`/homepage?cat=${c.name}`}>
              {'     '+c.name}
            </Link>
          ))}
        
        </span>
        </div> 
        <p className="singlePostDesc">
          { blog.ImageName || <img className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> }
         <div >
          <span className="singlePostInfo">
            Author:
              <Link className="link" to={`/homepage?user=${blog.name}`}>
                {blog.name}
              </Link>
            <br />
          </span>
          <span className="singlePostInfo1">{new Date(blog.Create_Time).toDateString()}</span>
        </div> 
        {blog.Text}
>>>>>>> 1806083672d04c5459091a842a3c9d7ce904d4e7
        </p>
        <hr />
        {
          user &&
        <ul>
<<<<<<< HEAD
    <Link to="#"><i className="fa fa-heart fa-3x" aria-hidden="true" id="like"></i></Link> 
<Link to="/comments"><i class="fa fa-comment fa-3x" aria-hidden="true" id="comm"></i></Link>
        </ul> }
        
=======
          <li className="like">
              Like
          </li>
          <li className="comment">
            <Link className="link" to={`/comments/${blog.id}`}>
              Comment
            </Link>
          </li>
        </ul>
        }
>>>>>>> 1806083672d04c5459091a842a3c9d7ce904d4e7
      </div>
    </div>
  );
}
