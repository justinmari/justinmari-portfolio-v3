import React, { Component } from 'react';
import './HomePage.scss';

class HomePage extends Component {
  static defaultProps = {
    hello: "hello"
  }

  render() {
    return (
      <div className="HomePage">
        <h1>home page</h1>
      </div>
    )
  }
};

export default HomePage;
