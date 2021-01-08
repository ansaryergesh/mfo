webpackHotUpdate_N_E("pages/telegram",{

/***/ "./store/actions/telegram.js":
/*!***********************************!*\
  !*** ./store/actions/telegram.js ***!
  \***********************************/
/*! exports provided: msgLoading, msgFailed, msgSuccess, fetchNonAnsweredMsg, fetchAnsweredMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgLoading", function() { return msgLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgFailed", function() { return msgFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgSuccess", function() { return msgSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNonAnsweredMsg", function() { return fetchNonAnsweredMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAnsweredMsg", function() { return fetchAnsweredMsg; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var msgLoading = function msgLoading() {
  return {
    type: "MSGS_LOADING"
  };
};
var msgFailed = function msgFailed(errmess) {
  return {
    type: 'MSGS_FAILED',
    payload: errmess
  };
};
var msgSuccess = function msgSuccess(msgs) {
  return {
    type: 'MSGS_SUCCESS',
    payload: msgs
  };
};
var fetchNonAnsweredMsg = function fetchNonAnsweredMsg() {
  return function (dispatch) {
    dispatch(msgLoading(true));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.money-men.kz/api/nonanswered').then(function (response) {
      dispatch(msgSuccess(response.data));
      console.log(response.data);
    });
  };
};
var fetchAnsweredMsg = function fetchAnsweredMsg() {
  return function (dispatch) {
    dispatch(msgLoading(true));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.money-men.kz/api/answered').then(function (response) {
      dispatch(msgSuccess(response.data));
    });
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy90ZWxlZ3JhbS5qcyJdLCJuYW1lcyI6WyJtc2dMb2FkaW5nIiwidHlwZSIsIm1zZ0ZhaWxlZCIsImVycm1lc3MiLCJwYXlsb2FkIiwibXNnU3VjY2VzcyIsIm1zZ3MiLCJmZXRjaE5vbkFuc3dlcmVkTXNnIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hBbnN3ZXJlZE1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTztBQUM3QkMsUUFBSSxFQUFFO0FBRHVCLEdBQVA7QUFBQSxDQUFuQjtBQUlBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLE9BQU87QUFBQSxTQUFLO0FBQ25DRixRQUFJLEVBQUUsYUFENkI7QUFFbkNHLFdBQU8sRUFBRUQ7QUFGMEIsR0FBTDtBQUFBLENBQXpCO0FBS0EsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsSUFBSTtBQUFBLFNBQUs7QUFDakNMLFFBQUksRUFBRSxjQUQyQjtBQUVqQ0csV0FBTyxFQUFFRTtBQUZ3QixHQUFMO0FBQUEsQ0FBdkI7QUFLQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCO0FBQUEsU0FBSyxVQUFBQyxRQUFRLEVBQUc7QUFDL0NBLFlBQVEsQ0FBQ1IsVUFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBQ0FTLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSwwQ0FBVixFQUNDQyxJQURELENBQ00sVUFBQUMsUUFBUSxFQUFHO0FBQ2JKLGNBQVEsQ0FBQ0gsVUFBVSxDQUFDTyxRQUFRLENBQUNDLElBQVYsQ0FBWCxDQUFSO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNDLElBQXJCO0FBQ0gsS0FKRDtBQUtILEdBUGtDO0FBQUEsQ0FBNUI7QUFTQSxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsU0FBTSxVQUFBUixRQUFRLEVBQUc7QUFDN0NBLFlBQVEsQ0FBQ1IsVUFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBQ0FTLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSx1Q0FBVixFQUNDQyxJQURELENBQ00sVUFBQUMsUUFBUSxFQUFHO0FBQ2JKLGNBQVEsQ0FBQ0gsVUFBVSxDQUFDTyxRQUFRLENBQUNDLElBQVYsQ0FBWCxDQUFSO0FBQ0gsS0FIRDtBQUlILEdBTitCO0FBQUEsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVsZWdyYW0uN2YzMTRiNzc4Y2NkOWEzYjdlMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuZXhwb3J0IGNvbnN0IG1zZ0xvYWRpbmcgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJNU0dTX0xPQURJTkdcIlxyXG4gIH0pXHJcbiAgXHJcbmV4cG9ydCBjb25zdCBtc2dGYWlsZWQgPSBlcnJtZXNzID0+ICh7XHJcbiAgdHlwZTogJ01TR1NfRkFJTEVEJyxcclxuICBwYXlsb2FkOiBlcnJtZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBtc2dTdWNjZXNzID0gbXNncyA9PiAoe1xyXG4gIHR5cGU6ICdNU0dTX1NVQ0NFU1MnLFxyXG4gIHBheWxvYWQ6IG1zZ3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTm9uQW5zd2VyZWRNc2cgPSAoKSA9PmRpc3BhdGNoPT4ge1xyXG4gICAgZGlzcGF0Y2gobXNnTG9hZGluZyh0cnVlKSk7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbm9uYW5zd2VyZWQnKVxyXG4gICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobXNnU3VjY2VzcyhyZXNwb25zZS5kYXRhKSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQW5zd2VyZWRNc2cgPSAoKSA9PiBkaXNwYXRjaD0+IHtcclxuICAgIGRpc3BhdGNoKG1zZ0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2Fuc3dlcmVkJylcclxuICAgIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKG1zZ1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpXHJcbiAgICB9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==