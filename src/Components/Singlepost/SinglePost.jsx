import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Singlepost.css";
import axios from 'axios';

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
        {blog.Title}</h1>

        <span className="postCat">Category : 
        {
          cat.map((c)=>(
            <Link className="link" to={`/homepage?cat=${c.name}`}>
              {'     '+c.name}
            </Link>
          ))}
          </span>
        </div> 
        <p className="singlePostDesc">
           <img className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> 
         <div >
          <span className="singlePostInfo">
            Author:
              <Link className="link" to={`/homepage?user=${blog.name}`}>
              {blog.name}
              </Link>
            <br />
          </span>
          <span className="singlePostInfo1">1 day ago</span>
        </div>  
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi <br /> eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! <br /> Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit 
          <br />
           <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
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
        </p>
        <hr />
        {
          user &&
        
        <ul>
          <li className="like">
              Like
          </li>
          <li className="comment">
            <Link className="link" to="/comments">
              Comment
            </Link>
          </li>
        </ul>
        }
      </div>
    </div>
  );
}
