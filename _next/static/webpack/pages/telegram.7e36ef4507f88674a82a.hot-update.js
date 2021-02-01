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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);








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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (msgid, question, iin, id) {
      var groupText = "\n\u041E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441: ".concat(question, "%0A \n\u0418\u0418\u041D: ").concat(iin, "%0A%0A\n").concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer.split('%0A'), "%0A%0A\n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz\n    ");
      var errorMessage = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442. \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043B \u043D\u0430\u0448 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0431\u043E\u0442-> \u0418\u0418\u041D: ".concat(iin, "%0A%0A;").concat(question, "%0A   ");
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
        js_cookie__WEBPACK_IMPORTED_MODULE_16___default.a.set('botmsg', '3917', {
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

      if (js_cookie__WEBPACK_IMPORTED_MODULE_16___default.a.get('botmsg') === undefined) {
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
              lineNumber: 134,
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
                lineNumber: 137,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, this);
      } // if (this.props.nonanswered.nonanswered.length === 0 && this.props.nonanswered.isLoading=== false) {
      //     return (<div className='mb-5 container otherPages'>
      //          {this.state.answers ?  <button active className='btn btn-dark mb-3' onClick={() => this.handleAnswered()}>Получить неотвеченные</button> 
      //         :   <button active className='btn btn-dark mb-3 mr-3' onClick={() => this.handleAnswered()}>Получить отвеченные</button>}
      //         <h4 className='mb-3 text-center'>Неотвеченные вопросы</h4>
      //         <p className='text-center'>Нет вопросов</p>
      //     </div>)
      // }


      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
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
        }, this);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
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
          lineNumber: 190,
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
          lineNumber: 192,
          columnNumber: 21
        }, this), this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tlgmsg alert alert-info",
          children: this.state.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
          className: "mb-3 text-center",
          children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
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
                    lineNumber: 202,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "card-text",
                    children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 54
                    }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 33
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 29
                }, _this2)
              }, elem.id, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 26
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 22
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
              lineNumber: 216,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJhbnN3ZXJzIiwibXNnaWQiLCJxdWVzdGlvbiIsImlpbiIsImlkIiwiZ3JvdXBUZXh0IiwiaGVsbG9Vc2VyIiwic3BsaXQiLCJlcnJvck1lc3NhZ2UiLCJhbnN3ZXJUZXh0Iiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwib2siLCJwdXQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInByb3BzIiwiZXJyb3IiLCJyZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwiYWxlcnQiLCJwcmV2Iiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiaGFuZGxlU3VibWl0IiwiZ2V0IiwidW5kZWZpbmVkIiwic3VibWl0Q29kZSIsImhhbmRsZUNvZGUiLCJpc0xvYWRpbmciLCJoYW5kbGVBbnN3ZXJlZCIsImxlbmd0aCIsIm1hcCIsImVsZW0iLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZm9ybWF0IiwiRGF0ZSIsInBhcnNlIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJuYW1lIiwidG9nZ2xlQ29sbGFwc2UiLCJmaWx0ZXIiLCJlbCIsInBhcnNlSW50IiwiaGFuZGxlQ2hhbmdlIiwia2V5cHJlc3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGlu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LEtBQUs0QixRQUxyQjtBQU1JLHFCQUFPLEVBQUksS0FBSzVFLEtBQUwsQ0FBV1k7QUFOMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQXdDSDs7OztFQWpOa0JpRSw0Q0FBSyxDQUFDQyxTOztBQXFOZEMsMkhBQU8sQ0FBQ2hGLGVBQUQsRUFBa0JJLGtCQUFsQixDQUFQLENBQTZDSSxRQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlbGVncmFtLjdlMzZlZjQ1MDdmODg2NzRhODJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge2ZldGNoQW5zd2VyZWRNc2csIGZldGNoTm9uQW5zd2VyZWRNc2d9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvdGVsZWdyYW0nXHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBNZXNzYWdlRGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL21lc3NhZ2VEZXRhaWxlZCdcclxuaW1wb3J0IHtoZWxsb1VzZXJ9IGZyb20gJy4uL2RlZmF1bHRzL2hlbGxvJ1xyXG5pbXBvcnQgZGlzYWJsZVNjcm9sbCBmcm9tICdkaXNhYmxlLXNjcm9sbCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtub25hbnN3ZXJlZDogc3RhdGUubm9uYW5zd2VyZWQsIGFuc3dlcmVkOiBzdGF0ZS5hbnN3ZXJlZH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGZldGNoQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoQW5zd2VyZWRNc2coKSksXHJcbiAgZmV0Y2hOb25BbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hOb25BbnN3ZXJlZE1zZygpKSxcclxufSlcclxuIFxyXG5jbGFzcyBUZWxlZ3JhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKTtcclxuICAgIHRoaXMucHJvcHMuZmV0Y2hBbnN3ZXJlZE1zZygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjb2xsYXBzZTogXCJcIixcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgYW5zd2VyOiAnJyxcclxuICAgIGNvZGU6ICcnLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBhbnN3ZXJzOiB0cnVlLFxyXG4gIH1cclxuICBcclxuICBoYW5kbGVTdWJtaXQgPSAobXNnaWQscXVlc3Rpb24saWluLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvdXBUZXh0ID0gYFxyXG7QntGC0LLQtdGC0LjQu9C4INC90LAg0LLQvtC/0YDQvtGBOiAke3F1ZXN0aW9ufSUwQSBcclxu0JjQmNCdOiAke2lpbn0lMEElMEFcclxuJHtoZWxsb1VzZXIoKX0hJTBBXHJcbiR7dGhpcy5zdGF0ZS5hbnN3ZXIuc3BsaXQoJyUwQScpfSUwQSUwQVxyXG7QoSDRg9Cy0LDQttC10L3QuNC10LwgSS1jcmVkaXQua3pcclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAgYNCd0LUg0YPQtNCw0LvQvtGB0Ywg0L7RgtC/0YDQsNCy0LjRgtGMINC+0YLQstC10YIuINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCDQsdC70L7QutC40YDQvtCy0LDQuyDQvdCw0Ygg0YLQtdC70LXQs9GA0LDQvCDQsdC+0YItPiDQmNCY0J06ICR7aWlufSUwQSUwQTske3F1ZXN0aW9ufSUwQSAgIGBcclxuICAgIGNvbnN0IGFuc3dlclRleHQgPSBgXHJcbiR7aGVsbG9Vc2VyKCl9ISUwQVxyXG4ke3RoaXMuc3RhdGUuYW5zd2VyLnNwbGl0KCclMEEnKX0lMEElMEFcclxu0KEg0YPQstCw0LbQtdC90LjQtdC8IEktY3JlZGl0Lmt6XHJcbiAgICBgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcclxuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0NjQxNDM2ODk6QUFIYWt4TlR2dkJHOXFwenJIOFotbE5OeUVqQVMyYVc4LVUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0ke21zZ2lkfSZ0ZXh0PSR7YW5zd2VyVGV4dH0maWU9VVRGLTgmb2U9VVRGLTgmcGFyc2VfbW9kZT1odG1sYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucHV0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3RlbGVncmFtLyR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3QxNDY0MTQzNjg5OkFBSGFreE5UdnZCRzlxcHpySDhaLWxOTnlFakFTMmFXOC1VL3NlbmRNZXNzYWdlP2NoYXRfaWQ9LTQzODI1OTU1NSZ0ZXh0PSR7Z3JvdXBUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyxjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBbnN3ZXJlZE1zZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQndC1INC+0YLQv9GA0LDQstC70LXQvdC+J30pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnLCBjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0NjQxNDM2ODk6QUFIYWt4TlR2dkJHOXFwenJIOFotbE5OeUVqQVMyYVc4LVUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0tNDM4MjU5NTU1JnRleHQ9JHtlcnJvck1lc3NhZ2V9JmllPVVURi04Jm9lPVVURi04JnBhcnNlX21vZGU9aHRtbGApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5cHJlc3MoZXZlbnQsIG1zZ2lkLHF1ZXN0aW9uLGlpbiwgaWQpIHtcclxuICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PSAxMyAmJiBldmVudC5zaGlmdEtleSl7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQobXNnaWQscXVlc3Rpb24saWluLGlkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIC8vIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1tcXHJcXG5cXHZdKy9nLCBcIlwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuc3dlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ29kZSA9IChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb2RlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgc3VibWl0Q29kZSA9ICgpID0+IHtcclxuICAgICAgaWYodGhpcy5zdGF0ZS5jb2RlID09PSAnYWRtaW4xMjMnKSB7XHJcbiAgICAgICAgY29va2llLnNldCgnYm90bXNnJywnMzkxNycsIHtleHBpcmVzOiA2MH0pXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwINC60L7QtNCwJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbGxhcHNlID0gaWQgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzZSB8fCBpZCAhPT0gdGhpcy5zdGF0ZS5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2U6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBbnN3ZXJlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2PT4oe1xyXG4gICAgICAgICAgYW5zd2VyczogIXByZXYuYW5zd2Vyc1xyXG4gICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYoY29va2llLmdldCgnYm90bXNnJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRDb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyB2YWx1ZT17dGhpcy5zdGF0ZS5jb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0QnRuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIGNsYXNzTmFtZT0nbXQtMiBkLWZsZXgnPiDQntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nPT09IGZhbHNlKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J21iLTUgY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgIC8vICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgOiAgIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMgbXItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgIC8vICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLPC9oND5cclxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPtCd0LXRgiDQstC+0L/RgNC+0YHQvtCyPC9wPlxyXG4gICAgICAgIC8vICAgICA8L2Rpdj4pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyICBvdGhlclBhZ2VzIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQutCwLi4uLi4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuYW5zd2VycyAmJiAhdGhpcy5wcm9wcy5hbnN3ZXJlZC5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VycyA/ICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlLmxlbmd0aD4wID8gPGRpdiBjbGFzc05hbWU9J3RsZ21zZyBhbGVydCBhbGVydC1pbmZvJz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PjogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QntGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyDQt9CwINC90LXQtNC10LvRjiAoe3RoaXMucHJvcHMuYW5zd2VyZWQuYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbnN3ZXJlZC5hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTIgYW5zd2VyZWRDYXJkJyBrZXk9e2VsZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz7Ql9Cw0LTQsNC90L46IHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+0J7RgtCy0LXRh9C10L3Qvjoge25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0udXBkYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VycyA/ICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGg+MCA/IDxkaXYgY2xhc3NOYW1lPSd0bGdtc2cgYWxlcnQgYWxlcnQtaW5mbyc+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj46IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLICh7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5sZW5ndGh9KTwvaDQ+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXQtMicga2V5PXtlbGVtLmlkfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKGVsZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+e25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0uY3JlYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZSh0aGlzLnN0YXRlLmNvbGxhcHNlKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c9e3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQuZmlsdGVyKGVsID0+IGVsLmlkID09PSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbGxhcHNlKSlbMF19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcyA9IHt0aGlzLmtleXByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0ge3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==