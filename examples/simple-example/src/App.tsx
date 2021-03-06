import React from "react"
import "./App.css"
import { PathMarker } from "react-path-marker" // import the package

function App() {

  const svgRef = React.createRef<SVGSVGElement>()
  const redRef = React.createRef<SVGCircleElement>()
  const greenRef = React.createRef<SVGCircleElement>()
  const blueRef = React.createRef<SVGCircleElement>()
  const purpleRef = React.createRef<SVGRectElement>()
  const greyRef = React.createRef<SVGCircleElement>()
  const pinkRef = React.createRef<SVGCircleElement>()

  return (
    < div className="App" >
      <h1>The SVG</h1>
      < div className="Main">
        <svg width="400" height="400" ref={svgRef}>
          <rect width="400" height="400" stroke="black" fill="none"/>

          <circle cx={50} cy={50} r={50} fill="red" ref={redRef} />
          <circle cx={150} cy={100} r={50} fill="green" ref={greenRef} />
          <circle cx={350} cy={350} r={30} fill="blue" ref={blueRef} />
          <rect x={320} y={50} width="50" height="50" fill="purple" ref={purpleRef}/>
          <circle cx={50} cy={320} r={10} fill="grey" ref={greyRef} />
          <circle cx={190} cy={190} r={40} fill="pink" ref={pinkRef} />

          <PathMarker svgRef={svgRef} pathRef={redRef} />
          <PathMarker svgRef={svgRef} pathRef={greenRef}  />
          <PathMarker svgRef={svgRef} pathRef={blueRef} />
          <PathMarker svgRef={svgRef} pathRef={purpleRef} color="#ee1122" />
          <PathMarker svgRef={svgRef} pathRef={greyRef} color="#abcdef" borderColor="blue"/>
          <PathMarker svgRef={svgRef} pathRef={pinkRef} borderColor="green"/>

        </svg>
      </div>
    </div>
  )
}

export default App
