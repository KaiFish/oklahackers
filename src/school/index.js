import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from "./contact";
import Org from './org';
import Dept from './dept';

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

    const { INSTNM: name } = school;
    const student_contacts = [{ name: 'Jake Hae', title: 'Co-Director of PB&Hacks', twitter: 'jake', facebook: 'jake', github: 'jake', profilepic: 'https://static1.squarespace.com/static/54b7f024e4b077c902643690/5661ee3ae4b01ec2a3689103/5661ee3be4b01be932ebb42f/1449258602616/jake-6482.jpg'}]
    return (
      <div className="school-info-page">
        <div>{ name }</div>
        <Contact student_contacts={student_contacts}> </Contact>
        <Org student_org={[{name: 'ACM', description: 'COMPUTING!', site: 'www.acm.org' }]} />
        <Dept depts={[{ title: 'CS', description: 'Computer Science School of Awesome', contactEmail: 'yu@school.com', contactName: 'yu'}]} />
      </div>
    );
  }
}

export default School;
