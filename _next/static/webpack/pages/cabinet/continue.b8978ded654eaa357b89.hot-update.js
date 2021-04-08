webpackHotUpdate_N_E("pages/cabinet/continue",{

/***/ "./pages/cabinet/continue.js":
/*!***********************************!*\
  !*** ./pages/cabinet/continue.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/continue/ContinueStep2 */ "./components/continue/ContinueStep2.js");
/* harmony import */ var _components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/continue/ContinueStep3 */ "./components/continue/ContinueStep3.js");
/* harmony import */ var _components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hocs/withAuth */ "./components/hocs/withAuth.js");
/* harmony import */ var _components_shared_Progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared/Progressbar */ "./components/shared/Progressbar.js");



var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\cabinet\\continue.js",
    _this = undefined,
    _s = $RefreshSig$();










var mapStateToProps = function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory
  };
};

var Continue = function Continue(_ref) {
  _s();

  var userReducer = _ref.userReducer;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      stepResult = _useState[0],
      setStepResult = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(55000),
      summa = _useState2[0],
      setSumma = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(20),
      srok = _useState3[0],
      setSrok = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(stepResult),
      step = _useState4[0],
      setStep = _useState4[1];

  var getCurrentStep = function getCurrentStep() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.money-men.kz/api/notFull?iin=".concat(userReducer.user.UF_4), {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(function (res) {
      console.log(res);

      if (res.data.success) {
        if (res.data.step === '3') {
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/cabinet/loans');
        } else {
          setStep(parseInt(res.data.step));
        }
      }
    })["catch"](console.log('log'));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getCurrentStep();
  }, []);

  var StepReg = function StepReg() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: step === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_5__["default"], {
        next: step,
        setNext: setStep,
        userDate: userReducer.user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 8
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__["default"], {
        step: step,
        setStep: setStep,
        stepResult: stepResult,
        userDate: userReducer.user,
        summa: summa,
        srok: srok
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 85
      }, _this)
    }, void 0, false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "otherPages container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "alert alert-info",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: [userReducer.user.UF_5, " ", userReducer.user.UF_6, ", \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u0439\u043C"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 43
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inputs_continue ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0443\u043C\u043C\u0430 : ", summa, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: summa,
          onChange: function onChange(e) {
            return setSumma(e.target.value);
          },
          type: "range",
          step: "5000",
          min: "10000",
          max: "145000",
          className: "range"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0440\u043E\u043A : ", srok, " \u0434\u043D\u0435\u0439"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          value: srok,
          onChange: function onChange(e) {
            return setSrok(e.target.value);
          },
          type: "range",
          min: "15",
          max: "30",
          className: "range"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 16
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "mt-5 mb-3 text-center",
      children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, _this), stepResult === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StepReg, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userDate: userReducer.user,
      summa: summa,
      srok: srok
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }, _this);
};

_s(Continue, "gWHmwacB32IcRiIyV85UvYtp2l4=");

_c = Continue;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(Continue)));

var _c;

$RefreshReg$(_c, "Continue");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3VtbWEiLCJzZXRTdW1tYSIsInNyb2siLCJzZXRTcm9rIiwic3RlcCIsInNldFN0ZXAiLCJnZXRDdXJyZW50U3RlcCIsImF4aW9zIiwiZ2V0IiwidXNlciIsIlVGXzQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInB1c2giLCJwYXJzZUludCIsInVzZUVmZmVjdCIsIlN0ZXBSZWciLCJVRl81IiwiVUZfNiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsU0FBTztBQUFDQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0MsV0FBcEI7QUFBaUNDLGNBQVUsRUFBRUYsS0FBSyxDQUFDRSxVQUFuRDtBQUErREMsZUFBVyxFQUFFSCxLQUFLLENBQUNHO0FBQWxGLEdBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW1CO0FBQUE7O0FBQUEsTUFBakJILFdBQWlCLFFBQWpCQSxXQUFpQjs7QUFBQSxrQkFDQ0ksc0RBQVEsQ0FBQyxFQUFELENBRFQ7QUFBQSxNQUMzQkMsVUFEMkI7QUFBQSxNQUNoQkMsYUFEZ0I7O0FBQUEsbUJBRVRGLHNEQUFRLENBQUMsS0FBRCxDQUZD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LEVBQUMsYUFBZjtBQUFBLGdDQUNBO0FBQUEsb0RBQWV6QixJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBO0FBQU8sZUFBSyxFQUFFQSxJQUFkO0FBQW9CLGtCQUFRLEVBQUUsa0JBQUF1QixDQUFDO0FBQUEsbUJBQUV0QixPQUFPLENBQUNzQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQUEsV0FBL0I7QUFBMEQsY0FBSSxFQUFDLE9BQS9EO0FBQXVFLGFBQUcsRUFBQyxJQUEzRTtBQUFnRixhQUFHLEVBQUMsSUFBcEY7QUFBeUYsbUJBQVMsRUFBQztBQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpBLGVBWVM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpULGVBYUU7QUFBSSxlQUFTLEVBQUMsdUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRixFQWdCRzdCLFVBQVUsS0FBSyxDQUFmLGdCQUFtQixxRUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBbkIsZ0JBQWlDLHFFQUFDLDBFQUFEO0FBQWUsY0FBUSxFQUFFTCxXQUFXLENBQUNnQixJQUFyQztBQUEyQyxXQUFLLEVBQUVULEtBQWxEO0FBQXlELFVBQUksRUFBRUU7QUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkQsQ0ExREQ7O0dBQU1OLFE7O0tBQUFBLFE7QUE0RFNnQyx3SUFBUSxDQUFDQywyREFBTyxDQUFDdEMsZUFBRCxFQUFpQixJQUFqQixDQUFQLENBQThCSyxRQUE5QixDQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvY29udGludWUuYjg5NzhkZWQ2NTRlYWEzNTdiODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBDb250aW51ZVN0ZXAyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRpbnVlL0NvbnRpbnVlU3RlcDJcIlxyXG5pbXBvcnQgQ29udGludWVTdGVwMyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAzXCJcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvY3Mvd2l0aEF1dGhcIlxyXG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL1Byb2dyZXNzYmFyXCJcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge3VzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlciwgdXNlclN0YXR1czogc3RhdGUudXNlclN0YXR1cywgdXNlckhpc3Rvcnk6IHN0YXRlLnVzZXJIaXN0b3J5fVxyXG59XHJcblxyXG5jb25zdCBDb250aW51ZSA9ICh7dXNlclJlZHVjZXJ9KSA9PiB7XHJcbiAgY29uc3QgW3N0ZXBSZXN1bHQsc2V0U3RlcFJlc3VsdF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbc3VtbWEsc2V0U3VtbWFdID0gdXNlU3RhdGUoNTUwMDApXHJcbiAgY29uc3QgW3Nyb2ssc2V0U3Jva10gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gID0gdXNlU3RhdGUoc3RlcFJlc3VsdClcclxuICBjb25zdCBnZXRDdXJyZW50U3RlcCA9KCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL25vdEZ1bGw/aWluPSR7dXNlclJlZHVjZXIudXNlci5VRl80fWAsIHtoZWFkZXJzOiB7XHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN0ZXA9PT0nMycpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L2xvYW5zJylcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0U3RlcChwYXJzZUludChyZXMuZGF0YS5zdGVwKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCAoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZycpXHJcbiAgICAgIClcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEN1cnJlbnRTdGVwKClcclxuICB9LFtdKVxyXG4gIGNvbnN0IFN0ZXBSZWcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHtzdGVwPT09MT8gXHJcbiAgICAgICA8Q29udGludWVTdGVwMiBuZXh0PXtzdGVwfSBzZXROZXh0PXtzZXRTdGVwfSB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0vPiA6IDxDb250aW51ZVN0ZXAzIHN0ZXA9e3N0ZXB9IHNldFN0ZXA9e3NldFN0ZXB9IHN0ZXBSZXN1bHQ9e3N0ZXBSZXN1bHR9IHVzZXJEYXRlPXt1c2VyUmVkdWNlci51c2VyfSBzdW1tYT17c3VtbWF9IHNyb2s9e3Nyb2t9Lz59XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzIGNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8nPjxiPnt1c2VyUmVkdWNlci51c2VyLlVGXzV9IHt1c2VyUmVkdWNlci51c2VyLlVGXzZ9LCDQstCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtC30LDQv9C+0LvQvdC40YLRjCDQsNC90LrQtdGC0YMsINGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQv9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50Lw8L2I+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0c19jb250aW51ZSAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLWdyb3VwJz5cclxuICAgICAgICAgIDxsYWJlbD7QodGD0LzQvNCwIDoge3N1bW1hfSDRgtCzPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3VtbWF9IG9uQ2hhbmdlPXtlPT5zZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3JhbmdlJyBzdGVwPSc1MDAwJyBtaW49JzEwMDAwJyBtYXg9JzE0NTAwMCcgY2xhc3NOYW1lPSdyYW5nZSc+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLWdyb3VwJz5cclxuICAgICAgICAgIDxsYWJlbD7QodGA0L7QuiA6IHtzcm9rfSDQtNC90LXQuTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Nyb2t9IG9uQ2hhbmdlPXtlPT5zZXRTcm9rKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ncmFuZ2UnIG1pbj0nMTUnIG1heD0nMzAnIGNsYXNzTmFtZT0ncmFuZ2UnPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nbXQtNSBtYi0zIHRleHQtY2VudGVyJz7Qn9GA0L7QtNC+0LvQttC40YLRjCDQsNC90LrQtdGC0YM8L2gzPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB7c3RlcFJlc3VsdCA9PT0gMSA/IDxTdGVwUmVnIC8+IDogPENvbnRpbnVlU3RlcDMgdXNlckRhdGU9e3VzZXJSZWR1Y2VyLnVzZXJ9IHN1bW1hPXtzdW1tYX0gc3Jvaz17c3Jva30vPn1cclxuICAgICAgIHsvKiA8Q29udGludWVTdGVwMyAvPiAqL31cclxuICAgICAgey8qIDxDb250aW51ZVN0ZXAzIC8+ICovfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxudWxsKShDb250aW51ZSkpOyJdLCJzb3VyY2VSb290IjoiIn0=