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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2),
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
        if (res.data.step === 3) {
          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/cabinet/loans');
        } else {
          setStep(parseInt(res.data.step));
        }
      }
    })["catch"](console.log('log'));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {// getCurrentStep() 
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

_s(Continue, "dsc3RONN4dUXGbRxUJsoeicjApM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3VtbWEiLCJzZXRTdW1tYSIsInNyb2siLCJzZXRTcm9rIiwic3RlcCIsInNldFN0ZXAiLCJnZXRDdXJyZW50U3RlcCIsImF4aW9zIiwiZ2V0IiwidXNlciIsIlVGXzQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInB1c2giLCJwYXJzZUludCIsInVzZUVmZmVjdCIsIlN0ZXBSZWciLCJVRl81IiwiVUZfNiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsU0FBTztBQUFDQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0MsV0FBcEI7QUFBaUNDLGNBQVUsRUFBRUYsS0FBSyxDQUFDRSxVQUFuRDtBQUErREMsZUFBVyxFQUFFSCxLQUFLLENBQUNHO0FBQWxGLEdBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW1CO0FBQUE7O0FBQUEsTUFBakJILFdBQWlCLFFBQWpCQSxXQUFpQjs7QUFBQSxrQkFDQ0ksc0RBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUMzQkMsVUFEMkI7QUFBQSxNQUNoQkMsYUFEZ0I7O0FBQUEsbUJBRVRGLHNEQUFRLENBQUMsS0FBRCxDQUZD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QWY7QUFBQSxnQ0FDQTtBQUFBLG9EQUFlekIsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFFQTtBQUFPLGVBQUssRUFBRUEsSUFBZDtBQUFvQixrQkFBUSxFQUFFLGtCQUFBdUIsQ0FBQztBQUFBLG1CQUFFdEIsT0FBTyxDQUFDc0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVDtBQUFBLFdBQS9CO0FBQTBELGNBQUksRUFBQyxPQUEvRDtBQUF1RSxhQUFHLEVBQUMsSUFBM0U7QUFBZ0YsYUFBRyxFQUFDLElBQXBGO0FBQXlGLG1CQUFTLEVBQUM7QUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaQSxlQVlTO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaVCxlQWFFO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsRUFnQkc3QixVQUFVLEtBQUssQ0FBZixnQkFBbUIscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLGdCQUFpQyxxRUFBQywwRUFBRDtBQUFlLGNBQVEsRUFBRUwsV0FBVyxDQUFDZ0IsSUFBckM7QUFBMkMsV0FBSyxFQUFFVCxLQUFsRDtBQUF5RCxVQUFJLEVBQUVFO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJELENBMUREOztHQUFNTixROztLQUFBQSxRO0FBNERTZ0Msd0lBQVEsQ0FBQ0MsMkRBQU8sQ0FBQ3RDLGVBQUQsRUFBaUIsSUFBakIsQ0FBUCxDQUE4QkssUUFBOUIsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjIzMmJiMDc4M2YwMDE3NDg5MDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQ29udGludWVTdGVwMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAyXCJcclxuaW1wb3J0IENvbnRpbnVlU3RlcDMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGludWUvQ29udGludWVTdGVwM1wiXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCJcclxuaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9ncmVzc2JhclwiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXIsIHVzZXJTdGF0dXM6IHN0YXRlLnVzZXJTdGF0dXMsIHVzZXJIaXN0b3J5OiBzdGF0ZS51c2VySGlzdG9yeX1cclxufVxyXG5cclxuY29uc3QgQ29udGludWUgPSAoe3VzZXJSZWR1Y2VyfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGVwUmVzdWx0LHNldFN0ZXBSZXN1bHRdID0gdXNlU3RhdGUoMilcclxuICBjb25zdCBbc3VtbWEsc2V0U3VtbWFdID0gdXNlU3RhdGUoNTUwMDApXHJcbiAgY29uc3QgW3Nyb2ssc2V0U3Jva10gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gID0gdXNlU3RhdGUoc3RlcFJlc3VsdClcclxuICBjb25zdCBnZXRDdXJyZW50U3RlcCA9KCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL25vdEZ1bGw/aWluPSR7dXNlclJlZHVjZXIudXNlci5VRl80fWAsIHtoZWFkZXJzOiB7XHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN0ZXA9PT0zKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9sb2FucycpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFN0ZXAocGFyc2VJbnQocmVzLmRhdGEuc3RlcCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2ggKFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2cnKVxyXG4gICAgICApXHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBnZXRDdXJyZW50U3RlcCgpIFxyXG4gIH0sW10pXHJcbiAgY29uc3QgU3RlcFJlZyA9ICgpID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgPD5cclxuICAgICAge3N0ZXA9PT0xPyBcclxuICAgICAgIDxDb250aW51ZVN0ZXAyIG5leHQ9e3N0ZXB9IHNldE5leHQ9e3NldFN0ZXB9IHVzZXJEYXRlPXt1c2VyUmVkdWNlci51c2VyfS8+IDogPENvbnRpbnVlU3RlcDMgc3RlcD17c3RlcH0gc2V0U3RlcD17c2V0U3RlcH0gc3RlcFJlc3VsdD17c3RlcFJlc3VsdH0gdXNlckRhdGU9e3VzZXJSZWR1Y2VyLnVzZXJ9IHN1bW1hPXtzdW1tYX0gc3Jvaz17c3Jva30vPn1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J290aGVyUGFnZXMgY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtaW5mbyc+PGI+e3VzZXJSZWR1Y2VyLnVzZXIuVUZfNX0ge3VzZXJSZWR1Y2VyLnVzZXIuVUZfNn0sINCy0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LfQsNC/0L7Qu9C90LjRgtGMINCw0L3QutC10YLRgywg0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0LnQvDwvYj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRzX2NvbnRpbnVlICc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFuZ2UtZ3JvdXAnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YPQvNC80LAgOiB7c3VtbWF9INGC0LM8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtzdW1tYX0gb25DaGFuZ2U9e2U9PnNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ncmFuZ2UnIHN0ZXA9JzUwMDAnIG1pbj0nMTAwMDAnIG1heD0nMTQ1MDAwJyBjbGFzc05hbWU9J3JhbmdlJz48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFuZ2UtZ3JvdXAnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YDQvtC6IDoge3Nyb2t9INC00L3QtdC5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3Jva30gb25DaGFuZ2U9e2U9PnNldFNyb2soZS50YXJnZXQudmFsdWUpfSB0eXBlPSdyYW5nZScgbWluPScxNScgbWF4PSczMCcgY2xhc3NOYW1lPSdyYW5nZSc+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8YnI+PC9icj48YnI+PC9icj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdtdC01IG1iLTMgdGV4dC1jZW50ZXInPtCf0YDQvtC00L7Qu9C20LjRgtGMINCw0L3QutC10YLRgzwvaDM+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHtzdGVwUmVzdWx0ID09PSAxID8gPFN0ZXBSZWcgLz4gOiA8Q29udGludWVTdGVwMyB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0gc3VtbWE9e3N1bW1hfSBzcm9rPXtzcm9rfS8+fVxyXG4gICAgICAgey8qIDxDb250aW51ZVN0ZXAzIC8+ICovfVxyXG4gICAgICB7LyogPENvbnRpbnVlU3RlcDMgLz4gKi99XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG51bGwpKENvbnRpbnVlKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==