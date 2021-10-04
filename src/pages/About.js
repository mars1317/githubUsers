import React from 'react'
import {NavLink} from 'react-router-dom'

export const About = () => {
  return (
    <div class="jumbotron mt-5">
  <h1 class="display-4">ABOUT SERVICE</h1>
  <p class="lead">  Github Search is service which purpose is searching for users on github by their nickname.</p>
  <hr class="my-4"/>
  <p>      You can also open a new tab with detailed information about the user to see user's location, company, repositories and more!</p>
  <p class="lead">
  <NavLink to="/" exact className="btn btn-secondary"> Try service! </NavLink>
  </p>
</div>
  )
}