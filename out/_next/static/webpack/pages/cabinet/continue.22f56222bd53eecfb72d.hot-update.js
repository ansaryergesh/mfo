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
      step = _useState[0],
      setStep = _useState[1];

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

_s(Continue, "kKTIl8nh5Sc1CZyO9eXAoP6tXgE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXAiLCJzZXRTdGVwIiwiZ2V0Q3VycmVudFN0ZXAiLCJheGlvcyIsImdldCIsInVzZXIiLCJVRl80IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJ3aXRoQXV0aCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQUNDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFwQjtBQUFpQ0MsY0FBVSxFQUFFRixLQUFLLENBQUNFLFVBQW5EO0FBQStEQyxlQUFXLEVBQUVILEtBQUssQ0FBQ0c7QUFBbEYsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBbUI7QUFBQTs7QUFBQSxNQUFqQkgsV0FBaUIsUUFBakJBLFdBQWlCOztBQUFBLGtCQUNUSSxzREFBUSxDQUFDLENBQUQsQ0FEQztBQUFBLE1BQzNCQyxJQUQyQjtBQUFBLE1BQ3JCQyxPQURxQjs7QUFHbEMsTUFBTUMsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixHQUFNO0FBQzFCQyxnREFBSyxDQUFDQyxHQUFOLG9EQUFzRFQsV0FBVyxDQUFDVSxJQUFaLENBQWlCQyxJQUF2RSxHQUErRTtBQUFDQyxhQUFPLEVBQUU7QUFDdkYsdUNBQStCO0FBRHdEO0FBQVYsS0FBL0UsRUFHR0MsSUFISCxDQUdRLFVBQUFDLEdBQUcsRUFBSTtBQUNYQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQSxVQUFHQSxHQUFHLENBQUNHLElBQUosQ0FBU0MsT0FBWixFQUFxQixDQUNuQjtBQUNEO0FBQ0YsS0FSSCxXQVVJSCxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLENBVko7QUFZRCxHQWJEOztBQWVBRyx5REFBUyxDQUFDLFlBQU07QUFDZFosa0JBQWM7QUFDZixHQUZRLEVBRVAsRUFGTyxDQUFUO0FBSUEsc0JBRUk7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQSw0QkFBc0MscUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF0QyxlQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVCxlQUVFO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFHRUYsSUFBSSxLQUFHLENBQVAsZ0JBQ0QscUVBQUMsMEVBQUQ7QUFBZSxVQUFJLEVBQUVBLElBQXJCO0FBQTJCLGFBQU8sRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURDLGdCQUNnRCxxRUFBQywwRUFBRDtBQUFlLFVBQUksRUFBRUQsSUFBckI7QUFBMkIsYUFBTyxFQUFFQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSmxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZKO0FBYUQsQ0FuQ0Q7O0dBQU1ILFE7O0tBQUFBLFE7QUFxQ1NpQix3SUFBUSxDQUFDQywyREFBTyxDQUFDdkIsZUFBRCxFQUFpQixJQUFqQixDQUFQLENBQThCSyxRQUE5QixDQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvY29udGludWUuMjJmNTYyMjJiZDUzZWVjZmI3MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBDb250aW51ZVN0ZXAyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRpbnVlL0NvbnRpbnVlU3RlcDJcIlxyXG5pbXBvcnQgQ29udGludWVTdGVwMyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAzXCJcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hvY3Mvd2l0aEF1dGhcIlxyXG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL1Byb2dyZXNzYmFyXCJcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge3VzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlciwgdXNlclN0YXR1czogc3RhdGUudXNlclN0YXR1cywgdXNlckhpc3Rvcnk6IHN0YXRlLnVzZXJIaXN0b3J5fVxyXG59XHJcblxyXG5jb25zdCBDb250aW51ZSA9ICh7dXNlclJlZHVjZXJ9KSA9PiB7XHJcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdICA9IHVzZVN0YXRlKDIpXHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRTdGVwID0oKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbm90RnVsbD9paW49JHt1c2VyUmVkdWNlci51c2VyLlVGXzR9YCwge2hlYWRlcnM6IHtcclxuICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXHJcbiAgICB9fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgLy8gc2V0U3RlcChwYXJzZUludChyZXMuZGF0YS5zdGVwLTEpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoIChcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nJylcclxuICAgICAgKVxyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q3VycmVudFN0ZXAoKVxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybihcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzIGNvbnRhaW5lcic+PFByb2dyZXNzYmFyIC8+XHJcbiAgICAgIDxicj48L2JyPjxicj48L2JyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J210LTUgbWItMyB0ZXh0LWNlbnRlcic+0J/RgNC+0LTQvtC70LbQuNGC0Ywg0LDQvdC60LXRgtGDPC9oMj5cclxuICAgICAgIHtzdGVwPT09MiA/IFxyXG4gICAgICAgPENvbnRpbnVlU3RlcDIgbmV4dD17c3RlcH0gc2V0TmV4dD17c2V0U3RlcH0vPiA6IDxDb250aW51ZVN0ZXAzIHN0ZXA9e3N0ZXB9IHNldFN0ZXA9e3NldFN0ZXB9IC8+fVxyXG5cclxuICAgICAgIHsvKiA8Q29udGludWVTdGVwMyAvPiAqL31cclxuICAgICAgey8qIDxDb250aW51ZVN0ZXAzIC8+ICovfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxudWxsKShDb250aW51ZSkpOyJdLCJzb3VyY2VSb290IjoiIn0=