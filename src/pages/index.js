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

class App extends Component {
  state = {
    zoom: 50
  }
  
  changeZoom = (change) => {
    const { zoom } = this.state;
    debugger;
    this.setState({
      zoom: zoom + change
    });
  }
  
  render() {
    const { zoom } = this.state;
    
    return(
      <div>
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