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
        // axios.post(`https://api.telegram.org/bot1482005915:AAGqjNITUD0hRu95aUZ_zDfk-AP0dvM5l5g/sendMessage?chat_id=${msgid}&text=${answerText}&ie=UTF-8&oe=UTF-8&parse_mode=html`)
        // .then(response=> {
        //     if(response.data.ok) {
        //         axios.put(`https://api.money-men.kz/api/telegram/${id}`)
        //         .then(response=>{
        //             if(response.data.success) {
        //                 this.setState({message: 'Отправлено',collapse: '', answer: ''})
        //                 setTimeout(() => {
        //                     this.setState({message: ''})
        //                 },1500)
        //                 this.props.fetchNonAnsweredMsg()
        //             }
        //         })
        //     }else {
        //         this.setState({message: 'Не отправлено'})
        //         setTimeout(() => {
        //             this.setState({message: '', collapse: '', answer: ''})
        //         },1500)
        //     }
        // })
        console.log(_this.state.answer[0]);
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
              lineNumber: 95,
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
                lineNumber: 97,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
            lineNumber: 105,
            columnNumber: 64
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
            className: "text-center",
            children: "\u041D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this);
      }

      if (this.props.nonanswered.isLoading) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "container  otherPages text-center",
          children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430......."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }, this);
      } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "container otherPages",
        children: [this.state.message.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "tlgmsg alert alert-info",
          children: this.state.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 117
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h4", {
          className: "mb-3 text-center",
          children: ["\u041D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B (", this.props.nonanswered.nonanswered.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
                    lineNumber: 126,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
                    className: "card-text",
                    children: ["\u0418\u043C\u044F: ", elem.name, " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 54
                    }, _this2), "\u0418\u0418\u041D: ", elem.iin]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 33
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
                    children: ["\u0412\u043E\u043F\u0440\u043E\u0441: ", elem.question]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 33
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 29
                }, _this2)
              }, elem.id, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 26
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 22
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
              lineNumber: 141,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBbnN3ZXJlZE1zZyIsImZldGNoTm9uQW5zd2VyZWRNc2ciLCJUZWxlZ3JhbSIsImNvbGxhcHNlIiwibWVzc2FnZSIsImFuc3dlciIsImNvZGUiLCJtc2dpZCIsImlkIiwiYW5zd2VyVGV4dCIsImhlbGxvVXNlciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsInByb3BzIiwiZ2V0IiwidW5kZWZpbmVkIiwic3VibWl0Q29kZSIsImhhbmRsZUNvZGUiLCJsZW5ndGgiLCJpc0xvYWRpbmciLCJtYXAiLCJlbGVtIiwidG9nZ2xlQ29sbGFwc2UiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZm9ybWF0IiwiRGF0ZSIsInBhcnNlIiwiY3JlYXRlZF9hdCIsIm5hbWUiLCJpaW4iLCJxdWVzdGlvbiIsImZpbHRlciIsImVsIiwicGFyc2VJbnQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsU0FBTztBQUFDQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0M7QUFBcEIsR0FBUDtBQUNELENBRkQ7O0FBSUEs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRHdDO0FBQUEsV0FBM0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhELGVBcUJDLHFFQUFDLGlEQUFEO0FBQVEsZ0JBQU0sRUFBRSxLQUFLWixLQUFMLENBQVdPLFFBQTNCO0FBQXFDLGdCQUFNLEVBQUUsS0FBSzZCLGNBQUwsQ0FBb0IsS0FBS3BDLEtBQUwsQ0FBV08sUUFBL0IsQ0FBN0M7QUFBeUYsY0FBSSxFQUFDLElBQTlGO0FBQUEsaUNBQ0kscUVBQUMscURBQUQ7QUFBQSxtQ0FDRyxxRUFBQywyRUFBRDtBQUNJLGlCQUFHLEVBQUUsS0FBS29CLEtBQUwsQ0FBVzFCLFdBQVgsQ0FBdUJBLFdBQXZCLENBQW1Da0QsTUFBbkMsQ0FBMEMsVUFBQUMsRUFBRTtBQUFBLHVCQUFJQSxFQUFFLENBQUN4QyxFQUFILEtBQVV5QyxRQUFRLENBQUMsTUFBSSxDQUFDckQsS0FBTCxDQUFXTyxRQUFaLENBQXRCO0FBQUEsZUFBNUMsRUFBeUYsQ0FBekYsQ0FEVDtBQUVJLG9CQUFNLEVBQUksS0FBS1AsS0FBTCxDQUFXUyxNQUZ6QjtBQUdJLDBCQUFZLEVBQUksS0FBSzZDLFlBSHpCO0FBSUksMEJBQVksRUFBSSxLQUFLQztBQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBa0NIOzs7O0VBcklrQkMsNENBQUssQ0FBQ0MsUzs7QUF5SWRDLDJIQUFPLENBQUMzRCxlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q0ksUUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS5iNzJiNWMyNzRlZWZkYWE1OGIwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtmZXRjaEFuc3dlcmVkTXNnLCBmZXRjaE5vbkFuc3dlcmVkTXNnfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3RlbGVncmFtJ1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTWVzc2FnZURldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9tZXNzYWdlRGV0YWlsZWQnXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge25vbmFuc3dlcmVkOiBzdGF0ZS5ub25hbnN3ZXJlZH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgZmV0Y2hBbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hBbnN3ZXJlZE1zZygpKSxcclxuICAgIGZldGNoTm9uQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoTm9uQW5zd2VyZWRNc2coKSksXHJcbiAgfSlcclxuICBcclxuY2xhc3MgVGVsZWdyYW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgIH0gXHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29sbGFwc2U6IFwiXCIsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgYW5zd2VyOiAnJyxcclxuICAgICAgICBjb2RlOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAobXNnaWQsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyVGV4dCA9IGBcclxuJHtoZWxsb1VzZXIoKX0hJTBBXHJcbiR7dGhpcy5zdGF0ZS5hbnN3ZXJ9JTBBJTBBIFxyXG7QoSDRg9Cy0LDQttC10L3QuNC10LwgSS1jcmVkaXQua3pcclxuICAgIGBcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmFuc3dlcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlcilcclxuICAgICAgICAgICAgLy8gYXhpb3MucG9zdChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdDE0ODIwMDU5MTU6QUFHcWpOSVRVRDBoUnU5NWFVWl96RGZrLUFQMGR2TTVsNWcvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0ke21zZ2lkfSZ0ZXh0PSR7YW5zd2VyVGV4dH0maWU9VVRGLTgmb2U9VVRGLTgmcGFyc2VfbW9kZT1odG1sYClcclxuICAgICAgICAgICAgLy8gLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZihyZXNwb25zZS5kYXRhLm9rKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgYXhpb3MucHV0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3RlbGVncmFtLyR7aWR9YClcclxuICAgICAgICAgICAgLy8gICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQntGC0L/RgNCw0LLQu9C10L3QvicsY29sbGFwc2U6ICcnLCBhbnN3ZXI6ICcnfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmV0Y2hOb25BbnN3ZXJlZE1zZygpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICfQndC1INC+0YLQv9GA0LDQstC70LXQvdC+J30pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6ICcnLCBjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0sMTUwMClcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXJbMF0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHthbnN3ZXI6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDb2RlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29kZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIHN1Ym1pdENvZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb2RlID09PSAnYWRtaW4xMjMnKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2JvdG1zZycsJzM5MTcnLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQntGI0LjQsdC60LAg0LrQvtC00LAnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb2xsYXBzZSA9IGlkID0+ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuY29sbGFwc2UgfHwgaWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbGxhcHNlOiBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuY29sbGFwc2UgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2xsYXBzZTogZmFsc2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmKGNvb2tpZS5nZXQoJ2JvdG1zZycpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Q29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdwYXNzd29yZCcgdmFsdWU9e3RoaXMuc3RhdGUuY29kZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ29kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcGVhdEJ0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgY2xhc3NOYW1lPSdtdC0yIGQtZmxleCc+INCe0YLQv9GA0LDQstC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9J21iLTUgY29udGFpbmVyIG90aGVyUGFnZXMnPjxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRizwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QndC10YIg0LLQvtC/0YDQvtGB0L7QsjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciAgb3RoZXJQYWdlcyB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLi4uLi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UubGVuZ3RoPjAgPyA8ZGl2IGNsYXNzTmFtZT0ndGxnbXNnIGFsZXJ0IGFsZXJ0LWluZm8nPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+OiA8ZGl2PjwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J21iLTMgdGV4dC1jZW50ZXInPtCd0LXQvtGC0LLQtdGH0LXQvdC90YvQtSDQstC+0L/RgNC+0YHRiyAoe3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubGVuZ3RofSk8L2g0PlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQubWFwKGVsZW09PihcclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkIG10LTInIGtleT17ZWxlbS5pZH0gb25DbGljaz17dGhpcy50b2dnbGVDb2xsYXBzZShlbGVtLmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZC1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGlueWRhdGUnPntuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUnLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdzaG9ydCcsIGRheTogJzItZGlnaXQnLCBob3VyOidudW1lcmljJywgbWludXRlOidudW1lcmljJyB9KS5mb3JtYXQobmV3IERhdGUoRGF0ZS5wYXJzZShlbGVtLmNyZWF0ZWRfYXQpKSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY2FyZC10ZXh0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQvNGPOiB7ZWxlbS5uYW1lfSA8YnI+PC9icj7QmNCY0J06IHtlbGVtLmlpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+0JLQvtC/0YDQvtGBOiB7ZWxlbS5xdWVzdGlvbn08L2k+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPE1vZGFsICBpc09wZW49e3RoaXMuc3RhdGUuY29sbGFwc2V9IHRvZ2dsZT17dGhpcy50b2dnbGVDb2xsYXBzZSh0aGlzLnN0YXRlLmNvbGxhcHNlKX0gICBzaXplPVwibWRcIj5cclxuICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlRGV0YWlsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2c9e3RoaXMucHJvcHMubm9uYW5zd2VyZWQubm9uYW5zd2VyZWQuZmlsdGVyKGVsID0+IGVsLmlkID09PSBwYXJzZUludCh0aGlzLnN0YXRlLmNvbGxhcHNlKSlbMF19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7dGhpcy5zdGF0ZS5hbnN3ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fSAgICBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVGVsZWdyYW0pIl0sInNvdXJjZVJvb3QiOiIifQ==