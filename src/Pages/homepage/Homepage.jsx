import { useLocation } from "react-router";
import ImageSlider from '../../Components/header/ImageSlider';
import { SliderData } from '../../Components/header/SliderData';
import Posts from "../../Components/posts/Posts";
import "./homepage.css";
import Topbar from '../../Components/topbar/Topbar';


export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Topbar/>
    {/* <ImageSlider slides={SliderData} /> */}
      <div className="home">
        <Posts />
      </div>
    </>
  );
}
