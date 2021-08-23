webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "E:\\job\\server-zaymi\\zaymikz \u2014 \u043A\u043E\u043F\u0438\u044F\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }














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
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var compName = Component.name;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
        store: _store_store__WEBPACK_IMPORTED_MODULE_16__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "chatBlock",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            href: "https://t.me/icredit_kzbot",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              className: "imgwhatsapp mb-3",
              src: __webpack_require__(/*! ../img/svg/telegram.svg */ "./img/svg/telegram.svg")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
            href: "https://api.whatsapp.com/send?phone=+77752163255",
            target: "_blank",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              className: "imgwhatsapp",
              src: __webpack_require__(/*! ../img/svg/whatsapp.svg */ "./img/svg/whatsapp.svg"),
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 88
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this);
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_17___default.a);

var makeStore = function makeStore() {
  return _store_store__WEBPACK_IMPORTED_MODULE_16__["default"];
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_15__["createWrapper"])(makeStore);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

MyApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(MyApp);
/* harmony default export */ __webpack_exports__["default"] = (_c = wrapper.withRedux(MyApp));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsImhvdXJzIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJzZXR1cFRpbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImNsZWFyIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb21wTmFtZSIsIm5hbWUiLCJzdG9yZSIsInJlcXVpcmUiLCJBcHAiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibG9nZ2VkSW4iLCJ1c2VyUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiY29ubmVjdCIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBRWxCLFVBQUlDLEtBQUssR0FBRyxHQUFaO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFWO0FBQ0EsVUFBSUMsU0FBUyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsV0FBckIsQ0FBaEI7O0FBQ0EsVUFBSUYsU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCQyxvQkFBWSxDQUFDRSxPQUFiLENBQXFCLFdBQXJCLEVBQWtDTixHQUFsQztBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlBLEdBQUcsR0FBR0csU0FBTixHQUFrQkosS0FBSyxHQUFHLEVBQVIsR0FBYSxFQUFiLEdBQWtCLElBQXhDLEVBQThDO0FBQzVDSyxzQkFBWSxDQUFDRyxLQUFiO0FBQ0FILHNCQUFZLENBQUNFLE9BQWIsQ0FBcUIsV0FBckIsRUFBa0NOLEdBQWxDO0FBQ0Q7QUFDRjtBQUVGOzs7NkJBQ1E7QUFBQSx3QkFDMEIsS0FBS1EsS0FEL0I7QUFBQSxVQUNFQyxTQURGLGVBQ0VBLFNBREY7QUFBQSxVQUNhQyxTQURiLGVBQ2FBLFNBRGI7QUFFTCxVQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csSUFBM0I7QUFDQSwwQkFDSSxxRUFBQyxxREFBRDtBQUFVLGFBQUssRUFBRUMscURBQWpCO0FBQUEsZ0NBQ0c7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRDtBQUFHLGdCQUFJLEVBQUMsNEJBQVI7QUFBcUMsa0JBQU0sRUFBQyxRQUE1QztBQUFBLG1DQUNBO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFrQyxpQkFBRyxFQUFFQyxtQkFBTyxDQUFDLHVEQUFEO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURDLGVBR0Q7QUFBRyxnQkFBSSxFQUFDLGtEQUFSO0FBQTJELGtCQUFNLEVBQUMsUUFBbEU7QUFBQSxtQ0FBMkU7QUFBSyx1QkFBUyxFQUFDLGFBQWY7QUFBNkIsaUJBQUcsRUFBRUEsbUJBQU8sQ0FBQyx1REFBRCxDQUF6QztBQUFzRSxpQkFBRyxFQUFDO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREgsZUFNRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0UscUVBQUMsU0FBRCxvQkFBZUosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBUUUscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQVlIOzs7O0VBL0JpQkssZ0Q7O0FBa0NwQixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ILHFEQUFOO0FBQUEsQ0FBbEI7O0FBQ0EsSUFBTUksT0FBTyxHQUFHQyx5RUFBYSxDQUFDRixTQUFELENBQTdCOztBQUNBLElBQU1HLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDaENDLFlBQVEsRUFBRUQsS0FBSyxDQUFDRSxXQUFOLENBQWtCRDtBQURJLEdBQUw7QUFBQSxDQUE3Qjs7QUFJQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFDLFFBQVE7QUFBQSxTQUFLLEVBQUw7QUFBQSxDQUFuQzs7QUFHQTFCLEtBQUssR0FBRzJCLDREQUFPLENBQUNOLGVBQUQsRUFBaUJJLGtCQUFqQixDQUFQLENBQTRDekIsS0FBNUMsQ0FBUjtBQUVlLG9FQUFBbUIsT0FBTyxDQUFDUyxTQUFSLENBQWtCNUIsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjRmMDAxOWM4MWEyYTdmNjVkMWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUuY3NzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXInXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIHZhciBob3VycyA9IDEuMjtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdmFyIHNldHVwVGltZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXR1cFRpbWUnKTtcbiAgICBpZiAoc2V0dXBUaW1lID09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR1cFRpbWUnLCBub3cpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChub3cgLSBzZXR1cFRpbWUgPiBob3VycyAqIDYwICogNjAgKiAxMDAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXR1cFRpbWUnLCBub3cpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgY29tcE5hbWUgPSBDb21wb25lbnQubmFtZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRCbG9ja1wiPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdC5tZS9pY3JlZGl0X2t6Ym90XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1nd2hhdHNhcHAgbWItMycgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL3N2Zy90ZWxlZ3JhbS5zdmdcIil9PjwvaW1nPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rNzc3NTIxNjMyNTVcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIGNsYXNzTmFtZT1cImltZ3doYXRzYXBwXCIgc3JjPXtyZXF1aXJlKFwiLi4vaW1nL3N2Zy93aGF0c2FwcC5zdmdcIil9IGFsdD1cIlwiIC8+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2dnZWRJbjogc3RhdGUudXNlclJlZHVjZXIubG9nZ2VkSW5cbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xufSk7XG5cbk15QXBwID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShNeUFwcClcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9