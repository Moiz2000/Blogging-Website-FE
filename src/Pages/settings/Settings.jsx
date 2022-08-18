import "./settings.css";
import Topbar from "../../Components/Topbar/Topbar";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate=useNavigate()
  const user=localStorage.getItem('user');
  console.log(user)
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [success,setSuccess]=useState('')
  const [errorMessage,setErrorMessage]=useState(false)
  const token=localStorage.getItem('token');
  console.log(token);
  const handleUpdate= async (e)=>{
    e.preventDefault()
    const updatedUser={
      name,
      email,
      password
    }
    try{
      await axios.patch("http://localhost:5000/user",updatedUser,{
        headers:({
          Authorization:'Bearer '+token
        })
      })
      setSuccess("Profile has been updated");
      //localStorage.setItem()
      //navigate('/')
    }catch(err){
      setErrorMessage('Something went wrong. Please try again')
    }
  }

  const handleDelete=async(e)=>{
    e.preventDefault()
    try{
      await axios.delete("http://localhost:5000/user",{
        headers:({
          Authorization:'Bearer '+token
        })
      })
      setSuccess("User has been Deleted");
      //localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/')
    }catch(err){
      setErrorMessage('Something went wrong. Please try again')
    }
  }
  return (
     <div>
     <Topbar/>

    <div className="settings">

      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <button onClick={handleDelete}>
          <span className="settingsTitleDelete">Delete Account</span>
          </button>
          
        </div>
        <form className="settingsForm" onSubmit={handleUpdate}>
          {/* <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div> */}
          <label>Username</label>
          <input type="text" placeholder={`${user.name}`} name="name" 
          onChange={e=>setName(e.target.value)}/>
          <label>Email</label>
          <input type="email"  placeholder={user.email} name="email" 
          onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder={user.password} name="password"
          onChange={e=>setPassword(e.target.value)}/>
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
          {errorMessage && (
            <span
              style={{ color: "red", textAlign: "center", marginTop: "20px" }}
            >
              {errorMessage}
            </span>
          )}
        </form>
      </div>
    </div>
    </div>
  );
}
