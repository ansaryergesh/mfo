(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"DH+K":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return i}));var r="DAY_CHANGE",o="MONEY_CHANGE",c="ADD_REGISTRATION",u="STEP_REGISTRATION",i="IS_LOADING"},HbFR:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n("p46w"),o=n.n(r);function c(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var u=function(){void 0!==o.a.get("utm_source")&&void 0!==o.a.get("utm_medium")&&void 0!==o.a.get("utm_campaign")&&void 0!==o.a.get("utm_term")&&void 0!==o.a.get("clickid")?(o.a.remove("utm_medium"),o.a.remove("utm_campaign"),o.a.remove("utm_source"),o.a.remove("utm_term"),o.a.remove("clickid")):void 0!==o.a.get("utm_source")&&void 0!==o.a.get("afclick")?(o.a.remove("utm_source"),o.a.remove("afclick")):void 0!==o.a.get("utm_source")&&void 0!==o.a.get("clickid")&&void 0!==o.a.get("wmid")?(o.a.remove("utm_source"),o.a.remove("clickid"),o.a.remove("wmid")):void 0!==o.a.get("utm_source")&&o.a.remove("utm_source")},i=function(){c("utm_source").length>0&&c("utm_medium").length>0&&c("utm_campaign").length>0&&c("utm_term").length>0&&c("click_id").length>0&&(u(),c("utm_source").includes("qaz")&&(localStorage.clear(),o.a.set("utm_source","qaz",{expires:1}),o.a.set("utm_medium",c("utm_medium"),{expires:1}),o.a.set("utm_campaign",c("utm_campaign"),{expires:1}),o.a.set("utm_term",c("utm_term"),{expires:1}),o.a.set("clickid",c("clickid"),{expires:1})),c("utm_source").includes("finpublic")&&(localStorage.clear(),console.log(c("click_id")),o.a.set("clickid",c("click_id"),{expires:30}),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("utm_medium",c("utm_medium"),{expires:30}),o.a.set("utm_campaign",c("utm_campaign"),{expires:30}),o.a.set("utm_term",c("utm_term"),{expires:30}))),c("utm_source").length>0&&c("afclick").length>0&&"loangate"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("afclick",c("afclick"),{expires:30})),c("utm_source").length>0&&c("cpa_click_id").length>0&&c("cpa_wm_id").length>0&&"leadgid"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("clickid",c("cpa_click_id"),{expires:30}),o.a.set("wmid",c("cpa_wm_id"),{expires:30})),c("utm_source").length>0&&c("v").length>0&&c("utm_medium").length>0&&c("utm_campaign").length>0&&c("web_id").length>0&&"doaff"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("utm_medium",c("utm_medium"),{expires:30}),o.a.set("utm_campaign",c("utm_campaign"),{expires:30}),o.a.set("utm_term",c("web_id"),{expires:30}),o.a.set("clickid",c("v"),{expires:30})),c("utm_source").length>0&&c("clickid").length>0&&"upsala"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("clickid",c("clickid"),{expires:30}),o.a.set("wmid","nothing",{expires:30})),c("utm_source").length>0&&c("click_id").length>0&&"pdl-profit"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("clickid",c("click_id"),{expires:30}),o.a.set("wmid",c("web_id"),{expires:30})),c("utm_source").length>0&&c("utm_medium").length>0&&c("utm_campaign").length>0&&c("web_id").length>0&&c("click_id").length>0&&"goodaff"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("utm_medium",c("utm_medium"),{expires:30}),o.a.set("utm_campaign",c("utm_campaign"),{expires:30}),o.a.set("utm_term",c("web_id"),{expires:30}),o.a.set("clickid",c("click_id"),{expires:30})),c("utm_source").length>0&&c("utm_source").includes("sms")&&(localStorage.clear(),u(),o.a.set("utm_source",c("utm_source"),{expires:1})),c("utm_source").length>0&&c("utm_medium").length>0&&c("utm_campaign").length>0&&c("utm_term").length>0&&!c("utm_source").includes("finpublic")&&(u(),localStorage.clear(),o.a.set("clickid","notexist",{expires:30}),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("utm_medium",c("utm_medium"),{expires:30}),o.a.set("utm_campaign",c("utm_campaign"),{expires:30}),o.a.set("utm_term",c("utm_term"),{expires:30})),c("_branch_match_id").length>0&&c("utm_medium").length>0&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_medium"),{expires:30}),o.a.set("utm_medium",c("utm_medium"),{expires:30}),o.a.set("utm_campaign",c("utm_medium"),{expires:30}),o.a.set("utm_term",c("utm_medium"),{expires:30}),o.a.set("clickid",c("_branch_match_id"),{expires:30})),c("utm_source").length>0&&c("cid").length>0&&c("user").length>0&&"click2money"===c("utm_source")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("clickid",c("cid"),{expires:30}),o.a.set("wmid",c("user"),{expires:30})),c("utm_campaign").length>0&&c("clickid").length>0&&c("wm_id").length>0&&"guruleads"===c("utm_campaign")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_campaign"),{expires:30}),o.a.set("clickid",c("clickid"),{expires:30}),o.a.set("wmid",c("wm_id"),{expires:30})),c("utm_source").length>0&&c("utm_campaign").length>0&&c("utm_medium").length>0&&c("utm_source").includes("risk")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30})),c("affiliate_id").length>0&&c("transaction_id").length>0&&c("utm_source").length>0&&c("utm_source").includes("leadssu")&&(u(),localStorage.clear(),o.a.set("utm_source",c("utm_source"),{expires:30}),o.a.set("clickid",c("transaction_id"),{expires:30}),o.a.set("wmid",c("affiliate_id"),{expires:30}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,u=o(n("q1tI")),i=n("elyg"),a=n("nOHt"),s=new Map,l=window.IntersectionObserver,m={};var p=function(e,t){var n=c||(l?c=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),m[t+"%"+n]=!0)}var _=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),o=n&&n.pathname||"/",c=u.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],u=n[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),s=c.href,_=c.as,f=e.children,h=e.replace,g=e.shallow,v=e.scroll,k=e.locale;"string"===typeof f&&(f=u.default.createElement("a",null,f));var w=u.Children.only(f),x=w&&"object"===typeof w&&w.ref,y=u.default.useRef(),S={ref:u.default.useCallback((function(e){(y.current&&(y.current(),y.current=void 0),t&&l&&e&&e.tagName&&(0,i.isLocalURL)(s))&&(m[s+"%"+_]||(y.current=p(e,(function(){d(n,s,_,{locale:"undefined"!==typeof k?k:n&&n.locale})}))));x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[t,x,s,_,n,k]),onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,u,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:a}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,s,_,h,g,v,k)}};return t&&(S.onMouseEnter=function(e){(0,i.isLocalURL)(s)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(n,s,_,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(S.href=(0,i.addBasePath)((0,i.addLocale)(_,"undefined"!==typeof k?k:n&&n.locale,n&&n.defaultLocale))),u.default.cloneElement(w,S)};t.default=_},mS3u:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"k",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"j",(function(){return h})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return k})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return x})),n.d(t,"e",(function(){return y}));var r=n("DH+K"),o=n("nOHt"),c=n.n(o),u=n("p46w"),i=n.n(u),a=n("HbFR"),s=function(e){return{type:r.d,payload:e}};function l(e){return String(e).replace(/[^A-Z0-9]/g,"")}var m=function(e){return{type:r.b,payload:e}},p=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},d=function(e){return{type:"ERROR_MESSAGE",payload:e}},_=function(){return{type:"EMPTY_MESSAGE"}},f=function(e){return{type:"ADD_REGISTRATION",payload:e}},h=function(e){return{type:"STEP_REGISTRATION",payload:e}},g=function(e){return{type:"IS_LOADING",payload:e}},v=function(e){return function(t){return t(_()),t(g(!0)),e.phone=l(e.phone),e.last_name=e.last_name||"\u041d\u0435\u0442",fetch("https://api.money-men.kz/api/registration_step_one",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){return t(f(e))})).then((function(e){return t(g(!1))})).then((function(e){return t(h(1))})).then((function(e){localStorage.setItem("step",1)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(p(""))})).catch((function(e){return e.json().then((function(e){t(d(e.errors.iin?"\u0418\u041d\u041d \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f! ":e.errors.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":e.errors.phone?"\u041f\u043e\u043b\u044c\u0432\u043e\u0437\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.email||e.errors)),setTimeout((function(){var t;(t=e.errors)&&t.iin?document.location.replace("https://www.i-credit.kz/login"):console.log("not working")}),3e3)}))})).then((function(){return t(g(!1))}))}};var k=function(e){return function(t){return t(_()),t(g(!0)),e.source="i-credit1",void 0!==i.a.get("utm_source")&&(e.source=i.a.get("utm_source")+"_1"),fetch("https://api.money-men.kz/api/check_sms_code",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.access_token)})).then((function(e){return t(f(""))})).then((function(e){return t(h(2))})).then((function(){return t(_())})).then((function(e){localStorage.setItem("step",2)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(g(!1))})).catch((function(e){return e.json().then((function(e){return t(d("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u0434 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}))})).then((function(){return t(g(!1))}))}},w=function(e){return function(t){return t(g(!0)),e.relative_phone_number=l(e.relative_phone_number),e.additional_contact_phone=l(e.additional_contact_phone),fetch("https://api.money-men.kz/api/registration_step_two",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(g(!1))})).then((function(e){return t(h(3))})).then((function(){return t(_())})).then((function(e){localStorage.setItem("step",3)})).then((function(e){return window.scrollTo(0,0)})).catch((function(e){return e.json().then((function(e){return t(d(e.errors.relative_name||e.errors.relative_last_name||e.errors.relative_phone_number||e.errors.apartment||e.message))}))})).then((function(){return t(g(!1))}))}},x=function(e){return function(t){return t(g(!0)),e.card_number=l(e.card_number),console.log(e),fetch("https://api.money-men.kz/api/last_step",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(p("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"))})).then((function(e){return setTimeout((function(){t(h(0))}),6e3)})).then((function(e){return t(g(!1))})).then((function(e){return setTimeout((function(){localStorage.clear()}),5e3)})).then((function(e){return c.a.push("/thanks")})).then((function(e){return Object(a.b)()})).catch((function(e){return e.json().then((function(e){return t(d(e.errors.id_card_number?"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.iban_account||e.errors.card_number||e.errors||null))}))})).then((function(){return t(g(!1))}))}};var y=function(e){return function(t){return t({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return t({type:"DATE_FAILED",payload:e.message})}))}}}}]);