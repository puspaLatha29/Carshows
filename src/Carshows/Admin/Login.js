import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { LoginStatus } from '../../App';

// import Board from '../Board';
const Login = () => {

  const[details,setDetails] =useState({});
const navigate = useNavigate();
const   [ setLogin]= useContext(LoginStatus);

  const ChangeData =(e)=>{
    setDetails({...details, [e.target.name]: e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(details)


    const{username,password}=details;
  if(username ==="Surya" && password==="admin") {
    setLogin (true)
    navigate ('/board')
  }
  }

  
 return (
    <div className="container-fluid  p-5 admin">
        <div className="col-lg-3 glass shadow p-5 mx-auto ">
            <h3 > Admin Login</h3>
          <form onSubmit={submitHandler}>
          <input type ='text' name='username' placeholder='Username' onChange={ChangeData} className='form-control w-100 mb-3'/>
          <input type ='password' name='password' placeholder='password' onChange={ChangeData}  className='form-control w-100 mb-3'/>
          <input type ='submit'  placeholder=''  className='form-control w-100 bg-warning'/>

          </form>
        </div>
      
    </div>
  )
}

export default Login
