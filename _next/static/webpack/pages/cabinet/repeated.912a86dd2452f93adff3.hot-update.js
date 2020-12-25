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
                    UF39: values.UF_39 == "0" ? 0 : values.UF_39.slice(1, -1) || null,
                    UF40: values.UF_40 == "0" ? 0 : values.UF_40.slice(1, -1) || null,
                    UF41: values.UF_41 == "0" ? 0 : values.UF_41.slice(1, -1) || null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjb29raWUiLCJnZXQiLCJBcHBMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJocmVmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJjaGFuZ2luZ0RheSIsImRheSIsIlByb2dyZXNzQmFyIiwicHJvcHMiLCJkYXlNb3JlVGhpcnR5Iiwic2hvd01lc3NhZ2UiLCJyZXBlYXRlZExvYWRpbmciLCJoYW5kbGVDaGFuZ2VNb25leSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VEYXkiLCJoYW5kbGVGb2N1cyIsImNsb3NlIiwib3BlbiIsImhhbmRsZVJlcGVhdGVkWmFpbSIsInNldFN0YXRlIiwidmFsdWVzIiwiVUZfMiIsIlVGXzMiLCJjb25zb2xlIiwibG9nIiwicG9zdCIsIlVGMiIsIlVGMyIsIlVGNCIsIlVGXzQiLCJVRjUiLCJVRl81IiwiVUY2IiwiVUZfNiIsIlVGNyIsIlVGXzciLCJVRjgiLCJVRl84IiwiVUY5IiwiVUZfOSIsIlVGMTAiLCJVRl8xMCIsIlVGMTEiLCJVRl8xMSIsIlVGMTIiLCJVRl8xMiIsIlVGMTMiLCJVRl8xMyIsIlVGMTYiLCJVRl8xNiIsIlVGMTciLCJVRl8xNyIsIlVGMTgiLCJVRl8xOCIsIlVGMTkiLCJVRl8xOSIsIlVGMjAiLCJVRl8yMCIsIlVGMjEiLCJVRl8yMSIsIlVGMjIiLCJVRl8yMiIsIlVGMjMiLCJVRl8yMyIsIlVGMjQiLCJVRl8yNCIsIlVGMjUiLCJVRl8yNSIsIlVGMjYiLCJVRl8yNiIsIlVGMjciLCJVRl8yNyIsIlVGMjgiLCJVRl8yOCIsIlVGMjkiLCJVRl8yOSIsIlVGMzAiLCJVRl8zMCIsIlVGMzEiLCJVRl8zMSIsIlVGMzIiLCJVRl8zMiIsIlVGMzMiLCJVRl8zMyIsIlVGMzQiLCJVRl8zNCIsIlVGMzUiLCJVRl8zNSIsIlVGMzYiLCJVRl8zNiIsIlVGMzciLCJVRl8zNyIsIlVGMzgiLCJVRl8zOCIsIlVGMzkiLCJVRl8zOSIsInNsaWNlIiwiVUY0MCIsIlVGXzQwIiwiVUY0MSIsIlVGXzQxIiwiVUY0MiIsIlVGXzQyIiwiVUY0MyIsIlVGXzQzIiwiVUY0NCIsIlVGXzQ0IiwiVUY0NSIsIlVGXzQ1IiwiVUY0NiIsIlVGXzQ2IiwiVUY0NyIsIlVGXzQ3IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJzd2FsIiwiUm91dGVyIiwicHVzaCIsImVycm9ycyIsImVycm9yIiwibWVzc2FnZSIsInNob3dNb2RhbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzcGFjZU51bSIsInZhbCIsInNwbGl0SW5kZXgiLCJsZW5ndGgiLCJ2YWx1YnN0ciIsInN1YnN0ciIsInJlcGxhY2UiLCJ2b3p2cmF0IiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJvc25vdm5vaURvbGciLCJzdHJhaG92YW5pZSIsInZvem5vZ3JhemhkZW5pZSIsInVzZXIiLCJkaXNwbGF5IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw2Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLEdBQWdDO0FBQUMsb0NBQTJCQyxpREFBTSxDQUFDQyxHQUFQLENBQVcsT0FBWCxDQUEzQjtBQUFELENBQWhDO0FBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFFBQVlBLFNBQVo7QUFBQSxNQUF1QkMs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LGdDQUFiO0FBQUEsNkJBQStDQyxXQUFXLEdBQUMsQ0FBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZRLGVBRTBEO0FBQUcsb0JBQUUsRUFBQyxLQUFOO0FBQUEsMkNBQTJCQSxXQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRjFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQVVFO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsd0NBQ0U7QUFBRywyQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsZUFFRTtBQUFHLDJCQUFTLEVBQUMsZ0NBQWI7QUFBQSw2QkFBK0NDLGVBQWUsR0FBQyxDQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFFd0U7QUFBRyxvQkFBRSxFQUFDLE1BQU47QUFBQSwyQ0FBNEJBLGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTZESDs7OztFQTFNcUJHLCtDLEdBNE0xQjs7O0FBQ2dCQywySEFBTyxDQUFDcEosZUFBRCxFQUFpQkssa0JBQWpCLENBQVAsQ0FBNENNLFdBQTVDLENBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvcmVwZWF0ZWQuOTEyYTg2ZGQyNDUyZjkzYWRmZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Y2hhbmdpbmdNb25leSwgY2hhbmdpbmdEYXl9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvQWN0aW9uQ3JlYXRvcnMnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7J0F1dGhvcml6YXRpb24nOiBgYmVhcmVyICR7Y29va2llLmdldCgndG9rZW4nKX1gfVxyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT5cclxuICA8TGluayBocmVmPXtocmVmfT5cclxuICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9hPlxyXG4gIDwvTGluaz5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbW9uZXlWYWw6IHN0YXRlLm1vbmV5VmFsLFxyXG4gICAgICBkYXlWYWw6IHN0YXRlLmRheVZhbCxcclxuICAgICAgdXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGNoYW5naW5nTW9uZXk6IG1vbmV5ID0+IHsgZGlzcGF0Y2goY2hhbmdpbmdNb25leShtb25leSkpOyB9LFxyXG4gICAgY2hhbmdpbmdEYXk6IGRheSA9PiB7IGRpc3BhdGNoKGNoYW5naW5nRGF5KGRheSkpOyB9XHJcbn0pXHJcbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgbW9uZXk6IHRoaXMucHJvcHMubW9uZXlWYWwsXHJcbiAgICAgICAgICBkYXk6IHRoaXMucHJvcHMuZGF5VmFsLFxyXG4gICAgICAgICAgZGF5TW9yZVRoaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlTW9uZXkgPSB0aGlzLmhhbmRsZUNoYW5nZU1vbmV5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VEYXkgPSB0aGlzLmhhbmRsZUNoYW5nZURheS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbSA9IHRoaXMuaGFuZGxlUmVwZWF0ZWRaYWltLmJpbmQodGhpcylcclxuICAgICAgfVxyXG5cclxuICAgICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZXNzYWdlOiBmYWxzZSB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGhhbmRsZUZvY3VzKCkge1xyXG5cclxuICAgICAgfVxyXG4gICAgICBhc3luYyBoYW5kbGVSZXBlYXRlZFphaW0odmFsdWVzKSB7XHJcbiAgICAgICAgdmFsdWVzLlVGXzIgPSB0aGlzLnByb3BzLm1vbmV5VmFsO1xyXG4gICAgICAgIHZhbHVlcy5VRl8zID0gdGhpcy5wcm9wcy5kYXlWYWw7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG5cclxuICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICByZXBlYXRlZExvYWRpbmc6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF3YWl0XHJcbiAgICAgICAgLy8gYXhpb3Muc2V0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXRSZXBlYXRlZExvYW5gLCB7XHJcbiAgICAgICAgICBVRjI6dmFsdWVzLlVGXzIgLFxyXG4gICAgICAgICAgVUYzOnZhbHVlcy5VRl8zICxcclxuICAgICAgICAgIFVGNDp2YWx1ZXMuVUZfNCAsXHJcbiAgICAgICAgICBVRjU6dmFsdWVzLlVGXzUgLFxyXG4gICAgICAgICAgVUY2OnZhbHVlcy5VRl82ICxcclxuICAgICAgICAgIFVGNzp2YWx1ZXMuVUZfNyAsXHJcbiAgICAgICAgICBVRjg6dmFsdWVzLlVGXzggLFxyXG4gICAgICAgICAgVUY5OnZhbHVlcy5VRl85ICxcclxuICAgICAgICAgIFVGMTA6dmFsdWVzLlVGXzEwICxcclxuICAgICAgICAgIFVGMTE6dmFsdWVzLlVGXzExIHx8IFwiMTIzNDU2XCIgLFxyXG4gICAgICAgICAgVUYxMjp2YWx1ZXMuVUZfMTIgLFxyXG4gICAgICAgICAgVUYxMzp2YWx1ZXMuVUZfMTMgLFxyXG4gICAgICAgICAgVUYxNjp2YWx1ZXMuVUZfMTYgLFxyXG4gICAgICAgICAgVUYxNzp2YWx1ZXMuVUZfMTcgLFxyXG4gICAgICAgICAgVUYxODp2YWx1ZXMuVUZfMTggLFxyXG4gICAgICAgICAgVUYxOTp2YWx1ZXMuVUZfMTkgLFxyXG4gICAgICAgICAgVUYyMDp2YWx1ZXMuVUZfMjAsXHJcbiAgICAgICAgICBVRjIxOnZhbHVlcy5VRl8yMSxcclxuICAgICAgICAgIFVGMjI6dmFsdWVzLlVGXzIyLFxyXG4gICAgICAgICAgVUYyMzp2YWx1ZXMuVUZfMjMsXHJcbiAgICAgICAgICBVRjI0OnZhbHVlcy5VRl8yNCxcclxuICAgICAgICAgIFVGMjU6dmFsdWVzLlVGXzI1LFxyXG4gICAgICAgICAgVUYyNjp2YWx1ZXMuVUZfMjYsXHJcbiAgICAgICAgICBVRjI3OnZhbHVlcy5VRl8yNyxcclxuICAgICAgICAgIFVGMjg6dmFsdWVzLlVGXzI4LFxyXG4gICAgICAgICAgVUYyOTp2YWx1ZXMuVUZfMjksXHJcbiAgICAgICAgICBVRjMwOnZhbHVlcy5VRl8zMCxcclxuICAgICAgICAgIFVGMzE6dmFsdWVzLlVGXzMxLFxyXG4gICAgICAgICAgVUYzMjp2YWx1ZXMuVUZfMzIsXHJcbiAgICAgICAgICBVRjMzOnZhbHVlcy5VRl8zMyxcclxuICAgICAgICAgIFVGMzQ6dmFsdWVzLlVGXzM0LFxyXG4gICAgICAgICAgVUYzNTp2YWx1ZXMuVUZfMzUsXHJcbiAgICAgICAgICBVRjM2OnZhbHVlcy5VRl8zNixcclxuICAgICAgICAgIFVGMzc6dmFsdWVzLlVGXzM3LFxyXG4gICAgICAgICAgVUYzODp2YWx1ZXMuVUZfMzgsXHJcbiAgICAgICAgICBVRjM5OnZhbHVlcy5VRl8zOSA9PSBcIjBcIiA/IDAgOiB2YWx1ZXMuVUZfMzkuc2xpY2UoMSwgLTEpIHx8IG51bGwsXHJcbiAgICAgICAgICBVRjQwOnZhbHVlcy5VRl80MCA9PSBcIjBcIiA/IDAgOiB2YWx1ZXMuVUZfNDAuc2xpY2UoMSwgLTEpIHx8IG51bGwsXHJcbiAgICAgICAgICBVRjQxOnZhbHVlcy5VRl80MSA9PSBcIjBcIiA/IDAgOiB2YWx1ZXMuVUZfNDEuc2xpY2UoMSwgLTEpIHx8IG51bGwsXHJcbiAgICAgICAgICBVRjQyOnZhbHVlcy5VRl80MixcclxuICAgICAgICAgIFVGNDM6dmFsdWVzLlVGXzQzLFxyXG4gICAgICAgICAgVUY0NDp2YWx1ZXMuVUZfNDQsXHJcbiAgICAgICAgICBVRjQ1OnZhbHVlcy5VRl80NSxcclxuICAgICAgICAgIFVGNDY6dmFsdWVzLlVGXzQ2LFxyXG4gICAgICAgICAgVUY0Nzp2YWx1ZXMuVUZfNDdcclxuXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YCxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICAgIHJlcGVhdGVkTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdC+YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT57XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvbG9hbnMnKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgYCR7cmVzcG9uc2UuZXJyb3JzIHx8ICfQoyDQstCw0YEg0LDQvdC60LXRgtCwINC30LDQv9C+0LvQvdC10L3QsCDQvdC1INC00L4g0LrQvtC90YbQsC4g0J3QsNC/0LjRiNC40YLQtSDQvdCwIFdoYXRzQXBwINC40LvQuCDQt9Cy0L7QvdC40YLQtSDQvdCwINC90L7QvNC10YAgKzcgNzI3IDI1MCAxNSAwMCd9YCwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIG9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNb2RhbDogdHJ1ZSB9KTtcclxuICAgICAgfTtcclxuICAgICAgaGFuZGxlQ2hhbmdlTW9uZXkoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIG1vbmV5OiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2hhbmdpbmdNb25leShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGhhbmRsZUNoYW5nZURheShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZGF5OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZT4zMCkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2luZ0RheSgzMClcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2luZ0RheShldmVudC50YXJnZXQudmFsdWUpO31cclxuXHJcbiAgICAgIC8vIHRoaXMucHJvcHMuY2hhbmdpbmdEYXkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSAge1xyXG4gICAgICAgIGNvbnN0IHNwYWNlTnVtID0gKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc3BsaXRJbmRleCA9ICh2YWwubGVuZ3RoICsgMikgJSAzICsgMTtcclxuICAgICAgICAgICAgdmFsID0gdmFsLnZhbHVic3RyKDAsIHNwbGl0SW5kZXgpICsgdmFsLnN1YnN0cihzcGxpdEluZGV4KS5yZXBsYWNlKC9cXGRcXGRcXGQvZywgJyAkJicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgdm96dnJhdCA9IE1hdGgucm91bmQoTWF0aC5mbG9vcih0aGlzLnByb3BzLm1vbmV5VmFsKigxKyh0aGlzLnByb3BzLmRheVZhbC8xMDApKjIpLzEwMCkqMTAwKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3Nub3Zub2lEb2xnID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKCh0aGlzLnByb3BzLm1vbmV5VmFsKjEuMTUpLzEwMCkqMTAwKTtcclxuICAgICAgICBjb25zdCBzdHJhaG92YW5pZSA9IG9zbm92bm9pRG9sZy0gdGhpcy5wcm9wcy5tb25leVZhbDtcclxuICAgICAgICBjb25zdCB2b3pub2dyYXpoZGVuaWUgPSBvc25vdm5vaURvbGcgLSB0aGlzLnByb3BzLm1vbmV5VmFsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvci1iYW5kIHJvdyBcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUZvY3VzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFycyBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbmV5XCIgY2xhc3NOYW1lPVwibW9uZXlcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibW9uZXktaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjEwMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMzUwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt0aGlzLnN0YXRlLm1vbmV5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZU1vbmV5fVxyXG5cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgbXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4xMCAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+MTM1IDAwMDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImRheVwiIGNsYXNzTmFtZT1cImRheVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49ezE1fSBtYXg9ezMwfSBzdGVwPXsxfSBpZD1cImRheS1pbnB1dFwiIGNsYXNzTmFtZT1cInJhbmdlXCIgdmFsdWU9e3RoaXMuc3RhdGUuZGF5fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VEYXl9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IG10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4xNSDQtNC90LXQuTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjMwINC00L3QtdC5PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUucmVwZWF0ZWRMb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPjwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+PC9kaXY+fVxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhbGN1bGF0b3ItdGFrZSByZXBlYXRlZEJ0blwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVwZWF0ZWRaYWltKHRoaXMucHJvcHMudXNlclJlZHVjZXIudXNlcil9PtCf0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90YzQs9C4PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0zIG1iLTMgYXZhaWxhYmxlRGF5XCIgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnByb3BzLmRheVZhbCA9PT0zMCA/ICdibG9jayc6ICdub25lJyB9fT7QkiDQtNCw0L3QvdGL0Lkg0LzQvtC80LXQvdGCINCS0LDQvCDQtNC+0YHRgtGD0L/QtdC9INGB0YDQvtC6INC80LXQttC00YMgMTUg0LggMzAg0LTQvdGP0LzQuDwvaDU+XHJcbiAgICAgICAgICAgPEFwcExpbmsgaHJlZj1cIi9nZXRfbW9uZXlcIj4gPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWtlYnRuIGNhbGN1bGF0b3ItdGFrZVwiIG9uQ2xpY2s9e3RoaXMub3Blbn0+0J/QvtC70YPRh9C40YLRjCDQtNC10L3RjNCz0Lg8L2J1dHRvbj48L0FwcExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLWluZm8gY29sLW1kLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPtCh0YPQvNC80LAg0L3QsCDRgNGD0LrQuCAo0YLQsykgPGIgaWQ9XCJzdW1tYVwiPnt0aGlzLnByb3BzLm1vbmV5VmFsfTwvYj48L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+0KHRgNC+0LogKNC00L3QtdC5KSA8YiBpZD1cImRuZWlcIj57dGhpcy5wcm9wcy5kYXlWYWx9PC9iPjwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBcIj7QmiDQstC+0LfQstGA0LDRgtGDIDxiIGNsYXNzTmFtZT1cInZvenZyYXRcIj57dm96dnJhdH08L2I+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGhlYWQtcFwiPtCS0L7Qt9GA0LDRidCw0LXRgtC1INCyINGC0L7QvCDRh9C40YHQu9C1OjwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY29uZGFyeS1pbmZvLS10ZXh0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QntGB0L3QvtCy0L3QvtC5INC00L7Qu9CzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayByZWQgY2VudGVyLWxpbmVcIj57dm96dnJhdH0gPC9wPjxiIGlkPVwib3Nub3Zub2ktZG9sZ1wiPiAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAmbmJzcDsge29zbm92bm9pRG9sZ30g0YLQszwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QodGC0YDQsNGF0L7QstCw0L3QuNC1IDwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayByZWQgY2VudGVyLWxpbmVcIj57c3RyYWhvdmFuaWUqMn0gPC9wPjxiIGlkPVwic3RyXCI+Jm5ic3A7ICZuYnNwOyB7c3RyYWhvdmFuaWUgfSDRgtCzPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPtCS0L7Qt9C90LDQs9GA0LDQttC00LXQvdC40LU8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIHJlZCBjZW50ZXItbGluZVwiPnt2b3pub2dyYXpoZGVuaWUqMn0gPC9wPjxiIGlkPVwidm96blwiPiZuYnNwOyAmbmJzcDsge3Zvem5vZ3JhemhkZW5pZX0g0YLQszwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4vLyBleHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcclxuZXhwb3J0IGRlZmF1bHQgKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZ3Jlc3NCYXIpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==