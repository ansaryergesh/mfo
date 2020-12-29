webpackHotUpdate_N_E("pages/index",{

/***/ "./components/shared/ProgressBar.js":
/*!******************************************!*\
  !*** ./components/shared/ProgressBar.js ***!
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










var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\shared\\ProgressBar.js",
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
              max: "135000",
              step: "1000",
              value: this.state.money,
              onChange: this.handleChangeMoney
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "text mt-3 d-flex justify-content-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "10 000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "135 000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
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
              lineNumber: 187,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
              className: "text mt-3 d-flex justify-content-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "15 \u0434\u043D\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                children: "30 \u0434\u043D\u0435\u0439"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this), this.state.repeatedLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "modelLoader"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 43
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "modelLoader loaded"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 81
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
            className: "calculator-take repeatedBtn",
            onClick: function onClick() {
              return _this4.handleRepeatedZaim(_this4.props.userReducer.user);
            },
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("h5", {
            className: "text-center mt-3 mb-3 availableDay",
            style: {
              display: this.props.dayVal === 30 ? 'block' : 'none'
            },
            children: "\u0412 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0412\u0430\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0441\u0440\u043E\u043A \u043C\u0435\u0436\u0434\u0443 15 \u0438 30 \u0434\u043D\u044F\u043C\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(AppLink, {
            href: "/get_money",
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("button", {
              className: "takebtn calculator-take",
              onClick: this.open,
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 40
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 12
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
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
                lineNumber: 202,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center ",
              children: ["\u0421\u0440\u043E\u043A (\u0434\u043D\u0435\u0439) ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                id: "dnei",
                children: this.props.dayVal
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 55
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center ",
              children: ["\u041A \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                className: "vozvrat",
                children: vozvrat
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 48
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
            className: "secondary-info",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
              className: "text-center head-p",
              children: "\u0412\u043E\u0437\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
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
                  lineNumber: 210,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [vozvrat, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "osnovnoi-dolg",
                  children: [" \xA0 \xA0 ", osnovnoiDolg, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 79
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435 "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [strahovanie * 2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 9
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "str",
                  children: ["\xA0 \xA0 ", strahovanie, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 75
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
                className: "box",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "text-center",
                  children: "\u0412\u043E\u0437\u043D\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043D\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("p", {
                  className: "d-inline-block red center-line",
                  children: [voznograzhdenie * 2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("b", {
                  id: "vozn",
                  children: ["\xA0 \xA0 ", voznograzhdenie, " \u0442\u0433"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 89
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvUHJvZ3Jlc3NCYXIuanMiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjb29raWUiLCJnZXQiLCJBcHBMaW5rIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJocmVmIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb25leVZhbCIsImRheVZhbCIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJjaGFuZ2luZ0RheSIsImRheSIsIlByb2dyZXNzQmFyIiwicHJvcHMiLCJkYXlNb3JlVGhpcnR5Iiwic2hvd01lc3NhZ2UiLCJyZXBlYXRlZExvYWRpbmciLCJoYW5kbGVDaGFuZ2VNb25leSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VEYXkiLCJoYW5kbGVGb2N1cyIsImNsb3NlIiwib3BlbiIsImhhbmRsZVJlcGVhdGVkWmFpbSIsInNldFN0YXRlIiwidmFsdWVzIiwiVUZfMiIsIlVGXzMiLCJwb3N0IiwiVUYyIiwiVUYzIiwiVUY0IiwiVUZfNCIsIlVGNSIsIlVGXzUiLCJVRjYiLCJVRl82IiwiVUY3IiwiVUZfNyIsIlVGOCIsIlVGXzgiLCJVRjkiLCJVRl85IiwiVUYxMCIsIlVGXzEwIiwiVUYxMSIsIlVGXzExIiwiVUYxMiIsIlVGXzEyIiwiVUYxMyIsIlVGXzEzIiwiVUYxNiIsIlVGXzE2IiwiVUYxNyIsIlVGXzE3IiwiVUYxOCIsIlVGXzE4IiwiVUYxOSIsIlVGXzE5IiwiVUYyMCIsIlVGXzIwIiwiVUYyMSIsIlVGXzIxIiwiVUYyMiIsIlVGXzIyIiwiVUYyMyIsIlVGXzIzIiwiVUYyNCIsIlVGXzI0IiwiVUYyNSIsIlVGXzI1IiwiVUYyNiIsIlVGXzI2IiwiVUYyNyIsIlVGXzI3IiwiVUYyOCIsIlVGXzI4IiwiVUYyOSIsIlVGXzI5IiwiVUYzMCIsIlVGXzMwIiwiVUYzMSIsIlVGXzMxIiwiVUYzMiIsIlVGXzMyIiwiVUYzMyIsIlVGXzMzIiwiVUYzNCIsIlVGXzM0IiwiVUYzNSIsIlVGXzM1IiwiVUYzNiIsIlVGXzM2IiwiVUYzNyIsIlVGXzM3IiwiVUYzOCIsIlVGXzM4IiwiVUYzOSIsIlVGXzM5Iiwic2xpY2UiLCJVRjQwIiwiVUZfNDAiLCJVRjQxIiwiVUZfNDEiLCJVRjQyIiwiVUZfNDIiLCJVRjQzIiwiVUZfNDMiLCJVRjQ0IiwiVUZfNDQiLCJVRjQ1IiwiVUZfNDUiLCJVRjQ2IiwiVUZfNDYiLCJVRjQ3IiwiVUZfNDciLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJwdXNoIiwiZXJyb3JzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInNob3dNb2RhbCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzcGFjZU51bSIsInZhbCIsInNwbGl0SW5kZXgiLCJsZW5ndGgiLCJ2YWx1YnN0ciIsInN1YnN0ciIsInJlcGxhY2UiLCJ2b3p2cmF0IiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJvc25vdm5vaURvbGciLCJwYXJzZUludCIsInN0cmFob3ZhbmllIiwidm96bm9ncmF6aGRlbmllIiwidXNlciIsImRpc3BsYXkiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDZDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsR0FBZ0M7QUFBQyxvQ0FBMkJDLGlEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLENBQTNCO0FBQUQsQ0FBaEM7QUFDQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLE1BQVlDLFNBQVosUUFBWUEsU0FBWjtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBTUU7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx3Q0FDRTtBQUFHLDJCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVSO0FBQUcsMkJBQVMsRUFBQyxnQ0FBYjtBQUFBLDZCQUErQ0UsV0FBVyxHQUFDLENBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGUSxlQUUwRDtBQUFHLG9CQUFFLEVBQUMsS0FBTjtBQUFBLDJDQUEyQkEsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUYxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsZUFVRTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHdDQUNFO0FBQUcsMkJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBRywyQkFBUyxFQUFDLGdDQUFiO0FBQUEsNkJBQStDQyxlQUFlLEdBQUMsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGLGVBRXdFO0FBQUcsb0JBQUUsRUFBQyxNQUFOO0FBQUEsMkNBQTRCQSxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRnhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUE2REg7Ozs7RUF6TXFCRywrQyxHQTJNMUI7OztBQUNnQkMsMkhBQU8sQ0FBQ3JKLGVBQUQsRUFBaUJLLGtCQUFqQixDQUFQLENBQTRDTSxXQUE1QyxDQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjRjMDAyYmY0NjdkZWQ3ODBhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtjaGFuZ2luZ01vbmV5LCBjaGFuZ2luZ0RheX0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHsnQXV0aG9yaXphdGlvbic6IGBiZWFyZXIgJHtjb29raWUuZ2V0KCd0b2tlbicpfWB9XHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmNvbnN0IEFwcExpbmsgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWZ9KSA9PlxyXG4gIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XHJcbiAgPC9MaW5rPlxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtb25leVZhbDogc3RhdGUubW9uZXlWYWwsXHJcbiAgICAgIGRheVZhbDogc3RhdGUuZGF5VmFsLFxyXG4gICAgICB1c2VyUmVkdWNlcjogc3RhdGUudXNlclJlZHVjZXJcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgY2hhbmdpbmdNb25leTogbW9uZXkgPT4geyBkaXNwYXRjaChjaGFuZ2luZ01vbmV5KG1vbmV5KSk7IH0sXHJcbiAgICBjaGFuZ2luZ0RheTogZGF5ID0+IHsgZGlzcGF0Y2goY2hhbmdpbmdEYXkoZGF5KSk7IH1cclxufSlcclxuY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBtb25leTogdGhpcy5wcm9wcy5tb25leVZhbCxcclxuICAgICAgICAgIGRheTogdGhpcy5wcm9wcy5kYXlWYWwsXHJcbiAgICAgICAgICBkYXlNb3JlVGhpcnR5OiBmYWxzZSxcclxuICAgICAgICAgIHNob3dNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgICAgIHJlcGVhdGVkTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VNb25leSA9IHRoaXMuaGFuZGxlQ2hhbmdlTW9uZXkuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZURheSA9IHRoaXMuaGFuZGxlQ2hhbmdlRGF5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVGb2N1cyA9IHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUmVwZWF0ZWRaYWltID0gdGhpcy5oYW5kbGVSZXBlYXRlZFphaW0uYmluZCh0aGlzKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01lc3NhZ2U6IGZhbHNlIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgaGFuZGxlRm9jdXMoKSB7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIGFzeW5jIGhhbmRsZVJlcGVhdGVkWmFpbSh2YWx1ZXMpIHtcclxuICAgICAgICB2YWx1ZXMuVUZfMiA9IHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICAgICAgdmFsdWVzLlVGXzMgPSB0aGlzLnByb3BzLmRheVZhbDtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgcmVwZWF0ZWRMb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhd2FpdFxyXG4gICAgICAgIC8vIGF4aW9zLnNldEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0UmVwZWF0ZWRMb2FuYCwge1xyXG4gICAgICAgICAgVUYyOnZhbHVlcy5VRl8yICxcclxuICAgICAgICAgIFVGMzp2YWx1ZXMuVUZfMyAsXHJcbiAgICAgICAgICBVRjQ6dmFsdWVzLlVGXzQgLFxyXG4gICAgICAgICAgVUY1OnZhbHVlcy5VRl81ICxcclxuICAgICAgICAgIFVGNjp2YWx1ZXMuVUZfNiAsXHJcbiAgICAgICAgICBVRjc6dmFsdWVzLlVGXzcgLFxyXG4gICAgICAgICAgVUY4OnZhbHVlcy5VRl84ICxcclxuICAgICAgICAgIFVGOTp2YWx1ZXMuVUZfOSAsXHJcbiAgICAgICAgICBVRjEwOnZhbHVlcy5VRl8xMCAsXHJcbiAgICAgICAgICBVRjExOnZhbHVlcy5VRl8xMSB8fCBcIjEyMzQ1NlwiICxcclxuICAgICAgICAgIFVGMTI6dmFsdWVzLlVGXzEyICxcclxuICAgICAgICAgIFVGMTM6dmFsdWVzLlVGXzEzICxcclxuICAgICAgICAgIFVGMTY6dmFsdWVzLlVGXzE2ICxcclxuICAgICAgICAgIFVGMTc6dmFsdWVzLlVGXzE3ICxcclxuICAgICAgICAgIFVGMTg6dmFsdWVzLlVGXzE4ICxcclxuICAgICAgICAgIFVGMTk6dmFsdWVzLlVGXzE5ICxcclxuICAgICAgICAgIFVGMjA6dmFsdWVzLlVGXzIwLFxyXG4gICAgICAgICAgVUYyMTp2YWx1ZXMuVUZfMjEsXHJcbiAgICAgICAgICBVRjIyOnZhbHVlcy5VRl8yMixcclxuICAgICAgICAgIFVGMjM6dmFsdWVzLlVGXzIzLFxyXG4gICAgICAgICAgVUYyNDp2YWx1ZXMuVUZfMjQsXHJcbiAgICAgICAgICBVRjI1OnZhbHVlcy5VRl8yNSxcclxuICAgICAgICAgIFVGMjY6dmFsdWVzLlVGXzI2LFxyXG4gICAgICAgICAgVUYyNzp2YWx1ZXMuVUZfMjcsXHJcbiAgICAgICAgICBVRjI4OnZhbHVlcy5VRl8yOCxcclxuICAgICAgICAgIFVGMjk6dmFsdWVzLlVGXzI5LFxyXG4gICAgICAgICAgVUYzMDp2YWx1ZXMuVUZfMzAsXHJcbiAgICAgICAgICBVRjMxOnZhbHVlcy5VRl8zMSxcclxuICAgICAgICAgIFVGMzI6dmFsdWVzLlVGXzMyLFxyXG4gICAgICAgICAgVUYzMzp2YWx1ZXMuVUZfMzMsXHJcbiAgICAgICAgICBVRjM0OnZhbHVlcy5VRl8zNCxcclxuICAgICAgICAgIFVGMzU6dmFsdWVzLlVGXzM1LFxyXG4gICAgICAgICAgVUYzNjp2YWx1ZXMuVUZfMzYsXHJcbiAgICAgICAgICBVRjM3OnZhbHVlcy5VRl8zNyxcclxuICAgICAgICAgIFVGMzg6dmFsdWVzLlVGXzM4LFxyXG4gICAgICAgICAgVUYzOTp2YWx1ZXMuVUZfMzkgPT0gXCIwXCIgfHwgdmFsdWVzLlVGXzM5ID09PSBudWxsID8gMCA6ICB2YWx1ZXMuVUZfMzkuc2xpY2UoMSwgLTEpICxcclxuICAgICAgICAgIFVGNDA6dmFsdWVzLlVGXzQwID09IFwiMFwiIHx8IHZhbHVlcy5VRl80MCA9PT0gbnVsbCA/IDAgOiAgdmFsdWVzLlVGXzQwLnNsaWNlKDEsIC0xKSxcclxuICAgICAgICAgIFVGNDE6dmFsdWVzLlVGXzQxID09IFwiMFwiIHx8IHZhbHVlcy5VRl80MSA9PT0gbnVsbCA/IDAgOiAgdmFsdWVzLlVGXzQxLnNsaWNlKDEsIC0xKSxcclxuICAgICAgICAgIFVGNDI6dmFsdWVzLlVGXzQyLFxyXG4gICAgICAgICAgVUY0Mzp2YWx1ZXMuVUZfNDMsXHJcbiAgICAgICAgICBVRjQ0OnZhbHVlcy5VRl80NCxcclxuICAgICAgICAgIFVGNDU6dmFsdWVzLlVGXzQ1LFxyXG4gICAgICAgICAgVUY0Njp2YWx1ZXMuVUZfNDYsXHJcbiAgICAgICAgICBVRjQ3OnZhbHVlcy5VRl80N1xyXG5cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7Y29va2llLmdldCgndG9rZW4nKX1gLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgICAgcmVwZWF0ZWRMb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQl9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90L5gLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PntcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9sb2FucycpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBgJHtyZXNwb25zZS5lcnJvcnMgfHwgJ9CjINCy0LDRgSDQsNC90LrQtdGC0LAg0LfQsNC/0L7Qu9C90LXQvdCwINC90LUg0LTQviDQutC+0L3RhtCwLiDQndCw0L/QuNGI0LjRgtC1INC90LAgV2hhdHNBcHAg0LjQu9C4INC30LLQvtC90LjRgtC1INC90LAg0L3QvtC80LXRgCArNyA3MjcgMjUwIDE1IDAwJ31gLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgb3BlbigpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01vZGFsOiB0cnVlIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBoYW5kbGVDaGFuZ2VNb25leShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbW9uZXk6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2luZ01vbmV5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgaGFuZGxlQ2hhbmdlRGF5KGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBkYXk6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgfSk7XHJcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlPjMwKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nRGF5KDMwKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICB0aGlzLnByb3BzLmNoYW5naW5nRGF5KGV2ZW50LnRhcmdldC52YWx1ZSk7fVxyXG5cclxuICAgICAgLy8gdGhpcy5wcm9wcy5jaGFuZ2luZ0RheShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpICB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VOdW0gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBzcGxpdEluZGV4ID0gKHZhbC5sZW5ndGggKyAyKSAlIDMgKyAxO1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwudmFsdWJzdHIoMCwgc3BsaXRJbmRleCkgKyB2YWwuc3Vic3RyKHNwbGl0SW5kZXgpLnJlcGxhY2UoL1xcZFxcZFxcZC9nLCAnICQmJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB2b3p2cmF0ID0gTWF0aC5yb3VuZChNYXRoLmZsb29yKHRoaXMucHJvcHMubW9uZXlWYWwqKDErKHRoaXMucHJvcHMuZGF5VmFsLzEwMCkqMikvMTAwKSoxMDApO1xyXG4gICAgICAgIGNvbnN0IG9zbm92bm9pRG9sZyA9IHBhcnNlSW50KHRoaXMucHJvcHMubW9uZXlWYWwsMTApK3BhcnNlSW50KHRoaXMucHJvcHMubW9uZXlWYWwqdGhpcy5wcm9wcy5kYXlWYWwvMTAwLDEwKS8xMDAqMTAwO1xyXG4gICAgICAgIC8vIGNvbnN0IG9zbm92bm9pRG9sZyA9IE1hdGgucm91bmQoTWF0aC5mbG9vcigodGhpcy5wcm9wcy5tb25leVZhbCoxLjE1KS8xMDApKjEwMCk7XHJcbiAgICAgICAgY29uc3Qgc3RyYWhvdmFuaWUgPSBvc25vdm5vaURvbGctIHRoaXMucHJvcHMubW9uZXlWYWw7XHJcbiAgICAgICAgY29uc3Qgdm96bm9ncmF6aGRlbmllID0gb3Nub3Zub2lEb2xnIC0gdGhpcy5wcm9wcy5tb25leVZhbDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGN1bGF0b3ItYmFuZCByb3cgXCIgb25DbGljaz17dGhpcy5oYW5kbGVGb2N1c30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhcnMgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25leVwiIGNsYXNzTmFtZT1cIm1vbmV5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm1vbmV5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTM1MDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzdGVwPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5tb25leX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VNb25leX1cclxuXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0IG10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+MTAgMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPjEzNSAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkYXlcIiBjbGFzc05hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPXsxNX0gbWF4PXszMH0gc3RlcD17MX0gaWQ9XCJkYXktaW5wdXRcIiBjbGFzc05hbWU9XCJyYW5nZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmRheX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlRGF5fSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dCBtdC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPHA+MTUg0LTQvdC10Lk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4zMCDQtNC90LXQuTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlcGVhdGVkTG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pn1cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLXRha2UgcmVwZWF0ZWRCdG5cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlcGVhdGVkWmFpbSh0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIpfT7Qn9C+0LvRg9GH0LjRgtGMINC00LXQvdGM0LPQuDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMyBtYi0zIGF2YWlsYWJsZURheVwiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5wcm9wcy5kYXlWYWwgPT09MzAgPyAnYmxvY2snOiAnbm9uZScgfX0+0JIg0LTQsNC90L3Ri9C5INC80L7QvNC10L3RgiDQktCw0Lwg0LTQvtGB0YLRg9C/0LXQvSDRgdGA0L7QuiDQvNC10LbQtNGDIDE1INC4IDMwINC00L3Rj9C80Lg8L2g1PlxyXG4gICAgICAgICAgIDxBcHBMaW5rIGhyZWY9XCIvZ2V0X21vbmV5XCI+IDxidXR0b24gY2xhc3NOYW1lPVwidGFrZWJ0biBjYWxjdWxhdG9yLXRha2VcIiBvbkNsaWNrPXt0aGlzLm9wZW59PtCf0L7Qu9GD0YfQuNGC0Ywg0LTQtdC90YzQs9C4PC9idXR0b24+PC9BcHBMaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvci1pbmZvIGNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QodGD0LzQvNCwINC90LAg0YDRg9C60LggKNGC0LMpIDxiIGlkPVwic3VtbWFcIj57dGhpcy5wcm9wcy5tb25leVZhbH08L2I+PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPtCh0YDQvtC6ICjQtNC90LXQuSkgPGIgaWQ9XCJkbmVpXCI+e3RoaXMucHJvcHMuZGF5VmFsfTwvYj48L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+0Jog0LLQvtC30LLRgNCw0YLRgyA8YiBjbGFzc05hbWU9XCJ2b3p2cmF0XCI+e3ZvenZyYXR9PC9iPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vjb25kYXJ5LWluZm9cIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBoZWFkLXBcIj7QktC+0LfRgNCw0YnQsNC10YLQtSDQsiDRgtC+0Lwg0YfQuNGB0LvQtTo8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWNvbmRhcnktaW5mby0tdGV4dHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0J7RgdC90L7QstC90L7QuSDQtNC+0LvQszwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3ZvenZyYXR9IDwvcD48YiBpZD1cIm9zbm92bm9pLWRvbGdcIj4gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7IHtvc25vdm5vaURvbGd9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+0KHRgtGA0LDRhdC+0LLQsNC90LjQtSA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgcmVkIGNlbnRlci1saW5lXCI+e3N0cmFob3ZhbmllKjJ9IDwvcD48YiBpZD1cInN0clwiPiZuYnNwOyAmbmJzcDsge3N0cmFob3ZhbmllIH0g0YLQszwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj7QktC+0LfQvdCw0LPRgNCw0LbQtNC10L3QuNC1PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayByZWQgY2VudGVyLWxpbmVcIj57dm96bm9ncmF6aGRlbmllKjJ9IDwvcD48YiBpZD1cInZvem5cIj4mbmJzcDsgJm5ic3A7IHt2b3pub2dyYXpoZGVuaWV9INGC0LM8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XHJcbmV4cG9ydCBkZWZhdWx0IChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKFByb2dyZXNzQmFyKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=