webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/ActionCreators.js":
/*!*****************************************!*\
  !*** ./store/actions/ActionCreators.js ***!
  \*****************************************/
/*! exports provided: changingMoney, changingDay, SUCCESS_RESPONSE, FAILED_RESPONSE, successMessage, errorMessage, emptyMessage, addRegistration, stepRegistration, isLoading, postRegistration, postRegistrationCode, postRegistrationSecond, dateLoading, dateFailed, regionsSucces, addLink, postRegistrationThird, fetchRegions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changingMoney", function() { return changingMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changingDay", function() { return changingDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS_RESPONSE", function() { return SUCCESS_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILED_RESPONSE", function() { return FAILED_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successMessage", function() { return successMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyMessage", function() { return emptyMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegistration", function() { return addRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepRegistration", function() { return stepRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistration", function() { return postRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistrationCode", function() { return postRegistrationCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistrationSecond", function() { return postRegistrationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateLoading", function() { return dateLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFailed", function() { return dateFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionsSucces", function() { return regionsSucces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLink", function() { return addLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRegistrationThird", function() { return postRegistrationThird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRegions", function() { return fetchRegions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_utmSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/utmSource */ "./defaults/utmSource.js");




var changingMoney = function changingMoney(money) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["MONEY_CHANGE"],
    payload: money
  };
};

function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, '');
}

var changingDay = function changingDay(day) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["DAY_CHANGE"],
    payload: day
  };
};
var SUCCESS_RESPONSE = function SUCCESS_RESPONSE(result) {
  return {
    type: "SUCCESS_RESPONSE",
    payload: result
  };
};
_c = SUCCESS_RESPONSE;
var FAILED_RESPONSE = function FAILED_RESPONSE(result) {
  return {
    type: "FAILED_RESPONSE",
    payload: result
  };
};
_c2 = FAILED_RESPONSE;
var successMessage = function successMessage(message) {
  return {
    type: 'SUCCESS_MESSAGE',
    payload: message
  };
};
var errorMessage = function errorMessage(message) {
  return {
    type: 'ERROR_MESSAGE',
    payload: message
  };
};
var emptyMessage = function emptyMessage() {
  return {
    type: 'EMPTY_MESSAGE'
  };
};
var addRegistration = function addRegistration(registrations) {
  return {
    type: 'ADD_REGISTRATION',
    payload: registrations
  };
};
var stepRegistration = function stepRegistration(step) {
  return {
    type: 'STEP_REGISTRATION',
    payload: step
  };
};
var isLoading = function isLoading(loader) {
  return {
    type: 'IS_LOADING',
    payload: loader
  };
};
var postRegistration = function postRegistration(registration) {
  return function (dispatch) {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.phone = replaceDate(registration.phone);
    registration.last_name = registration.last_name || "Нет";
    return fetch("https://api.money-men.kz/api/registration_step_one", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }) // .then(console.log(response))
    .then(function (response) {
      return dispatch(addRegistration(registration));
    }).then(function (response) {
      return dispatch(isLoading(false));
    }).then(function (response) {
      return dispatch(stepRegistration(1));
    }).then(function (response) {
      localStorage.setItem("step", 1);
    }).then(function (response) {
      return window.scrollTo(0, 0);
    }).then(function (response) {
      return dispatch(successMessage(''));
    })["catch"](function (r) {
      return r.json().then(function (e) {
        dispatch(errorMessage(e.errors.iin ? "ИНН уже зарегистрирован. Вы будете перенаправлены на страницу авторизация! " :  false || e.errors.password ? "Пароли не совпадают" :  false || e.errors.phone ? "Польвозатель с таким телефон номером уже зарегистрирован" : e.errors.email || "" || e.errors));
        setTimeout(function () {
          checkIIN(e.errors);
        }, 3000);
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};

function checkIIN(val) {
  if (val && val.iin) {
    document.location.replace("https://www.i-credit.kz/login");
  } else {
    console.log("not working");
  }
}

var postRegistrationCode = function postRegistrationCode(registration) {
  return function (dispatch) {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.source = 'i-credit1';

    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('utm_source') !== undefined) {
      registration.source = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('utm_source') + '_1';
    }

    return fetch("https://api.money-men.kz/api/check_sms_code", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      localStorage.setItem("token", response.access_token);
    }).then(function (response) {
      return dispatch(addRegistration(''));
    }).then(function (response) {
      return dispatch(stepRegistration(2));
    }).then(function () {
      return dispatch(emptyMessage());
    }).then(function (response) {
      localStorage.setItem("step", 2);
    }).then(function (response) {
      return window.scrollTo(0, 0);
    }).then(function (response) {
      return dispatch(isLoading(false));
    })["catch"](function (r) {
      return r.json().then(function (e) {
        return dispatch(errorMessage("Отправленный вами код не существует"));
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};
var postRegistrationSecond = function postRegistrationSecond(registration) {
  return function (dispatch) {
    dispatch(isLoading(true));
    registration.relative_phone_number = replaceDate(registration.relative_phone_number);
    registration.additional_contact_phone = replaceDate(registration.additional_contact_phone);
    return fetch("https://api.money-men.kz/api/registration_step_two", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer ".concat(localStorage.getItem('token'))
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return dispatch(isLoading(false));
    }).then(function (response) {
      return dispatch(stepRegistration(3));
    }).then(function () {
      return dispatch(emptyMessage());
    }).then(function (response) {
      localStorage.setItem("step", 3);
    }).then(function (response) {
      return window.scrollTo(0, 0);
    })["catch"](function (r) {
      return r.json().then(function (e) {
        return dispatch(errorMessage(e.errors.relative_name || e.errors.relative_last_name || e.errors.relative_phone_number || e.errors.apartment || e.message));
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
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
var regionsSucces = function regionsSucces(region) {
  return {
    type: 'REGION_SUCCESS',
    payload: region
  };
};
var addLink = function addLink(link) {
  return {
    type: "ADD_LINK",
    payload: link
  };
};
var postRegistrationThird = function postRegistrationThird(registration) {
  return function (dispatch) {
    dispatch(isLoading(true));
    registration.card_number = replaceDate(registration.card_number);
    console.log(registration);
    return fetch("https://api.money-men.kz/api/last_step", {
      method: 'POST',
      body: JSON.stringify(registration),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        Authorization: "Bearer ".concat(localStorage.getItem('token'))
      },
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.ok) {
        return response;
      }

      throw response;
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return dispatch(successMessage('Успешно'));
    }).then(function (response) {
      return setTimeout(function () {
        dispatch(stepRegistration(0));
      }, 6000);
    }).then(function (response) {
      return dispatch(isLoading(false));
    }).then(function (response) {
      return setTimeout(function () {
        localStorage.clear();
      }, 5000);
    }).then(function (response) {
      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/thanks');
    }).then(function (response) {
      return Object(_defaults_utmSource__WEBPACK_IMPORTED_MODULE_3__["newCookie"])();
    })["catch"](function (r) {
      return r.json().then(function (e) {
        return dispatch(errorMessage(e.errors.id_card_number ? "Номер удостворение личности уже зарегистрирован" :  false || e.errors.iban_account || e.errors.card_number || e.errors || null));
      });
    }).then(function () {
      return dispatch(isLoading(false));
    });
  };
};

function testingAction(history) {
  localStorage.setItem('step', 'final');
  setTimeout(function () {
    localStorage.clear();
  }, 5000);
  history.push('/thanks');
}

var fetchRegions = function fetchRegions(region_id) {
  return function (dispatch) {
    dispatch(dateLoading(true));
    return fetch("https://api.money-men.kz/api/city/".concat(region_id), {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
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
    }).then(function (regions) {
      return dispatch(regionsSucces(regions));
    })["catch"](function (error) {
      return dispatch(dateFailed(error.message));
    });
  };
};

var _c, _c2;

$RefreshReg$(_c, "SUCCESS_RESPONSE");
$RefreshReg$(_c2, "FAILED_RESPONSE");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwicGhvbmUiLCJsYXN0X25hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwiciIsImUiLCJlcnJvcnMiLCJpaW4iLCJwYXNzd29yZCIsImVtYWlsIiwic2V0VGltZW91dCIsImNoZWNrSUlOIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJuZXdDb29raWUiLCJpZF9jYXJkX251bWJlciIsImliYW5fYWNjb3VudCIsInRlc3RpbmdBY3Rpb24iLCJoaXN0b3J5IiwiZmV0Y2hSZWdpb25zIiwicmVnaW9uX2lkIiwiQWNjZXB0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWdpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFQyxtREFENkI7QUFFbkNDLFdBQU8sRUFBRUg7QUFGMEIsR0FBTDtBQUFBLENBQTNCOztBQUtQLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNIOztBQUNNLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFLO0FBQy9CUixRQUFJLEVBQUVDLGlEQUR5QjtBQUUvQkMsV0FBTyxFQUFFTTtBQUZzQixHQUFMO0FBQUEsQ0FBdkI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE1BQU07QUFBQSxTQUFLO0FBQ3ZDVixRQUFJLEVBQUUsa0JBRGlDO0FBRXZDRSxXQUFPLEVBQUVRO0FBRjhCLEdBQUw7QUFBQSxDQUEvQjtLQUFNRCxnQjtBQUtOLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUQsTUFBTTtBQUFBLFNBQUs7QUFDdENWLFFBQUksRUFBRSxpQkFEZ0M7QUFFdENFLFdBQU8sRUFBRVE7QUFGNkIsR0FBTDtBQUFBLENBQTlCO01BQU1DLGU7QUFLTixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLE9BQU87QUFBQSxTQUFLO0FBQ3RDYixRQUFJLEVBQUUsaUJBRGdDO0FBRXRDRSxXQUFPLEVBQUVXO0FBRjZCLEdBQUw7QUFBQSxDQUE5QjtBQUtBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFELE9BQU87QUFBQSxTQUFLO0FBQ3BDYixRQUFJLEVBQUUsZUFEOEI7QUFFcENFLFdBQU8sRUFBRVc7QUFGMkIsR0FBTDtBQUFBLENBQTVCO0FBSUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQy9CZixRQUFJLEVBQUU7QUFEeUIsR0FBUDtBQUFBLENBQXJCO0FBSUEsSUFBTWdCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsYUFBYTtBQUFBLFNBQUs7QUFDN0NqQixRQUFJLEVBQUUsa0JBRHVDO0FBRTdDRSxXQUFPLEVBQUVlO0FBRm9DLEdBQUw7QUFBQSxDQUFyQztBQUtBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsSUFBSTtBQUFBLFNBQUs7QUFDckNuQixRQUFJLEVBQUUsbUJBRCtCO0FBRXJDRSxXQUFPLEVBQUVpQjtBQUY0QixHQUFMO0FBQUEsQ0FBN0I7QUFLQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxNQUFNO0FBQUEsU0FBSztBQUNoQ3JCLFFBQUksRUFBRSxZQUQwQjtBQUVoQ0UsV0FBTyxFQUFFbUI7QUFGdUIsR0FBTDtBQUFBLENBQXhCO0FBTUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxZQUFEO0FBQUEsU0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQzVEQSxZQUFRLENBQUNULFlBQVksRUFBYixDQUFSO0FBQ0FTLFlBQVEsQ0FBQ0osU0FBUyxDQUFDLElBQUQsQ0FBVixDQUFSO0FBQ0FHLGdCQUFZLENBQUNFLEtBQWIsR0FBcUJ0QixXQUFXLENBQUNvQixZQUFZLENBQUNFLEtBQWQsQ0FBaEM7QUFDQUYsZ0JBQVksQ0FBQ0csU0FBYixHQUF5QkgsWUFBWSxDQUFDRyxTQUFiLElBQTBCLEtBQW5EO0FBQ0EsV0FBT0MsS0FBSyx1REFBc0Q7QUFDOURDLFlBQU0sRUFBRSxNQURzRDtBQUU5REMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsWUFBZixDQUZ3RDtBQUc5RFMsYUFBTyxFQUFFO0FBQ0wsdUNBQThCLEdBRHpCO0FBRUwsd0JBQWdCLGtCQUZYO0FBR0wsa0JBQVU7QUFITCxPQUhxRDtBQVE5REMsaUJBQVcsRUFBRTtBQVJpRCxLQUF0RCxDQUFMLENBVUZDLElBVkUsQ0FVRyxVQUFBQyxRQUFRLEVBQUc7QUFDYixVQUFHQSxRQUFRLENBQUNDLEVBQVosRUFBZ0I7QUFDWixlQUFPRCxRQUFQO0FBQ0g7O0FBQ0QsWUFBTUEsUUFBTjtBQUNILEtBZkUsRUFnQkZELElBaEJFLENBZ0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNFLElBQVQsRUFBSjtBQUFBLEtBaEJYLEVBaUJIO0FBakJHLEtBa0JGSCxJQWxCRSxDQWtCRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDUixlQUFlLENBQUNPLFlBQUQsQ0FBaEIsQ0FBWjtBQUFBLEtBbEJYLEVBbUJGVyxJQW5CRSxDQW1CRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDSixTQUFTLENBQUMsS0FBRCxDQUFWLENBQVo7QUFBQSxLQW5CWCxFQW9CRmMsSUFwQkUsQ0FvQkcsVUFBQUMsUUFBUTtBQUFBLGFBQUlYLFFBQVEsQ0FBQ04sZ0JBQWdCLENBQUMsQ0FBRCxDQUFqQixDQUFaO0FBQUEsS0FwQlgsRUFxQkZnQixJQXJCRSxDQXFCRyxVQUFBQyxRQUFRLEVBQUc7QUFBQ0csa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QixDQUE3QjtBQUFnQyxLQXJCL0MsRUFzQkZMLElBdEJFLENBc0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFHSyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsQ0FBSDtBQUFBLEtBdEJYLEVBdUJGUCxJQXZCRSxDQXVCRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDWixjQUFjLENBQUMsRUFBRCxDQUFmLENBQVo7QUFBQSxLQXZCWCxXQXdCSSxVQUFBOEIsQ0FBQztBQUFBLGFBQUVBLENBQUMsQ0FBQ0wsSUFBRixHQUFTSCxJQUFULENBQWMsVUFBQVMsQ0FBQyxFQUFHO0FBQ3hCbkIsZ0JBQVEsQ0FBQ1YsWUFBWSxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEdBQVQsR0FBZSw2RUFBZixHQUE4RixNQUFFLElBQUlGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxRQUFmLEdBQTBCLHFCQUExQixHQUFpRCxNQUFFLElBQUlILENBQUMsQ0FBQ0MsTUFBRixDQUFTbkIsS0FBZixHQUF1QiwwREFBdkIsR0FBb0ZrQixDQUFDLENBQUNDLE1BQUYsQ0FBU0csS0FBVCxJQUFrQixFQUFsQixJQUEwQkosQ0FBQyxDQUFDQyxNQUFoUSxDQUFiLENBQVI7QUFDQUksa0JBQVUsQ0FBQyxZQUFNO0FBQ2JDLGtCQUFRLENBQUNOLENBQUMsQ0FBQ0MsTUFBSCxDQUFSO0FBQ0gsU0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILE9BTFMsQ0FBRjtBQUFBLEtBeEJMLEVBNkJDVixJQTdCRCxDQTZCTTtBQUFBLGFBQUlWLFFBQVEsQ0FBQ0osU0FBUyxDQUFDLEtBQUQsQ0FBVixDQUFaO0FBQUEsS0E3Qk4sQ0FBUDtBQThCSCxHQW5DK0I7QUFBQSxDQUF6Qjs7QUFxQ1AsU0FBUzZCLFFBQVQsQ0FBa0I3QyxHQUFsQixFQUF1QjtBQUNuQixNQUFHQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ3lDLEdBQWQsRUFBbUI7QUFDZkssWUFBUSxDQUFDQyxRQUFULENBQWtCN0MsT0FBbEIsQ0FBMEIsK0JBQTFCO0FBQ0gsR0FGRCxNQUVNO0FBQ0Y4QyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFDSjs7QUFFTSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUMvQixZQUFEO0FBQUEsU0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hFQSxZQUFRLENBQUNULFlBQVksRUFBYixDQUFSO0FBQ0FTLFlBQVEsQ0FBQ0osU0FBUyxDQUFDLElBQUQsQ0FBVixDQUFSO0FBQ0FHLGdCQUFZLENBQUNnQyxNQUFiLEdBQXFCLFdBQXJCOztBQUNBLFFBQUdDLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxZQUFYLE1BQTZCQyxTQUFoQyxFQUEyQztBQUN2Q25DLGtCQUFZLENBQUNnQyxNQUFiLEdBQXNCQyxnREFBTSxDQUFDQyxHQUFQLENBQVcsWUFBWCxJQUEwQixJQUFoRDtBQUNIOztBQUVELFdBQU85QixLQUFLLGdEQUErQztBQUN2REMsWUFBTSxFQUFFLE1BRCtDO0FBRXZEQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixZQUFmLENBRmlEO0FBR3ZEUyxhQUFPLEVBQUU7QUFDTCx1Q0FBOEIsR0FEekI7QUFFTCx3QkFBZ0Isa0JBRlg7QUFHTCxrQkFBVTtBQUhMLE9BSDhDO0FBUXZEQyxpQkFBVyxFQUFFO0FBUjBDLEtBQS9DLENBQUwsQ0FVRkMsSUFWRSxDQVVHLFVBQUFDLFFBQVEsRUFBRztBQUNiLFVBQUdBLFFBQVEsQ0FBQ0MsRUFBWixFQUFnQjtBQUNaLGVBQU9ELFFBQVA7QUFDSDs7QUFDRCxZQUFNQSxRQUFOO0FBQ0gsS0FmRSxFQWdCRkQsSUFoQkUsQ0FnQkcsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0UsSUFBVCxFQUFKO0FBQUEsS0FoQlgsRUFpQkZILElBakJFLENBaUJHLFVBQUFDLFFBQVEsRUFBSTtBQUFDRyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSixRQUFRLENBQUN3QixZQUF2QztBQUFxRCxLQWpCckUsRUFrQkZ6QixJQWxCRSxDQWtCRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDUixlQUFlLENBQUMsRUFBRCxDQUFoQixDQUFaO0FBQUEsS0FsQlgsRUFtQkZrQixJQW5CRSxDQW1CRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDTixnQkFBZ0IsQ0FBQyxDQUFELENBQWpCLENBQVo7QUFBQSxLQW5CWCxFQW1COENnQixJQW5COUMsQ0FtQm1EO0FBQUEsYUFBTVYsUUFBUSxDQUFDVCxZQUFZLEVBQWIsQ0FBZDtBQUFBLEtBbkJuRCxFQW9CRm1CLElBcEJFLENBb0JHLFVBQUFDLFFBQVEsRUFBRztBQUFDRyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLENBQTdCO0FBQWdDLEtBcEIvQyxFQXFCRkwsSUFyQkUsQ0FxQkcsVUFBQUMsUUFBUTtBQUFBLGFBQUdLLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQixDQUFIO0FBQUEsS0FyQlgsRUFzQkZQLElBdEJFLENBc0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFJWCxRQUFRLENBQUNKLFNBQVMsQ0FBQyxLQUFELENBQVYsQ0FBWjtBQUFBLEtBdEJYLFdBdUJJLFVBQUFzQixDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDTCxJQUFGLEdBQVNILElBQVQsQ0FBYyxVQUFBUyxDQUFDO0FBQUEsZUFBSW5CLFFBQVEsQ0FBQ1YsWUFBWSxDQUFDLHFDQUFELENBQWIsQ0FBWjtBQUFBLE9BQWYsQ0FBSjtBQUFBLEtBdkJMLEVBdUI0Rm9CLElBdkI1RixDQXVCaUc7QUFBQSxhQUFNVixRQUFRLENBQUNKLFNBQVMsQ0FBQyxLQUFELENBQVYsQ0FBZDtBQUFBLEtBdkJqRyxDQUFQO0FBd0JILEdBaENtQztBQUFBLENBQTdCO0FBa0NBLElBQU13QyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNyQyxZQUFEO0FBQUEsU0FBa0IsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xFQSxZQUFRLENBQUNKLFNBQVMsQ0FBQyxJQUFELENBQVYsQ0FBUjtBQUNBRyxnQkFBWSxDQUFDc0MscUJBQWIsR0FBcUMxRCxXQUFXLENBQUNvQixZQUFZLENBQUNzQyxxQkFBZCxDQUFoRDtBQUNBdEMsZ0JBQVksQ0FBQ3VDLHdCQUFiLEdBQXdDM0QsV0FBVyxDQUFDb0IsWUFBWSxDQUFDdUMsd0JBQWQsQ0FBbkQ7QUFDQSxXQUFPbkMsS0FBSyx1REFBc0Q7QUFDOURDLFlBQU0sRUFBRSxNQURzRDtBQUU5REMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsWUFBZixDQUZ3RDtBQUc5RFMsYUFBTyxFQUFFO0FBQ0wsdUNBQThCLEdBRHpCO0FBRUwsd0JBQWdCLGtCQUZYO0FBR0wsa0JBQVUsa0JBSEw7QUFJTCtCLHFCQUFhLG1CQUFZekIsWUFBWSxDQUFDMEIsT0FBYixDQUFxQixPQUFyQixDQUFaO0FBSlIsT0FIcUQ7QUFVOUQvQixpQkFBVyxFQUFFO0FBVmlELEtBQXRELENBQUwsQ0FZRkMsSUFaRSxDQVlHLFVBQUFDLFFBQVEsRUFBRztBQUNiLFVBQUdBLFFBQVEsQ0FBQ0MsRUFBWixFQUFnQjtBQUNaLGVBQU9ELFFBQVA7QUFDSDs7QUFDRCxZQUFNQSxRQUFOO0FBQ0gsS0FqQkUsRUFrQkZELElBbEJFLENBa0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNFLElBQVQsRUFBSjtBQUFBLEtBbEJYLEVBbUJGSCxJQW5CRSxDQW1CRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDSixTQUFTLENBQUMsS0FBRCxDQUFWLENBQVo7QUFBQSxLQW5CWCxFQW9CRmMsSUFwQkUsQ0FvQkcsVUFBQUMsUUFBUTtBQUFBLGFBQUlYLFFBQVEsQ0FBQ04sZ0JBQWdCLENBQUMsQ0FBRCxDQUFqQixDQUFaO0FBQUEsS0FwQlgsRUFvQjhDZ0IsSUFwQjlDLENBb0JtRDtBQUFBLGFBQU1WLFFBQVEsQ0FBQ1QsWUFBWSxFQUFiLENBQWQ7QUFBQSxLQXBCbkQsRUFxQkZtQixJQXJCRSxDQXFCRyxVQUFBQyxRQUFRLEVBQUc7QUFBQ0csa0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QixDQUE3QjtBQUFnQyxLQXJCL0MsRUFzQkZMLElBdEJFLENBc0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFHSyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsQ0FBSDtBQUFBLEtBdEJYLFdBdUJJLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNMLElBQUYsR0FBU0gsSUFBVCxDQUFjLFVBQUFTLENBQUM7QUFBQSxlQUFJbkIsUUFBUSxDQUFDVixZQUFZLENBQUM2QixDQUFDLENBQUNDLE1BQUYsQ0FBU3FCLGFBQVQsSUFBMEJ0QixDQUFDLENBQUNDLE1BQUYsQ0FBU3NCLGtCQUFuQyxJQUF5RHZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTaUIscUJBQWxFLElBQTJGbEIsQ0FBQyxDQUFDQyxNQUFGLENBQVN1QixTQUFwRyxJQUFnSHhCLENBQUMsQ0FBQzlCLE9BQW5ILENBQWIsQ0FBWjtBQUFBLE9BQWYsQ0FBSjtBQUFBLEtBdkJMLEVBdUJnTHFCLElBdkJoTCxDQXVCcUw7QUFBQSxhQUFNVixRQUFRLENBQUNKLFNBQVMsQ0FBQyxLQUFELENBQVYsQ0FBZDtBQUFBLEtBdkJyTCxDQUFQO0FBeUJILEdBN0JxQztBQUFBLENBQS9CO0FBK0JBLElBQU1nRCxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU87QUFDOUJwRSxRQUFJLEVBQUU7QUFEd0IsR0FBUDtBQUFBLENBQXBCO0FBR0EsSUFBTXFFLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLE9BQU87QUFBQSxTQUFLO0FBQ2xDdEUsUUFBSSxFQUFFLGFBRDRCO0FBRWxDRSxXQUFPLEVBQUVvRTtBQUZ5QixHQUFMO0FBQUEsQ0FBMUI7QUFLQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLE1BQU07QUFBQSxTQUFLO0FBQ3BDeEUsUUFBSSxFQUFFLGdCQUQ4QjtBQUVwQ0UsV0FBTyxFQUFFc0U7QUFGMkIsR0FBTDtBQUFBLENBQTVCO0FBTUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQUMsSUFBSTtBQUFBLFNBQUs7QUFDNUIxRSxRQUFJLEVBQUUsVUFEc0I7QUFFNUJFLFdBQU8sRUFBQ3dFO0FBRm9CLEdBQUw7QUFBQSxDQUFwQjtBQUtBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ3BELFlBQUQ7QUFBQSxTQUFrQixVQUFDQyxRQUFELEVBQWM7QUFDakVBLFlBQVEsQ0FBQ0osU0FBUyxDQUFDLElBQUQsQ0FBVixDQUFSO0FBQ0FHLGdCQUFZLENBQUNxRCxXQUFiLEdBQTJCekUsV0FBVyxDQUFDb0IsWUFBWSxDQUFDcUQsV0FBZCxDQUF0QztBQUNBeEIsV0FBTyxDQUFDQyxHQUFSLENBQVk5QixZQUFaO0FBQ0EsV0FBT0ksS0FBSywyQ0FBMEM7QUFDbERDLFlBQU0sRUFBRSxNQUQwQztBQUVsREMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsWUFBZixDQUY0QztBQUdsRFMsYUFBTyxFQUFFO0FBQ0wsdUNBQThCLEdBRHpCO0FBRUwsd0JBQWdCLGtCQUZYO0FBR0wsa0JBQVUsa0JBSEw7QUFJTCtCLHFCQUFhLG1CQUFZekIsWUFBWSxDQUFDMEIsT0FBYixDQUFxQixPQUFyQixDQUFaO0FBSlIsT0FIeUM7QUFVbEQvQixpQkFBVyxFQUFFO0FBVnFDLEtBQTFDLENBQUwsQ0FZRkMsSUFaRSxDQVlHLFVBQUFDLFFBQVEsRUFBRztBQUNiLFVBQUdBLFFBQVEsQ0FBQ0MsRUFBWixFQUFnQjtBQUNaLGVBQU9ELFFBQVA7QUFDSDs7QUFDRCxZQUFNQSxRQUFOO0FBQ0gsS0FqQkUsRUFrQkZELElBbEJFLENBa0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNFLElBQVQsRUFBSjtBQUFBLEtBbEJYLEVBbUJGSCxJQW5CRSxDQW1CRyxVQUFBQyxRQUFRO0FBQUEsYUFBSVgsUUFBUSxDQUFDWixjQUFjLENBQUMsU0FBRCxDQUFmLENBQVo7QUFBQSxLQW5CWCxFQW9CRnNCLElBcEJFLENBb0JHLFVBQUFDLFFBQVE7QUFBQSxhQUFJYSxVQUFVLENBQUMsWUFBTTtBQUFDeEIsZ0JBQVEsQ0FBQ04sZ0JBQWdCLENBQUMsQ0FBRCxDQUFqQixDQUFSO0FBQThCLE9BQXRDLEVBQXVDLElBQXZDLENBQWQ7QUFBQSxLQXBCWCxFQXFCRmdCLElBckJFLENBcUJHLFVBQUFDLFFBQVE7QUFBQSxhQUFHWCxRQUFRLENBQUNKLFNBQVMsQ0FBQyxLQUFELENBQVYsQ0FBWDtBQUFBLEtBckJYLEVBc0JGYyxJQXRCRSxDQXNCRyxVQUFBQyxRQUFRO0FBQUEsYUFBR2EsVUFBVSxDQUFDLFlBQU07QUFBQ1Ysb0JBQVksQ0FBQ3VDLEtBQWI7QUFBcUIsT0FBN0IsRUFBOEIsSUFBOUIsQ0FBYjtBQUFBLEtBdEJYLEVBdUJGM0MsSUF2QkUsQ0F1QkcsVUFBQUMsUUFBUTtBQUFBLGFBQUkyQyxrREFBTSxDQUFDQyxJQUFQLENBQVksU0FBWixDQUFKO0FBQUEsS0F2QlgsRUF3QkY3QyxJQXhCRSxDQXdCRyxVQUFBQyxRQUFRO0FBQUEsYUFBRzZDLHFFQUFTLEVBQVo7QUFBQSxLQXhCWCxXQXlCSSxVQUFBdEMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0wsSUFBRixHQUFTSCxJQUFULENBQWMsVUFBQVMsQ0FBQztBQUFBLGVBQUtuQixRQUFRLENBQUNWLFlBQVksQ0FBQzZCLENBQUMsQ0FBQ0MsTUFBRixDQUFTcUMsY0FBVCxHQUEwQixpREFBMUIsR0FBOEUsTUFBRSxJQUFJdEMsQ0FBQyxDQUFDQyxNQUFGLENBQVNzQyxZQUFmLElBQStCdkMsQ0FBQyxDQUFDQyxNQUFGLENBQVNnQyxXQUF4QyxJQUF1RGpDLENBQUMsQ0FBQ0MsTUFBekQsSUFBb0UsSUFBbkosQ0FBYixDQUFiO0FBQUEsT0FBZixDQUFKO0FBQUEsS0F6QkwsRUF5QjhNVixJQXpCOU0sQ0F5Qm1OO0FBQUEsYUFBTVYsUUFBUSxDQUFDSixTQUFTLENBQUMsS0FBRCxDQUFWLENBQWQ7QUFBQSxLQXpCbk4sQ0FBUDtBQTBCSCxHQTlCb0M7QUFBQSxDQUE5Qjs7QUFnQ1AsU0FBUytELGFBQVQsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQzVCOUMsY0FBWSxDQUFDQyxPQUFiLENBQXFCLE1BQXJCLEVBQTZCLE9BQTdCO0FBQ0FTLFlBQVUsQ0FBQyxZQUFNO0FBQUNWLGdCQUFZLENBQUN1QyxLQUFiO0FBQXFCLEdBQTdCLEVBQThCLElBQTlCLENBQVY7QUFDQU8sU0FBTyxDQUFDTCxJQUFSLENBQWEsU0FBYjtBQUNIOztBQUVNLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFNBQUQ7QUFBQSxTQUFlLFVBQUE5RCxRQUFRLEVBQUk7QUFDbkRBLFlBQVEsQ0FBQzRDLFdBQVcsQ0FBQyxJQUFELENBQVosQ0FBUjtBQUNBLFdBQU96QyxLQUFLLDZDQUFzQzJELFNBQXRDLEdBQW1EO0FBQzdEdEQsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCLGtCQURUO0FBRVB1RCxjQUFNLEVBQUU7QUFGRDtBQURvRCxLQUFuRCxDQUFMLENBTUpyRCxJQU5JLENBTUMsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFVBQUlBLFFBQVEsQ0FBQ0MsRUFBYixFQUFpQjtBQUNmLGVBQU9ELFFBQVA7QUFDRDs7QUFFRCxVQUFNcUQsS0FBSyxHQUFHLElBQUlDLEtBQUosaUJBQW1CdEQsUUFBUSxDQUFDdUQsTUFBNUIsZUFBdUN2RCxRQUFRLENBQUN3RCxVQUFoRCxFQUFkO0FBQ0FILFdBQUssQ0FBQ3JELFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0EsWUFBTXFELEtBQU47QUFDRCxLQWRJLEVBZUwsVUFBQUEsS0FBSyxFQUFJO0FBQ1AsVUFBTWxCLE9BQU8sR0FBRyxJQUFJbUIsS0FBSixDQUFVRCxLQUFLLENBQUMzRSxPQUFoQixDQUFoQjtBQUNBLFlBQU15RCxPQUFOO0FBQ0QsS0FsQkksRUFtQkpwQyxJQW5CSSxDQW1CQyxVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDRSxJQUFULEVBQUo7QUFBQSxLQW5CVCxFQW9CSkgsSUFwQkksQ0FvQkMsVUFBQTBELE9BQU87QUFBQSxhQUFJcEUsUUFBUSxDQUFDK0MsYUFBYSxDQUFDcUIsT0FBRCxDQUFkLENBQVo7QUFBQSxLQXBCUixXQXFCRSxVQUFBSixLQUFLO0FBQUEsYUFBSWhFLFFBQVEsQ0FBQzZDLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQzNFLE9BQVAsQ0FBWCxDQUFaO0FBQUEsS0FyQlAsQ0FBUDtBQXNCRCxHQXhCeUI7QUFBQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZjY3NTNiYTUxM2UzMzFmZjM2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtuZXdDb29raWV9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3V0bVNvdXJjZSdcclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nTW9uZXkgPSBtb25leSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9ORVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogbW9uZXksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZURhdGUodmFsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2luZ0RheSA9IGRheSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuREFZX0NIQU5HRSxcclxuICAgIHBheWxvYWQ6IGRheSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUkVTUE9OU0UgPSByZXN1bHQgPT4gKHtcclxuICAgIHR5cGU6IFwiU1VDQ0VTU19SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUxFRF9SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJGQUlMRURfUkVTUE9OU0VcIixcclxuICAgIHBheWxvYWQ6IHJlc3VsdFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IG1lc3NhZ2UgPT4gKHtcclxuICAgIHR5cGU6ICdTVUNDRVNTX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ0VSUk9SX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0VNUFRZX01FU1NBR0UnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX1JFR0lTVFJBVElPTicsXHJcbiAgICBwYXlsb2FkOiByZWdpc3RyYXRpb25zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGVwUmVnaXN0cmF0aW9uID0gc3RlcCA9PiAoe1xyXG4gICAgdHlwZTogJ1NURVBfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHN0ZXAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IGxvYWRlciA9PiAoe1xyXG4gICAgdHlwZTogJ0lTX0xPQURJTkcnLFxyXG4gICAgcGF5bG9hZDogbG9hZGVyLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbiA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5waG9uZSk7XHJcbiAgICByZWdpc3RyYXRpb24ubGFzdF9uYW1lID0gcmVnaXN0cmF0aW9uLmxhc3RfbmFtZSB8fCBcItCd0LXRglwiXHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfb25lYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLy8gLnRoZW4oY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb24pKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDEpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMSl9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJycpKSlcclxuICAgICAgICAuY2F0Y2gocj0+ci5qc29uKCkudGhlbihlPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMuaWluID8gXCLQmNCd0J0g0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvS4g0JLRiyDQsdGD0LTQtdGC0LUg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3RiyDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0LDQstGC0L7RgNC40LfQsNGG0LjRjyEgXCI6IFwiXCIgfHwgZS5lcnJvcnMucGFzc3dvcmQgPyBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiOiBcIlwiIHx8IGUuZXJyb3JzLnBob25lID8gXCLQn9C+0LvRjNCy0L7Qt9Cw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDRgtC10LvQtdGE0L7QvSDQvdC+0LzQtdGA0L7QvCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XCIgOiBlLmVycm9ycy5lbWFpbCB8fCBcIlwiIHx8ICAgZS5lcnJvcnMgKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJSU4oZS5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9KSkudGhlbigoKT0+ZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSUlOKHZhbCkge1xyXG4gICAgaWYodmFsICYmIHZhbC5paW4pIHtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly93d3cuaS1jcmVkaXQua3ovbG9naW5cIilcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB3b3JraW5nXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uQ29kZSA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5zb3VyY2UgPSdpLWNyZWRpdDEnO1xyXG4gICAgaWYoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZWdpc3RyYXRpb24uc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpICsnXzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaGVja19zbXNfY29kZWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbignJykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMikpKS50aGVuKCgpID0+IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+IGRpc3BhdGNoKGVycm9yTWVzc2FnZShcItCe0YLQv9GA0LDQstC70LXQvdC90YvQuSDQstCw0LzQuCDQutC+0LQg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRglwiKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvblNlY29uZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5yZWxhdGl2ZV9waG9uZV9udW1iZXIgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24ucmVsYXRpdmVfcGhvbmVfbnVtYmVyKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5hZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24uYWRkaXRpb25hbF9jb250YWN0X3Bob25lKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZWdpc3RyYXRpb25fc3RlcF90d29gLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDMpKSkudGhlbigoKSA9PiBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDMpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMucmVsYXRpdmVfbmFtZSB8fCBlLmVycm9ycy5yZWxhdGl2ZV9sYXN0X25hbWUgfHwgZS5lcnJvcnMucmVsYXRpdmVfcGhvbmVfbnVtYmVyIHx8IGUuZXJyb3JzLmFwYXJ0bWVudCB8fGUubWVzc2FnZSkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUxvYWRpbmcgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJEQVRFX0xPQURJTkdcIlxyXG59KVxyXG5leHBvcnQgY29uc3QgZGF0ZUZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICAgIHR5cGU6ICdEQVRFX0ZBSUxFRCcsXHJcbiAgICBwYXlsb2FkOiBlcnJtZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpb25zU3VjY2VzID0gcmVnaW9uID0+ICh7XHJcbiAgICB0eXBlOiAnUkVHSU9OX1NVQ0NFU1MnLFxyXG4gICAgcGF5bG9hZDogcmVnaW9uLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGluayA9IGxpbmsgPT4gKHtcclxuICAgIHR5cGU6IFwiQUREX0xJTktcIixcclxuICAgIHBheWxvYWQ6bGlua1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25UaGlyZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlciA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlcik7XHJcbiAgICBjb25zb2xlLmxvZyhyZWdpc3RyYXRpb24pXHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbGFzdF9zdGVwYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJ9Cj0YHQv9C10YjQvdC+JykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFRpbWVvdXQoKCkgPT4ge2Rpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMCkpfSw2MDAwKSApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBSb3V0ZXIucHVzaCgnL3RoYW5rcycpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gbmV3Q29va2llKCkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+ICBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMuaWRfY2FyZF9udW1iZXIgPyBcItCd0L7QvNC10YAg0YPQtNC+0YHRgtCy0L7RgNC10L3QuNC1INC70LjRh9C90L7RgdGC0Lgg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVwiIDogXCJcIiB8fCBlLmVycm9ycy5pYmFuX2FjY291bnQgfHwgZS5lcnJvcnMuY2FyZF9udW1iZXIgfHwgZS5lcnJvcnMgfHwgIG51bGwpKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlc3RpbmdBY3Rpb24oaGlzdG9yeSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCAnZmluYWwnKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7bG9jYWxTdG9yYWdlLmNsZWFyKCl9LDUwMDApXHJcbiAgICBoaXN0b3J5LnB1c2goJy90aGFua3MnKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hSZWdpb25zID0gKHJlZ2lvbl9pZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goZGF0ZUxvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2NpdHkvJHtyZWdpb25faWR9YCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBFcnJvciAke3Jlc3BvbnNlLnN0YXR1c306ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc3QgZXJybWVzcyA9IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnJtZXNzO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKHJlZ2lvbnMgPT4gZGlzcGF0Y2gocmVnaW9uc1N1Y2NlcyhyZWdpb25zKSkpXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBkaXNwYXRjaChkYXRlRmFpbGVkKGVycm9yLm1lc3NhZ2UpKSk7XHJcbiAgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==