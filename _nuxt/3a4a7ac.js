(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3],{262:function(t,n,e){var content=e(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(104).default)("e8b0707a",content,!0,{sourceMap:!1})},263:function(t,n,e){"use strict";var r=e(2),o=e(264);r({target:"String",proto:!0,forced:e(265)("link")},{link:function(t){return o(this,"a","href",t)}})},264:function(t,n,e){var r=e(5),o=e(24),l=e(13),c=/"/g,d=r("".replace);t.exports=function(t,n,e,r){var f=l(o(t)),m="<"+n;return""!==e&&(m+=" "+e+'="'+d(l(r),c,"&quot;")+'"'),m+">"+f+"</"+n+">"}},265:function(t,n,e){var r=e(3);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},266:function(t,n,e){"use strict";e(262)},267:function(t,n,e){var r=e(103)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.btn:hover{\n  background-color:#fff;\n  color:#000;\n  transition:all .5s\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},268:function(t,n,e){"use strict";e.r(n);e(263),e(27);var r={name:"BtnLink",props:{name:{type:String,required:!0},link:{type:String,required:!0}},data:function(){return{pathName:this.$nuxt.context.route.fullPath}}},o=(e(266),e(23)),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("NuxtLink",{staticClass:"btn rounded-sm p-4 border-2 border-white",class:t.pathName==t.link?"text-black text-opacity-90 bg-white":"text-white bg-transparent",attrs:{to:t.link}},[t._v(t._s(t.name)+" ")])}),[],!1,null,null,null);n.default=component.exports},269:function(t,n,e){var content=e(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(104).default)("6e01eda0",content,!0,{sourceMap:!1})},270:function(t,n,e){t.exports=e.p+"img/newsletter.a25a507.webp"},271:function(t,n,e){t.exports=e.p+"img/poupoinaka.8260ff7.png"},272:function(t,n,e){"use strict";e(269)},273:function(t,n,e){var r=e(103)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\na[data-v-07df8b85],blockquote[data-v-07df8b85],span[data-v-07df8b85]{\n  font-size:.7rem\n}\n@media only screen and (max-width:640px){\na[data-v-07df8b85],blockquote[data-v-07df8b85],span[data-v-07df8b85]{\n    font-size:.5rem\n}\nh2[data-v-07df8b85],i[data-v-07df8b85]{\n    font-size:.7rem\n}\n}\n.card:hover .logo_card[data-v-07df8b85]{\n  animation-name:animation_card_logo-07df8b85;\n  animation-duration:.5s;\n  animation-iteration-count:1;\n  animation-fill-mode:forwards\n}\n.card:hover .description_card[data-v-07df8b85]{\n  animation-name:animation_card_description-07df8b85;\n  animation-duration:1s;\n  animation-iteration-count:1;\n  animation-delay:.5s;\n  animation-fill-mode:forwards\n}\n.logo_card[data-v-07df8b85]{\n  transform:rotate(-25deg)\n}\n.description_card[data-v-07df8b85]{\n  transform:rotate(25deg)\n}\n.explain[data-v-07df8b85]{\n  visibility:hidden;\n  top:-25%\n}\n.card:hover .explain[data-v-07df8b85]{\n  animation-name:animation_explain-07df8b85;\n  animation-duration:1s;\n  animation-iteration-count:1;\n  animation-delay:1.5s;\n  animation-fill-mode:forwards\n}\n@keyframes animation_explain-07df8b85{\n0%{\n    visibility:initial;\n    opacity:0\n}\nto{\n    visibility:visible;\n    opacity:1\n}\n}\n@keyframes animation_card_logo-07df8b85{\n0%{\n    transform:rotate(-25deg)\n}\nto{\n    transform:rotate(0deg)\n}\n}\n@keyframes animation_card_description-07df8b85{\n0%{\n    transform:rotate(25deg)\n}\n70%{\n    transform:rotate(0deg);\n    top:0\n}\nto{\n    top:-50%;\n    transform:rotate(0deg)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},274:function(t,n,e){var content=e(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(104).default)("6cf38457",content,!0,{sourceMap:!1})},276:function(t,n,e){"use strict";e.r(n);e(36),e(59);var r={name:"CardProject",props:{srcimg:{type:String,required:!0},title:{type:String,required:!0},online:{type:Boolean,required:!0},createdat:{type:String,required:!0},linksite:{type:String,required:!0},linkinstagram:{type:String,required:!0},linkfacebook:{type:String,required:!0},description:{type:String,required:!0}}},o=(e(272),e(23)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"relative card bg-gray-900 bg-opacity-70 rounded-lg p-16 transition duration-700"},[n("div",{staticClass:"logo_card h-1/2 w-full bg-gradient-to-tl to-gray-900 from-black bg-opacity-65 grid items-center justify-center from-slate-800 p-8 mb-2 shadow-xl"},[n("img",{staticClass:"w-12 h-12",attrs:{src:t.srcimg,alt:t.title}})]),t._v(" "),n("div",{staticClass:"relative description_card h-1/2 w-full bg-gradient-to-tl to-gray-900 from-black bg-opacity-65 grid grid-cols-1 content-between from-slate-800 p-8 shadow-xl"},[n("div",{staticClass:"pb-12 flex justify-between"},[n("div",{staticClass:"flex-col gap-y-2"},[n("h2",{staticClass:"text-white font-semibold text-sm sm:text-md"},[t._v(t._s(t.title.toUpperCase()))]),t._v(" "),n("i",{staticClass:"text-indigo-700 not-italic text-base md:text-sm"},[t._v(t._s(t.createdat))])]),t._v(" "),t.online?n("div",{staticClass:"flex items-center gap-x-2"},[n("i",{staticClass:"w-2 h-2 bg-green-600 rounded-full"}),t._v(" "),n("span",{staticClass:"text-white"},[t._v(" En ligne")])]):n("div",{staticClass:"flex items-center gap-x-2"},[n("i",{staticClass:"w-2 h-2 bg-gray-600 rounded-full"}),t._v(" "),n("span",{staticClass:"text-white"},[t._v(" En développement")])])]),t._v(" "),n("div",{staticClass:"flex gap-4"},[n("a",{staticClass:"text-white",attrs:{href:t.linksite}},[t._v("Visiter ")]),t._v(" "),n("a",{staticClass:"text-white",attrs:{href:t.linkinstagram}},[t._v("Instagram")]),t._v(" "),n("a",{staticClass:"text-white",attrs:{href:t.linkfacebook}},[t._v("Facebook")])])]),t._v(" "),n("blockquote",{staticClass:"relative w-full h-1/2 explain"},[t._v("\n        "+t._s(t.description)+"\n    ")])])}),[],!1,null,"07df8b85",null);n.default=component.exports},277:function(t,n,e){var map={"./404large.png":188,"./404small.png":189,"./Team/poupoinaka.png":271,"./logo.webp":187,"./logoText.webp":278,"./main.css":190,"./mediror.png":279,"./newsletter.webp":270};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=277},278:function(t,n,e){t.exports=e.p+"img/logoText.7590c80.webp"},279:function(t,n,e){t.exports=e.p+"img/mediror.4775c3f.png"},280:function(t,n,e){"use strict";e(274)},281:function(t,n,e){var r=e(103)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nh2[data-v-ace65f10]{\n  letter-spacing:.75rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},286:function(t,n,e){"use strict";e.r(n);e(36),e(59);var r={name:"ProjetsPage",layouts:"default",data:function(){return{listProject:[{namelogo:"logoText.webp",title:"Fable",online:!1,createdat:" 2023",linksite:"https://google.com",linkinstagram:"https://google.com",linkfacebook:"https://google.com",description:"fable est un application web qui permet au personne de mettre en ligne des histoires ou des livres et proposer au grand public gratuitement ."}]}},head:{title:"Sizix team-Projets",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nous conçevons des outils qui aident dans la sociéte et que vous pouvez retrouver une petite quantité et idée ici ."}]}},o=(e(280),e(23)),component=Object(o.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"relative"},[n("header",{staticClass:"flex justify-center gap-x-4 bg-black mt-8 sm:my-4"},[n("BtnLink",{attrs:{name:"Entreprise",link:"/entreprise"}}),t._v(" "),n("BtnLink",{attrs:{name:"projets",link:"/projets"}}),t._v(" "),n("BtnLink",{attrs:{name:"Team",link:"/team"}})],1),t._v(" "),n("div",{staticClass:"grid grid-cols-6 gap-x-4 gap-y-8 text-white bg-black py-20 lg:py-24 xl:py-28 w-full px-6"},[n("h2",{staticClass:"col-span-full text-center text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-4"},[t._v("\n      Retrouvez nos projets Sizix\n    ")]),t._v(" "),t._l(t.listProject,(function(t,r){return n("CardProject",{key:r,staticClass:"col-span-full md:col-span-3 xl:col-span-2",attrs:{srcimg:e(277)("./".concat(t.namelogo)),title:t.title,createdat:t.createdat,linksite:t.linksite,linkinstagram:t.linkinstagram,linkfacebook:t.linkfacebook,online:t.online,description:t.description}})}))],2)])}),[],!1,null,"ace65f10",null);n.default=component.exports;installComponents(component,{BtnLink:e(268).default,CardProject:e(276).default})}}]);