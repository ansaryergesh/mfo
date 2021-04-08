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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(2),
      stepResult = _useState[0],
      setStepResult = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(stepResult),
      step = _useState2[0],
      setStep = _useState2[1];

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "otherPages container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_Progressbar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 16
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "mt-5 mb-3 text-center",
      children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, _this), step === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      next: step,
      setNext: setStep
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_5__["default"], {
      step: step,
      setStep: setStep
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 57
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }, _this);
};

_s(Continue, "oD86g81S82lC7PyOal0X5+8VYhU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3RlcCIsInNldFN0ZXAiLCJnZXRDdXJyZW50U3RlcCIsImF4aW9zIiwiZ2V0IiwidXNlciIsIlVGXzQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsInVzZUVmZmVjdCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFNBQU87QUFBQ0MsZUFBVyxFQUFFRCxLQUFLLENBQUNDLFdBQXBCO0FBQWlDQyxjQUFVLEVBQUVGLEtBQUssQ0FBQ0UsVUFBbkQ7QUFBK0RDLGVBQVcsRUFBRUgsS0FBSyxDQUFDRztBQUFsRixHQUFQO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtQjtBQUFBOztBQUFBLE1BQWpCSCxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsa0JBQ0NJLHNEQUFRLENBQUMsQ0FBRCxDQURUO0FBQUEsTUFDM0JDLFVBRDJCO0FBQUEsTUFDaEJDLGFBRGdCOztBQUFBLG1CQUVURixzREFBUSxDQUFDQyxVQUFELENBRkM7QUFBQSxNQUUzQkUsSUFGMkI7QUFBQSxNQUVyQkMsT0FGcUI7O0FBR2xDLE1BQU1DLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsR0FBTTtBQUMxQkMsZ0RBQUssQ0FBQ0MsR0FBTixvREFBc0RYLFdBQVcsQ0FBQ1ksSUFBWixDQUFpQkMsSUFBdkUsR0FBK0U7QUFBQ0MsYUFBTyxFQUFFO0FBQ3ZGLHVDQUErQjtBQUR3RDtBQUFWLEtBQS9FLEVBR0dDLElBSEgsQ0FHUSxVQUFBQyxHQUFHLEVBQUk7QUFDWEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBQ0EsVUFBR0EsR0FBRyxDQUFDRyxJQUFKLENBQVNDLE9BQVosRUFBcUIsQ0FDbkI7QUFDRDtBQUNGLEtBUkgsV0FVSUgsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQVZKO0FBWUQsR0FiRDs7QUFlQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLGtCQUFjO0FBQ2YsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUlBLHNCQUVJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQXNDLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdEMsZUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFDUztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFQsZUFFRTtBQUFJLGVBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0VGLElBQUksS0FBRyxDQUFQLGdCQUNELHFFQUFDLDBFQUFEO0FBQWUsVUFBSSxFQUFFQSxJQUFyQjtBQUEyQixhQUFPLEVBQUVDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQyxnQkFDZ0QscUVBQUMsMEVBQUQ7QUFBZSxVQUFJLEVBQUVELElBQXJCO0FBQTJCLGFBQU8sRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQWFELENBbkNEOztHQUFNTCxROztLQUFBQSxRO0FBcUNTbUIsd0lBQVEsQ0FBQ0MsMkRBQU8sQ0FBQ3pCLGVBQUQsRUFBaUIsSUFBakIsQ0FBUCxDQUE4QkssUUFBOUIsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjkzNDM1ZmU1NzNjOWQzNWU3YmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgQ29udGludWVTdGVwMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAyXCJcclxuaW1wb3J0IENvbnRpbnVlU3RlcDMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGludWUvQ29udGludWVTdGVwM1wiXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCJcclxuaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9ncmVzc2JhclwiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXIsIHVzZXJTdGF0dXM6IHN0YXRlLnVzZXJTdGF0dXMsIHVzZXJIaXN0b3J5OiBzdGF0ZS51c2VySGlzdG9yeX1cclxufVxyXG5cclxuY29uc3QgQ29udGludWUgPSAoe3VzZXJSZWR1Y2VyfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGVwUmVzdWx0LHNldFN0ZXBSZXN1bHRdID0gdXNlU3RhdGUoMilcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gID0gdXNlU3RhdGUoc3RlcFJlc3VsdClcclxuICBjb25zdCBnZXRDdXJyZW50U3RlcCA9KCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL25vdEZ1bGw/aWluPSR7dXNlclJlZHVjZXIudXNlci5VRl80fWAsIHtoZWFkZXJzOiB7XHJcbiAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIC8vIHNldFN0ZXAocGFyc2VJbnQocmVzLmRhdGEuc3RlcC0xKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCAoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZycpXHJcbiAgICAgIClcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEN1cnJlbnRTdGVwKClcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4oXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3RoZXJQYWdlcyBjb250YWluZXInPjxQcm9ncmVzc2JhciAvPlxyXG4gICAgICA8YnI+PC9icj48YnI+PC9icj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdtdC01IG1iLTMgdGV4dC1jZW50ZXInPtCf0YDQvtC00L7Qu9C20LjRgtGMINCw0L3QutC10YLRgzwvaDI+XHJcbiAgICAgICB7c3RlcD09PTIgPyBcclxuICAgICAgIDxDb250aW51ZVN0ZXAyIG5leHQ9e3N0ZXB9IHNldE5leHQ9e3NldFN0ZXB9Lz4gOiA8Q29udGludWVTdGVwMyBzdGVwPXtzdGVwfSBzZXRTdGVwPXtzZXRTdGVwfSAvPn1cclxuICAgICAgXHJcbiAgICAgICB7LyogPENvbnRpbnVlU3RlcDMgLz4gKi99XHJcbiAgICAgIHsvKiA8Q29udGludWVTdGVwMyAvPiAqL31cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbnVsbCkoQ29udGludWUpKTsiXSwic291cmNlUm9vdCI6IiJ9