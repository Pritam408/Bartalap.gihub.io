import React from 'react'

const Register = () => {
  return (
   <div className="formContainer">
    <div className="formWrapper">
    <span className="logo">Bartalap</span>
    <span className="title">Register</span>

        <form >
            <input type="text" placeholder='Display Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input  type="file" id='file' />
            <label htmlFor="file">Pritam</label>
            <button>Sign Up</button>
        </form>
        <p>Do you have an account ?  LogIn</p>
    </div>
   </div>
  )
}

export default Register;
