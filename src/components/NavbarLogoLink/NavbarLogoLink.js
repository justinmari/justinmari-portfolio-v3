import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarLogoLink.scss';

function NavbarLogoLink(props) {
  return (
    <div className='NavbarLogoLink'>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'NavbarLogoLink-active' : 'NavbarLogoLink-inactive'
        }
        to={props.path}>
        <img className='NavbarLogoLink-logo' src={props.src} alt={props.alt} />
      </NavLink>
    </div>
  )
};

export default NavbarLogoLink;
