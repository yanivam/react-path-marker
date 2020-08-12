# react-path-marker [![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm version](https://img.shields.io/npm/v/react-path-marker.svg?style=flat)](https://www.npmjs.com/package/react-path-marker) [![Demo: Simple Example](https://img.shields.io/badge/demo-live-red.svg)](https://react-path-marker-simple-example.imfast.io)
A simple, free marker for svgs with optional text
The component detects the SVG and Path locations/sizes. The component also detects the display text width of the marker. Based on that information a calculation is done so that the rendering of the marker will be optimized and correctly oriented.  

**Note:** In SVG, the rendering order is based on the document order. I.e. the first elements in the SVG document fragment getting "painted" first. Subsequent elements are painted on top of previously painted elements. To avoid issues with path elements rendered on top of markers, please place all markers below all content path elements. 

## Demo

Click [here](https://react-path-marker-simple-example.imfast.io) for live demo.

## Install 

In order to install, run the following command:
~~~
$ npm install react-path-marker --save
~~~


## Usage 
A very simple `App.tsx' example: 

```tsx
import React from "react"
import "./App.css"
import { PathMarker } from "react-path-marker" // import the package

function App() {

  const svgRef = React.createRef<SVGSVGElement>()
  const pathRef = React.createRef<SVGCircleElement>()

  return (
    < div className="App" >
      < div className="Main">
        <svg width="400" height="400" ref={svgRef}>
          <circle cx={50} cy={50} r={50} fill="red" ref={pathRef} />
          <PathMarker svgRef={svgRef} pathRef={pathRef} colro={"red"} borderColor={"blue"}/>
        </svg>
      </div>
    </div>
  )
}

export default App
```

## Customization
The following parameters are passed to the marker component:

| Prop       | Type   | Description |
| ---------- | ------ | ----------- |
| svgRef     | React.RefObject<SVGElement> | Mandatory. A React reference object to the SVG element |
| pathRef    | React.RefObject<SVGSVGElement> | Mandatory. A React reference object to the path element bounded to the marker |
| borderColor    | string | Optional. Color for marker border. Default: "black" |
| color  | string | Optional. Color for marker background. Default: "black" |

**Notes:**

* `pathRef` must be a valid reference to a path element. There are a number of such types such as SVGRectElement, SVGCircleElement, etc. 
* The SVG rendering should be such that all the marker elelments are at the bottom of the SVG definition, and specifically, after the path elements. Otherwise, there is a risk of paths overlaping markers. 

## License
MIT

