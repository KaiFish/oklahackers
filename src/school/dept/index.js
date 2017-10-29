import React from 'react';
import PropTypes from 'prop-types';


export default function dept(props) {
  return (
    <div>
      <h1> "Academic Depatments" </h1>
      { props.depts.map(dept => {
        return (
          <div>
            <a href = {dept.link}}>
              <h4>
                {dept.title}
              </h4>
            </a>
            <h5>
              {dept.description}
            </h5>
            <h6> `Contact: ${dept.contactName}`</h6>
            <h6>
              {dept.contactEmail}
            </h6>
          </div>
      })}
    </div>
  );
}

resources.propTypes = {

};
