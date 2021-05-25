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
      console.log(values); // axios.get(`https://api.money-men.kz/api/checkPerson?phone=${phone}&iin=${iin}&password=${values.password}`)
      //   .then(res=> {
      //     console.log(res)
      //   })
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
                    lineNumber: 68,
                    columnNumber: 21
                  }, _this), message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "alert alert-success",
                    role: "alert",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 71,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 25
                  }, _this) : null, errorMessage !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "alert alert-danger",
                    role: "alert",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: errorMessage
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 78,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 25
                  }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
                      name: "password",
                      type: "password",
                      placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
                      name: "passwordConfirm",
                      type: "password",
                      placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
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
                      lineNumber: 96,
                      columnNumber: 27
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "loginbutton",
                      type: "submit",
                      children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXRQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN1Y2Nlc3NNZXNzYWdlIiwibWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIlJlc2V0UGFzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlpbiIsInF1ZXJ5IiwicGhvbmUiLCJ1c2VTdGF0ZSIsImJ0bkxvYWRpbmciLCJzZXRCdG5Mb2FkaW5nIiwic2V0TWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsInBhc3N3b3JkIiwibGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsInRvdWNoZWQiLCJpc1ZhbGlkYXRpbmciLCJpc1N1Ym1pdHRpbmciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDQyxrQkFBYyxFQUFFLHdCQUFBQyxPQUFPLEVBQUk7QUFDekJGLGNBQVEsQ0FBQ0Msb0ZBQWMsQ0FBQ0MsT0FBRCxDQUFmLENBQVI7QUFDRCxLQUh1QztBQUl4Q0MsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkgsY0FBUSxDQUFDRyxrRkFBWSxFQUFiLENBQVI7QUFDRDtBQU51QyxHQUFmO0FBQUEsQ0FBM0I7O0FBU0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHlCLE1BRWxCQyxHQUZrQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFbEJELEdBRmtCO0FBQUEsTUFHbEJFLEtBSGtCLEdBR1RK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QUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFsQkYsZUFxQkU7QUFBSyw2QkFBUyxFQUFDLGFBQWY7QUFBQSwyQ0FDRSxxRUFBQyw0Q0FBRDtBQUNFLDBCQUFJLEVBQUMsaUJBRFA7QUFFRSwwQkFBSSxFQUFDLFVBRlA7QUFHRSxpQ0FBVyxFQUFDO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBckJGLGVBNEJFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0dILFVBQVUsS0FBSyxJQUFmLGdCQUNHLHFFQUFDLDZEQUFEO0FBQ0UsK0JBQVMsRUFBQyxTQURaO0FBRUUsMEJBQUksRUFBRSxHQUZSO0FBR0Usa0NBQVksRUFBRSxTQUhoQjtBQUlFLGtDQUFZLEVBQUUsQ0FKaEI7QUFLRSw2QkFBTyxFQUFFO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFESCxnQkFPRztBQUFRLCtCQUFTLEVBQUMsYUFBbEI7QUFBZ0MsMEJBQUksRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERDtBQUFBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0EvRkQ7O0dBQU1QLFk7VUFDV0UscUQ7OztLQURYRixZO0FBaUdTdUIsMEhBQU8sQ0FBQyxJQUFELEVBQU81QixrQkFBUCxDQUFQLENBQWtDSyxZQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2V0UGFzc3dvcmQuOTEyMDBiN2U3OTVhNWUxNmFkMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBFcnJvck1lc3NhZ2UsIEZpZWxkQXJyYXksIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtzdWNjZXNzTWVzc2FnZSwgZW1wdHlNZXNzYWdlfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0FjdGlvbkNyZWF0b3JzJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IG1lc3NhZ2UgPT4ge1xyXG4gICAgZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UobWVzc2FnZSkpO1xyXG4gIH0sXHJcbiAgZW1wdHlNZXNzYWdlOiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSlcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBSZXNldFBhc3dvcmQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWlufSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwaG9uZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYnRuTG9hZGluZyxcclxuICAgIHNldEJ0bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21lc3NhZ2UsXHJcbiAgICBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSxcclxuICAgIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCcpXHJcbiAgICB9XHJcbiAgICBpZih2YWx1ZXMucGFzc3dvcmQubGVuZ3RoPjAgJiYgdmFsdWVzLnBhc3N3b3JkLmxlbmd0aDw2KSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSA1INGB0LjQvNCy0L7Qu9C+0LInKVxyXG4gICAgfVxyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkLmxlbmd0aD40JiZ2YWx1ZXMucGFzc3dvcmQgIT09IHZhbHVlcy5wYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInKVxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAvLyBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvY2hlY2tQZXJzb24/cGhvbmU9JHtwaG9uZX0maWluPSR7aWlufSZwYXNzd29yZD0ke3ZhbHVlcy5wYXNzd29yZH1gKVxyXG4gICAgICAvLyAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgLy8gICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm90aGVyUGFnZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BsYXRhIGZlZWRiYWNrIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvcGxhdGUtLWZvcm0gZmVlZGJhY2tGb3JtXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgaWluOiBpaW4sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm06ICcnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgaXNTdWJtaXR0aW5nfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJvcGxhdGFmb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01XCI+0JLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjQtSDQv9Cw0YDQvtC70Y88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxufVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9XCLQndC+0LLRi9C5INC/0LDRgNC+0LvRjFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkQ29uZmlybSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YnRuTG9hZGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbmJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7Qn9C+0LTRgtCy0LXRgNC00LjRgtGMPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdChjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVzZXRQYXN3b3JkKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=