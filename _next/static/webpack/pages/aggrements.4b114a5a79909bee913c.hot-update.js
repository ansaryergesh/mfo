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
    key: "sendAgreementStatusWithRest",
    value: function sendAgreementStatusWithRest() {
      var _this4 = this;

      this.setState({
        loading: true
      });
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load');
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("https://icredit-crm.kz/api/webhock/sign.php?sign=y&request_id=".concat(this.state.id)).then(function (res) {
        console.log(res);

        _this4.setState({
          loading: false
        });
      })["catch"](function (err) {
        console.log(err);
        console.log(err.response);

        _this4.setState({
          loading: false
        });
      });
    }
  }, {
    key: "sendAgreementStatus",
    value: function () {
      var _sendAgreementStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this5 = this;

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
                    _this5.setState({
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
      var _this6 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 9
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 32
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
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
                lineNumber: 200,
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
                      lineNumber: 204,
                      columnNumber: 68
                    }, _this6), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 139
                    }, _this6)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 21
                  }, _this6);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "repeatBtn form-group",
                children: this.state.rest === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this6.sendAgreementStatusWithRest();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 43
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this6.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdncmVtZW50cy5qcyJdLCJuYW1lcyI6WyJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFnZ3JlbWVudCIsInByb3BzIiwic3RhdGUiLCJ0b2tlbiIsImxvYWRpbmciLCJkb2NzIiwiaWQiLCJpZF9yZXEiLCJzaWduIiwiaXNDb2RlU2VudCIsImNvZGVfY29uZiIsImVycm9ySW5Db2RlIiwicGhvbmUiLCJyZXN0Iiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImhlYWRlcnMiLCJwYXJhbXMiLCJjb2RlIiwic3dhbCIsIm1lc3NhZ2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXMiLCJlcnIiLCJnZXRVc2VyRG9jdW1lbnQiLCJtYXAiLCJkb2MiLCJsaW5rIiwicmVxdWlyZSIsInNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCIsInNlbmRBZ3JlZW1lbnRTdGF0dXMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUM3QkEsTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEtBQXJCLEVBQTRCQSxPQUE1QixDQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxDQUFQO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlDLE1BQUosQ0FB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SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXlCRDs7OztFQW5NcUJDLDRDQUFLLENBQUNDLFM7O0FBc01mNUMsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWdncmVtZW50cy40YjExNGE1YTc5OTA5YmVlOTEzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcihuYW1lKSB7XHJcbiAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCAnXFxcXFsnKS5yZXBsYWNlKC9bXFxdXS8sICdcXFxcXScpO1xyXG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ1tcXFxcPyZdJyArIG5hbWUgKyAnPShbXiYjXSopJyk7XHJcbiAgdmFyIHJlc3VsdHMgPSByZWdleC5leGVjKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxufTtcclxuXHJcbmNvbnN0IHVzZXJUb2tlbiA9ICgpID0+IHtcclxuICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICByZXR1cm4gZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgfVxyXG4gIGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEFnZ3JlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgZG9jczpbXSxcclxuICAgICAgaWQ6bnVsbCxcclxuICAgICAgaWRfcmVxOm51bGwsXHJcbiAgICAgIHNpZ246JycsXHJcbiAgICAgIGlzQ29kZVNlbnQ6ZmFsc2UsXHJcbiAgICAgIGNvZGVfY29uZjpudWxsLFxyXG4gICAgICBlcnJvckluQ29kZTpudWxsLFxyXG4gICAgICBwaG9uZTpudWxsLFxyXG4gICAgICByZXN0Om51bGwsXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGdldFVzZXJEb2N1bWVudCh0b2tlbikge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcblxyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2dldERhdGE/dG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZG9jczogcmVzcG9uc2UuZGF0YS5kb2NzLFxyXG4gICAgICAgICAgaWQ6IHJlc3BvbnNlLmRhdGEuaWQsXHJcbiAgICAgICAgICBpZF9yZXE6IHJlc3BvbnNlLmRhdGEuaWRfcmVxLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICByZXN0OiByZXNwb25zZS5kYXRhLnJlc3QsXHJcbiAgICAgICAgICBwaG9uZTogcmVzcG9uc2UuZGF0YS5waG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kb2NzKVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDb2RlKCkge1xyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXM/cGhvbmU9JHt0aGlzLnN0YXRlLnBob25lfWAse1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzQ29kZVNlbnQ6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvcj0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kQWdyZWVtZW50U3RhdHVzRm9yUmVzdCgpIHtcclxuICAgIGlmKHRoaXMuc3RhdGUuY29kZV9jb25mICE9PSBudWxsKSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9zZW5kU21zYCx7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBpZDp0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgICAgcGhvbmU6dGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICAgIHRva2VuOnRoaXMuc3RhdGUudG9rZW4sXHJcbiAgICAgICAgICBpZF9yZXE6IHRoaXMuc3RhdGUuaWRfcmVxLFxyXG4gICAgICAgICAgY29kZTp0aGlzLnN0YXRlLmNvZGVfY29uZixcclxuICAgICAgICAgIHNpZ246ICd5J1xyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgaWYocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBgJHtyZXNwb25zZS5tZXNzYWdlfWAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZW5kQWdyZWVtZW50U3RhdHVzV2l0aFJlc3QoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzp0cnVlXHJcbiAgICB9KVxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnKVxyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL2ljcmVkaXQtY3JtLmt6L2FwaS93ZWJob2NrL3NpZ24ucGhwP3NpZ249eSZyZXF1ZXN0X2lkPSR7dGhpcy5zdGF0ZS5pZH1gKVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGluZzpmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkaW5nOmZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXMoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2FncmVlbWVudCcseyBwYXJhbXM6e1xyXG4gICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgcGhvbmU6dGhpcy5zdGF0ZS5waG9uZSxcclxuICAgICAgICB0b2tlbjp0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgIH19KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBgJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2V9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICB0b2tlbjogZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImtvXCIgKyB1c2VyVG9rZW4oKSlcclxuICAgIHRoaXMuZ2V0VXNlckRvY3VtZW50KHVzZXJUb2tlbigpKVxyXG5cclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICB0aGlzLmdldFVzZXJEb2N1bWVudCh0aGlzLnN0YXRlLnRva2VuKVxyXG4gICAgLy8gfSwxMDApXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG90aGVyUGFnZXNcIj5cclxuICAgICAgICA8SGVhZD48dGl0bGU+0KHQvtCz0LvQsNGI0LXQvdC40LU8L3RpdGxlPjwvSGVhZD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlcic+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT0nbW9kZWxMb2FkZXIgbG9hZGVkJz4gPC9kaXY+KX1cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmVlbWVudHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBhbGlnbj1cImNlbnRlclwiPtCh0L7Qs9C70LDRiNC10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY29tcGxldGUnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZG9jcy5tYXAoZG9jPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2RvYy5saW5rPT09bnVsbD8gJ2Qtbm9uZScgOiAnJ30+PGltZyBjbGFzc05hbWU9J2NoZWNrZWRDb21wbGV0ZScgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL2NoZWNrZWQucG5nXCIpfSAvPjxhIGhyZWY9e2RvYy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj57ZG9jLm5hbWV9PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfTwvdWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCIgPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXN0ID09PSB0cnVlID8gICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+IDpcclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEFncmVlbWVudFN0YXR1cygpfSBjbGFzc05hbWU9J210LTUnID7QodC+0LPQu9Cw0YjQsNGO0YHRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWdncmVtZW50XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=