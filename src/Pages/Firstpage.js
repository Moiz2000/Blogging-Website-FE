import React from 'react'
import HeaderTag from '../Components/HeaderTag';
import HomeTag from '../Components/Home';
import Team from '../Components/Team';
import '../App.css';

function firstpage(){
  return (
    <div>

      <HeaderTag></HeaderTag>
      <HomeTag></HomeTag>
    <Team/>
    </div>
  );
}

export default firstpage;