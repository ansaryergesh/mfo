webpackHotUpdate_N_E("pages/resetPassword",{

/***/ "./pages/resetPassword.js":
/*!********************************!*\
  !*** ./pages/resetPassword.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/ActionCreators */ "./store/actions/ActionCreators.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\resetPassword.js",
    _this = undefined,
    _s = $RefreshSig$();










var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    successMessage: function successMessage(message) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_6__["successMessage"])(message));
    },
    emptyMessage: function emptyMessage() {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_6__["emptyMessage"])());
    }
  };
};

var ResetPasword = function ResetPasword() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var iin = router.query.iin;
  var phone = router.query.phone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      btnLoading = _useState[0],
      setBtnLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      errorMessage = _useState3[0],
      setErrorMessage = _useState3[1];

  var handleSubmit = function handleSubmit(values) {
    if (values.password === '') {
      setErrorMessage('Введите пароль');
    }

    if (values.password.length > 0 && values.password.length < 6) {
      setErrorMessage('Пароль должен быть не меньше 5 символов');
    }

    if (values.password.length > 4 && values.password !== values.passwordConfirm) {
      setErrorMessage('Пароли не совпадают');
      console.log(values);
    } else {
      setErrorMessage(null); // console.log(values.password.length)

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.money-men.kz/api/resetPassword?phone=".concat(phone, "&iin=").concat(iin, "&password=").concat(values.password)).then(function (res) {
        console.log(res);

        if (res.data.success) {
          sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("", "\u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D", "success").then(function () {
            router.push('/login');
          });
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: "otherPages",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: "oplata feedback row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " oplate--form feedbackForm",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
              initialValues: {
                phone: phone,
                iin: iin,
                password: '',
                passwordConfirm: ''
              },
              onSubmit: function onSubmit(values) {
                handleSubmit(values);
              },
              children: function children(_ref) {
                var errors = _ref.errors,
                    touched = _ref.touched,
                    isValidating = _ref.isValidating,
                    isSubmitting = _ref.isSubmitting;
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
                  className: "oplataform",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                    className: "text-center mb-5",
                    children: "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, _this), message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "alert alert-success",
                    role: "alert",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 25
                  }, _this) : null, errorMessage !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "alert alert-danger",
                    role: "alert",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: errorMessage
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 25
                  }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
                      name: "password",
                      type: "password",
                      placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
                      name: "passwordConfirm",
                      type: "password",
                      placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "buttonForm",
                    children: btnLoading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_2___default.a, {
                      className: "loading",
                      size: 200,
                      spinnerColor: "#ef2221",
                      spinnerWidth: 2,
                      visible: true
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 27
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "loginbutton",
                      type: "submit",
                      children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(ResetPasword, "Lz71gvJrk9pASix482A15Jx1pnU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = ResetPasword;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(ResetPasword));

var _c;

$RefreshReg$(_c, "ResetPasword");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXRQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN1Y2Nlc3NNZXNzYWdlIiwibWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIlJlc2V0UGFzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlpbiIsInF1ZXJ5IiwicGhvbmUiLCJ1c2VTdGF0ZSIsImJ0bkxvYWRpbmciLCJzZXRCdG5Mb2FkaW5nIiwic2V0TWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsInBhc3N3b3JkIiwibGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwic3dhbCIsInB1c2giLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNWYWxpZGF0aW5nIiwiaXNTdWJtaXR0aW5nIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENDLGtCQUFjLEVBQUUsd0JBQUFDLE9BQU8sRUFBSTtBQUN6QkYsY0FBUSxDQUFDQyxvRkFBYyxDQUFDQyxPQUFELENBQWYsQ0FBUjtBQUNELEtBSHVDO0FBSXhDQyxnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCSCxjQUFRLENBQUNHLGtGQUFZLEVBQWIsQ0FBUjtBQUNEO0FBTnVDLEdBQWY7QUFBQSxDQUEzQjs7QUFTQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEeUIsTUFFbEJD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQ7QUFBQTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0VELENBckdEOztHQUFNUCxZO1VBQ1dFLHFEOzs7S0FEWEYsWTtBQXVHUytCLDBIQUFPLENBQUMsSUFBRCxFQUFPcEMsa0JBQVAsQ0FBUCxDQUFrQ0ssWUFBbEMsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNldFBhc3N3b3JkLmY3NGMwZmM4Yjg4MmQzMDgwNjMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1zcGlubmVyLW1hdGVyaWFsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRXJyb3JNZXNzYWdlLCBGaWVsZEFycmF5LCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7c3VjY2Vzc01lc3NhZ2UsIGVtcHR5TWVzc2FnZX0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzdWNjZXNzTWVzc2FnZTogbWVzc2FnZSA9PiB7XHJcbiAgICBkaXNwYXRjaChzdWNjZXNzTWVzc2FnZShtZXNzYWdlKSk7XHJcbiAgfSxcclxuICBlbXB0eU1lc3NhZ2U6ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IFJlc2V0UGFzd29yZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpaW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3Bob25lfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFtidG5Mb2FkaW5nLFxyXG4gICAgc2V0QnRuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbWVzc2FnZSxcclxuICAgIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLFxyXG4gICAgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHZhbHVlcyA9PiB7XHJcbiAgICBpZih2YWx1ZXMucGFzc3dvcmQgPT09ICcnKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgn0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMJylcclxuICAgIH1cclxuICAgIGlmKHZhbHVlcy5wYXNzd29yZC5sZW5ndGg+MCAmJiB2YWx1ZXMucGFzc3dvcmQubGVuZ3RoPDYpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCfQn9Cw0YDQvtC70Ywg0LTQvtC70LbQtdC9INCx0YvRgtGMINC90LUg0LzQtdC90YzRiNC1IDUg0YHQuNC80LLQvtC70L7QsicpXHJcbiAgICB9XHJcbiAgICBpZih2YWx1ZXMucGFzc3dvcmQubGVuZ3RoPjQmJnZhbHVlcy5wYXNzd29yZCAhPT0gdmFsdWVzLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgicpXHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UobnVsbClcclxuICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzLnBhc3N3b3JkLmxlbmd0aClcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Jlc2V0UGFzc3dvcmQ/cGhvbmU9JHtwaG9uZX0maWluPSR7aWlufSZwYXNzd29yZD0ke3ZhbHVlcy5wYXNzd29yZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgc3dhbChcIlwiLCBg0LLQsNGIINC/0LDRgNC+0LvRjCDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3RoZXJQYWdlc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGxhdGEgZmVlZGJhY2sgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG9wbGF0ZS0tZm9ybSBmZWVkYmFja0Zvcm1cIj5cclxuICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICBpaW46IGlpbixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybTogJycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmd9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm9wbGF0YWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj7QktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1INC/0LDRgNC+0LvRjzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG59XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmRDb25maXJtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtidG5Mb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lckNvbG9yPXtcIiNlZjIyMjFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXJXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPtCf0L7QtNGC0LLQtdGA0LTQuNGC0Yw8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZXNldFBhc3dvcmQpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==