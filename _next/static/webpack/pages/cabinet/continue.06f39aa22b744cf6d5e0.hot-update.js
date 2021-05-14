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



var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\cabinet\\continue.js",
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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      sendRepeat = _useState5[0],
      setSendRepeat = _useState5[1];

  var canSendRepeat = function canSendRepeat() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(userReducer.user.UF_4)).then(function (response) {
      console.log(response);

      if (response.data.success == true) {
        getCurrentStep();
      }

      if (response.data.success == false) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/cabinet/loans');
      } else {
        console.log(response);
      }
    });
  };

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
          setStepResult(parseInt(res.data.step));
        }
      }
    })["catch"](console.log('log'));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    canSendRepeat();
  }, []);

  var StepReg = function StepReg() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: step === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep2__WEBPACK_IMPORTED_MODULE_5__["default"], {
        next: step,
        setNext: setStep,
        userDate: userReducer.user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 63,
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
        lineNumber: 69,
        columnNumber: 43
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "inputs_continue ",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0443\u043C\u043C\u0430 : ", summa, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
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
          lineNumber: 73,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: ["\u0421\u0440\u043E\u043A : ", srok, " \u0434\u043D\u0435\u0439"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 16
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "mt-5 mb-3 text-center",
      children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, _this), stepResult === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StepReg, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_continue_ContinueStep3__WEBPACK_IMPORTED_MODULE_6__["default"], {
      userDate: userReducer.user,
      summa: summa,
      srok: srok
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 7
  }, _this);
};

_s(Continue, "az9G6JJYTvVpbKed27GLksZpEBk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9jb250aW51ZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwiQ29udGludWUiLCJ1c2VTdGF0ZSIsInN0ZXBSZXN1bHQiLCJzZXRTdGVwUmVzdWx0Iiwic3VtbWEiLCJzZXRTdW1tYSIsInNyb2siLCJzZXRTcm9rIiwic3RlcCIsInNldFN0ZXAiLCJzZW5kUmVwZWF0Iiwic2V0U2VuZFJlcGVhdCIsImNhblNlbmRSZXBlYXQiLCJheGlvcyIsImdldCIsInVzZXIiLCJVRl80IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdWNjZXNzIiwiZ2V0Q3VycmVudFN0ZXAiLCJSb3V0ZXIiLCJwdXNoIiwiaGVhZGVycyIsInJlcyIsInBhcnNlSW50IiwidXNlRWZmZWN0IiwiU3RlcFJlZyIsIlVGXzUiLCJVRl82IiwiZSIsInRhcmdldCIsInZhbHVlIiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQUNDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFwQjtBQUFpQ0MsY0FBVSxFQUFFRixLQUFLLENBQUNFLFVBQW5EO0FBQStEQyxlQUFXLEVBQUVILEtBQUssQ0FBQ0c7QUFBbEYsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBbUI7QUFBQTs7QUFBQSxNQUFqQkgsV0FBaUIsUUFBakJBLFdBQWlCOztBQUFBLGtCQUNDSSxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQzNCQyxV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O0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaQSxlQVlTO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaVCxlQWFFO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsRUFnQkdqQyxVQUFVLEtBQUssQ0FBZixnQkFBbUIscUVBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQW5CLGdCQUFpQyxxRUFBQywwRUFBRDtBQUFlLGNBQVEsRUFBRUwsV0FBVyxDQUFDa0IsSUFBckM7QUFBMkMsV0FBSyxFQUFFWCxLQUFsRDtBQUF5RCxVQUFJLEVBQUVFO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQnBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJELENBNUVEOztHQUFNTixROztLQUFBQSxRO0FBOEVTb0Msd0lBQVEsQ0FBQ0MsMkRBQU8sQ0FBQzFDLGVBQUQsRUFBaUIsSUFBakIsQ0FBUCxDQUE4QkssUUFBOUIsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjA2ZjM5YWEyMmI3NDRjZjZkNWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQ29udGludWVTdGVwMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250aW51ZS9Db250aW51ZVN0ZXAyXCJcclxuaW1wb3J0IENvbnRpbnVlU3RlcDMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGludWUvQ29udGludWVTdGVwM1wiXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoXCJcclxuaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9Qcm9ncmVzc2JhclwiXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXIsIHVzZXJTdGF0dXM6IHN0YXRlLnVzZXJTdGF0dXMsIHVzZXJIaXN0b3J5OiBzdGF0ZS51c2VySGlzdG9yeX1cclxufVxyXG5cclxuY29uc3QgQ29udGludWUgPSAoe3VzZXJSZWR1Y2VyfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGVwUmVzdWx0LHNldFN0ZXBSZXN1bHRdID0gdXNlU3RhdGUoMSlcclxuICBjb25zdCBbc3VtbWEsc2V0U3VtbWFdID0gdXNlU3RhdGUoNTUwMDApXHJcbiAgY29uc3QgW3Nyb2ssc2V0U3Jva10gPSB1c2VTdGF0ZSgyMClcclxuICBjb25zdCBbc3RlcCwgc2V0U3RlcF0gID0gdXNlU3RhdGUoc3RlcFJlc3VsdClcclxuICBjb25zdCBbc2VuZFJlcGVhdCwgc2V0U2VuZFJlcGVhdF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG5cclxuICBjb25zdCBjYW5TZW5kUmVwZWF0ID0gKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgIC5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVwZWF0VXNlcj9paW49JHt1c2VyUmVkdWNlci51c2VyLlVGXzR9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFN0ZXAoKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvbG9hbnMnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgZ2V0Q3VycmVudFN0ZXAgPSgpID0+IHtcclxuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9ub3RGdWxsP2lpbj0ke3VzZXJSZWR1Y2VyLnVzZXIuVUZfNH1gLCB7aGVhZGVyczoge1xyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgIH19KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5zdGVwPT09Mykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvbG9hbnMnKVxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTdGVwKHBhcnNlSW50KHJlcy5kYXRhLnN0ZXApKVxyXG4gICAgICAgICAgICBzZXRTdGVwUmVzdWx0KHBhcnNlSW50KHJlcy5kYXRhLnN0ZXApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoIChcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9nJylcclxuICAgICAgKVxyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY2FuU2VuZFJlcGVhdCgpXHJcbiAgfSxbXSlcclxuICBjb25zdCBTdGVwUmVnID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG4gICAgICB7c3RlcD09PSAxPyBcclxuICAgICAgIDxDb250aW51ZVN0ZXAyIG5leHQ9e3N0ZXB9IHNldE5leHQ9e3NldFN0ZXB9IHVzZXJEYXRlPXt1c2VyUmVkdWNlci51c2VyfS8+IDogPENvbnRpbnVlU3RlcDMgc3RlcD17c3RlcH0gc2V0U3RlcD17c2V0U3RlcH0gc3RlcFJlc3VsdD17c3RlcFJlc3VsdH0gdXNlckRhdGU9e3VzZXJSZWR1Y2VyLnVzZXJ9IHN1bW1hPXtzdW1tYX0gc3Jvaz17c3Jva30vPn1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG4gIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J290aGVyUGFnZXMgY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQgYWxlcnQtaW5mbyc+PGI+e3VzZXJSZWR1Y2VyLnVzZXIuVUZfNX0ge3VzZXJSZWR1Y2VyLnVzZXIuVUZfNn0sINCy0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC+0LfQsNC/0L7Qu9C90LjRgtGMINCw0L3QutC10YLRgywg0YfRgtC+0LHRiyDQv9C+0LvRg9GH0LjRgtGMINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0LnQvDwvYj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXRzX2NvbnRpbnVlICc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFuZ2UtZ3JvdXAnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YPQvNC80LAgOiB7c3VtbWF9INGC0LM8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtzdW1tYX0gb25DaGFuZ2U9e2U9PnNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX0gdHlwZT0ncmFuZ2UnIHN0ZXA9JzUwMDAnIG1pbj0nMTAwMDAnIG1heD0nMTQ1MDAwJyBjbGFzc05hbWU9J3JhbmdlJz48L2lucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFuZ2UtZ3JvdXAnPlxyXG4gICAgICAgICAgPGxhYmVsPtCh0YDQvtC6IDoge3Nyb2t9INC00L3QtdC5PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c3Jva30gb25DaGFuZ2U9e2U9PnNldFNyb2soZS50YXJnZXQudmFsdWUpfSB0eXBlPSdyYW5nZScgbWluPScxNScgbWF4PSczMCcgY2xhc3NOYW1lPSdyYW5nZSc+PC9pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8YnI+PC9icj48YnI+PC9icj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdtdC01IG1iLTMgdGV4dC1jZW50ZXInPtCf0YDQvtC00L7Qu9C20LjRgtGMINCw0L3QutC10YLRgzwvaDM+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHtzdGVwUmVzdWx0ID09PSAxID8gPFN0ZXBSZWcgLz4gOiA8Q29udGludWVTdGVwMyB1c2VyRGF0ZT17dXNlclJlZHVjZXIudXNlcn0gc3VtbWE9e3N1bW1hfSBzcm9rPXtzcm9rfS8+fVxyXG4gICAgICAgey8qIDxDb250aW51ZVN0ZXAzIC8+ICovfVxyXG4gICAgICB7LyogPENvbnRpbnVlU3RlcDMgLz4gKi99XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG51bGwpKENvbnRpbnVlKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==