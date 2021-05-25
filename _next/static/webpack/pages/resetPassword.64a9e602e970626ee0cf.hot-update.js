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
            router.push('/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzZXRQYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInN1Y2Nlc3NNZXNzYWdlIiwibWVzc2FnZSIsImVtcHR5TWVzc2FnZSIsIlJlc2V0UGFzd29yZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlpbiIsInF1ZXJ5IiwicGhvbmUiLCJ1c2VTdGF0ZSIsImJ0bkxvYWRpbmciLCJzZXRCdG5Mb2FkaW5nIiwic2V0TWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsInBhc3N3b3JkIiwibGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwic3dhbCIsInB1c2giLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNWYWxpZGF0aW5nIiwiaXNTdWJtaXR0aW5nIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENDLGtCQUFjLEVBQUUsd0JBQUFDLE9BQU8sRUFBSTtBQUN6QkYsY0FBUSxDQUFDQyxvRkFBYyxDQUFDQyxPQUFELENBQWYsQ0FBUjtBQUNELEtBSHVDO0FBSXhDQyxnQkFBWSxFQUFFLHdCQUFNO0FBQ2xCSCxjQUFRLENBQUNHLGtGQUFZLEVBQWIsQ0FBUjtBQUNEO0FBTnVDLEdBQWY7QUFBQSxDQUEzQjs7QUFTQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEeUIsTUFFbEJD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUREO0FBQUE7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdFRCxDQXJHRDs7R0FBTVAsWTtVQUNXRSxxRDs7O0tBRFhGLFk7QUF1R1MrQiwwSEFBTyxDQUFDLElBQUQsRUFBT3BDLGtCQUFQLENBQVAsQ0FBa0NLLFlBQWxDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVzZXRQYXNzd29yZC42NGE5ZTYwMmU5NzA2MjZlZTBjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEVycm9yTWVzc2FnZSwgRmllbGRBcnJheSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3N1Y2Nlc3NNZXNzYWdlLCBlbXB0eU1lc3NhZ2V9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IG1lc3NhZ2UgPT4ge1xyXG4gICAgZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UobWVzc2FnZSkpO1xyXG4gIH0sXHJcbiAgZW1wdHlNZXNzYWdlOiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSlcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBSZXNldFBhc3dvcmQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWlufSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtwaG9uZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYnRuTG9hZGluZyxcclxuICAgIHNldEJ0bkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21lc3NhZ2UsXHJcbiAgICBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSxcclxuICAgIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkID09PSAnJykge1xyXG4gICAgICBzZXRFcnJvck1lc3NhZ2UoJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCcpXHJcbiAgICB9XHJcbiAgICBpZih2YWx1ZXMucGFzc3dvcmQubGVuZ3RoPjAgJiYgdmFsdWVzLnBhc3N3b3JkLmxlbmd0aDw2KSB7XHJcbiAgICAgIHNldEVycm9yTWVzc2FnZSgn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSA1INGB0LjQvNCy0L7Qu9C+0LInKVxyXG4gICAgfVxyXG4gICAgaWYodmFsdWVzLnBhc3N3b3JkLmxlbmd0aD40JiZ2YWx1ZXMucGFzc3dvcmQgIT09IHZhbHVlcy5wYXNzd29yZENvbmZpcm0pIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCfQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YInKVxyXG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKG51bGwpXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcy5wYXNzd29yZC5sZW5ndGgpXHJcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZXNldFBhc3N3b3JkP3Bob25lPSR7cGhvbmV9Jmlpbj0ke2lpbn0mcGFzc3dvcmQ9JHt2YWx1ZXMucGFzc3dvcmR9YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLQn9GA0L7RhtC10L3RgiDRgdC+0LLQvNC10YHRgtC40LzQvtGB0YLQuFwiLCBg0LLQsNGIINC/0LDRgNC+0LvRjCDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC9YCwgXCJpbmZvXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm90aGVyUGFnZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BsYXRhIGZlZWRiYWNrIHJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvcGxhdGUtLWZvcm0gZmVlZGJhY2tGb3JtXCI+XHJcbiAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHBob25lLFxyXG4gICAgICAgICAgICAgICAgaWluOiBpaW4sXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZENvbmZpcm06ICcnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgaXNTdWJtaXR0aW5nfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJvcGxhdGFmb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01XCI+0JLQvtGB0YHRgtCw0L3QvtCy0LvQtdC90LjQtSDQv9Cw0YDQvtC70Y88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIHttZXNzYWdlICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxufVxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxufVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9XCLQndC+0LLRi9C5INC/0LDRgNC+0LvRjFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkQ29uZmlybSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC00YLQstC10YDQttC00LXQvdC40LUg0L/QsNGA0L7Qu9GPXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7YnRuTG9hZGluZyA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxTcGlubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezIwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGlubmVyV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbmJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7Qn9C+0LTRgtCy0LXRgNC00LjRgtGMPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdChjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoUmVzZXRQYXN3b3JkKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=