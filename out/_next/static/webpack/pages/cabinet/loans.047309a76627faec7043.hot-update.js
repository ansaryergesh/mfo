webpackHotUpdate_N_E("pages/cabinet/loans",{

/***/ "./pages/cabinet/loans.js":
/*!********************************!*\
  !*** ./pages/cabinet/loans.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/hocs/withAuth */ "./components/hocs/withAuth.js");
/* harmony import */ var _store_reducers_userReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/reducers/userReducer */ "./store/reducers/userReducer.js");
/* harmony import */ var _defaults_hello__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../defaults/hello */ "./defaults/hello.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spinner-material */ "./node_modules/react-spinner-material/lib/index.js");
/* harmony import */ var react_spinner_material__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinner_material__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "D:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\cabinet\\loans.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var mapStateToProps = function mapStateToProps(state) {
  return {
    userReducer: state.userReducer
  };
};

var Cabinet = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cabinet, _React$Component);

  var _super = _createSuper(Cabinet);

  function Cabinet(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Cabinet);

    _this = _super.call(this, props);
    _this.state = {
      btnLoading: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Cabinet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
    }
  }, {
    key: "handleRepeated",
    value: function () {
      var _handleRepeated = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  btnLoading: true
                });
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_17___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then(function (response) {
                  if (response.data.success == true) {
                    next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/cabinet/repeated');

                    _this2.setState({
                      btnLoading: false
                    });
                  }

                  if (response.data.success == false) {
                    _this2.setState({
                      btnLoading: false
                    });

                    sweetalert__WEBPACK_IMPORTED_MODULE_15___default()("Oops!", "".concat(response.data.message || "Заполнение анкета не завершена. свяжитесь с нами по телефону +7 700 750 15 00", " "), "error");
                  } else {
                    console.log(response);
                    sweetalert__WEBPACK_IMPORTED_MODULE_15___default()("Oops!", "".concat(response.data.message), "error");

                    _this2.setState({
                      btnLoading: false
                    });
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleRepeated() {
        return _handleRepeated.apply(this, arguments);
      }

      return handleRepeated;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "otherPages",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 | I-credit.kz"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 9
        }, this), this.state.btnLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 36
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 76
        }, this), this.props.userReducer.authenticatingUser === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 65
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 105
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: "welcome text-center",
          children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), "   ", this.props.userReducer.user.UF_5, " ", this.props.userReducer.user.UF_6, " !"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "zayavkaBlock container col-md-8 col-11 mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
            children: "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
            className: "text-center",
            children: "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0435\u0449\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "repeatBtn form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              className: "mt-3",
              onClick: function onClick() {
                return _this3.handleRepeated();
              },
              children: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u0439\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, this);
    }
  }]);

  return Cabinet;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
//   username: UF9
// })


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Cabinet)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9sb2Fucy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwiQ2FiaW5ldCIsInByb3BzIiwiYnRuTG9hZGluZyIsIndpbmRvdyIsInNjcm9sbFRvIiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInVzZXIiLCJVRl80IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwic3dhbCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiaGVsbG9Vc2VyIiwiVUZfNSIsIlVGXzYiLCJoYW5kbGVSZXBlYXRlZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQ0xDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQztBQURkLEdBQVA7QUFHRCxDQUpEOztJQVFNQyxPOzs7OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0gsS0FBTCxHQUFhO0FBQ1hJLGdCQUFVLEVBQUU7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7O3dDQUNtQjtBQUNsQkMsWUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0Q7Ozs7Ozs7Ozs7O0FBRUMscUJBQUtDLFFBQUwsQ0FBZTtBQUNiSCw0QkFBVSxFQUFFO0FBREMsaUJBQWY7O3VCQUdNSSw2Q0FBSyxDQUFDQyxHQUFOLHVEQUF5RCxL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YWdlcy9jYWJpbmV0L2xvYW5zLjA0NzMwOWE3NjYyN2ZhZWM3MDQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvY3Mvd2l0aEF1dGgnXHJcbmltcG9ydCB1c2Vyc1JlZHVjZXIgZnJvbSAnLi4vLi4vc3RvcmUvcmVkdWNlcnMvdXNlclJlZHVjZXInXHJcbmltcG9ydCB7aGVsbG9Vc2VyfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9oZWxsbydcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3Qtc3Bpbm5lci1tYXRlcmlhbCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlclxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBDYWJpbmV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gIH1cclxuICBhc3luYyBoYW5kbGVSZXBlYXRlZCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgYnRuTG9hZGluZzogdHJ1ZVxyXG4gICAgfSlcclxuICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZXBlYXRVc2VyP2lpbj0ke3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl80fWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuc3VjY2VzcyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvcmVwZWF0ZWQnKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICAgICAgICBidG5Mb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgYCR7cmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8IFwi0JfQsNC/0L7Qu9C90LXQvdC40LUg0LDQvdC60LXRgtCwINC90LUg0LfQsNCy0LXRgNGI0LXQvdCwLiDRgdCy0Y/QttC40YLQtdGB0Ywg0YEg0L3QsNC80Lgg0L/QviDRgtC10LvQtdGE0L7QvdGDICs3IDcwMCA3NTAgMTUgMDBcIiB9IGAsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgYCR7cmVzcG9uc2UuZGF0YS5tZXNzYWdlfWAsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J290aGVyUGFnZXMnPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPtCa0LDQsdC40L3QtdGCIHwgSS1jcmVkaXQua3o8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5idG5Mb2FkaW5nID8gKCA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pil9XHJcbiAgICAgICAge3RoaXMucHJvcHMudXNlclJlZHVjZXIuYXV0aGVudGljYXRpbmdVc2VyID09PSB0cnVlID8gKCA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pil9XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWxjb21lIHRleHQtY2VudGVyJz57aGVsbG9Vc2VyKCl9ICAge3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl81fSB7dGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyLlVGXzZ9ICE8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3pheWF2a2FCbG9jayBjb250YWluZXIgY29sLW1kLTggY29sLTExIG10LTUnPlxyXG4gICAgICAgICAgPGg1PtCc0L7QuCDQt9Cw0Y/QstC60Lg8L2g1PlxyXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPtCS0LDRiNCwINC30LDRj9Cy0LrQsCDQtdGJ0LUg0L3QsCDQvtCx0YDQsNCx0L7RgtC60LU8L2g1PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBlYXRCdG4gZm9ybS1ncm91cFwiID5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdtdC0zJyBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlcGVhdGVkKCl9PtCf0L7QstGC0L7RgNC90YvQuSDQt9Cw0LnQvDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdXNlcnNSZWR1Y2VyOiB7IHVzZXI6IHsgVUY5fSB9IH0pID0+ICh7XHJcbi8vICAgdXNlcm5hbWU6IFVGOVxyXG4vLyB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhYmluZXQpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==