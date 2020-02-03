(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e),function(t){var e=n(3),r=n(6),a=function(){function t(n,r){Object(e.a)(this,t),console.assert(n instanceof Array&&n.length>0),console.assert(r instanceof Array),this.names=n,this.attrs=r,this.comment="",this.parent=null,this.childs=[],this.id=null,this.jsid=t.jsidcnt++}return Object(r.a)(t,[{key:"toJSON",value:function(){return{names:this.names,attrs:this.attrs,comment:this.comment,id:this.id}}}]),t}();a.jsidcnt=0,t.exports=a}.call(this,n(7)(t))},11:function(t,e){var n={random_int:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t+.5)},random_choices:function(t,e,r){t=Math.ceil(t);var a=(e=Math.floor(e))-t+1;if(a<r)throw new Error("[random_choice] Cannot choose ".concat(r," different numbers between ").concat(t," ~ ").concat(e));for(var o=[],l=0;l<a;++l)o[l]=t+l;return n.shuffle(o),r==a?o:o.slice(0,r)},shuffle:function(t,e){var r,a,o;e&&(t=t.slice());for(var l=0;l<4*t.length;++l)a=n.random_int(0,t.length-1),o=n.random_int(0,t.length-1),r=t[a],t[a]=t[o],t[o]=r;return t},get_randomly:function(t){return t[n.random_int(0,t.length-1)]},get_randomly_multi:function(t,e){return n.random_choices(0,t.length-1,e).map((function(e){return t[e]}))},get_randomly_multi_dup:function(t,e){for(var r=[],a=0;a<e;++a)r[a]=n.get_randomly(t);return r}};t.exports=n},17:function(t,e,n){"use strict";n.r(e),function(t){var e=n(3),r=n(11),a=function t(){Object(e.a)(this,t)};a.forEachPre=function(t,e){e(t),t.childs.forEach((function(t){a.forEachPre(t,e)}))},a.forEachPost=function(t,e){t.childs.forEach((function(t){a.forEachPost(t,e)})),e(t)},a.selectNegativeInfos=function(t){console.assert(null!=t);var e={visited:{},out:[]};return a.forEachPre(t,(function(t){e.visited[t.jsid]=!0})),function t(e,n){e.childs.forEach((function(t){n.visited[t.jsid]||a.forEachPre(t,(function(t){n.out.push(t)}))})),n.visited[e.jsid]=!0,e.parent&&t(e.parent,n)}(t,e),e.out},a.selectPositiveAttrs=function(t,e){return console.assert(null!=t),e<=1?[r.get_randomly(t.attrs)]:r.get_randomly_multi(t.attrs,Math.min(e,t.attrs.length))},a.selectNegativeAttrs=function(t,e){console.assert(null!=t);var n=a.selectNegativeInfos(t),o=[];return n.forEach((function(t){o=o.concat(t.attrs)})),e<=1?[r.get_randomly(o)]:r.get_randomly_multi(o,Math.min(e,o.length))},t.exports=a}.call(this,n(7)(t))},30:function(t,e,n){"use strict";(function(t){var r=n(3),a=n(6),o=n(10),l=n(40),i=n(41),c=n(44).default,u=function(){function t(e){Object(r.a)(this,t),this.wp=null,this.infos={},this.devmode=e,this.url="http://52.79.78.251:3000/v01/doc"}return Object(a.a)(t,[{key:"getSubjectsList",value:function(t){this.devmode?t&&window.setTimeout((function(){t([{name:"\uad6d\ubc25",id:1}])}),0):c({method:"get",url:this.url+"/getInfosList",params:{}}).then((function(e){if(!e.data.state)return console.log("[LocalModel::getSubjectsList] Fail to fetch data."),console.log(e.data.msg),void(t&&t([]));console.log(e.data);var n=e.data;if(t){for(var r=[],a=0;a<n.names.length;++a)r.push({name:n.names[a],id:n.ids[a]});t(r)}})).catch((function(t){console.log("[LocalModel::getSubjectsList] Fail to fetch data."),console.log(t)}))}},{key:"moveToSubject",value:function(t,e){var n=this;if(this.devmode)return this.createSubject("\uad6d\ubc25",null),this.createAttr("\uc740","\ub4e0\ub4e0","\ud558\ub2e4",null),this.createAttr("\uc740","\ub728\ub73b","\ud558\ub2e4",null),this.createInfo("\ub3fc\uc9c0\uad6d\ubc25",null),this.createAttr("\uc5d0\ub294","\uc21c\ub300\uac00 \ub4e4\uc5b4","\uc788\ub2e4",null),this.createAttr("\uc740","\uacbd\ub0a8\uc5d0\uc11c \uc720\uba85","\ud558\ub2e4",null),this.createInfo("\ubb34\ubd09\ub9ac\uc21c\ub300\uad6d\ubc25",null),this.createAttr("\uc740","\uacbd\ub0a8\uc758 \uccb4\uc778\uc810","\uc774\ub2e4",null),this.createAttr("\uc5d0\ub294","20\ub144\uc9f8 \uc6b4\uc601\ud558\ub294 \uc9d1\ub3c4","\uc788\ub2e4",null),this.moveToParent(),this.createInfo("\ud560\ub9e4\uc21c\ub300\uad6d\ubc25",null),this.createAttr("\uc740","\uc2e4\uc81c\ub85c\ub294 \uc5c6\ub294 \ube0c\ub79c\ub4dc","\uc774\ub2e4",null),this.createAttr("\uc740","\uc5b4\uca4c\uba74 \ud558\ub098\ucbe4\uc740 \uc788\uc744\uc218\ub3c4","\uc788\ub2e4",null),this.moveToParent(),this.moveToParent(),this.createInfo("\uc18c\uace0\uae30\uad6d\ubc25",null),this.createAttr("\uc740","\ub300\uc804\uc774 \ub9db\uc788","\ub2e4",null),this.createAttr("\uc740","\uc5bc\ud070\ud55c \uad6d\ubb3c\uc774 \uc778\uc0c1\uc801","\uc774\ub2e4",null),this.moveToParent(),void(e&&window.setTimeout((function(){e(n.wp)}),0));c({method:"get",url:this.url+"/readInfo",params:{id:t}}).then((function(t){if(!t.data.state)return console.log("[LocalModel::moveToSubject] Fail to fetch data."),console.log(t.data.msg),void(e&&e(null));var r=t.data,a=r.nodes.map((function(t){var e=n.__allocateInfo(t.name,[]);return e.id=t.id,t.attrs.forEach((function(t){n.__appendAttr(e,t.prefix,t.content,t.postfix,t.id)})),e}));r.edges.forEach((function(t){n.__appendInfo(a[t[0]],a[t[1]])})),n.wp=a[0],e&&e(n.wp)})).catch((function(t){console.log("[LocalModel::moveToSubject] Fail to fetch data."),console.log(t),e&&e(null)}))}},{key:"getCurrentInfo",value:function(){return this.wp}},{key:"getCurrentPath",value:function(){if(null==this.wp)return[];for(var t=[],e=this.wp;null!=e;)t.push(e.names[0]),e=e.parent;return t.reverse()}},{key:"getParentInfo",value:function(){return null==this.wp?null:this.wp.parent}},{key:"getChildInfos",value:function(){return null==this.wp?[]:this.wp.childs}},{key:"moveToParent",value:function(){return null==this.wp||null==this.wp.parent?null:this.wp=this.wp.parent}},{key:"moveToChild",value:function(t){return console.assert(void 0!==t),null==this.wp?null:this.wp.childs.length<=t||t<0?null:this.wp=this.wp.childs[t]}},{key:"exitToMainPage",value:function(){this.wp=null,this.infos={}}},{key:"createSubject",value:function(t,e){var n=this;if(this.devmode){var r=this.__allocateInfo(t);return r.id="".concat((new Date).getTime()),this.wp=r,void(e&&window.setTimeout((function(){e(n.wp)}),0))}c({method:"post",url:this.url+"/createInfo",data:{name:t,parentId:null}}).then((function(r){if(!r.data.state)return console.log("[LocalModel::createSubject] Fail to update data."),console.log(r.data.msg),void(e&&e(null));var a=n.__allocateInfo(t);a.id=r.data.id,n.wp=a,e&&e(n.wp)})).catch((function(t){console.log("[LocalModel::createSubject] Fail to fetch data."),console.log(t),e&&e(null)}))}},{key:"createInfo",value:function(t,e){var n=this;if(null!=this.wp){if(this.devmode){var r=this.__allocateInfo(t);return this.__appendInfo(this.wp,r),this.wp=r,this.wp.id="".concat((new Date).getTime()),void(e&&window.setTimeout((function(){e(n.wp)}),0))}c({method:"post",url:this.url+"/createInfo",data:{name:t,parentId:this.wp.id}}).then((function(r){if(!r.data.state)return console.log("[LocalModel::createInfo] Fail to update data."),console.log(r.data.msg),void(e&&e(null));var a=n.__allocateInfo(t);n.__appendInfo(n.wp,a),n.wp=a,n.wp.id=r.data.id,e&&e(n.wp)})).catch((function(t){console.log("[LocalModel::createInfo] Fail to fetch data."),console.log(t),e&&e(null)}))}}},{key:"createAttr",value:function(t,e,n,r){var a=this;if(null!=this.wp)if(this.devmode){var o="".concat((new Date).getTime()),l=this.__appendAttr(this.wp,t,e,n,o);r&&window.setTimeout((function(){r(l)}),0)}else c({method:"post",url:this.url+"/createAttr",data:{prefix:t,content:e,postfix:n,parentId:this.wp.id}}).then((function(o){if(!o.data.state)return console.log("[LocalModel::createAttr] Fail to update data."),console.log(o.data.msg),void(r&&r(null));var l=a.__appendAttr(a.wp,t,e,n,o.data.aid);r&&r(l)})).catch((function(t){console.log("[LocalModel::createAttr] Fail to fetch data."),console.log(t),r&&r(null)}))}},{key:"createMocktest",value:function(t){return i.create_mocktest(this.wp,t)}},{key:"__allocateInfo",value:function(t){var e=new o([t],[]);return this.infos[e.jsid]=e,e}},{key:"__appendInfo",value:function(t,e){t.childs.push(e),e.parent=t}},{key:"__appendAttr",value:function(t,e,n,r,a){var o=new l(t,e,n,r);return o.id=a,t.attrs.push(o),o}}]),t}();t.exports=u,e.a=u}).call(this,n(7)(t))},35:function(t,e,n){t.exports=n(75)},40:function(t,e,n){"use strict";n.r(e),function(t){var e=n(3),r=n(6),a=function(){function t(n,r,a,o){Object(e.a)(this,t),console.assert(null!=n),console.assert("string"==typeof r),console.assert("string"==typeof a),console.assert("string"==typeof o),this.pinfo=n,this.prefix=r,this.content=a,this.postfix=o,this.id=null}return Object(r.a)(t,[{key:"getFullSentence",value:function(t){return t=t||0,this.pinfo.names[t]+this.prefix+" "+this.content+this.postfix+"."}},{key:"getHintSentence",value:function(t){return(t?this.prefix+" ":"")+this.content+this.postfix+"."}}]),t}();t.exports=a}.call(this,n(7)(t))},41:function(t,e,n){"use strict";n.r(e),function(t){var e=n(3),r=(n(10),n(17)),a=n(42),o=n(11),l=function t(n){Object(e.a)(this,t),console.assert(n instanceof Array),this.quests=n};l.select_test_materials=function(t,e){if(e<=0)return[];var n=[];r.forEachPre(t,(function(t){t.attrs.length>0&&n.push(t)}));for(var a=[],l=n.length,i=Math.floor(e/l),c=0;c<l;++c)a[c]=i;(e-=i*l)>0&&o.random_choices(0,l-1,e).forEach((function(t){a[t]+=1}));for(var u=[],s=0;s<a.length;++s)for(var f=0;f<a[s];++f)u.push(n[s]);return o.shuffle(u,!1)},l.create_mocktest=function(t,e){var n=l.select_test_materials(t,e),r=[];if(e<4)for(var i=0;i<e;++i)r[i]=1;else r[0]=Math.floor(e/4),r[1]=Math.floor(e/4),r[2]=Math.floor(e/4),r[3]=e-r[0]-r[1]-r[2];for(var c=[],u=0,s=0;s<e;++s)if(r[u]--<=0)++u,--s;else{console.assert(u<r.length);var f=null;if(0==u)f=a.generate_binary_quest(n[s]);else if(2==u)f=a.generate_short_quest(n[s],4);else{if(null==n[s].parent)if(n[s].childs.length>0){var d=n[s].childs.filter((function(t){return t.attrs.length>=1}));0==d.length?f=Math.random()>.5?a.generate_binary_quest(n[s]):a.generate_short_quest(n[s],4):n[s]=o.get_randomly(d)}else f=Math.random()>.5?a.generate_binary_quest(n[s]):a.generate_short_quest(n[s],4);if(null==f)if(1==u){var h=n[s].attrs.length>=3&&Math.random()>.5;f=a.generate_selection_quest(n[s],4,1,h)}else 3==u&&(f=a.generate_selection2_quest(n[s],4))}c.push(f)}return new l(c)},t.exports=l}.call(this,n(7)(t))},42:function(t,e,n){"use strict";n.r(e),function(t){var e=n(3),r=(n(10),n(17)),a=n(11),o=n(43),l=function t(n,r,a,o,l,i){Object(e.a)(this,t),console.assert(n),console.assert(r),console.assert(Array.isArray(o)),console.assert(Array.isArray(l)),Array.isArray(l)||(console.log("babo"),console.log(l)),this.type=n,this.title=r,this.statement=a,this.choices=o,this.answers=l,this.materials=i};l.evaluate=function(t,e){return l.evaluator[t.type](t,e)},l.evaluator={},l.generate_binary_quest=function(t){var e=null,n=null;null!=t.parent&&Math.random()>.5?(e="F",n=t.names[0]+r.selectNegativeAttrs(t,1)[0].getHintSentence(!0)):(e="T",n=r.selectPositiveAttrs(t,1)[0].getFullSentence());a.get_randomly(t.names);return new l("binary","\ub2e4\uc74c \ubb38\uc7a5\uc758 \ucc38/\uac70\uc9d3\uc744 \ud310\ubcc4\ud558\uc2dc\uc624.",n,["T","F"],[e],t)},l.evaluator.binary=function(t,e){return 1==e.length&&t.answers[0]==e[0]},l.generate_selection_quest=function(t,e,n,o){var i=o?e-n:n,c=r.selectPositiveAttrs(t,i),u=r.selectNegativeAttrs(t,e-i),s=a.shuffle(c.concat(u),!1),f=null;f=o?u.map((function(t){return"".concat(s.indexOf(t))})):c.map((function(t){return"".concat(s.indexOf(t))}));var d=a.get_randomly(t.names);s=s.map((function(t){return t.getHintSentence(!1)}));var h=o?"\uc633\uc9c0 \uc54a\uc740 \uac83":"\uc633\uc740 \uac83";return new l("selection","\ub2e4\uc74c \uc911 ".concat(d,"\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c ").concat(h,"\uc744 \uace0\ub974\uc2dc\uc624."),null,s,f,t)},l.evaluator.selection=function(t,e){if(t.answers.length!=e.length)return!1;t.answers.sort(),e.sort();for(var n=0;n<e.length;++n)if(t.answers[n]!=e[n])return!1;return!0},l.generate_short_quest=function(t,e){t.attrs.length<e&&(e=t.attrs.length);var n=r.selectPositiveAttrs(t,e),a="";return n.forEach((function(t){a+="\n * "+t.getHintSentence(!1)})),new l("short","\ub2e4\uc74c\uc774 \uc124\uba85\ud558\ub294 \uac83\uc744 \uc801\uc73c\uc2dc\uc624.",a,[],t.names,t)},l.evaluator.short=function(t,e){if(1!=e.length)return!1;for(var n=0;n<t.answers.length;++n)if(t.answers[n]==e[n])return!0;return!1},l.generate_selection2_quest=function(t,e){new o;var n=t,i="";n.attrs.forEach((function(t){i+="\n * "+t.getHintSentence(!1)}));var c=r.selectNegativeInfos(t);c.push(n),c=c.slice(0,e),a.shuffle(c,!1);var u=c.map((function(t){return a.get_randomly(t.names)})),s=["".concat(c.indexOf(t))];return new l("selection","\ub2e4\uc74c\uc774 \uc124\uba85\ud558\ub294 \uac83\uc73c\ub85c \uc54c\ub9de\uc740 \uac83\uc744 \uace0\ub974\uc2dc\uc624.",i,u,s,t)},t.exports=l}.call(this,n(7)(t))},43:function(t,e,n){"use strict";n.r(e),function(t){var e=n(3),r=n(6),a=function(){function t(){Object(e.a)(this,t),this.first=null,this.last=null,this.size=0}return Object(r.a)(t,[{key:"push",value:function(t){return null==this.first?this.first=this.last={value:t,next:null}:this.last=this.last.next={value:t,next:null},++this.size,t}},{key:"pop",value:function(){if(!this.first)return null;var t=this.first.value;return this.first=this.first.next,null==this.first&&(this.last=null),--this.size,t}},{key:"front",value:function(){return this.empty()?null:this.first.value}},{key:"back",value:function(){return this.empty()?null:this.last.value}},{key:"empty",value:function(){return null==this.first}}]),t}();t.exports=a}.call(this,n(7)(t))},62:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(13),l=n.n(o),i=n(4),c=n(9),u=n(30),s=Object(r.createContext)(null),f=Object(r.createContext)(null);function d(t,e){switch(e.type){case"INIT":return Object(c.a)({},t,{LocalModel:e.LocalModel});case"CHANGE_PATH":return Object(c.a)({},t,{currentPath:e.path});case"CHANGE_SUBJECTS":return Object(c.a)({},t,{subjects:e.subjects});case"CHANGE_INFO":return Object(c.a)({},t,{info:e.info});default:throw new Error("Unhandled action")}}var h=new u.a(!1);function p(t){var e=t.children,n=Object(r.useReducer)(d,{LocalModel:h,currentPath:[],subjects:[],info:null}),o=Object(i.a)(n,2),l=o[0],c=o[1];return a.a.createElement(f.Provider,{value:c},a.a.createElement(s.Provider,{value:l},e))}function m(){var t=Object(r.useContext)(s);if(!t)throw new Error("LocalModelProvider not found");return t}function b(){var t=Object(r.useContext)(f);if(!t)throw new Error("LocalModelProvider not found");return t}window.LocalModel=h;n(62);var v=n(1),g=n(2);function w(){var t=Object(v.a)(["\n  width: 100%;\n  height: 40px;\n  background-color: rgb(190, 0, 4);\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  color: white;\n  box-sizing: border-box;\n  & > div:first-child {\n    flex: 1;\n  }\n"]);return w=function(){return t},t}var x=g.a.div(w());var y=function(){var t=m(),e=b(),n=Object(r.useCallback)((function(n){t.LocalModel.exitToMainPage(),e({type:"CHANGE_PATH",path:[]})}),[e,t]),o=Object(r.useCallback)((function(n){var r=t.LocalModel.moveToParent();e({type:"CHANGE_PATH",path:t.LocalModel.getCurrentPath()}),e({type:"CHANGE_INFO",info:r})}),[e,t]);return a.a.createElement(x,null,a.a.createElement("div",null,t.currentPath.reduce((function(t,e){return t.concat(" > ").concat(e)}),"> \ub0b4 \uc8fc\uc81c ")),a.a.createElement("div",null,t.currentPath.length>=2&&a.a.createElement("button",{onClick:o},"\uc0c1\uc704 \uc815\ubcf4")),a.a.createElement("div",null,0!==t.currentPath.length&&a.a.createElement("button",{onClick:n},"\ub0b4 \uc8fc\uc81c")))},E=n(8),k=n.n(E);function j(){var t=Object(v.a)(["\n  background-color: ",";\n"]);return j=function(){return t},t}function O(){var t=Object(v.a)(["\n  & > input[type='text'] {\n    width: 100%;\n  }\n"]);return O=function(){return t},t}function _(){var t=Object(v.a)(["\n  font-size: 2em;\n  font-weight: bold;\n  word-break: break-all;\n"]);return _=function(){return t},t}function C(){var t=Object(v.a)(["\n  display: flex;\n  height: 55px;\n  & > button {\n    border: none;\n    text-align: center;\n  }\n  & > button:nth-child(1) {\n    flex: 1;\n    color: black;\n  }\n  & > button:nth-child(2) {\n    flex: 1;\n    font-weight: bold;\n    background-color: rgb(24, 109, 238);\n    color: white;\n  }\n  & > button:disabled {\n    font-weight: normal;\n    background-color: rgba(24, 109, 238, 0.5);\n  }\n"]);return C=function(){return t},t}function A(){var t=Object(v.a)(["\n  display: inline-block;\n  flex: 1;\n  & > button {\n    border: none;\n    text-align: center;\n    width: 100%;\n    height: 40px;\n    box-sizing: border-box;\n    font-size: 0.7em;\n  }\n"]);return A=function(){return t},t}function M(){var t=Object(v.a)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n"]);return M=function(){return t},t}function I(){var t=Object(v.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return t},t}var P={overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)"},content:{padding:"8px",width:"100%",minwidth:"370px",maxWidth:"600px",border:"none",borderRadius:0,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",boxSizing:"border-box"}};k.a.setAppElement("#root");var T=g.a.div(I()),S=g.a.ul(M()),L=g.a.li(A()),N=g.a.div(C()),H=g.a.div(_()),F=g.a.div(O()),q=g.a.button(j(),(function(t){return t.selected?"rgb(187,188,244)":"#eeeeee"}));function z(t){if(0===t.length)return!1;var e=t[t.length-1].charCodeAt(0);return!(e<44032||e>55203)&&(e-44032)%28!==0}function G(t,e,n,r){var a=t;return z(t)?a+=e[0]:a+=e[1],a+=" ",0===n.trim().length?a+="???":a+=n,z(n)?a+=r[0]:a+=r[1],a+"."}var D=function(t){var e=t.name,n=b(),o=m().LocalModel,l=Object(r.useRef)(),c=a.a.useState(!1),u=Object(i.a)(c,2),s=u[0],f=u[1],d=Object(r.useState)(0),h=Object(i.a)(d,2),p=h[0],v=h[1],g=Object(r.useState)(0),w=Object(i.a)(g,2),x=w[0],y=w[1],E=Object(r.useState)(""),j=Object(i.a)(E,2),O=j[0],_=j[1],C=Object(r.useState)(""),A=Object(i.a)(C,2),M=A[0],I=A[1],D=Object(r.useState)(!1),R=Object(i.a)(D,2),J=R[0],B=R[1];function U(){f(!1),v(0),y(0),_(""),I(""),B(!1),document.body.style.position=""}var W=z(e[0]),K=[["\uc740","\ub294"],["\uc73c\ub85c","\ub85c"],["\uc5d0\ub294","\uc5d0\ub294"]],Q=[["\uc774\ub2e4","\ub2e4"],["\ud558\ub2e4","\ud558\ub2e4"],["\ub41c\ub2e4","\ub41c\ub2e4"],["\uc788\ub2e4","\uc788\ub2e4"],["\ub2e4","\ub2e4"]],V=Object(r.useCallback)((function(t){l.current.focus()}),[l]),X=Object(r.useCallback)((function(t){return function(n){v(t),I(G(e[0],K[t],O,Q[x]))}}),[e,Q,K,O,x]),Y=Object(r.useCallback)((function(t){return function(n){y(t),I(G(e[0],K[p],O,Q[t]))}}),[O,p,e,Q,K]),Z=Object(r.useCallback)((function(t){_(t.target.value),B(z(t.target.value)),I(G(e[0],K[p],t.target.value,Q[x]))}),[p,x,e,Q,K]),$=Object(r.useCallback)((function(t){var r=z(e[0])?0:1,a=z(O)?0:1;o.createAttr(K[p][r],O,Q[x][a],(function(t){null!==t?(n({type:"CHANGE_INFO",info:o.getCurrentInfo()}),U()):alert("server error")}))}),[o,O,Q,K,p,x,e,n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){f(!0),document.body.style.position="fixed"}},"\uc18d\uc131 \ucd94\uac00"),a.a.createElement(k.a,{closeTimeoutMS:200,isOpen:s,onRequestClose:U,style:P,contentLabel:"AttrModal",onAfterClose:function(){},shouldCloseOnOverlayClick:!1,onAfterOpen:function(){I(G(e[0],K[p],O,Q[x])),l.current.focus()}},a.a.createElement(T,{onClick:V},a.a.createElement(H,null,M),a.a.createElement(S,null,K.map((function(t,e){return a.a.createElement(L,{key:"prefix-"+e},a.a.createElement(q,{onClick:X(e),selected:p===e},W?t[0]:t[1]))}))),a.a.createElement(F,null,a.a.createElement("input",{type:"text",placeholder:"\ucf58\ud150\uce20 \uc785\ub825",ref:l,value:O,onChange:Z})),a.a.createElement(S,null,Q.map((function(t,e){return a.a.createElement(L,{key:"postfix-"+e},a.a.createElement(q,{onClick:Y(e),selected:x===e},J?t[0]:t[1],0===e&&"(\uba85\uc0ac\ud615)",4===e&&"(\ub3d9\uc0ac\ud615)"))}))),a.a.createElement(N,null,a.a.createElement("button",{onClick:U},"\ub2eb\uae30"),a.a.createElement("button",{onClick:$,disabled:!O.trim().length},"\uc800\uc7a5")))))};n(74);function R(){var t=Object(v.a)(["\n  width: 100%;\n  margin-top: 1em;\n  & > input[type='text'] {\n    width: 100%;\n    padding: 0;\n    border-width: 0;\n    box-sizing: border-box;\n    border: 1px solid black;\n    padding: 1em;\n  }\n"]);return R=function(){return t},t}function J(){var t=Object(v.a)(["\n  & > label {\n    /* padding-left: 0.7em; */\n    /* flex: 1; */\n    width: 100%;\n    height: 100%;\n    padding: 1em;\n  }\n  /* & > label:hover,\n  label:active {\n    background-color: rgb(111, 197, 237);\n  } */\n  & > label > span {\n    padding-left: 0.7em;\n  }\n  & > label > input[type='radio'] {\n    /* position: absolute; */\n    /* left: -9999px; */\n  }\n  display: flex;\n\n  background-color: ",";\n  margin-top: 1em;\n"]);return J=function(){return t},t}function B(){var t=Object(v.a)(["\n  display: ",";\n  border: 1px solid black;\n  margin-top: 1em;\n  padding: 1em;\n"]);return B=function(){return t},t}function U(){var t=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  word-break: break-all;\n  padding: 0 1.5em;\n  & + & {\n    margin-top: 3em;\n  }\n"]);return U=function(){return t},t}var W=g.a.li(U()),K=g.a.div(B(),(function(t){return t.statement?"block":"none"})),Q=g.a.div(J(),(function(t){return t.selected?"wheat":"rgb(235,235,235)"})),V=g.a.div(R());var X=function(t){var e,n=t.quest,o=t.order,l=t.setSelectionFn,i=t.selection,c=function(t){var e=i.slice();e[o]=t,l(e)},u=n.type,s=n.title,f=n.statement,d=n.choices,h=(n.answers,n.materials,Object(r.useCallback)((function(t){return function(e){c(t)}}),[i])),p=Object(r.useCallback)((function(t){c(t.target.value)}),[i]);return console.log(null===f||void 0===f?void 0:f.trim()),a.a.createElement(W,null,a.a.createElement("div",null,o+1+". ",s),a.a.createElement(K,{statement:f},null===f||void 0===f?void 0:f.trim().split("\n").reduce((function(t,e){return a.a.createElement(a.a.Fragment,null,t&&t,t&&a.a.createElement("br",null),e)}),"")),0!==d.length?d.map((function(t,e){return a.a.createElement(Q,{key:"select-id"+o+"-"+e,selected:"binary"===u?i[o]===t:i[o]===""+e},a.a.createElement("label",{onClick:function(t){t.stopPropagation()},htmlFor:"select-"+o+"-"+e},a.a.createElement("input",{type:"radio",id:"select-"+o+"-"+e,name:"select-"+o,onChange:h("binary"!==u?""+e:t),checked:"binary"===u?i[o]===t:i[o]===""+e}),a.a.createElement("span",null,"binary"===u?"T"===t?"\ucc38":"\uac70\uc9d3":t)))})):a.a.createElement(V,null,a.a.createElement("input",{type:"text",placeholder:"\uc815\ub2f5 \uc785\ub825",value:null===i[o]?"":null===(e=i[o])||void 0===e?void 0:e.toString(),onChange:p})))};function Y(){var t=Object(v.a)(["\n  text-align: center;\n  background-color: wheat;\n  position: fixed;\n  right: 0;\n  width: 100%;\n  max-width: 600px;\n  height: 74px;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & > button {\n    border: none;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n  }\n  & > button:nth-child(1) {\n    flex: 1;\n    color: black;\n    background-color: #eaeaea;\n  }\n  & > button:nth-child(2) {\n    flex: 1;\n    font-weight: bold;\n    background-color: rgb(24, 109, 238);\n    color: white;\n  }\n  & > button:disabled {\n    font-weight: normal;\n    background-color: rgba(24, 109, 238, 0.5);\n  }\n"]);return Y=function(){return t},t}function Z(){var t=Object(v.a)(["\n  list-style: none;\n  padding: 0;\n"]);return Z=function(){return t},t}function $(){var t=Object(v.a)(["\n  border-bottom: 1px solid black;\n  font-size: 2em;\n  padding: 30px 0;\n  margin-bottom: 66px;\n  text-align: center;\n"]);return $=function(){return t},t}function tt(){var t=Object(v.a)(["\n  width: 100%;\n  max-width: 600px;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  position: relative;\n  background-color: white;\n  padding-bottom: 82px;\n  /* margin-bottom: 74px; */\n  z-index: 1;\n  overflow: scroll;\n  height: 100%;\n"]);return tt=function(){return t},t}var et=g.a.div(tt()),nt=g.a.div($()),rt=g.a.ul(Z()),at=g.a.div(Y());function ot(t){var e=t.Mocktest,n=t.closeHandler,o=Object(r.useState)(new Array(e.quests.length).fill(null)),l=Object(i.a)(o,2),c=l[0],u=l[1],s=Object(r.useCallback)((function(t){n()}),[]);return a.a.createElement(et,null,a.a.createElement(at,null,a.a.createElement("button",null,"\ucc44\uc810"),a.a.createElement("button",{onClick:s},"\ub2eb\uae30")),a.a.createElement(nt,null,a.a.createElement("div",null,"2020\ud559\ub144\ub3c4 \ubb38\uc81c\uc9c0"),a.a.createElement("div",null,c)),a.a.createElement(rt,null,e.quests.map((function(t,e){return a.a.createElement(X,{quest:t,key:"quest-"+e,order:e,selection:c,setSelectionFn:u})}))))}ot.defaultProps={Mocktest:{quests:[{type:"binary",title:"(Demo) \ub2e4\uc74c \ubb38\uc7a5\uc758 \ucc38/\uac70\uc9d3\uc744 \ud310\ubcc4\ud558\uc2dc\uc624.",statement:"\ubb34\ubd09\ub9ac\uc21c\ub300\uad6d\ubc25\uc740 \uc5bc\ud070\ud55c \uad6d\ubb3c\uc774 \uc778\uc0c1\uc801\uc774\ub2e4.",choices:["T","F"],answers:["F"],materials:null},{type:"selection",title:"\ub2e4\uc74c \uc911 \uc18c\uace0\uae30\uad6d\ubc25\uc5d0 \ub300\ud55c \uc124\uba85\uc73c\ub85c \uc633\uc740 \uac83\uc744 \uace0\ub974\uc2dc\uc624.",choices:["\uc2e4\uc81c\ub85c\ub294 \uc5c6\ub294 \ube0c\ub79c\ub4dc\uc774\ub2e4.","\uc21c\ub300\uac00 \ub4e4\uc5b4\uc788\ub2e4.","\uc5bc\ud070\ud55c \uad6d\ubb3c\uc774 \uc778\uc0c1\uc801\uc774\ub2e4.","\uc5b4\uca4c\uba74 \ud558\ub098\ucbe4\uc740 \uc788\uc744\uc218\ub3c4\uc788\ub2e4."],answers:["0"],materials:null},{type:"short",title:"1+1=",choices:[],answers:["2"],materials:null},{type:"selection",title:"\uc778\uc0dd\uc744 \uc65c \uc0ac\ub098\uc694?",choices:["\uc8fd\uae30 \uc704\ud574\uc11c","\uc0b4\uae30 \uc704\ud574\uc11c","\uba39\uae30 \uc704\ud574\uc11c","\uc2f8\uae30 \uc704\ud574\uc11c"],answers:["1"],materials:null},{type:"short",title:"1+1=",choices:[],answers:["2"],materials:null}]}};var lt=ot;k.a.setAppElement("#root");var it={overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)"},content:{width:"100%",minwidth:"370px",maxWidth:"600px",border:"none",borderRadius:0,left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",boxSizing:"border-box",height:"90vh",overflow:"hidden",position:"relative",padding:"0"}};function ct(t){return a.a.createElement(k.a,{closeTimeoutMS:200,isOpen:t.modalIsOpen,style:it,contentLabel:"MockTestModal",onAfterClose:function(){document.body.style.position=""},shouldCloseOnOverlayClick:!1,onAfterOpen:function(){document.body.style.position="fixed"}},a.a.createElement(lt,{Mocktest:t.mockTestData,closeHandler:function(){t.setModalIsOpen(!1)}}))}ct.defaultProps={modalIsOpen:!1,setModalIsOpen:function(){},mockTestData:null,setMockTestData:function(){}};var ut=ct;function st(){var t=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  text-align: center;\n  box-sizing: border-box;\n  font-size: 1.5em;\n  font-weight: bold;\n  background-color: rgb(190, 0, 4);\n  color: white;\n  &:disabled {\n    font-weight: normal;\n    background-color: rgba(190, 0, 4, 0.5);\n  }\n"]);return st=function(){return t},t}function ft(){var t=Object(v.a)(["\n  text-align: center;\n  width: 90%;\n  max-width: 600px;\n  height: 75px;\n  position: fixed;\n  background-color: wheat;\n  bottom: -15px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n"]);return ft=function(){return t},t}function dt(){var t=Object(v.a)(["\n  &:before {\n    content: '(\uc5f0\ud544) ';\n  }\n  padding: 15px 0;\n"]);return dt=function(){return t},t}function ht(){var t=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return ht=function(){return t},t}function pt(){var t=Object(v.a)(["\n  width: 100%;\n"]);return pt=function(){return t},t}function mt(){var t=Object(v.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 33%;\n  height: 150px;\n  box-sizing: border-box;\n  background-color: ",";\n  min-width: 120px;\n"]);return mt=function(){return t},t}function bt(){var t=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);return bt=function(){return t},t}function vt(){var t=Object(v.a)(["\n  border-radius: 50px;\n  padding: 5px;\n  min-width: 120px;\n  color: white;\n  font-weight: 600;\n  -webkit-appearance: none;\n  cursor: pointer;\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  background-color: ",";\n"]);return vt=function(){return t},t}function gt(){var t=Object(v.a)(["\n  width: 100%;\n  max-width: 600px;\n"]);return gt=function(){return t},t}function wt(){var t=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n  position: relative;\n"]);return wt=function(){return t},t}var xt=g.a.div(wt()),yt=g.a.div(gt()),Et=g.a.button(vt(),(function(t){return t.danger?"rgb(190,0,4)":"purple"})),kt=g.a.ul(bt()),jt=g.a.li(mt(),(function(t){return t.add?"wheat":"rgb(237, 240, 241)"})),Ot=g.a.div(pt()),_t=g.a.div(ht()),Ct=g.a.div(dt()),At=kt,Mt=jt,It=g.a.div(ft()),Pt=g.a.button(st());var Tt=function(){var t,e,n,o,l=b(),c=m(),u=Object(r.useState)(!1),s=Object(i.a)(u,2),f=s[0],d=s[1],h=Object(r.useState)(null),p=Object(i.a)(h,2),v=p[0],g=p[1],w=Object(r.useCallback)((function(t){return function(e){c.LocalModel.moveToSubject(t,(function(t){console.log(t),l({type:"CHANGE_PATH",path:c.LocalModel.getCurrentPath()}),l({type:"CHANGE_INFO",info:t})}))}}),[l,c]),x=Object(r.useCallback)((function(t){return function(e){c.LocalModel.moveToChild(t);var n=c.LocalModel.getCurrentInfo();l({type:"CHANGE_PATH",path:c.LocalModel.getCurrentPath()}),l({type:"CHANGE_INFO",info:n})}}),[l,c]),y=Object(r.useCallback)((function(t){var e=prompt("\uacfc\ubaa9 \uc774\ub984\uc740?");"string"===typeof e&&0!==e.trim().length?c.LocalModel.createSubject(e.trim(),(function(t){var e=c.LocalModel.getCurrentInfo();l({type:"CHANGE_PATH",path:c.LocalModel.getCurrentPath()}),l({type:"CHANGE_INFO",info:e})})):alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\ub294 \uacfc\ubaa9 \uc774\ub984\uc785\ub2c8\ub2e4.")}),[l,c]),E=Object(r.useCallback)((function(t){var e=prompt("\uc815\ubcf4 \uc774\ub984\uc740?");"string"===typeof e&&0!==e.trim().length?c.LocalModel.createInfo(e.trim(),(function(t){var e=c.LocalModel.getCurrentInfo();l({type:"CHANGE_PATH",path:c.LocalModel.getCurrentPath()}),l({type:"CHANGE_INFO",info:e})})):alert("\uc720\ud6a8\ud558\uc9c0 \uc54a\ub294 \uc815\ubcf4 \uc774\ub984\uc785\ub2c8\ub2e4.")}),[l,c]),k=Object(r.useCallback)((function(t){g(c.LocalModel.createMocktest(5)),d(!0)}),[c]);return a.a.createElement(xt,null,a.a.createElement(yt,null,0===c.currentPath.length?a.a.createElement(kt,null,a.a.createElement(jt,{add:!0},a.a.createElement("button",{onClick:y},"\uacfc\ubaa9 \ucd94\uac00")),c.subjects.map((function(t,e){return a.a.createElement(jt,{key:"subjects-"+t.id},a.a.createElement("div",null,t.name),a.a.createElement(Et,{onClick:w(t.id)},"\uc774\ub3d9"))}))):a.a.createElement(Ot,null,a.a.createElement(_t,null,a.a.createElement(Ct,null,(null===(t=c.info)||void 0===t?void 0:t.names)&&a.a.createElement(D,{name:c.info.names})),null===(e=c.info)||void 0===e?void 0:e.attrs.map((function(t,e){return a.a.createElement(Ct,{key:"Attr-"+e},t.getFullSentence())}))),a.a.createElement("hr",null),a.a.createElement(At,null,a.a.createElement(Mt,null,a.a.createElement("button",{onClick:E},"\uc815\ubcf4 \ucd94\uac00")),null===(n=c.info)||void 0===n?void 0:n.childs.map((function(t,e){return a.a.createElement(Mt,{key:"Info-"+e},t.names.join(" | "),a.a.createElement(Et,{danger:!0,onClick:x(e)},"\ud558\uc704 \uc815\ubcf4 \uc774\ub3d9"))}))),a.a.createElement(It,null,a.a.createElement(Pt,{disabled:0===(null===(o=c.info)||void 0===o?void 0:o.attrs.length),onClick:k},"\ubb38\uc81c \ud480\uae30"),a.a.createElement(ut,{modalIsOpen:f&&null!==v,setMockTestData:g,setModalIsOpen:d,mockTestData:v})))))};var St=function(){var t=m().LocalModel,e=b();return Object(r.useEffect)((function(){if(null===t.wp){t.getSubjectsList((function(t){e({type:"CHANGE_SUBJECTS",subjects:t})}))}}),[t,e,t.wp]),a.a.createElement("div",{className:"App",onClick:function(t){return t.preventDefault()}},a.a.createElement(y,null),a.a.createElement(Tt,null))};var Lt=function(){return a.a.createElement(p,null,a.a.createElement(St,null))};l.a.render(a.a.createElement(Lt,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.bf05c81a.chunk.js.map