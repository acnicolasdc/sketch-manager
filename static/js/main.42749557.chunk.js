(this["webpackJsonpsketch-manager"]=this["webpackJsonpsketch-manager"]||[]).push([[0],{108:function(e,t,n){e.exports=n.p+"static/media/conEdison_logo.5f69d530.png"},118:function(e,t,n){e.exports=n(185)},122:function(e,t,n){},185:function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),l=n(54),i=n.n(l),u=(n(122),n(110)),s=n(14),d=n(111),f=n(38),m=n(206),p=n(186),h=n(45),v=n.n(h),g=n(55),b=n(8),E=n(3),x=n(212),C=n(213),y=n(200),O=n(46),j=n(201);!function(e){e.rect="rect-module",e.text="text-module",e.line="line-module",e.valve="valve-module",e.drip="drip-module",e.reducer="reducer-module",e.union="union-module"}(a||(a={})),function(e){e.tf="TF",e.ij="IJ",e.simple="SM",e.uni="UNI"}(r||(r={}));var k={x:200,y:200,width:450,height:5,value:'500"',data:{},rotation:0,id:"rect-code"},S={x:200,y:200,fontSize:15,text:"",id:"label-code"},w={x:200,y:200,radius:10,code:"V#12345",id:"circle-code"},T={x:200,y:200,code:'12"',id:"triangle-code"},R={x:200,y:200,id:"coupling-code",type:r.uni,text:""},F=[{label:"Pipe",key:a.rect,icon:"BsDash"},{label:"Coupling",key:a.union,icon:"BsCrop"},{label:"Valve",key:a.valve,icon:"BsCircle"},{label:"Drip",key:a.drip,icon:"BsCircleFill"},{label:"Reducer",key:a.reducer,icon:"BsCaretRightFill"},{label:"Label",key:a.text,icon:"BsTextareaT"}],L=n(61),P=o.a.createContext({rectangles:[],reducers:[],valves:[],drips:[],texts:[],couplings:[],addText:function(){},addReact:function(){},addReducers:function(){},addValves:function(){},addDrips:function(){},addCoupling:function(){},updateTexts:function(){},updateValves:function(){},updateReact:function(){},updateDrips:function(){},updateReducers:function(){},updateCouplings:function(){}}),M=function(e){var t=e.children,n=o.a.useState([]),a=Object(b.a)(n,2),r=a[0],c=a[1],l=o.a.useState([]),i=Object(b.a)(l,2),u=i[0],s=i[1],d=o.a.useState([]),f=Object(b.a)(d,2),m=f[0],p=f[1],h=o.a.useState([]),v=Object(b.a)(h,2),g=v[0],E=v[1],x=o.a.useState([]),C=Object(b.a)(x,2),y=C[0],O=C[1],j=o.a.useState([]),k=Object(b.a)(j,2),S=k[0],w=k[1],T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"object"===typeof e&&0!==Object.keys(e).length},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;T(e)&&t((function(t){return[].concat(Object(L.a)(t),[e])}))};return o.a.createElement(P.Provider,{value:{rectangles:r,couplings:S,texts:u,valves:m,drips:g,reducers:y,addReact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e,c)},addText:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e,s)},addValves:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e,p)},addDrips:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e,E)},addReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e,O)},updateReact:function(e){return c(e)},updateCouplings:function(e){return w(e)},updateTexts:function(e){return s(e)},updateValves:function(e){return p(e)},updateDrips:function(e){return E(e)},updateReducers:function(e){return O(e)},addCoupling:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return R(e,w)}}},t)},D=function(){},B=function(e){var t=e.cancell,n=void 0===t?D:t,a=e.isOpen,r=void 0!==a&&a,o=c.useState(Array(5).fill("")),l=Object(b.a)(o,2),i=l[0],u=l[1],s=c.useContext(P),d=s.addValves,f=s.valves;return c.createElement(C.a,{onClose:n,isOpen:r},c.createElement(y.a,null,c.createElement(O.g,null,"Create a Valve")),c.createElement(O.e,null,c.createElement(x.a,{values:i,onChange:function(e){var t=e.values;u(t)}})),c.createElement(O.f,null,c.createElement(j.a,{kind:"tertiary",onClick:n},"Close"),c.createElement(j.a,{autoFocus:!0,onClick:function(){var e=Object(E.a)(Object(E.a)({},w),{},{id:"rect-code-valve-".concat(f.length),code:"V#".concat(i.join(""))});d(e),u(Array(5).fill("")),n()}},"Create")))},I=n(5),z=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef();return o.a.useEffect((function(){n&&(l.current.setNode(c.current),l.current.getLayer().batchDraw())}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Group,{ref:c,onContextMenu:a,onClick:a,onTap:a,draggable:!0},o.a.createElement(I.Text,{text:t.code,fontSize:12,x:t.x+t.radius+10,y:t.y-15}),o.a.createElement(I.Circle,Object.assign({radius:20,stroke:"#2d3436"},t,{onTransformEnd:function(e){var n=c.current,a=n.scaleY();n.scaleX(1),n.scaleY(1),r(Object(E.a)(Object(E.a)({},t),{},{x:n.x(),y:n.y(),radius:Math.max(n.height()*a)}))}}))),n&&o.a.createElement(I.Transformer,{ref:l,keepRatio:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}))},N=B,Y=o.a.memo((function(e){var t=e.selected,n=void 0===t?"":t,a=e.selectValve,r=void 0===a?function(){}:a,c=o.a.useContext(P),l=c.updateValves,i=c.valves;return o.a.createElement(o.a.Fragment,null,null===i||void 0===i?void 0:i.map((function(e,t){return o.a.createElement(z,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return function(e,t){"click"===e.type?r(t):"contextmenu"===e.type&&(window.addEventListener("contextmenu",(function(e){e.preventDefault()})),alert("Right click"))}(t,e.id)},onChange:function(e){var n=i.slice();n[t]=e,l(n)}})})))})),G=function(){},A=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef();return o.a.useEffect((function(){n&&(l.current.setNode(c.current),l.current.getLayer().batchDraw())}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Group,{ref:c,onContextMenu:a,onClick:a,onTap:a,draggable:!0},o.a.createElement(I.Text,{text:t.code,fontSize:12,x:t.x+t.radius+10,y:t.y-15}),o.a.createElement(I.Circle,Object.assign({radius:20,fill:"#4d73be"},t,{onTransformEnd:function(e){var n=c.current,a=n.scaleY();n.scaleX(1),n.scaleY(1),r(Object(E.a)(Object(E.a)({},t),{},{x:n.x(),y:n.y(),radius:Math.max(n.height()*a)}))}}))),n&&o.a.createElement(I.Transformer,{ref:l,keepRatio:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}))},V=function(e){var t=e.cancell,n=void 0===t?G:t,a=e.isOpen,r=void 0!==a&&a,o=c.useState(Array(5).fill("")),l=Object(b.a)(o,2),i=l[0],u=l[1],s=c.useContext(P),d=s.addDrips,f=s.drips;return c.createElement(C.a,{onClose:n,isOpen:r},c.createElement(y.a,null,c.createElement(O.g,null,"Create a Drip")),c.createElement(O.e,null,c.createElement(x.a,{values:i,onChange:function(e){var t=e.values;u(t)}})),c.createElement(O.f,null,c.createElement(j.a,{kind:"tertiary",onClick:n},"Close"),c.createElement(j.a,{autoFocus:!0,onClick:function(){var e=Object(E.a)(Object(E.a)({},w),{},{id:"rect-code-drip-".concat(f.length),code:"D#".concat(i.join(""))});d(e),u(Array(5).fill("")),n()}},"Create")))},H=o.a.memo((function(e){var t=e.selected,n=void 0===t?"":t,a=e.selectDrip,r=void 0===a?function(){}:a,c=o.a.useContext(P),l=c.updateDrips,i=c.drips;return o.a.createElement(o.a.Fragment,null,null===i||void 0===i?void 0:i.map((function(e,t){return o.a.createElement(A,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return function(e,t){"click"===e.type?r(t):"contextmenu"===e.type&&(window.addEventListener("contextmenu",(function(e){e.preventDefault()})),alert("Right click"))}(t,e.id)},onChange:function(e){var n=i.slice();n[t]=e,l(n)}})})))})),X=n(210),W=function(){},q=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef();return o.a.useEffect((function(){n&&(l.current.setNode(c.current),l.current.getLayer().batchDraw())}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Text,Object.assign({onContextMenu:a,onClick:a,onTap:a,ref:c},t,{draggable:!0,onDragEnd:function(e){r(Object(E.a)(Object(E.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=c.current,a=n.scaleX(),o=n.scaleY();n.scaleX(1),n.scaleY(1),r(Object(E.a)(Object(E.a)({},t),{},{x:n.x(),y:n.y(),fontSize:Math.max(n.height()*o),width:Math.max(5,n.width()*a),height:Math.max(n.height()*o)}))}})),n&&o.a.createElement(I.Transformer,{ref:l,keepRatio:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}))},$=function(e){var t=e.cancell,n=void 0===t?W:t,a=e.isOpen,r=void 0!==a&&a,o=c.useState(""),l=Object(b.a)(o,2),i=l[0],u=l[1],s=c.useContext(P),d=s.addText,f=s.texts;return c.createElement(C.a,{onClose:n,isOpen:r},c.createElement(y.a,null,c.createElement(O.g,null,"Create a Label")),c.createElement(O.e,null,c.createElement(X.a,{value:i,onChange:function(e){return u(e.target.value)},placeholder:"Label text"})),c.createElement(O.f,null,c.createElement(j.a,{kind:"tertiary",onClick:n},"Close"),c.createElement(j.a,{autoFocus:!0,onClick:function(){var e=Object(E.a)(Object(E.a)({},S),{},{id:"rect-code-text-".concat(f.length),text:i});d(e),u(""),n()},disabled:""===i},"Create")))},J=o.a.memo((function(e){var t=e.selected,n=void 0===t?"":t,a=e.selectText,r=void 0===a?function(){}:a,c=o.a.useContext(P),l=c.texts,i=c.updateTexts;return o.a.createElement(o.a.Fragment,null,null===l||void 0===l?void 0:l.map((function(e,t){return o.a.createElement(q,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return function(e,t){"click"===e.type?r(t):"contextmenu"===e.type&&(window.addEventListener("contextmenu",(function(e){e.preventDefault()})),alert("Right click"))}(t,e.id)},onChange:function(e){var n=l.slice();n[t]=e,i(n)}})})))})),U=n(207),_=[{label:'2"x1"',id:'2"x1"'},{label:'2"x1-1/4"',id:'2"x1-1/4"'},{label:'4"x2"',id:'4"x2"'},{label:'6"x4"',id:'6"x4"'},{label:'8"x6"',id:'8"x6"'},{label:'12"x8"',id:'12"x8"'},{label:'16"x12"',id:'16"x12"'},{label:'20"x12"',id:'20"x12"'}],Z=function(){},K=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef();return o.a.useEffect((function(){n&&(l.current.setNode(c.current),l.current.getLayer().batchDraw())}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Group,{ref:c,onContextMenu:a,onClick:a,onTap:a,draggable:!0},o.a.createElement(I.Text,{text:t.value,fontSize:12,x:t.x+30,y:t.y}),o.a.createElement(I.Line,Object.assign({points:[0,30,15,0,30,30],closed:!0,fill:"#2d3436"},t,{onTransformEnd:function(e){var n=c.current,a=n.scaleY();n.scaleX(1),n.scaleY(1),r(Object(E.a)(Object(E.a)({},t),{},{x:n.x(),y:n.y(),radius:Math.max(n.height()*a)}))}}))),n&&o.a.createElement(I.Transformer,{ref:l,keepRatio:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}))},Q=function(e){var t=e.cancell,n=void 0===t?Z:t,a=e.isOpen,r=void 0!==a&&a,o=c.useState([]),l=Object(b.a)(o,2),i=l[0],u=l[1],s=c.useContext(P),d=s.addReducers,f=s.reducers;return c.createElement(C.a,{onClose:n,isOpen:r},c.createElement(y.a,null,c.createElement(O.g,null,"Create a Reducer")),c.createElement(O.e,null,c.createElement(U.a,{options:_,value:i,placeholder:"Select size",onChange:function(e){return u(e.value)}})),c.createElement(O.f,null,c.createElement(j.a,{kind:"tertiary",onClick:n},"Close"),c.createElement(j.a,{autoFocus:!0,onClick:function(){var e=Object(E.a)(Object(E.a)({},T),{},{id:"rect-code-reducer-".concat(f.length),value:"".concat(i[0].label)});d(e),u([]),n()},disabled:0===i.length},"Create")))},ee=o.a.memo((function(e){var t=e.selected,n=void 0===t?"":t,a=e.selectReducer,r=void 0===a?function(){}:a,c=o.a.useContext(P),l=c.updateReducers,i=c.reducers;return o.a.createElement(o.a.Fragment,null,null===i||void 0===i?void 0:i.map((function(e,t){return o.a.createElement(K,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return function(e,t){"click"===e.type?r(t):"contextmenu"===e.type&&(window.addEventListener("contextmenu",(function(e){e.preventDefault()})),alert("Right click"))}(t,e.id)},onChange:function(e){var n=i.slice();n[t]=e,l(n)}})})))})),te=n(214),ne=[{label:"PE",id:"PE"},{label:"PT",id:"PT"},{label:"ST",id:"ST"},{label:"ST (C)",id:"ST(C)"},{label:"CI",id:"CI"},{label:"CT",id:"CT"},{label:"WI",id:"WI"}],ae=[{label:"DB",id:"DB"},{label:"INSERT",id:"INSERT"},{label:"HOLEHOG",id:"HOLEHOG"},{label:"PIM",id:"PIM"},{label:"CONSPLIT",id:"CONSPLIT"}],re=[{label:"LP",id:"LP"},{label:"MP",id:"MP"},{label:"IP",id:"IP"},{label:"HP",id:"HP"},{label:"TP",id:"TP"}],ce=[{label:'1"',id:"1"},{label:'1-1/4"',id:"1-1/4"},{label:'1-1/2"',id:"1-1/2"},{label:'2"',id:"2"},{label:'3"',id:"3"},{label:'4"',id:"4"},{label:'6"',id:"6"},{label:'8"',id:"8"},{label:'12"',id:"12"},{label:'16"',id:"16"},{label:'20"',id:"20"},{label:'24"',id:"24"}],oe=n(4),le=Object(oe.a)("div",{display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(2, 1fr)",marginBottom:"10px"}),ie=function(){},ue=function(e){return e*(Math.PI/180)},se=function(e,t,n){return e+t*n},de=function(e,t,n){return e-t*n},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,r=ue(e),c=n+Math.cos(r)*(t/2);return a(c,15,Math.sin(r))},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0,r=ue(e),c=n+Math.sin(r)*(t/2);return a(c,15,Math.cos(r))},pe=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef(),i=o.a.useRef(),u=o.a.useRef();o.a.useEffect((function(){n&&(u.current.setNode(c.current),u.current.getLayer().batchDraw())}),[n]);var s=function(e,t,n,a){var r=e.current,c=r.rotation(),o=r.width(),l=fe(c,o,r.x(),n),i=me(c,o,r.y(),a);t.current.rotation(r.rotation()),t.current.x(l),t.current.y(i)},d=function(){s(c,l,se,de),s(c,i,de,se)},f=fe(t.rotation,t.width,t.x,se),m=me(t.rotation,t.width,t.y,de),p=fe(t.rotation,t.width,t.x,de),h=me(t.rotation,t.width,t.y,se);return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Group,{onContextMenu:a,onClick:a,onTap:a,draggable:!0},o.a.createElement(I.Text,{text:"Length: ".concat(t.value),fontSize:12,x:f,y:m,ref:l}),o.a.createElement(I.Rect,Object.assign({ref:c,fill:"#2d3436"},t,{onTransform:d,onTransformEnd:function(e){var n=c.current,a=n.scaleX(),o=n.scaleY();n.scaleX(1),n.scaleY(1),d(),r(Object(E.a)(Object(E.a)({},t),{},{x:n.x(),y:n.y(),rotation:n.rotation(),width:Math.max(5,n.width()*a),height:Math.max(n.height()*o)}))}})),o.a.createElement(I.Text,{text:"Cover: ".concat(t.data.cover,'"'),fontSize:12,x:p,y:h,ref:i})),n&&o.a.createElement(I.Transformer,{ref:u,rotateAnchorOffset:100,rotationSnaps:[45,90,135,180,225,270,315,360],boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:(t.height=e.height,t)}}))},he=function(e){e.accept;var t=e.cancell,n=void 0===t?ie:t,a=e.isOpen,r=void 0!==a&&a,o=c.useState([]),l=Object(b.a)(o,2),i=l[0],u=l[1],s=c.useState([]),d=Object(b.a)(s,2),f=d[0],m=d[1],p=c.useState([]),h=Object(b.a)(p,2),v=h[0],g=h[1],x=c.useState([]),S=Object(b.a)(x,2),w=S[0],T=S[1],R=c.useState(""),F=Object(b.a)(R,2),L=F[0],M=F[1],D=c.useState(""),B=Object(b.a)(D,2),I=B[0],z=B[1],N=c.useState([70]),Y=Object(b.a)(N,2),G=Y[0],A=Y[1],V=c.useContext(P),H=V.addReact,W=V.rectangles,q=function(e){return{Root:{props:{"data-cy":e}}}};return c.createElement(C.a,{onClose:n,isOpen:r},c.createElement(y.a,null,c.createElement(O.g,null,"Create a Pipe")),c.createElement(O.e,null,c.createElement(le,null,c.createElement(U.a,{overrides:q("rmm-select-material"),options:ne,value:i,placeholder:"Select material",onChange:function(e){return u(e.value)}}),c.createElement(U.a,{overrides:q("rmm-select-method"),options:ae,value:w,placeholder:"Select method",onChange:function(e){return T(e.value)}})),c.createElement(le,null,c.createElement(U.a,{overrides:q("rmm-select-size"),options:ce,value:v,placeholder:"Select size",onChange:function(e){return g(e.value)}}),c.createElement(U.a,{overrides:q("rmm-select-pressure"),options:re,value:f,placeholder:"Select pressure",onChange:function(e){return m(e.value)}})),c.createElement(le,null,c.createElement(X.a,{required:!0,value:I,onChange:function(e){return z(e.target.value)},overrides:q("rmm-input-year"),placeholder:"Year"}),c.createElement(X.a,{required:!0,value:L,overrides:q("rmm-input-length"),onChange:function(e){return M(e.target.value)},placeholder:"Length"})),c.createElement(te.a,{value:G,min:10,max:100,onChange:function(e){var t=e.value;return A(t)},overrides:{InnerThumb:function(e){var t=e.$value,n=e.$thumbIndex;return c.createElement(c.Fragment,null,t[n]+'"')},ThumbValue:function(){return null},Thumb:{style:function(){return{height:"36px",width:"36px",display:"flex",alignItems:"center",justifyContent:"center",borderTopLeftRadius:"36px",borderTopRightRadius:"36px",borderBottomRightRadius:"36px",borderBottomLeftRadius:"36px",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:"3px",borderTopWidth:"3px",borderRightWidth:"3px",borderBottomWidth:"3px",borderLeftColor:"#ccc",borderTopColor:"#ccc",borderRightColor:"#ccc",borderBottomColor:"#ccc",backgroundColor:"#fff"}},props:{"data-cy":"rmm-slider-cover"}}}})),c.createElement(O.f,null,c.createElement(j.a,{kind:"tertiary",onClick:n},"Close"),c.createElement(j.a,{autoFocus:!0,onClick:function(){var e=Object(E.a)(Object(E.a)({},k),{},{id:"rect-code-pipe-".concat(W.length),value:"".concat(L,"'"),width:parseInt(L,10),data:{material:i[0].label,pressure:f[0].label,size:v[0].label,method:w[0].label,length:L,year:I,cover:G[0]}});H(e),n()},disabled:0===i.length||0===f.length||0===v.length||0===w.length||""===I||0===G.length||""===L},"Create")))},ve=o.a.memo((function(e){var t=e.selected,n=void 0===t?"":t,a=e.selectRect,r=void 0===a?function(){}:a,c=o.a.useContext(P),l=c.updateReact,i=c.rectangles;return o.a.createElement(o.a.Fragment,null,null===i||void 0===i?void 0:i.map((function(e,t){return o.a.createElement(pe,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return function(e,t){"click"===e.type?r(t):"contextmenu"===e.type&&(window.addEventListener("contextmenu",(function(e){e.preventDefault()})),alert("Right click"))}(t,e.id)},onChange:function(e){var n=i.slice();n[t]=e,l(n)}})})))})),ge=n(202),be=n(203),Ee=n(204),xe=function(){},Ce=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef();return o.a.useEffect((function(){n&&(l.current.setNode(c.current),l.current.getLayer().batchDraw())}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Group,{onContextMenu:a,onClick:a,onTap:a,ref:c,draggable:!0},o.a.createElement(I.Line,Object.assign({points:[0,60,0,100],stroke:"#2d3436"},t,{onTransformEnd:function(e){var n=c.current,a=n.scaleY();n.scaleX(1),n.scaleY(1),r(Object(E.a)(Object(E.a)({},t),{},{x:n.x(),y:n.y(),height:Math.max(n.height()*a)}))}})),o.a.createElement(I.Text,{text:t.text,fontSize:12,x:t.x-6,y:t.y+110})),n&&o.a.createElement(I.Transformer,{ref:l,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:(t.height=e.height,t)}}))},ye=function(e){var t=e.shapeProps,n=e.isSelected,a=e.onSelect,r=e.onChange,c=o.a.useRef(),l=o.a.useRef();o.a.useEffect((function(){n&&(l.current.setNode(c.current),l.current.getLayer().batchDraw())}),[n]);var i=function(){var e=c.current,n=e.scaleY();e.scaleX(1),e.scaleY(1),r(Object(E.a)(Object(E.a)({},t),{},{x:e.x(),y:e.y(),height:Math.max(e.height()*n)}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(I.Group,{ref:c,onContextMenu:a,onClick:a,onTap:a,draggable:!0},o.a.createElement(I.Line,Object.assign({points:[10,50,10,80],stroke:"#2d3436"},t,{onTransformEnd:i})),o.a.createElement(I.Line,Object.assign({points:[30,50,30,80],stroke:"#2d3436"},t,{onTransformEnd:i})),o.a.createElement(I.Line,Object.assign({points:[5,55,35,55],stroke:"#2d3436"},t,{onTransformEnd:i})),o.a.createElement(I.Line,Object.assign({points:[5,75,35,75],stroke:"#2d3436"},t,{onTransformEnd:i}))),n&&o.a.createElement(I.Transformer,{ref:l,keepRatio:!0,enabledAnchors:["top-left","top-right","bottom-left","bottom-right"]}))},Oe=function(e){var t=e.cancell,n=void 0===t?xe:t,a=e.isOpen,o=void 0!==a&&a,l=c.useState("ji"),i=Object(b.a)(l,2),u=i[0],s=i[1],d=c.useContext(P),f=d.addCoupling,m=d.couplings;return c.createElement(C.a,{onClose:n,isOpen:o},c.createElement(y.a,null,c.createElement(O.g,null,"Create a Coupling")),c.createElement(O.e,null,c.createElement(ge.a,{value:u,onChange:function(e){return s(e.target.value)},name:"coupling",align:be.a.horizontal},c.createElement(Ee.a,{value:r.tf},"TF"),c.createElement(Ee.a,{value:r.ij},"JI"),c.createElement(Ee.a,{value:r.uni},"Union"),c.createElement(Ee.a,{value:r.simple},"Simple"))),c.createElement(O.f,null,c.createElement(j.a,{kind:"tertiary",onClick:n},"Close"),c.createElement(j.a,{autoFocus:!0,onClick:function(){var e="simple"===u?"":u,t=Object(E.a)(Object(E.a)({},R),{},{id:"rect-code-coypling-".concat(m.length),text:e,type:u});f(t),s(""),n()},disabled:""===u},"Create")))},je=o.a.memo((function(e){var t=e.selected,n=void 0===t?"":t,a=e.selectCoupling,c=void 0===a?function(){}:a,l=o.a.useContext(P),i=l.couplings,u=l.updateCouplings,s=function(e,t){"click"===e.type?c(t):"contextmenu"===e.type&&(window.addEventListener("contextmenu",(function(e){e.preventDefault()})),alert("Right click"))};return o.a.createElement(o.a.Fragment,null,null===i||void 0===i?void 0:i.map((function(e,t){return r.uni===e.type?o.a.createElement(ye,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return s(t,e.id)},onChange:function(e){var n=i.slice();n[t]=e,u(n)}}):o.a.createElement(Ce,{key:t,shapeProps:e,isSelected:e.id===n,onSelect:function(t){return s(t,e.id)},onChange:function(e){var n=i.slice();n[t]=e,u(n)}})})))})),ke=n(211),Se=n(31),we=c.memo((function(e){var t=e.isOpen,n=void 0!==t&&t,a=e.cancell,r=void 0===a?function(){}:a,o=c.useContext(P).rectangles,l=function(){var e=["SIZE"],t=["YEAR"],n=["COVER"],a=["LENGTH"],r=["MATERIAL"],c=["METHOD"],l=["PRESSURE"],i=function(e){var t=new Map;return o.forEach((function(n){var a=e(n,"size"),r=e(n,"material"),c=e(n,"pressure"),o=e(n,"method"),l=e(n,"year"),i="".concat(a,"/").concat(r,"/").concat(c,"/").concat(o,"/").concat(l),u=t.get(i);u?u.push(n):t.set(i,[n])})),t}((function(e,t){return e.data[t]})),u=[];i.forEach((function(e){var t={};e.forEach((function(e){var n,a,r=e.data;t=Object(E.a)(Object(E.a)({},r),{},{length:t.length?(n=t.length,a=r.length,parseInt(n,10)+parseInt(a,10)):parseInt(r.length)})})),u.push(t)}));var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e,t){return"SEGMENT ".concat(t+1)})),n=[""].concat(Object(L.a)(t));return n}(u);return u.forEach((function(o){Object.keys(o).forEach((function(i){switch(i){case"size":e.push(o[i]);break;case"year":t.push(o[i]);break;case"cover":n.push(o[i]);break;case"length":a.push("".concat(o[i],"'"));break;case"material":r.push(o[i]);break;case"method":c.push(o[i]);break;case"pressure":l.push(o[i])}}))})),{data:[e,t,n,a,r,c,l],header:s}}(),i=l.data,u=l.header;return c.createElement(C.a,{onClose:r,closeable:!0,isOpen:n,animate:!0,autoFocus:!0,size:Se.c.full,role:Se.b.dialog},c.createElement(O.g,null,"Report status"),c.createElement(O.e,null,c.createElement(ke.a,{columns:u,data:i})))})),Te=n(205),Re=n(187),Fe=n(11),Le=n(208),Pe=n(112),Me=n(28),De=n(19),Be=n(20);function Ie(){var e=Object(De.a)(["\n    margin-top:3px;\n    color:",";\n"]);return Ie=function(){return e},e}function ze(){var e=Object(De.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 70px;\n    width:80px;\n    padding:5px;\n    background-color:'#FFF';\n    :hover{\n        background-color:","\n    }\n"]);return ze=function(){return e},e}var Ne=Be.a.div(ze(),(function(e){return e.theme.colors.buttonMinimalHover})),Ye=Be.a.label(Ie(),(function(e){return e.theme.colors.mono500})),Ge={BsDash:function(e){return o.a.createElement(Me.e,e)},BsSquare:function(e){return o.a.createElement(Me.h,e)},BsCircle:function(e){return o.a.createElement(Me.b,e)},BsCircleFill:function(e){return o.a.createElement(Me.c,e)},BsCaretRightFill:function(e){return o.a.createElement(Me.a,e)},BsCrop:function(e){return o.a.createElement(Me.d,e)},BsTextareaT:function(e){return o.a.createElement(Me.i,e)}},Ae=function(e){var t=Object(oe.b)(),n=Object(b.a)(t,2),a=(n[0],n[1]),r=e.item,c=r.label,l=r.icon,i=r.key,u=e.onClick,s=Object(Pe.a)(e,["item","onClick"]),d=Ge[l];return o.a.createElement(Ne,Object.assign({},s,{theme:a,onClick:function(){return u(i)},"data-cy":"option-side-bar"}),o.a.createElement(d,{color:a.colors.mono500}),o.a.createElement(Ye,{theme:a},c))},Ve=function(){},He=function(e){var t=e.options,n=void 0===t?[]:t,a=e.onClick,r=void 0===a?Ve:a;e.overrides;return o.a.createElement(Le.a,{items:n,overrides:{Option:{component:Ae,props:{onClick:r}}},renderAll:!0})},Xe=n(106),We=n.n(Xe),qe=n(107),$e=n.n(qe),Je=function(){var e=Object(g.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We()(t);case 2:n=e.sent,a=n.toDataURL("image/png"),(r=new $e.a).addImage(a,"JPEG",20,20,200,200),r.save("download.pdf");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function Ue(){var e=Object(De.a)(["\n    height:40px; \n    width:100%; \n    background-Color:#FFF; \n    position: relative;\n    display: flex;\n    flex-flow: row;\n    justify-content: flex-end;\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 16px;\n"]);return Ue=function(){return e},e}function _e(){var e=Object(De.a)(["\n    display: flex;\n    flex-flow: row;\n    background-color: #F9F9F9;\n"]);return _e=function(){return e},e}function Ze(){var e=Object(De.a)(["\n    display: flex;\n    flex-flow: column;\n    background-color: #F9F9F9;\n"]);return Ze=function(){return e},e}var Ke=Be.a.div(Ze()),Qe=Be.a.div(_e()),et=Be.a.div(Ue()),tt=function(){var e=o.a.useState(""),t=Object(b.a)(e,2),n=t[0],r=t[1],c=o.a.useState(""),l=Object(b.a)(c,2),i=l[0],u=l[1],s=o.a.useState(!1),d=Object(b.a)(s,2),f=d[0],m=d[1],p=o.a.useState(!1),h=Object(b.a)(p,2),E=h[0],x=h[1],C=function(e){e.target===e.target.getStage()&&u("")},y=function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!E){e.next=2;break}return e.abrupt("return");case 2:return x(!0),t=document.querySelector(".konvajs-content > canvas"),e.next=6,Je(t);case 6:x(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return r("")};return o.a.createElement(M,null,o.a.createElement(Ke,null,o.a.createElement(et,null,o.a.createElement(Re.a,{shape:Fe.b.square,overrides:{Root:{style:{marginRight:"15px"}}},disabled:""===i},o.a.createElement(Me.g,null)),o.a.createElement(Re.a,{shape:Fe.b.square,disabled:E,endEnhancer:function(){return o.a.createElement(Me.f,null)},onClick:function(){return y()}},E?"Generating...":"Generate PDF"),o.a.createElement(Re.a,{endEnhancer:function(){return o.a.createElement(Te.a,{size:24})},onClick:function(){return m(!0)}},"Open Report")),o.a.createElement(Qe,null,o.a.createElement(He,{onClick:function(e){return r(e)},options:F}),o.a.createElement(P.Consumer,null,(function(e){return o.a.createElement(I.Stage,{width:window.innerWidth-170,height:window.innerHeight-40,onMouseDown:C,onTouchStart:C},o.a.createElement(P.Provider,{value:e},o.a.createElement(I.Layer,null,o.a.createElement(ve,{selected:i,selectRect:u}),o.a.createElement(J,{selected:i,selectText:u}),o.a.createElement(Y,{selected:i,selectValve:u}),o.a.createElement(H,{selected:i,selectDrip:u}),o.a.createElement(ee,{selected:i,selectReducer:u}),o.a.createElement(je,{selected:i,selectCoupling:u}))))})))),o.a.createElement(he,{isOpen:n===a.rect,cancell:O}),o.a.createElement(N,{isOpen:n===a.valve,cancell:O}),o.a.createElement($,{isOpen:n===a.text,cancell:O}),o.a.createElement(V,{isOpen:n===a.drip,cancell:O}),o.a.createElement(Q,{isOpen:n===a.reducer,cancell:O}),o.a.createElement(Oe,{isOpen:n===a.union,cancell:O}),o.a.createElement(we,{isOpen:f,cancell:function(){return m(!1)}}))};function nt(){var e=Object(De.a)(["\n    width: 100%;\n    height: 100vh;\n"]);return nt=function(){return e},e}var at=Be.a.div(nt()),rt=function(){return o.a.createElement(at,null,o.a.createElement(tt,null))};function ct(){var e=Object(De.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 0px 30px;\n  min-height: calc(100vh - 200px);\n  \n\n.login__container{\n  font-family: "Muli", sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: calc(100vh - 200px);\n  justify-content: space-around;\n  padding: auto;\n  color: black;\n  min-height: 150px; \n}\n']);return ct=function(){return e},e}function ot(){var e=Object(De.a)(['\n\n  margin: 0;\n  font-family: "Muli", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  min-height: 100vh; \na {\n  color: white;\n  cursor: pointer;\n  font-size: 14px;\n  text-decoration: none;\n}\n']);return ot=function(){return e},e}var lt=Be.a.div(ot()),it=Be.a.section(ct());function ut(){var e=Object(De.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: calc(100vh - 300px);\n  margin-top:auto;\n  max-width: 400px;\n"]);return ut=function(){return e},e}var st=Be.a.section(ut()),dt=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),l=Object(b.a)(r,2),i=l[0],u=l[1],d=Object(s.g)();return o.a.createElement(st,null,o.a.createElement(X.a,{value:n,onChange:function(e){return a(e.currentTarget.value)},type:"text",placeholder:"User",overrides:{Root:{style:function(e){e.$theme;return{margin:"10px 0"}}}}}),o.a.createElement(X.a,{value:i,onChange:function(e){return u(e.currentTarget.value)},placeholder:"Password",type:"password",overrides:{Root:{style:function(e){e.$theme;return{marginBottom:"15px"}}}}}),o.a.createElement(Re.a,{type:"submit",disabled:""===n||""===i,onClick:function(){d.push("/Ticket")},overrides:{BaseButton:{style:{width:"100%"}}}},"LOGIN"))};function ft(){var e=Object(De.a)(["\n  margin-bottom:30px;\n\n  -webkit-box-shadow: 0 8pt 16pt rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 8pt 16pt rgba(0, 0, 0, 0.2);\n  box-shadow: 0 8pt 16pt rgba(0, 0, 0, 0.2);\n\n"]);return ft=function(){return e},e}function mt(){var e=Object(De.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: calc(100vh - 300px);\n  margin-top:90px;\n"]);return mt=function(){return e},e}var pt=Be.a.section(mt()),ht=Be.a.img(ft()),vt=n(108),gt=n.n(vt),bt=function(e){return o.a.createElement(pt,null,o.a.createElement(ht,{src:gt.a,alt:"conEdison logo",width:"180"}),e.children)},Et=function(){return o.a.createElement(lt,null,o.a.createElement(it,null,o.a.createElement(bt,{children:o.a.createElement(dt,null)})))};function xt(){var e=Object(De.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: calc(100vh - 300px);\n  margin-top:auto;\n  max-width: 300px;\n"]);return xt=function(){return e},e}var Ct=Be.a.section(xt()),yt=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(s.g)();return o.a.createElement(Ct,null,o.a.createElement(X.a,{value:n,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Ticket Number",overrides:{Root:{style:function(e){e.$theme;return{marginBottom:"10px"}}}}}),o.a.createElement(Re.a,{type:"submit",disabled:""===n,onClick:function(){r.push("/Sketch")},overrides:{BaseButton:{style:{width:"100%"}}}},"NEXT"))};function Ot(){var e=Object(De.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px 30px;\n  min-height: calc(100vh - 200px);\n\n.ticket__container{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: auto;\n  color: black;\n  min-height: 150px;\n  width: 300px;\n  \n}"]);return Ot=function(){return e},e}var jt=Be.a.section(Ot()),kt=function(){return o.a.createElement(jt,null,o.a.createElement(bt,{children:o.a.createElement(yt,null)}))},St=new d.a;var wt=function(){return o.a.createElement(f.a,{value:St},o.a.createElement(m.a,{theme:p.a},o.a.createElement(u.a,null,o.a.createElement(s.a,{from:"/",to:"/Login"}),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/Login",component:Et}),o.a.createElement(s.b,{path:"/Ticket",component:kt}),o.a.createElement(s.b,{path:"/Sketch",component:rt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(wt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.42749557.chunk.js.map