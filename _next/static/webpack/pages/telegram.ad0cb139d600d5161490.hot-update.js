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
      var answerText = "\n".concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer, "%0A%0A\n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz\n    ");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBbnN3ZXJlZE1zZyIsImZldGNoTm9uQW5zd2VyZWRNc2ciLCJUZWxlZ3JhbSIsImNvbGxhcHNlIiwibWVzc2FnZSIsImFuc3dlciIsImNvZGUiLCJtc2dpZCIsImlkIiwiYW5zd2VyVGV4dCIsImhlbGxvVXNlciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb29raWUiLCJzZXQiLCJleHBpcmVzIiwibG9jYXRpb24iLCJyZWxvYWQiLCJhbGVydCIsInByb3BzIiwiZ2V0IiwidW5kZWZpbmVkIiwic3VibWl0Q29kZSIsImhhbmRsZUNvZGUiLCJsZW5ndGgiLCJpc0xvYWRpbmciLCJtYXAiLCJlbGVtIiwidG9nZ2xlQ29sbGFwc2UiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibWludXRlIiwiZm9ybWF0IiwiRGF0ZSIsInBhcnNlIiwiY3JlYXRlZF9hdCIsIm5hbWUiLCJpaW4iLCJxdWVzdGlvbiIsImZpbHRlciIsImVsIiwicGFyc2VJbnQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLLEVBQUk7QUFDL0IsU0FBTztBQUFDQyxlQUFXLEVBQUVELEtBQUssQ0FBQ0M7QUFBcEIsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN0Q0Msb0JBQWdCLEVBQUU7QUFBQSxhQUFNRCxRQUFRLENBQUNDLGlGQUFnQixFQUFqQixDQUFkO0FBQUEsS0FEb0I7QUFFdENDLHVCQUFtQixFQUFFO0FBQUEsYUFBTUYsUUFBUSxDQUFDRSxvRkFBbUIsRUFBcEIsQ0FBZDtBQUFBO0FBRmlCLEdBQWY7QUFBQSxDQUEzQjs7SUFLTUMsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFLTTtBQUNKQyxjQUFRLEVBQUUsRUFETjtBQUVKQyxhQUFPLEVBQUUsRUFGTDtBQUdKQyxZQUFNLEVBQUUsRUFISjtBQUlKQyxVQUFJLEVBQUU7QUFKRixLOzt1TkFPTyxVQUFDQyxLQUFELEVBQVFDLEVBQVIsRUFBZTtBQUMxQixVQUFNQyxVQUFVLGVBQ3RCQyxrRUFBUyxFQURhLG1CQUV0QixNQUFLZCxLQUFMLENBQVdTLE1BRlcsNEZBQWhCOztBQUtBLFVBQUcsTUFBS1QsS0FBTCxDQUFXUyxNQUFkLEVBQXNCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFLaEIsS0FBTCxDQUFXUyxNQUFYLENBQWtCLENBQWxCLENBQVo7QUFDSDtBQUdKLEs7O3VOQUVjLFVBQUNRLEtBQUQsRUFBVztBQUN0QixZQUFLQyxRQUFMLENBQWM7QUFBQ1QsY0FBTSxFQUFFUSxLQUFLLENBQUNFLE1BQU4sQ0FBYUM7QUFBdEIsT0FBZDtBQUNILEs7O3FOQUNZLFVBQUNILEtBQUQsRUFBVztBQUNwQixZQUFLQyxRQUFMLENBQWM7QUFBQ1IsWUFBSSxFQUFFTyxLQUFLLENBQUNFLE1BQU4sQ0FBYUM7QUFBcEIsT0FBZDtBQUNILEs7O3FOQUNZLFlBQU07QUFDZixVQUFHLE1BQUtwQixLQUFMLENBQVdVLElBQVgsS0FBb0IsVUFBdkIsRUFBbUM7QUFDL0JXLHlEQUFNLENBQUNDLEdBQVAsQ0FBVyxRQUFYLEVBQW9CLE1BQXBCLEVBQTRCO0FBQUNDLGlCQUFPLEVBQUU7QUFBVixTQUE1QjtBQUNBQyxnQkFBUSxDQUFDQyxNQUFUO0FBQ0gsT0FIRCxNQUdNO0FBQ0ZDLGFBQUssQ0FBQyxhQUFELENBQUw7QUFDSDtBQUNKLEs7O3lOQUVnQixVQUFBZCxFQUFFO0FBQUEsYUFBSSxZQUFNO0FBQ3pCLFlBQUksQ0FBQyxNQUFLWixLQUFMLENBQVdPLFFBQVosSUFBd0JLLEVBQUUsS0FBSyxNQUFLWixLQUFMLENBQVdPLFFBQTlDLEVBQXdEO0FBQ3BELGdCQUFLVyxRQUFMLENBQWM7QUFDZFgsb0JBQVEsRUFBRUs7QUFESSxXQUFkO0FBR0gsU0FKRCxNQUlPLElBQUksTUFBS1osS0FBTCxDQUFXTyxRQUFYLEtBQXdCSyxFQUE1QixFQUFnQztBQUNuQyxnQkFBS00sUUFBTCxDQUFjO0FBQUVYLG9CQUFRLEVBQUU7QUFBWixXQUFkO0FBQ0g7QUFDSixPQVJrQjtBQUFBLEs7Ozs7Ozs7d0NBN0RDO0FBQ2hCLFdBQUtvQixLQUFMLENBQVd0QixtQkFBWDtBQUNIOzs7NkJBcUVRO0FBQUE7O0FBQ0wsVUFBR2dCLGlEQUFNLENBQUNPLEdBQVAsQ0FBVyxRQUFYLE1BQXlCQyxTQUE1QixFQUF1QztBQUNuQyw0QkFDSTtBQUFLLG1CQUFTLEVBQUMsa0NBQWY7QUFBQSxpQ0FDSTtBQUFNLG9CQUFRLEVBQUUsS0FBS0MsVUFBckI7QUFBQSxvQ0FDSTtBQUFPLGtCQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBSyxFQUFFLEtBQUs5QixLQUFMLENBQVdVLElBQXpDO0FBQStDLHNCQUFRLEVBQUUsS0FBS3FCO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFLLHVCQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNBO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXVCLHFCQUFLLEVBQUMsd0RBQTdCO0FBQXlDLHlCQUFTLEVBQUMsYUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFXSDs7QUFDRCxVQUFJLEtBQUtKLEtBQUwsQ0FBVzFCLFdBQVgsQ0FBdUJBLFdBQXZCLENBQW1DK0IsTUFBbkMsS0FBOEMsQ0FBOUMsSUFBbUQsS0FBS0wsS0FBTCxDQUFXMUIsV0FBWCxDQUF1QmdDLFNBQXZCLEtBQW9DLEtBQTNGLEVBQWtHO0FBQzlGLDRCQUFRO0FBQUssbUJBQVMsRUFBQywyQkFBZjtBQUFBLGtDQUEyQztBQUFJLHFCQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTNDLGVBQ0o7QUFBRyxxQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFSO0FBR0g7O0FBQ0QsVUFBRyxLQUFLTixLQUFMLENBQVcxQixXQUFYLENBQXVCZ0MsU0FBMUIsRUFBcUM7QUFDakMsNEJBQ0k7QUFBSyxtQkFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBS0gsT0FORCxNQVFBLG9CQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLG1CQUNLLEtBQUtqQyxLQUFMLENBQVdRLE9BQVgsQ0FBbUJ3QixNQUFuQixHQUEwQixDQUExQixnQkFBOEI7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUEsb0JBQTBDLEtBQUtoQyxLQUFMLENBQVdRO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTlCLGdCQUFtRztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUR4RyxlQUVJO0FBQUksbUJBQVMsRUFBQyxrQkFBZDtBQUFBLDhJQUF3RCxLQUFLbUIsS0FBTCxDQUFXMUIsV0FBWCxDQUF1QkEsV0FBdkIsQ0FBbUMrQixNQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLG9CQUNLLEtBQUtMLEtBQUwsQ0FBVzFCLFdBQVgsQ0FBdUJBLFdBQXZCLENBQW1DaUMsR0FBbkMsQ0FBdUMsVUFBQUMsSUFBSTtBQUFBLGdDQUN4QztBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQXlDLHVCQUFPLEVBQUUsTUFBSSxDQUFDQyxjQUFMLENBQW9CRCxJQUFJLENBQUN2QixFQUF6QixDQUFsRDtBQUFBLHVDQUNHO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEsMENBQ0E7QUFBRyw2QkFBUyxFQUFDLFVBQWI7QUFBQSw4QkFBeUIsSUFBSXlCLElBQUksQ0FBQ0MsY0FBVCxDQUF3QixJQUF4QixFQUE4QjtBQUFFQywwQkFBSSxFQUFFLFNBQVI7QUFBbUJDLDJCQUFLLEVBQUUsT0FBMUI7QUFBbUNDLHlCQUFHLEVBQUUsU0FBeEM7QUFBbURDLDBCQUFJLEVBQUMsU0FBeEQ7QUFBbUVDLDRCQUFNLEVBQUM7QUFBMUUscUJBQTlCLEVBQXFIQyxNQUFySCxDQUE0SCxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxJQUFJLENBQUNZLFVBQWhCLENBQVQsQ0FBNUg7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFEQSxlQUVJO0FBQUcsNkJBQVMsRUFBQyxXQUFiO0FBQUEsdURBQ1VaLElBQUksQ0FBQ2EsSUFEZixvQkFDcUI7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFEckIsMEJBQ29DYixJQUFJLENBQUNjLEdBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSixlQUtJO0FBQUEseUVBQVlkLElBQUksQ0FBQ2UsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURILGlCQUFnQ2YsSUFBSSxDQUFDdkIsRUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRHdDO0FBQUEsV0FBM0M7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhELGVBcUJDLHFFQUFDLGlEQUFEO0FBQVEsZ0JBQU0sRUFBRSxLQUFLWixLQUFMLENBQVdPLFFBQTNCO0FBQXFDLGdCQUFNLEVBQUUsS0FBSzZCLGNBQUwsQ0FBb0IsS0FBS3BDLEtBQUwsQ0FBV08sUUFBL0IsQ0FBN0M7QUFBeUYsY0FBSSxFQUFDLElBQTlGO0FBQUEsaUNBQ0kscUVBQUMscURBQUQ7QUFBQSxtQ0FDRyxxRUFBQywyRUFBRDtBQUNJLGlCQUFHLEVBQUUsS0FBS29CLEtBQUwsQ0FBVzFCLFdBQVgsQ0FBdUJBLFdBQXZCLENBQW1Da0QsTUFBbkMsQ0FBMEMsVUFBQUMsRUFBRTtBQUFBLHVCQUFJQSxFQUFFLENBQUN4QyxFQUFILEtBQVV5QyxRQUFRLENBQUMsTUFBSSxDQUFDckQsS0FBTCxDQUFXTyxRQUFaLENBQXRCO0FBQUEsZUFBNUMsRUFBeUYsQ0FBekYsQ0FEVDtBQUVJLG9CQUFNLEVBQUksS0FBS1AsS0FBTCxDQUFXUyxNQUZ6QjtBQUdJLDBCQUFZLEVBQUksS0FBSzZDLFlBSHpCO0FBSUksMEJBQVksRUFBSSxLQUFLQztBQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBa0NIOzs7O0VBcklrQkMsNENBQUssQ0FBQ0MsUzs7QUF5SWRDLDJIQUFPLENBQUMzRCxlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q0ksUUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS5hZDBjYjEzOWQ2MDBkNTE2MTQ5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtmZXRjaEFuc3dlcmVkTXNnLCBmZXRjaE5vbkFuc3dlcmVkTXNnfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3RlbGVncmFtJ1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTWVzc2FnZURldGFpbCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9tZXNzYWdlRGV0YWlsZWQnXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge25vbmFuc3dlcmVkOiBzdGF0ZS5ub25hbnN3ZXJlZH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgZmV0Y2hBbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hBbnN3ZXJlZE1zZygpKSxcclxuICAgIGZldGNoTm9uQW5zd2VyZWRNc2c6ICgpID0+IGRpc3BhdGNoKGZldGNoTm9uQW5zd2VyZWRNc2coKSksXHJcbiAgfSlcclxuICBcclxuY2xhc3MgVGVsZWdyYW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgIH0gXHJcblxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29sbGFwc2U6IFwiXCIsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgYW5zd2VyOiAnJyxcclxuICAgICAgICBjb2RlOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAobXNnaWQsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5zd2VyVGV4dCA9IGBcclxuJHtoZWxsb1VzZXIoKX0hJTBBXHJcbiR7dGhpcy5zdGF0ZS5hbnN3ZXJ9JTBBJTBBXHJcbtChINGD0LLQsNC20LXQvdC40LXQvCBJLWNyZWRpdC5relxyXG4gICAgYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKVxyXG4gICAgICAgICAgICAvLyBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ4MjAwNTkxNTpBQUdxak5JVFVEMGhSdTk1YVVaX3pEZmstQVAwZHZNNWw1Zy9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7bXNnaWR9JnRleHQ9JHthbnN3ZXJUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAvLyAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLmRhdGEub2spIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyxjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJyd9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Cd0LUg0L7RgtC/0YDQsNCy0LvQtdC90L4nfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJycsIGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmFuc3dlclswXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Fuc3dlcjogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUNvZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb2RlOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgc3VibWl0Q29kZSA9ICgpID0+IHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmNvZGUgPT09ICdhZG1pbjEyMycpIHtcclxuICAgICAgICAgICAgY29va2llLnNldCgnYm90bXNnJywnMzkxNycsIHtleHBpcmVzOiA2MH0pXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Ce0YjQuNCx0LrQsCDQutC+0LTQsCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUNvbGxhcHNlID0gaWQgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb2xsYXBzZSB8fCBpZCAhPT0gdGhpcy5zdGF0ZS5jb2xsYXBzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29sbGFwc2U6IGlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb2xsYXBzZSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbGxhcHNlOiBmYWxzZSB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYoY29va2llLmdldCgnYm90bXNnJykgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciBvdGhlclBhZ2VzJz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRDb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3Bhc3N3b3JkJyB2YWx1ZT17dGhpcy5zdGF0ZS5jb2RlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDb2RlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVwZWF0QnRuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyBjbGFzc05hbWU9J210LTIgZC1mbGV4Jz4g0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5pc0xvYWRpbmc9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT0nbWItNSBjb250YWluZXIgb3RoZXJQYWdlcyc+PGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLPC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPtCd0LXRgiDQstC+0L/RgNC+0YHQvtCyPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucHJvcHMubm9uYW5zd2VyZWQuaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyICBvdGhlclBhZ2VzIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQutCwLi4uLi4uLlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGg+MCA/IDxkaXYgY2xhc3NOYW1lPSd0bGdtc2cgYWxlcnQgYWxlcnQtaW5mbyc+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj46IDxkaXY+PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nbWItMyB0ZXh0LWNlbnRlcic+0J3QtdC+0YLQstC10YfQtdC90L3Ri9C1INCy0L7Qv9GA0L7RgdGLICh7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5sZW5ndGh9KTwvaDQ+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5tYXAoZWxlbT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgbXQtMicga2V5PXtlbGVtLmlkfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKGVsZW0uaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWJvZHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0aW55ZGF0ZSc+e25ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6J251bWVyaWMnLCBtaW51dGU6J251bWVyaWMnIH0pLmZvcm1hdChuZXcgRGF0ZShEYXRlLnBhcnNlKGVsZW0uY3JlYXRlZF9hdCkpKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXJkLXRleHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQmNC80Y86IHtlbGVtLm5hbWV9IDxicj48L2JyPtCY0JjQnToge2VsZW0uaWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aT7QktC+0L/RgNC+0YE6IHtlbGVtLnF1ZXN0aW9ufTwvaT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8TW9kYWwgIGlzT3Blbj17dGhpcy5zdGF0ZS5jb2xsYXBzZX0gdG9nZ2xlPXt0aGlzLnRvZ2dsZUNvbGxhcHNlKHRoaXMuc3RhdGUuY29sbGFwc2UpfSAgIHNpemU9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VEZXRhaWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZz17dGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5ub25hbnN3ZXJlZC5maWx0ZXIoZWwgPT4gZWwuaWQgPT09IHBhcnNlSW50KHRoaXMuc3RhdGUuY29sbGFwc2UpKVswXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9IHt0aGlzLnN0YXRlLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlID0ge3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQgPSB7dGhpcy5oYW5kbGVTdWJtaXR9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcblx0XHRcdDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZWxlZ3JhbSkiXSwic291cmNlUm9vdCI6IiJ9