"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(n,t,e){e.r(t);var r=e(439),a=e(689),c=e(791),i=e(793),u=e(562),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],p=(0,a.UO)().movieId;(0,c.useEffect)((function(){p&&(0,i.p2)(p).then((function(n){var t=n.cast;s(t)})).catch((function(n){}))}),[p]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(u.a,{children:e.map((function(n){return(0,o.jsx)(u.Z,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+n.profile_path,alt:"",width:100}),(0,o.jsxs)("p",{children:[" ",n.name]}),(0,o.jsxs)("p",{children:[" character ",n.character]})]})},n.id)}))})})}},562:function(n,t,e){e.d(t,{Z:function(){return o},a:function(){return u}});var r,a,c=e(168),i=e(934),u=i.Z.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 0rem;\n  padding: 1rem;\n"]))),o=i.Z.li(a||(a=(0,c.Z)(["\n  display: flex;\n  height: fit-content;\n  flex-direction: column;\n  padding: 1rem 1rem 2rem;\n  background: #f8f3e8;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  transform: ",";\n\n  img {\n    width: 100%;\n    height: 50%;\n    object-fit: cover;\n  }\n\n  h2 {\n    margin-top: 1rem;\n    font-family: 'Kalam', cursive;\n    font-weight: normal;\n    font-size: 2rem;\n    color: #4a4a7d;\n    text-align: center;\n  }\n  a {\n    width: 100%;\n    height: 100%;\n  }\n  p {\n    font-family: 'Kalam', cursive;\n    font-size: 1rem;\n    color: #5e5e89;\n    text-align: center;\n  }\n"])),(function(){return"rotate("+(20*Math.random()-10)+"deg)"}))},793:function(n,t,e){e.d(t,{Wf:function(){return u},bG:function(){return h},p2:function(){return f},qF:function(){return l},qN:function(){return s}});var r=e(861),a=e(687),c=e.n(a),i=e(243);function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i.Z.defaults.params={api_key:"e55542ecb6aab3d889d16953eac82937"},i.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=247.c067dddd.chunk.js.map