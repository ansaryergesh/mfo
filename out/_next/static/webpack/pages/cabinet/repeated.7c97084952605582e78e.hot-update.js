webpackHotUpdate_N_E("pages/cabinet/repeated",{

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
                    UF11: values.UF_11 || "123456",
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
                    UF39: values.UF_39 == "0" ? 0 : values.UF_39,
                    UF40: values.UF_40 == "0" ? 0 : values.UF_40,
                    UF41: values.UF_41 == "0" ? 0 : values.UF_41,
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
                      sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(response.errors || 'У вас анкета заполнена не до конца. Напишите на WhatsApp или звоните на номер +7 727 250 15 00'), "error");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjb29raWUiLCJnZXQiLCJBcHBMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJocmVmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJjaGFuZ2luZ0RheSIsImRheSIsIlByb2dyZXNzQmFyIiwicHJvcHMiLCJkYXlNb3JlVGhpcnR5Iiwic2hvd01lc3NhZ2UiLCJyZXBlYXRlZExvYWRpbmciLCJoYW5kbGVDaGFuZ2VNb25leSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VEYXkiLCJoYW5kbGVGb2N1cyIsImNsb3NlIiwib3BlbiIsImhhbmRsZVJlcGVhdGVkWmFpbSIsInNldFN0YXRlIiwidmFsdWVzIiwiVUZfMiIsIlVGXzMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIlVGMiIsIlVGMyIsIlVGNCIsIlVGXzQiLCJVRjUiLCJVRl81IiwiVUY2IiwiVUZfNiIsIlVGNyIsIlVGXzciLCJVRjgiLCJVRl84IiwiVUY5IiwiVUZfOSIsIlVGMTAiLCJVRl8xMCIsIlVGMTEiLCJVRl8xMSIsIlVGMTIiLCJVRl8xMiIsIlVGMTMiLCJVRl8xMyIsIlVGMTYiLCJVRl8xNiIsIlVGMTciLCJVRl8xNyIsIlVGMTgiLCJVRl8xOCIsIlVGMTkiLCJVRl8xOSIsIlVGMjAiLCJVRl8yMCIsIlVGMjEiLCJVRl8yMSIsIlVGMjIiLCJVRl8yMiIsIlVGMjMiLCJVRl8yMyIsIlVGMjQiLCJVRl8yNCIsIlVGMjUiLCJVRl8yNSIsIlVGMjYiLCJVRl8yNiIsIlVGMjciLCJVRl8yNyIsIlVGMjgiLCJVRl8yOCIsIlVGMjkiLCJVRl8yOSIsIlVGMzAiLCJVRl8zMCIsIlVGMzEiLCJVRl8zMSIsIlVGMzIiLCJVRl8zMiIsIlVGMzMiLCJVRl8zMyIsIlVGMzQiLCJVRl8zNCIsIlVGMzUiLCJVRl8zNSIsIlVGMzYiLCJVRl8zNiIsIlVGMzciLCJVRl8zNyIsIlVGMzgiLCJVRl8zOCIsIlVGMzkiLCJVRl8zOSIsIlVGNDAiLCJVRl80MCIsIlVGNDEiLCJVRl80MSIsIlVGNDIiLCJVRl80MiIsIlVGNDMiLCJVRl80MyIsIlVGNDQiLCJVRl80NCIsIlVGNDUiLCJVRl80NSIsIlVGNDYiLCJVRl80NiIsIlVGNDciLCJVRl80NyIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwic3dhbCIsIlJvdXRlciIsInB1c2giLCJlcnJvcnMiLCJlcnJvciIsIm1lc3NhZ2UiLCJzaG93TW9kYWwiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3BhY2VOdW0iLCJ2YWwiLCJzcGxpdEluZGV4IiwibGVuZ3RoIiwidmFsdWJzdHIiLCJzdWJzdHIiLCJyZXBsYWNlIiwidm96dnJhdCIsIk1hdGgiLCJyb3VuZCIsImZsb29yIiwib3Nub3Zub2lEb2xnIiwic3RyYWhvdmFuaWUiLCJ2b3pub2dyYXpoZGVuaWUiLCJ1c2VyIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNkNBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixHQUFnQztBQUFDLG9DQUEyQkMsaURBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBM0I7QUFBRCxDQUFoQztBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBWUMsU0FBWixRQUFZQSxTQUFaO0FBQUEsTUFBdUJDLElBQXZCLFFB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QTtBQUFBO0FBQUEsc0JBTkYsZUFVRTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHdDQUNFO0FBQUcsMkJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBRywyQkFBUyxFQUFDLGdDQUFiO0FBQUEsNkJBQStDQyxlQUFlLEdBQUMsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLGVBRXdFO0FBQUcsb0JBQUUsRUFBQyxNQUFOO0FBQUEsMkNBQTRCQSxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRnhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUE2REg7Ozs7RUExTXFCRywrQyxHQTRNMUI7OztBQUNnQkMsMkhBQU8sQ0FBQ25KLGVBQUQsRUFBaUJLLGtCQUFqQixDQUFQLENBQTRDTSxXQUE1QyxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L3JlcGVhdGVkLjdjOTcwODQ5NTI2MDU1ODJlNzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2NoYW5naW5nTW9uZXksIGNoYW5naW5nRGF5fSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL0FjdGlvbkNyZWF0b3JzJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0geydBdXRob3JpemF0aW9uJzogYGJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YH1cclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuY29uc3QgQXBwTGluayA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgaHJlZn0pID0+XHJcbiAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvYT5cclxuICA8L0xpbms+XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbmV5VmFsOiBzdGF0ZS5tb25leVZhbCxcclxuICAgICAgZGF5VmFsOiBzdGF0ZS5kYXlWYWwsXHJcbiAgICAgIHVzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlclxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBjaGFuZ2luZ01vbmV5OiBtb25leSA9PiB7IGRpc3BhdGNoKGNoYW5naW5nTW9uZXkobW9uZXkpKTsgfSxcclxuICAgIGNoYW5naW5nRGF5OiBkYXkgPT4geyBkaXNwYXRjaChjaGFuZ2luZ0RheShkYXkpKTsgfVxyXG59KVxyXG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIG1vbmV5OiB0aGlzLnByb3BzLm1vbmV5VmFsLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLnByb3BzLmRheVZhbCxcclxuICAgICAgICAgIGRheU1vcmVUaGlydHk6IGZhbHNlLFxyXG4gICAgICAgICAgc2hvd01lc3NhZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgcmVwZWF0ZWRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZU1vbmV5ID0gdGhpcy5oYW5kbGVDaGFuZ2VNb25leS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRGF5ID0gdGhpcy5oYW5kbGVDaGFuZ2VEYXkuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUZvY3VzID0gdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVSZXBlYXRlZFphaW0gPSB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbS5iaW5kKHRoaXMpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TWVzc2FnZTogZmFsc2UgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBoYW5kbGVGb2N1cygpIHtcclxuXHJcbiAgICAgIH1cclxuICAgICAgYXN5bmMgaGFuZGxlUmVwZWF0ZWRaYWltKHZhbHVlcykge1xyXG4gICAgICAgIHZhbHVlcy5VRl8yID0gdGhpcy5wcm9wcy5tb25leVZhbDtcclxuICAgICAgICB2YWx1ZXMuVUZfMyA9IHRoaXMucHJvcHMuZGF5VmFsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgcmVwZWF0ZWRMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdFxyXG4gICAgICAgIC8vIGF4aW9zLnNldEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0UmVwZWF0ZWRMb2FuYCwge1xyXG4gICAgICAgICAgVUYyOnZhbHVlcy5VRl8yICxcclxuICAgICAgICAgIFVGMzp2YWx1ZXMuVUZfMyAsXHJcbiAgICAgICAgICBVRjQ6dmFsdWVzLlVGXzQgLFxyXG4gICAgICAgICAgVUY1OnZhbHVlcy5VRl81ICxcclxuICAgICAgICAgIFVGNjp2YWx1ZXMuVUZfNiAsXHJcbiAgICAgICAgICBVRjc6dmFsdWVzLlVGXzcgLFxyXG4gICAgICAgICAgVUY4OnZhbHVlcy5VRl84ICxcclxuICAgICAgICAgIFVGOTp2YWx1ZXMuVUZfOSAsXHJcbiAgICAgICAgICBVRjEwOnZhbHVlcy5VRl8xMCAsXHJcbiAgICAgICAgICBVRjExOnZhbHVlcy5VRl8xMSB8fCBcIjEyMzQ1NlwiICxcclxuICAgICAgICAgIFVGMTI6dmFsdWVzLlVGXzEyICxcclxuICAgICAgICAgIFVGMTM6dmFsdWVzLlVGXzEzICxcclxuICAgICAgICAgIFVGMTY6dmFsdWVzLlVGXzE2ICxcclxuICAgICAgICAgIFVGMTc6dmFsdWVzLlVGXzE3ICxcclxuICAgICAgICAgIFVGMTg6dmFsdWVzLlVGXzE4ICxcclxuICAgICAgICAgIFVGMTk6dmFsdWVzLlVGXzE5ICxcclxuICAgICAgICAgIFVGMjA6dmFsdWVzLlVGXzIwLFxyXG4gICAgICAgICAgVUYyMTp2YWx1ZXMuVUZfMjEsXHJcbiAgICAgICAgICBVRjIyOnZhbHVlcy5VRl8yMixcclxuICAgICAgICAgIFVGMjM6dmFsdWVzLlVGXzIzLFxyXG4gICAgICAgICAgVUYyNDp2YWx1ZXMuVUZfMjQsXHJcbiAgICAgICAgICBVRjI1OnZhbHVlcy5VRl8yNSxcclxuICAgICAgICAgIFVGMjY6dmFsdWVzLlVGXzI2LFxyXG4gICAgICAgICAgVUYyNzp2YWx1ZXMuVUZfMjcsXHJcbiAgICAgICAgICBVRjI4OnZhbHVlcy5VRl8yOCxcclxuICAgICAgICAgIFVGMjk6dmFsdWVzLlVGXzI5LFxyXG4gICAgICAgICAgVUYzMDp2YWx1ZXMuVUZfMzAsXHJcbiAgICAgICAgICBVRjMxOnZhbHVlcy5VRl8zMSxcclxuICAgICAgICAgIFVGMzI6dmFsdWVzLlVGXzMyLFxyXG4gICAgICAgICAgVUYzMzp2YWx1ZXMuVUZfMzMsXHJcbiAgICAgICAgICBVRjM0OnZhbHVlcy5VRl8zNCxcclxuICAgICAgICAgIFVGMzU6dmFsdWVzLlVGXzM1LFxyXG4gICAgICAgICAgVUYzNjp2YWx1ZXMuVUZfMzYsXHJcbiAgICAgICAgICBVRjM3OnZhbHVlcy5VRl8zNyxcclxuICAgICAgICAgIFVGMzg6dmFsdWVzLlVGXzM4LFxyXG4gICAgICAgICAgVUYzOTp2YWx1ZXMuVUZfMzkgPT0gXCIwXCIgPyAwIDogdmFsdWVzLlVGXzM5ICAsXHJcbiAgICAgICAgICBVRjQwOnZhbHVlcy5VRl80MCA9PSBcIjBcIiA/IDAgOiB2YWx1ZXMuVUZfNDAgLFxyXG4gICAgICAgICAgVUY0MTp2YWx1ZXMuVUZfNDEgPT0gXCIwXCIgPyAwIDogdmFsdWVzLlVGXzQxLFxyXG4gICAgICAgICAgVUY0Mjp2YWx1ZXMuVUZfNDIsXHJcbiAgICAgICAgICBVRjQzOnZhbHVlcy5VRl80MyxcclxuICAgICAgICAgIFVGNDQ6dmFsdWVzLlVGXzQ0LFxyXG4gICAgICAgICAgVUY0NTp2YWx1ZXMuVUZfNDUsXHJcbiAgICAgICAgICBVRjQ2OnZhbHVlcy5VRl80NixcclxuICAgICAgICAgIFVGNDc6dmFsdWVzLlVGXzQ3XHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtjb29raWUuZ2V0KCd0b2tlbicpfWAsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCX0LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QvmAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+e1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L2xvYW5zJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGAke3Jlc3BvbnNlLmVycm9ycyB8fCAn0KMg0LLQsNGBINCw0L3QutC10YLQsCDQt9Cw0L/QvtC70L3QtdC90LAg0L3QtSDQtNC+INC60L7QvdGG0LAuINCd0LDQv9C40YjQuNGC0LUg0L3QsCBXaGF0c0FwcCDQuNC70Lgg0LfQstC+0L3QuNGC0LUg0L3QsCDQvdC+0LzQtdGAICs3IDcyNyAyNTAgMTUgMDAnfWAsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBvcGVuKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93TW9kYWw6IHRydWUgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGhhbmRsZUNoYW5nZU1vbmV5KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBtb25leTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nTW9uZXkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICBoYW5kbGVDaGFuZ2VEYXkoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGRheTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICB9KTtcclxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWU+MzApIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMuY2hhbmdpbmdEYXkoMzApXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdpbmdEYXkoZXZlbnQudGFyZ2V0LnZhbHVlKTt9XHJcblxyXG4gICAgICAvLyB0aGlzLnByb3BzLmNoYW5naW5nRGF5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkgIHtcclxuICAgICAgICBjb25zdCBzcGFjZU51bSA9ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNwbGl0SW5kZXggPSAodmFsLmxlbmd0aCArIDIpICUgMyArIDE7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC52YWx1YnN0cigwLCBzcGxpdEluZGV4KSArIHZhbC5zdWJzdHIoc3BsaXRJbmRleCkucmVwbGFjZSgvXFxkXFxkXFxkL2csICcgJCYnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZvenZyYXQgPSBNYXRoLnJvdW5kKE1hdGguZmxvb3IodGhpcy5wcm9wcy5tb25leVZhbCooMSsodGhpcy5wcm9wcy5kYXlWYWwvMTAwKSoyKS8xMDApKjEwMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9zbm92bm9pRG9sZyA9IE1hdGgucm91bmQoTWF0aC5mbG9vcigodGhpcy5wcm9wcy5tb25leVZhbCoxLjE1KS8xMDApKjEwMCk7XHJcbiAgICAgICAgY29uc3Qgc3RyYWhvdmFuaWUgPSBvc25vdm5vaURvbGctIHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICAgICAgY29uc3Qgdm96bm9ncmF6aGRlbmllID0gb3Nub3Zub2lEb2xnIC0gdGhpcy5wcm9wcy5tb25leVZhbDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0b3ItYmFuZCByb3cgXCIgb25DbGljaz17dGhpcy5oYW5kbGVGb2N1c30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhcnMgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25leVwiIGNsYXNzTmFtZT1cIm1vbmV5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vbmV5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTM1MDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5tb25leX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VNb25leX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IG10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+MTAgMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjEzNSAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkYXlcIiBjbGFzc05hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXsxNX0gbWF4PXszMH0gc3RlcD17MX0gaWQ9XCJkYXktaW5wdXRcIiBjbGFzc05hbWU9XCJyYW5nZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRheX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF5fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBtdC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPHA+MTUg0LTQvdC10Lk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4zMCDQtNC90LXQuTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlcGVhdGVkTG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pn1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLXRha2UgcmVwZWF0ZWRCdG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbSh0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIpfT7Qn9C+0LvRg9GH0LjRgtGMINC00LXQvdGM0LPQuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMyBtYi0zIGF2YWlsYWJsZURheVwiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5wcm9wcy5kYXlWYWwgPT09MzAgPyAnYmxvY2snOiAnbm9uZScgfX0+0JIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQktCw0Lwg0LTQvtGB0YLRg9C/0LXQvSDRgdGA0L7QuiDQvNC10LbQtNGDIDE1INC4IDMwINC00L3Rj9C80Lg8L2g1PlxyXG4gICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvZ2V0X21vbmV5XCI+IDxidXR0b24gY2xhc3NOYW1lPVwidGFrZWJ0biBjYWxjdWxhdG9yLXRha2VcIiBvbkNsaWNrPXt0aGlzLm9wZW59PtCf0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90YzQs9C4PC9idXR0b24+PC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvci1pbmZvIGNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QodGD0LzQvNCwINC90LAg0YDRg9C60LggKNGC0LMpIDxiIGlkPVwic3VtbWFcIj57dGhpcy5wcm9wcy5tb25leVZhbH08L2I+PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPtCh0YDQvtC6ICjQtNC90LXQuSkgPGIgaWQ9XCJkbmVpXCI+e3RoaXMucHJvcHMuZGF5VmFsfTwvYj48L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+0Jog0LLQvtC30LLRgNCw0YLRgyA8YiBjbGFzc05hbWU9XCJ2b3p2cmF0XCI+e3ZvenZyYXR9PC9iPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWluZm9cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoZWFkLXBcIj7QktC+0LfRgNCw0YnQsNC10YLQtSDQsiDRgtC+0Lwg0YfQuNGB0LvQtTo8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW5mby0tdGV4dHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0J7RgdC90L7QstC90L7QuSDQtNC+0LvQszwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3ZvenZyYXR9IDwvcD48YiBpZD1cIm9zbm92bm9pLWRvbGdcIj4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IHtvc25vdm5vaURvbGd9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0KHRgtGA0LDRhdC+0LLQsNC90LjQtSA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3N0cmFob3ZhbmllKjJ9IDwvcD48YiBpZD1cInN0clwiPiZuYnNwOyAmbmJzcDsge3N0cmFob3ZhbmllIH0g0YLQszwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QktC+0LfQvdCw0LPRgNCw0LbQtNC10L3QuNC1PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayByZWQgY2VudGVyLWxpbmVcIj57dm96bm9ncmF6aGRlbmllKjJ9IDwvcD48YiBpZD1cInZvem5cIj4mbmJzcDsgJm5ic3A7IHt2b3pub2dyYXpoZGVuaWV9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2dyZXNzQmFyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=