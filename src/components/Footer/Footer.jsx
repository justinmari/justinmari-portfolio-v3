import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  static defaultProps = {
    hello: "hello"
  }

  render() {
    return (
      <div className="Footer">
        © Justin Maliwat. All Rights Reserved.
      </div>
    )
  }
};

export default Footer;
