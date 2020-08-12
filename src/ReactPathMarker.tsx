import React, { useState, useEffect } from 'react'

interface IProps {
  pathRef: React.RefObject<SVGElement>,
  svgRef: React.RefObject<SVGSVGElement>,
  color?: string,
  borderColor?: string
}

export const PathMarker: React.FC<IProps> = (props) => {
    const [radius, setRadius] = useState(3)
    const [color, ] = useState (props["color"] || "#ADD8E6")
    const [borderColor, ] = useState (props["borderColor"] || "#EEEEEE")
    const markerRef = React.createRef<SVGCircleElement>()
    const pathRef = props.pathRef
    const svgRef = props.svgRef
    const [markerRect, setMarkerRect] = useState({ x: 0, y: 0, w: 0, h: 0})
    
    useEffect(() => {
        const updateMarker = () => {
            if(svgRef && pathRef && svgRef.current && pathRef.current && markerRef && markerRef.current) {
                const svgRect = svgRef.current.getBoundingClientRect()
                const pathRect = pathRef.current.getBoundingClientRect()
                const markerRect = markerRef.current.getBoundingClientRect()

                const w = markerRect.width
                const h = markerRect.height
                const x = (pathRect.x + 0.5 * pathRect.width - svgRect.x)
                const y = (pathRect.y + 0.5 * pathRect.height - svgRect.y)

                setMarkerRect({ x: x, y: y, w: w, h: h})
            }
        }

        if (pathRef && pathRef.current) {
           window.addEventListener('resize', () => { updateMarker() })
           window.addEventListener("load", () => { updateMarker() })
           pathRef.current.addEventListener("mouseover", () => {if (markerRef && markerRef.current) { markerRef.current.style.strokeWidth = "2"; markerRef.current.style.strokeOpacity = "0.5"; setRadius(5); }})
           pathRef.current.addEventListener("mouseout", () => {if (markerRef && markerRef.current) { markerRef.current.style.strokeWidth = "1"; markerRef.current.style.strokeOpacity = "0.2"; setRadius(3); }})
        }
    }, [pathRef, svgRef, markerRef, markerRect])

    return (
        <g>
           <circle 
            r={radius}
            fill={color}
            stroke={borderColor}
            cx={markerRect.x}
            cy={markerRect.y} 
            onMouseOver={(event) => { event.currentTarget.style.strokeWidth = "2"; event.currentTarget.style.strokeOpacity = "0.5"; setRadius(5)}}
            onMouseOut={(event) => { event.currentTarget.style.strokeWidth = "1"; event.currentTarget.style.strokeOpacity = "0.2"; setRadius(3)}}
            ref={markerRef}
           />
        </g>
    )
}