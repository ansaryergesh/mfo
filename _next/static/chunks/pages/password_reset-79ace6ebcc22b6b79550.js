_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"2m+V":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password_reset",function(){return n("zOTV")}])},"DH+K":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return o}));var r="DAY_CHANGE",i="MONEY_CHANGE",a="ADD_REGISTRATION",c="STEP_REGISTRATION",o="IS_LOADING"},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,i,a,c){try{var o=e[a](c),u=o.value}catch(s){return void n(s)}o.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var c=e.apply(t,n);function o(e){r(c,i,a,o,u,"next",e)}function u(e){r(c,i,a,o,u,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return i}))},HbFR:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));n("EVdn");var r=n("p46w"),i=n.n(r);function a(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var c=function(){void 0!==i.a.get("utm_source")&&void 0!==i.a.get("utm_medium")&&void 0!==i.a.get("utm_campaign")&&void 0!==i.a.get("utm_term")&&void 0!==i.a.get("clickid")?(i.a.remove("utm_medium"),i.a.remove("utm_campaign"),i.a.remove("utm_source"),i.a.remove("utm_term"),i.a.remove("clickid")):void 0!==i.a.get("utm_source")&&void 0!==i.a.get("afclick")?(i.a.remove("utm_source"),i.a.remove("afclick")):void 0!==i.a.get("utm_source")&&void 0!==i.a.get("clickid")&&void 0!==i.a.get("wmid")?(i.a.remove("utm_source"),i.a.remove("clickid"),i.a.remove("wmid")):void 0!==i.a.get("utm_source")&&i.a.remove("utm_source")},o=function(){a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("utm_term").length>0&&a("clickid").length>0&&(c(),a("utm_source").includes("qaz")&&(localStorage.clear(),i.a.set("utm_source","qaz",{expires:1}),i.a.set("utm_medium",a("utm_medium"),{expires:1}),i.a.set("utm_campaign",a("utm_campaign"),{expires:1}),i.a.set("utm_term",a("utm_term"),{expires:1}),i.a.set("clickid",a("clickid"),{expires:1}))),a("utm_source").length>0&&a("afclick").length>0&&"loangate"===a("utm_source")&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("afclick",a("afclick"),{expires:30})),a("utm_source").length>0&&a("cpa_click_id").length>0&&a("cpa_wm_id").length>0&&"leadgid"===a("utm_source")&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("clickid",a("cpa_click_id"),{expires:30}),i.a.set("wmid",a("cpa_wm_id"),{expires:30})),a("utm_source").length>0&&a("v").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("web_id").length>0&&"doaff"===a("utm_source")&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("utm_medium",a("utm_medium"),{expires:30}),i.a.set("utm_campaign",a("utm_campaign"),{expires:30}),i.a.set("utm_term",a("web_id"),{expires:30}),i.a.set("clickid",a("v"),{expires:30})),a("utm_source").length>0&&a("clickid").length>0&&"upsala"===a("utm_source")&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("clickid",a("clickid"),{expires:30}),i.a.set("wmid","nothing",{expires:30})),a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("web_id").length>0&&a("click_id").length>0&&"goodaff"===a("utm_source")&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("utm_medium",a("utm_medium"),{expires:30}),i.a.set("utm_campaign",a("utm_campaign"),{expires:30}),i.a.set("utm_term",a("web_id"),{expires:30}),i.a.set("clickid",a("click_id"),{expires:30})),a("utm_source").length>0&&a("utm_source").includes("sms")&&(localStorage.clear(),c(),i.a.set("utm_source",a("utm_source"),{expires:1})),a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("utm_term").length>0&&(c(),localStorage.clear(),i.a.set("clickid","notexist",{expires:30}),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("utm_medium",a("utm_medium"),{expires:30}),i.a.set("utm_campaign",a("utm_campaign"),{expires:30}),i.a.set("utm_term",a("utm_term"),{expires:30})),a("_branch_match_id").length>0&&a("utm_medium").length>0&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_medium"),{expires:30}),i.a.set("utm_medium",a("utm_medium"),{expires:30}),i.a.set("utm_campaign",a("utm_medium"),{expires:30}),i.a.set("utm_term",a("utm_medium"),{expires:30}),i.a.set("clickid",a("_branch_match_id"),{expires:30})),a("utm_source").length>0&&a("cid").length>0&&a("user").length>0&&"click2money"===a("utm_source")&&(c(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("clickid",a("cid"),{expires:30}),i.a.set("wmid",a("user"),{expires:30}))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var a,c=i(n("q1tI")),o=n("elyg"),u=n("nOHt"),s=new Map,l=window.IntersectionObserver,m={};var d=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function f(e,t,n,r){(0,o.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),m[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),i=n&&n.pathname||"/",a=c.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,o.resolveHref)(i,e.as):c||a}}),[i,e.href,e.as]),s=a.href,p=a.as,h=e.children,g=e.replace,_=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var j=c.Children.only(h),k=j&&"object"===typeof j&&j.ref,y=c.default.useRef(),x={ref:c.default.useCallback((function(e){(y.current&&(y.current(),y.current=void 0),t&&l&&e&&e.tagName&&(0,o.isLocalURL)(s))&&(m[s+"%"+p]||(y.current=d(e,(function(){f(n,s,p,{locale:"undefined"!==typeof b?b:n&&n.locale})}))));k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[t,k,s,p,n,b]),onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:a,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,s,p,g,_,v,b)}};return t&&(x.onMouseEnter=function(e){(0,o.isLocalURL)(s)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(n,s,p,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(x.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof b?b:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(j,x)};t.default=p},mS3u:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"k",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return k})),n.d(t,"e",(function(){return y}));var r=n("DH+K"),i=n("nOHt"),a=n.n(i),c=n("p46w"),o=n.n(c),u=n("HbFR"),s=function(e){return{type:r.d,payload:e}};function l(e){return String(e).replace(/[^A-Z0-9]/g,"")}var m=function(e){return{type:r.b,payload:e}},d=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},f=function(e){return{type:"ERROR_MESSAGE",payload:e}},p=function(){return{type:"EMPTY_MESSAGE"}},h=function(e){return{type:"ADD_REGISTRATION",payload:e}},g=function(e){return{type:"STEP_REGISTRATION",payload:e}},_=function(e){return{type:"IS_LOADING",payload:e}},v=function(e){return function(t){return t(p()),t(_(!0)),e.phone=l(e.phone),fetch("https://api.money-men.kz/api/registration_step_one",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){return t(h(e))})).then((function(e){return t(_(!1))})).then((function(e){return t(g(1))})).then((function(e){localStorage.setItem("step",1)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(d(""))})).catch((function(e){return e.json().then((function(e){t(f(e.errors.iin?"\u0418\u041d\u041d \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f! ":e.errors.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":e.errors.phone?"\u041f\u043e\u043b\u044c\u0432\u043e\u0437\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.email||e.errors)),setTimeout((function(){var t;(t=e.errors)&&t.iin?document.location.replace("https://www.i-credit.kz/login"):console.log("not working")}),3e3)}))})).then((function(){return t(_(!1))}))}};var b=function(e){return function(t){return t(p()),t(_(!0)),e.source="i-credit1",void 0!==o.a.get("utm_source")&&(e.source=o.a.get("utm_source")+"_1"),fetch("https://api.money-men.kz/api/check_sms_code",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.access_token)})).then((function(e){return t(h(""))})).then((function(e){return t(g(2))})).then((function(){return t(p())})).then((function(e){localStorage.setItem("step",2)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(_(!1))})).catch((function(e){return e.json().then((function(e){return t(f("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u0434 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}))})).then((function(){return t(_(!1))}))}},j=function(e){return function(t){return t(_(!0)),e.relative_phone_number=l(e.relative_phone_number),e.additional_contact_phone=l(e.additional_contact_phone),fetch("https://api.money-men.kz/api/registration_step_two",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(_(!1))})).then((function(e){return t(g(3))})).then((function(){return t(p())})).then((function(e){localStorage.setItem("step",3)})).then((function(e){return window.scrollTo(0,0)})).catch((function(e){return e.json().then((function(e){return t(f(e.errors.relative_name||e.errors.relative_last_name||e.errors.relative_phone_number||e.errors.apartment||e.message))}))})).then((function(){return t(_(!1))}))}},k=function(e){return function(t){return t(_(!0)),e.card_number=l(e.card_number),console.log(e),fetch("https://api.money-men.kz/api/last_step",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(d("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"))})).then((function(e){return setTimeout((function(){t(g(0))}),6e3)})).then((function(e){return t(_(!1))})).then((function(e){return setTimeout((function(){localStorage.clear()}),5e3)})).then((function(e){return a.a.push("/thanks")})).then((function(e){return Object(u.b)()})).catch((function(e){return e.json().then((function(e){return t(f(e.errors.id_card_number?"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.iban_account||e.errors.card_number||e.errors||null))}))})).then((function(){return t(_(!1))}))}};var y=function(e){return function(t){return t({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return t({type:"DATE_FAILED",payload:e.message})}))}}},ppuw:function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"n",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"l",(function(){return o})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return m})),n.d(t,"k",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"b",(function(){return g}));var r=function(e){return e&&e.length},i=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},a=function(e){return!1===/[a-zA-Z0-9_"*/]/i.test(e)},c=function(e){if(e&&12!==e.length)return!1;if(!e)return!1;for(var t=[1,2,3,4,5,6,7,8,9,10,11],n=[3,4,5,6,7,8,9,10,11,1,2],r=[],i=0,a=0;a<12;a++)r[a]=parseInt(e.substring(a,a+1)),a<11&&(i+=r[a]*t[a]);if(10==(i%=11)){i=0;for(a=0;a<11;a++)i+=r[a]*n[a];i%=11}return i==r[11]},o=function(e){var t=String(e).replace(/[^A-Z0-9]/g,""),n=t.match(/^(\d{4})(\d{3})(\d{4})$/);if(!n||11!==t.length)return!1;var r=n[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(e){return e.id==r})).length>0},u=function(e){var t=String(e).toUpperCase().replace(/[^A-Z0-9]/g,""),n=t.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/);if(!n||20!==t.length)return"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430";var r=n[3],i=[{id:"947",name:'\u0410\u041e "\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0411\u0430\u043d\u043a "\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a"'},{id:"826",name:'\u0410\u041e "\u0410\u0422\u0424\u0411\u0430\u043d\u043a"'},{id:"949",name:'\u0410\u041e "Altyn Bank" (\u0414\u0411 China Citic Bank Corporation Limited) '},{id:"913",name:'\u0410\u041e \u0414\u0411 "\u0411\u0410\u041d\u041a \u041a\u0418\u0422\u0410\u042f \u0412 \u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d\u0415"'},{id:"722",name:'\u0410\u041e "KASPI BANK"'},{id:"766",name:'\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u043d\u044b\u0445 \u0411\u0443\u043c\u0430\u0433"'},{id:"832",name:'\u0410\u041e "\u0421\u0438\u0442\u0438\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"907",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0420\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"700",name:"\u0415\u0412\u0420\u0410\u0417\u0418\u0419\u0421\u041a\u0418\u0419 \u0411\u0410\u041d\u041a \u0420\u0410\u0417\u0412\u0418\u0422\u0418\u042f"},{id:"948",name:'\u0410\u041e "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a"'},{id:"009",name:'\u041d\u0410\u041e \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f "\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0433\u0440\u0430\u0436\u0434\u0430\u043d"'},{id:"972",name:'\u0410\u041e "\u0416\u0438\u043b\u0441\u0442\u0440\u043e\u0439\u0441\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"246",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a "Al Hilal"'},{id:"601",name:'\u0410\u041e "\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"930",name:'\u0410\u041e "\u0422\u043e\u0440\u0433\u043e\u0432\u043e-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0438\u0442\u0430\u044f \u0432 \u0433. \u0410\u043b\u043c\u0430\u0442\u044b"'},{id:"550",name:"\u0433.\u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u0435\u0436\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a"},{id:"886",name:'\u0414\u0411 \u0410\u041e "\u0425\u043e\u0443\u043c \u041a\u0440\u0435\u0434\u0438\u0442 \u044d\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441 \u0411\u0430\u043d\u043a"'},{id:"965",name:'\u0410\u041e "ForteBank"'},{id:"856",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0426\u0435\u043d\u0442\u0440\u041a\u0440\u0435\u0434\u0438\u0442"'},{id:"927",name:'\u0410\u041e "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u0434\u043e\u0432\u0430\u044f \u0431\u0438\u0440\u0436\u0430"'},{id:"821",name:'\u0410\u041e "\u0411\u0430\u043d\u043a "Bank RBK"'},{id:"224",name:'\u0420\u0413\u041f "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u043c\u0435\u0436\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u041d\u0411\u0420\u041a"'},{id:"070",name:'\u0420\u0413\u0423 "\u041a\u043e\u043c\u0438\u0442\u0435\u0442 \u043a\u0430\u0437\u043d\u0430\u0447\u0435\u0439\u0441\u0442\u0432\u0430 \u041c\u0438\u043d\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0420\u041a"'},{id:"563",name:'\u0410\u041e "\u041a\u0410\u0417\u041f\u041e\u0427\u0422\u0410"'},{id:"551",name:'\u0410\u041e "\u0411\u0430\u043d\u043a Kassa Nova" (\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0431\u0430\u043d\u043a \u0410\u041e "ForteBank")'},{id:"885",name:'\u0410\u041e "\u0414\u0411 "\u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d-\u0417\u0418\u0420\u0410\u0410\u0422 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0428\u041d\u041b \u0411\u0410\u041d\u041a"'},{id:"774",name:'\u0410\u041e "AsiaCredit Bank (\u0410\u0437\u0438\u044f\u041a\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043d\u043a)" '},{id:"553",name:'\u0410\u041e \u0414\u0411 "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0430" \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435'},{id:"147",name:'"\u0411\u0430\u043d\u043a-\u043a\u0430\u0441\u0442\u043e\u0434\u0438\u0430\u043d \u0410\u041e  "\u0415\u041d\u041f\u0424"'},{id:"125",name:"\u0420\u0413\u0423 \u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{id:"849",name:'\u0410\u041e "\u041d\u0443\u0440\u0431\u0430\u043d\u043a"'},{id:"914",name:'\u0414\u0411 \u0410\u041e "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"'},{id:"435",name:'\u0410\u041e "\u0428\u0438\u043d\u0445\u0430\u043d \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"781",name:'\u0410\u041e "Capital Bank Kazakhstan"'},{id:"620",name:'\u0410\u041e "Tengri Bank"'},{id:"998",name:'\u0410\u041e "First Heartland Jysan Bank"'},{id:"432",name:"\u0414\u041e \u0410\u041e \u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)"},{id:"896",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0431\u0430\u043d\u043a "\u0417\u0430\u043c\u0430\u043d-\u0411\u0430\u043d\u043a"'},""].filter((function(e){return e.id==r}));return i.length>0?i[0].name:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"},s=function(e){var t=String(e).toUpperCase().replace(/[^A-Z0-9]/g,""),n=t.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/);if(!n||20!==t.length)return!1;var r=n[3];return[{id:"947",name:'\u0410\u041e "\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0411\u0430\u043d\u043a "\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a"'},{id:"826",name:'\u0410\u041e "\u0410\u0422\u0424\u0411\u0430\u043d\u043a"'},{id:"949",name:'\u0410\u041e "Altyn Bank" (\u0414\u0411 China Citic Bank Corporation Limited) '},{id:"913",name:'\u0410\u041e \u0414\u0411 "\u0411\u0410\u041d\u041a \u041a\u0418\u0422\u0410\u042f \u0412 \u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d\u0415"'},{id:"722",name:'\u0410\u041e "KASPI BANK"'},{id:"766",name:'\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u043d\u044b\u0445 \u0411\u0443\u043c\u0430\u0433"'},{id:"832",name:'\u0410\u041e "\u0421\u0438\u0442\u0438\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"907",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0420\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"700",name:"\u0415\u0412\u0420\u0410\u0417\u0418\u0419\u0421\u041a\u0418\u0419 \u0411\u0410\u041d\u041a \u0420\u0410\u0417\u0412\u0418\u0422\u0418\u042f"},{id:"948",name:'\u0410\u041e "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a"'},{id:"009",name:'\u041d\u0410\u041e \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f "\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0433\u0440\u0430\u0436\u0434\u0430\u043d"'},{id:"972",name:'\u0410\u041e "\u0416\u0438\u043b\u0441\u0442\u0440\u043e\u0439\u0441\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"246",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a "Al Hilal"'},{id:"601",name:'\u0410\u041e "\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"930",name:'\u0410\u041e "\u0422\u043e\u0440\u0433\u043e\u0432\u043e-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0438\u0442\u0430\u044f \u0432 \u0433. \u0410\u043b\u043c\u0430\u0442\u044b"'},{id:"550",name:"\u0433.\u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u0435\u0436\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a"},{id:"886",name:'\u0414\u0411 \u0410\u041e "\u0425\u043e\u0443\u043c \u041a\u0440\u0435\u0434\u0438\u0442 \u044d\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441 \u0411\u0430\u043d\u043a"'},{id:"965",name:'\u0410\u041e "ForteBank"'},{id:"856",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0426\u0435\u043d\u0442\u0440\u041a\u0440\u0435\u0434\u0438\u0442"'},{id:"927",name:'\u0410\u041e "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u0434\u043e\u0432\u0430\u044f \u0431\u0438\u0440\u0436\u0430"'},{id:"821",name:'\u0410\u041e "\u0411\u0430\u043d\u043a "Bank RBK"'},{id:"224",name:'\u0420\u0413\u041f "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u043c\u0435\u0436\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u041d\u0411\u0420\u041a"'},{id:"070",name:'\u0420\u0413\u0423 "\u041a\u043e\u043c\u0438\u0442\u0435\u0442 \u043a\u0430\u0437\u043d\u0430\u0447\u0435\u0439\u0441\u0442\u0432\u0430 \u041c\u0438\u043d\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0420\u041a"'},{id:"563",name:'\u0410\u041e "\u041a\u0410\u0417\u041f\u041e\u0427\u0422\u0410"'},{id:"551",name:'\u0410\u041e "\u0411\u0430\u043d\u043a Kassa Nova" (\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0431\u0430\u043d\u043a \u0410\u041e "ForteBank")'},{id:"885",name:'\u0410\u041e "\u0414\u0411 "\u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d-\u0417\u0418\u0420\u0410\u0410\u0422 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0428\u041d\u041b \u0411\u0410\u041d\u041a"'},{id:"774",name:'\u0410\u041e "AsiaCredit Bank (\u0410\u0437\u0438\u044f\u041a\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043d\u043a)" '},{id:"553",name:'\u0410\u041e \u0414\u0411 "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0430" \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435'},{id:"147",name:'"\u0411\u0430\u043d\u043a-\u043a\u0430\u0441\u0442\u043e\u0434\u0438\u0430\u043d \u0410\u041e  "\u0415\u041d\u041f\u0424"'},{id:"125",name:"\u0420\u0413\u0423 \u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{id:"849",name:'\u0410\u041e "\u041d\u0443\u0440\u0431\u0430\u043d\u043a"'},{id:"914",name:'\u0414\u0411 \u0410\u041e "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"'},{id:"435",name:'\u0410\u041e "\u0428\u0438\u043d\u0445\u0430\u043d \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"781",name:'\u0410\u041e "Capital Bank Kazakhstan"'},{id:"620",name:'\u0410\u041e "Tengri Bank"'},{id:"998",name:'\u0410\u041e "First Heartland Jysan Bank"'},{id:"432",name:"\u0414\u041e \u0410\u041e \u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)"},{id:"896",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0431\u0430\u043d\u043a "\u0417\u0430\u043c\u0430\u043d-\u0411\u0430\u043d\u043a"'},""].filter((function(e){return e.id==r})).length>0},l=function(e){if(10!==String(e).replace(/_/g,"").length)return!1;var t=new Date(e.substring(6,10)+"-"+e.substring(3,5)+"-"+e.substring(0,2));if("Invalid Date"==t)return!1;var n=new Date,r=n.getMonth()+1,i=n.getDate(),a=n.getFullYear(),c=t.getMonth()+1,o=t.getDate(),u=t.getFullYear();return!(u>a)&&(!(u<a-25)&&(u!==a||!(c===r&&o>i)&&!(c>r)))},m=function(e){if(10!==String(e).replace(/_/g,"").length)return!1;var t=new Date(e.substring(6,10)+"-"+e.substring(3,5)+"-"+e.substring(0,2));if("Invalid Date"==t)return!1;var n=new Date,r=(n.getMonth(),n.getDate(),n.getFullYear());t.getMonth(),t.getDate();return!(t.getFullYear()<r)},d=function(e){return/^[a-zA-Z\s]*$/.test(e)},f=function(e){return!(!e||2!==e.replace(/\s+$/,"").split(/\W+/).length)},p=function(e){return 9===String(e).replace(/_/g,"").length},h=function(e){var t=String(e).toUpperCase().replace(/[^0-9]/g,""),n=t.match(/^(\d{2})(\d{2})$/);return 4===t.length&&!(n[1]>12||n[2]<20)},g=function(e){if(/[^0-9-\s]+/.test(e))return!1;var t=0,n=!1;if(16!==(e=e.replace(/\D/g,"")).length)return!1;for(var r=e.length-1;r>=0;r--){var i=e.charAt(r),a=parseInt(i,10);n&&(a*=2)>9&&(a-=9),t+=a,n=!n}return t%10===0}},zOTV:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r),a=n("HaE+"),c=n("1OyB"),o=n("vuIU"),u=n("JX7q"),s=n("Ji7U"),l=n("md7G"),m=n("foSv"),d=n("nKUr"),f=n("q1tI"),p=n.n(f),h=(n("82Mt"),n("GObB")),g=n.n(h),_=n("vDqi"),v=n.n(_),b=n("KYPV"),j=n("/MKj"),k=n("YFqc"),y=n.n(k),x=n("ppuw"),O=n("mS3u"),w=n("nOHt"),S=n.n(w);function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(m.a)(e);if(t){var i=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var E=function(e){var t=e.children,n=e.className,r=e.href;return Object(d.jsx)(y.a,{href:r,children:Object(d.jsx)("a",{className:n,children:t})})},N=function(e){Object(s.a)(n,e);var t=A(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={btnLoading:!1,message:null,errorMessage:null},r.handleSubmit=r.handleSubmit.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"handleSubmit",value:function(){var e=Object(a.a)(i.a.mark((function e(t){var n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(x.n)(t.email)?(this.setState({errorMessage:null}),this.setState({btnLoading:!0}),v.a.post("https://api.money-men.kz/api/password/create",t).then((function(e){console.log(e),n.setState({btnLoading:!1}),S.a.push("/login"),n.props.successMessage(e.data.message)})).catch((function(e){n.setState({btnLoading:!1,errorMessage:e.response.data.message})}))):this.setState({errorMessage:"Email \u0430\u0434\u0440\u0435\u0441 \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsx)("section",{className:"otherPages",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("section",{className:"oplata feedback row",children:Object(d.jsxs)("div",{className:" oplate--form feedbackForm",children:[Object(d.jsx)("nav",{"aria-label":"container breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb text-center",children:[Object(d.jsx)("li",{className:"breadcrumb-item ",children:Object(d.jsx)(E,{className:"br-item",href:"/login",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"})]})}),Object(d.jsx)(b.c,{initialValues:{email:""},onSubmit:function(t){e.handleSubmit(t)},children:function(t){t.errors,t.touched,t.isValidating,t.isSubmitting;return Object(d.jsxs)(b.b,{className:"oplataform",children:[Object(d.jsx)("h2",{className:"text-center mb-5",children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"}),null!==e.state.message?Object(d.jsx)("div",{className:"alert alert-success",role:"alert",children:Object(d.jsxs)("strong",{children:[" ",e.state.message]})}):null,null!==e.state.errorMessage?Object(d.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(d.jsxs)("strong",{children:[" ",e.state.errorMessage]})}):null,Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("label",{htmlFor:"email",children:Object(d.jsx)("h2",{children:"Email \u0430\u0434\u0440\u0435\u0441:"})}),Object(d.jsx)(b.a,{name:"email",type:"text",placeholder:"\u0412\u0430\u0448 email \u0430\u0434\u0440\u0435\u0441"})]}),Object(d.jsx)("div",{className:"buttonForm",children:!0===e.state.btnLoading?Object(d.jsx)(g.a,{className:"loading",size:200,spinnerColor:"#ef2221",spinnerWidth:2,visible:!0}):Object(d.jsx)("button",{className:"loginbutton",type:"submit",children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})})]})}})]})})})})})}}]),n}(p.a.Component);t.default=Object(j.connect)(null,(function(e){return{successMessage:function(t){e(Object(O.k)(t))},emptyMessage:function(){e(Object(O.c)())}}}))(N)}},[["2m+V",0,1,9,2,3,4,5,8]]]);