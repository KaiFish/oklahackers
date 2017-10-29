import React from 'react';
import PropTypes from 'prop-types';


export default function dept(props) {
  return (
    <div>
      <h1> "Academic Depatments" </h1>
      {
        props.depts.map(dep => {
          <div>
            <a href={dep.link}>
              <h4>
                {dep.title}
              </h4>
            </a>
            <h5>
              {dep.description}
            </h5>
            <h6>{`Contact: ${dep.contactName}`}</h6>
            <h6>
              {dep.contactEmail}
            </h6>
          </div>
        })
      }
    </div>
  );
}

