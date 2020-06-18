import React, { useState, useEffect } from 'react'

interface IProps {
  pathRef: React.RefObject<SVGElement>,
  svgRef: React.RefObject<SVGSVGElement>,
  fontSize?: number,
  fontFamily?: string,
  bgColor?: string,
  smallText?: string,
  textColor?: string
}

export const PathMarker: React.FC<IProps> = (props) => {
    //const [fontSize, ] = useState (props["fontSize"] || 12)
    //const [fontFamily, ] = useState (props["fontFamily"] || "sans-serif")
    const [bgColor, ] = useState (props["bgColor"] || "black")
    //const [textColor, ] = useState (props["textColor"] || "white")
    const pathRef = props.pathRef
    const svgRef = props.svgRef
    const [markerRect, setMarkerRect] = useState({ x: 0, y: 0, w: 0, h: 0})
    //const textRef = React.createRef<SVGTextElement>()

    useEffect(() => {
        const updateMarker = () => {
            if(svgRef && pathRef && svgRef.current && pathRef.current) {
                const svgRect = svgRef.current.getBoundingClientRect()
                const pathRect = pathRef.current.getBoundingClientRect()

                const w = pathRect.width
                const h = pathRect.height
                const x = (pathRect.x + 0.5 * w - svgRect.x) - 20
                const y = (pathRect.y + 0.5 * h - svgRect.y)  - 38

                setMarkerRect({ x: x, y: y, w: w, h: h})
            }
        }

        if (pathRef && pathRef.current) {
           window.addEventListener('resize', () => { updateMarker() })
           window.addEventListener("load", () => { updateMarker() })
          }
        }, [pathRef, svgRef])

    const scale = "0.08,0.08"
    const semiCircle = "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
    const transform = "translate(" + (markerRect.x) + "," + (markerRect.y) + ")\nscale(" + scale + ")"
    console.log(markerRect)
    console.log(transform)
    return (
        <g pointerEvents={"none"} >
           <path transform={transform} fill={bgColor} d={semiCircle}></path>
        </g>
    )
}