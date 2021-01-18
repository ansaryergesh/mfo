webpackHotUpdate_N_E("pages/telegram",{

/***/ "./store/actions/telegram.js":
/*!***********************************!*\
  !*** ./store/actions/telegram.js ***!
  \***********************************/
/*! exports provided: msgLoading, msgFailed, msgSuccess, msgLoadingAns, msgFailedAns, msgSuccessAns, fetchNonAnsweredMsg, fetchAnsweredMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgLoading", function() { return msgLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgFailed", function() { return msgFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgSuccess", function() { return msgSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgLoadingAns", function() { return msgLoadingAns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgFailedAns", function() { return msgFailedAns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msgSuccessAns", function() { return msgSuccessAns; });
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
var msgLoadingAns = function msgLoadingAns() {
  return {
    type: "MSGS_LOADING_ANS"
  };
};
var msgFailedAns = function msgFailedAns(errmess) {
  return {
    type: 'MSGS_FAILED_ANS',
    payload: errmess
  };
};
var msgSuccessAns = function msgSuccessAns(msgs) {
  return {
    type: 'MSGS_SUCCESS_ANS',
    payload: msgs
  };
};
var fetchNonAnsweredMsg = function fetchNonAnsweredMsg() {
  return function (dispatch) {
    dispatch(msgLoading(true));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.money-men.kz/api/nonanswered').then(function (response) {
      dispatch(msgSuccess(response.data));
    });
  };
};
var fetchAnsweredMsg = function fetchAnsweredMsg() {
  return function (dispatch) {
    dispatch(msgLoadingAns(true));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.money-men.kz/api/answered').then(function (response) {
      dispatch(msgSuccessAns(response.data));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy90ZWxlZ3JhbS5qcyJdLCJuYW1lcyI6WyJtc2dMb2FkaW5nIiwidHlwZSIsIm1zZ0ZhaWxlZCIsImVycm1lc3MiLCJwYXlsb2FkIiwibXNnU3VjY2VzcyIsIm1zZ3MiLCJtc2dMb2FkaW5nQW5zIiwibXNnRmFpbGVkQW5zIiwibXNnU3VjY2Vzc0FucyIsImZldGNoTm9uQW5zd2VyZWRNc2ciLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImZldGNoQW5zd2VyZWRNc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU87QUFDN0JDLFFBQUksRUFBRTtBQUR1QixHQUFQO0FBQUEsQ0FBbkI7QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxPQUFPO0FBQUEsU0FBSztBQUNuQ0YsUUFBSSxFQUFFLGFBRDZCO0FBRW5DRyxXQUFPLEVBQUVEO0FBRjBCLEdBQUw7QUFBQSxDQUF6QjtBQUtBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQ2pDTCxRQUFJLEVBQUUsY0FEMkI7QUFFakNHLFdBQU8sRUFBRUU7QUFGd0IsR0FBTDtBQUFBLENBQXZCO0FBS0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFNBQU87QUFDbENOLFFBQUksRUFBRTtBQUQ0QixHQUFQO0FBQUEsQ0FBdEI7QUFJQSxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBTCxPQUFPO0FBQUEsU0FBSztBQUN0Q0YsUUFBSSxFQUFFLGlCQURnQztBQUV0Q0csV0FBTyxFQUFFRDtBQUY2QixHQUFMO0FBQUEsQ0FBNUI7QUFLQSxJQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFILElBQUk7QUFBQSxTQUFLO0FBQ3BDTCxRQUFJLEVBQUUsa0JBRDhCO0FBRXBDRyxXQUFPLEVBQUVFO0FBRjJCLEdBQUw7QUFBQSxDQUExQjtBQU1BLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxTQUFLLFVBQUFDLFFBQVEsRUFBRztBQUMvQ0EsWUFBUSxDQUFDWCxVQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFDQVksZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLDBDQUFWLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxRQUFRLEVBQUc7QUFDYkosY0FBUSxDQUFDTixVQUFVLENBQUNVLFFBQVEsQ0FBQ0MsSUFBVixDQUFYLENBQVI7QUFDSCxLQUhEO0FBSUgsR0FOa0M7QUFBQSxDQUE1QjtBQVFBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFNLFVBQUFOLFFBQVEsRUFBRztBQUM3Q0EsWUFBUSxDQUFDSixhQUFhLENBQUMsSUFBRCxDQUFkLENBQVI7QUFDQUssZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLHVDQUFWLEVBQ0NDLElBREQsQ0FDTSxVQUFBQyxRQUFRLEVBQUc7QUFDYkosY0FBUSxDQUFDRixhQUFhLENBQUNNLFFBQVEsQ0FBQ0MsSUFBVixDQUFkLENBQVI7QUFDSCxLQUhEO0FBSUgsR0FOK0I7QUFBQSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWxlZ3JhbS4xMjkwYmNjMjhmMTFkNDBjMGViZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5leHBvcnQgY29uc3QgbXNnTG9hZGluZyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBcIk1TR1NfTE9BRElOR1wiXHJcbiAgfSlcclxuICBcclxuZXhwb3J0IGNvbnN0IG1zZ0ZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICB0eXBlOiAnTVNHU19GQUlMRUQnLFxyXG4gIHBheWxvYWQ6IGVycm1lc3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1zZ1N1Y2Nlc3MgPSBtc2dzID0+ICh7XHJcbiAgdHlwZTogJ01TR1NfU1VDQ0VTUycsXHJcbiAgcGF5bG9hZDogbXNncyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbXNnTG9hZGluZ0FucyA9ICgpID0+ICh7XHJcbiAgdHlwZTogXCJNU0dTX0xPQURJTkdfQU5TXCJcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBtc2dGYWlsZWRBbnMgPSBlcnJtZXNzID0+ICh7XHJcbiAgdHlwZTogJ01TR1NfRkFJTEVEX0FOUycsXHJcbiAgcGF5bG9hZDogZXJybWVzcyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbXNnU3VjY2Vzc0FucyA9IG1zZ3MgPT4gKHtcclxuICB0eXBlOiAnTVNHU19TVUNDRVNTX0FOUycsXHJcbiAgcGF5bG9hZDogbXNncyxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTm9uQW5zd2VyZWRNc2cgPSAoKSA9PmRpc3BhdGNoPT4ge1xyXG4gICAgZGlzcGF0Y2gobXNnTG9hZGluZyh0cnVlKSk7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbm9uYW5zd2VyZWQnKVxyXG4gICAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gobXNnU3VjY2VzcyhyZXNwb25zZS5kYXRhKSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEFuc3dlcmVkTXNnID0gKCkgPT4gZGlzcGF0Y2g9PiB7XHJcbiAgICBkaXNwYXRjaChtc2dMb2FkaW5nQW5zKHRydWUpKTtcclxuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9hbnN3ZXJlZCcpXHJcbiAgICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICBkaXNwYXRjaChtc2dTdWNjZXNzQW5zKHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgfSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=