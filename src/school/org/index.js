import React from 'react';
import PropTypes from 'prop-types';


export default function org(props) {
  return (
    <div>
      <h1> "Student Organizations" </h1>
      { props.student_org.map(org => {
        return (
          <div>
            <img src={org.logo}></img>
            <div>
              <h4>
                {org.name}
              </h4>
              <h5>
                {org.description}
              </h5>
              <h6>
                {org.site}
              </h6>
              { org.twitter && <div>
                <a href = {`https://twitter.com/${org.twitter}`}>
                <img src="../icons/twitter.png"></img>
              </a>
              </div>}
              { org.fb && <div>
                <a href = {`https://facebook.com/${org.fb}`}>
                <img src="../icons/facebook.png"></img>
              </a>
              </div>}
              { org.gh && <div>
                <a href = {`https://github.com/${org.gh}`}>
                <img src="../icons/github.png"></img>
              </a>
              </div>}
            </div>
          </div>
        )
      })}
    </div>
  );
}

org.propTypes = {

};
