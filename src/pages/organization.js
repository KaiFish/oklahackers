import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './organization.css';

class Organization extends Component {
  render() {
    const org = { title: 'DUMMY TITLE' };
    return (
      <div className="orgization">
        <div>Hacklahoma</div>
        <div className="org-title">{ org.title }</div>
      </div>
    );
  }

}

export default Organization;