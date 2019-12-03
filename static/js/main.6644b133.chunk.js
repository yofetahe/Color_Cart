(this["webpackJsonpcolor-cart-app"]=this["webpackJsonpcolor-cart-app"]||[]).push([[0],{24:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/NewEngen-Logo.56b04b4c.svg"},43:function(e,t,n){e.exports=n.p+"static/media/CartIcon.39a60626.svg"},53:function(e,t,n){e.exports=n(70)},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},67:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(41),l=n.n(r),c=(n(58),n(22)),i=n(17),u=(n(59),n(90)),s=n(87),m=(n(60),n(42)),d=n.n(m),f=n(43),h=n.n(f),v=n(32),E=n(18),p=n(23),b=n(44),g=n.n(b),C=new p.a({uri:"https://colourlovers-graphql-api.herokuapp.com/graphql"});function O(){var e=Object(v.a)(['\n            {\n                colors(\n                    orderCol: "rgb"\n                    sortBy: "id"\n                    numResults: ',"\n                    resultOffset: ",") {\n                        id\n                        title\n                        hex\n                }\n            }"]);return O=function(){return e},e}function j(){var e=Object(v.a)(['\n            {\n                colors(\n                    orderCol: "rgb"\n                    sortBy: "id"\n                    numResults: ',"\n                    resultOffset: ",") {\n                        id\n                        title\n                        hex\n                        imageUrl\n                }\n            }"]);return j=function(){return e},e}var x=Object(a.createContext)(),y=function(e){var t=Object(a.useState)(!0),n=Object(E.a)(t,2),r=n[0],l=n[1],c=Object(a.useState)([]),i=Object(E.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)([]),d=Object(E.a)(m,2),f=d[0],h=d[1],v=Object(a.useState)(0),b=Object(E.a)(v,2),y=b[0],N=b[1],S=Object(a.useState)(40),w=Object(E.a)(S,2),P=w[0],k=w[1],D=Object(a.useState)(""),I=Object(E.a)(D,2),q=I[0],L=I[1],B=Object(a.useState)([]),M=Object(E.a)(B,2),W=M[0],F=M[1];Object(a.useEffect)((function(){C.query({query:Object(p.b)(O(),P,P)}).then((function(e){s(e.data.colors),l(!1)}))}),[]),window.onscroll=g()((function(){Math.round(window.innerHeight+document.documentElement.scrollTop)===document.documentElement.offsetHeight&&(k((function(e){return e+21})),console.log("IN",P))}),100);return o.a.createElement(x.Provider,{value:{loading:r,colorsList:u,selectedColors:f,handleColorSelection:function(e){if(!f.includes(e)){var t=f;t.push(e),h(t),N((function(e){return e+1})),document.getElementById(e.id).style.boxShadow="4px 4px #888888"}},handleColorDeletion:function(e){var t=f.filter((function(t){return t!==e}));N((function(e){return e-1})),h(t)},count:y,LoadMore:function(){k((function(e){return e+21})),console.log(P),C.query({query:Object(p.b)(j(),P,P)}).then((function(e){s(e.data.colors),l(!1)}))},handleFormSubmition:function(e){if(f.length>0&&""!==q){e.preventDefault();var t=f;t.push({id:0,hex:"f8f9fa",title:"DeletePalette"}),h(t),console.log(f);var n=W,a={id:1,title:q,colors:f};n.push(a),F(n),N((function(e){return e+1})),h([])}},handleInputChange:function(e){L(e)},prevSavedColorPalette:W,handleColorPaletteDeletion:function(e){console.log(e);var t=W.filter((function(t){return e!==t.id}));F(t)}}},e.children)},N=n(85),S=n(88),w=Object(N.a)((function(e){return{margin:{margin:e.spacing(2)},padding:{padding:e.spacing(0,2)}}})),P=function(){var e=w(),t=Object(a.useContext)(x).selectedColors;return o.a.createElement("div",{className:"myheader"},o.a.createElement(s.a,{maxWidth:"lg"},o.a.createElement("div",null,o.a.createElement(c.b,{to:"/"},o.a.createElement("img",{src:d.a,className:"logo",alt:"logo"}))),o.a.createElement("div",null,o.a.createElement(c.b,{to:"/cart"},o.a.createElement("div",{className:"cart"},o.a.createElement(S.a,{className:e.margin,badgeContent:t.length,color:"primary"},o.a.createElement("img",{src:h.a,alt:"cart"})))))))},k=(n(67),function(e){var t=Object(a.useContext)(x),n=(t.colorsList,t.LoadMore),r=t.loading;return o.a.createElement("div",null,o.a.createElement("div",null,r),o.a.createElement("button",{onClick:n},"Load More"))}),D=n(89),I=(n(24),n(28)),q=n.n(I),L=function(e){var t=Object(a.useContext)(x).handleColorDeletion;return o.a.createElement("div",{className:"colorDisplay",style:{backgroundColor:"#"+e.color.hex}},o.a.createElement("div",null,e.color.hex,o.a.createElement("span",{onClick:function(){return t(e.color)}}," ",o.a.createElement(q.a,{fontSize:"small"})," ")))},B=function(){var e=Object(a.useContext)(x),t=e.selectedColors,n=e.handleInputChange,r=e.handleFormSubmition;return o.a.createElement("div",{className:"content"},o.a.createElement("h3",{className:"title"},"Your Current color Cart Palette"),t.length>0?t.map((function(e){return o.a.createElement(L,{key:e.id,color:e})})):o.a.createElement("div",{className:"no-content"},"There is no selected color"),o.a.createElement("h5",{className:"small-title"},"Name and Save your color Palette"),o.a.createElement("form",{onSubmit:function(e){return r(e)}},o.a.createElement("input",{type:"text",placeholder:"Color Palette Name",name:"colorPaletteName",id:"colorPaletteName",onChange:function(e){return n(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Save Palette")))},M=function(e){var t=Object(a.useContext)(x).handleColorPaletteDeletion;return o.a.createElement("div",{className:"colorDisplay",style:{backgroundColor:"#"+e.color.hex}},o.a.createElement("div",null,0!==e.color.id?e.color.hex:o.a.createElement(q.a,{color:"secondary",onClick:function(){return t(e.paletteId)}})))},W=function(e){return o.a.createElement("div",null,o.a.createElement("h4",null,e.color.title," - ",e.color.colors.length," colors"),e.color.colors.map((function(t){return o.a.createElement(M,{key:t.id,color:t,paletteId:e.color.id})})))},F=function(){var e=Object(a.useContext)(x).prevSavedColorPalette;return o.a.createElement("div",null,o.a.createElement("h3",{className:"title"},"Previously saved color Palettes"),o.a.createElement("div",null,e.map((function(e){return o.a.createElement(W,{color:e,key:e.id})}))))},H=function(){var e=Object(a.useContext)(x).prevSavedColorPalette;return o.a.createElement("div",null,e,o.a.createElement(B,null),o.a.createElement(D.a,null),o.a.createElement(F,null))};var J=function(){return o.a.createElement(u.a,{client:C},o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(y,null,o.a.createElement(P,null),o.a.createElement(s.a,{maxWidth:"lg"},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:k}),o.a.createElement(i.a,{exact:!0,path:"/cart",component:H})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.6644b133.chunk.js.map