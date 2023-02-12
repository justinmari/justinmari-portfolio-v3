import React, { Component, useEffect } from 'react';
import './Navbar.scss';
import NavbarLink from '../NavbarLink/NavbarLink';
import NavbarLogoLink from '../NavbarLogoLink/NavbarLogoLink';

function Navbar(props) {
  return (
    <div className='Navbar'>
      <div className='Navbar-left'>
        <NavbarLink path='/about' title='Bio' />
        <NavbarLink path='/projects' title='Projects' />
      </div>
      <div className='Navbar-middle'>
        <NavbarLogoLink path='/' title='Home' src={props.logoBase64Image} alt='Justin Mari Maliwat portfolio logo' />
      </div>
      <div className='Navbar-right'>
        <NavbarLink path='/resume' title='Resume' />
        <NavbarLink path='/contact' title='Contact' />
      </div>
    </div>
  )
};

export default Navbar;
