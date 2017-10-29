import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
import './header.css';
export default class Header extends Component {

  static propTypes = {
    
  };

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className="header">
        <div className="logo-wrapper">
          <img className="header-logo" src={logo} />
        </div>
      </div>
    );
  }

}