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
                const x = pathRect.x - svgRect.x + 0.5 * w
                const y = pathRect.y - svgRect.y + 0.5 * h

                setMarkerRect({ x: x, y: y, w: w, h: h})
            }
        }

        if (pathRef && pathRef.current) {
           window.addEventListener('resize', () => { updateMarker() })
           window.addEventListener("load", () => { updateMarker() })
          }
        }, [pathRef, svgRef])

        const points = (markerRect.x).toString() + "," + (markerRect.y).toString()  + " " + (markerRect.x + 11).toString() + "," + (markerRect.y - 20).toString() + " " + (markerRect.x - 11).toString() + "," + (markerRect.y - 20).toString()
        const semiCircle = "M" + markerRect.x.toString() + "," + (markerRect.y - 15).toString() + " a"+ markerRect.x.toString() + "," + markerRect.x.toString() + " 0 0,0 " + markerRect.w + ",0"
    return (
        <g pointerEvents={"none"} >
           <polygon fill={bgColor} points={points}></polygon>
           <path fill={bgColor} d={semiCircle}></path>
        </g>
    )
}