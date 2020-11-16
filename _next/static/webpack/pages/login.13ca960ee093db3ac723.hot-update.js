webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");










var _jsxFileName = "D:\\icredit\\server-zaymi\\zaymikz\\pages\\login.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import {validEmail, requiredd, iinValidation} from '../../defaults/validations';



var maskIin = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

var Login = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      btnLoading: false,
      message: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //  this.setState({
                //    btnLoading:true
                //  })
                console.log(values);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
          className: "otherPages",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
              className: "oplata feedback row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: " oplate--form feedbackForm",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                  className: "text-center mb-3",
                  children: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Formik"], {
                  initialValues: {
                    username: '',
                    password: ""
                  },
                  onSubmit: function onSubmit(values) {
                    _this2.handleSubmit(values);
                  },
                  children: function children(_ref) {
                    var errors = _ref.errors,
                        touched = _ref.touched,
                        isValidating = _ref.isValidating,
                        isSubmitting = _ref.isSubmitting;
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Form"], {
                      className: "oplataform",
                      children: [_this2.state.message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "alert alert-success",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                          children: [" ", _this2.state.message]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 61,
                          columnNumber: 25
                        }, _this2)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 23
                      }, _this2) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                          htmlFor: "email",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                            children: "\u0418\u0418\u041D:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 66,
                            columnNumber: 23
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 65,
                          columnNumber: 20
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
                          name: "username",
                          placeholder: "\u0418\u0418\u041D" // validate={iinValidation}
                          ,
                          render: function render(_ref2) {
                            var field = _ref2.field;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_text_mask__WEBPACK_IMPORTED_MODULE_13___default.a, _objectSpread(_objectSpread({}, field), {}, {
                              mask: maskIin,
                              autocomplete: "off",
                              id: "username",
                              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041D",
                              type: "text"
                            }), void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 74,
                              columnNumber: 25
                            }, _this2);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                          columnNumber: 21
                        }, _this2), errors.username && touched.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.username
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 61
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 20
                      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                          htmlFor: "password",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                            children: "\u041F\u0430\u0440\u043E\u043B\u044C:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 89,
                            columnNumber: 23
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 21
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
                          name: "password",
                          type: "password",
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 23
                        }, _this2), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.password
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 92,
                          columnNumber: 63
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 20
                      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "buttonForm",
                        children: _this2.state.btnLoading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          className: "loading",
                          size: 200,
                          spinnerColor: "#ef2221",
                          spinnerWidth: 2,
                          visible: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 23
                        }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                          className: " oplataform--button",
                          type: "submit",
                          children: "\u0412\u043E\u0439\u0442\u0438"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 23
                        }, _this2)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 20
                      }, _this2)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 19
                    }, _this2);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, this);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsibWFza0lpbiIsIkxvZ2luIiwicHJvcHMiLCJzdGF0ZSIsImJ0bkxvYWRpbmciLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZXJyb3JzIiwidG91Y2hlZCIsImlzVmFsaWRhdGluZyIsImlzU3VibWl0dGluZyIsImZpZWxkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZCxJQURjLEVBRWQsSUFGYyxFQUdkLElBSGMsRUFJZCxJQUpjLEVBS2QsSUFMYyxFQU1kLElBTmMsRUFPZCxJQVBjLEVBUWQsSUFSYyxFQVNkLElBVGMsRUFVZCxJQVZjLEVBV2QsSUFYYyxFQVlkLElBWmMsQ0FBaEI7O0lBZU1DLEs7Ozs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFBRSxLQUREO0FBRVhDLGFBQU8sRUFBRTtBQUZFLEtBQWI7QUFJQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQU5pQjtBQU9sQjs7Ozs7NE5BRWlCQyxNOzs7OztBQUNsQjtBQUNBO0FBQ0E7QUFDQ0MsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFDUCwwQkFDRTtBQUFBLCtCQUNFO0FBQVMsbUJBQVMsRUFBQyxZQUFuQjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyxFQUFmO0FBQUEsbUNBQ0U7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Q0FBUyxFQUFDLFNBQW5CO0FBQTZCLDhCQUFJLEVBQUUsR0FBbkM7QUFBd0Msc0NBQVksRUFBRSxTQUF0RDtBQUFpRSxzQ0FBWSxFQUFFLENBQS9FO0FBQWtGLGlDQUFPLEVBQUU7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FEQyxnQkFFRDtBQUFRLG1DQUFTLEVBQUMscUJBQWxCO0FBQXdDLDhCQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXJDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREQ7QUFBQTtBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBb0VDOzs7O0VBckZlYyw2Q0FBSyxDQUFDQyxTOztBQXdGWGxCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjEzY2E5NjBlZTA5M2RiM2FjNzIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQgTWFza2VkSW5wdXQgZnJvbSAncmVhY3QtdGV4dC1tYXNrJztcclxuLy8gaW1wb3J0IHt2YWxpZEVtYWlsLCByZXF1aXJlZGQsIGlpblZhbGlkYXRpb259IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRXJyb3JNZXNzYWdlLCBGaWVsZEFycmF5LCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuXHJcbmNvbnN0IG1hc2tJaW4gPSBbXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC8sXHJcbiAgL1xcZC9cclxuXTtcclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIG1lc3NhZ2U6IG51bGxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuIGFzeW5jIGhhbmRsZVN1Ym1pdCh2YWx1ZXMpIHtcclxuICAvLyAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgYnRuTG9hZGluZzp0cnVlXHJcbiAgLy8gIH0pXHJcbiAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvdGhlclBhZ2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJvcGxhdGEgZmVlZGJhY2sgcm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgb3BsYXRlLS1mb3JtIGZlZWRiYWNrRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj7QktC+0LnRgtC4INCyINC70LjRh9C90YvQuSDQutCw0LHQuNC90LXRgjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQodmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmcgfSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm9wbGF0YWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiB7dGhpcy5zdGF0ZS5tZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+0JjQmNCdOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXNrZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXttYXNrSWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0JjQmNCdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy51c2VybmFtZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj7Qn9Cw0YDQvtC70Yw6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnRuTG9hZGluZyA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjbGFzc05hbWU9XCJsb2FkaW5nXCIgc2l6ZT17MjAwfSBzcGlubmVyQ29sb3I9e1wiI2VmMjIyMVwifSBzcGlubmVyV2lkdGg9ezJ9IHZpc2libGU9e3RydWV9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiIG9wbGF0YWZvcm0tLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj7QktC+0LnRgtC4PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==