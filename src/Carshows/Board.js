import React, { useContext }  from 'react'
import {useState} from 'react'
import Welcome from'./Admin/Welcome'
import Contactus from './Admin/Contactus';
import Login from './Admin/Login';
import { LoginStatus } from '../App';


const Board = () => {
    const [view,setView]= useState("");
const [login] = useContext(LoginStatus)
    const Boardview =()=>{
        if (view==="Welcome"){
            return <Welcome/>
        }
        else if (view==="Contactus"){
            return <Contactus/>
        }
        else{
            return<div>invalid</div>
        }
    }
  if (login){
    return(
    <div className='container-fluid'>
    <div className="row">
      <aside className='col-lg-3'>
<h3 onClick={()=>setView("")}>AdMin Block</h3>
<button onClick={()=>setView("Welcome")}>OUR DATA</button>
<button onClick={()=>setView("")}>Add Employee Data</button>
<button onClick={()=>setView("Contactus")}>Our Bookings</button>
<button onClick={()=>setView("")}>Porsche History </button>
<button onClick={()=>setView("")}> Company Blog</button>
      </aside>
      <div className="col-lg-9">{Boardview()}</div>
    </div>
  </div>)
  }
else {
  return<Login/>
}
  
}

export default Board
