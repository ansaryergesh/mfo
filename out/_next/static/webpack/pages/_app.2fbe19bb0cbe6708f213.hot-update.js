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

  function TechProblem() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TechProblem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      mainMessage: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "mainMessageClose", function () {
      _this.setState({
        mainMessage: false
      });
    });

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
          lineNumber: 22,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
          children: "\u041F\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041F\u0440\u043E\u0441\u0438\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 Whatsapp \u0438\u043B\u0438 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B info@i-credit.kz"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvVGVjaFByb2JsZW1NZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlRlY2hQcm9ibGVtIiwibWFpbk1lc3NhZ2UiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJtYWluTWVzc2FnZUNsb3NlIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsaUJBQVcsRUFBRTtBQURQLEs7OzJOQUlXLFlBQU07QUFDdkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELG1CQUFXLEVBQUM7QUFEQSxPQUFkO0FBR0QsSzs7Ozs7Ozt3Q0FDbUI7QUFBQTs7QUFDbEJFLGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQ0MsZ0JBQUw7QUFDRCxPQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0Q7Ozs2QkFDUTtBQUNMLDBCQUNILHFFQUFDLGdEQUFEO0FBQU8sY0FBTSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0osV0FBMUI7QUFBdUMsY0FBTSxFQUFFLEtBQUtHLGdCQUFwRDtBQUFzRSxZQUFJLEVBQUMsSUFBM0U7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHO0FBUUg7Ozs7RUF4QnVCRSw0Q0FBSyxDQUFDQyxTOztBQTJCakJQLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmZiZTE5YmIwY2JlNjcwOGYyMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNsYXNzIFRlY2hQcm9ibGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIG1haW5NZXNzYWdlOiB0cnVlXHJcbiAgfVxyXG4gICAgXHJcbiAgbWFpbk1lc3NhZ2VDbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtYWluTWVzc2FnZTpmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5tYWluTWVzc2FnZUNsb3NlKClcclxuICAgIH0sNTAwMClcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICA8TW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm1haW5NZXNzYWdlfSB0b2dnbGU9e3RoaXMubWFpbk1lc3NhZ2VDbG9zZX0gc2l6ZT1cIm1kXCI+XHJcbiAgICAgPE1vZGFsSGVhZGVyPtCf0YDQvtGB0LjQvCDQv9GA0L7RidC10L3QuNGPINC30LAg0LTQvtGB0YLQsNCy0LvQtdC90L3Ri9C1INC90LXRg9C00L7QsdGB0YLQstCwPC9Nb2RhbEhlYWRlcj5cclxuICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICDQn9C+INGC0LXRhdC90LjRh9C10YHQutC40Lwg0L/RgNC40YfQuNC90LDQvCDQs9C+0YDQvtC00YHQutC+0Lkg0L3QvtC80LXRgCDQvdC1INC00L7RgdGC0YPQv9C10L0uINCf0YDQvtGB0LjQvCDQvtCx0YDQsNGJ0LDRgtGM0YHRjyDRh9C10YDQtdC3IFdoYXRzYXBwINC40LvQuCDQvdCwINCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLIGluZm9AaS1jcmVkaXQua3pcclxuICAgICA8L01vZGFsQm9keT5cclxuICAgPC9Nb2RhbD5cclxuICAgICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaFByb2JsZW07Il0sInNvdXJjZVJvb3QiOiIifQ==