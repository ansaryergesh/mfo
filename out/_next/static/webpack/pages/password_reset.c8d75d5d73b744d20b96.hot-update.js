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
    },
    emptyMessage: function emptyMessage() {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_17__["emptyMessage"])());
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
                        lineNumber: 77,
                        columnNumber: 52
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 77,
                      columnNumber: 19
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("li", {
                      className: "breadcrumb-item active",
                      "aria-current": "page",
                      children: "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 19
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
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
                        lineNumber: 93,
                        columnNumber: 17
                      }, _this4), _this4.state.message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "alert alert-success",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                          children: [" ", _this4.state.message]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 25
                        }, _this4)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 23
                      }, _this4) : null, _this4.state.errorMessage !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "alert alert-danger",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("strong", {
                          children: [" ", _this4.state.errorMessage]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 25
                        }, _this4)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 23
                      }, _this4) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("label", {
                          htmlFor: "email",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h2", {
                            children: "Email \u0430\u0434\u0440\u0435\u0441:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 23
                          }, _this4)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 21
                        }, _this4), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                          name: "email",
                          type: "text",
                          placeholder: "\u0412\u0430\u0448 email \u0430\u0434\u0440\u0435\u0441"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 109,
                          columnNumber: 23
                        }, _this4)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
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
                          lineNumber: 113,
                          columnNumber: 23
                        }, _this4) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
                          className: "loginbutton",
                          type: "submit",
                          children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 114,
                          columnNumber: 23
                        }, _this4)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 20
                      }, _this4)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 19
                    }, _this4);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFzc3dvcmRfcmVzZXQuanMiXSwibmFtZXMiOlsiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiYnRuTG9hZGluZyIsImVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJ2YWx1ZXMiLCJ2YWxpZEVtYWlsIiwiZW1haWwiLCJzZXRTdGF0ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLE1BQVlDLFNBQVosUUFBWUEsU0FBWjtBQUFBLE1BQXVCQyxJQUF2QixRQUF1QkEsSUFBdkI7QUFBQSxzQkFDZCxxRUFBQyxpREFBRDtBQUFNLFFBQUksRUFBRUEsSUFBWjtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFRCxTQUFkO0FBQUEsZ0JBQTBCRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O0tBQU1ELE87O0FBTU4sSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtC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QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBZEQsZUFvQkM7QUFBSyxpQ0FBUyxFQUFDLFlBQWY7QUFBQSxrQ0FDSSxNQUFJLENBQUNGLEtBQUwsQ0FBV0MsVUFBWCxLQUEwQixJQUExQixnQkFDRCxxRUFBQyw4REFBRDtBQUFTLG1DQUFTLEVBQUMsU0FBbkI7QUFBNkIsOEJBQUksRUFBRSxHQUFuQztBQUF3QyxzQ0FBWSxFQUFFLFNBQXREO0FBQWlFLHNDQUFZLEVBQUUsQ0FBL0U7QUFBa0YsaUNBQU8sRUFBRTtBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURDLGdCQUVEO0FBQVEsbUNBQVMsRUFBQyxhQUFsQjtBQUFnQyw4QkFBSSxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUREO0FBQUE7QUFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXdEQzs7OztFQXRHZXNCLDRDQUFLLENBQUNDLFM7O0FBeUdSQywySEFBTyxDQUFDLElBQUQsRUFBTWhDLGtCQUFOLENBQVAsQ0FBaUNLLEtBQWpDLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bhc3N3b3JkX3Jlc2V0LmM4ZDc1ZDVkNzNiNzQ0ZDIwYjk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG4vLyBpbXBvcnQge3ZhbGlkRW1haWwsIHJlcXVpcmVkZCwgaWluVmFsaWRhdGlvbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBFcnJvck1lc3NhZ2UsIEZpZWxkQXJyYXksIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCAge3ZhbGlkRW1haWwscmVxdWlyZWR9IGZyb20gJy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25yZWR1eCdcclxuaW1wb3J0IHtzdWNjZXNzTWVzc2FnZSwgZW1wdHlNZXNzYWdlfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL0FjdGlvbkNyZWF0b3JzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT5cclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc3VjY2Vzc01lc3NhZ2U6IG1lc3NhZ2UgPT4geyBkaXNwYXRjaChzdWNjZXNzTWVzc2FnZShtZXNzYWdlKSk7IH0sXHJcbiAgZW1wdHlNZXNzYWdlOiAoKSA9PiB7ZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpfVxyXG59KVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBidG5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogbnVsbCxcclxuICAgICAgZXJyb3JNZXNzYWdlOiBudWxsLFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gYXN5bmMgaGFuZGxlU3VibWl0KHZhbHVlcykge1xyXG5cclxuICAgaWYoIXZhbGlkRW1haWwodmFsdWVzLmVtYWlsKSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVycm9yTWVzc2FnZTonRW1haWwg0LDQtNGA0LXRgSDQstCy0LXQtNC10L0g0L3QtdC/0YDQsNCy0LjQu9GM0L3QvidcclxuICAgIH0pXHJcbiAgIH1lbHNlIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlcnJvck1lc3NhZ2U6IG51bGxcclxuICAgIH0pXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYnRuTG9hZGluZzp0cnVlXHJcbiAgICB9KVxyXG4gICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9wYXNzd29yZC9jcmVhdGVgLCB2YWx1ZXMpXHJcblxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBidG5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgfSlcclxuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICAgIHRoaXMucHJvcHMuc3VjY2Vzc01lc3NhZ2UocmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gICB9XHJcblxyXG5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdGhlclBhZ2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGxhdGEgZmVlZGJhY2sgcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3BsYXRlLS1mb3JtIGZlZWRiYWNrRm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImNvbnRhaW5lciBicmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIFwiPjxBcHBMaW5rIGNsYXNzTmFtZT0nYnItaXRlbScgaHJlZj0nL2xvZ2luJz7Qm9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L0FwcExpbms+PC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPtCh0LHRgNC+0YEg0L/QsNGA0L7Qu9GPPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgaXNTdWJtaXR0aW5nIH0pID0+KFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJvcGxhdGFmb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTVcIj7QodCx0YDQvtGBINC/0LDRgNC+0LvRjzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMuc3RhdGUubWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IHt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+RW1haWwg0LDQtNGA0LXRgTo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nZW1haWwnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPVwi0JLQsNGIIGVtYWlsINCw0LTRgNC10YFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnRuTG9hZGluZyA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjbGFzc05hbWU9XCJsb2FkaW5nXCIgc2l6ZT17MjAwfSBzcGlubmVyQ29sb3I9e1wiI2VmMjIyMVwifSBzcGlubmVyV2lkdGg9ezJ9IHZpc2libGU9e3RydWV9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW5idXR0b25cIiB0eXBlPVwic3VibWl0XCI+0KHQsdGA0L7RgdC40YLRjDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=