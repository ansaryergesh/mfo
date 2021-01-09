webpackHotUpdate_N_E("pages/telegram",{

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


var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\shared\\messageDetailed.js",
    _this = undefined;



var MessageDetail = function MessageDetail(props) {
  if (props.msg) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "tgmsg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u0418\u041D: ", props.msg.iin]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u043C\u044F: ", props.msg.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", props.msg.question]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          value: props.answer,
          onChange: props.handleChange,
          type: "textarea",
          className: "form-control",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442",
          onKeyPress: function onKeyPress() {
            return props.keypress(event, props.msg.message_id, props.msg.id);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this), props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          disabled: true,
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 31
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onClick: function onClick() {
            return props.handleSubmit(props.msg.message_id, props.msg.id);
          },
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 32
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "nothing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIm1zZyIsImlpbiIsIm5hbWUiLCJxdWVzdGlvbiIsImFuc3dlciIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiZXZlbnQiLCJtZXNzYWdlX2lkIiwiaWQiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzNCLE1BQUdBLEtBQUssQ0FBQ0MsR0FBVCxFQUFjO0FBQ1Ysd0JBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUEsMkNBQVNELEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsMkNBQVNGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsNkRBQVlILEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUtJO0FBQUEsZ0NBQ1E7QUFBVSxlQUFLLEVBQUVKLEtBQUssQ0FBQ0ssTUFBdkI7QUFBK0Isa0JBQVEsRUFBRUwsS0FBSyxDQUFDTSxZQUEvQztBQUE2RCxjQUFJLEVBQUMsVUFBbEU7QUFBNkUsbUJBQVMsRUFBQyxjQUF2RjtBQUFzRyxxQkFBVyxFQUFDLDJFQUFsSDtBQUFrSSxvQkFBVSxFQUFFO0FBQUEsbUJBQU1OLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUFmLEVBQXFCUixLQUFLLENBQUNDLEdBQU4sQ0FBVVEsVUFBL0IsRUFBMkNULEtBQUssQ0FBQ0MsR0FBTixDQUFVUyxFQUFyRCxDQUFOO0FBQUE7QUFBOUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUixFQUVTVixLQUFLLENBQUNXLE9BQU4sS0FBa0IsSUFBbEIsZ0JBQ0s7QUFBTyxrQkFBUSxNQUFmO0FBQWlCLGNBQUksRUFBQyxRQUF0QjtBQUErQixtQkFBTSw4QkFBckM7QUFBb0UsZUFBSyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREwsZ0JBRU07QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtYLEtBQUssQ0FBQ1ksWUFBTixDQUFtQlosS0FBSyxDQUFDQyxHQUFOLENBQVVRLFVBQTdCLEVBQXlDVCxLQUFLLENBQUNDLEdBQU4sQ0FBVVMsRUFBbkQsQ0FBTDtBQUFBLFdBQWhCO0FBQTZFLGNBQUksRUFBQyxRQUFsRjtBQUEyRixtQkFBTSw4QkFBakc7QUFBZ0ksZUFBSyxFQUFDO0FBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFrQkgsR0FuQkQsTUFvQks7QUFDRCx3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7QUFDSixDQTVCRDs7S0FBTVgsYTtBQThCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVsZWdyYW0uMjAzZTBhNzg1NmFlMzFhNzBkYTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNZXNzYWdlRGV0YWlsID0gcHJvcHMgPT4ge1xyXG4gICAgaWYocHJvcHMubXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RnbXNnJz5cclxuICAgICAgICAgICAgICAgIDxwPtCY0JjQnToge3Byb3BzLm1zZy5paW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+0JjQvNGPOiB7cHJvcHMubXNnLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+0JLQvtC/0YDQvtGBOiB7cHJvcHMubXNnLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiA8cD5JRDoge3Byb3BzLm1zZy5tZXNzYWdlX2lkfTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17cHJvcHMuYW5zd2VyfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSB0eXBlPSd0ZXh0YXJlYScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQvtGC0LLQtdGCJyBvbktleVByZXNzPXsoKSA9PiBwcm9wcy5rZXlwcmVzcyhldmVudCxwcm9wcy5tc2cubWVzc2FnZV9pZCwgcHJvcHMubXNnLmlkKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGlucHV0IGRpc2FibGVkICB0eXBlPSdidXR0b24nIGNsYXNzPVwibXQtMyBkLWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPSfQntGC0L/RgNCw0LLQutCwLi4uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAgPGlucHV0IG9uQ2xpY2s9eygpPT4gcHJvcHMuaGFuZGxlU3VibWl0KHByb3BzLm1zZy5tZXNzYWdlX2lkLCBwcm9wcy5tc2cuaWQpfSB0eXBlPSdidXR0b24nIGNsYXNzPVwibXQtMyBkLWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIG5vdGhpbmdcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=