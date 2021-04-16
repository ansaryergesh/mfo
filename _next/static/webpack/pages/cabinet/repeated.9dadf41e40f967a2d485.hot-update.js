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
                this.setState({
                  repeatedLoading: true
                });
                _context.next = 5;
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
                    UF21: values.UF_21 || 'Частный дом',
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
                    UF39: values.UF_39 == "0" || values.UF_39 === null ? 0 : values.UF_39.slice(1, -1),
                    UF40: values.UF_40 == "0" || values.UF_40 === null ? 0 : values.UF_40.slice(1, -1),
                    UF41: values.UF_41 == "0" || values.UF_41 === null ? 0 : values.UF_41.slice(1, -1),
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
                    console.log(response);

                    _this3.setState({
                      repeatedLoading: false
                    });

                    if (response.data.success === true) {
                      sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Успешно!", "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E", "success").then(function () {
                        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/cabinet/loans');
                      });
                    } else {
                      sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(response.errors || 'У вас анкета заполнена не до конца. Напишите на WhatsApp или звоните на номер +7 727 250 15 00'), "error").then(function () {
                        next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/cabinet/loans');
                      });
                    }
                  })["catch"](function (error) {
                    console.log(error.message);
                  })
                );

              case 5:
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
      var osnovnoiDolg = parseInt(this.props.moneyVal, 10) + parseInt(this.props.moneyVal * this.props.dayVal / 100, 10) / 100 * 100; // const osnovnoiDolg = Math.round(Math.floor((this.props.moneyVal*1.15)/100)*100);

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
              max: "145000",
              step: "1000",
              value: this.state.money,
              onChange: this.handleChangeMoney
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "text mt-3 d-flex justify-content-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "10 000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "145 000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
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
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "text mt-3 d-flex justify-content-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "15 \u0434\u043D\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "30 \u0434\u043D\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, this), this.state.repeatedLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 43
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 81
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            className: "calculator-take repeatedBtn",
            onClick: function onClick() {
              return _this4.handleRepeatedZaim(_this4.props.userReducer.user);
            },
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
            className: "text-center mt-3 mb-3 availableDay",
            style: {
              display: this.props.dayVal === 30 ? 'block' : 'none'
            },
            children: "\u0412 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0412\u0430\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0441\u0440\u043E\u043A \u043C\u0435\u0436\u0434\u0443 15 \u0438 30 \u0434\u043D\u044F\u043C\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this), this.props.pathname === '/cabinet/continue' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h4", {
            className: "mt-4",
            children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0438 \u0441\u0440\u043E\u043A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 58
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(AppLink, {
            href: "/get_money",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              className: "takebtn calculator-take",
              onClick: this.open,
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 136
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 108
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
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
                lineNumber: 204,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center ",
              children: ["\u0421\u0440\u043E\u043A (\u0434\u043D\u0435\u0439) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                id: "dnei",
                children: this.props.dayVal
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center ",
              children: ["\u041A \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                className: "vozvrat",
                children: vozvrat
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 48
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "secondary-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center head-p",
              children: "\u0412\u043E\u0437\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
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
                  lineNumber: 212,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [vozvrat, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "osnovnoi-dolg",
                  children: [" \xA0 \xA0 ", osnovnoiDolg, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 213,
                  columnNumber: 79
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [strahovanie * 2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "str",
                  children: ["\xA0 \xA0 ", strahovanie, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 75
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u0412\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [voznograzhdenie * 2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "vozn",
                  children: ["\xA0 \xA0 ", voznograzhdenie, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 89
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjb29raWUiLCJnZXQiLCJBcHBMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJocmVmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJjaGFuZ2luZ0RheSIsImRheSIsIlByb2dyZXNzQmFyIiwicHJvcHMiLCJkYXlNb3JlVGhpcnR5Iiwic2hvd01lc3NhZ2UiLCJyZXBlYXRlZExvYWRpbmciLCJoYW5kbGVDaGFuZ2VNb25leSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VEYXkiLCJoYW5kbGVGb2N1cyIsImNsb3NlIiwib3BlbiIsImhhbmRsZVJlcGVhdGVkWmFpbSIsInNldFN0YXRlIiwidmFsdWVzIiwiVUZfMiIsIlVGXzMiLCJwb3N0IiwiVUYyIiwiVUYzIiwiVUY0IiwiVUZfNCIsIlVGNSIsIlVGXzUiLCJVRjYiLCJVRl82IiwiVUY3IiwiVUZfNyIsIlVGOCIsIlVGXzgiLCJVRjkiLCJVRl85IiwiVUYxMCIsIlVGXzEwIiwiVUYxMSIsIlVGXzExIiwiVUYxMiIsIlVGXzEyIiwiVUYxMyIsIlVGXzEzIiwiVUYxNiIsIlVGXzE2IiwiVUYxNyIsIlVGXzE3IiwiVUYxOCIsIlVGXzE4IiwiVUYxOSIsIlVGXzE5IiwiVUYyMCIsIlVGXzIwIiwiVUYyMSIsIlVGXzIxIiwiVUYyMiIsIlVGXzIyIiwiVUYyMyIsIlVGXzIzIiwiVUYyNCIsIlVGXzI0IiwiVUYyNSIsIlVGXzI1IiwiVUYyNiIsIlVGXzI2IiwiVUYyNyIsIlVGXzI3IiwiVUYyOCIsIlVGXzI4IiwiVUYyOSIsIlVGXzI5IiwiVUYzMCIsIlVGXzMwIiwiVUYzMSIsIlVGXzMxIiwiVUYzMiIsIlVGXzMyIiwiVUYzMyIsIlVGXzMzIiwiVUYzNCIsIlVGXzM0IiwiVUYzNSIsIlVGXzM1IiwiVUYzNiIsIlVGXzM2IiwiVUYzNyIsIlVGXzM3IiwiVUYzOCIsIlVGXzM4IiwiVUYzOSIsIlVGXzM5Iiwic2xpY2UiLCJVRjQwIiwiVUZfNDAiLCJVRjQxIiwiVUZfNDEiLCJVRjQyIiwiVUZfNDIiLCJVRjQzIiwiVUZfNDMiLCJVRjQ0IiwiVUZfNDQiLCJVRjQ1IiwiVUZfNDUiLCJVRjQ2IiwiVUZfNDYiLCJVRjQ3IiwiVUZfNDciLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN1Y2Nlc3MiLCJzd2FsIiwiUm91dGVyIiwicHVzaCIsImVycm9ycyIsImVycm9yIiwibWVzc2FnZSIsInNob3dNb2RhbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzcGFjZU51bSIsInZhbCIsInNwbGl0SW5kZXgiLCJsZW5ndGgiLCJ2YWx1YnN0ciIsInN1YnN0ciIsInJlcGxhY2UiLCJ2b3p2cmF0IiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJvc25vdm5vaURvbGciLCJwYXJzZUludCIsInN0cmFob3ZhbmllIiwidm96bm9ncmF6aGRlbmllIiwidXNlciIsImRpc3BsYXkiLCJwYXRobmFtZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNkNBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixHQUFnQztBQUFDLG9DQUEyQkMsaURBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBM0I7QUFBRCxDQUFoQztBQUNBOztBQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBWUMsU0FBWixR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a0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTRESDs7OztFQTNNcUJJLCtDLEdBNk0xQjs7O0FBQ2dCQywySEFBTyxDQUFDdEosZUFBRCxFQUFpQkssa0JBQWpCLENBQVAsQ0FBNENNLFdBQTVDLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvcmVwZWF0ZWQuOWRhZGY0MWU0MGY5NjdhMmQ0ODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Y2hhbmdpbmdNb25leSwgY2hhbmdpbmdEYXl9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7J0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7Y29va2llLmdldCgndG9rZW4nKX1gfVxyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT5cclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbW9uZXlWYWw6IHN0YXRlLm1vbmV5VmFsLFxyXG4gICAgICBkYXlWYWw6IHN0YXRlLmRheVZhbCxcclxuICAgICAgdXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGNoYW5naW5nTW9uZXk6IG1vbmV5ID0+IHsgZGlzcGF0Y2goY2hhbmdpbmdNb25leShtb25leSkpOyB9LFxyXG4gICAgY2hhbmdpbmdEYXk6IGRheSA9PiB7IGRpc3BhdGNoKGNoYW5naW5nRGF5KGRheSkpOyB9XHJcbn0pXHJcbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgbW9uZXk6IHRoaXMucHJvcHMubW9uZXlWYWwsXHJcbiAgICAgICAgICBkYXk6IHRoaXMucHJvcHMuZGF5VmFsLFxyXG4gICAgICAgICAgZGF5TW9yZVRoaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlTW9uZXkgPSB0aGlzLmhhbmRsZUNoYW5nZU1vbmV5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VEYXkgPSB0aGlzLmhhbmRsZUNoYW5nZURheS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbSA9IHRoaXMuaGFuZGxlUmVwZWF0ZWRaYWltLmJpbmQodGhpcylcclxuICAgICAgfVxyXG5cclxuICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGhhbmRsZUZvY3VzKCkge1xyXG5cclxuICAgICAgfVxyXG4gICAgICBhc3luYyBoYW5kbGVSZXBlYXRlZFphaW0odmFsdWVzKSB7XHJcbiAgICAgICAgdmFsdWVzLlVGXzIgPSB0aGlzLnByb3BzLm1vbmV5VmFsO1xyXG4gICAgICAgIHZhbHVlcy5VRl8zID0gdGhpcy5wcm9wcy5kYXlWYWw7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgIHJlcGVhdGVkTG9hZGluZzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXdhaXRcclxuICAgICAgICAvLyBheGlvcy5zZXRIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2dldFJlcGVhdGVkTG9hbmAsIHtcclxuICAgICAgICAgIFVGMjp2YWx1ZXMuVUZfMiAsXHJcbiAgICAgICAgICBVRjM6dmFsdWVzLlVGXzMgLFxyXG4gICAgICAgICAgVUY0OnZhbHVlcy5VRl80ICxcclxuICAgICAgICAgIFVGNTp2YWx1ZXMuVUZfNSAsXHJcbiAgICAgICAgICBVRjY6dmFsdWVzLlVGXzYgLFxyXG4gICAgICAgICAgVUY3OnZhbHVlcy5VRl83ICxcclxuICAgICAgICAgIFVGODp2YWx1ZXMuVUZfOCAsXHJcbiAgICAgICAgICBVRjk6dmFsdWVzLlVGXzkgLFxyXG4gICAgICAgICAgVUYxMDp2YWx1ZXMuVUZfMTAgLFxyXG4gICAgICAgICAgVUYxMTp2YWx1ZXMuVUZfMTEgfHwgXCIxMjM0NTZcIiAsXHJcbiAgICAgICAgICBVRjEyOnZhbHVlcy5VRl8xMiAsXHJcbiAgICAgICAgICBVRjEzOnZhbHVlcy5VRl8xMyAsXHJcbiAgICAgICAgICBVRjE2OnZhbHVlcy5VRl8xNiAsXHJcbiAgICAgICAgICBVRjE3OnZhbHVlcy5VRl8xNyAsXHJcbiAgICAgICAgICBVRjE4OnZhbHVlcy5VRl8xOCAsXHJcbiAgICAgICAgICBVRjE5OnZhbHVlcy5VRl8xOSAsXHJcbiAgICAgICAgICBVRjIwOnZhbHVlcy5VRl8yMCxcclxuICAgICAgICAgIFVGMjE6dmFsdWVzLlVGXzIxIHx8ICfQp9Cw0YHRgtC90YvQuSDQtNC+0LwnLFxyXG4gICAgICAgICAgVUYyMjp2YWx1ZXMuVUZfMjIsXHJcbiAgICAgICAgICBVRjIzOnZhbHVlcy5VRl8yMyxcclxuICAgICAgICAgIFVGMjQ6dmFsdWVzLlVGXzI0LFxyXG4gICAgICAgICAgVUYyNTp2YWx1ZXMuVUZfMjUsXHJcbiAgICAgICAgICBVRjI2OnZhbHVlcy5VRl8yNixcclxuICAgICAgICAgIFVGMjc6dmFsdWVzLlVGXzI3LFxyXG4gICAgICAgICAgVUYyODp2YWx1ZXMuVUZfMjgsXHJcbiAgICAgICAgICBVRjI5OnZhbHVlcy5VRl8yOSxcclxuICAgICAgICAgIFVGMzA6dmFsdWVzLlVGXzMwLFxyXG4gICAgICAgICAgVUYzMTp2YWx1ZXMuVUZfMzEsXHJcbiAgICAgICAgICBVRjMyOnZhbHVlcy5VRl8zMixcclxuICAgICAgICAgIFVGMzM6dmFsdWVzLlVGXzMzLFxyXG4gICAgICAgICAgVUYzNDp2YWx1ZXMuVUZfMzQsXHJcbiAgICAgICAgICBVRjM1OnZhbHVlcy5VRl8zNSxcclxuICAgICAgICAgIFVGMzY6dmFsdWVzLlVGXzM2LFxyXG4gICAgICAgICAgVUYzNzp2YWx1ZXMuVUZfMzcsXHJcbiAgICAgICAgICBVRjM4OnZhbHVlcy5VRl8zOCxcclxuICAgICAgICAgIFVGMzk6dmFsdWVzLlVGXzM5ID09IFwiMFwiIHx8IHZhbHVlcy5VRl8zOSA9PT0gbnVsbCA/IDAgOiAgdmFsdWVzLlVGXzM5LnNsaWNlKDEsIC0xKSAsXHJcbiAgICAgICAgICBVRjQwOnZhbHVlcy5VRl80MCA9PSBcIjBcIiB8fCB2YWx1ZXMuVUZfNDAgPT09IG51bGwgPyAwIDogIHZhbHVlcy5VRl80MC5zbGljZSgxLCAtMSksXHJcbiAgICAgICAgICBVRjQxOnZhbHVlcy5VRl80MSA9PSBcIjBcIiB8fCB2YWx1ZXMuVUZfNDEgPT09IG51bGwgPyAwIDogIHZhbHVlcy5VRl80MS5zbGljZSgxLCAtMSksXHJcbiAgICAgICAgICBVRjQyOnZhbHVlcy5VRl80MixcclxuICAgICAgICAgIFVGNDM6dmFsdWVzLlVGXzQzLFxyXG4gICAgICAgICAgVUY0NDp2YWx1ZXMuVUZfNDQsXHJcbiAgICAgICAgICBVRjQ1OnZhbHVlcy5VRl80NSxcclxuICAgICAgICAgIFVGNDY6dmFsdWVzLlVGXzQ2LFxyXG4gICAgICAgICAgVUY0Nzp2YWx1ZXMuVUZfNDdcclxuXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YCxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCX0LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QvmAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+e1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L2xvYW5zJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGAke3Jlc3BvbnNlLmVycm9ycyB8fCAn0KMg0LLQsNGBINCw0L3QutC10YLQsCDQt9Cw0L/QvtC70L3QtdC90LAg0L3QtSDQtNC+INC60L7QvdGG0LAuINCd0LDQv9C40YjQuNGC0LUg0L3QsCBXaGF0c0FwcCDQuNC70Lgg0LfQstC+0L3QuNGC0LUg0L3QsCDQvdC+0LzQtdGAICs3IDcyNyAyNTAgMTUgMDAnfWAsIFwiZXJyb3JcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvbG9hbnMnKVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBoYW5kbGVDaGFuZ2VNb25leShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbW9uZXk6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2luZ01vbmV5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlQ2hhbmdlRGF5KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkYXk6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgfSk7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPjMwKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nRGF5KDMwKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nRGF5KGV2ZW50LnRhcmdldC52YWx1ZSk7fVxyXG5cclxuICAgICAgLy8gdGhpcy5wcm9wcy5jaGFuZ2luZ0RheShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpICB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VOdW0gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzcGxpdEluZGV4ID0gKHZhbC5sZW5ndGggKyAyKSAlIDMgKyAxO1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwudmFsdWJzdHIoMCwgc3BsaXRJbmRleCkgKyB2YWwuc3Vic3RyKHNwbGl0SW5kZXgpLnJlcGxhY2UoL1xcZFxcZFxcZC9nLCAnICQmJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2b3p2cmF0ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKHRoaXMucHJvcHMubW9uZXlWYWwqKDErKHRoaXMucHJvcHMuZGF5VmFsLzEwMCkqMikvMTAwKSoxMDApO1xyXG4gICAgICAgIGNvbnN0IG9zbm92bm9pRG9sZyA9IHBhcnNlSW50KHRoaXMucHJvcHMubW9uZXlWYWwsMTApK3BhcnNlSW50KHRoaXMucHJvcHMubW9uZXlWYWwqdGhpcy5wcm9wcy5kYXlWYWwvMTAwLDEwKS8xMDAqMTAwO1xyXG4gICAgICAgIC8vIGNvbnN0IG9zbm92bm9pRG9sZyA9IE1hdGgucm91bmQoTWF0aC5mbG9vcigodGhpcy5wcm9wcy5tb25leVZhbCoxLjE1KS8xMDApKjEwMCk7XHJcbiAgICAgICAgY29uc3Qgc3RyYWhvdmFuaWUgPSBvc25vdm5vaURvbGctIHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICAgICAgY29uc3Qgdm96bm9ncmF6aGRlbmllID0gb3Nub3Zub2lEb2xnIC0gdGhpcy5wcm9wcy5tb25leVZhbDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0b3ItYmFuZCByb3cgXCIgb25DbGljaz17dGhpcy5oYW5kbGVGb2N1c30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhcnMgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25leVwiIGNsYXNzTmFtZT1cIm1vbmV5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vbmV5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTQ1MDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5tb25leX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VNb25leX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IG10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+MTAgMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjE0NSAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkYXlcIiBjbGFzc05hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXsxNX0gbWF4PXszMH0gc3RlcD17MX0gaWQ9XCJkYXktaW5wdXRcIiBjbGFzc05hbWU9XCJyYW5nZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRheX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF5fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBtdC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPHA+MTUg0LTQvdC10Lk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4zMCDQtNC90LXQuTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlcGVhdGVkTG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pn1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLXRha2UgcmVwZWF0ZWRCdG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbSh0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIpfT7Qn9C+0LvRg9GH0LjRgtGMINC00LXQvdGM0LPQuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMyBtYi0zIGF2YWlsYWJsZURheVwiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5wcm9wcy5kYXlWYWwgPT09MzAgPyAnYmxvY2snOiAnbm9uZScgfX0+0JIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQktCw0Lwg0LTQvtGB0YLRg9C/0LXQvSDRgdGA0L7QuiDQvNC10LbQtNGDIDE1INC4IDMwINC00L3Rj9C80Lg8L2g1PlxyXG4gICAgICAgICAgIHt0aGlzLnByb3BzLnBhdGhuYW1lID09PScvY2FiaW5ldC9jb250aW51ZScgPyA8aDQgY2xhc3NOYW1lPSdtdC00Jz7QktGL0LHQtdGA0LjRgtC1INGB0YPQvNC80YMg0Lgg0YHRgNC+0Lo8L2g0PiA6IDxBcHBMaW5rIGhyZWY9XCIvZ2V0X21vbmV5XCI+IDxidXR0b24gY2xhc3NOYW1lPVwidGFrZWJ0biBjYWxjdWxhdG9yLXRha2VcIiBvbkNsaWNrPXt0aGlzLm9wZW59PtCf0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90YzQs9C4PC9idXR0b24+PC9BcHBMaW5rPn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvci1pbmZvIGNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QodGD0LzQvNCwINC90LAg0YDRg9C60LggKNGC0LMpIDxiIGlkPVwic3VtbWFcIj57dGhpcy5wcm9wcy5tb25leVZhbH08L2I+PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPtCh0YDQvtC6ICjQtNC90LXQuSkgPGIgaWQ9XCJkbmVpXCI+e3RoaXMucHJvcHMuZGF5VmFsfTwvYj48L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+0Jog0LLQvtC30LLRgNCw0YLRgyA8YiBjbGFzc05hbWU9XCJ2b3p2cmF0XCI+e3ZvenZyYXR9PC9iPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWluZm9cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoZWFkLXBcIj7QktC+0LfRgNCw0YnQsNC10YLQtSDQsiDRgtC+0Lwg0YfQuNGB0LvQtTo8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW5mby0tdGV4dHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0J7RgdC90L7QstC90L7QuSDQtNC+0LvQszwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3ZvenZyYXR9IDwvcD48YiBpZD1cIm9zbm92bm9pLWRvbGdcIj4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IHtvc25vdm5vaURvbGd9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0KHRgtGA0LDRhdC+0LLQsNC90LjQtSA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3N0cmFob3ZhbmllKjJ9IDwvcD48YiBpZD1cInN0clwiPiZuYnNwOyAmbmJzcDsge3N0cmFob3ZhbmllIH0g0YLQszwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QktC+0LfQvdCw0LPRgNCw0LbQtNC10L3QuNC1PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayByZWQgY2VudGVyLWxpbmVcIj57dm96bm9ncmF6aGRlbmllKjJ9IDwvcD48YiBpZD1cInZvem5cIj4mbmJzcDsgJm5ic3A7IHt2b3pub2dyYXpoZGVuaWV9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2dyZXNzQmFyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=