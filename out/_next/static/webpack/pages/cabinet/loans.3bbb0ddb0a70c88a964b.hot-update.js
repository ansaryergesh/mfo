webpackHotUpdate_N_E("pages/cabinet/loans",{

/***/ "./pages/cabinet/loans.js":
/*!********************************!*\
  !*** ./pages/cabinet/loans.js ***!
  \********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/hocs/withAuth */ "./components/hocs/withAuth.js");
/* harmony import */ var _store_reducers_userReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/reducers/userReducer */ "./store/reducers/userReducer.js");
/* harmony import */ var _defaults_hello__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../defaults/hello */ "./defaults/hello.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_shared_userStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/shared/userStatus */ "./components/shared/userStatus.js");
/* harmony import */ var _components_shared_userHistory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/shared/userHistory */ "./components/shared/userHistory.js");
/* harmony import */ var _defaults_saled__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../defaults/saled */ "./defaults/saled.js");








var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\cabinet\\loans.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var mapStateToProps = function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUserStatus: function fetchUserStatus() {
      return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_14__["fetchUserStatus"])());
    },
    fetchUserHistory: function fetchUserHistory() {
      return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_14__["fetchUserHistory"])());
    }
  };
};

var Cabinet = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cabinet, _React$Component);

  var _super = _createSuper(Cabinet);

  function Cabinet(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Cabinet);

    _this = _super.call(this, props);
    _this.state = {
      btnLoading: false
    };
    _this.state = {
      sendRepeat: true
    };
    _this.state = {
      step: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Cabinet, [{
    key: "canSendRepeat",
    value: function canSendRepeat() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then(function (response) {
        if (response.data.success == true) {
          // Router.push('/cabinet/repeated')
          _this2.setState({
            sendRepeat: true
          }); // this.setState({btnLoading: false})

        }

        if (response.data.success == false) {
          _this2.setState({
            sendRepeat: false
          });
        } else {
          console.log(response);
        }
      });
    }
  }, {
    key: "getCurrentStep",
    value: function getCurrentStep() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default.a.get("https://api.money-men.kz/api/notFull?iin=".concat(this.props.userReducer.user.UF_4), {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }).then(function (res) {
        console.log(res);

        if (res.data.success) {
          _this3.setState({
            step: res.data.step
          });
        }
      })["catch"](console.log('log'));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCurrentStep();
      this.canSendRepeat();
      window.scrollTo(0, 0);
      this.props.fetchUserStatus();
      this.props.fetchUserHistory();
    }
  }, {
    key: "handleRepeated",
    value: function () {
      var _handleRepeated = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.sendRepeat === false) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(response.data.message || "Вам пока отказано подавать повторный займ", " "), "error");
                }

                if (!(this.state.step !== 3 && this.state.canSendRepeat === true)) {
                  _context.next = 5;
                  break;
                }

                next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push("/cabinet/continue");
                _context.next = 8;
                break;

              case 5:
                this.setState({
                  btnLoading: true
                });
                _context.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_18___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then(function (response) {
                  if (response.data.success == true) {
                    next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/cabinet/repeated');

                    _this4.setState({
                      btnLoading: false
                    });
                  }

                  if (response.data.success == false) {
                    _this4.setState({
                      btnLoading: false
                    });

                    sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(response.data.message || "Вам пока отказано подавать повторный займ", " "), "error");
                  } else {
                    console.log(response);
                  }
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleRepeated() {
        return _handleRepeated.apply(this, arguments);
      }

      return handleRepeated;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (Object(_defaults_saled__WEBPACK_IMPORTED_MODULE_21__["ifSaled"])(this.props.userReducer.user.UF_4)) {
        // проданные на ID collect
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container otherPages",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "welcome text-center",
            children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), " ", this.props.userReducer.user.UF_5, " " + this.props.userReducer.user.UF_6, "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "alert alert-info",
            role: "alert",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
              className: "alert-heading",
              children: "\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u043F\u0440\u043E\u0434\u0430\u043D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              children: ["\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u041F\u0420\u041E\u0414\u0410\u041D \u0432 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("b", {
                children: "\u0422\u041E\u041E \u201C\u041A\u043E\u043B\u043B\u0435\u043A\u0442\u043E\u0440\u0441\u043A\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u201C\u0410\u0439\u0414\u0438 \u041A\u043E\u043B\u043B\u0435\u043A\u0442\u201D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 38
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: "m-b-0",
              children: ["\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("b", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                  href: "tel:+77000037733",
                  children: "\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 34
                }, this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                  href: "https://api.whatsapp.com/send?phone=+77000037733",
                  target: "_blank",
                  children: "Whatsapp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 74
                }, this), ": +7 700 003 77 33"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 13
              }, this), "Email: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "mailto:info@idcollect.kz",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("b", {
                  children: "info@idcollect.kz"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 64
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }, this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "otherPages",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
              children: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 | I-credit.kz"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 9
          }, this), this.state.btnLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this), this.props.userReducer.authenticatingUser === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "welcome text-center",
            children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), " ", this.props.userReducer.user.UF_5, " " + this.props.userReducer.user.UF_6, "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 9
          }, this), this.props.userStatus.userStatus.success === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "repeatBtn form-group",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                className: "mt-5",
                onClick: function onClick() {
                  return _this5.handleRepeated();
                },
                children: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u0439\u043C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this), this.props.userStatus.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "mt-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "placeholder",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_userStatus__WEBPACK_IMPORTED_MODULE_19__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this), this.props.userHistory.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "placeholder mt-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_userHistory__WEBPACK_IMPORTED_MODULE_20__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 7
        }, this);
      }
    }
  }]);

  return Cabinet;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
// username: UF9 })


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Cabinet)));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9sb2Fucy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaFVzZXJTdGF0dXMiLCJmZXRjaFVzZXJIaXN0b3J5IiwiQ2FiaW5ldCIsInByb3BzIiwiYnRuTG9hZGluZyIsInNlbmRSZXBlYXQiLCJzdGVwIiwiYXhpb3MiLCJnZXQiLCJ1c2VyIiwiVUZfNCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsInJlcyIsImdldEN1cnJlbnRTdGVwIiwiY2FuU2VuZFJlcGVhdCIsIndpbmRvdyIsInNjcm9sbFRvIiwic3dhbCIsIm1lc3NhZ2UiLCJSb3V0ZXIiLCJwdXNoIiwiaWZTYWxlZCIsImhlbGxvVXNlciIsIlVGXzUiLCJVRl82IiwiYXV0aGVudGljYXRpbmdVc2VyIiwiaGFuZGxlUmVwZWF0ZWQiLCJpc0xvYWRpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsU0FBTztBQUFDQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0MsV0FBcEI7QUFBaUNDLGNBQVUsRUFBRUYsS0FBSyxDQUFDRSxVQUFuRDtBQUErREMsZUFBVyxFQUFFSCxLQUFLLENBQUNHO0FBQWxGLEdBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENDLG1CQUFlLEVBQUU7QUFBQSxhQUFNRCxRQUFRLENBQUNDLGtGQUFlLEVBQWhCLENBQWQ7QUFBQSxLQUR1QjtBQUV4Q0Msb0JBQWdCLEVBQUU7QUFBQSxhQUFNRixRQUFRLENBQUNFLG1GQUFnQixFQUFqQixDQUFkO0FBQUE7QUFGc0IsR0FBZjtBQUFBLENBQTNCOztJQUtNQyxPOzs7OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS1QsS0FBTCxHQUFhO0FBQ1hVLGdCQUFVLEVBQUU7QUFERCxLQUFiO0FBR0EsVUFBS1YsS0FBTCxHQUFhO0FBQ1hXLGdCQUFVLEVBQUU7QUFERCxLQUFiO0FBR0EsVUFBS1gsS0FBTCxHQUFhO0FBQ1hZLFVBQUksRUFBRTtBQURLLEtBQWI7QUFSaUI7QUFXbEI7Ozs7b0NBR2U7QUFBQTs7QUFDZEMsbURBQUssQ0FDQUMsR0FETCx1REFDd0QsS0FBS0wsS0FBTCxDQUFXUixXQUFYLENBQXVCYyxJQUF2QixDQUE0QkMsSUFEcEYsR0FFS0MsSUFGTCxDQUVVLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFJQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBZCxJQUF5QixJQUE3QixFQUFtQztBQUNqQztBQUNBLGdCQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDVixzQkFBVSxFQUFFO0FBQWIsV0FBZCxFQUZpQyxDQUdqQzs7QUFDRDs7QUFDRCxZQUFJTyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsT0FBZCxJQUF5QixLQUE3QixFQUFvQztBQUNsQyxnQkFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ1Ysc0JBQVUsRUFBRTtBQUFiLFdBQWQ7QUFDRCxTQUZELE1BRU87QUFDTFcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBQ0Q7QUFDRixPQWJMO0FBY0Q7OztxQ0FDZ0I7QUFBQTs7QUFDZkwsbURBQUssQ0FBQ0MsR0FBTixvREFBc0QsS0FBS0wsS0FBTCxDQUFXUixXQUFYLENBQXVCYyxJQUF2QixDQUE0QkMsSUFBbEYsR0FBMEY7QUFBQ1EsZUFBTyxFQUFFO0FBQ2xHLHlDQUErQjtBQURtRTtBQUFWLE9BQTFGLEVBR0dQLElBSEgsQ0FHUSxVQUFBUSxHQUFHLEVBQUk7QUFDWEgsZUFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7O0FBQ0EsWUFBR0EsR0FBRyxDQUFDTixJQUFKLENBQVNDLE9BQVosRUFBcUI7QUFDbkIsZ0JBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1pULGdCQUFJLEVBQUVhLEdBQUcsQ0FBQ04sSUFBSixDQUFTUDtBQURILFdBQWQ7QUFHRDtBQUNGLE9BVkgsV0FZSVUsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixDQVpKO0FBY0Q7Ozt3Q0FHbUI7QUFDbEIsV0FBS0csY0FBTDtBQUNBLFdBQUtDLGFBQUw7QUFDQUMsWUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsV0FDR3BCLEtBREgsQ0FFR0gsZUFGSDtBQUdBLFdBQ0dHLEtBREgsQ0FFR0YsZ0JBRkg7QUFHRDs7Ozs7Ozs7Ozs7QUFFQyxvQkFBRyxLQUFLUCxLQUFMLENBQVdXLFVBQVgsS0FBMEIsS0FBN0IsRUFBb0M7QUFDbENtQixvRUFBSSxDQUFDLE9BQUQsWUFBYVosUUFBUSxDQUFDQyxJQUFULENBQWNZLE9BQWQsSUFBeUIsMkNBQXRDLFFBQXNGLE9BQXRGLENBQUo7QUFDRDs7c0JBQ0UsS0FBSy9CLEtBQUwsQ0FBV1ksSUFBWCxLQUFrQixDQUFsQixJQUF1QixLQUFLWixLQUFMLENBQVcyQixhQUFYLEtBQTZCLEk7Ozs7O0FBQ3JESyxtRUFBTSxDQUFDQyxJQUFQOzs7OztBQUdBLHFCQUFLWixRQUFMLENBQWM7QUFBQ1gsNEJBQVUsRUFBRTtBQUFiLGlCQUFkOzt1QkFDTUcsNkNBQUssQ0FDUkMsR0FERyx1REFDZ0QsS0FBS0wsS0FBTCxDQUFXUixXQUFYLENBQXVCYyxJQUF2QixDQUE0QkMsSUFENUUsR0FFSEMsSUFGRyxDQUVFLFVBQUNDLFFBQUQsRUFBYztBQUNsQixzQkFBSUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQWQsSUFBeUIsSUFBN0IsRUFBbUM7QUFDakNZLHVFQUFNLENBQUNDLElBQVAsQ0FBWSxtQkFBWjs7QUFDQSwwQkFBSSxDQUFDWixRQUFMLENBQWM7QUFBQ1gsZ0NBQVUsRUFBRTtBQUFiLHFCQUFkO0FBQ0Q7O0FBQ0Qsc0JBQUlRLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUFkLElBQXlCLEtBQTdCLEVBQW9DO0FBQ2xDLDBCQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDWCxnQ0FBVSxFQUFFO0FBQWIscUJBQWQ7O0FBQ0FvQixzRUFBSSxDQUFDLE9BQUQsWUFBYVosUUFBUSxDQUFDQyxJQUFULENBQWNZLE9BQWQsSUFBeUIsMkNBQXRDLFFBQXNGLE9BQXRGLENBQUo7QUFDRCxtQkFIRCxNQUdPO0FBQ0xULDJCQUFPLENBQUNDLEdBQVIsQ0FBWUwsUUFBWjtBQUNEO0FBQ0YsaUJBYkcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWlCRDtBQUFBOztBQUNQLFVBQUdnQixnRUFBTyxDQUFDLEtBQUt6QixLQUFMLENBQVdSLFdBQVgsQ0FBdUJjLElBQXZCLENBQTRCQyxJQUE3QixDQUFWLEVBQThDO0FBQzVDO0FBQ0EsNEJBQ0U7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLHFCQUFiO0FBQUEsdUJBQW9DbUIsa0VBQVMsRUFBN0MsT0FBa0QsS0FBSzFCLEtBQUwsQ0FBV1IsV0FBWCxDQUF1QmMsSUFBdkIsQ0FBNEJxQixJQUE5RSxFQUNDLE1BQUksS0FBSzNCLEtBQUwsQ0FBV1IsV0FBWCxDQUF1QmMsSUFBdkIsQ0FBNEJzQixJQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBa0MsZ0JBQUksRUFBQyxPQUF2QztBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQSwwSkFBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUcsdUJBQVMsRUFBQyxPQUFiO0FBQUEsc0lBQ2lCO0FBQUEsd0NBQUk7QUFBRyxzQkFBSSxFQUFDLGtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFKLG9CQUE0QztBQUFJLHNCQUFJLEVBQUMsa0RBQVQ7QUFBNEQsd0JBQU0sRUFBQyxRQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURqQixlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkEsMEJBRWdCO0FBQUcsb0JBQUksRUFBQywwQkFBUjtBQUFBLHVDQUFtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQWdCRCxPQWxCRCxNQWtCTTtBQUNOLDRCQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0UscUVBQUMsaURBQUQ7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFLRyxLQUFLckMsS0FBTCxDQUFXVSxVQUFYLGdCQUVHO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkgsZ0JBS0c7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWTixFQVlHLEtBQUtELEtBQUwsQ0FBV1IsV0FBWCxDQUF1QnFDLGtCQUF2QixLQUE4QyxJQUE5QyxnQkFFRztBQUFLLHFCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZILGdCQUtHO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJOLGVBb0JFO0FBQUcscUJBQVMsRUFBQyxxQkFBYjtBQUFBLHVCQUFvQ0gsa0VBQVMsRUFBN0MsT0FBa0QsS0FBSzFCLEtBQUwsQ0FBV1IsV0FBWCxDQUF1QmMsSUFBdkIsQ0FBNEJxQixJQUE5RSxFQUNHLE1BQUksS0FBSzNCLEtBQUwsQ0FBV1IsV0FBWCxDQUF1QmMsSUFBdkIsQ0FBNEJzQixJQURuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBcEJGLEVBdUJHLEtBQUs1QixLQUFMLENBQVdQLFVBQVgsQ0FBc0JBLFVBQXRCLENBQWlDa0IsT0FBakMsS0FBNkMsS0FBN0MsZ0JBRUc7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxxQ0FDQTtBQUFRLHlCQUFTLEVBQUMsTUFBbEI7QUFBeUIsdUJBQU8sRUFBRTtBQUFBLHlCQUFNLE1BQUksQ0FBQ21CLGNBQUwsRUFBTjtBQUFBLGlCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZILGdCQVVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakNOLEVBc0NHLEtBQUs5QixLQUFMLENBQVdQLFVBQVgsQ0FBc0JzQyxTQUF0QixnQkFFRztBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQU0sYUFBWDtBQUFBLHNDQUNFO0FBQUsseUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBSyx5QkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFLLHlCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZILGdCQVVHLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEROLEVBaURHLEtBQUsvQixLQUFMLENBQVdOLFdBQVgsQ0FBdUJxQyxTQUF2QixnQkFFRztBQUFBLG1DQUNFO0FBQUssdUJBQU0sa0JBQVg7QUFBQSxzQ0FDRTtBQUFLLHlCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUsseUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBSyx5QkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSCxnQkFVRyxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUFnRU87QUFDUjs7OztFQTNLbUJDLDRDQUFLLENBQUNDLFMsR0E4SzVCO0FBQ0E7OztBQUVlQyx5SUFBUSxDQUFDQywyREFBTyxDQUFDN0MsZUFBRCxFQUFrQkssa0JBQWxCLENBQVAsQ0FBNkNJLE9BQTdDLENBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9sb2Fucy4zYmJiMGRkYjBhNzBjODhhOTY0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoJ1xyXG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyJ1xyXG5pbXBvcnQge2hlbGxvVXNlcn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaGVsbG8nXHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQge2ZldGNoVXNlclN0YXR1cywgZmV0Y2hVc2VySGlzdG9yeX0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC91c2VyU3RhdHVzJ1xyXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC91c2VySGlzdG9yeSdcclxuaW1wb3J0IHsgaWZTYWxlZCB9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3NhbGVkJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHt1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXIsIHVzZXJTdGF0dXM6IHN0YXRlLnVzZXJTdGF0dXMsIHVzZXJIaXN0b3J5OiBzdGF0ZS51c2VySGlzdG9yeX1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGZldGNoVXNlclN0YXR1czogKCkgPT4gZGlzcGF0Y2goZmV0Y2hVc2VyU3RhdHVzKCkpLFxyXG4gIGZldGNoVXNlckhpc3Rvcnk6ICgpID0+IGRpc3BhdGNoKGZldGNoVXNlckhpc3RvcnkoKSlcclxufSlcclxuXHJcbmNsYXNzIENhYmluZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBidG5Mb2FkaW5nOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VuZFJlcGVhdDogdHJ1ZSxcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHN0ZXA6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY2FuU2VuZFJlcGVhdCgpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZXBlYXRVc2VyP2lpbj0ke3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl80fWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcGVhdGVkJylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZFJlcGVhdDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2J0bkxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZFJlcGVhdDogZmFsc2V9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICB9XHJcbiAgZ2V0Q3VycmVudFN0ZXAoKSB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbm90RnVsbD9paW49JHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNH1gLCB7aGVhZGVyczoge1xyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgIH19KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RlcDogcmVzLmRhdGEuc3RlcFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCAoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZycpXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRDdXJyZW50U3RlcCgpXHJcbiAgICB0aGlzLmNhblNlbmRSZXBlYXQoKVxyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdGhpc1xyXG4gICAgICAucHJvcHNcclxuICAgICAgLmZldGNoVXNlclN0YXR1cygpXHJcbiAgICB0aGlzXHJcbiAgICAgIC5wcm9wc1xyXG4gICAgICAuZmV0Y2hVc2VySGlzdG9yeSgpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlcGVhdGVkKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zZW5kUmVwZWF0ID09PSBmYWxzZSkge1xyXG4gICAgICBzd2FsKFwiT29wcyFcIiwgYCR7cmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8IFwi0JLQsNC8INC/0L7QutCwINC+0YLQutCw0LfQsNC90L4g0L/QvtC00LDQstCw0YLRjCDQv9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50LxcIn0gYCwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuc3RhdGUuc3RlcCE9PTMgJiYgdGhpcy5zdGF0ZS5jYW5TZW5kUmVwZWF0ID09PSB0cnVlKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvY2FiaW5ldC9jb250aW51ZWApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YnRuTG9hZGluZzogdHJ1ZX0pXHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZXBlYXRVc2VyP2lpbj0ke3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl80fWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcGVhdGVkJylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnRuTG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtidG5Mb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBgJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2UgfHwgXCLQktCw0Lwg0L/QvtC60LAg0L7RgtC60LDQt9Cw0L3QviDQv9C+0LTQsNCy0LDRgtGMINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0LnQvFwifSBgLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKGlmU2FsZWQodGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyLlVGXzQpKSB7XHJcbiAgICAgIC8vINC/0YDQvtC00LDQvdC90YvQtSDQvdCwIElEIGNvbGxlY3RcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWxjb21lIHRleHQtY2VudGVyJz57aGVsbG9Vc2VyKCl9IHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNX1cclxuICAgICAgICAgIHtcIiBcIit0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNn1cclxuICAgICAgICAgICE8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFsZXJ0LWhlYWRpbmdcIj7QktCw0Ygg0LrQvtC90YLRgNCw0LrRgiDQv9GA0L7QtNCw0L08L2g0PlxyXG4gICAgICAgICAgICA8cD7QktCw0Ygg0LrQvtC90YLRgNCw0LrRgiDQn9Cg0J7QlNCQ0J0g0LIgPGI+0KLQntCeIOKAnNCa0L7Qu9C70LXQutGC0L7RgNGB0LrQvtC1INCw0LPQtdC90YLRgdGC0LLQviDigJzQkNC50JTQuCDQmtC+0LvQu9C10LrRguKAnTwvYj48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0wXCI+XHJcbiAgICAgICAgICAgINC60L7QvdGC0LDQutGC0L3Ri9C5INC90L7QvNC10YAgPGIgPjxhIGhyZWY9J3RlbDorNzcwMDAwMzc3MzMnPtGC0LXQu9C10YTQvtC90LA8L2E+LzxhICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9Kzc3MDAwMDM3NzMzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2hhdHNhcHA8L2E+OiArNyA3MDAgMDAzIDc3IDMzPC9iPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5FbWFpbDogPGEgaHJlZj0nbWFpbHRvOmluZm9AaWRjb2xsZWN0Lmt6Jz48Yj5pbmZvQGlkY29sbGVjdC5rejwvYj48L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgICBcclxuICAgIH1lbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzJz5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT7QmtCw0LHQuNC90LXRgiB8IEktY3JlZGl0Lmt6PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICBcclxuICAgICAgICB7dGhpcy5zdGF0ZS5idG5Mb2FkaW5nXHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLmF1dGhlbnRpY2F0aW5nVXNlciA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgICBcclxuICAgICAgICA8cCBjbGFzc05hbWU9J3dlbGNvbWUgdGV4dC1jZW50ZXInPntoZWxsb1VzZXIoKX0ge3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl81fVxyXG4gICAgICAgICAge1wiIFwiK3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl82fVxyXG4gICAgICAgICAgITwvcD5cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyU3RhdHVzLnVzZXJTdGF0dXMuc3VjY2VzcyA9PT0gZmFsc2VcclxuICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0QnRuIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXQtNScgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZXBlYXRlZCgpfT7Qn9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50Lw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyU3RhdHVzLmlzTG9hZGluZ1xyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IDxTdGF0dXMvPn1cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VySGlzdG9yeS5pc0xvYWRpbmdcclxuICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgOiA8SGlzdG9yeS8+fVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICAgICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2Vyc1JlZHVjZXI6IHsgdXNlcjogeyBVRjl9IH0gfSkgPT4gKHtcclxuLy8gdXNlcm5hbWU6IFVGOSB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FiaW5ldCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9