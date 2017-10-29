import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker

} from "react-simple-maps";
import Oklahoma from "./map/oklahoma.json";
import Pin from "./map/location-pin.svg";
import Schools from "./map/schools.json";
import "./home.css";
import { Tooltip, actions } from "redux-tooltip";

const { show, hide } = actions;

class Home extends Component {
  state = {
    zoom: 1,
    county: null,
    markers: Schools.map(school => ({
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

  render() {
    const { zoom, county, markers } = this.state;

    return (
      <div>
        <div className="county">{ county }</div>
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
          >
            <ZoomableGroup
              center={[-97,35]}
              zoom={zoom}
            >

            <Geographies geographyUrl="/oklahoma.json">
              {(geographies, projection) => geographies.map((geography, i) => {
                return (
                  <Geography
                    key={ `geography-${i}` }
                    geography={ geography }
                    projection={ projection }
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
                  <svg height="10px" width="10px">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                </Marker>
              ))}
            </Markers>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    );
  }
}
export default Home;
