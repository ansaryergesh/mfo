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
      className: "d-flex",
      children: _defaults_recomAnswer__WEBPACK_IMPORTED_MODULE_2__["Recommendation"].map(function (r) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: " mt-2 mr-2 btn btn-info",
          value: r.answer,
          children: r.answer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
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
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0418\u043C\u044F: ", props.msg.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", props.msg.question]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
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
          columnNumber: 17
        }, _this), props.loading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          disabled: true,
          type: "button",
          "class": "mt-3 d-block btn btn-primary",
          value: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
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
          columnNumber: 22
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(RecomendedBtn, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }, _this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "nothing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VEZXRhaWwiLCJwcm9wcyIsIlJlY29tZW5kZWRCdG4iLCJSZWNvbW1lbmRhdGlvbiIsIm1hcCIsInIiLCJhbnN3ZXIiLCJtc2ciLCJpaW4iLCJuYW1lIiwicXVlc3Rpb24iLCJoYW5kbGVDaGFuZ2UiLCJrZXlwcmVzcyIsImV2ZW50IiwibWVzc2FnZV9pZCIsImlkIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUUzQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsd0JBQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLGdCQUNHQyxvRUFBYyxDQUFDQyxHQUFmLENBQW1CLFVBQUFDLENBQUM7QUFBQSw0QkFDbkI7QUFBUSxtQkFBUyxFQUFDLHlCQUFsQjtBQUE0QyxlQUFLLEVBQUVBLENBQUMsQ0FBQ0MsTUFBckQ7QUFBQSxvQkFBOERELENBQUMsQ0FBQ0M7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUI7QUFBQSxPQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBUkQ7O0FBU0EsTUFBR0wsS0FBSyxDQUFDTSxHQUFULEVBQWM7QUFDVix3QkFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0U7QUFBQSwyQ0FBU04sS0FBSyxDQUFDTSxHQUFOLENBQVVDLEdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwyQ0FBU1AsS0FBSyxDQUFDTSxHQUFOLENBQVVFLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQSw2REFBWVIsS0FBSyxDQUFDTSxHQUFOLENBQVVHLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBS0U7QUFBQSxnQ0FDSTtBQUFVLGVBQUssRUFBRVQsS0FBSyxDQUFDSyxNQUF2QjtBQUErQixrQkFBUSxFQUFFTCxLQUFLLENBQUNVLFlBQS9DO0FBQTZELGNBQUksRUFBQyxVQUFsRTtBQUE2RSxtQkFBUyxFQUFDLGNBQXZGO0FBQXNHLHFCQUFXLEVBQUMsMkVBQWxIO0FBQWtJLG9CQUFVLEVBQUU7QUFBQSxtQkFBTVYsS0FBSyxDQUFDVyxRQUFOLENBQWVDLEtBQWYsRUFBcUJaLEtBQUssQ0FBQ00sR0FBTixDQUFVTyxVQUEvQixFQUEwQ2IsS0FBSyxDQUFDTSxHQUFOLENBQVVHLFFBQXBELEVBQTZEVCxLQUFLLENBQUNNLEdBQU4sQ0FBVUMsR0FBdkUsRUFBNEVQLEtBQUssQ0FBQ00sR0FBTixDQUFVUSxFQUF0RixDQUFOO0FBQUE7QUFBOUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVLZCxLQUFLLENBQUNlLE9BQU4sS0FBa0IsSUFBbEIsZ0JBQ0c7QUFBTyxrQkFBUSxNQUFmO0FBQWlCLGNBQUksRUFBQyxRQUF0QjtBQUErQixtQkFBTSw4QkFBckM7QUFBb0UsZUFBSyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBRUk7QUFBTyxpQkFBTyxFQUFFO0FBQUEsbUJBQUtmLEtBQUssQ0FBQ2dCLFlBQU4sQ0FBbUJoQixLQUFLLENBQUNNLEdBQU4sQ0FBVU8sVUFBN0IsRUFBd0NiLEtBQUssQ0FBQ00sR0FBTixDQUFVRyxRQUFsRCxFQUEyRFQsS0FBSyxDQUFDTSxHQUFOLENBQVVDLEdBQXJFLEVBQTBFUCxLQUFLLENBQUNNLEdBQU4sQ0FBVVEsRUFBcEYsQ0FBTDtBQUFBLFdBQWhCO0FBQThHLGNBQUksRUFBQyxRQUFuSDtBQUE0SCxtQkFBTSw4QkFBbEk7QUFBaUssZUFBSyxFQUFDO0FBQXZLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFZRSxxRUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWlCSCxHQWxCRCxNQW1CSztBQUNELHdCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFLSDtBQUNKLENBckNEOztLQUFNZixhO0FBdUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi90ZWxlZ3JhbS5jZmY1OTllYTY5OTAyMTRiMDIwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVjb21tZW5kYXRpb24gfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9yZWNvbUFuc3dlcic7XHJcblxyXG5jb25zdCBNZXNzYWdlRGV0YWlsID0gcHJvcHMgPT4ge1xyXG5cclxuICAgIGNvbnN0IFJlY29tZW5kZWRCdG4gPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCc+XHJcbiAgICAgICAgICB7UmVjb21tZW5kYXRpb24ubWFwKHI9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgbXQtMiBtci0yIGJ0biBidG4taW5mbycgdmFsdWU9e3IuYW5zd2VyfT57ci5hbnN3ZXJ9PC9idXR0b24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYocHJvcHMubXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0Z21zZyc+XHJcbiAgICAgICAgICAgIDxwPtCY0JjQnToge3Byb3BzLm1zZy5paW59PC9wPlxyXG4gICAgICAgICAgICA8cD7QmNC80Y86IHtwcm9wcy5tc2cubmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwPtCS0L7Qv9GA0L7RgToge3Byb3BzLm1zZy5xdWVzdGlvbn08L3A+XHJcbiAgICAgICAgICAgIHsvKiA8cD5JRDoge3Byb3BzLm1zZy5tZXNzYWdlX2lkfTwvcD4gKi99XHJcbiAgICAgICAgICAgIDxmb3JtID5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17cHJvcHMuYW5zd2VyfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSB0eXBlPSd0ZXh0YXJlYScgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQvtGC0LLQtdGCJyBvbktleVByZXNzPXsoKSA9PiBwcm9wcy5rZXlwcmVzcyhldmVudCxwcm9wcy5tc2cubWVzc2FnZV9pZCxwcm9wcy5tc2cucXVlc3Rpb24scHJvcHMubXNnLmlpbiwgcHJvcHMubXNnLmlkKX0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5sb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgID8gPGlucHV0IGRpc2FibGVkICB0eXBlPSdidXR0b24nIGNsYXNzPVwibXQtMyBkLWJsb2NrIGJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPSfQntGC0L/RgNCw0LLQutCwLi4uJyAvPlxyXG4gICAgICAgICAgICAgICAgICA6ICA8aW5wdXQgb25DbGljaz17KCk9PiBwcm9wcy5oYW5kbGVTdWJtaXQocHJvcHMubXNnLm1lc3NhZ2VfaWQscHJvcHMubXNnLnF1ZXN0aW9uLHByb3BzLm1zZy5paW4sIHByb3BzLm1zZy5pZCl9IHR5cGU9J2J1dHRvbicgY2xhc3M9XCJtdC0zIGQtYmxvY2sgYnRuIGJ0bi1wcmltYXJ5XCIgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8UmVjb21lbmRlZEJ0biAvPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIG5vdGhpbmdcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRGV0YWlsOyJdLCJzb3VyY2VSb290IjoiIn0=