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
    const [fontSize, ] = useState (props["fontSize"] || 10)
    const [fontFamily, ] = useState (props["fontFamily"] || "sans-serif")
    const [scale, setScale] = useState("0.07,0.07")
    const [bgColor, ] = useState (props["bgColor"] || "black")
    const markerRef = React.createRef<SVGPathElement>()
    const semiCircle = "M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
    const [textColor, ] = useState (props["textColor"] || "black")
    const pathRef = props.pathRef
    const svgRef = props.svgRef
    const [markerRect, setMarkerRect] = useState({ x: 0, y: 0, w: 0, h: 0, isLeft: false})
    const textRef = React.createRef<SVGTextElement>()

    useEffect(() => {
        const updateMarker = () => {
            if(svgRef && pathRef && svgRef.current && pathRef.current && markerRef && markerRef.current && textRef && textRef.current) {
                const svgRect = svgRef.current.getBoundingClientRect()
                const pathRect = pathRef.current.getBoundingClientRect()
                const markerRect = markerRef.current.getBoundingClientRect()
                const textRect = textRef.current.getBoundingClientRect()
                
                const isLeft = ((textRect.x - svgRect.x) > (svgRect.width / 2))

                const w = markerRect.width
                const h = markerRect.height
                const x = (pathRect.x + 0.5 * pathRect.width - svgRect.x) - (w * 0.7)
                const y = (pathRect.y + 0.5 * pathRect.height - svgRect.y) - h

                setMarkerRect({ x: x, y: y, w: w, h: h, isLeft: isLeft})
            }
        }

        if (pathRef && pathRef.current) {
           window.addEventListener('resize', () => { updateMarker() })
           window.addEventListener("load", () => { updateMarker() })
        }
    }, [pathRef, svgRef, markerRef, textRef])

    return (
        <g>
           <path 
                ref={markerRef}
                onMouseOver={() => {setScale("0.08, 0.08")}}
                onMouseOut={() => {setScale("0.07,0.07")}}
                transform={"translate(" + (markerRect.x) + "," + (markerRect.y) + ")\nscale(" + scale + ")"}
                fill={bgColor}
                d={semiCircle}
            />
            <text ref={textRef} x={(markerRect.isLeft) ? markerRect.x - 2 * markerRect.w - 10 : markerRect.x + markerRect.w + 10} cursor={"default"} y={markerRect.y + markerRect.h} fontFamily={fontFamily} fontSize={fontSize} fill={textColor} >
                {props.smallText}
            </text>
        </g>
    )
}