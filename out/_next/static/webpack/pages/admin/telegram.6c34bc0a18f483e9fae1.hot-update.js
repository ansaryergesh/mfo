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
            return props.keypress(event, props.msg.message_id, props.msg.question, props.msg.iin, props.msg.id);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, _this), props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          disabled: true,
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
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
          lineNumber: 15,
          columnNumber: 28
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
      lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIm1zZyIsImlpbiIsIm5hbWUiLCJxdWVzdGlvbiIsImFuc3dlciIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiZXZlbnQiLCJtZXNzYWdlX2lkIiwiaWQiLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzNCLE1BQUdBLEtBQUssQ0FBQ0MsR0FBVCxFQUFjO0FBQ1Ysd0JBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUEsMkNBQVNELEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxHQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsMkNBQVNGLEtBQUssQ0FBQ0MsR0FBTixDQUFVRSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsNkRBQVlILEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUtJO0FBQUEsZ0NBQ0k7QUFBVSxlQUFLLEVBQUVKLEtBQUssQ0FBQ0ssTUFBdkI7QUFBK0Isa0JBQVEsRUFBRUwsS0FBSyxDQUFDTSxZQUEvQztBQUE2RCxjQUFJLEVBQUMsVUFBbEU7QUFBNkUsbUJBQVMsRUFBQyxjQUF2RjtBQUFzRyxxQkFBVyxFQUFDLDJFQUFsSDtBQUFrSSxvQkFBVSxFQUFFO0FBQUEsbUJBQU1OLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxLQUFmLEVBQXFCUixLQUFLLENBQUNDLEdBQU4sQ0FBVVEsVUFBL0IsRUFBMENULEtBQUssQ0FBQ0MsR0FBTixDQUFVRyxRQUFwRCxFQUE2REosS0FBSyxDQUFDQyxHQUFOLENBQVVDLEdBQXZFLEVBQTRFRixLQUFLLENBQUNDLEdBQU4sQ0FBVVMsRUFBdEYsQ0FBTjtBQUFBO0FBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFS1YsS0FBSyxDQUFDVyxPQUFOLEtBQWtCLElBQWxCLGdCQUNLO0FBQU8sa0JBQVEsTUFBZjtBQUFpQixjQUFJLEVBQUMsUUFBdEI7QUFBK0IsbUJBQU0sOEJBQXJDO0FBQW9FLGVBQUssRUFBQztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURMLGdCQUVNO0FBQU8saUJBQU8sRUFBRTtBQUFBLG1CQUFLWCxLQUFLLENBQUNZLFlBQU4sQ0FBbUJaLEtBQUssQ0FBQ0MsR0FBTixDQUFVUSxVQUE3QixFQUF3Q1QsS0FBSyxDQUFDQyxHQUFOLENBQVVHLFFBQWxELEVBQTJESixLQUFLLENBQUNDLEdBQU4sQ0FBVUMsR0FBckUsRUFBMEVGLEtBQUssQ0FBQ0MsR0FBTixDQUFVUyxFQUFwRixDQUFMO0FBQUEsV0FBaEI7QUFBOEcsY0FBSSxFQUFDLFFBQW5IO0FBQTRILG1CQUFNLDhCQUFsSTtBQUFpSyxlQUFLLEVBQUM7QUFBdks7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQWlCSCxHQWxCRCxNQW1CSztBQUNELHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDtBQUNKLENBM0JEOztLQUFNWCxhO0FBNkJTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi90ZWxlZ3JhbS42YzM0YmMwYTE4ZjQ4M2U5ZmFlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1lc3NhZ2VEZXRhaWwgPSBwcm9wcyA9PiB7XHJcbiAgICBpZihwcm9wcy5tc2cpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGdtc2cnPlxyXG4gICAgICAgICAgICAgICAgPHA+0JjQmNCdOiB7cHJvcHMubXNnLmlpbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7QmNC80Y86IHtwcm9wcy5tc2cubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD7QktC+0L/RgNC+0YE6IHtwcm9wcy5tc2cucXVlc3Rpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIDxwPklEOiB7cHJvcHMubXNnLm1lc3NhZ2VfaWR9PC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtID5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3Byb3BzLmFuc3dlcn0gb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gdHlwZT0ndGV4dGFyZWEnIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0L7RgtCy0LXRgicgb25LZXlQcmVzcz17KCkgPT4gcHJvcHMua2V5cHJlc3MoZXZlbnQscHJvcHMubXNnLm1lc3NhZ2VfaWQscHJvcHMubXNnLnF1ZXN0aW9uLHByb3BzLm1zZy5paW4sIHByb3BzLm1zZy5pZCl9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8aW5wdXQgZGlzYWJsZWQgIHR5cGU9J2J1dHRvbicgY2xhc3M9XCJtdC0zIGQtYmxvY2sgYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9J9Ce0YLQv9GA0LDQstC60LAuLi4nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogIDxpbnB1dCBvbkNsaWNrPXsoKT0+IHByb3BzLmhhbmRsZVN1Ym1pdChwcm9wcy5tc2cubWVzc2FnZV9pZCxwcm9wcy5tc2cucXVlc3Rpb24scHJvcHMubXNnLmlpbiwgcHJvcHMubXNnLmlkKX0gdHlwZT0nYnV0dG9uJyBjbGFzcz1cIm10LTMgZC1ibG9jayBidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIG5vdGhpbmdcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=