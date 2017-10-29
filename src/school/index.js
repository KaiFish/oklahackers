import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
    
    return (
      <div>{ name }</div>
    );
  }
}

export default School;