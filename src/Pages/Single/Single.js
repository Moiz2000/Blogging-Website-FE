import Sidebar from "../../Components/sidebar/Sidebar";
import SinglePost from "../../Components/singlePost/SinglePost";
import "./Single.css"
import Topbar from '../../Components/topbar/Topbar';


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
