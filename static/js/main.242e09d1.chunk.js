(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(4),o=n.n(r),i=(n(9),n(2)),u=(n(10),n(0));function s(t){var e=t.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==r.trim()?(e(r),o("")):alert("Please enter your city")},children:[Object(u.jsx)("input",{type:"text",name:"cityName",value:r,onChange:function(t){o(t.currentTarget.value.toLowerCase())}}),Object(u.jsx)("button",{type:"submit",children:"Show weather"})]})}function j(t){var e=t.cityName,n=Object(c.useState)(null),a=Object(i.a)(n,2),r=a[0],o=a[1];Object(c.useEffect)((function(){e&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=af0f9a3d3acf15b4d50d288abcbabfde&units=metric")).then((function(t){return t.json()})).then((function(t){return o(t)})).catch((function(t){alert("Please enter valid city name"),document.location.reload()}))}),[e]);var s={backgroundColor:"#00ffff"},j={backgroundColor:"#fff700"},d={backgroundColor:"#ff8c00"};return Object(u.jsx)(u.Fragment,{children:r&&Object(u.jsx)(u.Fragment,{children:r.weather.map((function(t){var e=t.description,n=t.icon,c=t.main,a=t.id;return Object(u.jsxs)("div",{style:Math.round(r.main.temp)<10?s:Math.round(r.main.temp)>=10&&Math.round(r.main.temp)<=29?j:d,children:[Object(u.jsx)("h1",{children:r.name}),Object(u.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(n,"@2x.png"),alt:e}),Object(u.jsxs)("h2",{children:[Math.round(r.main.temp)," \xb0C"]}),Object(u.jsxs)("p",{children:[c,": ",e]})]},a)}))})})}function d(){var t=Object(c.useState)(null),e=Object(i.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),s=o[0],j=o[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),h=b[0],f=b[1],m={backgroundColor:"#00ffff"},l={backgroundColor:"#fff700"},p={backgroundColor:"#ff8c00"};return Object(c.useEffect)((function(){s&&h&&fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(s,"&lon=").concat(h,"&appid=af0f9a3d3acf15b4d50d288abcbabfde&units=metric")).then((function(t){return t.json()})).then((function(t){return a(t)})).catch((function(t){return console.warn(t)})),navigator.geolocation.getCurrentPosition((function(t){j(t.coords.latitude),f(t.coords.longitude)}))}),[s,h]),Object(u.jsx)(u.Fragment,{children:n&&Object(u.jsx)(u.Fragment,{children:n.weather.map((function(t){var e=t.description,c=t.icon,a=t.main,r=t.id;return Object(u.jsxs)("div",{style:Math.round(n.main.temp)<10?m:Math.round(n.main.temp)>=10&&Math.round(n.main.temp)<=29?l:p,children:[Object(u.jsx)("h1",{children:n.name}),Object(u.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(c,"@2x.png"),alt:e}),Object(u.jsxs)("h2",{children:[Math.round(n.main.temp)," \xb0C"]}),Object(u.jsxs)("p",{children:[a,": ",e]})]},r)}))})})}function b(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{className:"weather-container",children:[Object(u.jsx)(s,{onSubmit:function(t){a(t)}}),""===n&&Object(u.jsx)(d,{}),Object(u.jsx)(j,{cityName:n})]})}var h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.242e09d1.chunk.js.map