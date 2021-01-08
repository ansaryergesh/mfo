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
        onSubmit: function onSubmit() {
          return props.handleSubmit(props.msg.message_id, props.msg.id);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          value: props.answer,
          onChange: props.handleChange,
          type: "textarea",
          className: "form-control",
          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0432\u0435\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "submit",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIm1zZyIsImlpbiIsIm5hbWUiLCJxdWVzdGlvbiIsImhhbmRsZVN1Ym1pdCIsIm1lc3NhZ2VfaWQiLCJpZCIsImFuc3dlciIsImhhbmRsZUNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUMzQixNQUFHQSxLQUFLLENBQUNDLEdBQVQsRUFBYztBQUNWLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQSwyQ0FBU0QsS0FBSyxDQUFDQyxHQUFOLENBQVVDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSwyQ0FBU0YsS0FBSyxDQUFDQyxHQUFOLENBQVVFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0k7QUFBQSw2REFBWUgsS0FBSyxDQUFDQyxHQUFOLENBQVVHLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBS0k7QUFBTSxnQkFBUSxFQUFFO0FBQUEsaUJBQUtKLEtBQUssQ0FBQ0ssWUFBTixDQUFtQkwsS0FBSyxDQUFDQyxHQUFOLENBQVVLLFVBQTdCLEVBQXlDTixLQUFLLENBQUNDLEdBQU4sQ0FBVU0sRUFBbkQsQ0FBTDtBQUFBLFNBQWhCO0FBQUEsZ0NBQ1E7QUFBVSxlQUFLLEVBQUVQLEtBQUssQ0FBQ1EsTUFBdkI7QUFBK0Isa0JBQVEsRUFBRVIsS0FBSyxDQUFDUyxZQUEvQztBQUE2RCxjQUFJLEVBQUMsVUFBbEU7QUFBNkUsbUJBQVMsRUFBQyxjQUF2RjtBQUFzRyxxQkFBVyxFQUFDO0FBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFIsZUFFUTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFNLDhCQUE1QjtBQUEyRCxlQUFLLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWFILEdBZEQsTUFlSztBQUNELHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDtBQUNKLENBdkJEOztLQUFNVixhO0FBeUJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS5jNmVmZjJiODZhYzE3OTY0M2NjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1lc3NhZ2VEZXRhaWwgPSBwcm9wcyA9PiB7XHJcbiAgICBpZihwcm9wcy5tc2cpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+0JjQmNCdOiB7cHJvcHMubXNnLmlpbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7QmNC80Y86IHtwcm9wcy5tc2cubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7QktC+0L/RgNC+0YE6IHtwcm9wcy5tc2cucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIDxwPklEOiB7cHJvcHMubXNnLm1lc3NhZ2VfaWR9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKT0+IHByb3BzLmhhbmRsZVN1Ym1pdChwcm9wcy5tc2cubWVzc2FnZV9pZCwgcHJvcHMubXNnLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17cHJvcHMuYW5zd2VyfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSB0eXBlPSd0ZXh0YXJlYScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQvtGC0LLQtdGCJz48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHR5cGU9J3N1Ym1pdCcgY2xhc3M9XCJtdC0zIGQtYmxvY2sgYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBub3RoaW5nXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZURldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9