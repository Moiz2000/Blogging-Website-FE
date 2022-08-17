import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import axios from 'axios';

export default function Post({post}) {
  const [cat,setCat]=useState([]);
  let Id=post.id;
  useEffect(()=>{
    const FetchPost = async()=>{
      const response=await axios.get("http://localhost:5000/blog/blogtag/"+Id)
      //console.log(response)
      setCat(response.data)
    }
    FetchPost()
  },[Id])
  return (
    <div className="post">
    {post.ImageName || <img
      className="postImg"
      //src={img}
      alt=""
    />}
  
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/single/${post.id}`} className="link">
            {post.Title}
          </Link>
        </span>
        <div className="postCats">
        {
          cat.map((c)=>(
            <span className="postCat">
            <Link className="link" to={`/homepage?cat=${c.name}`}>
              {c.name}
            </Link>
          </span>
          ))}
        </div>
        <span className="postDate">{new Date(post.Create_Time).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.Text}
      </p>
    </div>
  );
}
