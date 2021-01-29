webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/moneyVal.js":
/*!************************************!*\
  !*** ./store/reducers/moneyVal.js ***!
  \************************************/
/*! exports provided: MoneyVal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyVal", function() { return MoneyVal; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");

var MoneyVal = function MoneyVal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '55000';
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["MONEY_CHANGE"]:
      return action.payload;

    default:
      return state;
  }
};
_c = MoneyVal;

var _c;

$RefreshReg$(_c, "MoneyVal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvbW9uZXlWYWwuanMiXSwibmFtZXMiOlsiTW9uZXlWYWwiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBY3Rpb25UeXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQTZCO0FBQUEsTUFBNUJDLEtBQTRCLHVFQUFwQixPQUFvQjtBQUFBLE1BQVhDLE1BQVc7QUFBQSxNQUMzQ0MsSUFEMkMsR0FDbENELE1BRGtDLENBQzNDQyxJQUQyQzs7QUFFbkQsVUFBUUEsSUFBUjtBQUNFLFNBQUtDLG1EQUFMO0FBQ0UsYUFBT0YsTUFBTSxDQUFDRyxPQUFkOztBQUNGO0FBQ0UsYUFBT0osS0FBUDtBQUpKO0FBTUQsQ0FSTTtLQUFNRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTk1NDdiY2QwYmYyMWMyMGI0MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vbmV5VmFsID0gKHN0YXRlID0gJzU1MDAwJywgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyB0eXBlIH0gPSBhY3Rpb247XHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGVzLk1PTkVZX0NIQU5HRTpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==