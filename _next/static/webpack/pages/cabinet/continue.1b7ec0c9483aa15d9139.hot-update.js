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
/* harmony import */ var _components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/continue/ContinueStep2 */ "./components/continue/ContinueStep2.js");
/* harmony import */ var _components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/continue/ContinueStep3 */ "./components/continue/ContinueStep3.js");
/* harmony import */ var _components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hocs/withAuth */ "./components/hocs/withAuth.js");
/* harmony import */ var _components_shared_Progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/shared/Progressbar */ "./components/shared/Progressbar.js");



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
        setStep(parseInt(res.data.step));
      }
    })["catch"](console.log('log'));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getCurrentStep();
  }, []);

  var StepReg = function StepReg() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: step === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_4__["default"], {
        next: step,
        setNext: setStep,
        userDate: userReducer.user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 8
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_5__["default"], {
        step: step,
        setStep: setStep,
        stepResult: stepResult,
        userDate: userReducer.user,
        summa: summa,
        srok: srok
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
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
        lineNumber: 46,
        columnNumber: 43
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inputs_continue ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0443\u043C\u043C\u0430 : ", summa, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
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
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0440\u043E\u043A : ", srok, " \u0434\u043D\u0435\u0439"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
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
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 16
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "mt-5 mb-3 text-center",
      children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, _this), stepResult === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StepReg, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userDate: userReducer.user,
      summa: summa,
      srok: srok
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, _this);
};

_s(Continue, "gWHmwacB32IcRiIyV85UvYtp2l4=");

_c = Continue;
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null)(Continue)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3VtbWEiLCJzZXRTdW1tYSIsInNyb2siLCJzZXRTcm9rIiwic3RlcCIsInNldFN0ZXAiLCJnZXRDdXJyZW50U3RlcCIsImF4aW9zIiwiZ2V0IiwidXNlciIsIlVGXzQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsInBhcnNlSW50IiwidXNlRWZmZWN0IiwiU3RlcFJlZyIsIlVGXzUiLCJVRl82IiwiZSIsInRhcmdldCIsInZhbHVlIiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFNBQU87QUFBQ0MsZUFBVyxFQUFFRCxLQUFLLENBQUNDLFdBQXBCO0FBQWlDQyxjQUFVLEVBQUVGLEtBQUssQ0FBQ0UsVUFBbkQ7QUFBK0RDLGVBQVcsRUFBRUgsS0FBSyxDQUFDRztBQUFsRixHQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBOztBQUFBLE1BQWpCSCxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsa0JBQ0NJLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDM0JDLFVBRDJCO0FBQUEsTUFDaEJDLGFBRGdCOztBQUFBLG1CQUVURixzREFBUSxDQUFDLEtBQUQsQ0FGQztBQUFBLE1BRTNCRyxLQUYyQjtBQUFB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LE9BQU8sQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFBQSxXQUEvQjtBQUEwRCxjQUFJLEVBQUMsT0FBL0Q7QUFBdUUsYUFBRyxFQUFDLElBQTNFO0FBQWdGLGFBQUcsRUFBQyxJQUFwRjtBQUF5RixtQkFBUyxFQUFDO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkEsZUFZUztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWlQsZUFhRTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLEVBZ0JHM0IsVUFBVSxLQUFLLENBQWYsZ0JBQW1CLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFuQixnQkFBaUMscUVBQUMsMEVBQUQ7QUFBZSxjQUFRLEVBQUVMLFdBQVcsQ0FBQ2dCLElBQXJDO0FBQTJDLFdBQUssRUFBRVQsS0FBbEQ7QUFBeUQsVUFBSSxFQUFFRTtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCRCxDQXRERDs7R0FBTU4sUTs7S0FBQUEsUTtBQXdEUzhCLHdJQUFRLENBQUNDLDJEQUFPLENBQUNwQyxlQUFELEVBQWlCLElBQWpCLENBQVAsQ0FBOEJLLFFBQTlCLENBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9jb250aW51ZS4xYjdlYzBjOTQ4M2FhMTVkOTEzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IENvbnRpbnVlU3RlcDIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGludWUvQ29udGludWVTdGVwMlwiXHJcbmltcG9ydCBDb250aW51ZVN0ZXAzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRpbnVlL0NvbnRpbnVlU3RlcDNcIlxyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaG9jcy93aXRoQXV0aFwiXHJcbmltcG9ydCBQcm9ncmVzc2JhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvUHJvZ3Jlc3NiYXJcIlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7dXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyLCB1c2VyU3RhdHVzOiBzdGF0ZS51c2VyU3RhdHVzLCB1c2VySGlzdG9yeTogc3RhdGUudXNlckhpc3Rvcnl9XHJcbn1cclxuXHJcbmNvbnN0IENvbnRpbnVlID0gKHt1c2VyUmVkdWNlcn0pID0+IHtcclxuICBjb25zdCBbc3RlcFJlc3VsdCxzZXRTdGVwUmVzdWx0XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtzdW1tYSxzZXRTdW1tYV0gPSB1c2VTdGF0ZSg1NTAwMClcclxuICBjb25zdCBbc3JvayxzZXRTcm9rXSA9IHVzZVN0YXRlKDIwKVxyXG4gIGNvbnN0IFtzdGVwLCBzZXRTdGVwXSAgPSB1c2VTdGF0ZShzdGVwUmVzdWx0KVxyXG4gIGNvbnN0IGdldEN1cnJlbnRTdGVwID0oKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbm90RnVsbD9paW49JHt1c2VyUmVkdWNlci51c2VyLlVGXzR9YCwge2hlYWRlcnM6IHtcclxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICB9fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0U3RlcChwYXJzZUludChyZXMuZGF0YS5zdGVwKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCAoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZycpXHJcbiAgICAgIClcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEN1cnJlbnRTdGVwKClcclxuICB9LFtdKVxyXG4gIGNvbnN0IFN0ZXBSZWcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHtzdGVwPT09MT8gXHJcbiAgICAgICA8Q29udGludWVTdGVwMiBuZXh0PXtzdGVwfSBzZXROZXh0PXtzZXRTdGVwfSB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0vPiA6IDxDb250aW51ZVN0ZXAzIHN0ZXA9e3N0ZXB9IHNldFN0ZXA9e3NldFN0ZXB9IHN0ZXBSZXN1bHQ9e3N0ZXBSZXN1bHR9IHVzZXJEYXRlPXt1c2VyUmVkdWNlci51c2VyfSBzdW1tYT17c3VtbWF9IHNyb2s9e3Nyb2t9Lz59XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzIGNvbnRhaW5lcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FsZXJ0IGFsZXJ0LWluZm8nPjxiPnt1c2VyUmVkdWNlci51c2VyLlVGXzV9IHt1c2VyUmVkdWNlci51c2VyLlVGXzZ9LCDQstCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQvtC30LDQv9C+0LvQvdC40YLRjCDQsNC90LrQtdGC0YMsINGH0YLQvtCx0Ysg0L/QvtC70YPRh9C40YLRjCDQv9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50Lw8L2I+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0c19jb250aW51ZSAnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLWdyb3VwJz5cclxuICAgICAgICAgIDxsYWJlbD7QodGD0LzQvNCwIDoge3N1bW1hfSDRgtCzPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3VtbWF9IG9uQ2hhbmdlPXtlPT5zZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9IHR5cGU9J3JhbmdlJyBzdGVwPSc1MDAwJyBtaW49JzEwMDAwJyBtYXg9JzE0NTAwMCcgY2xhc3NOYW1lPSdyYW5nZSc+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhbmdlLWdyb3VwJz5cclxuICAgICAgICAgIDxsYWJlbD7QodGA0L7QuiA6IHtzcm9rfSDQtNC90LXQuTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Nyb2t9IG9uQ2hhbmdlPXtlPT5zZXRTcm9rKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ncmFuZ2UnIG1pbj0nMTUnIG1heD0nMzAnIGNsYXNzTmFtZT0ncmFuZ2UnPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGJyPjwvYnI+PGJyPjwvYnI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nbXQtNSBtYi0zIHRleHQtY2VudGVyJz7Qn9GA0L7QtNC+0LvQttC40YLRjCDQsNC90LrQtdGC0YM8L2gzPlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB7c3RlcFJlc3VsdCA9PT0gMSA/IDxTdGVwUmVnIC8+IDogPENvbnRpbnVlU3RlcDMgdXNlckRhdGU9e3VzZXJSZWR1Y2VyLnVzZXJ9IHN1bW1hPXtzdW1tYX0gc3Jvaz17c3Jva30vPn1cclxuICAgICAgIHsvKiA8Q29udGludWVTdGVwMyAvPiAqL31cclxuICAgICAgey8qIDxDb250aW51ZVN0ZXAzIC8+ICovfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxudWxsKShDb250aW51ZSkpOyJdLCJzb3VyY2VSb290IjoiIn0=