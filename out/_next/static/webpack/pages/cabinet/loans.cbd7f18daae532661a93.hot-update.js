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
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_shared_userStatus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/shared/userStatus */ "./components/shared/userStatus.js");
/* harmony import */ var _components_shared_userHistory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/shared/userHistory */ "./components/shared/userHistory.js");








var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\cabinet\\loans.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var mapStateToProps = function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
    userStatus: state.userStatus,
    userHistory: state.userHistory
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUserStatus: function fetchUserStatus() {
      return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_14__["fetchUserStatus"])());
    },
    fetchUserHistory: function fetchUserHistory() {
      return dispatch(Object(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_14__["fetchUserHistory"])());
    }
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
      this.props.fetchUserStatus();
      this.props.fetchUserHistory();
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
                return axios__WEBPACK_IMPORTED_MODULE_18___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then(function (response) {
                  if (response.data.success == true) {
                    next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push('/cabinet/repeated');

                    _this2.setState({
                      btnLoading: false
                    });
                  }

                  if (response.data.success == false) {
                    _this2.setState({
                      btnLoading: false
                    });

                    sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "".concat(response.data.message || "Заполнение анкета не завершена. свяжитесь с нами по телефону +7 700 750 15 00", " "), "error");
                  } else {
                    console.log(response);
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_17___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "\u041A\u0430\u0431\u0438\u043D\u0435\u0442 | I-credit.kz"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this), this.state.btnLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this), this.props.userReducer.authenticatingUser === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
          className: "welcome text-center",
          children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), " ", this.props.userReducer.user.UF_5, " " + this.props.userReducer.user.UF_6, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }, this), this.props.userStatus.userStatus.success === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "repeatBtn form-group",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              className: "mt-5",
              onClick: function onClick() {
                return _this3.handleRepeated();
              },
              children: "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0437\u0430\u0439\u043C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, this), this.props.userStatus.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "mt-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            "class": "placeholder",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "loader"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "loader"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "loader"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_userStatus__WEBPACK_IMPORTED_MODULE_19__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, this), this.props.userHistory.isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            "class": "placeholder mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "loader"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "loader"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "loader"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_shared_userHistory__WEBPACK_IMPORTED_MODULE_20__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }, this);
    }
  }]);

  return Cabinet;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); // const mapStateToProps = ({ usersReducer: { user: { UF9} } }) => ({
// username: UF9 })


/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hocs_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Cabinet)));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9sb2Fucy5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlclN0YXR1cyIsInVzZXJIaXN0b3J5IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaFVzZXJTdGF0dXMiLCJmZXRjaFVzZXJIaXN0b3J5IiwiQ2FiaW5ldCIsInByb3BzIiwiYnRuTG9hZGluZyIsIndpbmRvdyIsInNjcm9sbFRvIiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInVzZXIiLCJVRl80IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJwdXNoIiwic3dhbCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiaGVsbG9Vc2VyIiwiVUZfNSIsIlVGXzYiLCJoYW5kbGVSZXBlYXRlZCIsImlzTG9hZGluZyIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQUNDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUFwQjtBQUFpQ0MsY0FBVSxFQUFFRixLQUFLLENBQUNFLFVBQW5EO0FBQStEQyxlQUFXLEVBQUVILEtBQUssQ0FBQ0c7QUFBbEYsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsU0FBZTtBQUN4Q0MsbUJBQWUsRUFBRTtBQUFBLGFB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REFBTyxDQUFDdEMsZUFBRCxFQUFrQkssa0JBQWxCLENBQVAsQ0FBNkNJLE9BQTdDLENBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9sb2Fucy5jYmQ3ZjE4ZGFhZTUzMjY2MWE5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoJ1xyXG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyJ1xyXG5pbXBvcnQge2hlbGxvVXNlcn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaGVsbG8nXHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQge2ZldGNoVXNlclN0YXR1cywgZmV0Y2hVc2VySGlzdG9yeX0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFN0YXR1cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC91c2VyU3RhdHVzJ1xyXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC91c2VySGlzdG9yeSdcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xyXG4gIHJldHVybiB7dXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyLCB1c2VyU3RhdHVzOiBzdGF0ZS51c2VyU3RhdHVzLCB1c2VySGlzdG9yeTogc3RhdGUudXNlckhpc3Rvcnl9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBmZXRjaFVzZXJTdGF0dXM6ICgpID0+IGRpc3BhdGNoKGZldGNoVXNlclN0YXR1cygpKSxcclxuICBmZXRjaFVzZXJIaXN0b3J5OiAoKSA9PiBkaXNwYXRjaChmZXRjaFVzZXJIaXN0b3J5KCkpXHJcbn0pXHJcblxyXG5jbGFzcyBDYWJpbmV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICB0aGlzXHJcbiAgICAgIC5wcm9wc1xyXG4gICAgICAuZmV0Y2hVc2VyU3RhdHVzKClcclxuICAgIHRoaXNcclxuICAgICAgLnByb3BzXHJcbiAgICAgIC5mZXRjaFVzZXJIaXN0b3J5KClcclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlUmVwZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtidG5Mb2FkaW5nOiB0cnVlfSlcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVwZWF0VXNlcj9paW49JHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNH1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXBlYXRlZCcpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtidG5Mb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2J0bkxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIHN3YWwoXCJPb3BzIVwiLCBgJHtyZXNwb25zZS5kYXRhLm1lc3NhZ2UgfHwgXCLQl9Cw0L/QvtC70L3QtdC90LjQtSDQsNC90LrQtdGC0LAg0L3QtSDQt9Cw0LLQtdGA0YjQtdC90LAuINGB0LLRj9C20LjRgtC10YHRjCDRgSDQvdCw0LzQuCDQv9C+INGC0LXQu9C10YTQvtC90YMgKzcgNzAwIDc1MCAxNSAwMFwifSBgLCBcImVycm9yXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nb3RoZXJQYWdlcyc+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+0JrQsNCx0LjQvdC10YIgfCBJLWNyZWRpdC5rejwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgXHJcbiAgICAgICAge3RoaXMuc3RhdGUuYnRuTG9hZGluZ1xyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICB7dGhpcy5wcm9wcy51c2VyUmVkdWNlci5hdXRoZW50aWNhdGluZ1VzZXIgPT09IHRydWVcclxuICAgICAgICAgID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlciBsb2FkZWRcIj48L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd3ZWxjb21lIHRleHQtY2VudGVyJz57aGVsbG9Vc2VyKCl9IHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNX1cclxuICAgICAgICAgIHtcIiBcIit0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNn1cclxuICAgICAgICAgICE8L3A+XHJcbiAgICAgICAge3RoaXMucHJvcHMudXNlclN0YXR1cy51c2VyU3RhdHVzLnN1Y2Nlc3MgPT09IGZhbHNlXHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J210LTUnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVwZWF0ZWQoKX0+0J/QvtCy0YLQvtGA0L3Ri9C5INC30LDQudC8PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IChcclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXJTdGF0dXMuaXNMb2FkaW5nXHJcbiAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICAgIDogPFN0YXR1cy8+fVxyXG4gICAgICAgIHt0aGlzLnByb3BzLnVzZXJIaXN0b3J5LmlzTG9hZGluZ1xyXG4gICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYWNlaG9sZGVyIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICA6IDxIaXN0b3J5Lz59XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHVzZXJzUmVkdWNlcjogeyB1c2VyOiB7IFVGOX0gfSB9KSA9PiAoe1xyXG4vLyB1c2VybmFtZTogVUY5IH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDYWJpbmV0KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=