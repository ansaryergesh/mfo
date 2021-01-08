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
      var answerText = "\n".concat(Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_14__["helloUser"])(), "!%0A\n").concat(_this.state.answer.split('\n'), "%0A%0A\n\u0421 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435\u043C I-credit.kz\n    ");

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
        console.log(answerText);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVsZWdyYW0uanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub25hbnN3ZXJlZCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiZmV0Y2hBbnN3ZXJlZE1zZyIsImZldGNoTm9uQW5zd2VyZWRNc2ciLCJUZWxlZ3JhbSIsImNvbGxhcHNlIiwibWVzc2FnZSIsImFuc3dlciIsImNvZGUiLCJtc2dpZCIsImlkIiwiYW5zd2VyVGV4dCIsImhlbGxvVXNlciIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvb2tpZSIsInNldCIsImV4cGlyZXMiLCJsb2NhdGlvbiIsInJlbG9hZCIsImFsZXJ0IiwicHJvcHMiLCJnZXQiLCJ1bmRlZmluZWQiLCJzdWJtaXRDb2RlIiwiaGFuZGxlQ29kZSIsImxlbmd0aCIsImlzTG9hZGluZyIsIm1hcCIsImVsZW0iLCJ0b2dnbGVDb2xsYXBzZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJmb3JtYXQiLCJEYXRlIiwicGFyc2UiLCJjcmVhdGVkX2F0IiwibmFtZSIsImlpbiIsInF1ZXN0aW9uIiwiZmlsdGVyIiwiZWwiLCJwYXJzZUludCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQUNDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQztBQUFwQixHQUFQO0FBQ0QsQ0FG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QUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEd0M7QUFBQSxXQUEzQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQsZUFxQkMscUVBQUMsaURBQUQ7QUFBUSxnQkFBTSxFQUFFLEtBQUtaLEtBQUwsQ0FBV08sUUFBM0I7QUFBcUMsZ0JBQU0sRUFBRSxLQUFLOEIsY0FBTCxDQUFvQixLQUFLckMsS0FBTCxDQUFXTyxRQUEvQixDQUE3QztBQUF5RixjQUFJLEVBQUMsSUFBOUY7QUFBQSxpQ0FDSSxxRUFBQyxxREFBRDtBQUFBLG1DQUNHLHFFQUFDLDJFQUFEO0FBQ0ksaUJBQUcsRUFBRSxLQUFLcUIsS0FBTCxDQUFXM0IsV0FBWCxDQUF1QkEsV0FBdkIsQ0FBbUNtRCxNQUFuQyxDQUEwQyxVQUFBQyxFQUFFO0FBQUEsdUJBQUlBLEVBQUUsQ0FBQ3pDLEVBQUgsS0FBVTBDLFFBQVEsQ0FBQyxNQUFJLENBQUN0RCxLQUFMLENBQVdPLFFBQVosQ0FBdEI7QUFBQSxlQUE1QyxFQUF5RixDQUF6RixDQURUO0FBRUksb0JBQU0sRUFBSSxLQUFLUCxLQUFMLENBQVdTLE1BRnpCO0FBR0ksMEJBQVksRUFBSSxLQUFLOEMsWUFIekI7QUFJSSwwQkFBWSxFQUFJLEtBQUtDO0FBSnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFrQ0g7Ozs7RUFySWtCQyw0Q0FBSyxDQUFDQyxTOztBQXlJZEMsMkhBQU8sQ0FBQzVELGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDSSxRQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlbGVncmFtLjkyMWIzNDQyZTMyZDM3ZDJhYjAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge2ZldGNoQW5zd2VyZWRNc2csIGZldGNoTm9uQW5zd2VyZWRNc2d9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvdGVsZWdyYW0nXHJcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5IH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBNZXNzYWdlRGV0YWlsIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL21lc3NhZ2VEZXRhaWxlZCdcclxuaW1wb3J0IHtoZWxsb1VzZXJ9IGZyb20gJy4uL2RlZmF1bHRzL2hlbGxvJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7bm9uYW5zd2VyZWQ6IHN0YXRlLm5vbmFuc3dlcmVkfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBmZXRjaEFuc3dlcmVkTXNnOiAoKSA9PiBkaXNwYXRjaChmZXRjaEFuc3dlcmVkTXNnKCkpLFxyXG4gICAgZmV0Y2hOb25BbnN3ZXJlZE1zZzogKCkgPT4gZGlzcGF0Y2goZmV0Y2hOb25BbnN3ZXJlZE1zZygpKSxcclxuICB9KVxyXG4gIFxyXG5jbGFzcyBUZWxlZ3JhbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoTm9uQW5zd2VyZWRNc2coKVxyXG4gICAgfSBcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjb2xsYXBzZTogXCJcIixcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgICBhbnN3ZXI6ICcnLFxyXG4gICAgICAgIGNvZGU6ICcnLFxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdCA9IChtc2dpZCwgaWQpID0+IHtcclxuICAgICAgICBjb25zdCBhbnN3ZXJUZXh0ID0gYFxyXG4ke2hlbGxvVXNlcigpfSElMEFcclxuJHt0aGlzLnN0YXRlLmFuc3dlci5zcGxpdCgnXFxuJyl9JTBBJTBBXHJcbtChINGD0LLQsNC20LXQvdC40LXQvCBJLWNyZWRpdC5relxyXG4gICAgYFxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKVxyXG4gICAgICAgICAgICAvLyBheGlvcy5wb3N0KGBodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90MTQ4MjAwNTkxNTpBQUdxak5JVFVEMGhSdTk1YVVaX3pEZmstQVAwZHZNNWw1Zy9zZW5kTWVzc2FnZT9jaGF0X2lkPSR7bXNnaWR9JnRleHQ9JHthbnN3ZXJUZXh0fSZpZT1VVEYtOCZvZT1VVEYtOCZwYXJzZV9tb2RlPWh0bWxgKVxyXG4gICAgICAgICAgICAvLyAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGlmKHJlc3BvbnNlLmRhdGEub2spIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVsZWdyYW0vJHtpZH1gKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyxjb2xsYXBzZTogJycsIGFuc3dlcjogJyd9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJyd9KVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5mZXRjaE5vbkFuc3dlcmVkTXNnKClcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJ9Cd0LUg0L7RgtC/0YDQsNCy0LvQtdC90L4nfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogJycsIGNvbGxhcHNlOiAnJywgYW5zd2VyOiAnJ30pXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwxNTAwKVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXJUZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5zd2VyOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlQ29kZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvZGU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICB9XHJcbiAgICBzdWJtaXRDb2RlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY29kZSA9PT0gJ2FkbWluMTIzJykge1xyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdib3Rtc2cnLCczOTE3Jywge2V4cGlyZXM6IDYwfSlcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgn0J7RiNC40LHQutCwINC60L7QtNCwJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29sbGFwc2UgPSBpZCA9PiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmNvbGxhcHNlIHx8IGlkICE9PSB0aGlzLnN0YXRlLmNvbGxhcHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBjb2xsYXBzZTogaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvbGxhcHNlID09PSBpZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29sbGFwc2U6IGZhbHNlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBpZihjb29raWUuZ2V0KCdib3Rtc2cnKSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIG90aGVyUGFnZXMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdENvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIHZhbHVlPXt0aGlzLnN0YXRlLmNvZGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNvZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXBlYXRCdG4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIGNsYXNzTmFtZT0nbXQtMiBkLWZsZXgnPiDQntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLm5vbmFuc3dlcmVkLmlzTG9hZGluZz09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPSdtYi01IGNvbnRhaW5lciBvdGhlclBhZ2VzJz48aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QndC10L7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0Ys8L2g0PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+0J3QtdGCINCy0L7Qv9GA0L7RgdC+0LI8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5ub25hbnN3ZXJlZC5pc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgIG90aGVyUGFnZXMgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgINCX0LDQs9GA0YPQt9C60LAuLi4uLi4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlLmxlbmd0aD4wID8gPGRpdiBjbGFzc05hbWU9J3RsZ21zZyBhbGVydCBhbGVydC1pbmZvJz57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PjogPGRpdj48L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdtYi0zIHRleHQtY2VudGVyJz7QndC10L7RgtCy0LXRh9C10L3QvdGL0LUg0LLQvtC/0YDQvtGB0YsgKHt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmxlbmd0aH0pPC9oND5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLm1hcChlbGVtPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCBtdC0yJyBrZXk9e2VsZW0uaWR9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2UoZWxlbS5pZCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQtYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RpbnlkYXRlJz57bmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgaG91cjonbnVtZXJpYycsIG1pbnV0ZTonbnVtZXJpYycgfSkuZm9ybWF0KG5ldyBEYXRlKERhdGUucGFyc2UoZWxlbS5jcmVhdGVkX2F0KSkpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2NhcmQtdGV4dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCY0LzRjzoge2VsZW0ubmFtZX0gPGJyPjwvYnI+0JjQmNCdOiB7ZWxlbS5paW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPtCS0L7Qv9GA0L7RgToge2VsZW0ucXVlc3Rpb259PC9pPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxNb2RhbCAgaXNPcGVuPXt0aGlzLnN0YXRlLmNvbGxhcHNlfSB0b2dnbGU9e3RoaXMudG9nZ2xlQ29sbGFwc2UodGhpcy5zdGF0ZS5jb2xsYXBzZSl9ICAgc2l6ZT1cIm1kXCI+XHJcbiAgICAgICAgICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZURldGFpbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnPXt0aGlzLnByb3BzLm5vbmFuc3dlcmVkLm5vbmFuc3dlcmVkLmZpbHRlcihlbCA9PiBlbC5pZCA9PT0gcGFyc2VJbnQodGhpcy5zdGF0ZS5jb2xsYXBzZSkpWzBdfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0ge3RoaXMuc3RhdGUuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCA9IHt0aGlzLmhhbmRsZVN1Ym1pdH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuXHRcdFx0PC9Nb2RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRlbGVncmFtKSJdLCJzb3VyY2VSb290IjoiIn0=