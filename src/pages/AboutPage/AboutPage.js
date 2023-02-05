import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './AboutPage.scss';

class AboutPage extends Component {
  static defaultProps = {
    hello: "hello"
  }

  render() {
    return (
      <div className="AboutPage">
        <h1>about page</h1>
      </div>
    )
  }
};

export default AboutPage;
