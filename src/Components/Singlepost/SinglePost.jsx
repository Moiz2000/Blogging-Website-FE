import { Link } from "react-router-dom";
import "./singlePost.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export default function SinglePost() {

  const user = true;

  return (
    <div className="singlePost">
      {/* <br /> */}
      <div className="singlePostWrapper">
        <div className="grid">
       <h1 className="singlePostTitle">
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
        </p>
        <hr />
        {
          user &&
        <ul>
    <Link to="#"><i className="fa fa-heart fa-3x" aria-hidden="true" id="like"></i></Link> 
<Link to="/comments"><i class="fa fa-comment fa-3x" aria-hidden="true" id="comm"></i></Link>
        </ul> }
        
      </div>
    </div>
  );
}
