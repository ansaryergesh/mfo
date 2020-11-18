webpackHotUpdate_N_E("pages/cabinet",{

/***/ "./pages/cabinet/index.js":
/*!********************************!*\
  !*** ./pages/cabinet/index.js ***!
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "D:\\icredit\\server-zaymi\\zaymikz\\pages\\cabinet\\index.js";

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
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then(function (response) {
                  if (response.data.success == true) {
                    next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/cabinet/repeated');

                    _this2.setState({
                      btnLoading: false
                    });
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
        children: [this.state.btnLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 36
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 76
        }, this), this.props.userReducer.authenticatingUser === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 65
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "modelLoader loaded"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 105
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          className: "text-center",
          children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), "   ", this.props.userReducer.user.UF_5, " ", this.props.userReducer.user.UF_6, " !"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "zayavkaBlock container col-md-8 col-8 mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
            children: "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
            className: "text-center",
            children: "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0435\u0449\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
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
              lineNumber: 58,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwiQ2FiaW5ldCIsInByb3BzIiwiYnRuTG9hZGluZyIsInNldFN0YXRlIiwiYXhpb3MiLCJnZXQiLCJ1c2VyIiwiVUZfNCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwibWVzc2FnZSIsImF1dGhlbnRpY2F0aW5nVXNlciIsImhlbGxvVXNlciIsIlVGXzUiLCJVRl82IiwiaGFuZGxlUmVwZWF0ZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQ0xDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQztBQURkLEdBQVA7QUFHRCxDQUpEOztJQVFNQyxPOzs7OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0gsS0FBTCxHQUFhO0FBQ1hJLGdCQUFVLEVBQUU7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7Ozs7Ozs7Ozs7QUFFQyxxQkFBS0MsUUFBTCxDQUFlO0FBQ2JELDRCQUFVLEVBQUU7QUFEQyxpQkFBZjs7dUJBR01FLDZDQUFLLENBQUNDLEdBQU4sdURBQXlELEtBQUtKLEtBQUwsQ0FBV0YsV0FBWCxDQUF1Qk8sSUFBdkIsQ0FBNEJDLElBQXJGLEdBQ0hDLElBREcsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsc0JBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUFkLElBQXlCLElBQTVCLEVBQWtDO0FBQ2hDQyx1RUFBTSxDQUFDQyxJQUFQLENBQVksbUJBQVo7O0FBQ0EsMEJBQUksQ0FBQ1YsUUFBTCxDQUFlO0FBQ2JELGdDQUFVLEVBQUU7QUFEQyxxQkFBZjtBQUdELG1CQUxELE1BTUs7QUFDSFksMkJBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBQ0FPLHNFQUFJLENBQUMsT0FBRCxZQUFhUCxRQUFRLENBQUNDLElBQVQsQ0FBY08sT0FBM0IsR0FBc0MsT0FBdEMsQ0FBSjs7QUFDQSwwQkFBSSxDQUFDZCxRQUFMLENBQWM7QUFDWkQsZ0NBQVUsRUFBRTtBQURBLHFCQUFkO0FBR0Q7QUFDRixpQkFmRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBa0JDO0FBQUE7O0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxtQkFDRyxLQUFLSixLQUFMLENBQVdJLFVBQVgsZ0JBQTBCO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTFCLGdCQUFrRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURyRSxFQUVHLEtBQUtELEtBQUwsQ0FBV0YsV0FBWCxDQUF1Qm1CLGtCQUF2QixLQUE4QyxJQUE5QyxnQkFBdUQ7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdkQsZ0JBQStGO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmxHLGVBR0U7QUFBSSxtQkFBUyxFQUFDLGFBQWQ7QUFBQSxxQkFBNkJDLGtFQUFTLEVBQXRDLFNBQTZDLEtBQUtsQixLQUFMLENBQVdGLFdBQVgsQ0FBdUJPLElBQXZCLENBQTRCYyxJQUF6RSxPQUFnRixLQUFLbkIsS0FBTCxDQUFXRixXQUFYLENBQXVCTyxJQUF2QixDQUE0QmUsSUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLDRDQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFJLHFCQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQUdFO0FBQUsscUJBQVMsRUFBQyxzQkFBZjtBQUFBLG1DQUNBO0FBQVEsdUJBQVMsRUFBQyxNQUFsQjtBQUF5QixxQkFBTyxFQUFFO0FBQUEsdUJBQU0sTUFBSSxDQUFDQyxjQUFMLEVBQU47QUFBQSxlQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBY0Q7Ozs7RUE3Q21CQyw0Q0FBSyxDQUFDQyxTLEdBZ0Q1QjtBQUNBO0FBQ0E7OztBQUVlQyx5SUFBUSxDQUFDQywyREFBTyxDQUFDN0IsZUFBRCxDQUFQLENBQXlCRyxPQUF6QixDQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQuODNhNjUzNjRlYzVkOGUzODhiOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG9jcy93aXRoQXV0aCdcclxuaW1wb3J0IHVzZXJzUmVkdWNlciBmcm9tICcuLi8uLi9zdG9yZS9yZWR1Y2Vycy91c2VyUmVkdWNlcidcclxuaW1wb3J0IHtoZWxsb1VzZXJ9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2hlbGxvJ1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1zcGlubmVyLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJSZWR1Y2VyOiBzdGF0ZS51c2VyUmVkdWNlclxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5jbGFzcyBDYWJpbmV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGhhbmRsZVJlcGVhdGVkKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xyXG4gICAgICBidG5Mb2FkaW5nOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3JlcGVhdFVzZXI/aWluPSR7dGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyLlVGXzR9YClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5zdWNjZXNzID09IHRydWUpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXBlYXRlZCcpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgc3dhbChcIk9vcHMhXCIsIGAke3Jlc3BvbnNlLmRhdGEubWVzc2FnZX1gLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGJ0bkxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzJz5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5idG5Mb2FkaW5nID8gKCA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pil9XHJcbiAgICAgICAge3RoaXMucHJvcHMudXNlclJlZHVjZXIuYXV0aGVudGljYXRpbmdVc2VyID09PSB0cnVlID8gKCA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyXCI+PC9kaXY+KSA6ICg8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsTG9hZGVyIGxvYWRlZFwiPjwvZGl2Pil9XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPntoZWxsb1VzZXIoKX0gICB7dGhpcy5wcm9wcy51c2VyUmVkdWNlci51c2VyLlVGXzV9IHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNn0gITwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3pheWF2a2FCbG9jayBjb250YWluZXIgY29sLW1kLTggY29sLTggbXQtNSc+XHJcbiAgICAgICAgICA8aDU+0JzQvtC4INC30LDRj9Cy0LrQuDwvaDU+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+0JLQsNGI0LAg0LfQsNGP0LLQutCwINC10YnQtSDQvdCwINC+0LHRgNCw0LHQvtGC0LrQtTwvaDU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcGVhdEJ0biBmb3JtLWdyb3VwXCIgPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J210LTMnIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVwZWF0ZWQoKX0+0J/QvtCy0YLQvtGA0L3Ri9C5INC30LDQudC8PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2Vyc1JlZHVjZXI6IHsgdXNlcjogeyBVRjl9IH0gfSkgPT4gKHtcclxuLy8gICB1c2VybmFtZTogVUY5XHJcbi8vIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2FiaW5ldCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9