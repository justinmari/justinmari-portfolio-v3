import React from 'react';
import './Navbar.scss';

function Navbar(props) {
  return (
    <nav className='Navbar navbar sticky-top d-flex'>
      <div className="container">
        <img className='Navbar-logo navbar-brand' src={props.logoBase64Image} alt='Justin Mari Maliwat portfolio logo' />
      </div>
    </nav>
  )
};

export default Navbar;
