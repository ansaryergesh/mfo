webpackHotUpdate_N_E("pages/telegram",{

/***/ "./pages/telegram.js":
/*!***************************!*\
  !*** ./pages/telegram.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/actions/telegram */ "./store/actions/telegram.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_shared_messageDetailed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/messageDetailed */ "./components/shared/messageDetailed.js");
/* harmony import */ var _defaults_hello__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../defaults/hello */ "./defaults/hello.js");
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/es/index.js");
/* harmony import */ var _defaults_utmSource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../defaults/utmSource */ "./defaults/utmSource.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_18__);








var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\telegram.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var mapStateToProps = function mapStateToProps(state) {
  return {
    nonanswered: state.nonanswered,
    answered: state.answered
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAnsweredMsg: function fetchAnsweredMsg() {
      return dispatch(Object(_store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__["fetchAnsweredMsg"])());
    },
    fetchNonAnsweredMsg: function fetchNonAnsweredMsg() {
      return dispatch(Object(_store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__["fetchNonAnsweredMsg"])());
    }
  };
};

var Telegram = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Telegram, _React$Component);

  var _super = _createSuper(Telegram);

  function Telegram() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Telegram);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      collapse: "",
      message: '',
      answer: '',
      code: '',
      loading: false,
      answers: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (msgid, id) {
      var answerText = "\n".concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer.split('%0A'), "%0A%0A\n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz\n    ");

      if (_this.state.answer) {
        // console.log(this.state.answer.length)
        _this.setState({
          loading: true
        });

        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=".concat(msgid, "&text=").concat(answerText, "&ie=UTF-8&oe=UTF-8&parse_mode=html")).then(function (response) {
          if (response.data.ok) {
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("https://api.money-men.kz/api/telegram/".concat(id)).then(function (response) {
              if (response.data.success) {
                _this.setState({
                  loading: false
                });

                _this.setState({
                  message: 'Отправлено',
                  collapse: '',
                  answer: ''
                });

                setTimeout(function () {
                  _this.setState({
                    message: ''
                  });
                }, 1500);

                _this.props.fetchNonAnsweredMsg();

                _this.props.fetchAnsweredMsg();
              }
            });
          } else {
            _this.setState({
              message: 'Не отправлено'
            });

            setTimeout(function () {
              _this.setState({
                message: '',
                collapse: '',
                answer: ''
              });
            }, 1500);
          }
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (event) {
      // const value = event.target.value.replace(/[\r\n\v]+/g, "");
      _this.setState({
        answer: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleCode", function (event) {
      _this.setState({
        code: event.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submitCode", function () {
      if (_this.state.code === 'admin123') {
        js_cookie__WEBPACK_IMPORTED_MODULE_18___default.a.set('botmsg', '3917', {
          expires: 60
        });
        location.reload();
      } else {
        alert('Ошибка кода');
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleCollapse", function (id) {
      return function () {
        if (!_this.state.collapse || id !== _this.state.collapse) {
          _this.setState({
            collapse: id
          });
        } else if (_this.state.collapse === id) {
          _this.setState({
            collapse: false
          });
        }
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleAnswered", function () {
      _this.setState(function (prev) {
        return {
          answers: !prev.answers
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Telegram, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchNonAnsweredMsg();
      this.props.fetchAnsweredMsg();
    }
  }, {
    key: "keypress",
    value: function keypress(event, msgid, id) {
      if (event.keyCode == 13 && event.shiftKey) {
        this.handleSubmit(msgid, id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (js_cookie__WEBPACK_IMPORTED_MODULE_18___default.a.get('botmsg') === undefined) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container text-center otherPages",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
            onSubmit: this.submitCode,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "password",
              value: this.state.code,
              onChange: this.handleCode
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "repeatBtn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                type: "submit",
                value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
                className: "mt-2 d-flex",
                children: " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, this);
      }

      if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading === false) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "mb-5 container otherPages",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
            className: "mb-3 text-center",
            children: "\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "text-center",
            children: "\u041D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this);
      }

      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 17
        }, this);
      }

      if (!this.state.answers && !this.props.answered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container otherPages",
          children: [this.state.answers ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            active: true,
            className: "btn btn-dark mb-3",
            onClick: function onClick() {
              return _this2.handleAnswered();
            },
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 40
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            active: true,
            className: "btn btn-dark mb-3 mr-3",
            onClick: function onClick() {
              return _this2.handleAnswered();
            },
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 21
          }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "tlgmsg alert alert-info",
            children: this.state.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 48
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 117
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
            className: "mb-3 text-center",
            children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044C\u044E (", this.props.answered.answered.length, ")"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "row",
            children: this.props.answered.answered.map(function (elem) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col-md-4",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "card mt-2 answeredCard",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                      className: "tinydate",
                      children: ["\u0417\u0430\u0434\u0430\u043D\u043E: ", new Intl.DateTimeFormat('ru', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: 'numeric'
                      }).format(new Date(Date.parse(elem.created_at)))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 29
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                      className: "tinydate",
                      children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043E: ", new Intl.DateTimeFormat('ru', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: 'numeric',
                        minute: 'numeric'
                      }).format(new Date(Date.parse(elem.updated_at)))]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 29
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                      className: "card-text",
                      children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 54
                      }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
                      columnNumber: 33
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                      children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 155,
                      columnNumber: 33
                    }, _this2)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 29
                  }, _this2)
                }, elem.id, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 26
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 22
              }, _this2);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 16
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }, this);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [this.state.answers ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          active: true,
          className: "btn btn-dark mb-3",
          onClick: function onClick() {
            return _this2.handleAnswered();
          },
          children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 40
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          active: true,
          className: "btn btn-dark mb-3 mr-3",
          onClick: function onClick() {
            return _this2.handleAnswered();
          },
          children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 21
        }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tlgmsg alert alert-info",
          children: this.state.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
          className: "mb-3 text-center",
          children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "row",
          children: this.props.nonanswered.nonanswered.map(function (elem) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "col-md-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "card mt-2",
                onClick: _this2.toggleCollapse(elem.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "tinydate",
                    children: new Intl.DateTimeFormat('ru', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                      hour: 'numeric',
                      minute: 'numeric'
                    }).format(new Date(Date.parse(elem.created_at)))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "card-text",
                    children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 54
                    }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 33
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 29
                }, _this2)
              }, elem.id, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 26
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 22
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
          isOpen: this.state.collapse,
          toggle: this.toggleCollapse(this.state.collapse),
          size: "md",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_messageDetailed__WEBPACK_IMPORTED_MODULE_13__["default"], {
              msg: this.props.nonanswered.nonanswered.filter(function (el) {
                return el.id === parseInt(_this2.state.collapse);
              })[0],
              answer: this.state.answer,
              handleChange: this.handleChange,
              handleSubmit: this.handleSubmit,
              keypress: this.keypress,
              loading: this.state.loading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, this);
    }
  }]);

  return Telegram;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Telegram));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJhbnN3ZXJzIiwibXNnaWQiLCJpZCIsImFuc3dlclRleHQiLCJoZWxsb1VzZXIiLCJzcGxpdCIsInNldFN0YXRlIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm9rIiwicHV0Iiwic3VjY2VzcyIsInNldFRpbWVvdXQiLCJwcm9wcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsInByZXYiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJoYW5kbGVTdWJtaXQiLCJnZXQiLCJ1bmRlZmluZWQiLCJzdWJtaXRDb2RlIiwiaGFuZGxlQ29kZSIsImxlbmd0aCIsImlzTG9hZGluZyIsImhhbmRsZUFuc3dlcmVkIiwibWFwIiwiZWxlbSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJmb3JtYXQiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsIm5hbWUiLCJpaW4iLCJxdWVzdGlvbiIsInRvZ2dsZUNvbGxhcHNlIiwiZmlsdGVyIiwiZWwiLCJwYXJzZUludCIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZWxlZ3JhbS44MDA0ZjMwM2Y2MDk1YmMxNDgwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtmZXRjaEFuc3dlcmVkTXNnLCBmZXRjaE5vbkFuc3dlcmVkTXNnfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3RlbGVncmFtJ1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTWVzc2FnZURldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9tZXNzYWdlRGV0YWlsZWQnXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQgeyBnZXRVcmxQYXJhbWV0ZXIgfSBmcm9tICcuLi9kZWZhdWx0cy91dG1Tb3VyY2UnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtub25hbnN3ZXJlZDogc3RhdGUubm9uYW5zd2VyZWQsIGFuc3dlcmVkOiBzdGF0ZS5hbnN3ZXJlZH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGZldGNoQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoQW5zd2VyZWRNc2coKSksXHJcbiAgZmV0Y2hOb25BbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hOb25BbnN3ZXJlZE1zZygpKSxcclxufSlcclxuIFxyXG5jbGFzcyBUZWxlZ3JhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKTtcclxuICAgIHRoaXMucHJvcHMuZmV0Y2hBbnN3ZXJlZE1zZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjb2xsYXBzZTogXCJcIixcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgYW5zd2VyOiAnJyxcclxuICAgIGNvZGU6ICcnLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBhbnN3ZXJzOiB0cnVlLFxyXG4gIH1cclxuICBcclxuICBoYW5kbGVTdWJtaXQgPSAobXNnaWQsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBhbnN3ZXJUZXh0ID0gYFxyXG4ke2hlbGxvVXNlcigpfSElMEFcclxuJHt0aGlzLnN0YXRlLmFuc3dlci5zcGxpdCgnJTBBJyl9JTBBJTBBXHJcbtChINGD0LLQsNC20LXQvdC40LXQvCBJLWNyZWRpdC5relxyXG4gICAgYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3QxNDY0MTQzNjg5OkFBSGFreE5UdnZCRzlxcHpySDhaLWxOTnlFakFTMmFXOC1VL3NlbmRNZXNzYWdlP2NoYXRfaWQ9JHttc2dpZH0mdGV4dD0ke2Fuc3dlclRleHR9JmllPVVURi04Jm9lPVVURi04JnBhcnNlX21vZGU9aHRtbGApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnB1dChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZWxlZ3JhbS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAn0J7RgtC/0YDQsNCy0LvQtdC90L4nLGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Cd0LUg0L7RgtC/0YDQsNCy0LvQtdC90L4nfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJycsIGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlwcmVzcyhldmVudCwgbXNnaWQsIGlkKSB7XHJcbiAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gMTMgJiYgZXZlbnQuc2hpZnRLZXkpe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KG1zZ2lkLGlkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1tcXHJcXG5cXHZdKy9nLCBcIlwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuc3dlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ29kZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb2RlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgc3VibWl0Q29kZSA9ICgpID0+IHtcclxuICAgICAgaWYodGhpcy5zdGF0ZS5jb2RlID09PSAnYWRtaW4xMjMnKSB7XHJcbiAgICAgICAgY29va2llLnNldCgnYm90bXNnJywnMzkxNycsIHtleHBpcmVzOiA2MH0pXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwINC60L7QtNCwJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbGxhcHNlID0gaWQgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzZSB8fCBpZCAhPT0gdGhpcy5zdGF0ZS5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2U6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBbnN3ZXJlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2PT4oe1xyXG4gICAgICAgICAgYW5zd2VyczogIXByZXYuYW5zd2Vyc1xyXG4gICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYoY29va2llLmdldCgnYm90bXNnJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRDb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyB2YWx1ZT17dGhpcy5zdGF0ZS5jb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0QnRuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIGNsYXNzTmFtZT0nbXQtMiBkLWZsZXgnPiDQntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J21iLTUgY29udGFpbmVyIG90aGVyUGFnZXMnPjxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRizwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QndC10YIg0LLQvtC/0YDQvtGB0L7QsjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciAgb3RoZXJQYWdlcyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLi4uLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuc3dlcnMgJiYgIXRoaXMucHJvcHMuYW5zd2VyZWQuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOiAgIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMgbXItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCe0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLINC30LAg0L3QtdC00LXQu9GM0Y4gKHt0aGlzLnByb3BzLmFuc3dlcmVkLmFuc3dlcmVkLmxlbmd0aH0pPC9oND5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYW5zd2VyZWQuYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBtdC0yIGFuc3dlcmVkQ2FyZCcga2V5PXtlbGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+0JfQsNC00LDQvdC+OiB7bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjonbnVtZXJpYycsIG1pbnV0ZTonbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKERhdGUucGFyc2UoZWxlbS5jcmVhdGVkX2F0KSkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPtCe0YLQstC10YfQtdC90L46IHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLnVwZGF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOiAgIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMgbXItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyAoe3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTInIGtleT17ZWxlbS5pZH0gb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZShlbGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPntuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxNb2RhbCAgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlfSB0b2dnbGU9e3RoaXMudG9nZ2xlQ29sbGFwc2UodGhpcy5zdGF0ZS5jb2xsYXBzZSl9ICAgc2l6ZT1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZURldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnPXt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jb2xsYXBzZSkpWzBdfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0ge3RoaXMuc3RhdGUuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCA9IHt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3MgPSB7dGhpcy5rZXlwcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IHt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlbGVncmFtKSJdLCJzb3VyY2VSb290IjoiIn0=