import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home'

import Services from './Services'
import Servicess from './Servicess'
import Cars from "./Cars"
import  Blog from "./Blog"
import  View from './Blog1'
import Error from './Error'
import Board from './Board'
import Login from './Admin/Login'

const Routing = () => {
  return (
    <Routes>
      <Route path ='/home'  Component={Home}/>
      <Route path="/servicess"  Component={Servicess}/>
      <Route path="/services"  Component={ Services}/>
      <Route path="/cars" Component={ Cars}/>
      <Route path="/Blog" Component={Blog}/>
      <Route path="/blog1" Component={View}/>
      <Route path='/admin' Component={Login}/>
      <Route path='/board' Component={Board}/>

      
      <Route path="*" Component={Error}/> 
     
    </Routes>
  )
}

export default Routing
