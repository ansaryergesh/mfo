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
                      btnLoading: false // message: response.data.message

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFzc3dvcmRfcmVzZXQuanMiXSwibmFtZXMiOlsiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiYnRuTG9hZGluZyIsImVycm9yTWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJ2YWx1ZXMiLCJ2YWxpZEVtYWlsIiwiZW1haWwiLCJzZXRTdGF0ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiZGF0YSIsImVycm9yIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLE1BQVlDLFNBQVosUUFBWUEsU0FBWjtBQUFBLE1BQXVCQyxJQUF2QixRQUF1QkEsSUFBdkI7QUFBQSxzQkFDZCxxRUFBQyxpREFBRDtBQUFNLFFBQUksRUFBRUEsSUFBWjtBQUFBLDJCQUNFO0FBQUcsZUFBUyxFQUFFRCxTQUFkO0FBQUEsZ0JBQTBCRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBaEI7O0tBQU1ELE87O0FBTU4sSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtC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QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FkRCxlQW9CQztBQUFLLGlDQUFTLEVBQUMsWUFBZjtBQUFBLGtDQUNJLE1BQUksQ0FBQ0YsS0FBTCxDQUFXQyxVQUFYLEtBQTBCLElBQTFCLGdCQUNELHFFQUFDLDhEQUFEO0FBQVMsbUNBQVMsRUFBQyxTQUFuQjtBQUE2Qiw4QkFBSSxFQUFFLEdBQW5DO0FBQXdDLHNDQUFZLEVBQUUsU0FBdEQ7QUFBaUUsc0NBQVksRUFBRSxDQUEvRTtBQUFrRixpQ0FBTyxFQUFFO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREMsZ0JBRUQ7QUFBUSxtQ0FBUyxFQUFDLGFBQWxCO0FBQWdDLDhCQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREQ7QUFBQTtBQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBd0RDOzs7O0VBdEdlc0IsNENBQUssQ0FBQ0MsUzs7QUF5R1JDLDJIQUFPLENBQUMsSUFBRCxFQUFNaEMsa0JBQU4sQ0FBUCxDQUFpQ0ssS0FBakMsQ0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFzc3dvcmRfcmVzZXQuNjBhZWI2ZDE5YWYzMjI5OTVkYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbi8vIGltcG9ydCB7dmFsaWRFbWFpbCwgcmVxdWlyZWRkLCBpaW5WYWxpZGF0aW9ufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEVycm9yTWVzc2FnZSwgRmllbGRBcnJheSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0ICB7dmFsaWRFbWFpbCxyZXF1aXJlZH0gZnJvbSAnLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnJlZHV4J1xyXG5pbXBvcnQge3N1Y2Nlc3NNZXNzYWdlLCBlbXB0eU1lc3NhZ2V9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IEFwcExpbmsgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWZ9KSA9PlxyXG4gIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XHJcbiAgPC9MaW5rPlxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBzdWNjZXNzTWVzc2FnZTogbWVzc2FnZSA9PiB7IGRpc3BhdGNoKHN1Y2Nlc3NNZXNzYWdlKG1lc3NhZ2UpKTsgfSxcclxuICBlbXB0eU1lc3NhZ2U6ICgpID0+IHtkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSl9XHJcbn0pXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBudWxsLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiBhc3luYyBoYW5kbGVTdWJtaXQodmFsdWVzKSB7XHJcblxyXG4gICBpZighdmFsaWRFbWFpbCh2YWx1ZXMuZW1haWwpKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZXJyb3JNZXNzYWdlOidFbWFpbCDQsNC00YDQtdGBINCy0LLQtdC00LXQvSDQvdC10L/RgNCw0LLQuNC70YzQvdC+J1xyXG4gICAgfSlcclxuICAgfWVsc2Uge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVycm9yTWVzc2FnZTogbnVsbFxyXG4gICAgfSlcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBidG5Mb2FkaW5nOnRydWVcclxuICAgIH0pXHJcbiAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Bhc3N3b3JkL2NyZWF0ZWAsIHZhbHVlcylcclxuXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICB9KVxyXG4gICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgdGhpcy5wcm9wcy5zdWNjZXNzTWVzc2FnZShyZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBidG5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgIH1cclxuXHJcblxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm90aGVyUGFnZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9wbGF0YSBmZWVkYmFjayByb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvcGxhdGUtLWZvcm0gZmVlZGJhY2tGb3JtXCI+XHJcbiAgICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiY29udGFpbmVyIGJyZWFkY3J1bWJcIj5cclxuICAgICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gXCI+PEFwcExpbmsgY2xhc3NOYW1lPSdici1pdGVtJyBocmVmPScvbG9naW4nPtCb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvQXBwTGluaz48L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+0KHQsdGA0L7RgSDQv9Cw0YDQvtC70Y88L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQodmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmcgfSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm9wbGF0YWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNVwiPtCh0LHRgNC+0YEg0L/QsNGA0L7Qu9GPPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiB7dGhpcy5zdGF0ZS5tZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj5FbWFpbCDQsNC00YDQtdGBOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdlbWFpbCcgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9XCLQktCw0YggZW1haWwg0LDQtNGA0LXRgVwiLz5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idG5Mb2FkaW5nID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNsYXNzTmFtZT1cImxvYWRpbmdcIiBzaXplPXsyMDB9IHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9IHNwaW5uZXJXaWR0aD17Mn0gdmlzaWJsZT17dHJ1ZX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbmJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7QodCx0YDQvtGB0LjRgtGMPC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCAoY29ubmVjdChudWxsLG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW4pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==