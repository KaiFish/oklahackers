import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contact from "./contact";


class School extends Component {

  static propTypes = {

  };

  state = {
    school: null
  }

  componentWillMount() {
    window.firebase.database().ref(`/${this.props.match.params.schoolId}`).once('value').then(snapshot => {
      const school = snapshot.val();
      this.setState({
        school
      });
    });
  }

  render() {
    const { school } = this.state;

    if (!school) {
      return (<div>Loading</div>);
    }

    const { INSTNM: name, student_contacts } = school;

    return (
      <div>{ name }</div>
      <contact student_contacts={student_contacts}> </contact>
    );
  }
}

export default School;
