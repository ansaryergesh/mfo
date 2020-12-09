webpackHotUpdate_N_E("pages/get_money",{

/***/ "./components/shared/Progressbar.js":
/*!******************************************!*\
  !*** ./components/shared/Progressbar.js ***!
  \******************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/ActionCreators */ "./store/actions/ActionCreators.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_16__);










var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\shared\\Progressbar.js",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








axios__WEBPACK_IMPORTED_MODULE_14___default.a.defaults.headers.common = {
  'Authorization': "bearer ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('token'))
};


var AppLink = function AppLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: href,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("a", {
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    moneyVal: state.moneyVal,
    dayVal: state.dayVal,
    userReducer: state.userReducer
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changingMoney: function changingMoney(money) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_12__["changingMoney"])(money));
    },
    changingDay: function changingDay(day) {
      dispatch(Object(_store_actions_ActionCreators__WEBPACK_IMPORTED_MODULE_12__["changingDay"])(day));
    }
  };
};

var ProgressBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProgressBar, _Component);

  var _super = _createSuper(ProgressBar);

  function ProgressBar(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ProgressBar);

    _this2 = _super.call(this, props);
    _this2.state = {
      money: _this2.props.moneyVal,
      day: _this2.props.dayVal,
      dayMoreThirty: false,
      showMessage: false,
      repeatedLoading: false
    };
    _this2.handleChangeMoney = _this2.handleChangeMoney.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.handleChangeDay = _this2.handleChangeDay.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.handleFocus = _this2.handleFocus.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.close = _this2.close.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.open = _this2.open.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    _this2.handleRepeatedZaim = _this2.handleRepeatedZaim.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ProgressBar, [{
    key: "close",
    value: function close() {
      this.setState({
        showMessage: false
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {}
  }, {
    key: "handleRepeatedZaim",
    value: function () {
      var _handleRepeatedZaim = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values.UF_2 = this.props.moneyVal;
                values.UF_3 = this.props.dayVal;
                console.log(values);
                this.setState({
                  repeatedLoading: true
                });
                _context.next = 6;
                return (// axios.setHeader('Accept', 'application/json')
                  axios__WEBPACK_IMPORTED_MODULE_14___default.a.post("https://api.money-men.kz/api/getRepeatedLoan", {
                    UF2: values.UF_2,
                    UF3: values.UF_3,
                    UF4: values.UF_4,
                    UF5: values.UF_5,
                    UF6: values.UF_6,
                    UF7: values.UF_7,
                    UF8: values.UF_8,
                    UF9: values.UF_9,
                    UF10: values.UF_10,
                    UF11: values.UF_11,
                    UF12: values.UF_12,
                    UF13: values.UF_13,
                    UF16: values.UF_16,
                    UF17: values.UF_17,
                    UF18: values.UF_18,
                    UF19: values.UF_19,
                    UF20: values.UF_20,
                    UF21: values.UF_21,
                    UF22: values.UF_22,
                    UF23: values.UF_23,
                    UF24: values.UF_24,
                    UF25: values.UF_25,
                    UF26: values.UF_26,
                    UF27: values.UF_27,
                    UF28: values.UF_28,
                    UF29: values.UF_29,
                    UF30: values.UF_30,
                    UF31: values.UF_31,
                    UF32: values.UF_32,
                    UF33: values.UF_33,
                    UF34: values.UF_34,
                    UF35: values.UF_35,
                    UF36: values.UF_36,
                    UF37: values.UF_37,
                    UF38: values.UF_38,
                    UF39: values.UF_39 == "0" ? 0 : values.UF_39.slice(1, -1),
                    UF40: values.UF_40 == "0" ? 0 : values.UF_40.slice(1, -1),
                    UF41: values.UF_41 == "0" ? 0 : values.UF_41.slice(1, -1),
                    UF42: values.UF_42,
                    UF43: values.UF_43,
                    UF44: values.UF_44,
                    UF45: values.UF_45,
                    UF46: values.UF_46,
                    UF47: values.UF_47
                  }, {
                    headers: {
                      'Content-Type': 'application/json',
                      "Authorization": "Bearer ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_13___default.a.get('token')),
                      'Accept': 'application/json'
                    }
                  }).then(function (response) {
                    _this3.setState({
                      repeatedLoading: false
                    });

                    if (response.data.success === true) {
                      sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Успешно!", "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", "success").then(function () {
                        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/cabinet/loans');
                      });
                    } else {
                      sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(response.errors), "error");
                    }
                  })["catch"](function (error) {
                    console.log(error.message);
                  })
                );

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleRepeatedZaim(_x) {
        return _handleRepeatedZaim.apply(this, arguments);
      }

      return handleRepeatedZaim;
    }()
  }, {
    key: "open",
    value: function open() {
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "handleChangeMoney",
    value: function handleChangeMoney(event) {
      this.setState({
        money: event.target.value
      });
      this.props.changingMoney(event.target.value);
    }
  }, {
    key: "handleChangeDay",
    value: function handleChangeDay(event) {
      this.setState({
        day: event.target.value
      });

      if (event.target.value > 30) {
        this.props.changingDay(30);
      } else {
        this.props.changingDay(event.target.value);
      } // this.props.changingDay(event.target.value);

    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var spaceNum = function spaceNum(val) {
        var splitIndex = (val.length + 2) % 3 + 1;
        val = val.valubstr(0, splitIndex) + val.substr(splitIndex).replace(/\d\d\d/g, ' $&');
      };

      var vozvrat = Math.round(Math.floor(this.props.moneyVal * (1 + this.props.dayVal / 100 * 2) / 100) * 100);
      var osnovnoiDolg = Math.round(Math.floor(this.props.moneyVal * 1.15 / 100) * 100);
      var strahovanie = osnovnoiDolg - this.props.moneyVal;
      var voznograzhdenie = osnovnoiDolg - this.props.moneyVal;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
        className: "calculator-band row ",
        onClick: this.handleFocus,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "progress-bars col-md-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            id: "money",
            className: "money",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
              id: "money-input",
              className: "range",
              type: "range",
              min: "10000",
              max: "135000",
              step: "1000",
              value: this.state.money,
              onChange: this.handleChangeMoney
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "text mt-3 d-flex justify-content-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "10 000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "135 000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            id: "day",
            className: "day",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("input", {
              type: "range",
              min: 15,
              max: 30,
              step: 1,
              id: "day-input",
              className: "range",
              value: this.state.day,
              onChange: this.handleChangeDay
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "text mt-3 d-flex justify-content-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "15 \u0434\u043D\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "30 \u0434\u043D\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this), this.state.repeatedLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 43
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 81
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            className: "calculator-take repeatedBtn",
            onClick: function onClick() {
              return _this4.handleRepeatedZaim(_this4.props.userReducer.user);
            },
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
            className: "text-center mt-3 mb-3 availableDay",
            style: {
              display: this.props.dayVal === 30 ? 'block' : 'none'
            },
            children: "\u0412 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0412\u0430\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0441\u0440\u043E\u043A \u043C\u0435\u0436\u0434\u0443 15 \u0438 30 \u0434\u043D\u044F\u043C\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(AppLink, {
            href: "/get_money",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              className: "takebtn calculator-take",
              onClick: this.open,
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 40
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 12
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
          className: "calculator-info col-md-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "main-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center",
              children: ["\u0421\u0443\u043C\u043C\u0430 \u043D\u0430 \u0440\u0443\u043A\u0438 (\u0442\u0433) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                id: "summa",
                children: this.props.moneyVal
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center ",
              children: ["\u0421\u0440\u043E\u043A (\u0434\u043D\u0435\u0439) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                id: "dnei",
                children: this.props.dayVal
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center ",
              children: ["\u041A \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                className: "vozvrat",
                children: vozvrat
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 48
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "secondary-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center head-p",
              children: "\u0412\u043E\u0437\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "secondary-info--texts",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0434\u043E\u043B\u0433"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [vozvrat, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "osnovnoi-dolg",
                  children: [" \xA0 \xA0 ", osnovnoiDolg, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 79
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [strahovanie * 2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "str",
                  children: ["\xA0 \xA0 ", strahovanie, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 75
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u0412\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [voznograzhdenie * 2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "vozn",
                  children: ["\xA0 \xA0 ", voznograzhdenie, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 89
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, this);
    }
  }]);

  return ProgressBar;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]); // export default ProgressBar;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(ProgressBar));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjb29raWUiLCJnZXQiLCJBcHBMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJocmVmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJjaGFuZ2luZ0RheSIsImRheSIsIlByb2dyZXNzQmFyIiwicHJvcHMiLCJkYXlNb3JlVGhpcnR5Iiwic2hvd01lc3NhZ2UiLCJyZXBlYXRlZExvYWRpbmciLCJoYW5kbGVDaGFuZ2VNb25leSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VEYXkiLCJoYW5kbGVGb2N1cyIsImNsb3NlIiwib3BlbiIsImhhbmRsZVJlcGVhdGVkWmFpbSIsInNldFN0YXRlIiwidmFsdWVzIiwiVUZfMiIsIlVGXzMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIlVGMiIsIlVGMyIsIlVGNCIsIlVGXzQiLCJVRjUiLCJVRl81IiwiVUY2IiwiVUZfNiIsIlVGNyIsIlVGXzciLCJVRjgiLCJVRl84IiwiVUY5IiwiVUZfOSIsIlVGMTAiLCJVRl8xMCIsIlVGMTEiLCJVRl8xMSIsIlVGMTIiLCJVRl8xMiIsIlVGMTMiLCJVRl8xMyIsIlVGMTYiLCJVRl8xNiIsIlVGMTciLCJVRl8xNyIsIlVGMTgiLCJVRl8xOCIsIlVGMTkiLCJVRl8xOSIsIlVGMjAiLCJVRl8yMCIsIlVGMjEiLCJVRl8yMSIsIlVGMjIiLCJVRl8yMiIsIlVGMjMiLCJVRl8yMyIsIlVGMjQiLCJVRl8yNCIsIlVGMjUiLCJVRl8yNSIsIlVGMjYiLCJVRl8yNiIsIlVGMjciLCJVRl8yNyIsIlVGMjgiLCJVRl8yOCIsIlVGMjkiLCJVRl8yOSIsIlVGMzAiLCJVRl8zMCIsIlVGMzEiLCJVRl8zMSIsIlVGMzIiLCJVRl8zMiIsIlVGMzMiLCJVRl8zMyIsIlVGMzQiLCJVRl8zNCIsIlVGMzUiLCJVRl8zNSIsIlVGMzYiLCJVRl8zNiIsIlVGMzciLCJVRl8zNyIsIlVGMzgiLCJVRl8zOCIsIlVGMzkiLCJVRl8zOSIsInNsaWNlIiwiVUY0MCIsIlVGXzQwIiwiVUY0MSIsIlVGXzQxIiwiVUY0MiIsIlVGXzQyIiwiVUY0MyIsIlVGXzQzIiwiVUY0NCIsIlVGXzQ0IiwiVUY0NSIsIlVGXzQ1IiwiVUY0NiIsIlVGXzQ2IiwiVUY0NyIsIlVGXzQ3IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzd2FsIiwiUm91dGVyIiwicHVzaCIsImVycm9ycyIsImVycm9yIiwibWVzc2FnZSIsInNob3dNb2RhbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzcGFjZU51bSIsInZhbCIsInNwbGl0SW5kZXgiLCJsZW5ndGgiLCJ2YWx1YnN0ciIsInN1YnN0ciIsInJlcGxhY2UiLCJ2b3p2cmF0IiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJvc25vdm5vaURvbGciLCJzdHJhaG92YW5pZSIsInZvem5vZ3JhemhkZW5pZSIsInVzZXIiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw2Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLEdBQWdDO0FBQUMsb0NBQTJCQyxpREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxDQUEzQjtBQUFELENBQWhDO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFFBQVlBLFNBQVo7QUFBQSxNQUF1QkMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGUSxlQUUwRDtBQUFHLG9CQUFFLEVBQUMsS0FBTjtBQUFBLDJDQUEyQkEsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUYxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsZUFVRTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHdDQUNFO0FBQUcsMkJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBRywyQkFBUyxFQUFDLGdDQUFiO0FBQUEsNkJBQStDQyxlQUFlLEdBQUMsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLGVBRXdFO0FBQUcsb0JBQUUsRUFBQyxNQUFOO0FBQUEsMkNBQTRCQSxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRnhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUE2REg7Ozs7RUExTXFCRywrQyxHQTRNMUI7OztBQUNnQkMsMkhBQU8sQ0FBQ3BKLGVBQUQsRUFBaUJLLGtCQUFqQixDQUFQLENBQTRDTSxXQUE1QyxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRfbW9uZXkuM2Y0MWNkMDVlYjkzZTdiYjY2NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Y2hhbmdpbmdNb25leSwgY2hhbmdpbmdEYXl9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7J0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7Y29va2llLmdldCgndG9rZW4nKX1gfVxyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT5cclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbW9uZXlWYWw6IHN0YXRlLm1vbmV5VmFsLFxyXG4gICAgICBkYXlWYWw6IHN0YXRlLmRheVZhbCxcclxuICAgICAgdXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGNoYW5naW5nTW9uZXk6IG1vbmV5ID0+IHsgZGlzcGF0Y2goY2hhbmdpbmdNb25leShtb25leSkpOyB9LFxyXG4gICAgY2hhbmdpbmdEYXk6IGRheSA9PiB7IGRpc3BhdGNoKGNoYW5naW5nRGF5KGRheSkpOyB9XHJcbn0pXHJcbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgbW9uZXk6IHRoaXMucHJvcHMubW9uZXlWYWwsXHJcbiAgICAgICAgICBkYXk6IHRoaXMucHJvcHMuZGF5VmFsLFxyXG4gICAgICAgICAgZGF5TW9yZVRoaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlTW9uZXkgPSB0aGlzLmhhbmRsZUNoYW5nZU1vbmV5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VEYXkgPSB0aGlzLmhhbmRsZUNoYW5nZURheS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbSA9IHRoaXMuaGFuZGxlUmVwZWF0ZWRaYWltLmJpbmQodGhpcylcclxuICAgICAgfVxyXG5cclxuICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGhhbmRsZUZvY3VzKCkge1xyXG5cclxuICAgICAgfVxyXG4gICAgICBhc3luYyBoYW5kbGVSZXBlYXRlZFphaW0odmFsdWVzKSB7XHJcbiAgICAgICAgdmFsdWVzLlVGXzIgPSB0aGlzLnByb3BzLm1vbmV5VmFsO1xyXG4gICAgICAgIHZhbHVlcy5VRl8zID0gdGhpcy5wcm9wcy5kYXlWYWw7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0XHJcbiAgICAgICAgLy8gYXhpb3Muc2V0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXRSZXBlYXRlZExvYW5gLCB7XHJcbiAgICAgICAgICBVRjI6dmFsdWVzLlVGXzIgLFxyXG4gICAgICAgICAgVUYzOnZhbHVlcy5VRl8zICxcclxuICAgICAgICAgIFVGNDp2YWx1ZXMuVUZfNCAsXHJcbiAgICAgICAgICBVRjU6dmFsdWVzLlVGXzUgLFxyXG4gICAgICAgICAgVUY2OnZhbHVlcy5VRl82ICxcclxuICAgICAgICAgIFVGNzp2YWx1ZXMuVUZfNyAsXHJcbiAgICAgICAgICBVRjg6dmFsdWVzLlVGXzggLFxyXG4gICAgICAgICAgVUY5OnZhbHVlcy5VRl85ICxcclxuICAgICAgICAgIFVGMTA6dmFsdWVzLlVGXzEwICxcclxuICAgICAgICAgIFVGMTE6dmFsdWVzLlVGXzExICxcclxuICAgICAgICAgIFVGMTI6dmFsdWVzLlVGXzEyICxcclxuICAgICAgICAgIFVGMTM6dmFsdWVzLlVGXzEzICxcclxuICAgICAgICAgIFVGMTY6dmFsdWVzLlVGXzE2ICxcclxuICAgICAgICAgIFVGMTc6dmFsdWVzLlVGXzE3ICxcclxuICAgICAgICAgIFVGMTg6dmFsdWVzLlVGXzE4ICxcclxuICAgICAgICAgIFVGMTk6dmFsdWVzLlVGXzE5ICxcclxuICAgICAgICAgIFVGMjA6dmFsdWVzLlVGXzIwLFxyXG4gICAgICAgICAgVUYyMTp2YWx1ZXMuVUZfMjEsXHJcbiAgICAgICAgICBVRjIyOnZhbHVlcy5VRl8yMixcclxuICAgICAgICAgIFVGMjM6dmFsdWVzLlVGXzIzLFxyXG4gICAgICAgICAgVUYyNDp2YWx1ZXMuVUZfMjQsXHJcbiAgICAgICAgICBVRjI1OnZhbHVlcy5VRl8yNSxcclxuICAgICAgICAgIFVGMjY6dmFsdWVzLlVGXzI2LFxyXG4gICAgICAgICAgVUYyNzp2YWx1ZXMuVUZfMjcsXHJcbiAgICAgICAgICBVRjI4OnZhbHVlcy5VRl8yOCxcclxuICAgICAgICAgIFVGMjk6dmFsdWVzLlVGXzI5LFxyXG4gICAgICAgICAgVUYzMDp2YWx1ZXMuVUZfMzAsXHJcbiAgICAgICAgICBVRjMxOnZhbHVlcy5VRl8zMSxcclxuICAgICAgICAgIFVGMzI6dmFsdWVzLlVGXzMyLFxyXG4gICAgICAgICAgVUYzMzp2YWx1ZXMuVUZfMzMsXHJcbiAgICAgICAgICBVRjM0OnZhbHVlcy5VRl8zNCxcclxuICAgICAgICAgIFVGMzU6dmFsdWVzLlVGXzM1LFxyXG4gICAgICAgICAgVUYzNjp2YWx1ZXMuVUZfMzYsXHJcbiAgICAgICAgICBVRjM3OnZhbHVlcy5VRl8zNyxcclxuICAgICAgICAgIFVGMzg6dmFsdWVzLlVGXzM4LFxyXG4gICAgICAgICAgVUYzOTp2YWx1ZXMuVUZfMzkgPT0gXCIwXCIgPyAwIDogdmFsdWVzLlVGXzM5LnNsaWNlKDEsIC0xKSxcclxuICAgICAgICAgIFVGNDA6dmFsdWVzLlVGXzQwID09IFwiMFwiID8gMCA6IHZhbHVlcy5VRl80MC5zbGljZSgxLCAtMSksXHJcbiAgICAgICAgICBVRjQxOnZhbHVlcy5VRl80MSA9PSBcIjBcIiA/IDAgOiB2YWx1ZXMuVUZfNDEuc2xpY2UoMSwgLTEpLFxyXG4gICAgICAgICAgVUY0Mjp2YWx1ZXMuVUZfNDIsXHJcbiAgICAgICAgICBVRjQzOnZhbHVlcy5VRl80MyxcclxuICAgICAgICAgIFVGNDQ6dmFsdWVzLlVGXzQ0LFxyXG4gICAgICAgICAgVUY0NTp2YWx1ZXMuVUZfNDUsXHJcbiAgICAgICAgICBVRjQ2OnZhbHVlcy5VRl80NixcclxuICAgICAgICAgIFVGNDc6dmFsdWVzLlVGXzQ3XHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtjb29raWUuZ2V0KCd0b2tlbicpfWAsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCX0LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QvmAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+e1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L2xvYW5zJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGAke3Jlc3BvbnNlLmVycm9yc31gLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBoYW5kbGVDaGFuZ2VNb25leShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbW9uZXk6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2luZ01vbmV5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlQ2hhbmdlRGF5KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkYXk6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgfSk7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPjMwKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nRGF5KDMwKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nRGF5KGV2ZW50LnRhcmdldC52YWx1ZSk7fVxyXG5cclxuICAgICAgLy8gdGhpcy5wcm9wcy5jaGFuZ2luZ0RheShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpICB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VOdW0gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzcGxpdEluZGV4ID0gKHZhbC5sZW5ndGggKyAyKSAlIDMgKyAxO1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwudmFsdWJzdHIoMCwgc3BsaXRJbmRleCkgKyB2YWwuc3Vic3RyKHNwbGl0SW5kZXgpLnJlcGxhY2UoL1xcZFxcZFxcZC9nLCAnICQmJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2b3p2cmF0ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKHRoaXMucHJvcHMubW9uZXlWYWwqKDErKHRoaXMucHJvcHMuZGF5VmFsLzEwMCkqMikvMTAwKSoxMDApO1xyXG5cclxuICAgICAgICBjb25zdCBvc25vdm5vaURvbGcgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IoKHRoaXMucHJvcHMubW9uZXlWYWwqMS4xNSkvMTAwKSoxMDApO1xyXG4gICAgICAgIGNvbnN0IHN0cmFob3ZhbmllID0gb3Nub3Zub2lEb2xnLSB0aGlzLnByb3BzLm1vbmV5VmFsO1xyXG4gICAgICAgIGNvbnN0IHZvem5vZ3JhemhkZW5pZSA9IG9zbm92bm9pRG9sZyAtIHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLWJhbmQgcm93IFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRm9jdXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJzIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uZXlcIiBjbGFzc05hbWU9XCJtb25leVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJtb25leS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMTAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjEzNTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUubW9uZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlTW9uZXl9XHJcblxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBtdC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjEwIDAwMDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4xMzUgMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZGF5XCIgY2xhc3NOYW1lPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj17MTV9IG1heD17MzB9IHN0ZXA9ezF9IGlkPVwiZGF5LWlucHV0XCIgY2xhc3NOYW1lPVwicmFuZ2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5kYXl9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZURheX0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgbXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwPjE1INC00L3QtdC5PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+MzAg0LTQvdC10Lk8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZXBlYXRlZExvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+PC9kaXY+IDogPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlciBsb2FkZWRcIj48L2Rpdj59XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FsY3VsYXRvci10YWtlIHJlcGVhdGVkQnRuXCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZXBlYXRlZFphaW0odGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyKX0+0J/QvtC70YPRh9C40YLRjCDQtNC10L3RjNCz0Lg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTMgbWItMyBhdmFpbGFibGVEYXlcIiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMuZGF5VmFsID09PTMwID8gJ2Jsb2NrJzogJ25vbmUnIH19PtCSINC00LDQvdC90YvQuSDQvNC+0LzQtdC90YIg0JLQsNC8INC00L7RgdGC0YPQv9C10L0g0YHRgNC+0Log0LzQtdC20LTRgyAxNSDQuCAzMCDQtNC90Y/QvNC4PC9oNT5cclxuICAgICAgICAgICA8QXBwTGluayBocmVmPVwiL2dldF9tb25leVwiPiA8YnV0dG9uIGNsYXNzTmFtZT1cInRha2VidG4gY2FsY3VsYXRvci10YWtlXCIgb25DbGljaz17dGhpcy5vcGVufT7Qn9C+0LvRg9GH0LjRgtGMINC00LXQvdGM0LPQuDwvYnV0dG9uPjwvQXBwTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0b3ItaW5mbyBjb2wtbWQtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0KHRg9C80LzQsCDQvdCwINGA0YPQutC4ICjRgtCzKSA8YiBpZD1cInN1bW1hXCI+e3RoaXMucHJvcHMubW9uZXlWYWx9PC9iPjwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBcIj7QodGA0L7QuiAo0LTQvdC10LkpIDxiIGlkPVwiZG5laVwiPnt0aGlzLnByb3BzLmRheVZhbH08L2I+PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPtCaINCy0L7Qt9Cy0YDQsNGC0YMgPGIgY2xhc3NOYW1lPVwidm96dnJhdFwiPnt2b3p2cmF0fTwvYj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaGVhZC1wXCI+0JLQvtC30YDQsNGJ0LDQtdGC0LUg0LIg0YLQvtC8INGH0LjRgdC70LU6PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWluZm8tLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPtCe0YHQvdC+0LLQvdC+0Lkg0LTQvtC70LM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHJlZCBjZW50ZXItbGluZVwiPnt2b3p2cmF0fSA8L3A+PGIgaWQ9XCJvc25vdm5vaS1kb2xnXCI+ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyB7b3Nub3Zub2lEb2xnfSDRgtCzPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPtCh0YLRgNCw0YXQvtCy0LDQvdC40LUgPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHJlZCBjZW50ZXItbGluZVwiPntzdHJhaG92YW5pZSoyfSA8L3A+PGIgaWQ9XCJzdHJcIj4mbmJzcDsgJm5ic3A7IHtzdHJhaG92YW5pZSB9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0JLQvtC30L3QsNCz0YDQsNC20LTQtdC90LjQtTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3Zvem5vZ3JhemhkZW5pZSoyfSA8L3A+PGIgaWQ9XCJ2b3puXCI+Jm5ic3A7ICZuYnNwOyB7dm96bm9ncmF6aGRlbmllfSDRgtCzPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xyXG5leHBvcnQgZGVmYXVsdCAoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9ncmVzc0JhcikpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9