import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar px-5 navbar-expand-lg navbar-light bg-light'>
      <NavLink className='navbar-brand' to='/'>
        Image proccessor
      </NavLink>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='create'>
              Create palceholder
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='edit'>
              Edit image
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
