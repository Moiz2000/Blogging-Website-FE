import React from 'react'
import HeaderTag from '../Components/HeaderTag';
import HomeTag from '../Components/Home';
import About from '../Components/About';
import Divider from '../Components/Divider';
import Services from '../Components/Services';
import Team from '../Components/Team';
import '../App.css';
import Topbar from '../Components/Topbar/Topbar';

function Homepage(){
  return (
    <div>
      {/* <Topbar/> */}
      <HeaderTag></HeaderTag>
      <HomeTag></HomeTag>
      <Divider></Divider>
      <About></About> 
      <Services></Services>
    <Team/>
    </div>
  );
}

export default Homepage;