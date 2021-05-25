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
          sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Процент совместимости", "\u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D", "info").then(function () {
            location.reload();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXRQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN1Y2Nlc3NNZXNzYWdlIiwibWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIlJlc2V0UGFzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlpbiIsInF1ZXJ5IiwicGhvbmUiLCJ1c2VTdGF0ZSIsImJ0bkxvYWRpbmciLCJzZXRCdG5Mb2FkaW5nIiwic2V0TWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsInBhc3N3b3JkIiwibGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwic3dhbCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDQyxrQkFBYyxFQUFFLHdCQUFBQyxPQUFPLEVBQUk7QUFDekJGLGNBQVEsQ0FBQ0Msb0ZBQWMsQ0FBQ0MsT0FBRCxDQUFmLENBQVI7QUFDRCxLQUh1QztBQUl4Q0MsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkgsY0FBUSxDQUFDRyxrRkFBWSxFQUFiLENBQVI7QUFDRDtBQU51QyxHQUFmO0FBQUEsQ0FBM0I7O0FBU0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhC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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERDtBQUFBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRUQsQ0FyR0Q7O0dBQU1QLFk7VUFDV0UscUQ7OztLQURYRixZO0FBdUdTZ0MsMEhBQU8sQ0FBQyxJQUFELEVBQU9yQyxrQkFBUCxDQUFQLENBQWtDSyxZQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2V0UGFzc3dvcmQuMjk5NTg5NWU5Y2I1OWNjMjYzZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBFcnJvck1lc3NhZ2UsIEZpZWxkQXJyYXksIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtzdWNjZXNzTWVzc2FnZSwgZW1wdHlNZXNzYWdlfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0FjdGlvbkNyZWF0b3JzJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHN1Y2Nlc3NNZXNzYWdlOiBtZXNzYWdlID0+IHtcclxuICAgIGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICB9LFxyXG4gIGVtcHR5TWVzc2FnZTogKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgUmVzZXRQYXN3b3JkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lpbn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7cGhvbmV9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2J0bkxvYWRpbmcsXHJcbiAgICBzZXRCdG5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttZXNzYWdlLFxyXG4gICAgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsXHJcbiAgICBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gdmFsdWVzID0+IHtcclxuICAgIGlmKHZhbHVlcy5wYXNzd29yZCA9PT0gJycpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCfQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YwnKVxyXG4gICAgfVxyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkLmxlbmd0aD4wICYmIHZhbHVlcy5wYXNzd29yZC5sZW5ndGg8Nikge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ9Cf0LDRgNC+0LvRjCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L3QtSDQvNC10L3RjNGI0LUgNSDRgdC40LzQstC+0LvQvtCyJylcclxuICAgIH1cclxuICAgIGlmKHZhbHVlcy5wYXNzd29yZC5sZW5ndGg+NCYmdmFsdWVzLnBhc3N3b3JkICE9PSB2YWx1ZXMucGFzc3dvcmRDb25maXJtKSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgn0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCJylcclxuICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZShudWxsKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMucGFzc3dvcmQubGVuZ3RoKVxyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVzZXRQYXNzd29yZD9waG9uZT0ke3Bob25lfSZpaW49JHtpaW59JnBhc3N3b3JkPSR7dmFsdWVzLnBhc3N3b3JkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBzd2FsKFwi0J/RgNC+0YbQtdC90YIg0YHQvtCy0LzQtdGB0YLQuNC80L7RgdGC0LhcIiwgYNCy0LDRiCDQv9Cw0YDQvtC70Ywg0YPRgdC/0LXRiNC90L4g0L7QsdC90L7QstC70LXQvWAsIFwiaW5mb1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3RoZXJQYWdlc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGxhdGEgZmVlZGJhY2sgcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG9wbGF0ZS0tZm9ybSBmZWVkYmFja0Zvcm1cIj5cclxuICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICBwaG9uZTogcGhvbmUsXHJcbiAgICAgICAgICAgICAgICBpaW46IGlpbixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybTogJycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmd9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm9wbGF0YWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj7QktC+0YHRgdGC0LDQvdC+0LLQu9C10L3QuNC1INC/0LDRgNC+0LvRjzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2UgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG59XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cItCd0L7QstGL0Lkg0L/QsNGA0L7Qu9GMXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmRDb25maXJtJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDQv9Cw0YDQvtC70Y9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbkZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtidG5Mb2FkaW5nID09PSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17MjAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lckNvbG9yPXtcIiNlZjIyMjFcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXJXaWR0aD17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPtCf0L7QtNGC0LLQtdGA0LTQuNGC0Yw8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShSZXNldFBhc3dvcmQpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==