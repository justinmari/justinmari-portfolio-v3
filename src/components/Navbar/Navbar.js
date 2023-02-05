import React, { Component } from 'react';
import './Navbar.scss';
import NavbarLink from '../NavbarLink/NavbarLink';

class Navbar extends Component {
  static defaultProps = {
    hello: "hello"
  }

  render() {
    return (
      <div className='Navbar'>
        <NavbarLink path='/' title='Home'/>
        <NavbarLink path='/about' title='About'/>
        <NavbarLink path='/projects' title='Projects'/>
        <NavbarLink path='/resume' title='Resume'/>
        <NavbarLink path='/contact' title='Contact'/>
      </div>
    )
  }
};

export default Navbar;
