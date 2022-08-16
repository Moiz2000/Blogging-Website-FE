import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {

  const user = true;

  return (
    <div className="singlePost">
      {/* <br /> */}
      <div className="singlePostWrapper">
        <div className="grid">
       <h1 className="singlePostTitle">
        Create Hands-Free on Instagram With Samsung Galaxy Z Flip Smartphones</h1>
        <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
            Category : Music
            </Link>
          </span>
        </div>
        <div >
          <span className="singlePostInfo">
            Author:
              <Link className="link" to="/posts?username=Safak">
                Safak
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
