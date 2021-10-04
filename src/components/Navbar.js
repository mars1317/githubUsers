import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <div className="navbar-brand"> Github search</div> 
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link"> Главная </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" exact className="nav-link">Информация</NavLink>
      </li>
    </ul> 
  </nav>
)