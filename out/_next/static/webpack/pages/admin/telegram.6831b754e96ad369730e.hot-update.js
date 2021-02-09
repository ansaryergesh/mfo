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
            lineNumber: 147,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "container  otherPages text-center",
            children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 17
          }, this)]
        }, void 0, true);
      }

      if (!this.state.answers && !this.props.answered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
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
                  lineNumber: 162,
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
                  lineNumber: 164,
                  columnNumber: 21
                }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "tlgmsg alert alert-info",
                  children: this.state.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 48
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 117
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                  className: "mb-3 text-center",
                  children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E (", this.props.answered.answered.length, ")"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
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
                            lineNumber: 172,
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
                            lineNumber: 173,
                            columnNumber: 29
                          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                            className: "card-text",
                            children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 175,
                              columnNumber: 54
                            }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 174,
                            columnNumber: 33
                          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                            children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 33
                          }, _this2)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 171,
                          columnNumber: 29
                        }, _this2)
                      }, elem.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 26
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 22
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 16
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 14
          }, this)]
        }, void 0, true);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
                lineNumber: 198,
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
                lineNumber: 200,
                columnNumber: 21
              }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "tlgmsg alert alert-info",
                children: this.state.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 48
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 117
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                className: "mb-3 text-center",
                children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
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
                          lineNumber: 210,
                          columnNumber: 29
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                          className: "card-text",
                          children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 212,
                            columnNumber: 54
                          }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 33
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                          children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 214,
                          columnNumber: 33
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 29
                      }, _this2)
                    }, elem.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 26
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 22
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
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
                    lineNumber: 224,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 223,
                  columnNumber: 18
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 14
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJhbnN3ZXJzIiwibXNnaWQiLCJxdWVzdGlvbiIsImlpbiIsImlkIiwiZ3JvdXBUZXh0IiwiaGVsbG9Vc2VyIiwic3BsaXQiLCJlcnJvck1lc3NhZ2UiLCJhbnN3ZXJUZXh0Iiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJwdXQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInByb3BzIiwiZXJyb3IiLCJyZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwiYWxlcnQiLCJwcmV2Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiaGFuZGxlU3VibWl0IiwiaXNMb2FkaW5nIiwiaGFuZGxlQW5zd2VyZWQiLCJsZW5ndGgiLCJtYXAiLCJlbGVtIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImZvcm1hdCIsIkRhdGUiLCJwYXJzZSIsImNyZWF0ZWRfYXQiLCJ1cGRhdGVkX2F0IiwibmFtZSIsInRvZ2dsZUNvbGxhcHNlIiwiZmlsdGVyIiwiZWwiLCJwYXJzZUludCIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE87QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGQSxlQTRDQSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVDQTtBQUFBLHNCQURKO0FBZ0RIOzs7O0VBek5rQjZELDRDQUFLLENBQUNDLFM7O0FBNk5kQywySEFBTyxDQUFDNUUsZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNJLFFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vdGVsZWdyYW0uNjgzMWI3NTRlOTZhZDM2OTczMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7ZmV0Y2hBbnN3ZXJlZE1zZywgZmV0Y2hOb25BbnN3ZXJlZE1zZ30gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy90ZWxlZ3JhbSdcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE1lc3NhZ2VEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkJ1xyXG5pbXBvcnQge2hlbGxvVXNlcn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaGVsbG8nXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hZG1pbi9Gb290ZXInXHJcbmltcG9ydCBkaXNhYmxlU2Nyb2xsIGZyb20gJ2Rpc2FibGUtc2Nyb2xsJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcmVjb21BbnN3ZXInO1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtub25hbnN3ZXJlZDogc3RhdGUubm9uYW5zd2VyZWQsIGFuc3dlcmVkOiBzdGF0ZS5hbnN3ZXJlZH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGZldGNoQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoQW5zd2VyZWRNc2coKSksXHJcbiAgZmV0Y2hOb25BbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hOb25BbnN3ZXJlZE1zZygpKSxcclxufSlcclxuXHJcblxyXG5jbGFzcyBUZWxlZ3JhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKCk7XHJcbiAgICB0aGlzLnByb3BzLmZldGNoQW5zd2VyZWRNc2coKTtcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgY29sbGFwc2U6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICAgIGFuc3dlcjogJycsXHJcbiAgICBjb2RlOiAnJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgYW5zd2VyczogdHJ1ZSxcclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlU3VibWl0ID0gKG1zZ2lkLHF1ZXN0aW9uLGlpbiwgaWQpID0+IHtcclxuICAgIGNvbnN0IGdyb3VwVGV4dCA9IGBcclxu0J7RgtCy0LXRgtC40LvQuCDQvdCwINCy0L7Qv9GA0L7RgTogJHtxdWVzdGlvbn0lMEEgXHJcbtCY0JjQnTogJHtpaW59JTBBJTBBXHJcbiR7aGVsbG9Vc2VyKCl9ISUwQVxyXG4ke3RoaXMuc3RhdGUuYW5zd2VyLnNwbGl0KCclMEEnKX0lMEElMEFcclxu0KEg0YPQstCw0LbQtdC90LjQtdC8IEktY3JlZGl0Lmt6JTBBJTBBXHJcbiAgICPQvtGC0LLQtdGC0LjQu9C4IGBcclxuXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAgYNCd0LUg0YPQtNCw0LvQvtGB0Ywg0L7RgtC/0YDQsNCy0LjRgtGMINC+0YLQstC10YIuINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsdC70L7QutC40YDQvtCy0LDQuyDQvdCw0Ygg0YLQtdC70LXQs9GA0LDQvCDQsdC+0YItPiDQmNCY0J06ICR7aWlufSUwQSUwQTvQktC+0L/RgNC+0YE6ICR7cXVlc3Rpb259JTBBICPQvtGI0LjQsdC60LBgXHJcbiAgICBjb25zdCBhbnN3ZXJUZXh0ID0gYFxyXG4ke2hlbGxvVXNlcigpfSElMEFcclxuJHt0aGlzLnN0YXRlLmFuc3dlci5zcGxpdCgnJTBBJyl9JTBBJTBBXHJcbtChINGD0LLQsNC20LXQvdC40LXQvCBJLWNyZWRpdC5relxyXG4gICAgYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyLmxlbmd0aClcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3QxNDY0MTQzNjg5OkFBSGFreE5UdnZCRzlxcHpySDhaLWxOTnlFakFTMmFXOC1VL3NlbmRNZXNzYWdlP2NoYXRfaWQ9JHttc2dpZH0mdGV4dD0ke2Fuc3dlclRleHR9JmllPVVURi04Jm9lPVVURi04JnBhcnNlX21vZGU9aHRtbGApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnB1dChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZWxlZ3JhbS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ2NDE0MzY4OTpBQUhha3hOVHZ2Qkc5cXB6ckg4Wi1sTk55RWpBUzJhVzgtVS9zZW5kTWVzc2FnZT9jaGF0X2lkPS00MzgyNTk1NTUmdGV4dD0ke2dyb3VwVGV4dH0maWU9VVRGLTgmb2U9VVRGLTgmcGFyc2VfbW9kZT1odG1sYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQntGC0L/RgNCw0LLQu9C10L3QvicsY29sbGFwc2U6ICcnLCBhbnN3ZXI6ICcnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hOb25BbnN3ZXJlZE1zZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoQW5zd2VyZWRNc2coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAn0J3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvid9KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAnJywgY29sbGFwc2U6ICcnLCBhbnN3ZXI6ICcnfSlcclxuICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgYXhpb3MucHV0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3RlbGVncmFtLyR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3QxNDY0MTQzNjg5OkFBSGFreE5UdnZCRzlxcHpySDhaLWxOTnlFakFTMmFXOC1VL3NlbmRNZXNzYWdlP2NoYXRfaWQ9LTQzODI1OTU1NSZ0ZXh0PSR7ZXJyb3JNZXNzYWdlfSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleXByZXNzKGV2ZW50LCBtc2dpZCxxdWVzdGlvbixpaW4sIGlkKSB7XHJcbiAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gMTMgJiYgZXZlbnQuc2hpZnRLZXkpe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0KG1zZ2lkLHF1ZXN0aW9uLGlpbixpZClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAvLyBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXFxyXFxuXFx2XSsvZywgXCJcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbnN3ZXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNvZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29kZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHN1Ym1pdENvZGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuc3RhdGUuY29kZSA9PT0gJ2FkbWluMTIzJykge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoJ2JvdG1zZycsJzM5MTcnLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsCDQutC+0LTQsCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb2xsYXBzZSA9IGlkID0+ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2UgfHwgaWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlOiBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2UgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZTogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQW5zd2VyZWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldj0+KHtcclxuICAgICAgICAgIGFuc3dlcnM6ICFwcmV2LmFuc3dlcnNcclxuICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZz09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdtYi01IGNvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAvLyAgICAgICAgICB7dGhpcy5zdGF0ZS5hbnN3ZXJzID8gIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPn1cclxuICAgICAgICAvLyAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRizwvaDQ+XHJcbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QndC10YIg0LLQvtC/0YDQvtGB0L7QsjwvcD5cclxuICAgICAgICAvLyAgICAgPC9kaXY+KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciAgb3RoZXJQYWdlcyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLi4uLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5zdGF0ZS5hbnN3ZXJzICYmICF0aGlzLnByb3BzLmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIj5cclxuICAgICA8c2VjdGlvbiBjbGFzcz1cInBhbmVsIGltcG9ydGFudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbnN3ZXJzID8gIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgOiAgIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMgbXItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPn1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCe0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLINC30LAg0L3QtdC00LXQu9GOICh7dGhpcy5wcm9wcy5hbnN3ZXJlZC5hbnN3ZXJlZC5sZW5ndGh9KTwvaDQ+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFuc3dlcmVkLmFuc3dlcmVkLm1hcChlbGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCcgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXQtMiBhbnN3ZXJlZENhcmQnIGtleT17ZWxlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPtCX0LDQtNCw0L3Qvjoge25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0uY3JlYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz7QntGC0LLQtdGH0LXQvdC+OiB7bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjonbnVtZXJpYycsIG1pbnV0ZTonbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKERhdGUucGFyc2UoZWxlbS51cGRhdGVkX2F0KSkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCY0LzRjzoge2VsZW0ubmFtZX0gPGJyPjwvYnI+0JjQmNCdOiB7ZWxlbS5paW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPtCS0L7Qv9GA0L7RgToge2VsZW0ucXVlc3Rpb259PC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIj5cclxuICAgICA8c2VjdGlvbiBjbGFzcz1cInBhbmVsIGltcG9ydGFudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VycyA/ICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGg+MCA/IDxkaXYgY2xhc3NOYW1lPSd0bGdtc2cgYWxlcnQgYWxlcnQtaW5mbyc+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj46IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLICh7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5sZW5ndGh9KTwvaDQ+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXQtMicga2V5PXtlbGVtLmlkfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKGVsZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+e25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0uY3JlYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZSh0aGlzLnN0YXRlLmNvbGxhcHNlKX0gICBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c9e3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQuZmlsdGVyKGVsID0+IGVsLmlkID09PSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbGxhcHNlKSlbMF19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcyA9IHt0aGlzLmtleXByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0ge3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+ICAgICAgICBcclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZWxlZ3JhbSkiXSwic291cmNlUm9vdCI6IiJ9