(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1ec1":function(t,i,n){var e=n("921f");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("65bdd8e5",e,!0,{sourceMap:!1,shadowMode:!1})},"1fec":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};i.default=e},"279e":function(t,i,n){"use strict";var e=n("3fec"),a=n.n(e);a.a},2896:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".uni-popup[data-v-6caffb52]{position:fixed;\ntop:var(--window-top);\n\n\nbottom:0;left:0;right:0;\nz-index:99\n}.uni-popup__mask[data-v-6caffb52]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-6caffb52]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-6caffb52]{opacity:1}.uni-bottom-mask[data-v-6caffb52]{opacity:1}.uni-center-mask[data-v-6caffb52]{opacity:1}.uni-popup__wrapper[data-v-6caffb52]{\ndisplay:block;\nposition:absolute}.top[data-v-6caffb52]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-6caffb52]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-6caffb52]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nbottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-6caffb52]{\ndisplay:block;\nposition:relative}.content-ani[data-v-6caffb52]{\n\t\t/* transition: transform 0.3s;\n */-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-6caffb52]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-6caffb52]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-6caffb52]{-webkit-transform:scale(1);transform:scale(1);opacity:1}",""]),t.exports=i},"3d09":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".portal[data-v-da9af2b4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?20?%}.video-box[data-v-da9af2b4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between\n\t/* align-content: flex-start; //如果项目未设置高度或设为auto，将占满整个容器的高度 */}.cover-img[data-v-da9af2b4]{background-color:#fff;border-radius:%?4?%;margin-top:%?15?%\n\t/*flex: 1;*/\n\t/*高/宽 = 1.76*/\n\t/*height: 616rpx;*/\n\t/*width: 350rpx;*/}.loading[data-v-da9af2b4]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?20?%;font-size:14px;background-color:#fff}.isBottom[data-v-da9af2b4]{text-align:center;color:#999;font-size:14px}",""]),t.exports=i},"3fec":function(t,i,n){var e=n("4218");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("9d6b6322",e,!0,{sourceMap:!1,shadowMode:!1})},4218:function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,".uni-transition[data-v-23f6d7f4]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-23f6d7f4]{opacity:0}.fade-active[data-v-23f6d7f4]{opacity:1}.slide-top-in[data-v-23f6d7f4]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-23f6d7f4]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-23f6d7f4]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-23f6d7f4]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-23f6d7f4]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-23f6d7f4]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-23f6d7f4]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-23f6d7f4]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-23f6d7f4]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-23f6d7f4]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-23f6d7f4]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),t.exports=i},4253:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}))},6486:function(t,i,n){t.exports=n.p+"static/img/loading.d715a84e.gif"},"64ea":function(t,i,n){"use strict";var e=n("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("ed24")),o={name:"UniPopup",components:{uniTransition:a.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(t){var i=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(i.timer),i.timer=setTimeout((function(){i.$emit("change",{show:!1}),i.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};i.default=o},"72db":function(t,i,n){"use strict";n.r(i);var e=n("c08c"),a=n("d3c1");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("f4a7");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"6caffb52",null,!1,e["a"],r);i["default"]=c.exports},"788b":function(t,i,n){var e=n("2896");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("7f36518d",e,!0,{sourceMap:!1,shadowMode:!1})},8340:function(t,i,n){"use strict";var e=n("de30"),a=n.n(e);a.a},"8e3b":function(t,i,n){"use strict";n.r(i);var e=n("1fec"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},"921f":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'.uni-section[data-v-753057de]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section[data-v-753057de]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n.uni-section__head[data-v-753057de]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-753057de]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-753057de]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-753057de]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-753057de]{font-size:%?28?%;color:#333}.distraction[data-v-753057de]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-753057de]{font-size:%?24?%;color:#999}',""]),t.exports=i},9831:function(t,i,n){"use strict";var e=n("1ec1"),a=n.n(e);a.a},"9a78":function(t,i,n){"use strict";n.r(i);var e=n("ae24"),a=n("8e3b");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("9831");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"753057de",null,!1,e["a"],r);i["default"]=c.exports},ae24:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},o=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}))},bf5a:function(t,i,n){"use strict";var e=n("ee27");n("4160"),n("a9e3"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("f3f3")),o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,a.default)({},this.styles,{"transition-duration":this.duration/1e3+"s"}),i="";for(var n in t){var e=this.toLine(n);i+=e+":"+t[n]+";"}return i}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var i in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===i?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[i]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var i=this,n=this.getTranfrom(t);for(var e in this.transform="",n)"opacity"===e?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(n[e]," ");this.timer=setTimeout((function(){t||(i.isShow=!1),i.$emit("change",{detail:i.isShow})}),this.duration)},getTranfrom:function(t){var i={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":i.opacity=t?1:0;break;case"slide-top":i.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":i.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":i.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":i.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":i.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":i.transform+="scale(".concat(t?1:1.2,") ");break}})),i},_modeClassArr:function(t){var i=this.modeClass;if("string"!==typeof i){var n="";return i.forEach((function(i){n+=i+"-"+t+","})),n.substr(0,n.length-1)}return i+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};i.default=o},c08c:function(t,i,n){"use strict";var e={uniTransition:n("ed24").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}}),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}))},c22f:function(t,i,n){"use strict";n.r(i);var e=n("bf5a"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},c69d:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{windowHeight:"616rpx",windowWidth:"150rpx",vHeight:"100rpx",vWidth:"100%",videoList:[],currVideoId:null,currVideoUrl:null,currPageNum:0,pageSize:12,total:0,allow:!0,vipMode:!1,portal:!1,isBottom:!1}},onLoad:function(){this.doGetScreenHAndW(),this.doGetVideoList()},methods:{doGetVideoList:function(){var i=this;t.callFunction({name:"getVideoList"}).then((function(t){i.videoList=t.result.videos}))},doGetScreenHAndW:function(){var t=this;uni.getSystemInfo({success:function(i){t.windowWidth=i.windowWidth/2-2+"px",t.windowHeight=i.windowHeight/2-2+"px",t.vHeight=i.windowHeight-60+"px"}})},doPlayVideo:function(t){void 0!==t.currentTarget.dataset.url&&(this.currVideoId=t.currentTarget.dataset.id,this.currVideoUrl=t.currentTarget.dataset.url,this.$refs.popup.open())},doHidePop:function(){this.$refs.popup.close(),uni.hideLoading()},doStartPlay:function(){uni.hideLoading()},doVideoChange:function(t){}}};i.default=n}).call(this,n("a9ff")["default"])},d3c1:function(t,i,n){"use strict";n.r(i);var e=n("64ea"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a},d834:function(t,i,n){"use strict";var e={uniSection:n("9a78").default,uniPopup:n("72db").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.portal?e("v-uni-view",{staticClass:"portal"},[e("v-uni-button",{attrs:{type:"warn",size:"mini",plain:!0}},[t._v("Portal")])],1):t._e(),e("v-uni-view",[e("uni-section",{attrs:{title:"如果不能播放请更换浏览器尝试",type:"line"}})],1),e("v-uni-view",{staticClass:"video-box"},t._l(t.videoList,(function(i){return e("v-uni-view",{key:i._id,attrs:{"data-url":i.url,"data-id":i._id},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.doPlayVideo.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"cover-img",style:{height:t.windowHeight,width:t.windowWidth},attrs:{src:i.cover_img,"lazy-load":!0,mode:"aspectFill"}})],1)})),1),t.isBottom?e("v-uni-view",{staticClass:"isBottom"},[e("v-uni-view",[t._v("已经戳到最深处了")]),t._v("~~_~~")],1):e("v-uni-view",{staticClass:"isBottom"},[e("v-uni-image",{staticStyle:{height:"200rpx"},attrs:{src:n("6486"),mode:"aspectFit"}})],1),e("uni-popup",{ref:"popup",attrs:{id:"popup",type:"top",animation:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.doVideoChange.apply(void 0,arguments)}}},[e("v-uni-video",{style:{height:t.vHeight,width:t.vWidth},attrs:{id:t.currVideoId,src:t.currVideoUrl,autoplay:!0,loop:!0,controls:!1,"enable-progress-gesture":!1,"show-center-play-btn":!1,"object-fit":"cover"},on:{play:function(i){arguments[0]=i=t.$handleEvent(i),t.doStartPlay.apply(void 0,arguments)}}}),e("v-uni-button",{attrs:{type:"warn",size:"mini"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.doHidePop.apply(void 0,arguments)}}},[t._v("点击关闭")])],1)],1)},o=[];n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return o})),n.d(i,"a",(function(){return e}))},de30:function(t,i,n){var e=n("3d09");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("1f47d890",e,!0,{sourceMap:!1,shadowMode:!1})},ed24:function(t,i,n){"use strict";n.r(i);var e=n("4253"),a=n("c22f");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("279e");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"23f6d7f4",null,!1,e["a"],r);i["default"]=c.exports},f4a7:function(t,i,n){"use strict";var e=n("788b"),a=n.n(e);a.a},fb1c:function(t,i,n){"use strict";n.r(i);var e=n("d834"),a=n("fef1");for(var o in a)"default"!==o&&function(t){n.d(i,t,(function(){return a[t]}))}(o);n("8340");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],e["b"],e["c"],!1,null,"da9af2b4",null,!1,e["a"],r);i["default"]=c.exports},fef1:function(t,i,n){"use strict";n.r(i);var e=n("c69d"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,(function(){return e[t]}))}(o);i["default"]=a.a}}]);