(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5a60a0e"],{"02f4":function(t,e,i){var r=i("4588"),n=i("be13");t.exports=function(t){return function(e,i){var s,c,a=String(n(e)),o=r(i),u=a.length;return o<0||o>=u?t?"":void 0:(s=a.charCodeAt(o),s<55296||s>56319||o+1===u||(c=a.charCodeAt(o+1))<56320||c>57343?t?a.charAt(o):s:t?a.slice(o,o+2):c-56320+(s-55296<<10)+65536)}}},"0390":function(t,e,i){"use strict";var r=i("02f4")(!0);t.exports=function(t,e,i){return e+(i?r(t,e).length:1)}},"0908":function(t,e,i){"use strict";var r=i("49e1"),n=i.n(r);n.a},"0bfb":function(t,e,i){"use strict";var r=i("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1a26":function(t,e,i){"use strict";var r=i("6d29"),n=i.n(r);n.a},"1cf9":function(t,e,i){"use strict";var r=i("fbd6"),n=i.n(r);n.a},"214f":function(t,e,i){"use strict";i("b0c5");var r=i("2aba"),n=i("32e9"),s=i("79e5"),c=i("be13"),a=i("2b4c"),o=i("520a"),u=a("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var h=a(t),m=!s(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),f=m?!s(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[u]=function(){return i}),i[h](""),!e}):void 0;if(!m||!f||"replace"===t&&!l||"split"===t&&!d){var v=/./[h],p=i(c,h,""[t],function(t,e,i,r,n){return e.exec===o?m&&!n?{done:!0,value:v.call(e,i,r)}:{done:!0,value:t.call(i,e,r)}:{done:!1}}),g=p[0],b=p[1];r(String.prototype,t,g),n(RegExp.prototype,h,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},2262:function(t,e,i){t.exports=i.p+"img/player_cover.373e0739.png"},2288:function(t,e,i){},"28a5":function(t,e,i){"use strict";var r=i("aae3"),n=i("cb7c"),s=i("ebd6"),c=i("0390"),a=i("9def"),o=i("5f1b"),u=i("520a"),l=i("79e5"),d=Math.min,h=[].push,m="split",f="length",v="lastIndex",p=4294967295,g=!l(function(){RegExp(p,"y")});i("214f")("split",2,function(t,e,i,l){var b;return b="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return i.call(n,t,e);var s,c,a,o=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=void 0===e?p:e>>>0,g=new RegExp(t.source,l+"g");while(s=u.call(g,n)){if(c=g[v],c>d&&(o.push(n.slice(d,s.index)),s[f]>1&&s.index<n[f]&&h.apply(o,s.slice(1)),a=s[0][f],d=c,o[f]>=m))break;g[v]===s.index&&g[v]++}return d===n[f]?!a&&g.test("")||o.push(""):o.push(n.slice(d)),o[f]>m?o.slice(0,m):o}:"0"[m](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,r){var n=t(this),s=void 0==i?void 0:i[e];return void 0!==s?s.call(i,n,r):b.call(String(n),i,r)},function(t,e){var r=l(b,t,this,e,b!==i);if(r.done)return r.value;var u=n(t),h=String(this),m=s(u,RegExp),f=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),y=new m(g?u:"^(?:"+u.source+")",v),x=void 0===e?p:e>>>0;if(0===x)return[];if(0===h.length)return null===o(y,h)?[h]:[];var C=0,M=0,P=[];while(M<h.length){y.lastIndex=g?M:0;var _,E=o(y,g?h:h.slice(M));if(null===E||(_=d(a(y.lastIndex+(g?0:M)),h.length))===C)M=c(h,M,f);else{if(P.push(h.slice(C,M)),P.length===x)return P;for(var k=1;k<=E.length-1;k++)if(P.push(E[k]),P.length===x)return P;M=C=_}}return P.push(h.slice(C)),P}]})},4917:function(t,e,i){"use strict";var r=i("cb7c"),n=i("9def"),s=i("0390"),c=i("5f1b");i("214f")("match",1,function(t,e,i,a){return[function(i){var r=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,r):new RegExp(i)[e](String(r))},function(t){var e=a(i,t,this);if(e.done)return e.value;var o=r(t),u=String(this);if(!o.global)return c(o,u);var l=o.unicode;o.lastIndex=0;var d,h=[],m=0;while(null!==(d=c(o,u))){var f=String(d[0]);h[m]=f,""===f&&(o.lastIndex=s(u,n(o.lastIndex),l)),m++}return 0===m?null:h}]})},"49e1":function(t,e,i){},"520a":function(t,e,i){"use strict";var r=i("0bfb"),n=RegExp.prototype.exec,s=String.prototype.replace,c=n,a="lastIndex",o=function(){var t=/a/,e=/b*/g;return n.call(t,"a"),n.call(e,"a"),0!==t[a]||0!==e[a]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(c=function(t){var e,i,c,l,d=this;return u&&(i=new RegExp("^"+d.source+"$(?!\\s)",r.call(d))),o&&(e=d[a]),c=n.call(d,t),o&&c&&(d[a]=d.global?c.index+c[0].length:e),u&&c&&c.length>1&&s.call(c[0],i,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)}),c}),t.exports=c},"5f1b":function(t,e,i){"use strict";var r=i("23c6"),n=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"===typeof i){var s=i.call(t,e);if("object"!==typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"6d29":function(t,e,i){},"76d3":function(t,e,i){"use strict";var r=i("2288"),n=i.n(r);n.a},a481:function(t,e,i){"use strict";var r=i("cb7c"),n=i("4bf8"),s=i("9def"),c=i("4588"),a=i("0390"),o=i("5f1b"),u=Math.max,l=Math.min,d=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};i("214f")("replace",2,function(t,e,i,v){return[function(r,n){var s=t(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,s,n):i.call(String(s),r,n)},function(t,e){var n=v(i,t,this,e);if(n.done)return n.value;var d=r(t),h=String(this),m="function"===typeof e;m||(e=String(e));var g=d.global;if(g){var b=d.unicode;d.lastIndex=0}var y=[];while(1){var x=o(d,h);if(null===x)break;if(y.push(x),!g)break;var C=String(x[0]);""===C&&(d.lastIndex=a(h,s(d.lastIndex),b))}for(var M="",P=0,_=0;_<y.length;_++){x=y[_];for(var E=String(x[0]),k=u(l(c(x.index),h.length),0),w=[],I=1;I<x.length;I++)w.push(f(x[I]));var T=x.groups;if(m){var $=[E].concat(w,k,h);void 0!==T&&$.push(T);var R=String(e.apply(void 0,$))}else R=p(E,h,k,w,T,e);k>=P&&(M+=h.slice(P,k)+R,P=k+E.length)}return M+h.slice(P)}];function p(t,e,r,s,c,a){var o=r+t.length,u=s.length,l=m;return void 0!==c&&(c=n(c),l=h),i.call(a,l,function(i,n){var a;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(o);case"<":a=c[n.slice(1,-1)];break;default:var l=+n;if(0===l)return i;if(l>u){var h=d(l/10);return 0===h?i:h<=u?void 0===s[h-1]?n.charAt(1):s[h-1]+n.charAt(1):i}a=s[l-1]}return void 0===a?"":a})}})},aae3:function(t,e,i){var r=i("d3f4"),n=i("2d95"),s=i("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},b0c5:function(t,e,i){"use strict";var r=i("520a");i("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b76b:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music"},[i("div",{staticClass:"music-content"},[i("div",{staticClass:"music-left"},[i("music-btn"),i("keep-alive",[t.$route.meta.keepAlive?i("router-view",{staticClass:"music-list"}):t._e()],1),t.$route.meta.keepAlive?t._e():i("router-view",{key:t.$route.path,staticClass:"music-list"})],1),i("lyric",{staticClass:"music-right",attrs:{lyric:t.lyric,nolyric:t.nolyric,lyricIndex:t.lyricIndex}})],1),i("div",{staticClass:"music-bar",class:{disable:!t.musicReady||!t.currentMusic.id}},[i("div",{staticClass:"music-bar-btns"},[i("i",{staticClass:"bar-icon btn-prev",attrs:{title:"上一曲 Ctrl + Left"},on:{click:t.prev}}),i("i",{staticClass:"bar-icon btn-play",class:{"btn-play-pause":t.playing},attrs:{title:"播放暂停 Ctrl + Space"},on:{click:t.play}}),i("i",{staticClass:"bar-icon btn-next",attrs:{title:"下一曲 Ctrl + Right"},on:{click:t.next}})]),i("div",{staticClass:"music-music"},[i("div",{staticClass:"music-bar-info"},[t.currentMusic&&t.currentMusic.id?[t._v("\n          "+t._s(t.currentMusic.name)+"\n          "),i("span",[t._v("- "+t._s(t.currentMusic.singer))])]:[t._v("欢迎使用mmPlayer在线音乐播放器")]],2),t.currentMusic.id?i("div",{staticClass:"music-bar-time"},[t._v(t._s(t._f("format")(t.currentTime))+"/"+t._s(t._f("format")(t.currentMusic.duration%3600)))]):t._e(),i("mm-progress",{staticClass:"music-progress",attrs:{percent:t.percentMusic,percentProgress:t.currentProgress},on:{percentChange:t.progressMusic}})],1),i("i",{staticClass:"bar-icon btn-mode",class:t.modeClass,attrs:{title:t.modeTitle},on:{click:t.modeChange}}),i("i",{staticClass:"bar-icon btn-comment",on:{click:t.openComment}}),i("div",{staticClass:"music-bar-volume",attrs:{title:"音量加减 [Ctrl+Up/Down]"}},[i("i",{staticClass:"bar-icon btn-volume",class:{"btn-volume-no":t.isMute},on:{click:t.switchMute}}),i("mm-progress",{attrs:{percent:t.volume},on:{percentChange:t.volumeChange}})],1)]),i("div",{staticClass:"mmPlayer-bg",style:{backgroundImage:t.picUrl}}),i("div",{staticClass:"mmPlayer-mask"})])},n=[],s=(i("20d6"),i("c5f6"),i("bd86")),c=i("cebc"),a=i("365c"),o=i("db49"),u={initAudio:function(t){var e=t.audioEle;e.onprogress=function(){try{if(e.buffered.length>0){var i=t.currentMusic.duration,r=0;e.buffered.end(0),r=e.buffered.end(0)>i?i:e.buffered.end(0),t.currentProgress=r/i}}catch(n){}},e.onplay=function(){var e;clearTimeout(e),e=setTimeout(function(){t.musicReady=!0},100)},e.ontimeupdate=function(){t.currentTime=e.currentTime},e.onended=function(){t.mode===o["g"].loop?t.loop():t.next()},e.onerror=function(){t.$mmToast("当前音乐不可播放，已自动播放下一曲"),t.next()},e.onstalled=function(){var i;e.load(),t.setPlaying(!1),clearTimeout(i),i=setTimeout(function(){t.setPlaying(!0)},10)},e.oncanplay=function(){0!==t.historyList.length&&t.currentMusic.id===t.historyList[0].id||t.setHistory(t.currentMusic)}}},l=u,d=i("bbd5"),h=i("2f62"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-btn"},[i("router-link",{attrs:{to:"/music/playlist",tag:"span"}},[t._v("正在播放")]),i("router-link",{attrs:{to:"/music/toplist",tag:"span"}},[t._v("推荐")]),i("router-link",{attrs:{to:"/music/search",tag:"span"}},[t._v("搜索")]),i("router-link",{staticClass:"none-414",attrs:{to:"/music/userlist",tag:"span"}},[t._v("我的歌单")]),i("router-link",{attrs:{to:"/music/historylist",tag:"span"}},[t._v("我听过的")])],1)},f=[],v={},p=v,g=(i("76d3"),i("2877")),b=Object(g["a"])(p,m,f,!1,null,"32736464",null),y=b.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("dl",{staticClass:"music-info"},[i("dt",[i("img",{attrs:{src:t.musicPicUrl}})]),t.currentMusic.id?[i("dd",[t._v("歌曲名："+t._s(t.currentMusic.name))]),i("dd",[t._v("歌手名："+t._s(t.currentMusic.singer))]),i("dd",[t._v("专辑名："+t._s(t.currentMusic.album))])]:[i("dd",[t._v("mmPlayer在线音乐播放器")]),t._m(0)]],2),i("div",{ref:"musicLyric",staticClass:"music-lyric"},[i("div",{staticClass:"music-lyric-items",style:t.lyricTop},[t.currentMusic.id?t.nolyric?i("p",[t._v("暂无歌词！")]):t.lyric.length>0?t._l(t.lyric,function(e,r){return i("p",{key:r,class:{on:t.lyricIndex===r}},[t._v(t._s(e.text))])}):i("p",[t._v("歌词加载失败！")]):i("p",[t._v("还没有播放音乐哦！")])],2)])])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{staticClass:"github",attrs:{target:"_blank",href:"https://github.com/maomao1996"}},[t._v("茂茂")])])}],M={name:"lyric",props:{lyric:{type:Array,default:function(){return[]}},nolyric:{type:Boolean,default:!1},lyricIndex:{type:Number,default:0}},data:function(){return{top:0}},computed:Object(c["a"])({musicPicUrl:function(){return this.currentMusic.id?"".concat(this.currentMusic.image,"?param=200y200"):i("2262")},lyricTop:function(){return"transform :translate3d(0, ".concat(-34*(this.lyricIndex-this.top),"px, 0)")}},Object(h["c"])(["currentMusic"])),mounted:function(){var t=this;window.addEventListener("resize",function(){clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){return t.clacTop()},60)}),this.$nextTick(function(){return t.clacTop()})},methods:{clacTop:function(){var t=this.$refs.musicLyric.offsetHeight;this.top=Math.floor(t/34/2)}}},P=M,_=(i("1cf9"),Object(g["a"])(P,x,C,!1,null,"3353bd90",null)),E=_.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"mmProgress",staticClass:"mmProgress",on:{click:t.barClick}},[i("div",{staticClass:"mmProgress-bar"}),i("div",{ref:"mmPercentProgress",staticClass:"mmProgress-outer"}),i("div",{ref:"mmProgressInner",staticClass:"mmProgress-inner"},[i("div",{staticClass:"mmProgress-dot",on:{mousedown:t.barDown,touchstart:function(e){return e.preventDefault(),t.barDown(e)}}})])])},w=[],I=10,T={name:"mmProgress",data:function(){return{move:{status:!1,startX:0,left:0}}},props:{percent:{type:[Number],default:0},percentProgress:{type:[Number],default:0}},mounted:function(){var t=this;this.$nextTick(function(){t.bindEvents();var e=t.$refs.mmProgress.clientWidth-I,i=t.percent*e;t.moveSilde(i)})},methods:{bindEvents:function(){document.addEventListener("mousemove",this.barMove),document.addEventListener("mouseup",this.barUp),document.addEventListener("touchmove",this.barMove),document.addEventListener("touchend",this.barUp)},unbindEvents:function(){document.removeEventListener("mousemove",this.barMove),document.removeEventListener("mouseup",this.barUp),document.removeEventListener("touchmove",this.barMove),document.removeEventListener("touchend",this.barUp)},barClick:function(t){var e=this.$refs.mmProgress.getBoundingClientRect(),i=Math.min(this.$refs.mmProgress.clientWidth-I,Math.max(0,t.clientX-e.left));this.moveSilde(i),this.commitPercent()},barDown:function(t){this.move.status=!0,this.move.startX=t.clientX||t.touches[0].pageX,this.move.left=this.$refs.mmProgressInner.clientWidth},barMove:function(t){if(!this.move.status)return!1;var e=t.clientX||t.touches[0].pageX,i=e-this.move.startX,r=Math.min(this.$refs.mmProgress.clientWidth-I,Math.max(0,this.move.left+i));this.moveSilde(r),this.commitPercent()},barUp:function(t){t.stopPropagation(),this.move.status=!1},moveSilde:function(t){this.$refs.mmProgressInner.style.width="".concat(t,"px")},commitPercent:function(){var t=this.$refs.mmProgress.clientWidth-I,e=this.$refs.mmProgressInner.clientWidth/t;this.$emit("percentChange",e)}},watch:{percent:function(t){if(t>=0&&!this.move.status){var e=this.$refs.mmProgress.clientWidth-I,i=t*e;this.moveSilde(i)}},percentProgress:function(t){var e=this.$refs.mmProgress.clientWidth*t;this.$refs.mmPercentProgress.style.width="".concat(e,"px")}},beforeDestroy:function(){this.unbindEvents()}},$=T,R=(i("0908"),Object(g["a"])($,k,w,!1,null,null,null)),L=R.exports,S={name:"music",components:{Lyric:E,MusicBtn:y,MmProgress:L},data:function(){return{musicReady:!1,currentTime:0,currentProgress:0,lyric:[],nolyric:!1,lyricIndex:0,isMute:!1,volume:o["f"]}},computed:Object(c["a"])({picUrl:function(){return this.currentMusic.id&&this.currentMusic.image?"url(".concat(this.currentMusic.image,"?param=300y300)"):"url(".concat(o["c"],")")},modeClass:function(){var t;return(t={},Object(s["a"])(t,o["g"].listLoop,"mode-listLoop"),Object(s["a"])(t,o["g"].order,"mode-order"),Object(s["a"])(t,o["g"].random,"mode-random"),Object(s["a"])(t,o["g"].loop,"mode-loop"),t)[this.mode]},modeTitle:function(){var t,e="Ctrl + O";return(t={},Object(s["a"])(t,o["g"].listLoop,"列表循环 ".concat(e)),Object(s["a"])(t,o["g"].order,"顺序播放 ".concat(e)),Object(s["a"])(t,o["g"].random,"随机播放 ".concat(e)),Object(s["a"])(t,o["g"].loop,"单曲循环 ".concat(e)),t)[this.mode]},percentMusic:function(){var t=this.currentMusic.duration;return this.currentTime&&t?this.currentTime/t:0}},Object(h["c"])(["audioEle","mode","playing","playlist","orderList","currentIndex","currentMusic","historyList"])),watch:{currentMusic:function(t,e){var i=this;t.id?t.id!==e.id&&(this.audioEle.src=t.url,this.lyricIndex=this.currentTime=this.currentProgress=0,this.audioEle.play(),this.$nextTick(function(){i._getLyric(t.id)})):this.lyric=[]},playing:function(t){var e=this,i=this.audioEle;this.$nextTick(function(){t?i.play():i.pause(),e.musicReady=!0})},currentTime:function(t){if(!this.nolyric){for(var e=0,i=0;i<this.lyric.length;i++)t>this.lyric[i].time&&(e=i);this.lyricIndex=e}}},mounted:function(){var t=this;this.$nextTick(function(){l.initAudio(t),t.initKeyDown(),t.volumeChange(o["f"])})},methods:Object(c["a"])({initKeyDown:function(){var t=this;document.onkeydown=function(e){switch(e.ctrlKey&&e.keyCode){case 32:t.play();break;case 37:t.prev();break;case 38:var i=Number((t.volume+=.1).toFixed(1));i>1&&(i=1),t.volumeChange(i);break;case 39:t.next();break;case 40:var r=Number((t.volume-=.1).toFixed(1));r<0&&(r=0),t.volumeChange(r);break;case 79:t.modeChange();break}}},prev:function(){if(this.musicReady)if(1===this.playlist.length)this.loop();else{var t=this.currentIndex-1;t<0&&(t=this.playlist.length-1),this.setCurrentIndex(t),!this.playing&&this.musicReady&&this.setPlaying(!0),this.musicReady=!1}},play:function(){this.musicReady&&this.setPlaying(!this.playing)},next:function(){if(this.musicReady){if(this.playlist.length-1===this.currentIndex&&this.mode===o["g"].order)return this.setCurrentIndex(-1),void this.setPlaying(!1);if(1===this.playlist.length)this.loop();else{var t=this.currentIndex+1;t===this.playlist.length&&(t=0),!this.playing&&this.musicReady&&this.setPlaying(!0),this.setCurrentIndex(t),this.musicReady=!1}}},loop:function(){this.audioEle.currentTime=0,this.audioEle.play(),this.setPlaying(!0),this.lyric.length>0&&(this.lyricIndex=0)},progressMusic:function(t){this.audioEle.currentTime=this.currentMusic.duration*t},modeChange:function(){var t=(this.mode+1)%4;if(this.setPlayMode(t),t!==o["g"].loop){var e=[];switch(t){case o["g"].listLoop:case o["g"].order:e=this.orderList;break;case o["g"].random:e=Object(d["d"])(this.orderList);break}this.resetCurrentIndex(e),this.setPlaylist(e)}},resetCurrentIndex:function(t){var e=this,i=t.findIndex(function(t){return t.id===e.currentMusic.id});this.setCurrentIndex(i)},openComment:function(){if(!this.currentMusic.id)return this.$mmToast("还没有播放歌曲哦！"),!1;this.$router.push("/music/comment/".concat(this.currentMusic.id))},volumeChange:function(t){this.isMute=0===t,this.volume=t,this.audioEle.volume=t},switchMute:function(){var t=this.audioEle;this.isMute=!this.isMute,this.isMute?t.volume=0:t.volume=this.volume},_getLyric:function(t){var e=this;Object(a["b"])(t).then(function(t){200===t.status&&(t.data.nolyric?e.nolyric=!0:(e.nolyric=!1,e.lyric=Object(d["c"])(t.data.lrc.lyric)),e.audioEle.play())})}},Object(h["d"])({setPlaying:"SET_PLAYING",setPlaylist:"SET_PLAYLIST",setCurrentIndex:"SET_CURRENTINDEX"}),Object(h["b"])(["setHistory","setPlayMode"])),filters:{format:d["b"]}},j=S,O=(i("1a26"),Object(g["a"])(j,r,n,!1,null,null,null));e["default"]=O.exports},bbd5:function(t,e,i){"use strict";i.d(e,"d",function(){return n}),i.d(e,"a",function(){return s}),i.d(e,"c",function(){return c}),i.d(e,"b",function(){return a});i("c5f6"),i("a481"),i("4917"),i("28a5");function r(t,e){var i=-1,r=t.length;e||(e=new Array(r));while(++i<r)e[i]=t[i];return e}var n=function(t){var e=null==t?0:t.length;if(!e)return[];var i=-1,n=e-1,s=r(t);while(++i<e){var c=i+Math.floor(Math.random()*(n-i+1)),a=s[c];s[c]=s[i],s[i]=a}return s};function s(t){return t<10?"0"+t:t}function c(t){for(var e=t.split("\n"),i=[],r=0;r<e.length;r++){var n=decodeURIComponent(e[r]),s=/\[\d*:\d*((\.|:)\d*)*\]/g,c=n.match(s);if(c)for(var a=n.replace(s,""),o=0,u=c.length;o<u;o++){var l=c[o],d=Number(String(l.match(/\[\d*/i)).slice(1)),h=Number(String(l.match(/:\d*/i)).slice(1)),m=60*d+h;""!==a&&i.push({time:m,text:a})}}return i}function a(t){var e=Math.floor(t/60),i=Math.floor(t%60);return"".concat(s(e),":").concat(s(i))}},fbd6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-a5a60a0e.0b7e5df3.js.map