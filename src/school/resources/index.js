import React from 'react';
import PropTypes from 'prop-types';


export default function resources(props) {
  return (
    <div>
      <h1> "Local Resources" </h1>
      { props.resources.map(resource => {
        return (
          <div>
            <a href = {resource.link}}>
              <h4>
                {resource.title}
              </h4>
            </a>
            <h5>
              {resource.description}
            </h5>
          </div>      
      })}
    </div>
  );
}

resources.propTypes = {

};
