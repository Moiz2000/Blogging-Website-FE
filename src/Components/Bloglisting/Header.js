import React from 'react'
import { useNavigate } from "react-router-dom";
import Postblog from '../Bloglisting/Postblog';
import '../Bloglisting/styles.css';
function Header() {

  const navigate = useNavigate()

  return (
<header className='home-header'>
    <h2>Start Your Day wtih </h2>
    <h1>
      <span> Blog  BUZZ</span>
    </h1>
    <p>
      awesome place to make oneself <br /> productive and entertained through
      daily updates.
    </p>
    <button onClick={() => navigate('/Postblog')}> Create </button>
    <hr />

  </header>
  )
}

export default Header;