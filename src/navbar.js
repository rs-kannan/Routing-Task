import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbarsection = () => {
  return (
    
<nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <ul className="nav justify-content-end">
        <li className="nav-item">
        <NavLink className="nav-navlink" aria-current="page" to="/">
                HOME
        </NavLink>  </li>
        <li className="nav-item">
        <NavLink className="nav-navlink" aria-current="page" to="/fullstack">
                FULL-STACK
        </NavLink>  </li>
        <li className="nav-item">
        <NavLink className="nav-navlink" aria-current="page" to="/python">
                Python
        </NavLink>  </li>
       <li className="nav-item">
       <NavLink className="nav-navlink" aria-current="page" to="/java">
                Java
        </NavLink>  </li>
       <li className="nav-item">
       <NavLink className="nav-navlink" aria-current="page" to="/go">
                Go
        </NavLink>  </li>
        <li className="nav-item">
        <NavLink className="nav-navlink" aria-current="page" to="/c">
                C
        </NavLink>  </li>
      </ul>
</nav>
  )
}
export default Navbarsection;
