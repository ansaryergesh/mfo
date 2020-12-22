webpackHotUpdate_N_E("pages/index",{

/***/ "./defaults/utmSource.js":
/*!*******************************!*\
  !*** ./defaults/utmSource.js ***!
  \*******************************/
/*! exports provided: newCookie, controlUtm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newCookie", function() { return newCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlUtm", function() { return controlUtm; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);



function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

;
var newCookie = function newCookie() {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_source') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_medium') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_campaign') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_term') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('clickid') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_medium');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_campaign');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_source');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_term');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('clickid');
  } else if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_source') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('afclick') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_source');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('afclick');
  } else if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_source') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('clickid') !== undefined && js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('wmid') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_source');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('clickid');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('wmid');
  } else if (js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('utm_source') !== undefined) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('utm_source');
  } else {}
};
var controlUtm = function controlUtm() {
  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('utm_term').length > 0 && getUrlParameter('clickid').length > 0) {
    newCookie();

    if (getUrlParameter('utm_source').includes('qaz')) {
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', 'qaz', {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_campaign', getUrlParameter('utm_campaign'), {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_term', getUrlParameter('utm_term'), {
        expires: 1
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('clickid'), {
        expires: 1
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('afclick').length > 0) {
    if (getUrlParameter('utm_source') === 'loangate') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('afclick', getUrlParameter('afclick'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('cpa_click_id').length > 0 && getUrlParameter('cpa_wm_id').length > 0) {
    if (getUrlParameter('utm_source') === 'leadgid') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('cpa_click_id'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('wmid', getUrlParameter('cpa_wm_id'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('v').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('web_id').length > 0) {
    if (getUrlParameter('utm_source') === 'doaff') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_campaign', getUrlParameter('utm_campaign'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_term', getUrlParameter('web_id'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('v'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('clickid').length > 0) {
    if (getUrlParameter('utm_source') === 'upsala') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('clickid'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('wmid', 'nothing', {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('web_id').length > 0 && getUrlParameter('click_id').length > 0) {
    if (getUrlParameter('utm_source') === 'goodaff') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_campaign', getUrlParameter('utm_campaign'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_term', getUrlParameter('web_id'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('click_id'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0) {
    if (getUrlParameter('utm_source').includes('sms')) {
      localStorage.clear();
      newCookie();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 1
      });
    }
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('utm_term').length > 0) {
    newCookie();
    localStorage.clear();
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', 'notexist', {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_campaign', getUrlParameter('utm_campaign'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_term', getUrlParameter('utm_term'), {
      expires: 30
    });
  }

  if (getUrlParameter('_branch_match_id').length > 0 && getUrlParameter('utm_medium').length > 0) {
    newCookie();
    localStorage.clear();
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_medium'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_medium', getUrlParameter('utm_medium'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_campaign', getUrlParameter('utm_medium'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_term', getUrlParameter('utm_medium'), {
      expires: 30
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('_branch_match_id'), {
      expires: 30
    });
  }

  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('cid').length > 0 && getUrlParameter('user').length > 0) {
    if (getUrlParameter('utm_source') === 'click2money') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_source'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('cid'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('wmid', getUrlParameter('user'), {
        expires: 30
      });
    }
  }

  if (getUrlParameter('utm_campaign').length > 0 && getUrlParameter('clickid').length > 0 && getUrlParameter('wm_id').length > 0) {
    if (getUrlParameter('utm_campaign') === 'guruleads') {
      newCookie();
      localStorage.clear();
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('utm_source', getUrlParameter('utm_campaign'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('clickid', getUrlParameter('clickid'), {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('wmid', getUrlParameter('wm_id'), {
        expires: 30
      });
    }
  } else {}
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdXRtU291cmNlLmpzIl0sIm5hbWVzIjpbImdldFVybFBhcmFtZXRlciIsIm5hbWUiLCJyZXBsYWNlIiwicmVnZXgiLCJSZWdFeHAiLCJyZXN1bHRzIiwiZXhlYyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwibmV3Q29va2llIiwiY29va2llIiwiZ2V0IiwidW5kZWZpbmVkIiwicmVtb3ZlIiwiY29udHJvbFV0bSIsImxlbmd0aCIsImluY2x1ZGVzIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXQiLCJleHBpcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE1BQWIsRUFBcUIsS0FBckIsRUFBNEJBLE9BQTVCLENBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLENBQVA7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLFdBQVdILElBQVgsR0FBa0IsV0FBN0IsQ0FBWjtBQUNBLE1BQUlJLE9BQU8sR0FBR0YsS0FBSyxDQUFDRyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0MsTUFBcEIsQ0FBZDtBQUNBLFNBQU9ILE9BQU8sS0FBSyxJQUFaLEdBQW1CLEVBQW5CLEdBQXdCSSxrQkFBa0IsQ0FBQ0osT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSCxPQUFYLENBQW1CLEtBQW5CLEVBQTBCLEdBQTFCLENBQUQsQ0FBakQ7QUFDRDs7QUFBQTtBQUVNLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDN0IsTUFBSUMsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLFlBQVgsTUFBNkJDLFNBQTdCLElBQTBDRixnREFBTSxDQUFDQyxHQUFQLENBQVcsWUFBWCxNQUE2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R0FBdUMsQ0FBdkMsSUFBNENoQixlQUFlLENBQUMsU0FBRCxDQUFmLENBQTJCZ0IsTUFBM0IsR0FBa0MsQ0FBOUUsSUFBbUZoQixlQUFlLENBQUMsT0FBRCxDQUFmLENBQXlCZ0IsTUFBekIsR0FBZ0MsQ0FBdEgsRUFBeUg7QUFDdkgsUUFBR2hCLGVBQWUsQ0FBQyxjQUFELENBQWYsS0FBb0MsV0FBdkMsRUFBb0Q7QUFDbERVLGVBQVM7QUFDVFEsa0JBQVksQ0FBQ0MsS0FBYjtBQUNBUixzREFBTSxDQUFDUyxHQUFQLENBQVcsWUFBWCxFQUF5QnBCLGVBQWUsQ0FBQyxjQUFELENBQXhDLEVBQTBEO0FBQUNxQixlQUFPLEVBQUU7QUFBVixPQUExRDtBQUNBVixzREFBTSxDQUFDUyxHQUFQLENBQVcsU0FBWCxFQUFzQnBCLGVBQWUsQ0FBQyxTQUFELENBQXJDLEVBQWtEO0FBQUNxQixlQUFPLEVBQUU7QUFBVixPQUFsRDtBQUNBVixzREFBTSxDQUFDUyxHQUFQLENBQVcsTUFBWCxFQUFtQnBCLGVBQWUsQ0FBQyxPQUFELENBQWxDLEVBQTZDO0FBQUNxQixlQUFPLEVBQUU7QUFBVixPQUE3QztBQUNEO0FBQ0YsR0FSRCxNQVVLLENBQUU7QUFDUixDQS9HTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTJlNTc0ODQyZTM1MGRiYWQyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0IH0gZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKG5hbWUpIHtcclxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XHJcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcclxuICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcclxuICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld0Nvb2tpZSA9ICgpID0+IHtcclxuICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQgJiYgY29va2llLmdldCgndXRtX21lZGl1bScpICE9PSB1bmRlZmluZWQgJiYgY29va2llLmdldCgndXRtX2NhbXBhaWduJykgIT09IHVuZGVmaW5lZCAmJiBjb29raWUuZ2V0KCd1dG1fdGVybScpICE9PSB1bmRlZmluZWQgJiYgY29va2llLmdldCgnY2xpY2tpZCcpICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9tZWRpdW0nKVxyXG4gICAgY29va2llLnJlbW92ZSgndXRtX2NhbXBhaWduJylcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9zb3VyY2UnKVxyXG4gICAgY29va2llLnJlbW92ZSgndXRtX3Rlcm0nKVxyXG4gICAgY29va2llLnJlbW92ZSgnY2xpY2tpZCcpXHJcbiAgfSBlbHNlIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCAmJiBjb29raWUuZ2V0KCdhZmNsaWNrJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICBjb29raWUucmVtb3ZlKCdhZmNsaWNrJylcclxuICB9ZWxzZSBpZihjb29raWUuZ2V0KCd1dG1fc291cmNlJykhPT0gdW5kZWZpbmVkICYmIGNvb2tpZS5nZXQoJ2NsaWNraWQnKSE9PSB1bmRlZmluZWQgJiYgY29va2llLmdldCgnd21pZCcpIT09IHVuZGVmaW5lZCl7XHJcbiAgICBjb29raWUucmVtb3ZlKCd1dG1fc291cmNlJylcclxuICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNraWQnKVxyXG4gICAgY29va2llLnJlbW92ZSgnd21pZCcpXHJcbiAgfSBlbHNlIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgfSBlbHNlIHtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRyb2xVdG0gPSAoKSA9PiB7XHJcbiAgaWYgKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmxlbmd0aCA+IDAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJykubGVuZ3RoID4gMCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9jYW1wYWlnbicpLmxlbmd0aCA+IDAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fdGVybScpLmxlbmd0aCA+IDAgJiYgZ2V0VXJsUGFyYW1ldGVyKCdjbGlja2lkJykubGVuZ3RoID4gMCkge1xyXG4gICAgbmV3Q29va2llKClcclxuICAgIGlmIChnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKS5pbmNsdWRlcygncWF6JykpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCAncWF6Jywge2V4cGlyZXM6IDF9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fbWVkaXVtJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJyksIHtleHBpcmVzOiAxfSlcclxuICAgICAgY29va2llLnNldCgndXRtX2NhbXBhaWduJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fY2FtcGFpZ24nKSwge2V4cGlyZXM6IDF9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fdGVybScsIGdldFVybFBhcmFtZXRlcigndXRtX3Rlcm0nKSwge2V4cGlyZXM6IDF9KVxyXG4gICAgICBjb29raWUuc2V0KCdjbGlja2lkJywgZ2V0VXJsUGFyYW1ldGVyKCdjbGlja2lkJyksIHtleHBpcmVzOiAxfSlcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmxlbmd0aCA+IDAgJiYgZ2V0VXJsUGFyYW1ldGVyKCdhZmNsaWNrJykubGVuZ3RoID4gMCkge1xyXG4gICAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykgPT09ICdsb2FuZ2F0ZScpIHtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgnYWZjbGljaycsIGdldFVybFBhcmFtZXRlcignYWZjbGljaycpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKS5sZW5ndGg+MCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ2NwYV9jbGlja19pZCcpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignY3BhX3dtX2lkJykubGVuZ3RoPjApIHtcclxuICAgIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpID09PSAnbGVhZGdpZCcpIHtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgnY2xpY2tpZCcsIGdldFVybFBhcmFtZXRlcignY3BhX2NsaWNrX2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3dtaWQnLCBnZXRVcmxQYXJhbWV0ZXIoJ2NwYV93bV9pZCcpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKS5sZW5ndGg+MCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3YnKS5sZW5ndGg+MCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9tZWRpdW0nKS5sZW5ndGg+MCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9jYW1wYWlnbicpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignd2ViX2lkJykubGVuZ3RoPjApIHtcclxuICAgIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpID09PSAnZG9hZmYnKSB7XHJcbiAgICAgIG5ld0Nvb2tpZSgpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICBjb29raWUuc2V0KCd1dG1fc291cmNlJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9tZWRpdW0nLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9tZWRpdW0nKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgndXRtX2NhbXBhaWduJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fY2FtcGFpZ24nKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgndXRtX3Rlcm0nLCBnZXRVcmxQYXJhbWV0ZXIoJ3dlYl9pZCcpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCdjbGlja2lkJywgZ2V0VXJsUGFyYW1ldGVyKCd2JyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignY2xpY2tpZCcpLmxlbmd0aD4wKSB7XHJcbiAgICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSA9PT0gJ3Vwc2FsYScpIHtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgnY2xpY2tpZCcsIGdldFVybFBhcmFtZXRlcignY2xpY2tpZCcpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCd3bWlkJywgJ25vdGhpbmcnLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKS5sZW5ndGg+MCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9tZWRpdW0nKS5sZW5ndGg+MFxyXG4gICAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fY2FtcGFpZ24nKS5sZW5ndGg+MCAmJiBnZXRVcmxQYXJhbWV0ZXIoJ3dlYl9pZCcpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignY2xpY2tfaWQnKS5sZW5ndGg+MCkge1xyXG4gICAgICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSA9PT0gJ2dvb2RhZmYnKSB7XHJcbiAgICAgICAgbmV3Q29va2llKClcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgICBjb29raWUuc2V0KCd1dG1fbWVkaXVtJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgICAgY29va2llLnNldCgndXRtX2NhbXBhaWduJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fY2FtcGFpZ24nKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgICBjb29raWUuc2V0KCd1dG1fdGVybScsIGdldFVybFBhcmFtZXRlcignd2ViX2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgICAgY29va2llLnNldCgnY2xpY2tpZCcsIGdldFVybFBhcmFtZXRlcignY2xpY2tfaWQnKSwge2V4cGlyZXM6IDMwfSlcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBpZiAoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fc291cmNlJykubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmluY2x1ZGVzKCdzbXMnKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLCB7ZXhwaXJlczogMX0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9zb3VyY2UnKS5sZW5ndGggPiAwIFxyXG4gICAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJykubGVuZ3RoID4gMCBcclxuICAgICYmIGdldFVybFBhcmFtZXRlcigndXRtX2NhbXBhaWduJykubGVuZ3RoID4gMFxyXG4gICAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fdGVybScpLmxlbmd0aCA+IDApIHtcclxuICAgIG5ld0Nvb2tpZSgpXHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIGNvb2tpZS5zZXQoJ2NsaWNraWQnLCAnbm90ZXhpc3QnLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgY29va2llLnNldCgndXRtX21lZGl1bScsIGdldFVybFBhcmFtZXRlcigndXRtX21lZGl1bScpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgY29va2llLnNldCgndXRtX2NhbXBhaWduJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fY2FtcGFpZ24nKSwge2V4cGlyZXM6IDMwfSlcclxuICAgIGNvb2tpZS5zZXQoJ3V0bV90ZXJtJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fdGVybScpLCB7ZXhwaXJlczogMzB9KVxyXG4gIH1cclxuXHJcbiAgaWYoZ2V0VXJsUGFyYW1ldGVyKCdfYnJhbmNoX21hdGNoX2lkJykubGVuZ3RoPjAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJykubGVuZ3RoPjApIHtcclxuICAgIG5ld0Nvb2tpZSgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICBjb29raWUuc2V0KCd1dG1fc291cmNlJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICBjb29raWUuc2V0KCd1dG1fbWVkaXVtJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICBjb29raWUuc2V0KCd1dG1fY2FtcGFpZ24nLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9tZWRpdW0nKSwge2V4cGlyZXM6IDMwfSlcclxuICAgIGNvb2tpZS5zZXQoJ3V0bV90ZXJtJywgZ2V0VXJsUGFyYW1ldGVyKCd1dG1fbWVkaXVtJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICBjb29raWUuc2V0KCdjbGlja2lkJywgZ2V0VXJsUGFyYW1ldGVyKCdfYnJhbmNoX21hdGNoX2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgfVxyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignY2lkJykubGVuZ3RoPjAgJiYgZ2V0VXJsUGFyYW1ldGVyKCd1c2VyJykubGVuZ3RoPjApIHtcclxuICAgIGlmKGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpID09PSAnY2xpY2sybW9uZXknKSB7XHJcbiAgICAgIG5ld0Nvb2tpZSgpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGdldFVybFBhcmFtZXRlcigndXRtX3NvdXJjZScpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCdjbGlja2lkJywgZ2V0VXJsUGFyYW1ldGVyKCdjaWQnKSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgnd21pZCcsIGdldFVybFBhcmFtZXRlcigndXNlcicpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gIH1cclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9jYW1wYWlnbicpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignY2xpY2tpZCcpLmxlbmd0aD4wICYmIGdldFVybFBhcmFtZXRlcignd21faWQnKS5sZW5ndGg+MCkge1xyXG4gICAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd1dG1fY2FtcGFpZ24nKSA9PT0gJ2d1cnVsZWFkcycpIHtcclxuICAgICAgbmV3Q29va2llKClcclxuICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBnZXRVcmxQYXJhbWV0ZXIoJ3V0bV9jYW1wYWlnbicpLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCdjbGlja2lkJywgZ2V0VXJsUGFyYW1ldGVyKCdjbGlja2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3dtaWQnLCBnZXRVcmxQYXJhbWV0ZXIoJ3dtX2lkJyksIHtleHBpcmVzOiAzMH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGVsc2Uge31cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9