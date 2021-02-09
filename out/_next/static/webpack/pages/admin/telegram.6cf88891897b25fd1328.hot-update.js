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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleRecommend", function (e) {
      _this.setState({
        answer: e.target.value
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
            lineNumber: 150,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "container  otherPages text-center",
            children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 17
          }, this)]
        }, void 0, true);
      }

      if (!this.state.answers && !this.props.answered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
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
                  lineNumber: 165,
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
                  lineNumber: 167,
                  columnNumber: 21
                }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "tlgmsg alert alert-info",
                  children: this.state.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 48
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 117
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                  className: "mb-3 text-center",
                  children: ["\u041E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E (", this.props.answered.answered.length, ")"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
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
                            lineNumber: 175,
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
                            lineNumber: 176,
                            columnNumber: 29
                          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                            className: "card-text",
                            children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 178,
                              columnNumber: 54
                            }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 177,
                            columnNumber: 33
                          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                            children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 180,
                            columnNumber: 33
                          }, _this2)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 174,
                          columnNumber: 29
                        }, _this2)
                      }, elem.id, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 26
                      }, _this2)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 22
                    }, _this2);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 16
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 14
          }, this)]
        }, void 0, true);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
                lineNumber: 201,
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
                lineNumber: 203,
                columnNumber: 21
              }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "tlgmsg alert alert-info",
                children: this.state.message
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 48
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 117
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
                className: "mb-3 text-center",
                children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 207,
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
                          lineNumber: 213,
                          columnNumber: 29
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                          className: "card-text",
                          children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 215,
                            columnNumber: 54
                          }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 214,
                          columnNumber: 33
                        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                          children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 217,
                          columnNumber: 33
                        }, _this2)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 29
                      }, _this2)
                    }, elem.id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 26
                    }, _this2)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 22
                  }, _this2);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
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
                    handleRecommend: this.handleRecommend,
                    keypress: this.keypress,
                    loading: this.state.loading
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 18
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 14
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_admin_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJhbnN3ZXJzIiwibXNnaWQiLCJxdWVzdGlvbiIsImlpbiIsImlkIiwiZ3JvdXBUZXh0IiwiaGVsbG9Vc2VyIiwic3BsaXQiLCJlcnJvck1lc3NhZ2UiLCJhbnN3ZXJUZXh0Iiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJwdXQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInByb3BzIiwiZXJyb3IiLCJyZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsImFsZXJ0IiwicHJldiIsImtleUNvZGUiLCJzaGlmdEtleSIsImhhbmRsZVN1Ym1pdCIsImlzTG9hZGluZyIsImhhbmRsZUFuc3dlcmVkIiwibGVuZ3RoIiwibWFwIiwiZWxlbSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJmb3JtYXQiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsIm5hbWUiLCJ0b2dnbGVDb2xsYXBzZSIsImZpbHRlciIsImVsIiwicGFyc2VJbnQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVSZWNvbW1lbmQiLCJrZXlwcmVzcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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LEtBQUs4RCxZQUh6QjtBQUlJLGdDQUFZLEVBQUksS0FBS3ZCLFlBSnpCO0FBS0ksbUNBQWUsRUFBRSxLQUFLd0IsZUFMMUI7QUFNSSw0QkFBUSxFQUFJLEtBQUtDLFFBTnJCO0FBT0ksMkJBQU8sRUFBSSxLQUFLMUUsS0FBTCxDQUFXWTtBQVAxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBekJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBLGVBNkNBLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0NBO0FBQUEsc0JBREo7QUFpREg7Ozs7RUE5TmtCK0QsNENBQUssQ0FBQ0MsUzs7QUFrT2RDLDJIQUFPLENBQUM5RSxlQUFELEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2Q0ksUUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi90ZWxlZ3JhbS42Y2Y4ODg5MTg5N2IyNWZkMTMyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtmZXRjaEFuc3dlcmVkTXNnLCBmZXRjaE5vbkFuc3dlcmVkTXNnfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3RlbGVncmFtJ1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTWVzc2FnZURldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9tZXNzYWdlRGV0YWlsZWQnXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL0hlYWRlcidcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FkbWluL0Zvb3RlcidcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7bm9uYW5zd2VyZWQ6IHN0YXRlLm5vbmFuc3dlcmVkLCBhbnN3ZXJlZDogc3RhdGUuYW5zd2VyZWR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBmZXRjaEFuc3dlcmVkTXNnOiAoKSA9PiBkaXNwYXRjaChmZXRjaEFuc3dlcmVkTXNnKCkpLFxyXG4gIGZldGNoTm9uQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoTm9uQW5zd2VyZWRNc2coKSksXHJcbn0pXHJcblxyXG5cclxuY2xhc3MgVGVsZWdyYW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZmV0Y2hOb25BbnN3ZXJlZE1zZygpO1xyXG4gICAgdGhpcy5wcm9wcy5mZXRjaEFuc3dlcmVkTXNnKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGNvbGxhcHNlOiBcIlwiLFxyXG4gICAgbWVzc2FnZTogJycsXHJcbiAgICBhbnN3ZXI6ICcnLFxyXG4gICAgY29kZTogJycsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGFuc3dlcnM6IHRydWUsXHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZVN1Ym1pdCA9IChtc2dpZCxxdWVzdGlvbixpaW4sIGlkKSA9PiB7XHJcbiAgICBjb25zdCBncm91cFRleHQgPSBgXHJcbtCe0YLQstC10YLQuNC70Lgg0L3QsCDQstC+0L/RgNC+0YE6ICR7cXVlc3Rpb259JTBBIFxyXG7QmNCY0J06ICR7aWlufSUwQSUwQVxyXG4ke2hlbGxvVXNlcigpfSElMEFcclxuJHt0aGlzLnN0YXRlLmFuc3dlci5zcGxpdCgnJTBBJyl9JTBBJTBBXHJcbtChINGD0LLQsNC20LXQvdC40LXQvCBJLWNyZWRpdC5reiUwQSUwQVxyXG4gICAj0L7RgtCy0LXRgtC40LvQuCBgXHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gIGDQndC1INGD0LTQsNC70L7RgdGMINC+0YLQv9GA0LDQstC40YLRjCDQvtGC0LLQtdGCLiDQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LHQu9C+0LrQuNGA0L7QstCw0Lsg0L3QsNGIINGC0LXQu9C10LPRgNCw0Lwg0LHQvtGCLT4g0JjQmNCdOiAke2lpbn0lMEElMEE70JLQvtC/0YDQvtGBOiAke3F1ZXN0aW9ufSUwQSAj0L7RiNC40LHQutCwYFxyXG4gICAgY29uc3QgYW5zd2VyVGV4dCA9IGBcclxuJHtoZWxsb1VzZXIoKX0hJTBBXHJcbiR7dGhpcy5zdGF0ZS5hbnN3ZXIuc3BsaXQoJyUwQScpfSUwQSUwQVxyXG7QoSDRg9Cy0LDQttC10L3QuNC10LwgSS1jcmVkaXQua3pcclxuICAgIGBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFuc3dlcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlci5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ2NDE0MzY4OTpBQUhha3hOVHZ2Qkc5cXB6ckg4Wi1sTk55RWpBUzJhVzgtVS9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7bXNnaWR9JnRleHQ9JHthbnN3ZXJUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0NjQxNDM2ODk6QUFIYWt4TlR2dkJHOXFwenJIOFotbE5OeUVqQVMyYVc4LVUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0tNDM4MjU5NTU1JnRleHQ9JHtncm91cFRleHR9JmllPVVURi04Jm9lPVVURi04JnBhcnNlX21vZGU9aHRtbGApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAn0J7RgtC/0YDQsNCy0LvQtdC90L4nLGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Cd0LUg0L7RgtC/0YDQsNCy0LvQtdC90L4nfSlcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJycsIGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgaWYoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgIGF4aW9zLnB1dChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZWxlZ3JhbS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ2NDE0MzY4OTpBQUhha3hOVHZ2Qkc5cXB6ckg4Wi1sTk55RWpBUzJhVzgtVS9zZW5kTWVzc2FnZT9jaGF0X2lkPS00MzgyNTk1NTUmdGV4dD0ke2Vycm9yTWVzc2FnZX0maWU9VVRGLTgmb2U9VVRGLTgmcGFyc2VfbW9kZT1odG1sYClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlwcmVzcyhldmVudCwgbXNnaWQscXVlc3Rpb24saWluLCBpZCkge1xyXG4gICAgICBpZihldmVudC5rZXlDb2RlID09IDEzICYmIGV2ZW50LnNoaWZ0S2V5KXtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChtc2dpZCxxdWVzdGlvbixpaW4saWQpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgLy8gY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvW1xcclxcblxcdl0rL2csIFwiXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgYW5zd2VyOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDb2RlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NvZGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVjb21tZW5kID0gZSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5zd2VyOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBzdWJtaXRDb2RlID0gKCkgPT4ge1xyXG4gICAgICBpZih0aGlzLnN0YXRlLmNvZGUgPT09ICdhZG1pbjEyMycpIHtcclxuICAgICAgICBjb29raWUuc2V0KCdib3Rtc2cnLCczOTE3Jywge2V4cGlyZXM6IDYwfSlcclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAg0LrQvtC00LAnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29sbGFwc2UgPSBpZCA9PiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvbGxhcHNlIHx8IGlkICE9PSB0aGlzLnN0YXRlLmNvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb2xsYXBzZTogaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlID09PSBpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2U6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFuc3dlcmVkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHByZXY9Pih7XHJcbiAgICAgICAgICBhbnN3ZXJzOiAhcHJldi5hbnN3ZXJzXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5pc0xvYWRpbmc9PT0gZmFsc2UpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT0nbWItNSBjb250YWluZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgLy8gICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VycyA/ICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L3QtdC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICA6ICAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMyBtci0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj59XHJcbiAgICAgICAgLy8gICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QndC10L7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0Ys8L2g0PlxyXG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+0J3QtdGCINCy0L7Qv9GA0L7RgdC+0LI8L3A+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PilcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgIG90aGVyUGFnZXMgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQs9GA0YPQt9C60LAuLi4uLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5zd2VycyAmJiAhdGhpcy5wcm9wcy5hbnN3ZXJlZC5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxtYWluIHJvbGU9XCJtYWluXCI+XHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYW5lbCBpbXBvcnRhbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VycyA/ICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlLmxlbmd0aD4wID8gPGRpdiBjbGFzc05hbWU9J3RsZ21zZyBhbGVydCBhbGVydC1pbmZvJz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PjogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QntGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyDQt9CwINC90LXQtNC10LvRjiAoe3RoaXMucHJvcHMuYW5zd2VyZWQuYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbnN3ZXJlZC5hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTIgYW5zd2VyZWRDYXJkJyBrZXk9e2VsZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz7Ql9Cw0LTQsNC90L46IHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+0J7RgtCy0LXRh9C10L3Qvjoge25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0udXBkYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxtYWluIHJvbGU9XCJtYWluXCI+XHJcbiAgICAgPHNlY3Rpb24gY2xhc3M9XCJwYW5lbCBpbXBvcnRhbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6ICAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMyBtci0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L3QtdC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyAoe3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTInIGtleT17ZWxlbS5pZH0gb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZShlbGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPntuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxNb2RhbCAgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlfSB0b2dnbGU9e3RoaXMudG9nZ2xlQ29sbGFwc2UodGhpcy5zdGF0ZS5jb2xsYXBzZSl9ICAgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZURldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnPXt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jb2xsYXBzZSkpWzBdfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0ge3RoaXMuc3RhdGUuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCA9IHt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVjb21tZW5kPXt0aGlzLmhhbmRsZVJlY29tbWVuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3MgPSB7dGhpcy5rZXlwcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZyA9IHt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPiAgICAgICAgXHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==