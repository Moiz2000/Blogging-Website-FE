import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div>
      <nav>
      <div>
      <h1 href="#home" className="logo-name"> Blog Buzz </h1>   
      </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
        <ul>
        { user  &&   <li><Link to="/homepage">HOME</Link></li>}
        {/* { user  &&   <li> <Link to="#"> ABOUT </Link></li>} */}
        {/* {user   &&   <li > <Link to="#"> CONTACT</Link></li>} */}
        {user   && <li><Link to="/write">WRITE</Link></li>}
        {user   && <li> <Link to="/">LOGOUT</Link></li>}
        {user   && <li><Link to="/settings"> PROFILE</Link></li>}
        {user   || <li><Link className="link" to="/loginpage">LOGIN</Link></li>}
        {user || <li><Link className="link" to="/signupage">REGISTER</Link></li>}
          </ul>
      </nav>
    </div>
  );
}
