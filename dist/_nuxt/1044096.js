(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{561:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r(66),r(31);function n(t){return t.startsWith("/")?"".concat("http://localhost:1337").concat(t):t}},572:function(t,e,r){var content=r(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("eb40f3ce",content,!0,{sourceMap:!1})},589:function(t,e,r){"use strict";r(572)},590:function(t,e,r){var n=r(15)(!1);n.push([t.i,".blog-hero-img[data-v-0af305af]{background-repeat:no-repeat;background-position:50%;background-size:cover;margin-top:-76px;height:40vh}",""]),t.exports=n},597:function(t,e,r){"use strict";r.r(e);var n=r(18),o=(r(83),r(121),{data:function(){return{featured:{},homepage:{}}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$strapi.find("featured-post");case 2:return t.featured=e.sent,e.next=5,t.$strapi.find("homepage");case 5:t.homepage=e.sent;case 6:case"end":return e.stop()}}),e)})))()},methods:{getStrapiMedia:r(561).a}}),c=(r(589),r(41)),l=r(37),f=r.n(l),d=r(218),h=r(178),v=r(551),m=r(176),x=r(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"blog-hero-img",attrs:{src:t.getStrapiMedia(t.featured.article.image.url)}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-card-title",{staticClass:"primary--text text-h4"},[t._v(t._s(t.homepage.hero.title))]),t._v(" "),r("v-card-title",{staticClass:"primary--text text-capitalize"},[t._v(t._s(t.featured.article.title))]),t._v(" "),r("v-btn",{attrs:{to:{name:"blog-slug",params:{slug:t.featured.article.slug}},tile:"",text:"","x-large":"",color:"success"}},[t._v("\n            ...Read More\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"0af305af",null);e.default=component.exports;f()(component,{VBtn:d.a,VCardTitle:h.d,VCol:v.a,VImg:m.a,VRow:x.a})}}]);