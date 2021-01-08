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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onClick: function onClick() {
            return props.handleSubmit(props.msg.message_id, props.msg.id);
          },
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
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
      lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIm1zZyIsImlpbiIsIm5hbWUiLCJxdWVzdGlvbiIsImFuc3dlciIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiZXZlbnQiLCJtZXNzYWdlX2lkIiwiaWQiLCJoYW5kbGVTdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFDM0IsTUFBR0EsS0FBSyxDQUFDQyxHQUFULEVBQWM7QUFDVix3QkFDSTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0k7QUFBQSwyQ0FBU0QsS0FBSyxDQUFDQyxHQUFOLENBQVVDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSwyQ0FBU0YsS0FBSyxDQUFDQyxHQUFOLENBQVVFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQSw2REFBWUgsS0FBSyxDQUFDQyxHQUFOLENBQVVHLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBS0k7QUFBQSxnQ0FDUTtBQUFVLGVBQUssRUFBRUosS0FBSyxDQUFDSyxNQUF2QjtBQUErQixrQkFBUSxFQUFFTCxLQUFLLENBQUNNLFlBQS9DO0FBQTZELGNBQUksRUFBQyxVQUFsRTtBQUE2RSxtQkFBUyxFQUFDLGNBQXZGO0FBQXNHLHFCQUFXLEVBQUMsMkVBQWxIO0FBQWtJLG9CQUFVLEVBQUU7QUFBQSxtQkFBTU4sS0FBSyxDQUFDTyxRQUFOLENBQWVDLEtBQWYsRUFBcUJSLEtBQUssQ0FBQ0MsR0FBTixDQUFVUSxVQUEvQixFQUEyQ1QsS0FBSyxDQUFDQyxHQUFOLENBQVVTLEVBQXJELENBQU47QUFBQTtBQUE5STtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURSLGVBRVE7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtWLEtBQUssQ0FBQ1csWUFBTixDQUFtQlgsS0FBSyxDQUFDQyxHQUFOLENBQVVRLFVBQTdCLEVBQXlDVCxLQUFLLENBQUNDLEdBQU4sQ0FBVVMsRUFBbkQsQ0FBTDtBQUFBLFdBQWhCO0FBQTZFLGNBQUksRUFBQyxRQUFsRjtBQUEyRixtQkFBTSw4QkFBakc7QUFBZ0ksZUFBSyxFQUFDO0FBQXRJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFhSCxHQWRELE1BZUs7QUFDRCx3QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBS0g7QUFDSixDQXZCRDs7S0FBTVgsYTtBQXlCU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVsZWdyYW0uZDdkNjJjMjY1MTZjNjdiZTliMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBNZXNzYWdlRGV0YWlsID0gcHJvcHMgPT4ge1xyXG4gICAgaWYocHJvcHMubXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RnbXNnJz5cclxuICAgICAgICAgICAgICAgIDxwPtCY0JjQnToge3Byb3BzLm1zZy5paW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+0JjQvNGPOiB7cHJvcHMubXNnLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+0JLQvtC/0YDQvtGBOiB7cHJvcHMubXNnLnF1ZXN0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIHsvKiA8cD5JRDoge3Byb3BzLm1zZy5tZXNzYWdlX2lkfTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17cHJvcHMuYW5zd2VyfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSB0eXBlPSd0ZXh0YXJlYScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQvtGC0LLQtdGCJyBvbktleVByZXNzPXsoKSA9PiBwcm9wcy5rZXlwcmVzcyhldmVudCxwcm9wcy5tc2cubWVzc2FnZV9pZCwgcHJvcHMubXNnLmlkKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2xpY2s9eygpPT4gcHJvcHMuaGFuZGxlU3VibWl0KHByb3BzLm1zZy5tZXNzYWdlX2lkLCBwcm9wcy5tc2cuaWQpfSB0eXBlPSdidXR0b24nIGNsYXNzPVwibXQtMyBkLWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgbm90aGluZ1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==