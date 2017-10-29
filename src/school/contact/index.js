import React from 'react';
import PropTypes from 'prop-types';

export default function contact(props) {
  return (
    <div>
      <h1>Student Contacts</h1>
      { props.student_contacts.map(student => {
        return (
          <div>
            <img style={{ height: 201}}src={student.profilepic || ''}></img>
            <div>
              <h5>
              {student.name}
              </h5>
              <h6>
              {student.title}
              </h6>
              { student.twitter && <div>
                <a href = {`https://twitter.com/${student.twitter}`}>
                <img src="../icons/twitter.png"></img>
              </a>
              </div>}
              { student.fb && <div>
                <a href = {`https://facebook.com/${student.fb}`}>
                <img src="../icons/facebook.png"></img>
              </a>
              </div>}
              { student.gh && <div>
                <a href = {`https://github.com/${student.gh}`}>
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

contact.propTypes = {

};
