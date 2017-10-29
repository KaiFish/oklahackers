import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker

} from "react-simple-maps";
import Pin from "./map/location-pin.svg";
import SchoolsData from "./map/schools.json";
import "./home.css";
import { Tooltip, actions } from "redux-tooltip";
import Schools from './schools';
const { show, hide } = actions;

class Home extends Component {
  state = {
    zoom: 2,
    county: null,
    markers: SchoolsData.map(school => ({
      name: school.INSTNM,
      coordinates: [school.LONGITUD, school.LATITUDE]
    }))
  };

  constructor() {
    super();
    this.handleMove = this.handleMove.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }
  handleMove(geography, evt) {
    const x = evt.clientX;
    const y = evt.clientY + window.pageYOffset;
    this.props.dispatch(
      show({
        origin: { x, y },
        content: geography.properties.name
      })
    );
  }
  handleLeave() {
    this.props.dispatch(hide());
  }

  changeZoom(change) {
    const { zoom } = this.state;
    const newZoom = zoom + change;
    this.setState({
      zoom: newZoom <= 0 ? 1 : newZoom
    });
  }

  selectCounty(county) {
    this.setState({
      county
    });
  }
  
  getCircleSize () {
    const { zoom } = this.state;
    
    if (zoom < 6) {
      return 1;
    } else if (zoom < 8) {
      return 0.5;
    } else {
      return 0.25;
    }
  }

  render() {
    const { zoom, county, markers } = this.state;
    const circleSize = this.getCircleSize();
    const countySchools = county ? SchoolsData.filter(school => school.COUNTYNM.toLowerCase() === `${county.toLowerCase()} county`) : [];
    return (
      <div>
        <div className="main-data">
          <div className="map">
            <div className="map-controls">
              <div className="zoom-control" onClick={() => this.changeZoom(-1)}>
                -
              </div>
              <div className="zoom-control" onClick={() => this.changeZoom(1)}>
                +
              </div>
            </div>
            <ComposableMap
              projectionConfig={{
                scale: 3000
              }}
              projection="mercator"
              style={{width: "100%"}}
            >
              <ZoomableGroup
                center={[-97,35]}
                zoom={zoom}
              >

              <Geographies geographyUrl="/oklahoma.json" disableOptimization>
                {(geographies, projection) => geographies.map((geography, i) => {
                  return (
                    <Geography
                      key={ `geography-${i}` }
                      geography={ geography }
                      projection={ projection }
                      className={geography.id === county ? 'selected' : ''}
                      onClick={() => this.selectCounty(geography.id)}
                      style={{
                        default: {
                          fill: '#ddd',
                          stroke: '#999',
                          outline: 'none'
                        },
                        hover:   {
                          fill: '#c5c5c5',
                          outline: 'none'
                        },
                      }}
                    />
                  )
                })}
              </Geographies>
              <Markers>
                {markers.map((marker, i) => (
                  <Marker key={i} marker={marker}>
                      <circle cx={circleSize} cy={circleSize} r={circleSize} />
                  </Marker>
                ))}
              </Markers>
              </ZoomableGroup>
            </ComposableMap>
          </div>
          <div className="schools-panel">
            <div className="county">{ county }</div>
            {!county && 'Please select a county.'}
            {county && <Schools schools={countySchools} />}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
