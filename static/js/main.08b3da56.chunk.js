(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/povGreatStellatedDodecahedron.00ad4b25.png"},29:function(e,t,a){e.exports=a(42)},34:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/explodeGreatStellatedDodecahedron.747e397a.gif"},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),o=a(5),i=a(11),s=(a(34),a(1)),d=a(4),p=a(2),u=a(3),h=a(25),m=a(13),b=a(26),_=a(17),E={root:{fontFamily:'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',fontWeight:300},header:{backgroundColor:"#03a9f4",color:"white",padding:"16px",fontSize:"1.5em"}},O=function(e){var t=e.style?Object(_.a)({},E.root,e.style):E.root;return c.a.createElement("div",{style:t},c.a.createElement("div",{style:E.header},e.title),e.children)},j={sidebar:{width:256,height:"100%"},sidebarLink:{display:"block",padding:"16px 0px",color:"#757575",textDecoration:"none"},divider:{margin:"8px 0",height:1,backgroundColor:"#757575"},content:{padding:"16px",height:"100%",backgroundColor:"white"},dividerLine:{width:"100%","text-align":"center","line-height":"0.1",margin:"8px 0",backgroundColor:"#757575"},dividerText:{color:"#757575",textDecoration:"none",background:"#fff",padding:"0 10px"}},y=function(e){var t=e.style?Object(_.a)({},j.sidebar,e.style):j.sidebar;return c.a.createElement(O,{title:"Menu",style:t},c.a.createElement("div",{style:j.content},c.a.createElement(o.b,{to:"/",style:j.sidebarLink},"Home"),c.a.createElement("h2",{style:j.dividerLine},c.a.createElement("span",{style:j.dividerText},"2D")),c.a.createElement(o.b,{to:"/pentagram",style:j.sidebarLink},"Pentagram"),c.a.createElement("h2",{style:j.dividerLine},c.a.createElement("span",{style:j.dividerText},"3D")),c.a.createElement(o.b,{to:"/polyhedron_5_3",style:j.sidebarLink},"Dodecahedron"),c.a.createElement(o.b,{to:"/polyhedron_3_5",style:j.sidebarLink},"Icosahedron"),c.a.createElement(o.b,{to:"/polyhedron_52_5",style:j.sidebarLink},"Small stellated dodecahedron"),c.a.createElement(o.b,{to:"/polyhedron_5_52",style:j.sidebarLink},"Great dodecahedron"),c.a.createElement(o.b,{to:"/polyhedron_52_3",style:j.sidebarLink},"Great stellated dodecahedron"),c.a.createElement(o.b,{to:"/polyhedron_3_52",style:j.sidebarLink},"Great icosahedron"),c.a.createElement("h2",{style:j.dividerLine},c.a.createElement("span",{style:j.dividerText},"4D")),c.a.createElement(o.b,{to:"/polytope_5_3_3",style:j.sidebarLink},"120-cell"),c.a.createElement(o.b,{to:"/polytope_3_3_5",style:j.sidebarLink},"600-cell"),c.a.createElement(o.b,{to:"/polytope_3_5_52",style:j.sidebarLink},"{"," 3, 5, 5/2 ","}"),c.a.createElement(o.b,{to:"/polytope_52_5_3",style:j.sidebarLink},"{"," 5/2, 5, 3 ","}"),c.a.createElement(o.b,{to:"/polytope_5_52_5",style:j.sidebarLink},"{"," 5, 5/2, 5 ","}"),c.a.createElement(o.b,{to:"/polytope_5_3_52",style:j.sidebarLink},"{"," 5, 3, 5/2 ","}"),c.a.createElement(o.b,{to:"/polytope_52_3_5",style:j.sidebarLink},"{"," 5/2, 3, 5 ","}"),c.a.createElement(o.b,{to:"/polytope_52_5_52",style:j.sidebarLink},"{"," 5/2, 5, 5/2 ","}"),c.a.createElement(o.b,{to:"/polytope_5_52_3",style:j.sidebarLink},"{"," 5, 5/2, 3 ","}"),c.a.createElement(o.b,{to:"/polytope_3_52_5",style:j.sidebarLink},"{"," 3, 5/2, 5 ","}"),c.a.createElement(o.b,{to:"/polytope_3_3_52",style:j.sidebarLink},"{"," 3, 3, 5/2 ","}"),c.a.createElement(o.b,{to:"/polytope_52_3_3",style:j.sidebarLink},"{"," 5/2, 3, 3 ","}")))},v=(a(40),{contentHeaderMenuLink:{textDecoration:"none",color:"white",padding:8},content:{padding:"16px"}}),f=window.matchMedia("(min-width: 800px)"),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={docked:f.matches,open:!1,content:"default content",contentHeader:c.a.createElement("span",null," Star Polytopes ")},a.mediaQueryChanged=a.mediaQueryChanged.bind(Object(m.a)(a)),a.toggleOpen=a.toggleOpen.bind(Object(m.a)(a)),a.onSetOpen=a.onSetOpen.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){f.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){f.removeListener(this.mediaQueryChanged)}},{key:"onSetOpen",value:function(e){this.setState({open:e})}},{key:"mediaQueryChanged",value:function(){this.setState({docked:f.matches,open:!1})}},{key:"toggleOpen",value:function(e){this.setState({open:!this.state.open}),e&&e.preventDefault()}},{key:"render",value:function(){console.log("rendering app.js");var e=c.a.createElement(y,null),t=c.a.createElement("span",null,!this.state.docked&&c.a.createElement("a",{onClick:this.toggleOpen,href:"/#",style:v.contentHeaderMenuLink},"="),this.state.contentHeader),a={sidebar:e,docked:this.state.docked,open:this.state.open,onSetOpen:this.onSetOpen},n=c.a.createElement("div",{style:v.content},this.state.content);return c.a.createElement(b.a,a,c.a.createElement(O,{title:t},n))}}]),t}(c.a.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome to star polytopes")),a.state.contentHeader=c.a.createElement("span",null," Welcome to star polytopes! "),a}return Object(u.a)(t,e),t}(g),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"Pentagram is ..."),a.state.contentHeader=c.a.createElement("span",null," 2D: Pentagram "),a}return Object(u.a)(t,e),t}(g),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The regular icosahedron is ..."),a.state.contentHeader=c.a.createElement("span",null," Icosahedron "),a}return Object(u.a)(t,e),t}(g),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The great icosahedron is ..."),a.state.contentHeader=c.a.createElement("span",null," Great icosahedron "),a}return Object(u.a)(t,e),t}(g),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,c.a.createElement("span",null,"The Great Stellated Dodecahedron is ..."),c.a.createElement("div",null,c.a.createElement("img",{src:a(23),alt:"static"}),c.a.createElement("img",{src:a(23),alt:"static"})),c.a.createElement("div",null,c.a.createElement("img",{src:a(41),alt:"animation"}))),n.state.contentHeader=c.a.createElement("span",null,"Great stellated dodecahedron"),n}return Object(u.a)(t,e),t}(g),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The Small Stellated Dodecahedron is ..."),a.state.contentHeader=c.a.createElement("span",null,"Small stellated dodecahedron"),a}return Object(u.a)(t,e),t}(g),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The regular dodecahedron is ..."),a.state.contentHeader=c.a.createElement("span",null," Dodecahedron "),a}return Object(u.a)(t,e),t}(g),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The Great Dodecahedron is ..."),a.state.contentHeader=c.a.createElement("span",null," Great dodecahedron "),a}return Object(u.a)(t,e),t}(g),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The 120-cell is ..."),a.state.contentHeader=c.a.createElement("span",null," 120-cell "),a}return Object(u.a)(t,e),t}(g),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The 600-cell is ..."),a.state.contentHeader=c.a.createElement("span",null," 600-cell "),a}return Object(u.a)(t,e),t}(g),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"3_5_52 is ..."),a.state.contentHeader=c.a.createElement("span",null," 3_5_52 "),a}return Object(u.a)(t,e),t}(g),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"52_5_3 is ..."),a.state.contentHeader=c.a.createElement("span",null," 52_5_3 "),a}return Object(u.a)(t,e),t}(g),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"5_52_5 is ..."),a.state.contentHeader=c.a.createElement("span",null," 5_52_5 "),a}return Object(u.a)(t,e),t}(g),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"5_3_52 is ..."),a.state.contentHeader=c.a.createElement("span",null," 5_3_52 "),a}return Object(u.a)(t,e),t}(g),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"52_3_5 is ..."),a.state.contentHeader=c.a.createElement("span",null," 52_3_5 "),a}return Object(u.a)(t,e),t}(g),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"52_5_52 is ..."),a.state.contentHeader=c.a.createElement("span",null," 52_5_52 "),a}return Object(u.a)(t,e),t}(g),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"5_52_3 is ..."),a.state.contentHeader=c.a.createElement("span",null," 5_52_3 "),a}return Object(u.a)(t,e),t}(g),z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"3_52_5 is ..."),a.state.contentHeader=c.a.createElement("span",null," 3_52_5 "),a}return Object(u.a)(t,e),t}(g),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"The Grand 600-cell (3,3,5/2) is ..."),a.state.contentHeader=c.a.createElement("span",null," Grand 600-cell "),a}return Object(u.a)(t,e),t}(g),B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state.content=c.a.createElement("div",null,"52_3_3 is ..."),a.state.contentHeader=c.a.createElement("span",null," Great grand stellated 120-cell "),a}return Object(u.a)(t,e),t}(g);r.a.render(c.a.createElement(o.a,{basename:"/"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/index.html",component:k}),c.a.createElement(i.a,{exact:!0,path:"/",component:k}),c.a.createElement(i.a,{path:"/pentagram",component:L}),c.a.createElement(i.a,{path:"/polyhedron_3_5",component:H}),c.a.createElement(i.a,{path:"/polyhedron_3_52",component:x}),c.a.createElement(i.a,{path:"/polyhedron_52_3",component:S}),c.a.createElement(i.a,{path:"/polyhedron_52_5",component:D}),c.a.createElement(i.a,{path:"/polyhedron_5_3",component:w}),c.a.createElement(i.a,{path:"/polyhedron_5_52",component:G}),c.a.createElement(i.a,{path:"/polytope_5_3_3",component:T}),c.a.createElement(i.a,{path:"/polytope_3_3_5",component:C}),c.a.createElement(i.a,{path:"/polytope_3_5_52",component:M}),c.a.createElement(i.a,{path:"/polytope_52_5_3",component:Q}),c.a.createElement(i.a,{path:"/polytope_5_52_5",component:W}),c.a.createElement(i.a,{path:"/polytope_5_3_52",component:P}),c.a.createElement(i.a,{path:"/polytope_52_3_5",component:I}),c.a.createElement(i.a,{path:"/polytope_52_5_52",component:N}),c.a.createElement(i.a,{path:"/polytope_5_52_3",component:J}),c.a.createElement(i.a,{path:"/polytope_3_52_5",component:z}),c.a.createElement(i.a,{path:"/polytope_3_3_52",component:A}),c.a.createElement(i.a,{path:"/polytope_52_3_3",component:B}))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.08b3da56.chunk.js.map