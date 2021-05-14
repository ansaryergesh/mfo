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
    _this.state = {
      repeatMessage: ''
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

          _this2.setState({
            repeatMessage: response.data.message
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
                  sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(this.state.repeatMessage || "Вам пока отказано подавать повторный займ", " "), "error");
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
            lineNumber: 119,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "alert alert-info",
            role: "alert",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
              className: "alert-heading",
              children: "\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u043F\u0440\u043E\u0434\u0430\u043D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              children: ["\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442 \u041F\u0420\u041E\u0414\u0410\u041D \u0432 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("b", {
                children: "\u0422\u041E\u041E \u201C\u041A\u043E\u043B\u043B\u0435\u043A\u0442\u043E\u0440\u0441\u043A\u043E\u0435 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u201C\u0410\u0439\u0414\u0438 \u041A\u043E\u043B\u043B\u0435\u043A\u0442\u201D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 38
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              className: "m-b-0",
              children: ["\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("b", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                  href: "tel:+77000037733",
                  children: "\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 34
                }, this), "/", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                  href: "https://api.whatsapp.com/send?phone=+77000037733",
                  target: "_blank",
                  children: "Whatsapp"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 74
                }, this), ": +7 700 003 77 33"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 30
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 13
              }, this), "Email: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                href: "mailto:info@idcollect.kz",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("b", {
                  children: "info@idcollect.kz"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 64
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
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
              lineNumber: 137,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 9
          }, this), this.state.btnLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, this), this.props.userReducer.authenticatingUser === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "welcome text-center",
            children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), " ", this.props.userReducer.user.UF_5, " " + this.props.userReducer.user.UF_6, "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 155,
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
                lineNumber: 162,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this), this.props.userStatus.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "mt-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "placeholder",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_userStatus__WEBPACK_IMPORTED_MODULE_19__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this), this.props.userHistory.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "placeholder mt-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                "class": "loader"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_userHistory__WEBPACK_IMPORTED_MODULE_20__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9sb2Fucy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaFVzZXJTdGF0dXMiLCJmZXRjaFVzZXJIaXN0b3J5IiwiQ2FiaW5ldCIsInByb3BzIiwiYnRuTG9hZGluZyIsInNlbmRSZXBlYXQiLCJzdGVwIiwicmVwZWF0TWVzc2FnZSIsImF4aW9zIiwiZ2V0IiwidXNlciIsIlVGXzQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3VjY2VzcyIsInNldFN0YXRlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwicmVzIiwiZ2V0Q3VycmVudFN0ZXAiLCJjYW5TZW5kUmVwZWF0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJzd2FsIiwiUm91dGVyIiwicHVzaCIsImlmU2FsZWQiLCJoZWxsb1VzZXIiLCJVRl81IiwiVUZfNiIsImF1dGhlbnRpY2F0aW5nVXNlciIsImhhbmRsZVJlcGVhdGVkIiwiaXNMb2FkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFNBQU87QUFBQ0MsZUFBVyxFQUFFRCxLQUFLLENBQUNDLFdBQXBCO0FBQWlDQyxjQUFVLEVBQUVGLEtBQUssQ0FBQ0UsVUFBbkQ7QUFBK0RDLGVBQVcsRUFBRUgsS0FBSyxDQUFDRztBQUFs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QUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUFLLHlCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGRixlQUdFO0FBQUsseUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkgsZ0JBVUcscUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoRE4sRUFpREcsS0FBS2hDLEtBQUwsQ0FBV04sV0FBWCxDQUF1QnNDLFNBQXZCLGdCQUVHO0FBQUEsbUNBQ0U7QUFBSyx1QkFBTSxrQkFBWDtBQUFBLHNDQUNFO0FBQUsseUJBQU07QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBSyx5QkFBTTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFLLHlCQUFNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZILGdCQVVHLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBM0ROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQWdFTztBQUNSOzs7O0VBL0ttQkMsNENBQUssQ0FBQ0MsUyxHQWtMNUI7QUFDQTs7O0FBRWVDLHlJQUFRLENBQUNDLDJEQUFPLENBQUM5QyxlQUFELEVBQWtCSyxrQkFBbEIsQ0FBUCxDQUE2Q0ksT0FBN0MsQ0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2xvYW5zLmYzMjA3NDc4M2RjODBhM2ExMzZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvY3Mvd2l0aEF1dGgnXHJcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi4vLi4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXInXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbmltcG9ydCB7ZmV0Y2hVc2VyU3RhdHVzLCBmZXRjaFVzZXJIaXN0b3J5fSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3VzZXJTdGF0dXMnXHJcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL3VzZXJIaXN0b3J5J1xyXG5pbXBvcnQgeyBpZlNhbGVkIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvc2FsZWQnXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge3VzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlciwgdXNlclN0YXR1czogc3RhdGUudXNlclN0YXR1cywgdXNlckhpc3Rvcnk6IHN0YXRlLnVzZXJIaXN0b3J5fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZmV0Y2hVc2VyU3RhdHVzOiAoKSA9PiBkaXNwYXRjaChmZXRjaFVzZXJTdGF0dXMoKSksXHJcbiAgZmV0Y2hVc2VySGlzdG9yeTogKCkgPT4gZGlzcGF0Y2goZmV0Y2hVc2VySGlzdG9yeSgpKVxyXG59KVxyXG5cclxuY2xhc3MgQ2FiaW5ldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZW5kUmVwZWF0OiB0cnVlLFxyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc3RlcDogJydcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHJlcGVhdE1lc3NhZ2U6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgY2FuU2VuZFJlcGVhdCgpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZXBlYXRVc2VyP2lpbj0ke3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl80fWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcGVhdGVkJylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZFJlcGVhdDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2J0bkxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZFJlcGVhdDogZmFsc2V9KVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXBlYXRNZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICB9XHJcbiAgZ2V0Q3VycmVudFN0ZXAoKSB7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbm90RnVsbD9paW49JHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNH1gLCB7aGVhZGVyczoge1xyXG4gICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuICAgIH19KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RlcDogcmVzLmRhdGEuc3RlcFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCAoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZycpXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5nZXRDdXJyZW50U3RlcCgpXHJcbiAgICB0aGlzLmNhblNlbmRSZXBlYXQoKVxyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgdGhpc1xyXG4gICAgICAucHJvcHNcclxuICAgICAgLmZldGNoVXNlclN0YXR1cygpXHJcbiAgICB0aGlzXHJcbiAgICAgIC5wcm9wc1xyXG4gICAgICAuZmV0Y2hVc2VySGlzdG9yeSgpXHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlcGVhdGVkKCkge1xyXG4gICAgaWYodGhpcy5zdGF0ZS5zZW5kUmVwZWF0ID09PSBmYWxzZSkge1xyXG4gICAgICBzd2FsKFwiT29wcyFcIiwgYCR7dGhpcy5zdGF0ZS5yZXBlYXRNZXNzYWdlIHx8IFwi0JLQsNC8INC/0L7QutCwINC+0YLQutCw0LfQsNC90L4g0L/QvtC00LDQstCw0YLRjCDQv9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50LxcIn0gYCwgXCJlcnJvclwiKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuc3RhdGUuc3RlcCE9PTMgJiYgdGhpcy5zdGF0ZS5jYW5TZW5kUmVwZWF0ID09PSB0cnVlKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKGAvY2FiaW5ldC9jb250aW51ZWApXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YnRuTG9hZGluZzogdHJ1ZX0pXHJcbiAgICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZXBlYXRVc2VyP2lpbj0ke3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl80fWApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcGVhdGVkJylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnRuTG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtidG5Mb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBgJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2UgfHwgXCLQktCw0Lwg0L/QvtC60LAg0L7RgtC60LDQt9Cw0L3QviDQv9C+0LTQsNCy0LDRgtGMINC/0L7QstGC0L7RgNC90YvQuSDQt9Cw0LnQvFwifSBgLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKGlmU2FsZWQodGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyLlVGXzQpKSB7XHJcbiAgICAgIC8vINC/0YDQvtC00LDQvdC90YvQtSDQvdCwIElEIGNvbGxlY3RcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWxjb21lIHRleHQtY2VudGVyJz57aGVsbG9Vc2VyKCl9IHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNX1cclxuICAgICAgICAgIHtcIiBcIit0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNn1cclxuICAgICAgICAgICE8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWluZm9cIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImFsZXJ0LWhlYWRpbmdcIj7QktCw0Ygg0LrQvtC90YLRgNCw0LrRgiDQv9GA0L7QtNCw0L08L2g0PlxyXG4gICAgICAgICAgICA8cD7QktCw0Ygg0LrQvtC90YLRgNCw0LrRgiDQn9Cg0J7QlNCQ0J0g0LIgPGI+0KLQntCeIOKAnNCa0L7Qu9C70LXQutGC0L7RgNGB0LrQvtC1INCw0LPQtdC90YLRgdGC0LLQviDigJzQkNC50JTQuCDQmtC+0LvQu9C10LrRguKAnTwvYj48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tYi0wXCI+XHJcbiAgICAgICAgICAgINC60L7QvdGC0LDQutGC0L3Ri9C5INC90L7QvNC10YAgPGIgPjxhIGhyZWY9J3RlbDorNzcwMDAwMzc3MzMnPtGC0LXQu9C10YTQvtC90LA8L2E+LzxhICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9Kzc3MDAwMDM3NzMzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+V2hhdHNhcHA8L2E+OiArNyA3MDAgMDAzIDc3IDMzPC9iPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5FbWFpbDogPGEgaHJlZj0nbWFpbHRvOmluZm9AaWRjb2xsZWN0Lmt6Jz48Yj5pbmZvQGlkY29sbGVjdC5rejwvYj48L2E+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgICBcclxuICAgIH1lbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzJz5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT7QmtCw0LHQuNC90LXRgiB8IEktY3JlZGl0Lmt6PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICBcclxuICAgICAgICB7dGhpcy5zdGF0ZS5idG5Mb2FkaW5nXHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+PC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLmF1dGhlbnRpY2F0aW5nVXNlciA9PT0gdHJ1ZVxyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgICBcclxuICAgICAgICA8cCBjbGFzc05hbWU9J3dlbGNvbWUgdGV4dC1jZW50ZXInPntoZWxsb1VzZXIoKX0ge3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl81fVxyXG4gICAgICAgICAge1wiIFwiK3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl82fVxyXG4gICAgICAgICAgITwvcD5cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyU3RhdHVzLnVzZXJTdGF0dXMuc3VjY2VzcyA9PT0gZmFsc2VcclxuICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0QnRuIGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXQtNScgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZXBlYXRlZCgpfT7Qn9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50Lw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyU3RhdHVzLmlzTG9hZGluZ1xyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC01Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IDxTdGF0dXMvPn1cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VySGlzdG9yeS5pc0xvYWRpbmdcclxuICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgOiA8SGlzdG9yeS8+fVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICAgICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2Vyc1JlZHVjZXI6IHsgdXNlcjogeyBVRjl9IH0gfSkgPT4gKHtcclxuLy8gdXNlcm5hbWU6IFVGOSB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2FiaW5ldCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9