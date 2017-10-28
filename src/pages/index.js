import React, { Component } from "react";
import ReactDOM from "react-dom";
import { geoMercator, geoPath } from "d3-geo";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import Oklahoma from '../map/oklahoma.json';
import './index.css';

class App extends Component {
  state = {
    zoom: 50,
    county: null
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
    const { zoom, county } = this.state;
    
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
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}
export default App;