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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          className: "text-center",
          children: [Object(_defaults_hello__WEBPACK_IMPORTED_MODULE_12__["helloUser"])(), "   ", this.props.userReducer.user.UF_5, " ", this.props.userReducer.user.UF_6, " !"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "zayavkaBlock container col-md-8 col-8 mt-5",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
            children: "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
            className: "text-center",
            children: "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u0435\u0449\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0435"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
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
              lineNumber: 57,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9pbmRleC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwiQ2FiaW5ldCIsInByb3BzIiwiYnRuTG9hZGluZyIsInNldFN0YXRlIiwiYXhpb3MiLCJnZXQiLCJ1c2VyIiwiVUZfNCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJzd2FsIiwibWVzc2FnZSIsImhlbGxvVXNlciIsIlVGXzUiLCJVRl82IiwiaGFuZGxlUmVwZWF0ZWQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUssRUFBSTtBQUMvQixTQUFPO0FBQ0xDLGVBQVcsRUFBRUQsS0FBSyxDQUFDQztBQURkLEdBQVA7QUFHRCxDQUpEOztJQVFNQyxPOzs7OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0gsS0FBTCxHQUFhO0FBQ1hJLGdCQUFVLEVBQUU7QUFERCxLQUFiO0FBRmlCO0FBS2xCOzs7Ozs7Ozs7Ozs7QUFFQyxxQkFBS0MsUUFBTCxDQUFlO0FBQ2JELDRCQUFVLEVBQUU7QUFEQyxpQkFBZjs7dUJBR01FLDZDQUFLLENBQUNDLEdBQU4sdURBQXlELEtBQUtKLEtBQUwsQ0FBV0YsV0FBWCxDQUF1Qk8sSUFBdkIsQ0FBNEJDLElBQXJGLEdBQ0hDLElBREcsQ0FDRSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsc0JBQUdBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxPQUFkLElBQXlCLElBQTVCLEVBQWtDO0FBQ2hDQyx1RUFBTSxDQUFDQyxJQUFQLENBQVksbUJBQVo7O0FBQ0EsMEJBQUksQ0FBQ1YsUUFBTCxDQUFlO0FBQ2JELGdDQUFVLEVBQUU7QUFEQyxxQkFBZjtBQUdELG1CQUxELE1BTUs7QUFDSFksMkJBQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBQ0FPLHNFQUFJLENBQUMsT0FBRCxZQUFhUCxRQUFRLENBQUNDLElBQVQsQ0FBY08sT0FBM0IsR0FBc0MsT0FBdEMsQ0FBSjs7QUFDQSwwQkFBSSxDQUFDZCxRQUFMLENBQWM7QUFDWkQsZ0NBQVUsRUFBRTtBQURBLHFCQUFkO0FBR0Q7QUFDRixpQkFmRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBa0JDO0FBQUE7O0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxtQkFDRyxLQUFLSixLQUFMLENBQVdJLFVBQVgsZ0JBQTBCO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQTFCLGdCQUFrRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURyRSxlQUVFO0FBQUksbUJBQVMsRUFBQyxhQUFkO0FBQUEscUJBQTZCZ0Isa0VBQVMsRUFBdEMsU0FBNkMsS0FBS2pCLEtBQUwsQ0FBV0YsV0FBWCxDQUF1Qk8sSUFBdkIsQ0FBNEJhLElBQXpFLE9BQWdGLEtBQUtsQixLQUFMLENBQVdGLFdBQVgsQ0FBdUJPLElBQXZCLENBQTRCYyxJQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFLLG1CQUFTLEVBQUMsNENBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUkscUJBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBR0U7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0E7QUFBUSx1QkFBUyxFQUFDLE1BQWxCO0FBQXlCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTSxNQUFJLENBQUNDLGNBQUwsRUFBTjtBQUFBLGVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFhRDs7OztFQTVDbUJDLDRDQUFLLENBQUNDLFMsR0ErQzVCO0FBQ0E7QUFDQTs7O0FBRWVDLHlJQUFRLENBQUNDLDJEQUFPLENBQUM1QixlQUFELENBQVAsQ0FBeUJHLE9BQXpCLENBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC42NDNhODRhMWRmZGNlMWJmZTNjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob2NzL3dpdGhBdXRoJ1xyXG5pbXBvcnQgdXNlcnNSZWR1Y2VyIGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyJ1xyXG5pbXBvcnQge2hlbGxvVXNlcn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaGVsbG8nXHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5uZXItbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdXNlclJlZHVjZXI6IHN0YXRlLnVzZXJSZWR1Y2VyXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmNsYXNzIENhYmluZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlUmVwZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlICh7XHJcbiAgICAgIGJ0bkxvYWRpbmc6IHRydWVcclxuICAgIH0pXHJcbiAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVwZWF0VXNlcj9paW49JHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNH1gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5kYXRhLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcGVhdGVkJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtcclxuICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICBzd2FsKFwiT29wcyFcIiwgYCR7cmVzcG9uc2UuZGF0YS5tZXNzYWdlfWAsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J290aGVyUGFnZXMnPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmJ0bkxvYWRpbmcgPyAoIDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXJcIj48L2Rpdj4pIDogKDxkaXYgY2xhc3NOYW1lPVwibW9kZWxMb2FkZXIgbG9hZGVkXCI+PC9kaXY+KX1cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+e2hlbGxvVXNlcigpfSAgIHt0aGlzLnByb3BzLnVzZXJSZWR1Y2VyLnVzZXIuVUZfNX0ge3RoaXMucHJvcHMudXNlclJlZHVjZXIudXNlci5VRl82fSAhPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nemF5YXZrYUJsb2NrIGNvbnRhaW5lciBjb2wtbWQtOCBjb2wtOCBtdC01Jz5cclxuICAgICAgICAgIDxoNT7QnNC+0Lgg0LfQsNGP0LLQutC4PC9oNT5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QktCw0YjQsCDQt9Cw0Y/QstC60LAg0LXRidC1INC90LAg0L7QsdGA0LDQsdC+0YLQutC1PC9oNT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwZWF0QnRuIGZvcm0tZ3JvdXBcIiA+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nbXQtMycgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVSZXBlYXRlZCgpfT7Qn9C+0LLRgtC+0YDQvdGL0Lkg0LfQsNC50Lw8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHVzZXJzUmVkdWNlcjogeyB1c2VyOiB7IFVGOX0gfSB9KSA9PiAoe1xyXG4vLyAgIHVzZXJuYW1lOiBVRjlcclxuLy8gfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDYWJpbmV0KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=