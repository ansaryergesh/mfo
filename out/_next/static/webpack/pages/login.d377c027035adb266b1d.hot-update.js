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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_16__);











var _jsxFileName = "D:\\icredit\\server-zaymi\\zaymikz\\pages\\login.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import {validEmail, requiredd, iinValidation} from '../../defaults/validations';





var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, _this);
};

_c = AppLink;
var maskIin = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

var Login = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Login);

    _this2 = _super.call(this, props);
    _this2.state = {
      btnLoading: false,
      message: null
    };
    _this2.handleSubmit = _this2.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this2));
    return _this2;
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
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
          className: "otherPages",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("section", {
              className: "oplata feedback row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                className: " oplate--form feedbackForm",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Formik"], {
                  initialValues: {
                    username: '',
                    password: ""
                  },
                  onSubmit: function onSubmit(values) {
                    _this3.handleSubmit(values);
                  },
                  children: function children(_ref2) {
                    var errors = _ref2.errors,
                        touched = _ref2.touched,
                        isValidating = _ref2.isValidating,
                        isSubmitting = _ref2.isSubmitting;
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Form"], {
                      className: "oplataform",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                        className: "text-center mb-5",
                        children: "\u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 64,
                        columnNumber: 17
                      }, _this3), _this3.state.message !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "alert alert-success",
                        role: "alert",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("strong", {
                          children: [" ", _this3.state.message]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 25
                        }, _this3)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 23
                      }, _this3) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                          htmlFor: "email",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                            children: "\u0418\u0418\u041D:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 72,
                            columnNumber: 23
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
                          columnNumber: 20
                        }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
                          name: "username",
                          placeholder: "\u0418\u0418\u041D" // validate={iinValidation}
                          ,
                          render: function render(_ref3) {
                            var field = _ref3.field;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_text_mask__WEBPACK_IMPORTED_MODULE_13___default.a, _objectSpread(_objectSpread({}, field), {}, {
                              mask: maskIin,
                              autocomplete: "off",
                              id: "username",
                              placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041D",
                              type: "text"
                            }), void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 25
                            }, _this3);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 74,
                          columnNumber: 21
                        }, _this3), errors.username && touched.username && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.username
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 61
                        }, _this3)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 20
                      }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "input-group",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
                          htmlFor: "password",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
                            children: "\u041F\u0430\u0440\u043E\u043B\u044C:"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 95,
                            columnNumber: 23
                          }, _this3)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 94,
                          columnNumber: 21
                        }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_15__["Field"], {
                          name: "password",
                          type: "password",
                          placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 23
                        }, _this3), errors.password && touched.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                          className: "text-danger",
                          children: errors.password
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 63
                        }, _this3)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 20
                      }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(AppLink, {
                        href: "password_reset resetText",
                        children: "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 21
                      }, _this3), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
                        className: "buttonForm",
                        children: _this3.state.btnLoading === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_spinner_material__WEBPACK_IMPORTED_MODULE_12___default.a, {
                          className: "loading",
                          size: 200,
                          spinnerColor: "#ef2221",
                          spinnerWidth: 2,
                          visible: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 23
                        }, _this3) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                          className: "loginbutton",
                          type: "submit",
                          children: "\u0412\u043E\u0439\u0442\u0438"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 23
                        }, _this3)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 20
                      }, _this3)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 19
                    }, _this3);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, this);
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm1hc2tJaW4iLCJMb2dpbiIsInByb3BzIiwic3RhdGUiLCJidG5Mb2FkaW5nIiwibWVzc2FnZSIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImVycm9ycyIsInRvdWNoZWQiLCJpc1ZhbGlkYXRpbmciLCJpc1N1Ym1pdHRpbmciLCJmaWVsZCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsTUFBdUJDLElBQXZCLFFBQXVCQSxJQUF2QjtBQUFBLHNCQUNkLHFFQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFaO0FBQUEsMkJBQ0U7QUFBRyxlQUFTLEVBQUVELFNBQWQ7QUFBQSxnQkFBMEJEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7S0FBTUQsTztBQUlOLElBQU1JLE9BQU8sR0FBRyxDQUNkLElBRGMsRUFFZCxJQUZjLEVBR2QsSUFIYyxFQUlkLElBSmMsRUFLZCxJQUxjLEVBTWQsSUFOYyxFQU9kLElBUGMsRUFRZCxJQVJjLEVBU2QsSUFUYyxFQVVkLElBVmMsRUFXZCxJQVhjLEVBWWQsSUFaYyxDQUFoQjs7SUFlTUMsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNq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c3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDM3N2MwMjcwMzVhZGIyNjZiMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbmltcG9ydCBNYXNrZWRJbnB1dCBmcm9tICdyZWFjdC10ZXh0LW1hc2snO1xyXG4vLyBpbXBvcnQge3ZhbGlkRW1haWwsIHJlcXVpcmVkZCwgaWluVmFsaWRhdGlvbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBFcnJvck1lc3NhZ2UsIEZpZWxkQXJyYXksIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT5cclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuY29uc3QgbWFza0lpbiA9IFtcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkLyxcclxuICAvXFxkL1xyXG5dO1xyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBidG5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbWVzc2FnZTogbnVsbFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gYXN5bmMgaGFuZGxlU3VibWl0KHZhbHVlcykge1xyXG4gIC8vICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICBidG5Mb2FkaW5nOnRydWVcclxuICAvLyAgfSlcclxuICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm90aGVyUGFnZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm9wbGF0YSBmZWVkYmFjayByb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvcGxhdGUtLWZvcm0gZmVlZGJhY2tGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQodmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgeyh7IGVycm9ycywgdG91Y2hlZCwgaXNWYWxpZGF0aW5nLCBpc1N1Ym1pdHRpbmcgfSkgPT4oXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cIm9wbGF0YWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNVwiPtCS0L7QudGC0Lgg0LIg0LvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiB7dGhpcy5zdGF0ZS5tZXNzYWdlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDI+0JjQmNCdOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXNrZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXttYXNrSWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0JjQmNCdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSAmJiB0b3VjaGVkLnVzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy51c2VybmFtZX08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj7Qn9Cw0YDQvtC70Yw6PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3Bhc3N3b3JkJyB0eXBlPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9XCLQktCy0LXQtNC40YLQtSDQv9Cw0YDQvtC70YxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQgJiYgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPSdwYXNzd29yZF9yZXNldCByZXNldFRleHQnPtCX0LDQsdGL0LvQuCDQv9Cw0YDQvtC70Yw/PC9BcHBMaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uRm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnRuTG9hZGluZyA9PT0gdHJ1ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBjbGFzc05hbWU9XCJsb2FkaW5nXCIgc2l6ZT17MjAwfSBzcGlubmVyQ29sb3I9e1wiI2VmMjIyMVwifSBzcGlubmVyV2lkdGg9ezJ9IHZpc2libGU9e3RydWV9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW5idXR0b25cIiB0eXBlPVwic3VibWl0XCI+0JLQvtC50YLQuDwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=