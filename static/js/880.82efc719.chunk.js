"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[880],{880:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(861),a=e(439),u=e(687),c=e.n(u),i=e(791),o=e(87),s=e(348),p=e(793),f=e(596),l=e(184),h=function(n){n.SearchFormButton,n.LoadMore;var t=n.children,e=n.onClick,r=n.type;return(0,l.jsx)("button",{type:r,onClick:e,children:t})},d=function(n){var t=n.handelSubmit,e=(0,i.useState)(""),r=(0,a.Z)(e,2),u=r[0],c=r[1];return(0,l.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""===u)return f.Am.error("empty value type something",{theme:"dark"});t(u)},children:[(0,l.jsx)("input",{value:u,onChange:function(n){var t=n.target;c(t.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}),(0,l.jsx)(h,{type:"submit",SearchFormButton:!0,children:(0,l.jsx)("span",{children:"Search"})})]})},m=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],u=t[1],f=(0,i.useState)(""),m=(0,a.Z)(f,2),g=m[0],v=m[1],x=(0,i.useState)(1),y=(0,a.Z)(x,2),b=y[0],w=y[1],Z=(0,o.lr)(),k=(0,a.Z)(Z,2),j=k[0],S=k[1];(0,i.useEffect)((function(){var n;if(null!==j.get("searchQuery")){var t=null!==(n=j.get("searchQuery"))&&void 0!==n?n:"",e=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.qF)(t,b);case 3:e=n.sent,console.log(j),u(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v(n.t0.message);case 11:return n.prev=11,n.finish(11);case 13:case"end":return n.stop()}}),n,null,[[0,8,11,13]])})));return function(){return n.apply(this,arguments)}}();e()}}),[b,j]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{handelSubmit:function(n){S(""!==n?{searchQuery:n}:{}),u([])}}),g&&(0,l.jsx)("p",{children:"Something went wrong Try again later.\ud83d\ude2d"}),e&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z,{data:e}),(0,l.jsxs)(h,{type:"button",onClick:function(){return w(b+1)},children:[" ","Load More"," "]})]})]})}},348:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,u=e(87),c=e(689),i=e(168),o=e(934),s=o.Z.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));\n  gap: 0rem;\n  padding: 1rem;\n"]))),p=o.Z.li(a||(a=(0,i.Z)(["\n  display: flex;\n  height: fit-content;\n  flex-direction: column;\n  padding: 1rem 1rem 2rem;\n  background: #f8f3e8;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  transform: ",";\n\n  img {\n    width: 100%;\n    height: 50%;\n    object-fit: cover;\n  }\n\n  h2 {\n    margin-top: 1rem;\n    font-family: 'Kalam', cursive;\n    font-weight: normal;\n    font-size: 2rem;\n    color: #4a4a7d;\n    text-align: center;\n  }\n  a {\n    width: 100%;\n    height: 100%;\n  }\n  p {\n    font-family: 'Kalam', cursive;\n    font-size: 1rem;\n    color: #5e5e89;\n    text-align: center;\n  }\n"])),(function(){return"rotate("+(20*Math.random()-10)+"deg)"})),f=e(184),l=function(n){var t=n.data,e=(0,c.TH)();return console.log(t),(0,f.jsx)(s,{children:t.map((function(n,t){var r=n.title,a=n.id,c=n.poster_path;n.overview;return(0,f.jsx)(p,{children:(0,f.jsxs)(u.rU,{to:"".concat(a),state:{from:e},children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+c,alt:r}),(0,f.jsxs)("h2",{children:[" ",r]})]})},t)}))})}},793:function(n,t,e){e.d(t,{Wf:function(){return i},bG:function(){return h},p2:function(){return f},qF:function(){return m},qN:function(){return s}});var r=e(861),a=e(687),u=e.n(a),c=e(243);function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.params={api_key:"e55542ecb6aab3d889d16953eac82937"},c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=880.82efc719.chunk.js.map