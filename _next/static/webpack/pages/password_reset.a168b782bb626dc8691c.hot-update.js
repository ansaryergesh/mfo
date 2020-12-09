webpackHotUpdate_N_E("pages/password_reset",{

/***/ "./pages/password_reset.js":
/*!*********************************!*\
  !*** ./pages/password_reset.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _defaults_validationredux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../defaults/validationredux */ "./defaults/validationredux.js");
/* harmony import */ var _store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../store/actions/ActionCreators */ "./store/actions/ActionCreators.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);










var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\password_reset.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import {validEmail, requiredd, iinValidation} from '../../defaults/validations';









var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, _this);
};

_c = AppLink;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    successMessage: function successMessage(message) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__["successMessage"])(message));
    }
  };
};

var Login = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Login);

    _this2 = _super.call(this, props);
    _this2.state = {
      btnLoading: false,
      message: null,
      errorMessage: null
    };
    _this2.handleSubmit = _this2.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Object(_defaults_validationredux__WEBPACK_IMPORTED_MODULE_16__["validEmail"])(values.email)) {
                  this.setState({
                    errorMessage: 'Email адрес введен неправильно'
                  });
                } else {
                  this.setState({
                    errorMessage: null
                  });
                  this.setState({
                    btnLoading: true
                  });
                  axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("https://api.money-men.kz/api/password/create", values).then(function (response) {
                    console.log(response);

                    _this3.setState({
                      btnLoading: false,
                      message: response.data.message
                    });

                    next_router__WEBPACK_IMPORTED_MODULE_18___default.a.push('/login');

                    _this3.props.successMessage(response.data.message);

                    setTimeout(function () {
                      _this3.props.emptyMessage;
                    }, 8000);
                  })["catch"](function (error) {
                    _this3.setState({
                      btnLoading: false,
                      errorMessage: error.response.data.message
                    });
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
          className: "otherPages",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("section", {
              className: "oplata feedback row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: " oplate--form feedbackForm",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("nav", {
                  "aria-label": "container breadcrumb",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("ol", {
                    className: "breadcrumb text-center",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                      className: "breadcrumb-item ",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(AppLink, {
                        className: "br-item",
                        href: "/login",
                        children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 52
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 19
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                      className: "breadcrumb-item active",
                      "aria-current": "page",
                      children: "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 19
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 15
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Formik"], {
                  initialValues: {
                    email: ""
                  },
                  onSubmit: function onSubmit(values) {
                    _this4.handleSubmit(values);
                  },
                  children: function children(_ref2) {
                    var errors = _ref2.errors,
                        touched = _ref2.touched,
                        isValidating = _ref2.isValidating,
                        isSubmitting = _ref2.isSubmitting;
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Form"], {
                      className: "oplataform",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                        className: "text-center mb-5",
                        children: "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 17
                      }, _this4), _this4.state.message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "alert alert-success",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                          children: [" ", _this4.state.message]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 25
                        }, _this4)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 23
                      }, _this4) : null, _this4.state.errorMessage !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "alert alert-danger",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                          children: [" ", _this4.state.errorMessage]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 25
                        }, _this4)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 23
                      }, _this4) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                          htmlFor: "email",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                            children: "Email \u0430\u0434\u0440\u0435\u0441:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 109,
                            columnNumber: 23
                          }, _this4)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 21
                        }, _this4), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                          name: "email",
                          type: "text",
                          placeholder: "\u0412\u0430\u0448 email \u0430\u0434\u0440\u0435\u0441"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 23
                        }, _this4)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 20
                      }, _this4), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "buttonForm",
                        children: _this4.state.btnLoading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_11___default.a, {
                          className: "loading",
                          size: 200,
                          spinnerColor: "#ef2221",
                          spinnerWidth: 2,
                          visible: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 23
                        }, _this4) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                          className: "loginbutton",
                          type: "submit",
                          children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 116,
                          columnNumber: 23
                        }, _this4)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 20
                      }, _this4)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 19
                    }, _this4);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, this);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(null, mapDispatchToProps)(Login));

var _c;

$RefreshReg$(_c, "AppLink");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFzc3dvcmRfcmVzZXQuanMiXSwibmFtZXMiOlsiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiYnRuTG9hZGluZyIsImVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJ2YWx1ZXMiLCJ2YWxpZEVtYWlsIiwiZW1haWwiLCJzZXRTdGF0ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsInNldFRpbWVvdXQiLCJlbXB0eU1lc3NhZ2UiLCJlcnJvciIsImVycm9ycyIsInRvdWNoZWQiLCJpc1ZhbGlkYXRpbmciLCJpc1N1Ym1pdHRpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFFBQVlBLFNBQVo7QUFBQSxNQUF1QkMsSUFBdkIsUUFBdUJBLElBQXZCO0FBQUEsc0JBQ2QscUVBQUMsaURBQUQ7QUFBTSxRQUFJLEVBQUVBLElBQVo7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBRUQsU0FBZDtBQUFBLGdCQUEwQkQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztLQUFNRCxPOztBQU1OLElBQU1JLGtCQUFrQixH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LEVBQUMsTUFBekI7QUFBZ0MscUNBQVcsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FkRCxlQW9CQztBQUFLLGlDQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJLE1BQUksQ0FBQ0YsS0FBTCxDQUFXQyxVQUFYLEtBQTBCLElBQTFCLGdCQUNELHFFQUFDLDhEQUFEO0FBQVMsbUNBQVMsRUFBQyxTQUFuQjtBQUE2Qiw4QkFBSSxFQUFFLEdBQW5DO0FBQXdDLHNDQUFZLEVBQUUsU0FBdEQ7QUFBaUUsc0NBQVksRUFBRSxDQUEvRTtBQUFrRixpQ0FBTyxFQUFFO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREMsZ0JBRUQ7QUFBUSxtQ0FBUyxFQUFDLGFBQWxCO0FBQWdDLDhCQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREQ7QUFBQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBd0RDOzs7O0VBekdld0IsNENBQUssQ0FBQ0MsUzs7QUE0R1JDLDJIQUFPLENBQUMsSUFBRCxFQUFNakMsa0JBQU4sQ0FBUCxDQUFpQ0ksS0FBakMsQ0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFzc3dvcmRfcmVzZXQuYTE2OGI3ODJiYjYyNmRjODY5MWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbi8vIGltcG9ydCB7dmFsaWRFbWFpbCwgcmVxdWlyZWRkLCBpaW5WYWxpZGF0aW9ufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEVycm9yTWVzc2FnZSwgRmllbGRBcnJheSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0ICB7dmFsaWRFbWFpbCxyZXF1aXJlZH0gZnJvbSAnLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnJlZHV4J1xyXG5pbXBvcnQge3N1Y2Nlc3NNZXNzYWdlLCBlbXB0eU1lc3NhZ2V9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IEFwcExpbmsgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWZ9KSA9PlxyXG4gIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XHJcbiAgPC9MaW5rPlxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzdWNjZXNzTWVzc2FnZTogbWVzc2FnZSA9PiB7IGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpKTsgfSxcclxufSlcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGwsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuIGFzeW5jIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpIHtcclxuXHJcbiAgIGlmKCF2YWxpZEVtYWlsKHZhbHVlcy5lbWFpbCkpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlcnJvck1lc3NhZ2U6J0VtYWlsINCw0LTRgNC10YEg0LLQstC10LTQtdC9INC90LXQv9GA0LDQstC40LvRjNC90L4nXHJcbiAgICB9KVxyXG4gICB9ZWxzZSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3JNZXNzYWdlOiBudWxsXHJcbiAgICB9KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGJ0bkxvYWRpbmc6dHJ1ZVxyXG4gICAgfSlcclxuICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcGFzc3dvcmQvY3JlYXRlYCwgdmFsdWVzKVxyXG5cclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICAgIH0pXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICB0aGlzLnByb3BzLnN1Y2Nlc3NNZXNzYWdlKHJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5lbXB0eU1lc3NhZ2VcclxuICAgICAgfSw4MDAwKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gICB9XHJcblxyXG5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdGhlclBhZ2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGxhdGEgZmVlZGJhY2sgcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3BsYXRlLS1mb3JtIGZlZWRiYWNrRm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImNvbnRhaW5lciBicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIFwiPjxBcHBMaW5rIGNsYXNzTmFtZT0nYnItaXRlbScgaHJlZj0nL2xvZ2luJz7Qm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L0FwcExpbms+PC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPtCh0LHRgNC+0YEg0L/QsNGA0L7Qu9GPPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgaXNTdWJtaXR0aW5nIH0pID0+KFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJvcGxhdGFmb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj7QodCx0YDQvtGBINC/0LDRgNC+0LvRjzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMuc3RhdGUubWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+RW1haWwg0LDQtNGA0LXRgTo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwi0JLQsNGIIGVtYWlsINCw0LTRgNC10YFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnRuTG9hZGluZyA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjbGFzc05hbWU9XCJsb2FkaW5nXCIgc2l6ZT17MjAwfSBzcGlubmVyQ29sb3I9e1wiI2VmMjIyMVwifSBzcGlubmVyV2lkdGg9ezJ9IHZpc2libGU9e3RydWV9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW5idXR0b25cIiB0eXBlPVwic3VibWl0XCI+0KHQsdGA0L7RgdC40YLRjDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=