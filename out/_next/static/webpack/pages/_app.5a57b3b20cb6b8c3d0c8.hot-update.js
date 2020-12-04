webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/shared/TechProblemMessage.js":
/*!*************************************************!*\
  !*** ./components/shared/TechProblemMessage.js ***!
  \*************************************************/
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\components\\shared\\TechProblemMessage.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var TechProblem = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TechProblem, _React$Component);

  var _super = _createSuper(TechProblem);

  function TechProblem(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TechProblem);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "mainMessageClose", function () {
      _this.setState({
        mainMessage: false
      });
    });

    _this.state = {
      mainMessage: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TechProblem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.mainMessageClose();
      }, 5000);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.mainMessage,
        toggle: this.mainMessageClose,
        size: "md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
          children: "\u041F\u0440\u043E\u0441\u0438\u043C \u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
          children: "\u041F\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041F\u0440\u043E\u0441\u0438\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 Whatsapp \u0438\u043B\u0438 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B info@i-credit.kz"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 4
      }, this);
    }
  }]);

  return TechProblem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TechProblem);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvVGVjaFByb2JsZW1NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlRlY2hQcm9ibGVtIiwicHJvcHMiLCJzZXRTdGF0ZSIsIm1haW5NZXNzYWdlIiwic3RhdGUiLCJzZXRUaW1lb3V0IiwibWFpbk1lc3NhZ2VDbG9zZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsVzs7Ozs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsMk5BUUEsWUFBTTtBQUN2QixZQUFLQyxRQUFMLENBQWM7QUFDWkMsbUJBQVcsRUFBQztBQURBLE9BQWQ7QUFHRCxLQVprQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hELGlCQUFXLEVBQUU7QUFERixLQUFiO0FBRmlCO0FBS2xCOzs7O3dDQVFtQjtBQUFBOztBQUNsQkUsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSSxDQUFDQyxnQkFBTDtBQUNELE9BRlMsRUFFUixJQUZRLENBQVY7QUFHRDs7OzZCQUNRO0FBQ0wsMEJBQ0gscUVBQUMsZ0RBQUQ7QUFBTyxjQUFNLEVBQUUsS0FBS0YsS0FBTCxDQUFXRCxXQUExQjtBQUF1QyxjQUFNLEVBQUUsS0FBS0csZ0JBQXBEO0FBQXNFLFlBQUksRUFBQyxJQUEzRTtBQUFBLGdDQUNFLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREc7QUFRSDs7OztFQTVCdUJDLDRDQUFLLENBQUNDLFM7O0FBK0JqQlIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41YTU3YjNiMjBjYjZiOGMzZDBjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY2xhc3MgVGVjaFByb2JsZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtYWluTWVzc2FnZTogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAgIFxyXG4gIG1haW5NZXNzYWdlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFpbk1lc3NhZ2U6ZmFsc2VcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubWFpbk1lc3NhZ2VDbG9zZSgpXHJcbiAgICB9LDUwMDApXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgPE1vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5tYWluTWVzc2FnZX0gdG9nZ2xlPXt0aGlzLm1haW5NZXNzYWdlQ2xvc2V9IHNpemU9XCJtZFwiPlxyXG4gICAgIDxNb2RhbEhlYWRlcj7Qn9GA0L7RgdC40Lwg0L/RgNC+0YnQtdC90LjRjyDQt9CwINC00L7RgdGC0LDQstC70LXQvdC90YvQtSDQvdC10YPQtNC+0LHRgdGC0LLQsDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgPE1vZGFsQm9keT5cclxuICAgICAg0J/QviDRgtC10YXQvdC40YfQtdGB0LrQuNC8INC/0YDQuNGH0LjQvdCw0Lwg0LPQvtGA0L7QtNGB0LrQvtC5INC90L7QvNC10YAg0L3QtSDQtNC+0YHRgtGD0L/QtdC9LiDQn9GA0L7RgdC40Lwg0L7QsdGA0LDRidCw0YLRjNGB0Y8g0YfQtdGA0LXQtyBXaGF0c2FwcCDQuNC70Lgg0L3QsCDQsNC00YDQtdGBINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0L/QvtGH0YLRiyBpbmZvQGktY3JlZGl0Lmt6XHJcbiAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgIDwvTW9kYWw+XHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlY2hQcm9ibGVtOyJdLCJzb3VyY2VSb290IjoiIn0=