webpackHotUpdate_N_E("pages/cabinet/loans",{

/***/ "./store/actions/userAction.js":
/*!*************************************!*\
  !*** ./store/actions/userAction.js ***!
  \*************************************/
/*! exports provided: authenticatingUser, setCurrentUser, logoutUser, loginUser, fetchCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticatingUser", function() { return authenticatingUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uLmpzIl0sIm5hbWVzIjpbImF1dGhlbnRpY2F0aW5nVXNlciIsInR5cGUiLCJzZXRDdXJyZW50VXNlciIsInVzZXJEYXRhIiwicGF5bG9hZCIsImxvZ291dFVzZXIiLCJsb2dpblVzZXIiLCJ2YWx1ZXMiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImVycm1lc3MiLCJtZXNzYWdlIiwianNvbiIsImRhdGEiLCJjb29raWUiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzIiwidXNlcnMiLCJmZXRjaEN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJpbmNsdWRlcyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FBTztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFQO0FBQUEsQ0FBM0I7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3pDRixRQUFJLEVBQUUsa0JBRG1DO0FBRXpDRyxXQUFPLEVBQUVEO0FBRmdDLEdBQUw7QUFBQSxDQUEvQjtBQU1BLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTztBQUMvQkosUUFBSSxFQUFFO0FBRHlCLEdBQVA7QUFBQSxDQUFuQjtBQUlBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQ7QUFBQSxTQUFZLFVBQUFDLFFBQVEsRUFBSTtBQUMvQ0EsWUFBUSxDQUFDO0FBQUVQLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBUSxTQUFLLENBQUMsb0NBQUQsRUFBdUM7QUFDMUNDLFlBQU0sRUFBRSxNQURrQztBQUUxQ0MsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCLGtCQURUO0FBRVBDLGNBQU0sRUFBRTtBQUZELE9BRmlDO0FBTTFDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixNQUFmO0FBTm9DLEtBQXZDLENBQUwsQ0FRR1MsSUFSSCxDQVFRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQixVQUFJQSxRQUFRLENBQUNDLEVBQWIsRUFBaUI7QUFDZixlQUFPRCxRQUFQO0FBQ0Q7O0FBQ0QsVUFBTUUsS0FBSyxHQUFHLElBQUlDLEtBQUosaUJBQW1CSCxRQUFRLENBQUNJLE1BQTVCLGVBQXVDSixRQUFRLENBQUNLLFVBQWhELEVBQWQ7QUFDQUgsV0FBSyxDQUFDRixRQUFOLEdBQWlCQSxRQUFqQjtBQUNBLFlBQU1FLEtBQU47QUFDRCxLQWZILEVBZ0JJLFVBQUFBLEtBQUssRUFBSTtBQUNQLFVBQU1JLE9BQU8sR0FBRyxJQUFJSCxLQUFKLENBQVVELEtBQUssQ0FBQ0ssT0FBaEIsQ0FBaEI7QUFDQSxZQUFNRCxPQUFOO0FBQ0QsS0FuQkwsRUFvQkdQLElBcEJILENBb0JRLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNRLElBQVQsRUFBSjtBQUFBLEtBcEJoQixFQXFCR1QsSUFyQkgsQ0FxQlEsVUFBQVUsSUFBSSxFQUFJO0FBQ1pDLHNEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLEVBQW9CRixJQUFJLENBQUNHLFlBQXpCLEVBQXVDO0FBQUNDLGVBQU8sRUFBRTtBQUFWLE9BQXZDO0FBQ0EsVUFBSUMsS0FBSyxHQUFHdkIsUUFBUSxDQUFDd0IsZ0JBQWdCLEVBQWpCLENBQXBCO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0F2QixjQUFRLENBQUM7QUFBRVAsWUFBSSxFQUFFLGtCQUFSO0FBQTRCRyxlQUFPLEVBQUU7QUFBckMsT0FBRCxDQUFSO0FBQ0ErQix3REFBTSxDQUFDQyxJQUFQLENBQVksZ0JBQVo7QUFDRCxLQTNCSCxXQTRCUyxVQUFDakIsS0FBRCxFQUFXO0FBQ2hCLFVBQUdBLEtBQUssQ0FBQ0ssT0FBTixDQUFjYSxRQUFkLENBQXVCLEtBQXZCLENBQUgsRUFBa0M7QUFDaEM3QixnQkFBUSxDQUFDO0FBQUNQLGNBQUksRUFBRSxjQUFQO0FBQXVCRyxpQkFBTyxFQUFFO0FBQWhDLFNBQUQsQ0FBUjtBQUNELE9BRkQsTUFFTTtBQUNKSSxnQkFBUSxDQUFDO0FBQUNQLGNBQUksRUFBRSxjQUFQO0FBQXVCRyxpQkFBTyxFQUFFZSxLQUFLLENBQUNLO0FBQXRDLFNBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FsQ0g7QUFtQ0QsR0FyQ3dCO0FBQUEsQ0FBbEI7QUF1Q0EsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFNBQU0sVUFBQXhCLFFBQVEsRUFBSTtBQUNoREEsWUFBUSxDQUFDUixrQkFBa0IsRUFBbkIsQ0FBUjtBQUVBUyxTQUFLLENBQUMsdURBQUQsRUFBMEQ7QUFDN0RDLFlBQU0sRUFBRSxLQURxRDtBQUU3REMsYUFBTyxFQUFFO0FBQ1AyQixxQkFBYSxtQkFBWVgsZ0RBQU0sQ0FBQ1ksR0FBUCxDQUFXLE9BQVgsQ0FBWjtBQUROO0FBRm9ELEtBQTFELENBQUwsQ0FNQ3ZCLElBTkQsQ0FNTSxVQUFBQyxRQUFRLEVBQUk7QUFDaEIsVUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2YsZUFBT0QsUUFBUDtBQUNEOztBQUNELFVBQU1FLEtBQUssR0FBRyxJQUFJQyxLQUFKLGlCQUFtQkgsUUFBUSxDQUFDSSxNQUE1QixlQUF1Q0osUUFBUSxDQUFDSyxVQUFoRCxFQUFkO0FBQ0FILFdBQUssQ0FBQ0YsUUFBTixHQUFpQkEsUUFBakI7QUFDQSxZQUFNRSxLQUFOO0FBQ0QsS0FiRCxFQWNFLFVBQUFBLEtBQUssRUFBSTtBQUNQLFVBQU1JLE9BQU8sR0FBRyxJQUFJSCxLQUFKLENBQVVELEtBQUssQ0FBQ0ssT0FBaEIsQ0FBaEI7QUFDQSxZQUFNRCxPQUFOO0FBQ0QsS0FqQkgsRUFrQkNQLElBbEJELENBa0JNLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNRLElBQVQsRUFBSjtBQUFBLEtBbEJkLEVBbUJDVCxJQW5CRCxDQW1CTSxVQUFBVSxJQUFJLEVBQUk7QUFDWmxCLGNBQVEsQ0FBQ04sY0FBYyxDQUFDd0IsSUFBRCxDQUFmLENBQVI7QUFDRCxLQXJCRCxXQXNCTyxVQUFDUCxLQUFELEVBQVc7QUFDaEJRLHNEQUFNLENBQUNhLE1BQVAsQ0FBYyxPQUFkO0FBQ0FQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFLLENBQUNLLE9BQU4sSUFBaUIsT0FBN0I7QUFDRCxLQXpCRDtBQTBCRCxHQTdCK0I7QUFBQSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2xvYW5zLmUxMWM0NGY3YmZjYzg2MGNmMThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGluZ1VzZXIgPSAoKSA9PiAoeyB0eXBlOiAnQVVUSEVOVElDQVRJTkdfVVNFUicgfSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudFVzZXIgPSB1c2VyRGF0YSA9PiAoe1xyXG4gIHR5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJyxcclxuICBwYXlsb2FkOiB1c2VyRGF0YSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoKSA9PiAoe1xyXG4gIHR5cGU6ICdMT0dPVVRfVVNFUicsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9ICh2YWx1ZXMpID0+IGRpc3BhdGNoID0+IHtcclxuICBkaXNwYXRjaCh7IHR5cGU6ICdBVVRIRU5USUNBVElOR19VU0VSJyB9KTtcclxuICBmZXRjaChcImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbG9naW5cIiwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbHVlcyksXHJcbiAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJybWVzcyA9IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnJtZXNzO1xyXG4gICAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgZGF0YS5hY2Nlc3NfdG9rZW4sIHtleHBpcmVzOiAyfSlcclxuICAgICAgdmFyIHVzZXJzID0gZGlzcGF0Y2goZmV0Y2hDdXJyZW50VXNlcigpKVxyXG4gICAgICBjb25zb2xlLmxvZyh1c2VycylcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsIHBheWxvYWQ6ICd1c2VyJyB9KVxyXG4gICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvbG9hbnMnKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgaWYoZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnNDAwJykpIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBSUxFRF9MT0dJTicsIHBheWxvYWQ6ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0JjQmNCdINC40LvQuCDQv9Cw0YDQvtC70YwnfSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkFJTEVEX0xPR0lOJywgcGF5bG9hZDogZXJyb3IubWVzc2FnZX0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICBkaXNwYXRjaChhdXRoZW50aWNhdGluZ1VzZXIoKSk7XHJcblxyXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9nZXRVc2VyUHJvZmlsZUZyb21CaXRyaXhcIiwge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAudGhlbihkYXRhID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyKGRhdGEpKVxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSB8fCAnRXJyb3InKVxyXG4gIH0pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==