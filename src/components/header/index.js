import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
import './header.css';
import {Link} from 'react-router-dom';

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
          <Link to="/">
            <img className="header-logo" src={logo} />
          </Link>
        </div>
      </div>
    );
  }

}