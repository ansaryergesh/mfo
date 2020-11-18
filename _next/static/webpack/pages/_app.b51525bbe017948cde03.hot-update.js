webpackHotUpdate_N_E("pages/_app",{

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
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: fetchCurrentUser()
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uLmpzIl0sIm5hbWVzIjpbImF1dGhlbnRpY2F0aW5nVXNlciIsInR5cGUiLCJzZXRDdXJyZW50VXNlciIsInVzZXJEYXRhIiwicGF5bG9hZCIsImxvZ291dFVzZXIiLCJsb2dpblVzZXIiLCJ2YWx1ZXMiLCJkaXNwYXRjaCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImVycm1lc3MiLCJtZXNzYWdlIiwianNvbiIsImRhdGEiLCJjb29raWUiLCJzZXQiLCJhY2Nlc3NfdG9rZW4iLCJleHBpcmVzIiwiZmV0Y2hDdXJyZW50VXNlciIsIlJvdXRlciIsInB1c2giLCJpbmNsdWRlcyIsIkF1dGhvcml6YXRpb24iLCJnZXQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR08sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQU87QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBUDtBQUFBLENBQTNCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxRQUFRO0FBQUEsU0FBSztBQUN6Q0YsUUFBSSxFQUFFLGtCQURtQztBQUV6Q0csV0FBTyxFQUFFRDtBQUZnQyxHQUFMO0FBQUEsQ0FBL0I7QUFNQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU87QUFDL0JKLFFBQUksRUFBRTtBQUR5QixHQUFQO0FBQUEsQ0FBbkI7QUFJQSxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxNQUFEO0FBQUEsU0FB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UCxJQWxCRCxDQWtCTSxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDUSxJQUFULEVBQUo7QUFBQSxLQWxCZCxFQW1CQ1QsSUFuQkQsQ0FtQk0sVUFBQVUsSUFBSSxFQUFJO0FBQ1psQixjQUFRLENBQUNOLGNBQWMsQ0FBQ3dCLElBQUQsQ0FBZixDQUFSO0FBQ0QsS0FyQkQsV0FzQk8sVUFBQ1AsS0FBRCxFQUFXO0FBQ2hCUSxzREFBTSxDQUFDVSxNQUFQLENBQWMsT0FBZDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWXBCLEtBQUssQ0FBQ0ssT0FBTixJQUFpQixPQUE3QjtBQUNELEtBekJEO0FBMEJELEdBN0IrQjtBQUFBLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjUxNTI1YmJlMDE3OTQ4Y2RlMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0aW5nVXNlciA9ICgpID0+ICh7IHR5cGU6ICdBVVRIRU5USUNBVElOR19VU0VSJyB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlciA9IHVzZXJEYXRhID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9DVVJSRU5UX1VTRVInLFxyXG4gIHBheWxvYWQ6IHVzZXJEYXRhLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0VXNlciA9ICgpID0+ICh7XHJcbiAgdHlwZTogJ0xPR09VVF9VU0VSJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKHZhbHVlcykgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gIGRpc3BhdGNoKHsgdHlwZTogJ0FVVEhFTlRJQ0FUSU5HX1VTRVInIH0pO1xyXG4gIGZldGNoKFwiaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9sb2dpblwiLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKSxcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICAgIH0pXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgY29va2llLnNldCgndG9rZW4nLCBkYXRhLmFjY2Vzc190b2tlbiwge2V4cGlyZXM6IDJ9KVxyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJywgcGF5bG9hZDogZmV0Y2hDdXJyZW50VXNlcigpIH0pXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGlmKGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJzQwMCcpKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGQUlMRURfTE9HSU4nLCBwYXlsb2FkOiAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INCY0JjQnSDQuNC70Lgg0L/QsNGA0L7Qu9GMJ30pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBSUxFRF9MT0dJTicsIHBheWxvYWQ6IGVycm9yLm1lc3NhZ2V9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goYXV0aGVudGljYXRpbmdVc2VyKCkpO1xyXG5cclxuICBmZXRjaChcImh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvZ2V0VXNlclByb2ZpbGVGcm9tQml0cml4XCIsIHtcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWUuZ2V0KCd0b2tlbicpfWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9LFxyXG4gICAgZXJyb3IgPT4ge1xyXG4gICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB0aHJvdyBlcnJtZXNzO1xyXG4gICAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcihkYXRhKSlcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UgfHwgJ0Vycm9yJylcclxuICB9KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=