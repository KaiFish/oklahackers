import React from 'react';
import PropTypes from 'prop-types';
import School from './school';
import './schools.css';

export default function Schools({ schools }) {
  return (
    <div className="schools-list">
      { schools.length === 0 && 'There are no schools in this county' }
      { schools.map(school => <School key={school.UNITID} school={school} />)}
    </div>
  );
}

Schools.propTypes = {
  
};