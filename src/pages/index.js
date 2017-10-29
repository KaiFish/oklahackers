import React, { Component } from "react";
import ReactDOM from "react-dom";
import { geoMercator, geoPath } from "d3-geo";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"
import Oklahoma from '../map/oklahoma.json';
import Pin from '../map/location-pin.svg';
import Schools from '../map/schools.json';
import './index.css';

class App extends Component {
  state = {
    zoom: 50,
    county: null,
    markers: Schools.map(school => ({ coordinates: [school.LONGITUD, school.LATITUDE] }))
  }
  
  changeZoom = (change) => {
    const { zoom } = this.state;
    debugger;
    this.setState({
      zoom: zoom + change
    });
  }
  
  selectCounty = (county) => {
    this.setState({
      county
    });
  }
  
  render() {
    const { zoom, county, markers } = this.state;
    
    return(
      <div>
        <div className="county">{ county }</div>
        <div onClick={() => this.changeZoom(-10)}>-</div>
        <div onClick={() => this.changeZoom(10)}>+</div>
        <ComposableMap
          projectionConfig={{
            scale: 160,
          }}
          projection="mercator"
        >
          <ZoomableGroup
            center={[-97,35]}
            zoom={zoom}
          >
          <Geographies geographyUrl='./oklahoma.json'>
            {(geographies, projection) => geographies.map((geography, i) => {
              return (
                <Geography
                  key={ `geography-${i}` }
                  geography={ geography }
                  projection={ projection }
                  onClick={() => this.selectCounty(geography.id)}
                  style={{
                    default: {
                      fill: 'rgb(255, 255, 255)',
                      stroke: 'rgb(0, 0, 0)',
                      strokeWidth: 0.02,
                      outline: 'none'
                    },
                    hover:   { 
                      fill: '#c5c5c5',
                      stroke: 'rgb(0, 0, 0)',
                      strokeWidth: 0.02,
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
                  <circle height="10px" width="10px" cx={1} cy={1} r={1} />
                </svg>
                {/* <text
                  textAnchor="middle"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fill: "#607D8B",
                    stroke: "none",
                  }}
                  >
                  {marker.name}
                </text> */}
              </Marker>
            ))}
          </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}
export default App;