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
          <circle cx={100} cy={80} r={50} fill="green" ref={greenRef} />
          <circle cx={350} cy={350} r={30} fill="blue" ref={blueRef} />
          <rect x={320} y={50} width="50" height="50" fill="purple" ref={purpleRef}/>
          <circle cx={50} cy={320} r={10} fill="grey" ref={greyRef} />
          <circle cx={190} cy={190} r={40} fill="pink" ref={pinkRef} />

          <PathMarker svgRef={svgRef} pathRef={redRef} smallText="This is the long Red!" />
          <PathMarker svgRef={svgRef} pathRef={greenRef} smallText="Green" />
          <PathMarker svgRef={svgRef} pathRef={blueRef} smallText="BL" fontFamily={"system-ui"}/>
          <PathMarker svgRef={svgRef} pathRef={purpleRef} smallText="Purple" fontSize={24}/>
          <PathMarker svgRef={svgRef} pathRef={greyRef} smallText="Grey" bgColor="#abcdef" textColor="blue"/>
          <PathMarker svgRef={svgRef} pathRef={pinkRef} smallText="Pink" textColor="pink"/>

        </svg>
      </div>
    </div>
  )
}

export default App
