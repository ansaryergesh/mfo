_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"43wv":function(e,t,n){"use strict";var r=n("rePB");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a={user:null,loggedIn:!1,authenticatingUser:!1,failedLogin:!1,error:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return c(c({},e),{},{user:t.payload,error:null,loggedIn:!0,authenticatingUser:!1});case"AUTHENTICATING_USER":return c(c({},e),{},{authenticatingUser:!0});case"AUTHENTICATED_USER":return c(c({},e),{},{authenticatingUser:!1});case"FAILED_LOGIN":return c(c({},e),{},{failedLogin:!0,error:t.payload,authenticatingUser:!1});case"LOGOUT_USER":return c(c({},e),{},{user:null,loggedIn:!1,authenticatingUser:!1,failedLogin:!1,error:null});default:return e}}},"DH+K":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i}));var r="DAY_CHANGE",o="MONEY_CHANGE",c="ADD_REGISTRATION",a="STEP_REGISTRATION",i="IS_LOADING"},Gkx9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/repeated",function(){return n("lTjh")}])},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,c,a){try{var i=e[c](a),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function i(e){r(a,o,c,i,s,"next",e)}function s(e){r(a,o,c,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return o}))},LeE0:function(e,t,n){"use strict";var r=n("o0o1"),o=n.n(r),c=n("HaE+"),a=n("1OyB"),i=n("vuIU"),s=n("JX7q"),u=n("Ji7U"),l=n("md7G"),d=n("foSv"),f=n("nKUr"),h=n("q1tI"),p=n("/MKj"),j=n("YFqc"),y=n.n(j),m=n("mS3u"),b=n("p46w"),g=n.n(b),O=n("vDqi"),U=n.n(O),v=n("nOHt"),_=n.n(v),F=n("GUC0"),x=n.n(F);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}n("SKMy");U.a.defaults.headers.common={Authorization:"bearer ".concat(g.a.get("token"))};var E=function(e){var t=e.children,n=e.className,r=e.href;return Object(f.jsx)(y.a,{href:r,children:Object(f.jsx)("a",{className:n,children:t})})},w=function(e){Object(u.a)(n,e);var t=N(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={money:r.props.moneyVal,day:r.props.dayVal,dayMoreThirty:!1,showMessage:!1,repeatedLoading:!1},r.handleChangeMoney=r.handleChangeMoney.bind(Object(s.a)(r)),r.handleChangeDay=r.handleChangeDay.bind(Object(s.a)(r)),r.handleFocus=r.handleFocus.bind(Object(s.a)(r)),r.close=r.close.bind(Object(s.a)(r)),r.open=r.open.bind(Object(s.a)(r)),r.handleRepeatedZaim=r.handleRepeatedZaim.bind(Object(s.a)(r)),r}return Object(i.a)(n,[{key:"close",value:function(){this.setState({showMessage:!1})}},{key:"handleFocus",value:function(){}},{key:"handleRepeatedZaim",value:function(){var e=Object(c.a)(o.a.mark((function e(t){var n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.UF_2=this.props.moneyVal,t.UF_3=this.props.dayVal,console.log(t),this.setState({repeatedLoading:!0}),e.next=6,U.a.post("https://api.money-men.kz/api/getRepeatedLoan",{UF2:t.UF_2,UF3:t.UF_3,UF4:t.UF_4,UF5:t.UF_5,UF6:t.UF_6,UF7:t.UF_7,UF8:t.UF_8,UF9:t.UF_9,UF10:t.UF_10,UF11:t.UF_11,UF12:t.UF_12,UF13:t.UF_13,UF16:t.UF_16,UF17:t.UF_17,UF18:t.UF_18,UF19:t.UF_19,UF20:t.UF_20,UF21:t.UF_21,UF22:t.UF_22,UF23:t.UF_23,UF24:t.UF_24,UF25:t.UF_25,UF26:t.UF_26,UF27:t.UF_27,UF28:t.UF_28,UF29:t.UF_29,UF30:t.UF_30,UF31:t.UF_31,UF32:t.UF_32,UF33:t.UF_33,UF34:t.UF_34,UF35:t.UF_35,UF36:t.UF_36,UF37:t.UF_37,UF38:t.UF_38,UF39:"0"==t.UF_39?0:t.UF_39.slice(1,-1),UF40:"0"==t.UF_40?0:t.UF_40.slice(1,-1),UF41:"0"==t.UF_41?0:t.UF_41.slice(1,-1),UF42:t.UF_42,UF43:t.UF_43,UF44:t.UF_44,UF45:t.UF_45,UF46:t.UF_46,UF47:t.UF_47},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(g.a.get("token")),Accept:"application/json"}}).then((function(e){n.setState({repeatedLoading:!1}),!0===e.data.success?x()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e","success").then((function(){_.a.push("/cabinet/loans")})):x()("Oops!","".concat(e.errors),"error")})).catch((function(e){console.log(e.message)}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"open",value:function(){this.setState({showModal:!0})}},{key:"handleChangeMoney",value:function(e){this.setState({money:e.target.value}),this.props.changingMoney(e.target.value)}},{key:"handleChangeDay",value:function(e){this.setState({day:e.target.value}),e.target.value>30?this.props.changingDay(30):this.props.changingDay(e.target.value)}},{key:"render",value:function(){var e=this,t=Math.round(100*Math.floor(this.props.moneyVal*(1+this.props.dayVal/100*2)/100)),n=Math.round(100*Math.floor(1.15*this.props.moneyVal/100)),r=n-this.props.moneyVal,o=n-this.props.moneyVal;return Object(f.jsxs)("div",{className:"calculator-band row ",onClick:this.handleFocus,children:[Object(f.jsxs)("div",{className:"progress-bars col-md-4",children:[Object(f.jsxs)("div",{id:"money",className:"money",children:[Object(f.jsx)("input",{id:"money-input",className:"range",type:"range",min:"10000",max:"135000",step:"1000",value:this.state.money,onChange:this.handleChangeMoney}),Object(f.jsxs)("div",{className:"text mt-3 d-flex justify-content-between",children:[Object(f.jsx)("p",{children:"10 000"}),Object(f.jsx)("p",{children:"135 000"})]})]}),Object(f.jsxs)("div",{id:"day",className:"day",children:[Object(f.jsx)("input",{type:"range",min:15,max:30,step:1,id:"day-input",className:"range",value:this.state.day,onChange:this.handleChangeDay}),Object(f.jsxs)("div",{className:"text mt-3 d-flex justify-content-between",children:[Object(f.jsx)("p",{children:"15 \u0434\u043d\u0435\u0439"}),Object(f.jsx)("p",{children:"30 \u0434\u043d\u0435\u0439"})]})]}),this.state.repeatedLoading?Object(f.jsx)("div",{className:"modelLoader"}):Object(f.jsx)("div",{className:"modelLoader loaded"}),Object(f.jsx)("button",{className:"calculator-take repeatedBtn",onClick:function(){return e.handleRepeatedZaim(e.props.userReducer.user)},children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"}),Object(f.jsx)("h5",{className:"text-center mt-3 mb-3 availableDay",style:{display:30===this.props.dayVal?"block":"none"},children:"\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0412\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0441\u0440\u043e\u043a \u043c\u0435\u0436\u0434\u0443 15 \u0438 30 \u0434\u043d\u044f\u043c\u0438"}),Object(f.jsxs)(E,{href:"/get_money",children:[" ",Object(f.jsx)("button",{className:"takebtn calculator-take",onClick:this.open,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"})]})]}),Object(f.jsxs)("div",{className:"calculator-info col-md-8",children:[Object(f.jsxs)("div",{className:"main-info",children:[Object(f.jsxs)("p",{className:"text-center",children:["\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438 (\u0442\u0433) ",Object(f.jsx)("b",{id:"summa",children:this.props.moneyVal})]}),Object(f.jsxs)("p",{className:"text-center ",children:["\u0421\u0440\u043e\u043a (\u0434\u043d\u0435\u0439) ",Object(f.jsx)("b",{id:"dnei",children:this.props.dayVal})]}),Object(f.jsxs)("p",{className:"text-center ",children:["\u041a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443 ",Object(f.jsx)("b",{className:"vozvrat",children:t})]})]}),Object(f.jsxs)("div",{className:"secondary-info",children:[Object(f.jsx)("p",{className:"text-center head-p",children:"\u0412\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435:"}),Object(f.jsxs)("div",{className:"secondary-info--texts",children:[Object(f.jsxs)("div",{className:"box",children:[Object(f.jsx)("p",{className:"text-center",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0434\u043e\u043b\u0433"}),Object(f.jsxs)("p",{className:"d-inline-block red center-line",children:[t," "]}),Object(f.jsxs)("b",{id:"osnovnoi-dolg",children:[" \xa0 \xa0 ",n," \u0442\u0433"]})]}),Object(f.jsxs)("div",{className:"box",children:[Object(f.jsx)("p",{className:"text-center",children:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 "}),Object(f.jsxs)("p",{className:"d-inline-block red center-line",children:[2*r," "]}),Object(f.jsxs)("b",{id:"str",children:["\xa0 \xa0 ",r," \u0442\u0433"]})]}),Object(f.jsxs)("div",{className:"box",children:[Object(f.jsx)("p",{className:"text-center",children:"\u0412\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(f.jsxs)("p",{className:"d-inline-block red center-line",children:[2*o," "]}),Object(f.jsxs)("b",{id:"vozn",children:["\xa0 \xa0 ",o," \u0442\u0433"]})]})]})]})]})]})}}]),n}(h.Component);t.a=Object(p.connect)((function(e){return{moneyVal:e.moneyVal,dayVal:e.dayVal,userReducer:e.userReducer}}),(function(e){return{changingMoney:function(t){e(Object(m.b)(t))},changingDay:function(t){e(Object(m.a)(t))}}}))(w)},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,a=o(n("q1tI")),i=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,d={};var f=function(e,t){var n=c||(l?c=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function h(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),d[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",c=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),u=c.href,p=c.as,j=e.children,y=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof j&&(j=a.default.createElement("a",null,j));var O=a.Children.only(j),U=O&&"object"===typeof O&&O.ref,v=a.default.useRef(),_={ref:a.default.useCallback((function(e){(v.current&&(v.current(),v.current=void 0),t&&l&&e&&e.tagName&&(0,i.isLocalURL)(u))&&(d[u+"%"+p]||(v.current=f(e,(function(){h(n,u,p,{locale:"undefined"!==typeof g?g:n&&n.locale})}))));U&&("function"===typeof U?U(e):"object"===typeof U&&(U.current=e))}),[t,U,u,p,n,g]),onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,u,p,y,m,b,g)}};return t&&(_.onMouseEnter=function(e){(0,i.isLocalURL)(u)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),h(n,u,p,{priority:!0}))}),(e.passHref||"a"===O.type&&!("href"in O.props))&&(_.href=(0,i.addBasePath)((0,i.addLocale)(p,"undefined"!==typeof g?g:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(O,_)};t.default=p},hNt4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){var e,t=(new Date).getHours();return t<12?e="\ud83c\udf05  \u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e":t>=12&&t<=17?e="\ud83c\udf1e  \u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c":t>=17&&t<=24&&(e="\ud83c\udf07  \u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440"),e}},lTjh:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),o=n("vuIU"),c=n("Ji7U"),a=n("md7G"),i=n("foSv"),s=n("nKUr"),u=n("q1tI"),l=n.n(u),d=n("/MKj"),f=n("toLX"),h=(n("43wv"),n("hNt4")),p=n("LeE0"),j=n("nOHt"),y=n.n(j),m=(n("GUC0"),n("8Kt/")),b=n.n(m),g=n("vDqi"),O=n.n(g);function U(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var v=function(e){Object(c.a)(n,e);var t=U(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={btnLoading:!1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then((function(t){e.setState({btnLoading:!0}),console.log(t),!1===t.data.success?y.a.push("/cabinet"):e.setState({btnLoading:!1})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)(b.a,{children:Object(s.jsx)("title",{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0437\u0430\u0439\u043c"})}),this.state.btnLoading?Object(s.jsx)("div",{className:"modelLoader"}):Object(s.jsx)("div",{className:"modelLoader loaded"}),Object(s.jsxs)("h3",{className:" text-center",children:[Object(h.a)(),"   ",this.props.userReducer.user.UF_5," ",this.props.userReducer.user.UF_6," !"]}),Object(s.jsx)("p",{className:"container mt-3 repeatedinfo alert alert-info",children:'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0440\u043e\u043a \u0438 \u0441\u0443\u043c\u043c\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438" \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0437\u0430\u0438\u043c'}),Object(s.jsx)("div",{className:"repeatBtn form-group"}),Object(s.jsx)("div",{className:"repeatedProgress",children:Object(s.jsx)(p.a,{})})]})}}]),n}(l.a.Component);t.default=Object(f.a)(Object(d.connect)((function(e){return{userReducer:e.userReducer}}))(v))},mS3u:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return b})),n.d(t,"e",(function(){return g}));var r=n("DH+K"),o=n("nOHt"),c=n.n(o),a=function(e){return{type:r.d,payload:e}};function i(e){return String(e).replace(/[^A-Z0-9]/g,"")}var s=function(e){return{type:r.b,payload:e}},u=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},l=function(e){return{type:"ERROR_MESSAGE",payload:e}},d=function(){return{type:"EMPTY_MESSAGE"}},f=function(e){return{type:"ADD_REGISTRATION",payload:e}},h=function(e){return{type:"STEP_REGISTRATION",payload:e}},p=function(e){return{type:"IS_LOADING",payload:e}},j=function(e){return function(t){return t(d()),t(p(!0)),e.phone=i(e.phone),fetch("https://api.money-men.kz/api/registration_step_one",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){return t(f(e))})).then((function(e){return t(p(!1))})).then((function(e){return t(h(1))})).then((function(e){localStorage.setItem("step",1)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(u(""))})).catch((function(e){return e.json().then((function(e){t(l(void 0!==e.errors.iin?"\u0418\u041d\u041d \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f! ":"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")),setTimeout((function(){var t;(t=e.errors)&&t.iin?c.a.push("/login"):console.log("not working")}),3e3)}))})).then((function(){return t(p(!1))}))}};var y=function(e){return function(t){return t(d()),t(p(!0)),e.source="icredit1",localStorage.getItem("utm_source")&&(e.source=localStorage.getItem("utm_source")+"_1"),fetch("https://api.money-men.kz/api/check_sms_code",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.access_token)})).then((function(e){return t(f(""))})).then((function(e){return t(h(2))})).then((function(){return t(d())})).then((function(e){localStorage.setItem("step",2)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(p(!1))})).catch((function(e){return e.json().then((function(e){return t(l("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u0434 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}))})).then((function(){return t(p(!1))}))}},m=function(e){return function(t){return t(p(!0)),e.relative_phone_number=i(e.relative_phone_number),e.additional_contact_phone=i(e.additional_contact_phone),fetch("https://api.money-men.kz/api/registration_step_two",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(p(!1))})).then((function(e){return t(h(3))})).then((function(){return t(d())})).then((function(e){localStorage.setItem("step",3)})).then((function(e){return window.scrollTo(0,0)})).catch((function(e){return e.json().then((function(e){return t(l(e.errors.relative_name||e.errors.relative_last_name||e.errors.relative_phone_number||e.errors.apartment||e.message))}))})).then((function(){return t(p(!1))}))}},b=function(e){return function(t){return t(p(!0)),e.card_number=i(e.card_number),fetch("https://api.money-men.kz/api/last_step",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(u("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"))})).then((function(e){return setTimeout((function(){t(h(0))}),6e3)})).then((function(e){return t(p(!1))})).then((function(e){return setTimeout((function(){localStorage.clear()}),5e3)})).then((function(e){return c.a.push("/thanks")})).catch((function(e){return e.json().then((function(e){return t(l(e.errors.id_card_number?"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.iban_account||e.errors.card_number||e.errors||null))}))})).then((function(){return t(p(!1))}))}};var g=function(e){return function(t){return t({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return t({type:"DATE_FAILED",payload:e.message})}))}}},toLX:function(e,t,n){"use strict";var r=n("1OyB"),o=n("vuIU"),c=n("Ji7U"),a=n("md7G"),i=n("foSv"),s=n("nKUr"),u=n("q1tI"),l=n.n(u),d=n("/MKj"),f=n("nOHt"),h=n.n(f),p=n("w18f"),j=n("p46w"),y=n.n(j);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}t.a=function(e){var t=function(t){Object(c.a)(a,t);var n=m(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){y.a.get("token")&&!this.props.loggedIn&&this.props.fetchCurrentUser(),y.a.get("token")||h.a.push("/login")}},{key:"render",value:function(){return y.a.get("token")&&this.props.loggedIn?Object(s.jsx)(e,{}):!y.a.get("token")||!this.props.authenticatingUser&&this.props.loggedIn?Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)("div",{className:"modelLoader"}),Object(s.jsx)("h2",{className:"text-center pt-5",children:"\u0412\u0440\u0435\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e"})]}):Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)("div",{className:"pd-5 pt-5"}),Object(s.jsx)("div",{className:"modelLoader"})]})}}]),a}(l.a.Component);return Object(d.connect)((function(e){return{loggedIn:e.userReducer.loggedIn,authenticatingUser:e.userReducer.authenticatingUser}}),p)(t)}},w18f:function(e,t,n){"use strict";n.r(t),n.d(t,"authenticatingUser",(function(){return i})),n.d(t,"setCurrentUser",(function(){return s})),n.d(t,"logoutUser",(function(){return u})),n.d(t,"loginUser",(function(){return l})),n.d(t,"fetchCurrentUser",(function(){return d}));var r=n("p46w"),o=n.n(r),c=n("nOHt"),a=n.n(c),i=function(){return{type:"AUTHENTICATING_USER"}},s=function(e){return{type:"SET_CURRENT_USER",payload:e}},u=function(){return{type:"LOGOUT_USER"}},l=function(e){return function(t){t({type:"AUTHENTICATING_USER"}),fetch("https://api.money-men.kz/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){o.a.set("token",e.access_token,{expires:2});var n=t(d());console.log(n),t({type:"SET_CURRENT_USER",payload:"user"}),a.a.push("/cabinet/loans")})).catch((function(e){e.message.includes("400")?t({type:"FAILED_LOGIN",payload:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):t({type:"FAILED_LOGIN",payload:e.message})}))}},d=function(){return function(e){e(i()),fetch("https://api.money-men.kz/api/getUserProfileFromBitrix",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(s(t))})).catch((function(e){o.a.remove("token"),console.log(e.message||"Error")}))}}}},[["Gkx9",0,1,2,3,4,5,6,7]]]);