import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const navigate = useNavigate();
  //const user=true;
  const user = localStorage.getItem('user');
  const [tags, setTags] = useState([]);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/')
  };

  useEffect(() => {
    const FetchTag = async () => {
      const result = await axios.get("http://https://blogbuzz-team4.herokuapp.com/tag")
      //console.log(result.data);
      setTags(result.data);
    }
    FetchTag();
  }, [])
  return (
    <div>
      <nav>
        <div>
          <h1 href="#home" className="logo-name"> Blog Buzz </h1>
        </div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          {user && <li><Link to="/homepage">HOME</Link></li>}
          {/* { user  &&   <li> <Link to="#"> ABOUT </Link></li>} */}
          {/* {user   &&   <li > <Link to="#"> CONTACT</Link></li>} */}

          <div class="dropdown">
            <li class="dropbtn"><Link to="#">CATEGORIES</Link> </li>
            <div class="dropdown-content">
              {
                tags.map((c) => (
                  <Link className="link" to={`/homepage?cat=${c.name}`}>
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
          {user && <li><Link to="/write">POST BLOG</Link></li>}
          {user && <li> <Button onClick={handleLogout}>LOGOUT</Button></li>}
          {user && <li><Link to="/settings"> PROFILE</Link></li>}
          {user || <li><Link className="link" to="/loginpage">LOGIN</Link></li>}
          {user || <li><Link className="link" to="/signupage">REGISTER</Link></li>}
        </ul>
        {/* <p>______________________________________________________________________________________________________________________________________________________</p> */}
      </nav>
    </div>
  );
}
