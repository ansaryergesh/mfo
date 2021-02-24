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
      this.setState({
        loading: true
      });
      var xhr = new XMLHttpRequest();
      xhr.open('GET', "https://icredit-crm.kz/api/webhock/sign.php?sign=y&request_id=".concat(this.state.id));
      xhr.send();

      if (xhr.status == 200) {
        this.setState({
          loading: false
        });
        console.log(xhr.responseText);
        sweetalert__WEBPACK_IMPORTED_MODULE_11___default()("Успешно! Спасибо").then(function () {
          next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
        });
      } else {
        this.setState({
          loading: false
        });
        console.log(xhr.status + ': ' + xhr.statusText); // Router.push('/')
      }
    }
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
            lineNumber: 199,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 32
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
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
                lineNumber: 204,
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
                      lineNumber: 208,
                      columnNumber: 68
                    }, _this5), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 139
                    }, _this5)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 21
                  }, _this5);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "repeatBtn form-group",
                children: this.state.rest === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this5.sendAgreementStatusWithRest();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 43
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this5.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdncmVtZW50cy5qcyJdLCJuYW1lcyI6WyJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFnZ3JlbWVudCIsInByb3BzIiwic3RhdGUiLCJ0b2tlbiIsImxvYWRpbmciLCJkb2NzIiwiaWQiLCJpZF9yZXEiLCJzaWduIiwiaXNDb2RlU2VudCIsImNvZGVfY29uZiIsImVycm9ySW5Db2RlIiwicGhvbmUiLCJyZXN0Iiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImhlYWRlcnMiLCJwYXJhbXMiLCJjb2RlIiwic3dhbCIsIm1lc3NhZ2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzVGV4dCIsImdldFVzZXJEb2N1bWVudCIsIm1hcCIsImRvYyIsImxpbmsiLCJyZXF1aXJlIiwic2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0Iiwic2VuZEFncmVlbWVudFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE1BQWIsRUFBcUIsS0FBckIsRUFBNEJBLE9BQTVCLENBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLENBQVA7QUFDQSxNQUFJQyxLQUFL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QW1ELDJCQUFTLEVBQUMsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBeUJEOzs7O0VBdk1xQkMsNENBQUssQ0FBQ0MsUzs7QUEwTWY5Qyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZ2dyZW1lbnRzLmE0YmRiOTM0N2QwYzI4MDk1MzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVyKG5hbWUpIHtcclxuICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXS8sICdcXFxcWycpLnJlcGxhY2UoL1tcXF1dLywgJ1xcXFxdJyk7XHJcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnW1xcXFw/Jl0nICsgbmFtZSArICc9KFteJiNdKiknKTtcclxuICB2YXIgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMobG9jYXRpb24uc2VhcmNoKTtcclxuICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG59O1xyXG5cclxuY29uc3QgdXNlclRva2VuID0gKCkgPT4ge1xyXG4gIGlmKGdldFVybFBhcmFtZXRlcigndG9rZW4nKS5sZW5ndGggIT09IDApIHtcclxuICAgIHJldHVybiBnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJylcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgQWdncmVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9rZW46IG51bGwsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBkb2NzOltdLFxyXG4gICAgICBpZDpudWxsLFxyXG4gICAgICBpZF9yZXE6bnVsbCxcclxuICAgICAgc2lnbjonJyxcclxuICAgICAgaXNDb2RlU2VudDpmYWxzZSxcclxuICAgICAgY29kZV9jb25mOm51bGwsXHJcbiAgICAgIGVycm9ySW5Db2RlOm51bGwsXHJcbiAgICAgIHBob25lOm51bGwsXHJcbiAgICAgIHJlc3Q6bnVsbCxcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgZ2V0VXNlckRvY3VtZW50KHRva2VuKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuXHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0RGF0YT90b2tlbj0ke3Rva2VufWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkb2NzOiByZXNwb25zZS5kYXRhLmRvY3MsXHJcbiAgICAgICAgICBpZDogcmVzcG9uc2UuZGF0YS5pZCxcclxuICAgICAgICAgIGlkX3JlcTogcmVzcG9uc2UuZGF0YS5pZF9yZXEsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIHJlc3Q6IHJlc3BvbnNlLmRhdGEucmVzdCxcclxuICAgICAgICAgIHBob25lOiByZXNwb25zZS5kYXRhLnBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRvY3MpXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvc2VuZFNtcz9waG9uZT0ke3RoaXMuc3RhdGUucGhvbmV9YCx7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNDb2RlU2VudDogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHNlbmRBZ3JlZW1lbnRTdGF0dXNGb3JSZXN0KCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5jb2RlX2NvbmYgIT09IG51bGwpIHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3NlbmRTbXNgLHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGlkOnRoaXMuc3RhdGUuaWQsXHJcbiAgICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICAgIGlkX3JlcTogdGhpcy5zdGF0ZS5pZF9yZXEsXHJcbiAgICAgICAgICBjb2RlOnRoaXMuc3RhdGUuY29kZV9jb25mLFxyXG4gICAgICAgICAgc2lnbjogJ3knXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGAke3Jlc3BvbnNlLm1lc3NhZ2V9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOnRydWVcclxuICAgIH0pXHJcbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIGBodHRwczovL2ljcmVkaXQtY3JtLmt6L2FwaS93ZWJob2NrL3NpZ24ucGhwP3NpZ249eSZyZXF1ZXN0X2lkPSR7dGhpcy5zdGF0ZS5pZH1gKTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgICBpZih4aHIuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hINCh0L/QsNGB0LjQsdC+XCIpLnRoZW4oKCk9PntcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH0pXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXMgKyAnOiAnICsgeGhyLnN0YXR1c1RleHQpXHJcbiAgICAgIC8vIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuIFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VuZEFncmVlbWVudFN0YXR1cygpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcbiAgICB0cnl7XHJcbiAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvYWdyZWVtZW50Jyx7IHBhcmFtczp7XHJcbiAgICAgICAgaWQ6dGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICBwaG9uZTp0aGlzLnN0YXRlLnBob25lLFxyXG4gICAgICAgIHRva2VuOnRoaXMuc3RhdGUudG9rZW4sXHJcbiAgICAgICAgaWRfcmVxOiB0aGlzLnN0YXRlLmlkX3JlcSxcclxuICAgICAgICBzaWduOiAneSdcclxuICAgICAgfX0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcyl7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGAke3Jlc3BvbnNlLmRhdGEubWVzc2FnZX1gLCBcInN1Y2Nlc3NcIikudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICBpZihnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgIHRva2VuOiBnZXRVcmxQYXJhbWV0ZXIoJ3Rva2VuJylcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwia29cIiArIHVzZXJUb2tlbigpKVxyXG4gICAgdGhpcy5nZXRVc2VyRG9jdW1lbnQodXNlclRva2VuKCkpXHJcblxyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgIHRoaXMuZ2V0VXNlckRvY3VtZW50KHRoaXMuc3RhdGUudG9rZW4pXHJcbiAgICAvLyB9LDEwMClcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgb3RoZXJQYWdlc1wiPlxyXG4gICAgICAgIDxIZWFkPjx0aXRsZT7QodC+0LPQu9Cw0YjQtdC90LjQtTwvdGl0bGU+PC9IZWFkPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyAoPGRpdiBjbGFzc05hbWU9J21vZGVsTG9hZGVyJz48L2Rpdj4pIDogKDxkaXYgY2xhc3NOYW1lPSdtb2RlbExvYWRlciBsb2FkZWQnPiA8L2Rpdj4pfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyZWVtZW50cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGFsaWduPVwiY2VudGVyXCI+0KHQvtCz0LvQsNGI0LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjb21wbGV0ZSc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kb2NzLm1hcChkb2M9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17ZG9jLmxpbms9PT1udWxsPyAnZC1ub25lJyA6ICcnfT48aW1nIGNsYXNzTmFtZT0nY2hlY2tlZENvbXBsZXRlJyBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvY2hlY2tlZC5wbmdcIil9IC8+PGEgaHJlZj17ZG9jLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiPntkb2MubmFtZX08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9PC91bD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0QnRuIGZvcm0tZ3JvdXBcIiA+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlc3QgPT09IHRydWUgPyAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kQWdyZWVtZW50U3RhdHVzV2l0aFJlc3QoKX0gY2xhc3NOYW1lPSdtdC01JyA+0KHQvtCz0LvQsNGI0LDRjtGB0Yw8L2J1dHRvbj4gOlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZW5kQWdyZWVtZW50U3RhdHVzKCl9IGNsYXNzTmFtZT0nbXQtNScgPtCh0L7Qs9C70LDRiNCw0Y7RgdGMPC9idXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZ2dyZW1lbnRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==