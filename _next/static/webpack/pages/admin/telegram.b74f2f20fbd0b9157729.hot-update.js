webpackHotUpdate_N_E("pages/admin/telegram",{

/***/ "./components/shared/messageDetailed.js":
/*!**********************************************!*\
  !*** ./components/shared/messageDetailed.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_recomAnswer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/recomAnswer */ "./defaults/recomAnswer.js");


var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\shared\\messageDetailed.js",
    _this = undefined;




var MessageDetail = function MessageDetail(props) {
  var RecomendedBtn = function RecomendedBtn() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: _defaults_recomAnswer__WEBPACK_IMPORTED_MODULE_2__["Recommendation"].map(function (r) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          value: r.answer,
          children: r.answer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this);
  };

  if (props.msg) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tgmsg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u0418\u041D: ", props.msg.iin]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u043C\u044F: ", props.msg.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", props.msg.question]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          value: props.answer,
          onChange: props.handleChange,
          type: "textarea",
          className: "form-control",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442",
          onKeyPress: function onKeyPress() {
            return props.keypress(event, props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          disabled: true,
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 27
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onClick: function onClick() {
            return props.handleSubmit(props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id);
          },
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RecomendedBtn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "nothing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this);
  }
};

_c = MessageDetail;
/* harmony default export */ __webpack_exports__["default"] = (MessageDetail);

var _c;

$RefreshReg$(_c, "MessageDetail");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIlJlY29tZW5kZWRCdG4iLCJSZWNvbW1lbmRhdGlvbiIsIm1hcCIsInIiLCJhbnN3ZXIiLCJtc2ciLCJpaW4iLCJuYW1lIiwicXVlc3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJrZXlwcmVzcyIsImV2ZW50IiwibWVzc2FnZV9pZCIsImlkIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUUzQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsd0JBQ0k7QUFBQSxnQkFDR0Msb0VBQWMsQ0FBQ0MsR0FBZixDQUFtQixVQUFBQyxDQUFDO0FBQUEsNEJBQ25CO0FBQVEsZUFBSyxFQUFFQSxDQUFDLENBQUNDLE1BQWpCO0FBQUEsb0JBQTBCRCxDQUFDLENBQUNDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFPSCxHQVJEOztBQVNBLE1BQUdMLEtBQUssQ0FBQ00sR0FBVCxFQUFjO0FBQ1Ysd0JBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUEsMkNBQVNOLEtBQUssQ0FBQ00sR0FBTixDQUFVQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsMkNBQVNQLEtBQUssQ0FBQ00sR0FBTixDQUFVRSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsNkRBQVlSLEtBQUssQ0FBQ00sR0FBTixDQUFVRyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUtJO0FBQUEsZ0NBQ0k7QUFBVSxlQUFLLEVBQUVULEtBQUssQ0FBQ0ssTUFBdkI7QUFBK0Isa0JBQVEsRUFBRUwsS0FBSyxDQUFDVSxZQUEvQztBQUE2RCxjQUFJLEVBQUMsVUFBbEU7QUFBNkUsbUJBQVMsRUFBQyxjQUF2RjtBQUFzRyxxQkFBVyxFQUFDLDJFQUFsSDtBQUFrSSxvQkFBVSxFQUFFO0FBQUEsbUJBQU1WLEtBQUssQ0FBQ1csUUFBTixDQUFlQyxLQUFmLEVBQXFCWixLQUFLLENBQUNNLEdBQU4sQ0FBVU8sVUFBL0IsRUFBMENiLEtBQUssQ0FBQ00sR0FBTixDQUFVRyxRQUFwRCxFQUE2RFQsS0FBSyxDQUFDTSxHQUFOLENBQVVDLEdBQXZFLEVBQTRFUCxLQUFLLENBQUNNLEdBQU4sQ0FBVVEsRUFBdEYsQ0FBTjtBQUFBO0FBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS2QsS0FBSyxDQUFDZSxPQUFOLEtBQWtCLElBQWxCLGdCQUNLO0FBQU8sa0JBQVEsTUFBZjtBQUFpQixjQUFJLEVBQUMsUUFBdEI7QUFBK0IsbUJBQU0sOEJBQXJDO0FBQW9FLGVBQUssRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURMLGdCQUVNO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFLZixLQUFLLENBQUNnQixZQUFOLENBQW1CaEIsS0FBSyxDQUFDTSxHQUFOLENBQVVPLFVBQTdCLEVBQXdDYixLQUFLLENBQUNNLEdBQU4sQ0FBVUcsUUFBbEQsRUFBMkRULEtBQUssQ0FBQ00sR0FBTixDQUFVQyxHQUFyRSxFQUEwRVAsS0FBSyxDQUFDTSxHQUFOLENBQVVRLEVBQXBGLENBQUw7QUFBQSxXQUFoQjtBQUE4RyxjQUFJLEVBQUMsUUFBbkg7QUFBNEgsbUJBQU0sOEJBQWxJO0FBQWlLLGVBQUssRUFBQztBQUF2SztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBYUkscUVBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFrQkgsR0FuQkQsTUFvQks7QUFDRCx3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7QUFDSixDQXRDRDs7S0FBTWYsYTtBQXdDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdGVsZWdyYW0uYjc0ZjJmMjBmYmQwYjkxNTc3MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcmVjb21BbnN3ZXInO1xyXG5cclxuY29uc3QgTWVzc2FnZURldGFpbCA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCBSZWNvbWVuZGVkQnRuID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge1JlY29tbWVuZGF0aW9uLm1hcChyPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17ci5hbnN3ZXJ9PntyLmFuc3dlcn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYocHJvcHMubXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RnbXNnJz5cclxuICAgICAgICAgICAgICAgIDxwPtCY0JjQnToge3Byb3BzLm1zZy5paW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+0JjQvNGPOiB7cHJvcHMubXNnLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+0JLQvtC/0YDQvtGBOiB7cHJvcHMubXNnLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiA8cD5JRDoge3Byb3BzLm1zZy5tZXNzYWdlX2lkfTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtwcm9wcy5hbnN3ZXJ9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IHR5cGU9J3RleHRhcmVhJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INC+0YLQstC10YInIG9uS2V5UHJlc3M9eygpID0+IHByb3BzLmtleXByZXNzKGV2ZW50LHByb3BzLm1zZy5tZXNzYWdlX2lkLHByb3BzLm1zZy5xdWVzdGlvbixwcm9wcy5tc2cuaWluLCBwcm9wcy5tc2cuaWQpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGlucHV0IGRpc2FibGVkICB0eXBlPSdidXR0b24nIGNsYXNzPVwibXQtMyBkLWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPSfQntGC0L/RgNCw0LLQutCwLi4uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICA8aW5wdXQgb25DbGljaz17KCk9PiBwcm9wcy5oYW5kbGVTdWJtaXQocHJvcHMubXNnLm1lc3NhZ2VfaWQscHJvcHMubXNnLnF1ZXN0aW9uLHByb3BzLm1zZy5paW4sIHByb3BzLm1zZy5pZCl9IHR5cGU9J2J1dHRvbicgY2xhc3M9XCJtdC0zIGQtYmxvY2sgYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSZWNvbWVuZGVkQnRuIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIG5vdGhpbmdcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=