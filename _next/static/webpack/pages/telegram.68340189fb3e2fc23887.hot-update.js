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
          onClick: function onClick() {
            return props.handleSubmit(props.msg.message_id, props.msg.id);
          },
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIm1zZyIsImlpbiIsIm5hbWUiLCJxdWVzdGlvbiIsImFuc3dlciIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiZXZlbnQiLCJtZXNzYWdlX2lkIiwiaWQiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzNCLE1BQUdBLEtBQUssQ0FBQ0MsR0FBVCxFQUFjO0FBQ1Ysd0JBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUEsMkNBQVNELEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsMkNBQVNGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsNkRBQVlILEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUtJO0FBQUEsZ0NBQ1E7QUFBVSxlQUFLLEVBQUVKLEtBQUssQ0FBQ0ssTUFBdkI7QUFBK0Isa0JBQVEsRUFBRUwsS0FBSyxDQUFDTSxZQUEvQztBQUE2RCxjQUFJLEVBQUMsVUFBbEU7QUFBNkUsbUJBQVMsRUFBQyxjQUF2RjtBQUFzRyxxQkFBVyxFQUFDLDJFQUFsSDtBQUFrSSxvQkFBVSxFQUFFO0FBQUEsbUJBQU1OLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUFmLEVBQXFCUixLQUFLLENBQUNDLEdBQU4sQ0FBVVEsVUFBL0IsRUFBMkNULEtBQUssQ0FBQ0MsR0FBTixDQUFVUyxFQUFyRCxDQUFOO0FBQUE7QUFBOUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUixFQUVTVixLQUFLLENBQUNXLE9BQU4sS0FBa0IsSUFBbEIsZ0JBQ0s7QUFBTyxrQkFBUSxNQUFmO0FBQWdCLGlCQUFPLEVBQUU7QUFBQSxtQkFBS1gsS0FBSyxDQUFDWSxZQUFOLENBQW1CWixLQUFLLENBQUNDLEdBQU4sQ0FBVVEsVUFBN0IsRUFBeUNULEtBQUssQ0FBQ0MsR0FBTixDQUFVUyxFQUFuRCxDQUFMO0FBQUEsV0FBekI7QUFBc0YsY0FBSSxFQUFDLFFBQTNGO0FBQW9HLG1CQUFNLDhCQUExRztBQUF5SSxlQUFLLEVBQUM7QUFBL0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETCxnQkFFTTtBQUFPLGlCQUFPLEVBQUU7QUFBQSxtQkFBS1YsS0FBSyxDQUFDWSxZQUFOLENBQW1CWixLQUFLLENBQUNDLEdBQU4sQ0FBVVEsVUFBN0IsRUFBeUNULEtBQUssQ0FBQ0MsR0FBTixDQUFVUyxFQUFuRCxDQUFMO0FBQUEsV0FBaEI7QUFBNkUsY0FBSSxFQUFDLFFBQWxGO0FBQTJGLG1CQUFNLDhCQUFqRztBQUFnSSxlQUFLLEVBQUM7QUFBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWtCSCxHQW5CRCxNQW9CSztBQUNELHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDtBQUNKLENBNUJEOztLQUFNWCxhO0FBOEJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS42ODM0MDE4OWZiM2UyZmMyMzg4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1lc3NhZ2VEZXRhaWwgPSBwcm9wcyA9PiB7XHJcbiAgICBpZihwcm9wcy5tc2cpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGdtc2cnPlxyXG4gICAgICAgICAgICAgICAgPHA+0JjQmNCdOiB7cHJvcHMubXNnLmlpbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7QmNC80Y86IHtwcm9wcy5tc2cubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7QktC+0L/RgNC+0YE6IHtwcm9wcy5tc2cucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIDxwPklEOiB7cHJvcHMubXNnLm1lc3NhZ2VfaWR9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtwcm9wcy5hbnN3ZXJ9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IHR5cGU9J3RleHRhcmVhJyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INC+0YLQstC10YInIG9uS2V5UHJlc3M9eygpID0+IHByb3BzLmtleXByZXNzKGV2ZW50LHByb3BzLm1zZy5tZXNzYWdlX2lkLCBwcm9wcy5tc2cuaWQpfT48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aW5wdXQgZGlzYWJsZWQgb25DbGljaz17KCk9PiBwcm9wcy5oYW5kbGVTdWJtaXQocHJvcHMubXNnLm1lc3NhZ2VfaWQsIHByb3BzLm1zZy5pZCl9IHR5cGU9J2J1dHRvbicgY2xhc3M9XCJtdC0zIGQtYmxvY2sgYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9J9CX0LDQs9GA0YPQt9C60LAuLi4nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICA8aW5wdXQgb25DbGljaz17KCk9PiBwcm9wcy5oYW5kbGVTdWJtaXQocHJvcHMubXNnLm1lc3NhZ2VfaWQsIHByb3BzLm1zZy5pZCl9IHR5cGU9J2J1dHRvbicgY2xhc3M9XCJtdC0zIGQtYmxvY2sgYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgbm90aGluZ1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VEZXRhaWw7Il0sInNvdXJjZVJvb3QiOiIifQ==