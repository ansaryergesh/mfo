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
      loading: false
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
              lineNumber: 105,
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
                lineNumber: 108,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
            lineNumber: 115,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "text-center",
            children: "\u041D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this);
      }

      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, this);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tlgmsg alert alert-info",
          children: this.state.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
          className: "mb-3 text-center",
          children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
                    lineNumber: 136,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "card-text",
                    children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 54
                    }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 33
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 29
                }, _this2)
              }, elem.id, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 26
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 22
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
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
              lineNumber: 151,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsImFuc3dlcmVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaE5vbkFuc3dlcmVkTXNnIiwiVGVsZWdyYW0iLCJjb2xsYXBzZSIsIm1lc3NhZ2UiLCJhbnN3ZXIiLCJjb2RlIiwibG9hZGluZyIsIm1zZ2lkIiwiaWQiLCJhbnN3ZXJUZXh0IiwiaGVsbG9Vc2VyIiwic3BsaXQiLCJzZXRTdGF0ZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJvayIsInB1dCIsInN1Y2Nlc3MiLCJzZXRUaW1lb3V0IiwicHJvcHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY29va2llIiwic2V0IiwiZXhwaXJlcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWxlcnQiLCJmZXRjaEFuc3dlcmVkTXNnIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiaGFuZGxlU3VibWl0IiwiZ2V0IiwidW5kZWZpbmVkIiwic3VibWl0Q29kZSIsImhhbmRsZUNvZGUiLCJsZW5ndGgiLCJpc0xvYWRpbmciLCJtYXAiLCJlbGVtIiwidG9nZ2xlQ29sbGFwc2UiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZm9ybWF0IiwiRGF0ZSIsInBhcnNlIiwiY3JlYXRlZF9hdCIsIm5hbWUiLCJpaW4iLCJxdWVzdGlvbiIsImZpbHRlciIsImVsIiwicGFyc2VJbnQiLCJoYW5kbGVDaGFuZ2UiLCJrZXlwcmVzcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2Q0csUUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS4yMzYyOTc3ZWRkZDJhNThjMTZhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtmZXRjaEFuc3dlcmVkTXNnLCBmZXRjaE5vbkFuc3dlcmVkTXNnfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3RlbGVncmFtJ1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTWVzc2FnZURldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9tZXNzYWdlRGV0YWlsZWQnXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7bm9uYW5zd2VyZWQ6IHN0YXRlLm5vbmFuc3dlcmVkLCBhbnN3ZXJlZDogc3RhdGUuYW5zd2VyZWR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGZldGNoTm9uQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoTm9uQW5zd2VyZWRNc2coKSksXHJcbiAgfSlcclxuICBcclxuY2xhc3MgVGVsZWdyYW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEFuc3dlcmVkTXNnKCk7XHJcbiAgICB9IFxyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGNvbGxhcHNlOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGFuc3dlcjogJycsXHJcbiAgICAgICAgY29kZTogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgaGFuZGxlU3VibWl0ID0gKG1zZ2lkLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlclRleHQgPSBgXHJcbiR7aGVsbG9Vc2VyKCl9ISUwQVxyXG4ke3RoaXMuc3RhdGUuYW5zd2VyLnNwbGl0KCclMEEnKX0lMEElMEFcclxu0KEg0YPQstCw0LbQtdC90LjQtdC8IEktY3JlZGl0Lmt6XHJcbiAgICBgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIubGVuZ3RoKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSlcclxuICAgICAgICAgICAgYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0NjQxNDM2ODk6QUFIYWt4TlR2dkJHOXFwenJIOFotbE5OeUVqQVMyYVc4LVUvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0ke21zZ2lkfSZ0ZXh0PSR7YW5zd2VyVGV4dH0maWU9VVRGLTgmb2U9VVRGLTgmcGFyc2VfbW9kZT1odG1sYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucHV0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3RlbGVncmFtLyR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQntGC0L/RgNCw0LLQu9C10L3QvicsY29sbGFwc2U6ICcnLCBhbnN3ZXI6ICcnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hOb25BbnN3ZXJlZE1zZygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQndC1INC+0YLQv9GA0LDQstC70LXQvdC+J30pXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnLCBjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAga2V5cHJlc3MoZXZlbnQsIG1zZ2lkLCBpZCkge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT0gMTMgJiYgZXZlbnQuc2hpZnRLZXkpe1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdChtc2dpZCxpZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvW1xcclxcblxcdl0rL2csIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbnN3ZXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNvZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2RlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgc3VibWl0Q29kZSA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmNvZGUgPT09ICdhZG1pbjEyMycpIHtcclxuICAgICAgICAgICAgY29va2llLnNldCgnYm90bXNnJywnMzkxNycsIHtleHBpcmVzOiA2MH0pXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsCDQutC+0LTQsCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbGxhcHNlID0gaWQgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzZSB8fCBpZCAhPT0gdGhpcy5zdGF0ZS5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2U6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYoY29va2llLmdldCgnYm90bXNnJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRDb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyB2YWx1ZT17dGhpcy5zdGF0ZS5jb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0QnRuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIGNsYXNzTmFtZT0nbXQtMiBkLWZsZXgnPiDQntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J21iLTUgY29udGFpbmVyIG90aGVyUGFnZXMnPjxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRizwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QndC10YIg0LLQvtC/0YDQvtGB0L7QsjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciAgb3RoZXJQYWdlcyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLi4uLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyAoe3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTInIGtleT17ZWxlbS5pZH0gb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZShlbGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPntuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZSh0aGlzLnN0YXRlLmNvbGxhcHNlKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c9e3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQuZmlsdGVyKGVsID0+IGVsLmlkID09PSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbGxhcHNlKSlbMF19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzcyA9IHt0aGlzLmtleXByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0ge3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==