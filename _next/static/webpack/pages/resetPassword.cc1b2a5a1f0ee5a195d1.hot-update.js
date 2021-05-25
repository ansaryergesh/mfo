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
    } else {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.money-men.kz/api/checkPerson?phone=".concat(phone, "&iin=").concat(iin, "&password=").concat(values.password)).then(function (res) {
        console.log(res);
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
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this), message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "alert alert-success",
                    role: "alert",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: message
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 25
                  }, _this) : null, errorMessage !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "alert alert-danger",
                    role: "alert",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
                      children: errorMessage
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 25
                  }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
                      name: "password",
                      type: "password",
                      placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "input-group",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Field"], {
                      name: "passwordConfirm",
                      type: "password",
                      placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
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
                      lineNumber: 94,
                      columnNumber: 27
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "loginbutton",
                      type: "submit",
                      children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 27
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXRQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN1Y2Nlc3NNZXNzYWdlIiwibWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIlJlc2V0UGFzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlpbiIsInF1ZXJ5IiwicGhvbmUiLCJ1c2VTdGF0ZSIsImJ0bkxvYWRpbmciLCJzZXRCdG5Mb2FkaW5nIiwic2V0TWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsInBhc3N3b3JkIiwibGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVycm9ycyIsInRvdWNoZWQiLCJpc1ZhbGlkYXRpbmciLCJpc1N1Ym1pdHRpbmciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDQyxrQkFBYyxFQUFFLHdCQUFBQyxPQUFPLEVBQUk7QUFDekJGLGNBQVEsQ0FBQ0Msb0ZBQWMsQ0FBQ0MsT0FBRCxDQUFmLENBQVI7QUFDRCxLQUh1QztBQUl4Q0MsZ0JBQVksRUFBRSx3QkFBTTtBQUNsQkgsY0FBUSxDQUFDRyxrRkFBWSxFQUFiLENBQVI7QUFDRDtBQU51QyxHQUFmO0FBQUEsQ0FBM0I7O0FBU0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRHlCLE1BRWxCQyxHQUZrQixHQUVYRixNQUFNLENBQUNHLEtBRkksQ0FFbEJELEdB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LENBQWtDSyxZQUFsQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Jlc2V0UGFzc3dvcmQuY2MxYjJhNWExZjBlZTVhMTk1ZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBFcnJvck1lc3NhZ2UsIEZpZWxkQXJyYXksIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtzdWNjZXNzTWVzc2FnZSwgZW1wdHlNZXNzYWdlfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0FjdGlvbkNyZWF0b3JzJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IG1lc3NhZ2UgPT4ge1xyXG4gICAgZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UobWVzc2FnZSkpO1xyXG4gIH0sXHJcbiAgZW1wdHlNZXNzYWdlOiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSlcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBSZXNldFBhc3dvcmQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWlufSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwaG9uZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYnRuTG9hZGluZyxcclxuICAgIHNldEJ0bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21lc3NhZ2UsXHJcbiAgICBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSxcclxuICAgIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCcpXHJcbiAgICB9XHJcbiAgICBpZih2YWx1ZXMucGFzc3dvcmQubGVuZ3RoPjAgJiYgdmFsdWVzLnBhc3N3b3JkLmxlbmd0aDw2KSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSA1INGB0LjQvNCy0L7Qu9C+0LInKVxyXG4gICAgfVxyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkLmxlbmd0aD40ICYmIHZhbHVlcy5wYXNzd29yZCAhPT0gdmFsdWVzLnBhc3N3b3JkQ29uZmlybSkge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ9Cf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RgicpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2NoZWNrUGVyc29uP3Bob25lPSR7cGhvbmV9Jmlpbj0ke2lpbn0mcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdGhlclBhZ2VzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9wbGF0YSBmZWVkYmFjayByb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3BsYXRlLS1mb3JtIGZlZWRiYWNrRm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICAgICAgICAgIGlpbjogaWluLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiAnJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQodmFsdWVzKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkLCBpc1ZhbGlkYXRpbmcsIGlzU3VibWl0dGluZ30pID0+IChcclxuICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwib3BsYXRhZm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNVwiPtCS0L7RgdGB0YLQsNC90L7QstC70LXQvdC40LUg0L/QsNGA0L7Qu9GPPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZSAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbn1cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdwYXNzd29yZCcgdHlwZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPVwi0J3QvtCy0YvQuSDQv9Cw0YDQvtC70YxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZENvbmZpcm0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QtNGC0LLQtdGA0LbQtNC10L3QuNC1INC/0LDRgNC+0LvRj1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2J0bkxvYWRpbmcgPT09IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyQ29sb3I9e1wiI2VmMjIyMVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bpbm5lcldpZHRoPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dHJ1ZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxidXR0b24gY2xhc3NOYW1lPVwibG9naW5idXR0b25cIiB0eXBlPVwic3VibWl0XCI+0J/QvtC00YLQstC10YDQtNC40YLRjDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJlc2V0UGFzd29yZCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9