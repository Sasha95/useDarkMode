(window.webpackJsonpuse_dark_mode=window.webpackJsonpuse_dark_mode||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),c=n(4),s=n(1),u=function(e,t,n){var o=Object(a.useState)(n),r=Object(s.a)(o,2),i=r[0],c=r[1],u=e.map(function(e){return window.matchMedia(e)}),h=function(){var e=u.findIndex(function(e){return e.matches});return"undefined"!==typeof t[e]?t[e]:n};return Object(a.useEffect)(function(){c(h);var e=function(){return c(h)};return u.forEach(function(t){return t.addListener(e)}),function(){return u.forEach(function(t){return t.removeListener(e)})}},[]),i},h=function(){var e=function(e,t){var n=Object(a.useState)(function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}}),o=Object(s.a)(n,2),r=o[0],i=o[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]}("dark-mode-enabled"),t=Object(s.a)(e,2),n=t[0],o=t[1],r=u(["(prefers-color-scheme: dark)"],[!0],!1),i="undefined"!==typeof n?n:r;return Object(a.useEffect)(function(){var e=window.document.body;i?e.classList.add("dark-mode"):e.classList.remove("dark-mode")},[i]),[i,o]};var m=function(e){var t=e.setDarkMode;return o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){return t(!1)}},"\u2600"),o.a.createElement("button",{type:"button",onClick:function(){return t(!0)}},"\u263e"))},d=(n(10),[{image:"https://source.unsplash.com/lxuB4abGzXc/800x1000",width:800,height:1e3},{image:"https://source.unsplash.com/d30sszrW7Vw/800x800",width:800,height:800},{image:"https://source.unsplash.com/mDuluxr50Ew/800x500",width:800,height:500},{image:"https://source.unsplash.com/KX2mdxPYOtA/800x1100",width:800,height:1100},{image:"https://source.unsplash.com/oNoctqY9Oso/800x1200",width:800,height:1200},{image:"https://source.unsplash.com/-SFhuMwFClk/800x900",width:800,height:900},{image:"https://source.unsplash.com/hDqLoCCGOdU/800x1000",width:800,height:1e3},{image:"https://source.unsplash.com/UZ3V6AV5y4o/800x500",width:800,height:500},{image:"https://source.unsplash.com/vlLH_kn-_h8/800x1200",width:800,height:1200},{image:"https://source.unsplash.com/TGvIuQG0AXw/800x1100",width:800,height:1100},{image:"https://source.unsplash.com/pBLJBHbtv0c/800x1000",width:800,height:1e3}]);n(11);var l=function(){var e=h(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=u(["(min-width: 1500px)","(min-width: 1000px)","(min-width: 600px)"],[5,4,3],2),i=new Array(r).fill(0),l=new Array(r).fill().map(function(){return[]});return d.forEach(function(e){var t=i.indexOf(Math.min.apply(Math,Object(c.a)(i)));l[t].push(e),i[t]+=e.height}),o.a.createElement("div",{className:"App"},o.a.createElement(m,{darkMode:n,setDarkMode:a}),o.a.createElement("div",{className:"columns is-mobile"},l.map(function(e,t){return o.a.createElement("div",{className:"column",key:t},e.map(function(e,t){return o.a.createElement("div",{className:"image-container",style:{paddingTop:e.height/e.width*100+"%"},key:t},o.a.createElement("img",{src:e.image,alt:""}))}))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.9c96bbe2.chunk.js.map