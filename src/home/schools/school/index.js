import React from 'react';
import PropTypes from 'prop-types';


export default function School({ school: { INSTNM: name }}) {
  return (
    <div className="school-item">{ name }</div>
  );
}

School.propTypes = {
  
};