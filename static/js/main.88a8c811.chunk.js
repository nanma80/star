(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/povGreatStellatedDodecahedron.00ad4b25.png"},29:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/explodeGreatStellatedDodecahedron.747e397a.gif"},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),l=a(9),i=a(11),d=(a(34),a(1)),s=a(3),h=a(2),u=a(4),m=a(25),p=a(13),b=a(26),E=a(17),O={root:{fontFamily:'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',fontWeight:300},header:{backgroundColor:"#03a9f4",color:"white",padding:"16px",fontSize:"1.5em"}},y=function(e){var t=e.style?Object(E.a)({},O.root,e.style):O.root;return r.a.createElement("div",{style:t},r.a.createElement("div",{style:O.header},e.title),e.children)},v={sidebar:{width:256,height:"100%"},sidebarLink:{display:"block",padding:"16px 0px",color:"#757575",textDecoration:"none"},divider:{margin:"8px 0",height:1,backgroundColor:"#757575"},content:{padding:"16px",height:"100%",backgroundColor:"white"}},g=function(e){var t=e.style?Object(E.a)({},v.sidebar,e.style):v.sidebar;return r.a.createElement(y,{title:"Menu",style:t},r.a.createElement("div",{style:v.content},r.a.createElement(l.b,{to:"/",style:v.sidebarLink},"Home"),r.a.createElement("div",{style:v.divider},"2D:"),r.a.createElement(l.b,{to:"/pentagram",style:v.sidebarLink},"Pentagram"),r.a.createElement("div",{style:v.divider},"3D:"),r.a.createElement(l.b,{to:"/polyhedron_5_3",style:v.sidebarLink},"Dodecahedron"),r.a.createElement(l.b,{to:"/polyhedron_3_5",style:v.sidebarLink},"Icosahedron"),r.a.createElement(l.b,{to:"/polyhedron_52_5",style:v.sidebarLink},"Small stellated dodecahedron"),r.a.createElement(l.b,{to:"/polyhedron_5_52",style:v.sidebarLink},"Great dodecahedron"),r.a.createElement(l.b,{to:"/polyhedron_52_3",style:v.sidebarLink},"Great stellated dodecahedron"),r.a.createElement(l.b,{to:"/polyhedron_3_52",style:v.sidebarLink},"Great icosahedron"),r.a.createElement("div",{style:v.divider},"4D:")))},j=(a(40),{contentHeaderMenuLink:{textDecoration:"none",color:"white",padding:8},content:{padding:"16px"}}),f=window.matchMedia("(min-width: 800px)"),k=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state={docked:f.matches,open:!1,content:"default content",contentHeader:r.a.createElement("span",null," Star Polytopes ")},a.mediaQueryChanged=a.mediaQueryChanged.bind(Object(p.a)(a)),a.toggleOpen=a.toggleOpen.bind(Object(p.a)(a)),a.onSetOpen=a.onSetOpen.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){f.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){f.removeListener(this.mediaQueryChanged)}},{key:"onSetOpen",value:function(e){this.setState({open:e})}},{key:"mediaQueryChanged",value:function(){this.setState({docked:f.matches,open:!1})}},{key:"toggleOpen",value:function(e){this.setState({open:!this.state.open}),e&&e.preventDefault()}},{key:"render",value:function(){console.log("rendering app.js");var e=r.a.createElement(g,null),t=r.a.createElement("span",null,!this.state.docked&&r.a.createElement("a",{onClick:this.toggleOpen,href:"/#",style:j.contentHeaderMenuLink},"="),this.state.contentHeader),a={sidebar:e,docked:this.state.docked,open:this.state.open,onSetOpen:this.onSetOpen},n=r.a.createElement("div",{style:j.content},this.state.content);return r.a.createElement(b.a,a,r.a.createElement(y,{title:t},n))}}]),t}(r.a.Component),_=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to star polytopes")),a.state.contentHeader=r.a.createElement("span",null," Welcome to star polytopes! "),a}return Object(u.a)(t,e),t}(k),H=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,"Pentagram is ..."),a.state.contentHeader=r.a.createElement("span",null," 2D: Pentagram "),a}return Object(u.a)(t,e),t}(k),S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,"The regular icosahedron is ..."),a.state.contentHeader=r.a.createElement("span",null," Icosahedron "),a}return Object(u.a)(t,e),t}(k),x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,"The great icosahedron is ..."),a.state.contentHeader=r.a.createElement("span",null," Great icosahedron "),a}return Object(u.a)(t,e),t}(k),L=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,r.a.createElement("span",null,"The Great Stellated Dodecahedron is ..."),r.a.createElement("div",null,r.a.createElement("img",{src:a(23),alt:"static"}),r.a.createElement("img",{src:a(23),alt:"static"})),r.a.createElement("div",null,r.a.createElement("img",{src:a(41),alt:"animation"}))),n.state.contentHeader=r.a.createElement("span",null,"Great stellated dodecahedron"),n}return Object(u.a)(t,e),t}(k),D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,"The Small Stellated Dodecahedron is ..."),a.state.contentHeader=r.a.createElement("span",null,"Small stellated dodecahedron"),a}return Object(u.a)(t,e),t}(k),w=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,"The regular dodecahedron is ..."),a.state.contentHeader=r.a.createElement("span",null," Dodecahedron "),a}return Object(u.a)(t,e),t}(k),G=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).state.content=r.a.createElement("div",null,"The Great Dodecahedron is ..."),a.state.contentHeader=r.a.createElement("span",null," Great dodecahedron "),a}return Object(u.a)(t,e),t}(k);c.a.render(r.a.createElement(l.a,{basename:"/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/index.html",component:_}),r.a.createElement(i.a,{exact:!0,path:"/",component:_}),r.a.createElement(i.a,{path:"/pentagram",component:H}),r.a.createElement(i.a,{path:"/polyhedron_3_5",component:S}),r.a.createElement(i.a,{path:"/polyhedron_3_52",component:x}),r.a.createElement(i.a,{path:"/polyhedron_52_3",component:L}),r.a.createElement(i.a,{path:"/polyhedron_52_5",component:D}),r.a.createElement(i.a,{path:"/polyhedron_5_3",component:w}),r.a.createElement(i.a,{path:"/polyhedron_5_52",component:G}))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.88a8c811.chunk.js.map