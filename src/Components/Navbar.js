import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
      <a className="navbar-brand" href="/">Pizza Inn</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav ml-auto">

           <li className="nav-item">
             <Link className="nav-link" to="/">
              Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/services'>
                Services
              </Link>              
            </li>
        </ul>
      </div>
    </nav>

  );
};

export default Navbar;