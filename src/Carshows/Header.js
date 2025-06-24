import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div> 
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        <div className="container text-center">
        <img src="https://logoeps.com/wp-content/uploads/2014/11/Porsche-logo.png" alt="" />
          <NavLink className="navbar-brand mes" to="/">MESUEM</NavLink>

          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto me-2 mt-lg-0">
              <li className ="nav-item">
                <NavLink className="nav-link active" to="/home" aria-current="page"
                  >Home
                  <span className="visually-hidden">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Cars">Cars</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/servicess">Servicess</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog1">View</NavLink>
              </li>
             
             
            </ul>
           
          </div>
        </div>
      </nav>
     
      
    </div>
  )
}

export default Header
