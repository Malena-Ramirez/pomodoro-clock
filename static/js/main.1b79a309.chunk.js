(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var i,c,r,s,a,o,b,l,j,d,u,f,h,g,O,x,p,m,v=t(0),y=t(9),w=t.n(y),k=t(4),L=t(2),R=t(3),S=R.b.div(i||(i=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 80%;\n  justify-content: space-around;\n"]))),z=R.b.div(c||(c=Object(L.a)(["\n  display:flex;\n  justify-content: space-around;\n  width: 100%;\n"]))),B=R.b.div(r||(r=Object(L.a)(["\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),I=R.b.h2(s||(s=Object(L.a)(["\n  font-size: 1rem;\n  text-align: center;\n  font-weight: 400;\n  @media(min-width: 768px){\n    font-size: 1.2rem;\n  }\n"]))),C=R.b.div(a||(a=Object(L.a)(["\n  display:grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 5px;\n  column-gap: 3px;\n  justify-items: center;\n"]))),N=R.b.p(o||(o=Object(L.a)(["\n  grid-column: 1/3;\n  font-size:1.8rem;\n  text-align:center;\n  margin: 0;\n  color: #28115c;\n  background-color: #e7dcff91;\n  border-radius: 5px;\n  width: 50px;\n"]))),E=R.b.i(b||(b=Object(L.a)(["\n  margin: 0;\n  font-size: 1.25rem;\n  cursor: pointer;\n  &:hover{\n    color: #4b27df;\n  }\n"]))),q=t(1),J=function(n){var e=n.type,t=n.length,i=n.setLength,c=n.isRunning,r="session"===e?"de la sesi\xf3n":"del break";return Object(q.jsxs)(B,{children:[Object(q.jsxs)(I,{id:"".concat(e,"-label"),children:["Duraci\xf3n ",r]}),Object(q.jsxs)(C,{children:[Object(q.jsx)(N,{id:"".concat(e,"-length"),children:t}),Object(q.jsx)(E,{onClick:function(){t<60&&!c&&i(t+1)},className:"bi bi-caret-up-square-fill",id:"".concat(e,"-increment")}),Object(q.jsx)(E,{onClick:function(){t>1&&!c&&i(t-1)},className:"bi bi-caret-down-square-fill",id:"".concat(e,"-decrement")})]})]})},M=R.b.div(l||(l=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),D=R.b.h2(j||(j=Object(L.a)(["\n  font-size: 1.3rem;\n  font-weight: 400;\n"]))),F=R.b.div(d||(d=Object(L.a)(["\n  border-radius: 20px;\n  margin-bottom: 10px;\n  background-color: #e7dcff;\n  color: #29115b;\n  width: 200px;\n  height: 150px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),P=R.b.div(u||(u=Object(L.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n"]))),T=R.b.span(f||(f=Object(L.a)(["\n  font-size: 3rem; \n  font-weight: 700;\n"]))),U=R.b.i(h||(h=Object(L.a)(["\n  font-size: 2rem;\n  cursor: pointer;\n  &:hover{\n    color: #4b27df;\n  }\n"]))),_=t.p+"static/media/alarm.2fc55448.wav",A=function(n){var e=n.sessionLength,t=n.setSessionLength,i=n.setBreakLength,c=n.breakLength,r=n.isRunning,s=n.setisRunning,a=Object(v.useState)("Sesi\xf3n"),o=Object(k.a)(a,2),b=o[0],l=o[1],j=Object(v.useState)(60*e),d=Object(k.a)(j,2),u=d[0],f=d[1],h=Object(v.useRef)();Object(v.useEffect)((function(){f(60*e)}),[e]),Object(v.useEffect)((function(){var n=null;return r&&u>0?n=setInterval((function(){f(u-1)}),1e3):r&&0===u?(n=setInterval((function(){f(u-1)}),1e3),h.current.play(),"Sesi\xf3n"===b?(l("Break"),f(60*c)):"Break"===b&&(l("Sesi\xf3n"),f(60*e))):clearInterval(n),function(){return clearInterval(n)}}),[r,u,b,c,e,h]);var g=r?"bi bi-pause-btn-fill":"bi bi-play-btn-fill";return Object(q.jsxs)(M,{children:[Object(q.jsx)(D,{id:"timer-label",children:b}),Object(q.jsx)(F,{children:Object(q.jsx)(T,{id:"time-left",children:function(n){var e=Math.floor(n/60),t=n%60;return(e<10?"0".concat(e):e)+":"+(t<10?"0".concat(t):t)}(u)})}),Object(q.jsxs)(P,{children:[Object(q.jsx)(U,{className:g,id:"start_stop",onClick:function(){s(!r)}}),Object(q.jsx)(U,{className:"bi bi-arrow-counterclockwise",id:"reset",onClick:function(){s(!1),t(25),i(5),l("Sesi\xf3n"),h.current.pause(),h.current.currentTime=0}})]}),Object(q.jsx)("audio",{ref:h,src:_,type:"audio"})]})},G=function(){var n=Object(v.useState)(25),e=Object(k.a)(n,2),t=e[0],i=e[1],c=Object(v.useState)(5),r=Object(k.a)(c,2),s=r[0],a=r[1],o=Object(v.useState)(!1),b=Object(k.a)(o,2),l=b[0],j=b[1];return Object(q.jsxs)(S,{children:[Object(q.jsxs)(z,{children:[Object(q.jsx)(J,{type:"session",length:t,setLength:i,isRunning:l}),Object(q.jsx)(J,{type:"break",length:s,setLength:a,isRunning:l})]}),Object(q.jsx)(A,{sessionLength:t,breakLength:s,setSessionLength:i,setBreakLength:a,isRunning:l,setisRunning:j})]})},H=Object(R.a)(g||(g=Object(L.a)(["\n  body{\n    font-family: 'Righteous', cursive;\n    margin: 0;\n    box-sizing: border-box;\n    background: linear-gradient(190deg, rgba(86,35,180,1) 0%, rgba(75,39,223,1) 100%);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n  }\n"]))),K=R.b.div(O||(O=Object(L.a)(["\n  background-color: #0700008c;\n  border-radius: 25px;\n  padding: 10px 20px;\n  width: 45vw;\n  min-width: 260px;\n  height: 75vh;\n  color: #e7dcff;\n"]))),Q=R.b.h1(x||(x=Object(L.a)(["\n  text-align: center;\n"]))),V=R.b.div(p||(p=Object(L.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n"]))),W=R.b.p(m||(m=Object(L.a)(["\n  text-align: center;\n  font-size: 1.1rem;\n  color: #29115b;\n"])));var X=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(H,{}),Object(q.jsxs)(K,{children:[Object(q.jsx)(Q,{children:"Reloj Pomodoro"}),Object(q.jsx)(G,{})]}),Object(q.jsx)(V,{children:Object(q.jsx)(W,{children:"\xa9 Malena Ramirez Uribe"})})]})};w.a.render(Object(q.jsx)(X,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1b79a309.chunk.js.map