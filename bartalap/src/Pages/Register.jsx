import React from 'react'
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.jsx";

const Register = () => {

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];

const res=await createUserWithEmailAndPassword(auth, email,password)
  
  }
  return (
   <div className="formContainer">
    <div className="formWrapper">
    <span className="logo">Bartalap</span>
    <span className="title">Register</span>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Display Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
        </form>
        <p>Do you have an account ?  LogIn</p>
    </div>
   </div>
  )
}

export default Register;
