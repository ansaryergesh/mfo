webpackHotUpdate_N_E("pages/cabinet/loans",{

/***/ "./store/actions/userAction.js":
/*!*************************************!*\
  !*** ./store/actions/userAction.js ***!
  \*************************************/
/*! exports provided: authenticatingUser, setCurrentUser, dateLoading, dateFailed, statusSuccess, historySuccess, logoutUser, loginUser, fetchCurrentUser, fetchUserStatus, fetchUserHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticatingUser", function() { return authenticatingUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateLoading", function() { return dateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFailed", function() { return dateFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusSuccess", function() { return statusSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historySuccess", function() { return historySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserStatus", function() { return fetchUserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserHistory", function() { return fetchUserHistory; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var authenticatingUser = function authenticatingUser() {
  return {
    type: 'AUTHENTICATING_USER'
  };
};
var setCurrentUser = function setCurrentUser(userData) {
  return {
    type: 'SET_CURRENT_USER',
    payload: userData
  };
};
var dateLoading = function dateLoading() {
  return {
    type: "DATE_LOADING"
  };
};
var dateFailed = function dateFailed(errmess) {
  return {
    type: 'DATE_FAILED',
    payload: errmess
  };
};
var statusSuccess = function statusSuccess(status) {
  return {
    type: 'STATUS_SUCCESS',
    payload: status
  };
};
var historySuccess = function historySuccess(history) {
  return {
    type: 'HISTORY_SUCCESS',
    payload: history
  };
};
var logoutUser = function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  };
};
var loginUser = function loginUser(values) {
  return function (dispatch) {
    dispatch({
      type: 'AUTHENTICATING_USER'
    });
    fetch("https://api.money-men.kz/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(values)
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
      error.response = response;
      throw error;
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('token', data.access_token, {
        expires: 2
      });
      var users = dispatch(fetchCurrentUser());
      console.log(users);
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: 'user'
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/cabinet/loans');
    })["catch"](function (error) {
      if (error.message.includes('400')) {
        dispatch({
          type: 'FAILED_LOGIN',
          payload: 'Неправильный ИИН или пароль'
        });
      } else {
        dispatch({
          type: 'FAILED_LOGIN',
          payload: error.message
        });
      }
    });
  };
};
var fetchCurrentUser = function fetchCurrentUser() {
  return function (dispatch) {
    dispatch(authenticatingUser());
    fetch("https://api.money-men.kz/api/getUserProfileFromBitrix", {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('token'))
      }
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
      error.response = response;
      throw error;
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(setCurrentUser(data));
    })["catch"](function (error) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('token');
      console.log(error.message || 'Error');
    });
  };
};
var fetchUserStatus = function fetchUserStatus() {
  return function (dispatch) {
    dispatch(dateLoading(true));
    fetch("https://api.money-men.kz/api/getUserInfo", {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('token'))
      }
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
      error.response = response;
      throw error;
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(statusSuccess(data));
    })["catch"](function (error) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('token');
      dispatch(dateFailed(error.message));
      console.log(error.message || 'Error');
    });
  };
};
var fetchUserHistory = function fetchUserHistory() {
  return function (dispatch) {
    dispatch(dateLoading(true));
    fetch("https://api.money-men.kz/api/history", {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('token'))
      }
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      var error = new Error("Error ".concat(response.status, ": ").concat(response.statusText));
      error.response = response;
      throw error;
    }, function (error) {
      var errmess = new Error(error.message);
      throw errmess;
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      dispatch(historySuccess(data));
    })["catch"](function (error) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('token');
      dispatch(dateFailed(error.message));
      console.log(error.message || 'Error');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uLmpzIl0sIm5hbWVzIjpbImF1dGhlbnRpY2F0aW5nVXNlciIsInR5cGUiLCJzZXRDdXJyZW50VXNlciIsInVzZXJEYXRhIiwicGF5bG9hZCIsImRhdGVMb2FkaW5nIiwiZGF0ZUZhaWxlZCIsImVycm1lc3MiLCJzdGF0dXNTdWNjZXNzIiwic3RhdHVzIiwiaGlzdG9yeVN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9nb3V0VXNlciIsImxvZ2luVXNlciIsInZhbHVlcyIsImRpc3BhdGNoIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImpzb24iLCJkYXRhIiwiY29va2llIiwic2V0IiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlcyIsInVzZXJzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiaW5jbHVkZXMiLCJBdXRob3JpemF0aW9uIiwiZ2V0IiwicmVtb3ZlIiwiZmV0Y2hVc2VyU3RhdHVzIiwiZmV0Y2hVc2VySGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFPO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQVA7QUFBQSxDQUEzQjtBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDekNGLFFBQUksRUFBRSxrQkFEbUM7QUFFekNHLFdBQU8sRUFBRUQ7QUFGZ0MsR0FB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ckJELFdBc0JPLFVBQUNMLEtBQUQsRUFBVztBQUNoQk0sc0RBQU0sQ0FBQ2EsTUFBUCxDQUFjLE9BQWQ7QUFDQTlCLGNBQVEsQ0FBQ1QsVUFBVSxDQUFDb0IsS0FBSyxDQUFDRyxPQUFQLENBQVgsQ0FBUjtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBSyxDQUFDRyxPQUFOLElBQWlCLE9BQTdCO0FBQ0QsS0ExQkQ7QUEyQkQsR0E3QitCO0FBQUEsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9sb2Fucy42YTBkNmE2YzE4MTkwYTM4YmNjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpbmdVc2VyID0gKCkgPT4gKHsgdHlwZTogJ0FVVEhFTlRJQ0FUSU5HX1VTRVInIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gdXNlckRhdGEgPT4gKHtcclxuICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgcGF5bG9hZDogdXNlckRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVMb2FkaW5nID0gKCkgPT4gKHtcclxuICB0eXBlOiBcIkRBVEVfTE9BRElOR1wiXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICB0eXBlOiAnREFURV9GQUlMRUQnLFxyXG4gIHBheWxvYWQ6IGVycm1lc3MsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0dXNTdWNjZXNzID0gc3RhdHVzID0+ICh7XHJcbiAgdHlwZTogJ1NUQVRVU19TVUNDRVNTJyxcclxuICBwYXlsb2FkOiBzdGF0dXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnlTdWNjZXNzID0gaGlzdG9yeSA9PiAoe1xyXG4gIHR5cGU6ICdISVNUT1JZX1NVQ0NFU1MnLFxyXG4gIHBheWxvYWQ6IGhpc3RvcnksXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gKCkgPT4gKHtcclxuICB0eXBlOiAnTE9HT1VUX1VTRVInLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAodmFsdWVzKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnQVVUSEVOVElDQVRJTkdfVVNFUicgfSk7XHJcbiAgZmV0Y2goXCJodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2xvZ2luXCIsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG4gIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBjb29raWUuc2V0KCd0b2tlbicsIGRhdGEuYWNjZXNzX3Rva2VuLCB7ZXhwaXJlczogMn0pXHJcbiAgICAgIHZhciB1c2VycyA9IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSlcclxuICAgICAgY29uc29sZS5sb2codXNlcnMpXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9DVVJSRU5UX1VTRVInLCBwYXlsb2FkOiAndXNlcicgfSlcclxuICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L2xvYW5zJylcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJzQwMCcpKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGQUlMRURfTE9HSU4nLCBwYXlsb2FkOiAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INCY0JjQnSDQuNC70Lgg0L/QsNGA0L7Qu9GMJ30pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBSUxFRF9MT0dJTicsIHBheWxvYWQ6IGVycm9yLm1lc3NhZ2V9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goYXV0aGVudGljYXRpbmdVc2VyKCkpO1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXRVc2VyUHJvZmlsZUZyb21CaXRyaXhcIiwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbihkYXRhID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyKGRhdGEpKVxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSB8fCAnRXJyb3InKVxyXG4gIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJTdGF0dXMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goZGF0ZUxvYWRpbmcodHJ1ZSkpO1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXRVc2VySW5mb1wiLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llLmdldCgndG9rZW4nKX1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZXJybWVzcyA9IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgZGlzcGF0Y2goc3RhdHVzU3VjY2VzcyhkYXRhKSlcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgIGRpc3BhdGNoKGRhdGVGYWlsZWQoZXJyb3IubWVzc2FnZSkpXHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlIHx8ICdFcnJvcicpXHJcbiAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJIaXN0b3J5ID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gIGRpc3BhdGNoKGRhdGVMb2FkaW5nKHRydWUpKTtcclxuICBmZXRjaChcImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvaGlzdG9yeVwiLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llLmdldCgndG9rZW4nKX1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgY29uc3QgZXJybWVzcyA9IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgZGlzcGF0Y2goaGlzdG9yeVN1Y2Nlc3MoZGF0YSkpXHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgICBkaXNwYXRjaChkYXRlRmFpbGVkKGVycm9yLm1lc3NhZ2UpKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSB8fCAnRXJyb3InKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==