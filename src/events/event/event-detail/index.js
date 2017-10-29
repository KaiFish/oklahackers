import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './event-detail.css';
import cal from './cal.png';
import Map from './map';

class EventDetail extends Component {

  static propTypes = {
    
  };


  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    const { event: { coverPhoto, description, location, title, organizer, time, website }} = this.props;
    return (
      <div className="event-detail">
        <section className="main">
          <div className="left-panel">
            <div className="event-cover-photo" style={{backgroundImage: `url(${coverPhoto})`}} />
            <div className="description">{ description }</div>
          </div>
          <div className="right-panel">
            <div className="top-info">
              <div className="left">
                <div className="event-title">{title}</div>
                <div className="event-organizer">{organizer}</div>
                <a href={website} className="event-website">{website}</a>
              </div>
              <div className="right">
                <div className="calendar">
                  <div className="cal-month">
                    {time.format("MMM")}
                  </div>
                  <div className="cal-date" style={{backgroundImage: `url(${cal})`}}>
                    {time.format('D')}
                  </div>
                </div>
              </div>
            </div>

            <div className="event-location">
              <Map />
            </div>
            <div className="event-time">{time.format("dddd, MMMM Do")}</div>
          </div>
        </section>
        <section className="other-events">
        </section>
      </div>
    );
  }

}

EventDetail.defaultProps = {
  event: {
    title: 'Hacklahoma',
    coverPhoto: 'http://www.zfiengr.com/assets/images/OU_Devon_Energy_Hall.jpg',
    organizer: 'ACM',
    website: 'hacklahoma.org',
    time: moment(),
    location: 'OU',
    description: 'Best Hackathon in Oklahoma',
  }
}

export default EventDetail;