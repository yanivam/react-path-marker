(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(10)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),i=(a(8),a(9),function(e){var t=Object(n.useState)(e.fontSize||12)[0],a=Object(n.useState)(e.fontFamily||"sans-serif")[0],c=Object(n.useState)("0.07,0.07"),l=c[0],i=c[1],o=Object(n.useState)(e.bgColor||"black")[0],f=r.a.createRef(),s=Object(n.useState)(e.textColor||"black")[0],u=e.pathRef,m=e.svgRef,h=Object(n.useState)({x:0,y:0,w:0,h:0,isLeft:!1}),d=h[0],g=h[1],x=r.a.createRef();return Object(n.useEffect)((function(){var e=function(){if(m&&u&&m.current&&u.current&&f&&f.current&&x&&x.current){var e=m.current.getBoundingClientRect(),t=u.current.getBoundingClientRect(),a=f.current.getBoundingClientRect(),n=x.current.getBoundingClientRect().x-e.x>e.width/2,r=a.width,c=a.height,l=t.x+.5*t.width-e.x-.7*r,i=t.y+.5*t.height-e.y-c;g({x:l,y:i,w:r,h:c,isLeft:n})}};u&&u.current&&(window.addEventListener("resize",(function(){e()})),window.addEventListener("load",(function(){e()})))}),[u,m,f,x]),r.a.createElement("g",null,r.a.createElement("path",{ref:f,onMouseOver:function(){i("0.08, 0.08")},onMouseOut:function(){i("0.07,0.07")},transform:"translate("+d.x+","+d.y+")\nscale("+l+")",fill:o,d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035    c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719    c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"}),r.a.createElement("text",{ref:x,x:d.isLeft?d.x+d.w+10:d.x-d.w-10,cursor:"default",y:d.y+d.h,fontFamily:a,fontSize:t,fill:s,visibility:"hidden"},e.smallText))});var o=function(){var e=r.a.createRef(),t=r.a.createRef(),a=r.a.createRef(),n=r.a.createRef(),c=r.a.createRef(),l=r.a.createRef(),o=r.a.createRef();return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"The SVG"),r.a.createElement("div",{className:"Main"},r.a.createElement("svg",{width:"400",height:"400",ref:e},r.a.createElement("rect",{width:"400",height:"400",stroke:"black",fill:"none"}),r.a.createElement("circle",{cx:50,cy:50,r:50,fill:"red",ref:t}),r.a.createElement("circle",{cx:100,cy:80,r:50,fill:"green",ref:a}),r.a.createElement("circle",{cx:350,cy:350,r:30,fill:"blue",ref:n}),r.a.createElement("rect",{x:320,y:50,width:"50",height:"50",fill:"purple",ref:c}),r.a.createElement("circle",{cx:50,cy:320,r:10,fill:"grey",ref:l}),r.a.createElement("circle",{cx:190,cy:190,r:40,fill:"pink",ref:o}),r.a.createElement(i,{svgRef:e,pathRef:t,smallText:"This is the long Red!"}),r.a.createElement(i,{svgRef:e,pathRef:a,smallText:"Green"}),r.a.createElement(i,{svgRef:e,pathRef:n,smallText:"BL",fontFamily:"system-ui"}),r.a.createElement(i,{svgRef:e,pathRef:c,smallText:"Purple",bgColor:"#ee1122",fontSize:24}),r.a.createElement(i,{svgRef:e,pathRef:l,smallText:"Grey",bgColor:"#abcdef",textColor:"blue"}),r.a.createElement(i,{svgRef:e,pathRef:o,smallText:"Pink",textColor:"pink"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.4ad21d73.chunk.js.map