import e from "cors";
import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import '../constants/Login.css';

const Login=()=>{
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const nav= useNavigate();
  const handleSubmit = (e) =>{
    if((username.includes('@gmail.com')) && (password ==='123456')){
      nav('/home');
    }
    else{
      alert('Invalid Credentials');
    }
  }
  return(
    <div div className="bg">
    <link rel="stylesheet" href="../constants/LoginStyle.css"/>
    <div className='loginpage'>
      <center>
        <div className="container">
      <form>
      <input type="email"
       name="email"
       value={username}
       onChange = {(e)=> setUsername(e.target.value)}
       required
       className="inputs"
       placeholder="Ex.khushi@gmail.com"/>
       <br/>
       <input type="password"
       name="password"
       className="inputs"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       required
       placeholder="Enter your password"/>
       <br/>
       <button
       type="submit"
       onClick={handleSubmit}>Login
       </button>
       </form>
       </div>
       </center>
    </div>
    </div>
  );

}

export default Login;