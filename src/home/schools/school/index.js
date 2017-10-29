import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function School({ school: { INSTNM: name, UNITID: id }}) {
  return (
    <Link to={`school/${id}`}>
      <div className="school-item">{ name }</div>
    </Link>
  );
}

School.propTypes = {
  
};