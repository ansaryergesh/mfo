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
                this.setState({
                  btnLoading: true
                });
                console.log(values);

              case 2:
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
                          name: "iin",
                          placeholder: "\u0418\u0418\u041D" // validate={iinValidation}
                          ,
                          render: function render(_ref2) {
                            var field = _ref2.field;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_text_mask__WEBPACK_IMPORTED_MODULE_13___default.a, _objectSpread(_objectSpread({}, field), {}, {
                              mask: maskIin,
                              id: "iin",
                              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041D",
                              type: "text"
                            }), void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 73,
                              columnNumber: 25
                            }, _this2);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 68,
                          columnNumber: 21
                        }, _this2), errors.iin && touched.iin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.iin
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 51
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
                            lineNumber: 87,
                            columnNumber: 23
                          }, _this2)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 21
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
                          name: "password",
                          type: "password",
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 23
                        }, _this2), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.password
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 63
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 85,
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
                          lineNumber: 95,
                          columnNumber: 23
                        }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                          className: " oplataform--button",
                          type: "submit",
                          children: "\u0412\u043E\u0439\u0442\u0438"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 96,
                          columnNumber: 23
                        }, _this2)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsibWFza0lpbiIsIkxvZ2luIiwicHJvcHMiLCJzdGF0ZSIsImJ0bkxvYWRpbmciLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsInZhbHVlcyIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiaXNWYWxpZGF0aW5nIiwiaXNTdWJtaXR0aW5nIiwiZmllbGQiLCJpaW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkLElBRGMsRUFFZCxJQUZjLEVBR2QsSUFIYyxFQUlkLElBSmMsRUFLZCxJQUxjLEVBTWQsSUFOYyxFQU9kLElBUGMsRUFRZCxJQVJjLEVBU2QsSUFUYyxFQVVkLElBVmMsRUFXZCxJQVhjLEVBWWQsSUFaYyxDQUFoQjs7SUFlTUMsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQUFFLEtBREQ7QUFFWEMsYUFBTyxFQUFFO0FBRkUsS0FBYjtBQUlBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBTmlCO0FBT2xCOzs7Ozs0TkFFaUJDLE07Ozs7O0FBQ2pCLHFCQUFLQyxRQUFMLENBQWM7QUFDWkwsNEJBQVUsRUFBQztBQURDLGlCQUFkO0FBR0FNLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUVRO0FBQUE7O0FBQ1AsMEJBQ0U7QUFBQSwrQkFDRTtBQUFTLG1CQUFTLEVB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SUFBMUIsZ0JBQ0QscUVBQUMsOERBQUQ7QUFBUyxtQ0FBUyxFQUFDLFNBQW5CO0FBQTZCLDhCQUFJLEVBQUUsR0FBbkM7QUFBd0Msc0NBQVksRUFBRSxTQUF0RDtBQUFpRSxzQ0FBWSxFQUFFLENBQS9FO0FBQWtGLGlDQUFPLEVBQUU7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FEQyxnQkFFRDtBQUFRLG1DQUFTLEVBQUMscUJBQWxCO0FBQXdDLDhCQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQW5DRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREQ7QUFBQTtBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBa0VDOzs7O0VBbkZlZ0IsNkNBQUssQ0FBQ0MsUzs7QUFzRlhwQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42ZDYyYTg1YWFkNWEwYzMyNDQ3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1zcGlubmVyLW1hdGVyaWFsJztcclxuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gJ3JlYWN0LXRleHQtbWFzayc7XHJcbi8vIGltcG9ydCB7dmFsaWRFbWFpbCwgcmVxdWlyZWRkLCBpaW5WYWxpZGF0aW9ufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEVycm9yTWVzc2FnZSwgRmllbGRBcnJheSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcblxyXG5jb25zdCBtYXNrSWluID0gW1xyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvLFxyXG4gIC9cXGQvXHJcbl07XHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBtZXNzYWdlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiBhc3luYyBoYW5kbGVTdWJtaXQodmFsdWVzKSB7XHJcbiAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgIGJ0bkxvYWRpbmc6dHJ1ZVxyXG4gICB9KVxyXG4gICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3RoZXJQYWdlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3BsYXRhIGZlZWRiYWNrIHJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG9wbGF0ZS0tZm9ybSBmZWVkYmFja0Zvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0zXCI+0JLQvtC50YLQuCDQsiDQu9C40YfQvdGL0Lkg0LrQsNCx0LjQvdC10YI8L2gyPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dmFsdWVzPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KHZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWQsIGlzVmFsaWRhdGluZywgaXNTdWJtaXR0aW5nIH0pID0+KFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJvcGxhdGFmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMuc3RhdGUubWVzc2FnZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyPtCY0JjQnTo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQmNCY0J0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFza2VkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz17bWFza0lpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQmNCY0J1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbiAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuaWlufTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyPtCf0LDRgNC+0LvRjDo8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0ncGFzc3dvcmQnIHR5cGU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Gb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idG5Mb2FkaW5nID09PSB0cnVlID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGNsYXNzTmFtZT1cImxvYWRpbmdcIiBzaXplPXsyMDB9IHNwaW5uZXJDb2xvcj17XCIjZWYyMjIxXCJ9IHNwaW5uZXJXaWR0aD17Mn0gdmlzaWJsZT17dHJ1ZX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCIgb3BsYXRhZm9ybS0tYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPtCS0L7QudGC0Lg8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwic291cmNlUm9vdCI6IiJ9