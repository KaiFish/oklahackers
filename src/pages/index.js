import React, { Component } from "react"
import ReactDOM from "react-dom"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

class App extends Component {
  render() {
    return(
      <div>
        <ComposableMap>
          <ZoomableGroup>
          <Geographies geographyUrl={ "./oklahoma.json" }>
            {(geographies, projection) => geographies.map((geography, i) => (
              <Geography
                key={ `geography-${i}` }
                geography={ geography }
                projection={ projection }
                />
            ))}
          </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}
export default App;