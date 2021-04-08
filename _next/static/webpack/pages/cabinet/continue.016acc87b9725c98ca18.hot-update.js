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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
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

      if (res.data.success) {// setStep(parseInt(res.data.step-1))
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
        userDate: userReducer.user
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
        lineNumber: 47,
        columnNumber: 43
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inputs_continue ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0443\u043C\u043C\u0430 : ", summa, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0440\u043E\u043A : ", srok, " \u0434\u043D\u0435\u0439"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 16
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "mt-5 mb-3 text-center",
      children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, _this), stepResult === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StepReg, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userDate: userReducer.user
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }, _this);
};

_s(Continue, "vPIo2l7y5RUuDQgfHioOdGOA75Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3VtbWEiLCJzZXRTdW1tYSIsInNyb2siLCJzZXRTcm9rIiwic3RlcCIsInNldFN0ZXAiLCJnZXRDdXJyZW50U3RlcCIsImF4aW9zIiwiZ2V0IiwidXNlciIsIlVGXzQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsIlN0ZXBSZWciLCJVRl81IiwiVUZfNiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQUNDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFwQjtBQUFpQ0MsY0FBVSxFQUFFRixLQUFLLENBQUNFLFVBQW5EO0FBQStEQyxlQUFXLEVBQUVILEtBQUssQ0FBQ0c7QUFBbEYsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBbUI7QUFBQTs7QUFBQSxNQUFqQkgsV0FBaUIsUUFBakJBLFdBQWlCOztBQUFBLGtCQUNDSSxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQzNCQyxVQUQyQjtBQUFBLE1BQ2hCQyxhQURnQjs7QUFBQSxtQkFFVEYsc0RBQVEsQ0FBQyxLQUFELENBRkM7QUFBQSxNQUUzQkcsS0FGMkI7QUFBQSxNQUVyQkMsUUFG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QUFwRjtBQUF5RixtQkFBUyxFQUFDO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkEsZUFZUztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWlQsZUFhRTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLEVBZ0JHMUIsVUFBVSxLQUFLLENBQWYsZ0JBQW1CLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFuQixnQkFBaUMscUVBQUMsMEVBQUQ7QUFBZSxjQUFRLEVBQUVMLFdBQVcsQ0FBQ2dCO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBd0JELENBdkREOztHQUFNYixROztLQUFBQSxRO0FBeURTNkIsd0lBQVEsQ0FBQ0MsMkRBQU8sQ0FBQ25DLGVBQUQsRUFBaUIsSUFBakIsQ0FBUCxDQUE4QkssUUFBOUIsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjAxNmFjYzg3Yjk3MjVjOThjYTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgQ29udGludWVTdGVwMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAyXCJcclxuaW1wb3J0IENvbnRpbnVlU3RlcDMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGludWUvQ29udGludWVTdGVwM1wiXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCJcclxuaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9ncmVzc2JhclwiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXIsIHVzZXJTdGF0dXM6IHN0YXRlLnVzZXJTdGF0dXMsIHVzZXJIaXN0b3J5OiBzdGF0ZS51c2VySGlzdG9yeX1cclxufVxyXG5cclxuY29uc3QgQ29udGludWUgPSAoe3VzZXJSZWR1Y2VyfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGVwUmVzdWx0LHNldFN0ZXBSZXN1bHRdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbc3VtbWEsc2V0U3VtbWFdID0gdXNlU3RhdGUoNTUwMDApXHJcbiAgY29uc3QgW3Nyb2ssc2V0U3Jva10gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gID0gdXNlU3RhdGUoc3RlcFJlc3VsdClcclxuICBjb25zdCBnZXRDdXJyZW50U3RlcCA9KCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL25vdEZ1bGw/aWluPSR7dXNlclJlZHVjZXIudXNlci5VRl80fWAsIHtoZWFkZXJzOiB7XHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIC8vIHNldFN0ZXAocGFyc2VJbnQocmVzLmRhdGEuc3RlcC0xKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCAoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZycpXHJcbiAgICAgIClcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEN1cnJlbnRTdGVwKClcclxuICB9LFtdKVxyXG4gIGNvbnN0IFN0ZXBSZWcgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIHtzdGVwPT09MT8gXHJcbiAgICAgICA8Q29udGludWVTdGVwMiBuZXh0PXtzdGVwfSBzZXROZXh0PXtzZXRTdGVwfSB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0vPiA6IDxDb250aW51ZVN0ZXAzIHN0ZXA9e3N0ZXB9IHNldFN0ZXA9e3NldFN0ZXB9IHN0ZXBSZXN1bHQ9e3N0ZXBSZXN1bHR9IHVzZXJEYXRlPXt1c2VyUmVkdWNlci51c2VyfS8+fVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuKFxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J290aGVyUGFnZXMgY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtaW5mbyc+PGI+e3VzZXJSZWR1Y2VyLnVzZXIuVUZfNX0ge3VzZXJSZWR1Y2VyLnVzZXIuVUZfNn0sINCy0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LfQsNC/0L7Qu9C90LjRgtGMINCw0L3QutC10YLRgywg0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0LnQvDwvYj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRzX2NvbnRpbnVlICc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFuZ2UtZ3JvdXAnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YPQvNC80LAgOiB7c3VtbWF9INGC0LM8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtzdW1tYX0gb25DaGFuZ2U9e2U9PnNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ncmFuZ2UnIHN0ZXA9JzUwMDAnIG1pbj0nMTAwMDAnIG1heD0nMTQ1MDAwJyBjbGFzc05hbWU9J3JhbmdlJz48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFuZ2UtZ3JvdXAnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YDQvtC6IDoge3Nyb2t9INC00L3QtdC5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3Jva30gb25DaGFuZ2U9e2U9PnNldFNyb2soZS50YXJnZXQudmFsdWUpfSB0eXBlPSdyYW5nZScgbWluPScxNScgbWF4PSczMCcgY2xhc3NOYW1lPSdyYW5nZSc+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8YnI+PC9icj48YnI+PC9icj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdtdC01IG1iLTMgdGV4dC1jZW50ZXInPtCf0YDQvtC00L7Qu9C20LjRgtGMINCw0L3QutC10YLRgzwvaDM+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHtzdGVwUmVzdWx0ID09PSAxID8gPFN0ZXBSZWcgLz4gOiA8Q29udGludWVTdGVwMyB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0vPn1cclxuICAgICAgIHsvKiA8Q29udGludWVTdGVwMyAvPiAqL31cclxuICAgICAgey8qIDxDb250aW51ZVN0ZXAzIC8+ICovfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxudWxsKShDb250aW51ZSkpOyJdLCJzb3VyY2VSb290IjoiIn0=