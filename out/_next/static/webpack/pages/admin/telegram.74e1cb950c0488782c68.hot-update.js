webpackHotUpdate_N_E("pages/admin/telegram",{

/***/ "./pages/admin/telegram.js":
/*!*********************************!*\
  !*** ./pages/admin/telegram.js ***!
  \*********************************/
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
/* harmony import */ var _store_actions_telegram__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/telegram */ "./store/actions/telegram.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_shared_messageDetailed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/shared/messageDetailed */ "./components/shared/messageDetailed.js");
/* harmony import */ var _defaults_hello__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../defaults/hello */ "./defaults/hello.js");
/* harmony import */ var _components_admin_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/admin/Header */ "./components/admin/Header.js");
/* harmony import */ var _components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/admin/Footer */ "./components/admin/Footer.js");
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _defaults_recomAnswer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../defaults/recomAnswer */ "./defaults/recomAnswer.js");









var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\admin\\telegram.js";

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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (msgid, question, iin, id) {
      var groupText = "\n\u041E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441: ".concat(question, "%0A \n\u0418\u0418\u041D: ").concat(iin, "%0A%0A\n").concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer.split('%0A'), "%0A%0A\n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz%0A%0A\n   #\u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 ");
      var errorMessage = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B \u043D\u0430\u0448 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0431\u043E\u0442-> \u0418\u0418\u041D: ".concat(iin, "%0A%0A;\u0412\u043E\u043F\u0440\u043E\u0441: ").concat(question, "%0A #\u043E\u0448\u0438\u0431\u043A\u0430");
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
                axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=-438259555&text=".concat(groupText, "&ie=UTF-8&oe=UTF-8&parse_mode=html"));

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
        })["catch"](function (error) {
          if (error.response) {
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("https://api.money-men.kz/api/telegram/".concat(id)).then(function (response) {
              axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://api.telegram.org/bot1464143689:AAHakxNTvvBG9qpzrH8Z-lNNyEjAS2aW8-U/sendMessage?chat_id=-438259555&text=".concat(errorMessage, "&ie=UTF-8&oe=UTF-8&parse_mode=html")).then(function (res) {
                location.reload();
              });
            });
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
    value: function keypress(event, msgid, question, iin, id) {
      if (event.keyCode == 13 && event.shiftKey) {
        this.handleSubmit(msgid, question, iin, id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading=== false) {
      //     return (<div className='mb-5 container otherPages'>
      //          {this.state.answers ?  <button active className='btn btn-dark mb-3' onClick={() => this.handleAnswered()}>Получить неотвеченные</button> 
      //         :   <button active className='btn btn-dark mb-3 mr-3' onClick={() => this.handleAnswered()}>Получить отвеченные</button>}
      //         <h4 className='mb-3 text-center'>Неотвеченные вопросы</h4>
      //         <p className='text-center'>Нет вопросов</p>
      //     </div>)
      // }
      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "container  otherPages text-center",
            children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 17
          }, this)]
        }, void 0, true);
      }

      if (!this.state.answers && !this.props.answered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
            role: "main",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
              "class": "panel important",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "container otherPages",
                children: [this.state.answers ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  active: true,
                  className: "btn btn-dark mb-3",
                  onClick: function onClick() {
                    return _this2.handleAnswered();
                  },
                  children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 40
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                  active: true,
                  className: "btn btn-dark mb-3 mr-3",
                  onClick: function onClick() {
                    return _this2.handleAnswered();
                  },
                  children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 21
                }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "tlgmsg alert alert-info",
                  children: this.state.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 48
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 117
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                  className: "mb-3 text-center",
                  children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E (", this.props.answered.answered.length, ")"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
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
                            lineNumber: 171,
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
                            lineNumber: 172,
                            columnNumber: 29
                          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                            className: "card-text",
                            children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 174,
                              columnNumber: 54
                            }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 173,
                            columnNumber: 33
                          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                            children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 176,
                            columnNumber: 33
                          }, _this2)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 170,
                          columnNumber: 29
                        }, _this2)
                      }, elem.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 169,
                        columnNumber: 26
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 22
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 16
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 14
          }, this)]
        }, void 0, true);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          role: "main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
            "class": "panel important",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "container otherPages",
              children: [this.state.answers ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                active: true,
                className: "btn btn-dark mb-3",
                onClick: function onClick() {
                  return _this2.handleAnswered();
                },
                children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 40
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                active: true,
                className: "btn btn-dark mb-3 mr-3",
                onClick: function onClick() {
                  return _this2.handleAnswered();
                },
                children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 21
              }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "tlgmsg alert alert-info",
                children: this.state.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 48
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 117
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                className: "mb-3 text-center",
                children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
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
                          lineNumber: 209,
                          columnNumber: 29
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                          className: "card-text",
                          children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 211,
                            columnNumber: 54
                          }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 210,
                          columnNumber: 33
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                          children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 213,
                          columnNumber: 33
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 29
                      }, _this2)
                    }, elem.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 26
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 22
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 14
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
                isOpen: this.state.collapse,
                toggle: this.toggleCollapse(this.state.collapse),
                size: "lg",
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
                    lineNumber: 223,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 18
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 14
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, this)]
      }, void 0, true);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJhbnN3ZXJzIiwibXNnaWQiLCJxdWVzdGlvbiIsImlpbiIsImlkIiwiZ3JvdXBUZXh0IiwiaGVsbG9Vc2VyIiwic3BsaXQiLCJlcnJvck1lc3NhZ2UiLCJhbnN3ZXJUZXh0Iiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJwdXQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInByb3BzIiwiZXJyb3IiLCJyZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwiYWxlcnQiLCJwcmV2Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiaGFuZGxlU3VibWl0IiwiaXNMb2FkaW5nIiwiaGFuZGxlQW5zd2VyZWQiLCJsZW5ndGgiLCJtYXAiLCJlbGVtIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImZvcm1hdCIsIkRhdGUiLCJwYXJzZSIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkX2F0IiwibmFtZSIsInRvZ2dsZUNvbGxhcHNlIiwiZmlsdGVyIiwiZWwiLCJwYXJzZUludCIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQSxlQTRDQSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVDQTtBQUFBLHNCQURKO0FBZ0RIOzs7O0VBeE5rQjZELDRDQUFLLENBQUNDLFM7O0FBNE5kQywySEFBTyxDQUFDNUUsZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNJLFFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdGVsZWdyYW0uNzRlMWNiOTUwYzA0ODg3ODJjNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7ZmV0Y2hBbnN3ZXJlZE1zZywgZmV0Y2hOb25BbnN3ZXJlZE1zZ30gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy90ZWxlZ3JhbSdcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE1lc3NhZ2VEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkJ1xyXG5pbXBvcnQge2hlbGxvVXNlcn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaGVsbG8nXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Gb290ZXInXHJcbmltcG9ydCBkaXNhYmxlU2Nyb2xsIGZyb20gJ2Rpc2FibGUtc2Nyb2xsJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcmVjb21BbnN3ZXInO1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtub25hbnN3ZXJlZDogc3RhdGUubm9uYW5zd2VyZWQsIGFuc3dlcmVkOiBzdGF0ZS5hbnN3ZXJlZH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGZldGNoQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoQW5zd2VyZWRNc2coKSksXHJcbiAgZmV0Y2hOb25BbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hOb25BbnN3ZXJlZE1zZygpKSxcclxufSlcclxuXHJcblxyXG5jbGFzcyBUZWxlZ3JhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKTtcclxuICAgIHRoaXMucHJvcHMuZmV0Y2hBbnN3ZXJlZE1zZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjb2xsYXBzZTogXCJcIixcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgYW5zd2VyOiAnJyxcclxuICAgIGNvZGU6ICcnLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBhbnN3ZXJzOiB0cnVlLFxyXG4gIH1cclxuICBcclxuICBoYW5kbGVTdWJtaXQgPSAobXNnaWQscXVlc3Rpb24saWluLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvdXBUZXh0ID0gYFxyXG7QntGC0LLQtdGC0LjQu9C4INC90LAg0LLQvtC/0YDQvtGBOiAke3F1ZXN0aW9ufSUwQSBcclxu0JjQmNCdOiAke2lpbn0lMEElMEFcclxuJHtoZWxsb1VzZXIoKX0hJTBBXHJcbiR7dGhpcy5zdGF0ZS5hbnN3ZXIuc3BsaXQoJyUwQScpfSUwQSUwQVxyXG7QoSDRg9Cy0LDQttC10L3QuNC10LwgSS1jcmVkaXQua3olMEElMEFcclxuICAgI9C+0YLQstC10YLQuNC70LggYFxyXG5cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICBg0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0L/RgNCw0LLQuNGC0Ywg0L7RgtCy0LXRgi4g0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCx0LvQvtC60LjRgNC+0LLQsNC7INC90LDRiCDRgtC10LvQtdCz0YDQsNC8INCx0L7Rgi0+INCY0JjQnTogJHtpaW59JTBBJTBBO9CS0L7Qv9GA0L7RgTogJHtxdWVzdGlvbn0lMEEgI9C+0YjQuNCx0LrQsGBcclxuICAgIGNvbnN0IGFuc3dlclRleHQgPSBgXHJcbiR7aGVsbG9Vc2VyKCl9ISUwQVxyXG4ke3RoaXMuc3RhdGUuYW5zd2VyLnNwbGl0KCclMEEnKX0lMEElMEFcclxu0KEg0YPQstCw0LbQtdC90LjQtdC8IEktY3JlZGl0Lmt6XHJcbiAgICBgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcclxuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0NjQxNDM2ODk6QUFIYWt4TlR2dkJHOXFwenJIOFotbE5OeUVqQVMyYVc4LVUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0ke21zZ2lkfSZ0ZXh0PSR7YW5zd2VyVGV4dH0maWU9VVRGLTgmb2U9VVRGLTgmcGFyc2VfbW9kZT1odG1sYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucHV0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3RlbGVncmFtLyR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3QxNDY0MTQzNjg5OkFBSGFreE5UdnZCRzlxcHpySDhaLWxOTnlFakFTMmFXOC1VL3NlbmRNZXNzYWdlP2NoYXRfaWQ9LTQzODI1OTU1NSZ0ZXh0PSR7Z3JvdXBUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyxjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBbnN3ZXJlZE1zZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQndC1INC+0YLQv9GA0LDQstC70LXQvdC+J30pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnLCBjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0NjQxNDM2ODk6QUFIYWt4TlR2dkJHOXFwenJIOFotbE5OeUVqQVMyYVc4LVUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0tNDM4MjU5NTU1JnRleHQ9JHtlcnJvck1lc3NhZ2V9JmllPVVURi04Jm9lPVVURi04JnBhcnNlX21vZGU9aHRtbGApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5cHJlc3MoZXZlbnQsIG1zZ2lkLHF1ZXN0aW9uLGlpbiwgaWQpIHtcclxuICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiBldmVudC5zaGlmdEtleSl7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQobXNnaWQscXVlc3Rpb24saWluLGlkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1tcXHJcXG5cXHZdKy9nLCBcIlwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuc3dlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ29kZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb2RlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgc3VibWl0Q29kZSA9ICgpID0+IHtcclxuICAgICAgaWYodGhpcy5zdGF0ZS5jb2RlID09PSAnYWRtaW4xMjMnKSB7XHJcbiAgICAgICAgY29va2llLnNldCgnYm90bXNnJywnMzkxNycsIHtleHBpcmVzOiA2MH0pXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwINC60L7QtNCwJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbGxhcHNlID0gaWQgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzZSB8fCBpZCAhPT0gdGhpcy5zdGF0ZS5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2U6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBbnN3ZXJlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2PT4oe1xyXG4gICAgICAgICAgYW5zd2VyczogIXByZXYuYW5zd2Vyc1xyXG4gICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nPT09IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J21iLTUgY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgIC8vICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgOiAgIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMgbXItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgIC8vICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLPC9oND5cclxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPtCd0LXRgiDQstC+0L/RgNC+0YHQvtCyPC9wPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj4pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyICBvdGhlclBhZ2VzIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQutCwLi4uLi4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuc3dlcnMgJiYgIXRoaXMucHJvcHMuYW5zd2VyZWQuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiByb2xlPVwibWFpblwiPlxyXG4gICAgIDxzZWN0aW9uIGNsYXNzPVwicGFuZWwgaW1wb3J0YW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6ICAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMyBtci0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L3QtdC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGg+MCA/IDxkaXYgY2xhc3NOYW1lPSd0bGdtc2cgYWxlcnQgYWxlcnQtaW5mbyc+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj46IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0Ysg0LfQsCDQvdC10LTQtdC70Y4gKHt0aGlzLnByb3BzLmFuc3dlcmVkLmFuc3dlcmVkLmxlbmd0aH0pPC9oND5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYW5zd2VyZWQuYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBtdC0yIGFuc3dlcmVkQ2FyZCcga2V5PXtlbGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+0JfQsNC00LDQvdC+OiB7bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjonbnVtZXJpYycsIG1pbnV0ZTonbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKERhdGUucGFyc2UoZWxlbS5jcmVhdGVkX2F0KSkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPtCe0YLQstC10YfQtdC90L46IHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLnVwZGF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICA8bWFpbiByb2xlPVwibWFpblwiPlxyXG4gICAgIDxzZWN0aW9uIGNsYXNzPVwicGFuZWwgaW1wb3J0YW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbnN3ZXJzID8gIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOiAgIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMgbXItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlLmxlbmd0aD4wID8gPGRpdiBjbGFzc05hbWU9J3RsZ21zZyBhbGVydCBhbGVydC1pbmZvJz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PjogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QndC10L7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0YsgKHt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aH0pPC9oND5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLm1hcChlbGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBtdC0yJyBrZXk9e2VsZW0uaWR9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UoZWxlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz57bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjonbnVtZXJpYycsIG1pbnV0ZTonbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKERhdGUucGFyc2UoZWxlbS5jcmVhdGVkX2F0KSkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCY0LzRjzoge2VsZW0ubmFtZX0gPGJyPjwvYnI+0JjQmNCdOiB7ZWxlbS5paW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPtCS0L7Qv9GA0L7RgToge2VsZW0ucXVlc3Rpb259PC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8TW9kYWwgIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKHRoaXMuc3RhdGUuY29sbGFwc2UpfSAgIHNpemU9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZz17dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IHBhcnNlSW50KHRoaXMuc3RhdGUuY29sbGFwc2UpKVswXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9IHt0aGlzLnN0YXRlLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQgPSB7dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzID0ge3RoaXMua2V5cHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPSB7dGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblx0XHRcdDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvbWFpbj4gICAgICAgIFxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlbGVncmFtKSJdLCJzb3VyY2VSb290IjoiIn0=