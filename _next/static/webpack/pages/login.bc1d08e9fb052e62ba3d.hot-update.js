webpackHotUpdate_N_E("pages/login",{

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
      dispatch(dateFailed(error.message || ''));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uLmpzIl0sIm5hbWVzIjpbImF1dGhlbnRpY2F0aW5nVXNlciIsInR5cGUiLCJzZXRDdXJyZW50VXNlciIsInVzZXJEYXRhIiwicGF5bG9hZCIsImRhdGVMb2FkaW5nIiwiZGF0ZUZhaWxlZCIsImVycm1lc3MiLCJzdGF0dXNTdWNjZXNzIiwic3RhdHVzIiwiaGlzdG9yeVN1Y2Nlc3MiLCJoaXN0b3J5IiwibG9nb3V0VXNlciIsImxvZ2luVXNlciIsInZhbHVlcyIsImRpc3BhdGNoIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImpzb24iLCJkYXRhIiwiY29va2llIiwic2V0IiwiYWNjZXNzX3Rva2VuIiwiZXhwaXJlcyIsInVzZXJzIiwiZmV0Y2hDdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiaW5jbHVkZXMiLCJBdXRob3JpemF0aW9uIiwiZ2V0IiwicmVtb3ZlIiwiZmV0Y2hVc2VyU3RhdHVzIiwiZmV0Y2hVc2VySGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFPO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQVA7QUFBQSxDQUEzQjtBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsUUFBUTtBQUFBLFNBQUs7QUFDekNGLFFBQUksRUFBRSxrQkFEbUM7QUFFekNHLFdBQU8sRUFBRUQ7QUFGZ0MsR0FB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Q0FBUjtBQUNELEtBckJELFdBc0JPLFVBQUNMLEtBQUQsRUFBVztBQUNoQk0sc0RBQU0sQ0FBQ2EsTUFBUCxDQUFjLE9BQWQ7QUFDQTlCLGNBQVEsQ0FBQ1QsVUFBVSxDQUFDb0IsS0FBSyxDQUFDRyxPQUFQLENBQVgsQ0FBUjtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWWIsS0FBSyxDQUFDRyxPQUFOLElBQWlCLE9BQTdCO0FBQ0QsS0ExQkQ7QUEyQkQsR0E3QitCO0FBQUEsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uYmMxZDA4ZTlmYjA1MmU2MmJhM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpbmdVc2VyID0gKCkgPT4gKHsgdHlwZTogJ0FVVEhFTlRJQ0FUSU5HX1VTRVInIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gdXNlckRhdGEgPT4gKHtcclxuICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgcGF5bG9hZDogdXNlckRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGVMb2FkaW5nID0gKCkgPT4gKHtcclxuICB0eXBlOiBcIkRBVEVfTE9BRElOR1wiXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICB0eXBlOiAnREFURV9GQUlMRUQnLFxyXG4gIHBheWxvYWQ6IGVycm1lc3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXR1c1N1Y2Nlc3MgPSBzdGF0dXMgPT4gKHtcclxuICB0eXBlOiAnU1RBVFVTX1NVQ0NFU1MnLFxyXG4gIHBheWxvYWQ6IHN0YXR1cyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaGlzdG9yeVN1Y2Nlc3MgPSBoaXN0b3J5ID0+ICh7XHJcbiAgdHlwZTogJ0hJU1RPUllfU1VDQ0VTUycsXHJcbiAgcGF5bG9hZDogaGlzdG9yeSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+ICh7XHJcbiAgdHlwZTogJ0xPR09VVF9VU0VSJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKHZhbHVlcykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogJ0FVVEhFTlRJQ0FUSU5HX1VTRVInIH0pO1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9sb2dpblwiLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKSxcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgY29va2llLnNldCgndG9rZW4nLCBkYXRhLmFjY2Vzc190b2tlbiwge2V4cGlyZXM6IDJ9KVxyXG4gICAgICB2YXIgdXNlcnMgPSBkaXNwYXRjaChmZXRjaEN1cnJlbnRVc2VyKCkpXHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXJzKVxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJywgcGF5bG9hZDogJ3VzZXInIH0pXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9sb2FucycpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBpZihlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCc0MDAnKSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkFJTEVEX0xPR0lOJywgcGF5bG9hZDogJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQmNCY0J0g0LjQu9C4INC/0LDRgNC+0LvRjCd9KVxyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGQUlMRURfTE9HSU4nLCBwYXlsb2FkOiBlcnJvci5tZXNzYWdlfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEN1cnJlbnRVc2VyID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gIGRpc3BhdGNoKGF1dGhlbnRpY2F0aW5nVXNlcigpKTtcclxuICBmZXRjaChcImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0VXNlclByb2ZpbGVGcm9tQml0cml4XCIsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWUuZ2V0KCd0b2tlbicpfWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9LFxyXG4gICAgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB0aHJvdyBlcnJtZXNzO1xyXG4gICAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcihkYXRhKSlcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm9yJylcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyU3RhdHVzID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gIGRpc3BhdGNoKGRhdGVMb2FkaW5nKHRydWUpKTtcclxuICBmZXRjaChcImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0VXNlckluZm9cIiwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbihkYXRhID0+IHtcclxuICAgIGRpc3BhdGNoKHN0YXR1c1N1Y2Nlc3MoZGF0YSkpXHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgICBkaXNwYXRjaChkYXRlRmFpbGVkKGVycm9yLm1lc3NhZ2UgfHwgJycpKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSB8fCAnRXJyb3InKVxyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VySGlzdG9yeSA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICBkaXNwYXRjaChkYXRlTG9hZGluZyh0cnVlKSk7XHJcbiAgZmV0Y2goXCJodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2hpc3RvcnlcIiwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbihkYXRhID0+IHtcclxuICAgIGRpc3BhdGNoKGhpc3RvcnlTdWNjZXNzKGRhdGEpKVxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgZGlzcGF0Y2goZGF0ZUZhaWxlZChlcnJvci5tZXNzYWdlKSlcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm9yJylcclxuICB9KVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=