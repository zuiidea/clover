webpackJsonp([1,0],[function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var s=i(85),n=o(s),a=i(84),l=o(a),c=i(2),d=o(c),v=i(61),r=o(v),p=i(62),u=o(p),_=i(77),m=o(_),f=i(76),b=o(f),x=i(79),y=o(x),g=i(81),k=o(g),h=i(78),w=o(h),M=i(80),P=o(M),B=i(75),j=o(B),I=i(82),O=o(I);n["default"].use(l["default"]);var z=n["default"].extend({}),N=new l["default"],L=(0,d["default"])();N.map({"/":{component:function(e){e(L.pc?u["default"]:m["default"])}},"/home":{component:r["default"]},"/demo":{component:m["default"]},"/index":{component:u["default"]},"/component/btn":{component:b["default"]},"/component/navbar":{component:k["default"]},"/component/icon":{component:y["default"]},"/component/grid":{component:w["default"]},"/component/list":{component:P["default"]},"/component/badge":{component:j["default"]},"/component/rater":{component:O["default"]}}),N.start(z,"#app")},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var s=i(83),n=(o(s),i(65)),a=o(n),l=i(67),c=o(l),d=i(70),v=o(d),r=i(71),p=o(r),u=i(73),_=o(u),m=i(66),f=o(m),b=i(63),x=o(b),y=i(72),g=o(y),k=i(64),h=o(k),w=i(74),M=o(w),P=i(3),B={Btn:a["default"],Navbar:v["default"],Icon:c["default"],Page:p["default"],Row:_["default"],Column:f["default"],List:P.List,ListItem:P.ListItem,Badge:x["default"],Rater:g["default"],Block:h["default"],Title:M["default"]};e.exports=B},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){var e={},t=navigator.userAgent,i=t.match(/(Android)\s([\d_]+)/),o=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),n=!o&&t.match(/(iPhone\sOS)\s([\d_]+)/);if(e.ios=e.android=e.iphone=e.ipad=e.androidChrome=e.pc=!1,i&&(e.os="android",e.osVersion=i[2],e.android=!0,e.androidChrome=t.toLowerCase().indexOf("chrome")>=0),(o||n||s)&&(e.os="ios",e.ios=!0),i||o||n||s||(e.pc=!0),n&&!s&&(e.osVersion=n[2].replace(/_/g,"."),e.iphone=!0),o&&(e.osVersion=o[2].replace(/_/g,"."),e.ipad=!0),s&&(e.osVersion=s[3]?s[3].replace(/_/g,"."):null,e.iphone=!0),e.ios&&e.osVersion&&t.indexOf("Version/")>=0&&"10"===e.osVersion.split(".")[0]&&(e.osVersion=t.toLowerCase().split("version/")[1].split(" ")[0]),e.webView=(n||o||s)&&t.match(/.*AppleWebKit(?!.*Safari)/i),e.os&&"ios"===e.os){var a=e.osVersion.split(".");e.minimalUi=!e.webView&&(s||n)&&(1*a[0]===7?1*a[1]>=1:1*a[0]>7)&&document.getElementsByTagName('meta[name="viewport"]').length>0&&document.getElementsByTagName('meta[name="viewport"]').attr("content").indexOf("minimal-ui")>=0}var l=[];if(e.pixelRatio=window.devicePixelRatio||1,l.push("pixel-ratio-"+Math.floor(e.pixelRatio)),e.pixelRatio>=2&&l.push("retina"),e.os&&(l.push(e.os,e.os+"-"+e.osVersion.split(".")[0],e.os+"-"+e.osVersion.replace(/\./g,"-")),"ios"===e.os))for(var c=parseInt(e.osVersion.split(".")[0],10),d=c-1;d>=6;d--)l.push("ios-gt-"+d);return l.length>0&&(document.getElementById("app").className=l.join(" ")),e}},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=t.List=void 0;var s=i(69),n=o(s),a=i(68),l=o(a);t.List=n["default"],t.ListItem=l["default"]},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(2),n=o(s),a=i(38).version;(0,n["default"])(),t["default"]={data:function(){return{version:a}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{Icon:o.Icon}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{bgColor:{type:String},small:{type:Boolean,"default":!1}},computed:{classes:function(){return[{"badge-small":this.small},this.color?"bg-"+this.bgColor:""]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{color:{type:String,"default":""},small:{type:Boolean,"default":!1},disabled:{type:Boolean,"default":!1},fill:{type:Boolean,"default":!1},radius:{type:Boolean,"default":!1},fluid:{type:Boolean,"default":!1},icon:{type:String,"default":""}},computed:{classes:function(){return[{disabled:this.disabled,"button-fill":this.fill,"button-small":this.small,"button-radius":this.radius,"button-fluid":this.fluid},this.color?"button-"+this.color:"",this.icon?"button-icon":""]}},methods:{handleClick:function(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{span:String}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{type:String},link:{type:String,"default":""},size:{type:String,"default":""},radius:{type:Boolean,"default":!1},circle:{type:Boolean,"default":!1}},computed:{classes:function(){return[this.link?"icon-img":"",this.radius?"radius":"",this.circle?"circle":"",this.type?"icon-"+this.type:""]},styles:function(){return[this.link?{backgroundImage:"url("+this.link+")"}:"",this.size?{width:this.size+"px",height:this.size+"px"}:""]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{link:{type:Boolean,"default":!1},hasMedia:{type:Boolean,"default":!0},hasExtra:{type:Boolean,"default":!0}},events:{"hook:ready":function(){this.$nextTick(function(){this.hasMedia=!!this.$el.querySelector('[slot="media"]'),this.hasExtra=!!this.$el.querySelector('[slot="extra"]')})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{media:{type:Boolean,"default":!1}},computed:{classes:function(){return[{"media-list":this.media}]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{type:String,"default":""},back:{type:Boolean,"default":function(){var e=!1;return"secondary"===this.type&&(e=!0),e}}},computed:{classes:function(){return[this.type?"navbar-"+this.type:""]}},methods:{center:function(){"secondary"===this.type&&window.history.go(-1)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{navbarFixed:{type:Boolean,"default":!0}},computed:{classes:function(){return[{"navbar-fixed":this.navbarFixed}]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{max:{type:Number,"default":5},value:{type:Number,"default":0},star:{type:String,"default":"★"},small:{type:Boolean,"default":!1}},computed:{classes:function(){return[{"rater-small":this.small}]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{gutter:{type:Boolean,"default":!1}},computed:{classes:function(){return[this.gutter?"":"no-gutter"]}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{List:o.List,ListItem:o.ListItem,Badge:o.Badge}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={name:"button",components:{Btn:o.Btn,Icon:o.Icon,Navbar:o.Navbar,Page:o.Page},methods:{change:function(e){console.log("change:",e)},processButton001:function(){this.submit001="processing",this.disable001=!0},data:function(){return{submit001:"click me",disable001:!1}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{Icon:o.Icon,Page:o.Page}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{Row:o.Row,Page:o.Page,Column:o.Column,Navbar:o.Navbar,Block:o.Block,Title:o.Title}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{Icon:o.Icon,Btn:o.Btn,Navbar:o.Navbar,Page:o.Page}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{List:o.List,ListItem:o.ListItem,Btn:o.Btn,Icon:o.Icon,Badge:o.Badge,Page:o.Page,Navbar:o.Navbar,Rater:o.Rater}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{Navbar:o.Navbar,Icon:o.Icon,Btn:o.Btn,Page:o.Page}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(1);t["default"]={components:{Row:o.Row,Page:o.Page,Column:o.Column,Rater:o.Rater}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports={name:"clover",version:"1.0.0",description:"A Vue.js project",author:"zuiidea <zuiidea@gmail.com>","private":!0,scripts:{dev:"node build/dev-server.js",build:"node build/build.js",unit:"karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs"},dependencies:{vue:"^1.0.21","babel-runtime":"^6.0.0"},devDependencies:{"babel-core":"^6.0.0","babel-loader":"^6.0.0","babel-plugin-transform-runtime":"^6.0.0","babel-preset-es2015":"^6.0.0","babel-preset-stage-2":"^6.0.0",chai:"^3.5.0",chromedriver:"^2.21.2","connect-history-api-fallback":"^1.1.0","cross-spawn":"^2.1.5","css-loader":"^0.23.0",eslint:"^2.10.2","eslint-config-standard":"^5.1.0","eslint-friendly-formatter":"^2.0.5","eslint-loader":"^1.3.0","eslint-plugin-html":"^1.3.0","eslint-plugin-promise":"^1.0.8","eslint-plugin-standard":"^1.3.2","eventsource-polyfill":"^0.9.6",express:"^4.13.3","extract-text-webpack-plugin":"^1.0.1","file-loader":"^0.8.4","function-bind":"^1.0.2","html-webpack-plugin":"^2.8.1","http-proxy-middleware":"^0.12.0","inject-loader":"^2.0.1","isparta-loader":"^2.0.0","json-loader":"^0.5.4",karma:"^0.13.15","karma-coverage":"^0.5.5","karma-mocha":"^0.2.2","karma-phantomjs-launcher":"^1.0.0","karma-sinon-chai":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.24","karma-webpack":"^1.7.0",less:"^2.7.1","less-loader":"^2.2.3",lolex:"^1.4.0",mocha:"^2.4.5",nightwatch:"^0.8.18",ora:"^0.2.0","phantomjs-prebuilt":"^2.1.3","selenium-server":"2.53.0",shelljs:"^0.6.0",sinon:"^1.17.3","sinon-chai":"^2.8.0","url-loader":"^0.5.7","vue-hot-reload-api":"^1.2.0","vue-html-loader":"^1.0.0","vue-loader":"^8.3.0","vue-router":"^0.7.13","vue-scrollbar":"^1.0.4","vue-style-loader":"^1.0.0",webpack:"^1.12.2","webpack-dev-middleware":"^1.4.0","webpack-hot-middleware":"^2.6.0","webpack-merge":"^0.8.3"}}},function(e,t){e.exports="<span class=badge :class=classes> <slot></slot> </span>"},function(e,t){e.exports="<div class=content-block> <slot></slot> </div>"},function(e,t){e.exports="<a href=javascript:; class=button :class=classes :disabled=disabled @touchstart=handleClick> <slot></slot> <i v-if=icon class=icon :class=\"['icon-'+icon]\"></i> </a>"},function(e,t){e.exports="<div :class=\"'col-'+span\"> <slot></slot> </div>"},function(e,t){e.exports="<i class=icon :class=classes :style=styles></i>"},function(e,t){e.exports='<li> <a class="item-link item-content" v-if=link> <div class=item-media v-if=hasMedia> <slot name=media></slot> </div> <div class=item-inner> <slot></slot> </div> <div class=item-extra v-if=hasExtra> <slot name=extra></slot> </div> </a> <div class=item-content v-else=link> <div class=item-media v-if=hasMedia> <slot name=media></slot> </div> <div class=item-inner> <slot></slot> </div> <div class=item-extra v-if=hasExtra> <slot name=extra></slot> </div> </div> </li>'},function(e,t){e.exports="<div class=list-block :class=classes> <ul> <slot></slot> </ul> </div>"},function(e,t){e.exports='<div class=navbar :class=classes> <div class=navbar-inner> <div class=left> <slot name=left></slot> </div> <div class=center @click=center> <i class="icon icon-left" v-if="type==\'secondary\'&&back"></i> <slot></slot> </div> <div class=right> <slot name=right></slot> </div> </div> </div>'},function(e,t){e.exports="<div class=page :class=classes> <slot name=navbar></slot> <div class=page-content> <slot></slot> </div> </div>"},function(e,t){e.exports='<div class=rater :class=classes> <template v-for="i in value"> <span class=active>{{star}}</span> </template><template v-for="i in max - value"> <span>{{star}}</span> </template> </div>'},function(e,t){e.exports="<div class=row :class=classes> <slot></slot> </div>"},function(e,t){e.exports="<div class=content-block-title> <slot></slot> </div>"},function(e,t){e.exports="<page> <div class=content-block-title> Rater </div> <div class=content-block> <row> <column span=50> <rater> </rater></column> <column span=50>.col-50</column> </row> </div> <div class=content-block-title> No gutter between columns </div> </page>"},function(e,t){e.exports='<page _v-1878691c=""> <navbar type=secondary slot=navbar _v-1878691c=""> 图标 </navbar> <div class=content-block _v-1878691c=""> <div class=row _v-1878691c=""> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=up _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=down _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=right _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=left _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=wifi01 _v-1878691c=""></icon> </btn> </div> </div> <div class=row _v-1878691c=""> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=accountsecuriyt _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=addpo _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=my _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=delete _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=love _v-1878691c=""></icon> </btn> </div> </div> <div class=row _v-1878691c=""> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=star _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=map _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=check _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=lock _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=share _v-1878691c=""></icon> </btn> </div> </div> <div class=row _v-1878691c=""> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=more _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=microphone _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=send _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=cross _v-1878691c=""></icon> </btn> </div> <div class=col-20 _v-1878691c=""> <btn _v-1878691c=""> <icon type=filter _v-1878691c=""></icon> </btn> </div> </div> </div> </page>'},function(e,t){e.exports='<div class=home _v-25177656=""> <div class=box _v-25177656=""> <div class="logo animated fade-in-bottom delay-1" _v-25177656=""> </div> <div class="clover animated fade-in-bottom delay-2" _v-25177656=""> </div> <div class="slogan animated fade-in-bottom delay-3" _v-25177656=""> </div> </div> </div>'},function(e,t){e.exports='<page _v-2bf52e73=""> <navbar type=secondary slot=navbar _v-2bf52e73=""> 顶部 navbar </navbar> <div class=content-block-title _v-2bf52e73=""> 默认 default </div> <navbar class=demo _v-2bf52e73=""> <div slot=left _v-2bf52e73=""> <btn icon="" small="" _v-2bf52e73=""> <icon type=filter _v-2bf52e73=""></icon> </btn> </div> 标题 <div slot=right _v-2bf52e73=""> <btn icon="" small="" _v-2bf52e73=""> <icon type=cross _v-2bf52e73=""></icon> </btn> </div> </navbar> <navbar class=demo _v-2bf52e73=""> <div _v-2bf52e73="">标题</div> <div slot=right _v-2bf52e73=""> <btn icon="" small="" _v-2bf52e73=""> <icon type=cross _v-2bf52e73=""></icon> </btn> </div> </navbar> <navbar class=demo _v-2bf52e73=""> <div slot=left _v-2bf52e73=""> <btn icon="" small="" _v-2bf52e73=""> <icon type=filter _v-2bf52e73=""></icon> </btn> </div> 标题 </navbar> <navbar class=demo _v-2bf52e73=""> 标题 </navbar> <div class=content-block-title _v-2bf52e73=""> 次级 secondary </div> <navbar type=secondary _v-2bf52e73=""> 标题 </navbar> <navbar type=secondary :back=false class=demo _v-2bf52e73=""> 标题 </navbar> <div class=content-block-title _v-2bf52e73=""> 标签页 tab </div> <navbar type=tab class=demo _v-2bf52e73=""> <div slot=left _v-2bf52e73=""> <btn icon="" small="" _v-2bf52e73=""> <icon type=filter _v-2bf52e73=""></icon> </btn> </div> 标题 <div slot=right _v-2bf52e73=""> <btn icon="" small="" _v-2bf52e73=""> <icon type=cross _v-2bf52e73=""></icon> </btn> </div> </navbar> </page>'},function(e,t){e.exports='<page _v-57698969=""> <navbar type=secondary slot=navbar _v-57698969=""> 栅格 </navbar> <title _v-57698969=""> 无间距的列 No gutter between columns </title> <block _v-57698969=""> <row _v-57698969=""> <column span=50 _v-57698969="">50</column> <column span=50 _v-57698969="">50</column> </row> <row _v-57698969=""> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> </row> <row _v-57698969=""> <column span=33 _v-57698969="">33</column> <column span=33 _v-57698969="">33</column> <column span=33 _v-57698969="">33</column> </row> <row _v-57698969=""> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> </row> <row _v-57698969=""> <column span=33 _v-57698969="">33</column> <column span=66 _v-57698969="">66</column> </row> <row _v-57698969=""> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> <column span=50 _v-57698969="">50</column> </row> <row _v-57698969=""> <column span=75 _v-57698969="">75</column> <column span=25 _v-57698969="">25</column> </row> <row _v-57698969=""> <column span=80 _v-57698969="">80</column> <column span=20 _v-57698969="">20</column> </row> </block> <title _v-57698969=""> 有间距的列 Columns with gutter </title> <block _v-57698969=""> <row gutter="" _v-57698969=""> <column span=50 _v-57698969="">50</column> <column span=50 _v-57698969="">50</column> </row> <row gutter="" _v-57698969=""> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> </row> <row gutter="" _v-57698969=""> <column span=33 _v-57698969="">33</column> <column span=33 _v-57698969="">33</column> <column span=33 _v-57698969="">33</column> </row> <row gutter="" _v-57698969=""> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> <column span=20 _v-57698969="">20</column> </row> <row gutter="" _v-57698969=""> <column span=33 _v-57698969="">33</column> <column span=66 _v-57698969="">66</column> </row> <row gutter="" _v-57698969=""> <column span=25 _v-57698969="">25</column> <column span=25 _v-57698969="">25</column> <column span=50 _v-57698969="">50</column> </row> <row gutter="" _v-57698969=""> <column span=75 _v-57698969="">75</column> <column span=25 _v-57698969="">25</column> </row> <row gutter="" _v-57698969=""> <column span=80 _v-57698969="">80</column> <column span=20 _v-57698969="">20</column> </row> </block> </page>'},function(e,t){e.exports='<div class=main _v-5bd6d02a=""> <div class=mobile _v-5bd6d02a=""> <div class=mobile-inner _v-5bd6d02a=""> <iframe src=#!/demo frameborder=0 _v-5bd6d02a=""></iframe> </div> <a class=btn v-link="{ path: \'/demo\' }" _v-5bd6d02a=""> <icon type=send _v-5bd6d02a=""></icon> </a> </div> </div>'},function(e,t){e.exports='<page _v-6bf990e0=""> <div class=content-block-title _v-6bf990e0=""> 默认 Default </div> <list _v-6bf990e0=""> <list-item _v-6bf990e0=""> <div slot=media _v-6bf990e0=""> <icon type=my small="" _v-6bf990e0=""> </icon></div> <div class=item-title _v-6bf990e0=""> Ivan Petrov </div> <div class=item-after _v-6bf990e0=""> <badge _v-6bf990e0="">New</badge> </div> </list-item> </list></page>'},function(e,t){e.exports='<page :navbar-fixed=false _v-77836586=""> <div class=content-block-title _v-77836586=""> Basic </div> <div class=list-block _v-77836586=""> <ul _v-77836586=""> <li _v-77836586=""> <a v-link="{ path: \'/component/btn\' }" class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-cyan" _v-77836586=""> <icon type=star _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">按钮 Button</div> </div> </div> </a> </li> <li _v-77836586=""> <a v-link="{ path: \'/component/icon\' }" class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-yellow" _v-77836586=""> <icon type=love _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">图标 Icon</div> </div> </div> </a> </li> <li _v-77836586=""> <a v-link="{ path: \'/component/grid\' }" class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media" _v-77836586=""> <icon type=send _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">网格 Grid</div> </div> </div> </a> </li> <li _v-77836586=""> <a v-link="{ path: \'/component/list\' }" class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media" _v-77836586=""> <icon type=send _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">列表 List</div> </div> </div> </a> </li> </ul> <div class=content-block-title _v-77836586=""> Page </div> <ul _v-77836586=""> <li _v-77836586=""> <a v-link="{ path: \'/component/navbar\' }" class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-cyan" _v-77836586=""> <icon type=star _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">顶部 Navbar</div> </div> </div> </a> </li> </ul> <div class=content-block-title _v-77836586=""> Form Control <span style=font-size:12px;margin-left:16px _v-77836586="">开发中...</span> </div> <div class="list-block not-open" _v-77836586=""> <ul _v-77836586=""> <li _v-77836586=""> <a class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-cyan" _v-77836586=""> <icon type=star _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">上传 Upload</div> </div> </div> </a> </li> <li _v-77836586=""> <a class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-blue" _v-77836586=""> <icon type=love _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">开关 Switch</div> </div> </div> </a> </li> <li _v-77836586=""> <a class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-yellow" _v-77836586=""> <icon type=send _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">输入框 Input</div> <div class=item-after _v-77836586=""> </div> </div> </div> </a> </li> <li _v-77836586=""> <a class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-cyan" _v-77836586=""> <icon type=send _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">范围 Range</div> <div class=item-after _v-77836586=""> </div> </div> </div> </a> </li> <li _v-77836586=""> <a class=item-link _v-77836586=""> <div class=item-content _v-77836586=""> <div class="item-media icon-media bg-blue" _v-77836586=""> <icon type=send _v-77836586=""></icon> </div> <div class=item-inner _v-77836586=""> <div class=item-title _v-77836586="">单选框 Radio</div> <div class=item-after _v-77836586=""> </div> </div> </div> </a> </li> </ul> </div> </div></page>'},function(e,t){e.exports='<page _v-98ce71ee=""> <navbar type=secondary slot=navbar _v-98ce71ee=""> 按钮 btn </navbar> <div class=content-block-title _v-98ce71ee="">默认 default</div> <div class=content-block _v-98ce71ee=""> <btn _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">尺寸 small</div> <div class=content-block _v-98ce71ee=""> <btn small="" _v-98ce71ee="">按钮</btn> <btn small="" color=green _v-98ce71ee="">按钮</btn> <btn small="" color=orange _v-98ce71ee="">按钮</btn> <btn _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">颜色 color</div> <div class=content-block _v-98ce71ee=""> <btn _v-98ce71ee="">按钮</btn> <btn color=green _v-98ce71ee="">按钮</btn> <btn color=orange _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">填充 fill</div> <div class=content-block _v-98ce71ee=""> <btn fill="" _v-98ce71ee="">按钮</btn> <btn fill="" color=green _v-98ce71ee="">按钮</btn> <btn fill="" color=orange _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">圆角 radius</div> <div class=content-block _v-98ce71ee=""> <btn radius="" _v-98ce71ee="">按钮</btn> <btn radius="" color=green _v-98ce71ee="">按钮</btn> <btn radius="" small="" _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">图标 icon</div> <div class=content-block _v-98ce71ee=""> <btn icon=up small="" _v-98ce71ee=""></btn> <btn icon=down _v-98ce71ee=""></btn> <btn icon=right _v-98ce71ee=""></btn> <btn icon=left _v-98ce71ee=""></btn> <btn icon=wifi01 _v-98ce71ee=""></btn> <btn icon=cross _v-98ce71ee=""></btn> <btn icon=more _v-98ce71ee=""></btn> <btn icon=share _v-98ce71ee=""></btn> </div> <div class=content-block-title _v-98ce71ee="">禁止 disabled</div> <div class=content-block _v-98ce71ee=""> <btn disabled="" _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">全宽 fluid</div> <div class=content-block _v-98ce71ee=""> <btn fluid="" radius="" color=green _v-98ce71ee="">按钮</btn> <btn fluid="" radius="" class=m-t _v-98ce71ee="">按钮</btn> <btn fluid="" class=m-t _v-98ce71ee="">按钮</btn> </div> <div class=content-block-title _v-98ce71ee="">组合 row</div> <div class=content-block _v-98ce71ee=""> <p class=buttons-row _v-98ce71ee=""> <btn radius="" small="" _v-98ce71ee="">按钮</btn> <btn radius="" small="" _v-98ce71ee="">按钮</btn> <btn radius="" color=green small="" _v-98ce71ee="">按钮</btn> <btn radius="" color=orange small="" _v-98ce71ee="">按钮</btn> </p> <p class=buttons-row _v-98ce71ee=""> <btn color=green _v-98ce71ee="">按钮</btn> <btn color=orange _v-98ce71ee="">按钮</btn> </p> </div> </page>'},function(e,t){e.exports='<page _v-d6ad7a7e=""> <navbar type=secondary slot=navbar _v-d6ad7a7e=""> 列表 list </navbar> <div class=content-block-title _v-d6ad7a7e=""> 默认 Default </div> <list _v-d6ad7a7e=""> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon type=my _v-d6ad7a7e=""> </icon></div> <div class=item-title _v-d6ad7a7e=""> Ivan Petrov </div> <div class=item-after _v-d6ad7a7e=""> <badge bg-color=blue _v-d6ad7a7e="">New</badge> </div> </list-item> <list-item link="" _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon type=my _v-d6ad7a7e=""> </icon></div> <div class=item-title _v-d6ad7a7e=""> Ivan Petrov </div> <div class=item-after _v-d6ad7a7e=""> CEO </div> </list-item> </list> <div class=content-block-title _v-d6ad7a7e=""> 图标 Icon </div> <list _v-d6ad7a7e=""> <list-item link="" _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/ic_mobile_network_settings.png circle="" _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> 移动网络 </div> </list-item> <list-item link="" _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/ic_wifi_settings.png circle="" _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> WLAN </div> <div class=item-after _v-d6ad7a7e=""> XIAOMI-wifi </div> </list-item> <list-item link="" _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/ic_bluetooth_settings.png circle="" _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> 蓝牙 </div> <div class=item-after _v-d6ad7a7e=""> 已开启 </div> </list-item> <list-item link="" _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/ic_wifi_more_settings.png circle="" _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> 其他连接方式 </div> </list-item> </list> <div class=content-block-title _v-d6ad7a7e=""> 无图标 no icon </div> <list _v-d6ad7a7e=""> <list-item link="" _v-d6ad7a7e=""> <div class=item-title _v-d6ad7a7e=""> 蓝牙 </div> </list-item> <list-item link="" _v-d6ad7a7e=""> <div class=item-title _v-d6ad7a7e=""> 其他连接方式 </div> </list-item> </list> <div class=content-block-title _v-d6ad7a7e=""> 中图标 middle icon </div> <list media="" _v-d6ad7a7e=""> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png radius="" size=35 _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> 微信 </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-text _v-d6ad7a7e=""> 一个进程和2个服务 </div> <div class=item-after _v-d6ad7a7e=""> 20MB 11:01:38 </div> </div> </list-item> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.tencent.mobileqq.png radius="" size=35 _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> QQ </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-text _v-d6ad7a7e=""> 一个进程和2个服务 </div> <div class=item-after _v-d6ad7a7e=""> 20MB 11:01:38 </div> </div> </list-item> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png radius="" size=35 _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> 微博 </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-text _v-d6ad7a7e=""> 一个进程和2个服务 </div> <div class=item-after _v-d6ad7a7e=""> 20MB 11:01:38 </div> </div> </list-item> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.android.music.png radius="" size=35 _v-d6ad7a7e=""></icon> </div> <div class=item-title _v-d6ad7a7e=""> 音乐 </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-text _v-d6ad7a7e=""> 一个进程和2个服务 </div> <div class=item-after _v-d6ad7a7e=""> 20MB 11:01:38 </div> </div> </list-item> </list> <div class=content-block-title _v-d6ad7a7e=""> 大图标 big icon </div> <list media="" _v-d6ad7a7e=""> <list-item _v-d6ad7a7e=""> <icon slot=media link=http://oa5auszt6.bkt.clouddn.com/com.tencent.mm.png radius="" size=52 _v-d6ad7a7e=""></icon> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-title _v-d6ad7a7e=""> 微信 </div> </div> <div class=item-text _v-d6ad7a7e=""> <rater :value=4 small="" _v-d6ad7a7e=""></rater><span _v-d6ad7a7e="">社交聊天</span><span class=split _v-d6ad7a7e="">|</span><span _v-d6ad7a7e="">46.9M</span><badge small="" style=margin-left:5px _v-d6ad7a7e="">广告</badge> </div> <div class=item-text _v-d6ad7a7e=""> 奥莱购-品牌直销的线上奥莱 </div> <btn slot=extra small="" _v-d6ad7a7e="">打开</btn> </list-item> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.taobao.taobao.png radius="" size=52 _v-d6ad7a7e=""></icon> </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-title _v-d6ad7a7e=""> 手机淘宝 </div> </div> <div class=item-text _v-d6ad7a7e=""> <rater :value=3 small="" _v-d6ad7a7e=""></rater> </div> <div class=item-text _v-d6ad7a7e=""> 时尚购物 48.9M </div> <btn slot=extra small="" color=green _v-d6ad7a7e="">安装</btn> </list-item> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.sina.weibo.png radius="" size=52 _v-d6ad7a7e=""></icon> </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-title _v-d6ad7a7e=""> 微博 </div> </div> <div class=item-text _v-d6ad7a7e=""> <rater :value=5 small="" _v-d6ad7a7e=""></rater> </div> <div class=item-text _v-d6ad7a7e=""> 社交聊天 52.1M </div> <btn slot=extra small="" color=green _v-d6ad7a7e="">下载</btn> </list-item> <list-item _v-d6ad7a7e=""> <div slot=media _v-d6ad7a7e=""> <icon link=http://oa5auszt6.bkt.clouddn.com/com.android.music.png radius="" size=52 _v-d6ad7a7e=""></icon> </div> <div class=item-title-row _v-d6ad7a7e=""> <div class=item-title _v-d6ad7a7e=""> 音乐 </div> </div> <div class=item-text _v-d6ad7a7e=""> <rater :value=5 small="" _v-d6ad7a7e=""></rater> </div> <div class=item-text _v-d6ad7a7e=""> 影音视听 10.9M </div> <btn slot=extra small="" _v-d6ad7a7e="">打开</btn> </list-item> </list> </page>';
},function(e,t,i){var o,s;i(30),o=i(4),s=i(53),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(33),o=i(5),s=i(56),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(26),o=i(6),s=i(39),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(7),s=i(40),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(8),s=i(41),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(9),s=i(42),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(10),s=i(43),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(11),s=i(44),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(12),s=i(45),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(13),s=i(46),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(14),s=i(47),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(27),o=i(15),s=i(48),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(16),s=i(49),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(17),s=i(50),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(34),o=i(18),s=i(57),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(36),o=i(19),s=i(59),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(35),o=i(20),s=i(58),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(32),o=i(21),s=i(55),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(29),o=i(22),s=i(52),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(37),o=i(23),s=i(60),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(31),o=i(24),s=i(54),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;o=i(25),s=i(51),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,i){var o,s;i(28),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}]);
//# sourceMappingURL=app.0a0a5f5e92869e81d4f9.js.map