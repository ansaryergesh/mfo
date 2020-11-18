webpackHotUpdate_N_E("pages/login",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uLmpzIl0sIm5hbWVzIjpbImF1dGhlbnRpY2F0aW5nVXNlciIsInR5cGUiLCJzZXRDdXJyZW50VXNlciIsInVzZXJEYXRhIiwicGF5bG9hZCIsImxvZ291dFVzZXIiLCJsb2dpblVzZXIiLCJ2YWx1ZXMiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImVycm1lc3MiLCJtZXNzYWdlIiwianNvbiIsImRhdGEiLCJjb29raWUiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzIiwidXNlcnMiLCJmZXRjaEN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJpbmNsdWRlcyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FBTztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFQO0FBQUEsQ0FBM0I7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLFFBQVE7QUFBQSxTQUFLO0FBQ3pDRixRQUFJLEVBQUUsa0JBRG1DO0FBRXpDRyxXQUFPLEVBQUVEO0FBRmdDLEdBQUw7QUFBQSxDQUEvQjtBQU1BLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTztBQUMvQkosUUFBSSxFQUFFO0FBRHlCLEdBQVA7QUFBQSxDQUFuQjtBQUlBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQ7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LFVBQU1JLE9BQU8sR0FBRyxJQUFJSCxLQUFKLENBQVVELEtBQUssQ0FBQ0ssT0FBaEIsQ0FBaEI7QUFDQSxZQUFNRCxPQUFOO0FBQ0QsS0FqQkgsRUFrQkNQLElBbEJELENBa0JNLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNRLElBQVQsRUFBSjtBQUFBLEtBbEJkLEVBbUJDVCxJQW5CRCxDQW1CTSxVQUFBVSxJQUFJLEVBQUk7QUFDWmxCLGNBQVEsQ0FBQ04sY0FBYyxDQUFDd0IsSUFBRCxDQUFmLENBQVI7QUFDRCxLQXJCRCxXQXNCTyxVQUFDUCxLQUFELEVBQVc7QUFDaEJRLHNEQUFNLENBQUNhLE1BQVAsQ0FBYyxPQUFkO0FBQ0FQLGFBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFLLENBQUNLLE9BQU4sSUFBaUIsT0FBN0I7QUFDRCxLQXpCRDtBQTBCRCxHQTdCK0I7QUFBQSxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5lMTFjNDRmN2JmY2M4NjBjZjE4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpbmdVc2VyID0gKCkgPT4gKHsgdHlwZTogJ0FVVEhFTlRJQ0FUSU5HX1VTRVInIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRVc2VyID0gdXNlckRhdGEgPT4gKHtcclxuICB0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsXHJcbiAgcGF5bG9hZDogdXNlckRhdGEsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gKCkgPT4gKHtcclxuICB0eXBlOiAnTE9HT1VUX1VTRVInLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSAodmFsdWVzKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnQVVUSEVOVElDQVRJTkdfVVNFUicgfSk7XHJcbiAgZmV0Y2goXCJodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2xvZ2luXCIsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpLFxyXG4gIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgICAgfSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBjb29raWUuc2V0KCd0b2tlbicsIGRhdGEuYWNjZXNzX3Rva2VuLCB7ZXhwaXJlczogMn0pXHJcbiAgICAgIHZhciB1c2VycyA9IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSlcclxuICAgICAgY29uc29sZS5sb2codXNlcnMpXHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9DVVJSRU5UX1VTRVInLCBwYXlsb2FkOiAndXNlcicgfSlcclxuICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L2xvYW5zJylcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJzQwMCcpKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGQUlMRURfTE9HSU4nLCBwYXlsb2FkOiAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INCY0JjQnSDQuNC70Lgg0L/QsNGA0L7Qu9GMJ30pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBSUxFRF9MT0dJTicsIHBheWxvYWQ6IGVycm9yLm1lc3NhZ2V9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goYXV0aGVudGljYXRpbmdVc2VyKCkpO1xyXG5cclxuICBmZXRjaChcImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0VXNlclByb2ZpbGVGcm9tQml0cml4XCIsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWUuZ2V0KCd0b2tlbicpfWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9LFxyXG4gICAgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB0aHJvdyBlcnJtZXNzO1xyXG4gICAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcihkYXRhKSlcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm9yJylcclxuICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=