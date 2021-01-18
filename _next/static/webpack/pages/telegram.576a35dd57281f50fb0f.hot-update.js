webpackHotUpdate_N_E("pages/telegram",{

/***/ "./defaults/utmSource.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/jquery/dist/jquery.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/webpack/buildin/module.js":
false,

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
    value: function keypress(event, msgid, id) {
      if (event.keyCode == 13 && event.shiftKey) {
        this.handleSubmit(msgid, id);
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
              lineNumber: 112,
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
                lineNumber: 115,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
          lineNumber: 132,
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
            lineNumber: 140,
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
            lineNumber: 142,
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
          lineNumber: 139,
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
          lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEFuc3dlcmVkTXNnIiwiZmV0Y2hOb25BbnN3ZXJlZE1zZyIsIlRlbGVncmFtIiwiY29sbGFwc2UiLCJtZXNzYWdlIiwiYW5zd2VyIiwiY29kZSIsImxvYWRpbmciLCJhbnN3ZXJzIiwibXNnaWQiLCJpZCIsImFuc3dlclRleHQiLCJoZWxsb1VzZXIiLCJzcGxpdCIsInNldFN0YXRlIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIm9rIiwicHV0Iiwic3VjY2VzcyIsInNldFRpbWVvdXQiLCJwcm9wcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsInByZXYiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJoYW5kbGVTdWJtaXQiLCJnZXQiLCJ1bmRlZmluZWQiLCJzdWJtaXRDb2RlIiwiaGFuZGxlQ29kZSIsImlzTG9hZGluZyIsImhhbmRsZUFuc3dlcmVkIiwibGVuZ3RoIiwibWFwIiwiZWxlbSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJmb3JtYXQiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsIm5hbWUiLCJpaW4iLCJxdWVzdGlvbiIsInRvZ2dsZUNvbGxhcHNlIiwiZmlsdGVyIiwiZWwiLCJwYXJzZUludCIsImhhbmRsZUNoYW5nZSIsImtleXByZXNzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUsyRCxjQUFMLENBQW9CLEtBQUtuRSxLQUFMLENBQVdRLFFBQS9CLENBQTdDO0FBQXlGLGNBQUksRUFBQyxJQUE5RjtBQUFBLGlDQUNJLHFFQUFDLHFEQUFEO0FBQUEsbUNBQ0cscUVBQUMsMkVBQUQ7QUFDSSxpQkFBRyxFQUFFLEtBQUtxQixLQUFMLENBQVc1QixXQUFYLENBQXVCQSxXQUF2QixDQUFtQ21FLE1BQW5DLENBQTBDLFVBQUFDLEVBQUU7QUFBQSx1QkFBSUEsRUFBRSxDQUFDdEQsRUFBSCxLQUFVdUQsUUFBUSxDQUFDLE1BQUksQ0FBQ3RFLEtBQUwsQ0FBV1EsUUFBWixDQUF0QjtBQUFBLGVBQTVDLEVBQXlGLENBQXpGLENBRFQ7QUFFSSxvQkFBTSxFQUFJLEtBQUtSLEtBQUwsQ0FBV1UsTUFGekI7QUFHSSwwQkFBWSxFQUFJLEtBQUs2RCxZQUh6QjtBQUlJLDBCQUFZLEVBQUksS0FBSzdCLFlBSnpCO0FBS0ksc0JBQVEsRUFBSSxLQUFLOEIsUUFMckI7QUFNSSxxQkFBTyxFQUFJLEtBQUt4RSxLQUFMLENBQVdZO0FBTjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF6QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUF3Q0g7Ozs7RUEzTGtCNkQsNENBQUssQ0FBQ0MsUzs7QUErTGRDLDJIQUFPLENBQUM1RSxlQUFELEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2Q0ksUUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS41NzZhMzVkZDU3MjgxZjUwZmIwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtmZXRjaEFuc3dlcmVkTXNnLCBmZXRjaE5vbkFuc3dlcmVkTXNnfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3RlbGVncmFtJ1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTWVzc2FnZURldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9tZXNzYWdlRGV0YWlsZWQnXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7bm9uYW5zd2VyZWQ6IHN0YXRlLm5vbmFuc3dlcmVkLCBhbnN3ZXJlZDogc3RhdGUuYW5zd2VyZWR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBmZXRjaEFuc3dlcmVkTXNnOiAoKSA9PiBkaXNwYXRjaChmZXRjaEFuc3dlcmVkTXNnKCkpLFxyXG4gIGZldGNoTm9uQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoTm9uQW5zd2VyZWRNc2coKSksXHJcbn0pXHJcbiBcclxuY2xhc3MgVGVsZWdyYW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKCk7XHJcbiAgICB0aGlzLnByb3BzLmZldGNoQW5zd2VyZWRNc2coKTtcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgY29sbGFwc2U6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiAnJyxcclxuICAgIGFuc3dlcjogJycsXHJcbiAgICBjb2RlOiAnJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgYW5zd2VyczogdHJ1ZSxcclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlU3VibWl0ID0gKG1zZ2lkLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgYW5zd2VyVGV4dCA9IGBcclxuJHtoZWxsb1VzZXIoKX0hJTBBXHJcbiR7dGhpcy5zdGF0ZS5hbnN3ZXIuc3BsaXQoJyUwQScpfSUwQSUwQVxyXG7QoSDRg9Cy0LDQttC10L3QuNC10LwgSS1jcmVkaXQua3pcclxuICAgIGBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFuc3dlcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlci5sZW5ndGgpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KVxyXG4gICAgICAgICAgICBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ2NDE0MzY4OTpBQUhha3hOVHZ2Qkc5cXB6ckg4Wi1sTk55RWpBUzJhVzgtVS9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7bXNnaWR9JnRleHQ9JHthbnN3ZXJUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEub2spIHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyxjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hBbnN3ZXJlZE1zZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQndC1INC+0YLQv9GA0LDQstC70LXQvdC+J30pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnLCBjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5cHJlc3MoZXZlbnQsIG1zZ2lkLCBpZCkge1xyXG4gICAgICBpZihldmVudC5rZXlDb2RlID09IDEzICYmIGV2ZW50LnNoaWZ0S2V5KXtcclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChtc2dpZCxpZClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAvLyBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bXFxyXFxuXFx2XSsvZywgXCJcIik7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbnN3ZXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNvZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29kZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHN1Ym1pdENvZGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuc3RhdGUuY29kZSA9PT0gJ2FkbWluMTIzJykge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoJ2JvdG1zZycsJzM5MTcnLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsCDQutC+0LTQsCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb2xsYXBzZSA9IGlkID0+ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2UgfHwgaWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlOiBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2UgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZTogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQW5zd2VyZWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldj0+KHtcclxuICAgICAgICAgIGFuc3dlcnM6ICFwcmV2LmFuc3dlcnNcclxuICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ2JvdG1zZycpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Q29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgdmFsdWU9e3RoaXMuc3RhdGUuY29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcGVhdEJ0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyBjbGFzc05hbWU9J210LTIgZC1mbGV4Jz4g0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZz09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdtYi01IGNvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAvLyAgICAgICAgICB7dGhpcy5zdGF0ZS5hbnN3ZXJzID8gIDxidXR0b24gYWN0aXZlIGNsYXNzTmFtZT0nYnRuIGJ0bi1kYXJrIG1iLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvtGC0LLQtdGH0LXQvdC90YvQtTwvYnV0dG9uPn1cclxuICAgICAgICAvLyAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRizwvaDQ+XHJcbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QndC10YIg0LLQvtC/0YDQvtGB0L7QsjwvcD5cclxuICAgICAgICAvLyAgICAgPC9kaXY+KVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciAgb3RoZXJQYWdlcyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLi4uLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnN0YXRlLmFuc3dlcnMgJiYgIXRoaXMucHJvcHMuYW5zd2VyZWQuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFuc3dlcnMgPyAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbnN3ZXJlZCgpfT7Qn9C+0LvRg9GH0LjRgtGMINC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA6ICAgPGJ1dHRvbiBhY3RpdmUgY2xhc3NOYW1lPSdidG4gYnRuLWRhcmsgbWItMyBtci0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L3QtdC+0YLQstC10YfQtdC90L3Ri9C1PC9idXR0b24+fVxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGg+MCA/IDxkaXYgY2xhc3NOYW1lPSd0bGdtc2cgYWxlcnQgYWxlcnQtaW5mbyc+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj46IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0Ysg0LfQsCDQvdC10LTQtdC70YzRjiAoe3RoaXMucHJvcHMuYW5zd2VyZWQuYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hbnN3ZXJlZC5hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTIgYW5zd2VyZWRDYXJkJyBrZXk9e2VsZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz7Ql9Cw0LTQsNC90L46IHtuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+0J7RgtCy0LXRh9C10L3Qvjoge25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0udXBkYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYW5zd2VycyA/ICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuc3dlcmVkKCl9PtCf0L7Qu9GD0YfQuNGC0Ywg0L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDogICA8YnV0dG9uIGFjdGl2ZSBjbGFzc05hbWU9J2J0biBidG4tZGFyayBtYi0zIG1yLTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5zd2VyZWQoKX0+0J/QvtC70YPRh9C40YLRjCDQvdC10L7RgtCy0LXRh9C10L3QvdGL0LU8L2J1dHRvbj59XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGg+MCA/IDxkaXYgY2xhc3NOYW1lPSd0bGdtc2cgYWxlcnQgYWxlcnQtaW5mbyc+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj46IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLICh7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5sZW5ndGh9KTwvaDQ+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXQtMicga2V5PXtlbGVtLmlkfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKGVsZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+e25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0uY3JlYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZSh0aGlzLnN0YXRlLmNvbGxhcHNlKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c9e3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQuZmlsdGVyKGVsID0+IGVsLmlkID09PSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbGxhcHNlKSlbMF19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcyA9IHt0aGlzLmtleXByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0ge3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==