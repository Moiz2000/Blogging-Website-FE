import { useLocation } from "react-router";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Homepage.css";

export default function Afterloginpage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Topbar/>
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
</>
  );
}
