import Sidebar from "../../Components/Sidebar/Sidebar";
import SinglePost from "../../Components/Singlepost/SinglePost";
import "./Single.css"
import Topbar from '../../Components/Topbar/Topbar';


export default function Single() {
  return (
    <div>
          <Topbar/>
    <div className="single">
      <SinglePost />
      {/* <Sidebar /> */}
    </div>
    </div>
  );
}
