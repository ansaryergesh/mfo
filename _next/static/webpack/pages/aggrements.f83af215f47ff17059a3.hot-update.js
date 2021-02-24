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
      xhr.addEventListener('load', function () {
        console.log(xhr.responseText);
      });
      xhr.open('GET', "https://icredit-crm.kz/api/webhock/sign.php?sign=y&request_id=".concat(this.state.id));
      xhr.send();
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
            lineNumber: 186,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 32
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
                lineNumber: 191,
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
                      lineNumber: 195,
                      columnNumber: 68
                    }, _this5), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                      href: doc.link,
                      target: "_blank",
                      children: doc.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 139
                    }, _this5)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 21
                  }, _this5);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
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
                  lineNumber: 199,
                  columnNumber: 43
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  onClick: function onClick() {
                    return _this5.sendAgreementStatus();
                  },
                  className: "mt-5",
                  children: "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 11
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWdncmVtZW50cy5qcyJdLCJuYW1lcyI6WyJnZXRVcmxQYXJhbWV0ZXIiLCJuYW1lIiwicmVwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImRlY29kZVVSSUNvbXBvbmVudCIsInVzZXJUb2tlbiIsImxlbmd0aCIsIkFnZ3JlbWVudCIsInByb3BzIiwic3RhdGUiLCJ0b2tlbiIsImxvYWRpbmciLCJkb2NzIiwiaWQiLCJpZF9yZXEiLCJzaWduIiwiaXNDb2RlU2VudCIsImNvZGVfY29uZiIsImVycm9ySW5Db2RlIiwicGhvbmUiLCJyZXN0Iiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJlcnJvciIsImhlYWRlcnMiLCJwYXJhbXMiLCJjb2RlIiwic3dhbCIsIm1lc3NhZ2UiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsImdldFVzZXJEb2N1bWVudCIsIm1hcCIsImRvYyIsImxpbmsiLCJyZXF1aXJlIiwic2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0Iiwic2VuZEFncmVlbWVudFN0YXR1cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE1BQWIsRUFBcUIsS0FBckIsRUFBNEJBLE9BQTVCLENBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLENBQVA7QUFDQSxNQUFJQyxLQUFLLEdB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MDU5YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXIobmFtZSkge1xyXG4gIG5hbWUgPSBuYW1lLnJlcGxhY2UoL1tcXFtdLywgJ1xcXFxbJykucmVwbGFjZSgvW1xcXV0vLCAnXFxcXF0nKTtcclxuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdbXFxcXD8mXScgKyBuYW1lICsgJz0oW14mI10qKScpO1xyXG4gIHZhciByZXN1bHRzID0gcmVnZXguZXhlYyhsb2NhdGlvbi5zZWFyY2gpO1xyXG4gIHJldHVybiByZXN1bHRzID09PSBudWxsID8gJycgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXS5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XHJcbn07XHJcblxyXG5jb25zdCB1c2VyVG9rZW4gPSAoKSA9PiB7XHJcbiAgaWYoZ2V0VXJsUGFyYW1ldGVyKCd0b2tlbicpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGdldFVybFBhcmFtZXRlcigndG9rZW4nKVxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBBZ2dyZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB0b2tlbjogbnVsbCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGRvY3M6W10sXHJcbiAgICAgIGlkOm51bGwsXHJcbiAgICAgIGlkX3JlcTpudWxsLFxyXG4gICAgICBzaWduOicnLFxyXG4gICAgICBpc0NvZGVTZW50OmZhbHNlLFxyXG4gICAgICBjb2RlX2NvbmY6bnVsbCxcclxuICAgICAgZXJyb3JJbkNvZGU6bnVsbCxcclxuICAgICAgcGhvbmU6bnVsbCxcclxuICAgICAgcmVzdDpudWxsLFxyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBnZXRVc2VyRG9jdW1lbnQodG9rZW4pIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXREYXRhP3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGRvY3M6IHJlc3BvbnNlLmRhdGEuZG9jcyxcclxuICAgICAgICAgIGlkOiByZXNwb25zZS5kYXRhLmlkLFxyXG4gICAgICAgICAgaWRfcmVxOiByZXNwb25zZS5kYXRhLmlkX3JlcSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgcmVzdDogcmVzcG9uc2UuZGF0YS5yZXN0LFxyXG4gICAgICAgICAgcGhvbmU6IHJlc3BvbnNlLmRhdGEucGhvbmVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZG9jcylcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9zZW5kU21zP3Bob25lPSR7dGhpcy5zdGF0ZS5waG9uZX1gLHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc0NvZGVTZW50OiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3I9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2VuZEFncmVlbWVudFN0YXR1c0ZvclJlc3QoKSB7XHJcbiAgICBpZih0aGlzLnN0YXRlLmNvZGVfY29uZiAhPT0gbnVsbCkge1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvc2VuZFNtc2Ase1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgaWQ6dGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICAgIHBob25lOnRoaXMuc3RhdGUucGhvbmUsXHJcbiAgICAgICAgICB0b2tlbjp0aGlzLnN0YXRlLnRva2VuLFxyXG4gICAgICAgICAgaWRfcmVxOiB0aGlzLnN0YXRlLmlkX3JlcSxcclxuICAgICAgICAgIGNvZGU6dGhpcy5zdGF0ZS5jb2RlX2NvbmYsXHJcbiAgICAgICAgICBzaWduOiAneSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYCR7cmVzcG9uc2UubWVzc2FnZX1gLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VuZEFncmVlbWVudFN0YXR1c1dpdGhSZXN0KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGxvYWRpbmc6dHJ1ZVxyXG4gICAgfSlcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh4aHIucmVzcG9uc2VUZXh0KVxyXG4gICAgfSlcclxuICAgIHhoci5vcGVuKCdHRVQnLCBgaHR0cHM6Ly9pY3JlZGl0LWNybS5rei9hcGkvd2ViaG9jay9zaWduLnBocD9zaWduPXkmcmVxdWVzdF9pZD0ke3RoaXMuc3RhdGUuaWR9YCk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZW5kQWdyZWVtZW50U3RhdHVzKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRyeXtcclxuICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9hZ3JlZW1lbnQnLHsgcGFyYW1zOntcclxuICAgICAgICBpZDp0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgIHBob25lOnRoaXMuc3RhdGUucGhvbmUsXHJcbiAgICAgICAgdG9rZW46dGhpcy5zdGF0ZS50b2tlbixcclxuICAgICAgICBpZF9yZXE6IHRoaXMuc3RhdGUuaWRfcmVxLFxyXG4gICAgICAgIHNpZ246ICd5J1xyXG4gICAgICB9fSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKXtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYCR7cmVzcG9uc2UuZGF0YS5tZXNzYWdlfWAsIFwic3VjY2Vzc1wiKS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIGlmKGdldFVybFBhcmFtZXRlcigndG9rZW4nKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgdG9rZW46IGdldFVybFBhcmFtZXRlcigndG9rZW4nKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJrb1wiICsgdXNlclRva2VuKCkpXHJcbiAgICB0aGlzLmdldFVzZXJEb2N1bWVudCh1c2VyVG9rZW4oKSlcclxuXHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgdGhpcy5nZXRVc2VyRG9jdW1lbnQodGhpcy5zdGF0ZS50b2tlbilcclxuICAgIC8vIH0sMTAwKVxyXG5cclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBvdGhlclBhZ2VzXCI+XHJcbiAgICAgICAgPEhlYWQ+PHRpdGxlPtCh0L7Qs9C70LDRiNC10L3QuNC1PC90aXRsZT48L0hlYWQ+XHJcbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/ICg8ZGl2IGNsYXNzTmFtZT0nbW9kZWxMb2FkZXInPjwvZGl2PikgOiAoPGRpdiBjbGFzc05hbWU9J21vZGVsTG9hZGVyIGxvYWRlZCc+IDwvZGl2Pil9XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JlZW1lbnRzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgYWxpZ249XCJjZW50ZXJcIj7QodC+0LPQu9Cw0YjQtdC90LjQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y88L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2NvbXBsZXRlJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRvY3MubWFwKGRvYz0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtkb2MubGluaz09PW51bGw/ICdkLW5vbmUnIDogJyd9PjxpbWcgY2xhc3NOYW1lPSdjaGVja2VkQ29tcGxldGUnIHNyYz17cmVxdWlyZShcIi4uL2ltZy9jaGVja2VkLnBuZ1wiKX0gLz48YSBocmVmPXtkb2MubGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+e2RvYy5uYW1lfTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH08L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBlYXRCdG4gZm9ybS1ncm91cFwiID5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUucmVzdCA9PT0gdHJ1ZSA/ICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRBZ3JlZW1lbnRTdGF0dXNXaXRoUmVzdCgpfSBjbGFzc05hbWU9J210LTUnID7QodC+0LPQu9Cw0YjQsNGO0YHRjDwvYnV0dG9uPiA6XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRBZ3JlZW1lbnRTdGF0dXMoKX0gY2xhc3NOYW1lPSdtdC01JyA+0KHQvtCz0LvQsNGI0LDRjtGB0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFnZ3JlbWVudFxyXG4iXSwic291cmNlUm9vdCI6IiJ9