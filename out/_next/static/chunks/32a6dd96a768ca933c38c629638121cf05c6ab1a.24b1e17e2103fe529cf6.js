(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,c,a,i){try{var o=e[a](i),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var i=e.apply(t,n);function o(e){r(i,c,a,o,s,"next",e)}function s(e){r(i,c,a,o,s,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return c}))},HbFR:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));n("EVdn");var r=n("p46w"),c=n.n(r);function a(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var i=function(){void 0!==c.a.get("utm_source")&&void 0!==c.a.get("utm_medium")&&void 0!==c.a.get("utm_campaign")&&void 0!==c.a.get("utm_term")&&void 0!==c.a.get("clickid")?(c.a.remove("utm_medium"),c.a.remove("utm_campaign"),c.a.remove("utm_source"),c.a.remove("utm_term"),c.a.remove("clickid")):void 0!==c.a.get("utm_source")&&void 0!==c.a.get("afclick")?(c.a.remove("utm_source"),c.a.remove("afclick")):void 0!==c.a.get("utm_source")&&void 0!==c.a.get("clickid")&&void 0!==c.a.get("wmid")?(c.a.remove("utm_source"),c.a.remove("clickid"),c.a.remove("wmid")):void 0!==c.a.get("utm_source")&&c.a.remove("utm_source")},o=function(){a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("utm_term").length>0&&a("clickid").length>0&&(i(),a("utm_source").includes("qaz")&&(localStorage.clear(),c.a.set("utm_source","qaz",{expires:1}),c.a.set("utm_medium",a("utm_medium"),{expires:1}),c.a.set("utm_campaign",a("utm_campaign"),{expires:1}),c.a.set("utm_term",a("utm_term"),{expires:1}),c.a.set("clickid",a("clickid"),{expires:1}))),a("utm_source").length>0&&a("afclick").length>0&&"loangate"===a("utm_source")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("afclick",a("afclick"),{expires:30})),a("utm_source").length>0&&a("cpa_click_id").length>0&&a("cpa_wm_id").length>0&&"leadgid"===a("utm_source")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("clickid",a("cpa_click_id"),{expires:30}),c.a.set("wmid",a("cpa_wm_id"),{expires:30})),a("utm_source").length>0&&a("v").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("web_id").length>0&&"doaff"===a("utm_source")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("utm_medium",a("utm_medium"),{expires:30}),c.a.set("utm_campaign",a("utm_campaign"),{expires:30}),c.a.set("utm_term",a("web_id"),{expires:30}),c.a.set("clickid",a("v"),{expires:30})),a("utm_source").length>0&&a("clickid").length>0&&"upsala"===a("utm_source")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("clickid",a("clickid"),{expires:30}),c.a.set("wmid","nothing",{expires:30})),a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("web_id").length>0&&a("click_id").length>0&&"goodaff"===a("utm_source")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("utm_medium",a("utm_medium"),{expires:30}),c.a.set("utm_campaign",a("utm_campaign"),{expires:30}),c.a.set("utm_term",a("web_id"),{expires:30}),c.a.set("clickid",a("click_id"),{expires:30})),a("utm_source").length>0&&a("utm_source").includes("sms")&&(localStorage.clear(),i(),c.a.set("utm_source",a("utm_source"),{expires:1})),a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("utm_term").length>0&&(i(),localStorage.clear(),c.a.set("clickid","notexist",{expires:30}),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("utm_medium",a("utm_medium"),{expires:30}),c.a.set("utm_campaign",a("utm_campaign"),{expires:30}),c.a.set("utm_term",a("utm_term"),{expires:30})),a("_branch_match_id").length>0&&a("utm_medium").length>0&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_medium"),{expires:30}),c.a.set("utm_medium",a("utm_medium"),{expires:30}),c.a.set("utm_campaign",a("utm_medium"),{expires:30}),c.a.set("utm_term",a("utm_medium"),{expires:30}),c.a.set("clickid",a("_branch_match_id"),{expires:30})),a("utm_source").length>0&&a("cid").length>0&&a("user").length>0&&"click2money"===a("utm_source")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_source"),{expires:30}),c.a.set("clickid",a("cid"),{expires:30}),c.a.set("wmid",a("user"),{expires:30})),a("utm_campaign").length>0&&a("clickid").length>0&&a("wm_id").length>0&&"guruleads"===a("utm_campaign")&&(i(),localStorage.clear(),c.a.set("utm_source",a("utm_campaign"),{expires:30}),c.a.set("clickid",a("clickid"),{expires:30}),c.a.set("wmid",a("wm_id"),{expires:30}))}},LeE0:function(e,t,n){"use strict";var r=n("o0o1"),c=n.n(r),a=n("HaE+"),i=n("1OyB"),o=n("vuIU"),s=n("JX7q"),u=n("Ji7U"),l=n("md7G"),m=n("foSv"),d=n("nKUr"),h=n("q1tI"),p=n("/MKj"),_=n("YFqc"),f=n.n(_),g=n("mS3u"),j=n("p46w"),b=n.n(j),y=n("vDqi"),x=n.n(y),F=n("nOHt"),U=n.n(F),v=n("GUC0"),O=n.n(v);function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(m.a)(e);if(t){var c=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}x.a.defaults.headers.common={Authorization:"bearer ".concat(b.a.get("token"))};var w=function(e){var t=e.children,n=e.className,r=e.href;return Object(d.jsx)(f.a,{href:r,children:Object(d.jsx)("a",{className:n,children:t})})},S=function(e){Object(u.a)(n,e);var t=k(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={money:r.props.moneyVal,day:r.props.dayVal,dayMoreThirty:!1,showMessage:!1,repeatedLoading:!1},r.handleChangeMoney=r.handleChangeMoney.bind(Object(s.a)(r)),r.handleChangeDay=r.handleChangeDay.bind(Object(s.a)(r)),r.handleFocus=r.handleFocus.bind(Object(s.a)(r)),r.close=r.close.bind(Object(s.a)(r)),r.open=r.open.bind(Object(s.a)(r)),r.handleRepeatedZaim=r.handleRepeatedZaim.bind(Object(s.a)(r)),r}return Object(o.a)(n,[{key:"close",value:function(){this.setState({showMessage:!1})}},{key:"handleFocus",value:function(){}},{key:"handleRepeatedZaim",value:function(){var e=Object(a.a)(c.a.mark((function e(t){var n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.UF_2=this.props.moneyVal,t.UF_3=this.props.dayVal,console.log(t),this.setState({repeatedLoading:!0}),e.next=6,x.a.post("https://api.money-men.kz/api/getRepeatedLoan",{UF2:t.UF_2,UF3:t.UF_3,UF4:t.UF_4,UF5:t.UF_5,UF6:t.UF_6,UF7:t.UF_7,UF8:t.UF_8,UF9:t.UF_9,UF10:t.UF_10,UF11:t.UF_11,UF12:t.UF_12,UF13:t.UF_13,UF16:t.UF_16,UF17:t.UF_17,UF18:t.UF_18,UF19:t.UF_19,UF20:t.UF_20,UF21:t.UF_21,UF22:t.UF_22,UF23:t.UF_23,UF24:t.UF_24,UF25:t.UF_25,UF26:t.UF_26,UF27:t.UF_27,UF28:t.UF_28,UF29:t.UF_29,UF30:t.UF_30,UF31:t.UF_31,UF32:t.UF_32,UF33:t.UF_33,UF34:t.UF_34,UF35:t.UF_35,UF36:t.UF_36,UF37:t.UF_37,UF38:t.UF_38,UF39:"0"==t.UF_39?0:t.UF_39.slice(1,-1),UF40:"0"==t.UF_40?0:t.UF_40.slice(1,-1),UF41:"0"==t.UF_41?0:t.UF_41.slice(1,-1),UF42:t.UF_42,UF43:t.UF_43,UF44:t.UF_44,UF45:t.UF_45,UF46:t.UF_46,UF47:t.UF_47},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(b.a.get("token")),Accept:"application/json"}}).then((function(e){n.setState({repeatedLoading:!1}),!0===e.data.success?O()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0417\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e","success").then((function(){U.a.push("/cabinet/loans")})):O()("Oops!","".concat(e.errors||"\u0423 \u0432\u0430\u0441 \u0430\u043d\u043a\u0435\u0442\u0430 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430 \u043d\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430 WhatsApp \u0438\u043b\u0438 \u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u043d\u0430 \u043d\u043e\u043c\u0435\u0440 +7 727 250 15 00"),"error")})).catch((function(e){console.log(e.message)}));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"open",value:function(){this.setState({showModal:!0})}},{key:"handleChangeMoney",value:function(e){this.setState({money:e.target.value}),this.props.changingMoney(e.target.value)}},{key:"handleChangeDay",value:function(e){this.setState({day:e.target.value}),e.target.value>30?this.props.changingDay(30):this.props.changingDay(e.target.value)}},{key:"render",value:function(){var e=this,t=Math.round(100*Math.floor(this.props.moneyVal*(1+this.props.dayVal/100*2)/100)),n=Math.round(100*Math.floor(1.15*this.props.moneyVal/100)),r=n-this.props.moneyVal,c=n-this.props.moneyVal;return Object(d.jsxs)("div",{className:"calculator-band row ",onClick:this.handleFocus,children:[Object(d.jsxs)("div",{className:"progress-bars col-md-4",children:[Object(d.jsxs)("div",{id:"money",className:"money",children:[Object(d.jsx)("input",{id:"money-input",className:"range",type:"range",min:"10000",max:"135000",step:"1000",value:this.state.money,onChange:this.handleChangeMoney}),Object(d.jsxs)("div",{className:"text mt-3 d-flex justify-content-between",children:[Object(d.jsx)("p",{children:"10 000"}),Object(d.jsx)("p",{children:"135 000"})]})]}),Object(d.jsxs)("div",{id:"day",className:"day",children:[Object(d.jsx)("input",{type:"range",min:15,max:30,step:1,id:"day-input",className:"range",value:this.state.day,onChange:this.handleChangeDay}),Object(d.jsxs)("div",{className:"text mt-3 d-flex justify-content-between",children:[Object(d.jsx)("p",{children:"15 \u0434\u043d\u0435\u0439"}),Object(d.jsx)("p",{children:"30 \u0434\u043d\u0435\u0439"})]})]}),this.state.repeatedLoading?Object(d.jsx)("div",{className:"modelLoader"}):Object(d.jsx)("div",{className:"modelLoader loaded"}),Object(d.jsx)("button",{className:"calculator-take repeatedBtn",onClick:function(){return e.handleRepeatedZaim(e.props.userReducer.user)},children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"}),Object(d.jsx)("h5",{className:"text-center mt-3 mb-3 availableDay",style:{display:30===this.props.dayVal?"block":"none"},children:"\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0412\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0441\u0440\u043e\u043a \u043c\u0435\u0436\u0434\u0443 15 \u0438 30 \u0434\u043d\u044f\u043c\u0438"}),Object(d.jsxs)(w,{href:"/get_money",children:[" ",Object(d.jsx)("button",{className:"takebtn calculator-take",onClick:this.open,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"})]})]}),Object(d.jsxs)("div",{className:"calculator-info col-md-8",children:[Object(d.jsxs)("div",{className:"main-info",children:[Object(d.jsxs)("p",{className:"text-center",children:["\u0421\u0443\u043c\u043c\u0430 \u043d\u0430 \u0440\u0443\u043a\u0438 (\u0442\u0433) ",Object(d.jsx)("b",{id:"summa",children:this.props.moneyVal})]}),Object(d.jsxs)("p",{className:"text-center ",children:["\u0421\u0440\u043e\u043a (\u0434\u043d\u0435\u0439) ",Object(d.jsx)("b",{id:"dnei",children:this.props.dayVal})]}),Object(d.jsxs)("p",{className:"text-center ",children:["\u041a \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0443 ",Object(d.jsx)("b",{className:"vozvrat",children:t})]})]}),Object(d.jsxs)("div",{className:"secondary-info",children:[Object(d.jsx)("p",{className:"text-center head-p",children:"\u0412\u043e\u0437\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435:"}),Object(d.jsxs)("div",{className:"secondary-info--texts",children:[Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("p",{className:"text-center",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0434\u043e\u043b\u0433"}),Object(d.jsxs)("p",{className:"d-inline-block red center-line",children:[t," "]}),Object(d.jsxs)("b",{id:"osnovnoi-dolg",children:[" \xa0 \xa0 ",n," \u0442\u0433"]})]}),Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("p",{className:"text-center",children:"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435 "}),Object(d.jsxs)("p",{className:"d-inline-block red center-line",children:[2*r," "]}),Object(d.jsxs)("b",{id:"str",children:["\xa0 \xa0 ",r," \u0442\u0433"]})]}),Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("p",{className:"text-center",children:"\u0412\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(d.jsxs)("p",{className:"d-inline-block red center-line",children:[2*c," "]}),Object(d.jsxs)("b",{id:"vozn",children:["\xa0 \xa0 ",c," \u0442\u0433"]})]})]})]})]})]})}}]),n}(h.Component);t.a=Object(p.connect)((function(e){return{moneyVal:e.moneyVal,dayVal:e.dayVal,userReducer:e.userReducer}}),(function(e){return{changingMoney:function(t){e(Object(g.b)(t))},changingDay:function(t){e(Object(g.a)(t))}}}))(S)},mS3u:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"k",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"j",(function(){return f})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return x})),n.d(t,"e",(function(){return F}));var r=n("DH+K"),c=n("nOHt"),a=n.n(c),i=n("p46w"),o=n.n(i),s=n("HbFR"),u=function(e){return{type:r.d,payload:e}};function l(e){return String(e).replace(/[^A-Z0-9]/g,"")}var m=function(e){return{type:r.b,payload:e}},d=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},h=function(e){return{type:"ERROR_MESSAGE",payload:e}},p=function(){return{type:"EMPTY_MESSAGE"}},_=function(e){return{type:"ADD_REGISTRATION",payload:e}},f=function(e){return{type:"STEP_REGISTRATION",payload:e}},g=function(e){return{type:"IS_LOADING",payload:e}},j=function(e){return function(t){return t(p()),t(g(!0)),e.phone=l(e.phone),e.last_name=e.last_name||"\u041d\u0435\u0442",fetch("https://api.money-men.kz/api/registration_step_one",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){return t(_(e))})).then((function(e){return t(g(!1))})).then((function(e){return t(f(1))})).then((function(e){localStorage.setItem("step",1)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(d(""))})).catch((function(e){return e.json().then((function(e){t(h(e.errors.iin?"\u0418\u041d\u041d \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f! ":e.errors.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":e.errors.phone?"\u041f\u043e\u043b\u044c\u0432\u043e\u0437\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.email||e.errors)),setTimeout((function(){var t;(t=e.errors)&&t.iin?document.location.replace("https://www.i-credit.kz/login"):console.log("not working")}),3e3)}))})).then((function(){return t(g(!1))}))}};var b=function(e){return function(t){return t(p()),t(g(!0)),e.source="i-credit1",void 0!==o.a.get("utm_source")&&(e.source=o.a.get("utm_source")+"_1"),fetch("https://api.money-men.kz/api/check_sms_code",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.access_token)})).then((function(e){return t(_(""))})).then((function(e){return t(f(2))})).then((function(){return t(p())})).then((function(e){localStorage.setItem("step",2)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(g(!1))})).catch((function(e){return e.json().then((function(e){return t(h("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u0434 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}))})).then((function(){return t(g(!1))}))}},y=function(e){return function(t){return t(g(!0)),e.relative_phone_number=l(e.relative_phone_number),e.additional_contact_phone=l(e.additional_contact_phone),fetch("https://api.money-men.kz/api/registration_step_two",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(g(!1))})).then((function(e){return t(f(3))})).then((function(){return t(p())})).then((function(e){localStorage.setItem("step",3)})).then((function(e){return window.scrollTo(0,0)})).catch((function(e){return e.json().then((function(e){return t(h(e.errors.relative_name||e.errors.relative_last_name||e.errors.relative_phone_number||e.errors.apartment||e.message))}))})).then((function(){return t(g(!1))}))}},x=function(e){return function(t){return t(g(!0)),e.card_number=l(e.card_number),console.log(e),fetch("https://api.money-men.kz/api/last_step",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(d("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"))})).then((function(e){return setTimeout((function(){t(f(0))}),6e3)})).then((function(e){return t(g(!1))})).then((function(e){return setTimeout((function(){localStorage.clear()}),5e3)})).then((function(e){return a.a.push("/thanks")})).then((function(e){return Object(s.b)()})).catch((function(e){return e.json().then((function(e){return t(h(e.errors.id_card_number?"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.iban_account||e.errors.card_number||e.errors||null))}))})).then((function(){return t(g(!1))}))}};var F=function(e){return function(t){return t({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return t({type:"DATE_FAILED",payload:e.message})}))}}}}]);