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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\telegram.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var mapStateToProps = function mapStateToProps(state) {
  return {
    nonanswered: state.nonanswered
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
      code: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (msgid, id) {
      var answerText = "\n".concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer, "%0A%0A \n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz\n    ");

      if (_this.state.answer) {
        // console.log(this.state.answer)
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://api.telegram.org/bot1482005915:AAGqjNITUD0hRu95aUZ_zDfk-AP0dvM5l5g/sendMessage?chat_id=".concat(msgid, "&text=").concat(answerText, "&ie=UTF-8&oe=UTF-8&parse_mode=html")).then(function (response) {
          if (response.data.ok) {
            axios__WEBPACK_IMPORTED_MODULE_9___default.a.put("https://api.money-men.kz/api/telegram/".concat(id)).then(function (response) {
              if (response.data.success) {
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
        js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.set('botmsg', '3917', {
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (js_cookie__WEBPACK_IMPORTED_MODULE_15___default.a.get('botmsg') === undefined) {
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
              lineNumber: 94,
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
                lineNumber: 96,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
            lineNumber: 104,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "text-center",
            children: "\u041D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this);
      }

      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 17
        }, this);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tlgmsg alert alert-info",
          children: this.state.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
          className: "mb-3 text-center",
          children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
                    lineNumber: 125,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "card-text",
                    children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 54
                    }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 33
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 29
                }, _this2)
              }, elem.id, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 26
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 22
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
              handleSubmit: this.handleSubmit
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBbnN3ZXJlZE1zZyIsImZldGNoTm9uQW5zd2VyZWRNc2ciLCJUZWxlZ3JhbSIsImNvbGxhcHNlIiwibWVzc2FnZSIsImFuc3dlciIsImNvZGUiLCJtc2dpZCIsImlkIiwiYW5zd2VyVGV4dCIsImhlbGxvVXNlciIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJvayIsInB1dCIsInN1Y2Nlc3MiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJwcm9wcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsImdldCIsInVuZGVmaW5lZCIsInN1Ym1pdENvZGUiLCJoYW5kbGVDb2RlIiwibGVuZ3RoIiwiaXNMb2FkaW5nIiwibWFwIiwiZWxlbSIsInRvZ2dsZUNvbGxhcHNlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImZvcm1hdCIsIkRhdGUiLCJwYXJzZSIsImNyZWF0ZWRfYXQiLCJuYW1lIiwiaWluIiwicXVlc3Rpb24iLCJmaWx0ZXIiLCJlbCIsInBhcnNlSW50IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSyxFQUFJO0FBQy9CLFNB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QUFDSSxpQkFBRyxFQUFFLEtBQUtrQixLQUFMLENBQVd4QixXQUFYLENBQXVCQSxXQUF2QixDQUFtQ3lELE1BQW5DLENBQTBDLFVBQUFDLEVBQUU7QUFBQSx1QkFBSUEsRUFBRSxDQUFDL0MsRUFBSCxLQUFVZ0QsUUFBUSxDQUFDLE1BQUksQ0FBQzVELEtBQUwsQ0FBV08sUUFBWixDQUF0QjtBQUFBLGVBQTVDLEVBQXlGLENBQXpGLENBRFQ7QUFFSSxvQkFBTSxFQUFJLEtBQUtQLEtBQUwsQ0FBV1MsTUFGekI7QUFHSSwwQkFBWSxFQUFJLEtBQUtvRCxZQUh6QjtBQUlJLDBCQUFZLEVBQUksS0FBS0M7QUFKekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQWtDSDs7OztFQXBJa0JDLDRDQUFLLENBQUNDLFM7O0FBd0lkQywySEFBTyxDQUFDbEUsZUFBRCxFQUFrQkcsa0JBQWxCLENBQVAsQ0FBNkNJLFFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVsZWdyYW0uNWRmMjBlMjBlODgzYmIxODc4YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7ZmV0Y2hBbnN3ZXJlZE1zZywgZmV0Y2hOb25BbnN3ZXJlZE1zZ30gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy90ZWxlZ3JhbSdcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IE1lc3NhZ2VEZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvbWVzc2FnZURldGFpbGVkJ1xyXG5pbXBvcnQge2hlbGxvVXNlcn0gZnJvbSAnLi4vZGVmYXVsdHMvaGVsbG8nXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtub25hbnN3ZXJlZDogc3RhdGUubm9uYW5zd2VyZWR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGZldGNoQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoQW5zd2VyZWRNc2coKSksXHJcbiAgICBmZXRjaE5vbkFuc3dlcmVkTXNnOiAoKSA9PiBkaXNwYXRjaChmZXRjaE5vbkFuc3dlcmVkTXNnKCkpLFxyXG4gIH0pXHJcbiAgXHJcbmNsYXNzIFRlbGVncmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hOb25BbnN3ZXJlZE1zZygpXHJcbiAgICB9IFxyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGNvbGxhcHNlOiBcIlwiLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgIGFuc3dlcjogJycsXHJcbiAgICAgICAgY29kZTogJycsXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gKG1zZ2lkLCBpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFuc3dlclRleHQgPSBgXHJcbiR7aGVsbG9Vc2VyKCl9ISUwQVxyXG4ke3RoaXMuc3RhdGUuYW5zd2VyfSUwQSUwQSBcclxu0KEg0YPQstCw0LbQtdC90LjQtdC8IEktY3JlZGl0Lmt6XHJcbiAgICBgXHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5hbnN3ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3QxNDgyMDA1OTE1OkFBR3FqTklUVUQwaFJ1OTVhVVpfekRmay1BUDBkdk01bDVnL3NlbmRNZXNzYWdlP2NoYXRfaWQ9JHttc2dpZH0mdGV4dD0ke2Fuc3dlclRleHR9JmllPVVURi04Jm9lPVVURi04JnBhcnNlX21vZGU9aHRtbGApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLnB1dChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZWxlZ3JhbS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAn0J7RgtC/0YDQsNCy0LvQtdC90L4nLGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAnJ30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAn0J3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvid9KVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiAnJywgY29sbGFwc2U6ICcnLCBhbnN3ZXI6ICcnfSlcclxuICAgICAgICAgICAgICAgICAgICB9LDE1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbnN3ZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDb2RlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29kZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHN1Ym1pdENvZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb2RlID09PSAnYWRtaW4xMjMnKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2JvdG1zZycsJzM5MTcnLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAg0LrQvtC00LAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb2xsYXBzZSA9IGlkID0+ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2UgfHwgaWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlOiBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2UgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZTogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ2JvdG1zZycpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Q29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgdmFsdWU9e3RoaXMuc3RhdGUuY29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcGVhdEJ0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgY2xhc3NOYW1lPSdtdC0yIGQtZmxleCc+INCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J21iLTUgY29udGFpbmVyIG90aGVyUGFnZXMnPjxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRizwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QndC10YIg0LLQvtC/0YDQvtGB0L7QsjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciAgb3RoZXJQYWdlcyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLi4uLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyAoe3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTInIGtleT17ZWxlbS5pZH0gb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZShlbGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPntuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZSh0aGlzLnN0YXRlLmNvbGxhcHNlKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c9e3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQuZmlsdGVyKGVsID0+IGVsLmlkID09PSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbGxhcHNlKSlbMF19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fSAgICBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==