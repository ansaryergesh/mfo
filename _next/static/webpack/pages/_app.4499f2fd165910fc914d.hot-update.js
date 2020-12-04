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
      /*#__PURE__*/
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        isOpen: this.state.mainMessage,
        toggle: this.mainMessageClose,
        size: "md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
          children: "\u041F\u0440\u043E\u0441\u0438\u043C \u043F\u0440\u043E\u0449\u0435\u043D\u0438\u044F \u0437\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0435\u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ModalBody"], {
          children: "\u041F\u043E \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0430\u043C \u0433\u043E\u0440\u043E\u0434\u0441\u043A\u043E\u0439 \u043D\u043E\u043C\u0435\u0440 \u043D\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D. \u041F\u0440\u043E\u0441\u0438\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 Whatsapp \u0438\u043B\u0438 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B info@i-credit.kz"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
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

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");
/* harmony import */ var _components_shared_TechProblemMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/TechProblemMessage */ "./components/shared/TechProblemMessage.js");
/* harmony import */ var _components_shared_ScrollToTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/ScrollToTop */ "./components/shared/ScrollToTop.js");
/* harmony import */ var _components_MainComponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainComponent */ "./components/MainComponent.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_21__);







var _jsxFileName = "E:\\icredit\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












 // import {ConfigureStore} from '../redux/reducers/configureStore'





var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var hours = 1.2;
      var now = new Date().getTime();
      var setupTime = localStorage.getItem('setupTime');

      if (setupTime == null) {
        localStorage.setItem('setupTime', now);
      } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
          localStorage.clear();
          localStorage.setItem('setupTime', now);
        }
      }

      setTimeout(function () {
        _this.mainMessageClose();
      }, 5000);
    }
  }, {
    key: "render",
    value: function render() {
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;

      var isGetMoney = function isGetMoney() {
        return Component.name === 'FormStep';
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
        store: _store_store__WEBPACK_IMPORTED_MODULE_19__["default"],
        children: [!isGetMoney() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          href: "https://api.whatsapp.com/send?phone=+77015382439",
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            className: "imgwhatsapp",
            src: __webpack_require__(/*! ../img/svg/whatsapp.svg */ "./img/svg/whatsapp.svg"),
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 107
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 32
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_20___default.a); //makeStore function that returns a new store for every request


var makeStore = function makeStore() {
  return _store_store__WEBPACK_IMPORTED_MODULE_19__["default"];
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_17__["createWrapper"])(makeStore);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      return dispatch(actions.fetchCurrentUser());
    }
  };
}; // //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);


/* harmony default export */ __webpack_exports__["default"] = (_c = wrapper.withRedux(MyApp)); // export default MyApp

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvVGVjaFByb2JsZW1NZXNzYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIlRlY2hQcm9ibGVtIiwibWFpbk1lc3NhZ2UiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJtYWluTWVzc2FnZUNsb3NlIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIk15QXBwIiwiaG91cnMiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSIsInNldHVwVGltZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiY2xlYXIiLCJwcm9wcyIsInBhZ2VQcm9wcyIsImlzR2V0TW9uZXkiLCJuYW1lIiwic3RvcmUiLCJyZXF1aXJlIiwiQXBwIiwibWFrZVN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJsb2dnZWRJbiIsInVzZXJSZWR1Y2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJmZXRjaEN1cnJlbnRVc2VyIiwiYWN0aW9ucyIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsaUJBQVcsRUFBRTtBQURQLEs7OzJOQUlXLFlBQU07QUFDdkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELG1CQUFXLEVBQUM7QUFEQSxPQUFkO0FBR0QsSzs7Ozs7Ozt3Q0FDbUI7QUFBQTs7QUFDbEJFLGdCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUksQ0FBQ0MsZ0JBQUw7QUFDRCxPQUZTLEVBRVIsSUFGUSxDQUFWO0FBR0Q7Ozs2QkFDUTtBQUNSO0FBQUEsMkVBQUMsZ0RBQUQ7QUFBTyxjQUFNLEVBQUUsS0FBS0MsS0FBTCxDQUFXSixXQUExQjtBQUF1QyxjQUFNLEVBQUUsS0FB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U0FBckJBLGtCQUFxQixDQUFBQyxRQUFRO0FBQUEsU0FBSztBQUN0Q0Msb0JBQWdCLEVBQUU7QUFBQSxhQUFNRCxRQUFRLENBQUNFLE9BQU8sQ0FBQ0QsZ0JBQVIsRUFBRCxDQUFkO0FBQUE7QUFEb0IsR0FBTDtBQUFBLENBQW5DLEMsQ0FJQTtBQUNBOzs7QUFDZSxvRUFBQVAsT0FBTyxDQUFDUyxTQUFSLENBQWtCM0IsS0FBbEIsQ0FBZixFLENBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NDk5ZjJmZDE2NTkxMGZjOTE0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY2xhc3MgVGVjaFByb2JsZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbWFpbk1lc3NhZ2U6IHRydWVcclxuICB9XHJcbiAgICBcclxuICBtYWluTWVzc2FnZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1haW5NZXNzYWdlOmZhbHNlXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLm1haW5NZXNzYWdlQ2xvc2UoKVxyXG4gICAgfSw1MDAwKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUubWFpbk1lc3NhZ2V9IHRvZ2dsZT17dGhpcy5tYWluTWVzc2FnZUNsb3NlfSBzaXplPVwibWRcIj5cclxuICAgICA8TW9kYWxIZWFkZXI+0J/RgNC+0YHQuNC8INC/0YDQvtGJ0LXQvdC40Y8g0LfQsCDQtNC+0YHRgtCw0LLQu9C10L3QvdGL0LUg0L3QtdGD0LTQvtCx0YHRgtCy0LA8L01vZGFsSGVhZGVyPlxyXG4gICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgINCf0L4g0YLQtdGF0L3QuNGH0LXRgdC60LjQvCDQv9GA0LjRh9C40L3QsNC8INCz0L7RgNC+0LTRgdC60L7QuSDQvdC+0LzQtdGAINC90LUg0LTQvtGB0YLRg9C/0LXQvS4g0J/RgNC+0YHQuNC8INC+0LHRgNCw0YnQsNGC0YzRgdGPINGH0LXRgNC10LcgV2hhdHNhcHAg0LjQu9C4INC90LAg0LDQtNGA0LXRgSDRjdC70LXQutGC0YDQvtC90L3QvtC5INC/0L7Rh9GC0YsgaW5mb0BpLWNyZWRpdC5relxyXG4gICAgIDwvTW9kYWxCb2R5PlxyXG4gICA8L01vZGFsPlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaFByb2JsZW07IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLmNzcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyJ1xuaW1wb3J0IFRlY2hQcm9ibGVtIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL1RlY2hQcm9ibGVtTWVzc2FnZSdcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9TY3JvbGxUb1RvcCdcbmltcG9ydCBNYWluQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5IH0gZnJvbSAncmVhY3RzdHJhcCc7XG4vLyBpbXBvcnQge0NvbmZpZ3VyZVN0b3JlfSBmcm9tICcuLi9yZWR1eC9yZWR1Y2Vycy9jb25maWd1cmVTdG9yZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGhvdXJzID0gMS4yO1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB2YXIgc2V0dXBUaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NldHVwVGltZScpO1xuICAgIGlmIChzZXR1cFRpbWUgPT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHVwVGltZScsIG5vdylcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5vdyAtIHNldHVwVGltZSA+IGhvdXJzICogNjAgKiA2MCAqIDEwMDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NldHVwVGltZScsIG5vdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1haW5NZXNzYWdlQ2xvc2UoKVxuICAgIH0sNTAwMClcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICAvL3BhZ2VQcm9wcyB0aGF0IHdlcmUgcmV0dXJuZWQgIGZyb20gJ2dldEluaXRpYWxQcm9wcycgYXJlIHN0b3JlZCBpbiB0aGUgcHJvcHMgaS5lLiBwYWdlcHJvcHNcbiAgICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaXNHZXRNb25leSA9ICgpID0+IENvbXBvbmVudC5uYW1lPT09J0Zvcm1TdGVwJ1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgXG4gICAgICAgICAgICB7IWlzR2V0TW9uZXkoKSAmJiAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSs3NzAxNTM4MjQzOVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgY2xhc3NOYW1lPVwiaW1nd2hhdHNhcHBcIiBzcmM9e3JlcXVpcmUoXCIuLi9pbWcvc3ZnL3doYXRzYXBwLnN2Z1wiKX0gYWx0PVwiXCIgLz48L2E+fVxuICAgICAgICAgICAgPE5hdmJhci8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgey8qIDxNYWluQ29tcG9uZW50Lz4gKi99XG4gICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICk7XG4gIH1cbn1cblxuLy9tYWtlU3RvcmUgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3IHN0b3JlIGZvciBldmVyeSByZXF1ZXN0XG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2dnZWRJbjogc3RhdGUudXNlclJlZHVjZXIubG9nZ2VkSW5cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBmZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmZldGNoQ3VycmVudFVzZXIoKSksXG59KTtcblxuLy8gLy93aXRoUmVkdXggd3JhcHBlciB0aGF0IHBhc3NlcyB0aGUgc3RvcmUgdG8gdGhlIEFwcCBDb21wb25lbnRcbi8vIC8vIGV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZS53aXRoUmVkdXgoTXlBcHApO1xuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==