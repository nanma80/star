(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},14:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(5),i=t.n(r),c=(t(20),t(6)),s=t(7),d=t(12),l=t(8),u=t(3),m=t(13),p=t(9),h=t(11),b=t.n(h),f=(t(25),window.matchMedia("(min-width: 800px)")),g=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(d.a)(this,Object(l.a)(n).call(this,e))).state={sidebarDocked:f.matches,sidebarOpen:!1},t.mediaQueryChanged=t.mediaQueryChanged.bind(Object(u.a)(t)),t.onSetSidebarOpen=t.onSetSidebarOpen.bind(Object(u.a)(t)),t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentWillMount",value:function(){f.addListener(this.mediaQueryChanged)}},{key:"componentWillUnmount",value:function(){f.removeListener(this.mediaQueryChanged)}},{key:"onSetSidebarOpen",value:function(e){this.setState({sidebarOpen:e})}},{key:"mediaQueryChanged",value:function(){this.setState({sidebarDocked:f.matches,sidebarOpen:!1})}},{key:"render",value:function(){return o.a.createElement(p.a,{sidebar:o.a.createElement("b",null,"Sidebar content"),open:this.state.sidebarOpen,docked:this.state.sidebarDocked,onSetOpen:this.onSetSidebarOpen},o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.d3c951f8.chunk.js.map