_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{HqXX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n("RyAk")}])},RyAk:function(e,t,n){"use strict";n.r(t);var c=n("nKUr"),r=(n("q1tI"),n("YFqc")),s=n.n(r),a=function(e){var t=e.children,n=e.className,r=e.href;return Object(c.jsx)(s.a,{href:r,children:Object(c.jsx)("a",{className:n,children:t})})};t.default=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("section",{className:"otherPages",children:[Object(c.jsx)("div",{className:"otherPages--top",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438"}),Object(c.jsx)(a,{href:"/get_money",children:Object(c.jsx)("button",{className:"takebtn mb-2",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438"})})]})}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"mapping row",children:[Object(c.jsxs)("div",{className:"col-md-5 col-lg-4 mapping--text",children:[Object(c.jsxs)("h2",{className:"mb-5",children:[" \u0420\u041a, \u0433. \u0410\u043b\u043c\u0430\u0442\u044b,",Object(c.jsx)("br",{}),"\u0443\u043b. \u0410\u0443\u044d\u0437\u043e\u0432\u0430 112/15 \u043d.\u043f 8"]}),Object(c.jsxs)("div",{className:"phones mb-3",children:[Object(c.jsxs)("a",{href:"tel: +77272501500",children:[" ",Object(c.jsx)("i",{className:"fa fa-phone"}),"+7 727 250 15 00"]}),Object(c.jsxs)("a",{href:"tel: +77002501500",children:[Object(c.jsx)("i",{className:"fa fa-phone"}),"+7 700 750 15 00"]})]})]}),Object(c.jsx)("div",{className:"mapping--map col-md-7 col-lg-8",children:Object(c.jsx)("iframe",{className:"mb-5",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.9057454006493!2d76.90309831535193!3d43.23243577913801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369260b0c39d7%3A0xc724725dc3c87eb6!2z0YPQu9C40YbQsCDQkNGD0Y3Qt9C-0LLQsCAxMTIsINCQ0LvQvNCw0YLRiyAwNTAwNTc!5e0!3m2!1sru!2skz!4v1601456337351!5m2!1sru!2skz",width:"100%",height:450,frameBorder:0,style:{border:0},allowFullScreen:!0,"aria-hidden":"false",tabIndex:0})})]})})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var s,a=r(n("q1tI")),o=n("elyg"),l=n("nOHt"),i=new Map,f=window.IntersectionObserver,u={};var d=function(e,t){var n=s||(f?s=new f((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function h(e,t,n,c){(0,o.isLocalURL)(t)&&(e.prefetch(t,n,c).catch((function(e){0})),u[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),r=n&&n.pathname||"/",s=a.default.useMemo((function(){var t=(0,o.resolveHref)(r,e.href,!0),n=c(t,2),s=n[0],a=n[1];return{href:s,as:e.as?(0,o.resolveHref)(r,e.as):a||s}}),[r,e.href,e.as]),i=s.href,p=s.as,m=e.children,b=e.replace,j=e.shallow,v=e.scroll,x=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var w=a.Children.only(m),N=w&&"object"===typeof w&&w.ref,O=a.default.useRef(),g={ref:a.default.useCallback((function(e){(O.current&&(O.current(),O.current=void 0),t&&f&&e&&e.tagName&&(0,o.isLocalURL)(i))&&(u[i+"%"+p]||(O.current=d(e,(function(){h(n,i,p,{locale:"undefined"!==typeof x?x:n&&n.locale})}))));N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[t,N,i,p,n,x]),onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,c,r,s,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=c.indexOf("#")<0),t[r?"replace":"push"](n,c,{shallow:s,locale:l}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,i,p,b,j,v,x)}};return t&&(g.onMouseEnter=function(e){(0,o.isLocalURL)(i)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),h(n,i,p,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(g.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof x?x:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(w,g)};t.default=p}},[["HqXX",0,1,2,3]]]);