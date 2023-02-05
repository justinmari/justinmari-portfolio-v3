import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarLink.scss';

class NavbarLink extends Component {
  static defaultProps = {
    path: "/temp",
    title: "DefaultTitle"
  }

  render() {
    return (
      <div className='NavbarLink'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavbarLink-active' : 'NavbarLink-div'
          }
          to={this.props.path}>
          <div>{this.props.title}</div>
        </NavLink>
      </div>
    )
  }
};

export default NavbarLink;
