webpackHotUpdate_N_E("pages/aggrements",{

/***/ "./pages/aggrements.js":
/*!*****************************!*\
  !*** ./pages/aggrements.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);








var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\aggrements.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

;

var userToken = function userToken() {
  if (getUrlParameter('token').length !== 0) {
    return getUrlParameter('token');
  } else {
    return null;
  }
};

var Aggrement = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Aggrement, _React$Component);

  var _super = _createSuper(Aggrement);

  function Aggrement(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Aggrement);

    _this = _super.call(this, props);
    _this.state = {
      token: null,
      loading: false,
      docs: [],
      id: null,
      id_req: null,
      sign: '',
      isCodeSent: false,
      code_conf: null,
      errorInCode: null,
      phone: null,
      rest: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Aggrement, [{
    key: "getUserDocument",
    value: function () {
      var _getUserDocument = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  loading: true
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://api.money-men.kz/api/getData?token=".concat(token)).then(function (response) {
                  if (response.data.success) {
                    response.data.docs.forEach;

                    _this2.setState({
                      docs: response.data.docs,
                      id: response.data.id,
                      id_req: response.data.id_req,
                      loading: false,
                      rest: response.data.rest,
                      phone: response.data.phone
                    });

                    console.log(_this2.state.docs);
                  } else {
                    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
                  }
                })["catch"](function (error) {
                  _this2.setState({
                    loading: false
                  });

                  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserDocument(_x) {
        return _getUserDocument.apply(this, arguments);
      }

      return getUserDocument;
    }()
  }, {
    key: "getCode",
    value: function () {
      var _getCode = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://api.money-men.kz/api/sendSms?phone=".concat(this.state.phone), {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                }).then(function (response) {
                  if (response.success) {
                    _this3.setState({
                      isCodeSent: true
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getCode() {
        return _getCode.apply(this, arguments);
      }

      return getCode;
    }()
  }, {
    key: "sendAgreementStatusForRest",
    value: function () {
      var _sendAgreementStatusForRest = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.state.code_conf !== null)) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://api.money-men.kz/api/sendSms", {
                  params: {
                    id: this.state.id,
                    phone: this.state.phone,
                    token: this.state.token,
                    id_req: this.state.id_req,
                    code: this.state.code_conf,
                    sign: 'y'
                  }
                }, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
                }).then(function (response) {
                  if (response.success) {
                    sweetalert__WEBPACK_IMPORTED_MODULE_11___default()("Успешно!", "".concat(response.message), "success").then(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
                    });
                  }
                })["catch"](function (error) {
                  console.log(error);
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sendAgreementStatusForRest() {
        return _sendAgreementStatusForRest.apply(this, arguments);
      }

      return sendAgreementStatusForRest;
    }()
  }, {
    key: "sendAgreementStatus",
    value: function () {
      var _sendAgreementStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.setState({
                  loading: true
                });

                try {
                  axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('https://api.money-men.kz/api/agreement', {
                    params: {
                      id: this.state.id,
                      phone: this.state.phone,
                      token: this.state.token,
                      id_req: this.state.id_req,
                      sign: 'y'
                    }
                  }).then(function (response) {
                    _this4.setState({
                      loading: false
                    });

                    if (response.data.success) {
                      sweetalert__WEBPACK_IMPORTED_MODULE_11___default()("Успешно!", "".concat(response.data.message), "success").then(function () {
                        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
                      });
                    }
                  });
                } catch (error) {
                  this.setState({
                    loading: false
                  });
                  console.log(error);
                  next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sendAgreementStatus() {
        return _sendAgreementStatus.apply(this, arguments);
      }

      return sendAgreementStatus;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (getUrlParameter('token').length === 0) {
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
      } else {
        this.setState({
          token: getUrlParameter('token')
        });
      } // console.log("ko" + userToken())


      this.getUserDocument(userToken()); // setTimeout(() => {
      //   this.getUserDocument(this.state.token)
      // },100)
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 9
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 32
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 72
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "agreements-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                align: "center",
                children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
                className: "complete",
                children: this.state.docs.map(function (doc) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
                    className: doc.link === null ? 'd-none' : '',
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                      className: "checkedComplete",
                      src: __webpack_require__(/*! ../img/checked.png */ "./img/checked.png")
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 68
                    }, _this5), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 139
                    }, _this5)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 21
                  }, _this5);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "repeatBtn form-group",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this5.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }, this);
    }
  }]);

  return Aggrement;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Aggrement);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdncmVtZW50cy5qcyJdLCJuYW1lcyI6WyJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFnZ3JlbWVudCIsInByb3BzIiwic3RhdGUiLCJ0b2tlbiIsImxvYWRpbmciLCJkb2NzIiwiaWQiLCJpZF9yZXEiLCJzaWduIiwiaXNDb2RlU2VudCIsImNvZGVfY29uZiIsImVycm9ySW5Db2RlIiwicGhvbmUiLCJyZXN0Iiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiZm9yRWFjaCIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3IiLCJoZWFkZXJzIiwicGFyYW1zIiwiY29kZSIsInN3YWwiLCJtZXNzYWdlIiwiZ2V0VXNlckRvY3VtZW50IiwibWFwIiwiZG9jIiwibGluayIsInJlcXVpcmUiLCJzZW5kQWdyZWVtZW50U3RhdHVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsSUFBekIsRUFBK0I7QUFDN0JBLE1BQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFMLENBQWEsTUFBYixFQUFxQixLQUFyQixFQUE0QkEsT0FBNUIsQ0FBb0MsTUFBcEMsRUFBNEMsS0FBNUMsQ0FBUDtBQUNBLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVcsV0FBV0gsSUFBWCxHQUFrQixXQUE3QixDQUFaO0FBQ0EsTUFBSUksT0FBTyxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBV0Ms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QUhKLGVBUUY7QUFBSyx5QkFBUyxFQUFDLHNCQUFmO0FBQUEsdUNBQ0U7QUFBUSx5QkFBTyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDZ0QsbUJBQUwsRUFBTjtBQUFBLG1CQUFqQjtBQUFtRCwyQkFBUyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFSRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXNCRDs7OztFQTNLcUJDLDRDQUFLLENBQUNDLFM7O0FBOEtmdkMsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdncmVtZW50cy4zN2Y0MTI2MjQ1N2Y4MjUyNWZkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihuYW1lKSB7XHJcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xyXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJyk7XHJcbiAgdmFyIHJlc3VsdHMgPSByZWdleC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZXJUb2tlbiA9ICgpID0+IHtcclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICByZXR1cm4gZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEFnZ3JlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgZG9jczpbXSxcclxuICAgICAgaWQ6bnVsbCxcclxuICAgICAgaWRfcmVxOm51bGwsXHJcbiAgICAgIHNpZ246JycsXHJcbiAgICAgIGlzQ29kZVNlbnQ6ZmFsc2UsXHJcbiAgICAgIGNvZGVfY29uZjpudWxsLFxyXG4gICAgICBlcnJvckluQ29kZTpudWxsLFxyXG4gICAgICBwaG9uZTpudWxsLFxyXG4gICAgICByZXN0Om51bGwsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGdldFVzZXJEb2N1bWVudCh0b2tlbikge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2dldERhdGE/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHJlc3BvbnNlLmRhdGEuZG9jcy5mb3JFYWNoXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkb2NzOiByZXNwb25zZS5kYXRhLmRvY3MsXHJcbiAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5pZCxcclxuICAgICAgICAgIGlkX3JlcTogcmVzcG9uc2UuZGF0YS5pZF9yZXEsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHJlc3Q6IHJlc3BvbnNlLmRhdGEucmVzdCxcclxuICAgICAgICAgIHBob25lOiByZXNwb25zZS5kYXRhLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRvY3MpXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvc2VuZFNtcz9waG9uZT0ke3RoaXMuc3RhdGUucGhvbmV9YCx7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDb2RlU2VudDogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXNGb3JSZXN0KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jb2RlX2NvbmYgIT09IG51bGwpIHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXNgLHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgICBjb2RlOnRoaXMuc3RhdGUuY29kZV9jb25mLFxyXG4gICAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXMoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2FncmVlbWVudCcseyBwYXJhbXM6e1xyXG4gICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgcGhvbmU6dGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICB0b2tlbjp0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgIH19KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBgJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2V9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICB0b2tlbjogZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImtvXCIgKyB1c2VyVG9rZW4oKSlcclxuICAgIHRoaXMuZ2V0VXNlckRvY3VtZW50KHVzZXJUb2tlbigpKVxyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdldFVzZXJEb2N1bWVudCh0aGlzLnN0YXRlLnRva2VuKVxyXG4gICAgLy8gfSwxMDApXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG90aGVyUGFnZXNcIj5cclxuICAgICAgICA8SGVhZD48dGl0bGU+0KHQvtCz0LvQsNGI0LXQvdC40LU8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlcic+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT0nbW9kZWxMb2FkZXIgbG9hZGVkJz4gPC9kaXY+KX1cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBhbGlnbj1cImNlbnRlclwiPtCh0L7Qs9C70LDRiNC10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY29tcGxldGUnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZG9jcy5tYXAoZG9jPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RvYy5saW5rPT09bnVsbD8gJ2Qtbm9uZScgOiAnJ30+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIGhyZWY9e2RvYy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57ZG9jLm5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfTwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCIgPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1cygpfSBjbGFzc05hbWU9J210LTUnID7QodC+0LPQu9Cw0YjQsNGO0YHRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdncmVtZW50XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=