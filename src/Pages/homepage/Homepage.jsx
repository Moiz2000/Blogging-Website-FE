import { useLocation } from "react-router";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import "./homepage.css";
import Topbar from '../../Components/topbar/Topbar';


export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Topbar/>
      {/* <Header /> */}
      <div className="home">
        <Posts />
      </div>
    </>
  );
}
