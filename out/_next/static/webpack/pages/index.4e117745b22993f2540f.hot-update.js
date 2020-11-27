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
    }) // .then((response) => localStorage.setItem('step', 'final'))
    .then(function (response) {
      return Object(_defaults_utmSource__WEBPACK_IMPORTED_MODULE_3__["newCookie"])();
    }).then(function (response) {
      return setTimeout(function () {
        localStorage.clear();
      }, 5000);
    }).then(function (response) {
      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/thanks');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwicGhvbmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwiciIsImUiLCJlcnJvcnMiLCJpaW4iLCJwYXNzd29yZCIsImVtYWlsIiwic2V0VGltZW91dCIsImNoZWNrSUlOIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJuZXdDb29raWUiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJpZF9jYXJkX251bWJlciIsImliYW5fYWNjb3VudCIsInRlc3RpbmdBY3Rpb24iLCJoaXN0b3J5IiwiZmV0Y2hSZWdpb25zIiwicmVnaW9uX2lkIiwiQWNjZXB0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWdpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFQyxtREFENkI7QUFFbkNDLFdBQU8sRUFBRUg7QUFGMEIsR0FBTDtBQUFBLENBQTNCOztBQUtQLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNIOztBQUNNLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFLO0FBQy9CUixRQUFJLEVBQUVDLGlEQUR5QjtBQUUvQkMsV0FBTyxFQUFFTTtBQUZzQixHQUFMO0FBQUEsQ0FBdkI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE1BQU07QUFBQSxTQUFLO0FBQ3ZDVixRQUFJLEVB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YSxDQUFDcUIsT0FBRCxDQUFkLENBQVo7QUFBQSxLQXBCUixXQXFCRSxVQUFBSixLQUFLO0FBQUEsYUFBSS9ELFFBQVEsQ0FBQzRDLFVBQVUsQ0FBQ21CLEtBQUssQ0FBQzFFLE9BQVAsQ0FBWCxDQUFaO0FBQUEsS0FyQlAsQ0FBUDtBQXNCRCxHQXhCeUI7QUFBQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZTExNzc0NWIyMjk5M2YyNTQwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHtuZXdDb29raWV9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3V0bVNvdXJjZSdcclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nTW9uZXkgPSBtb25leSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9ORVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogbW9uZXksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZURhdGUodmFsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2luZ0RheSA9IGRheSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuREFZX0NIQU5HRSxcclxuICAgIHBheWxvYWQ6IGRheSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUkVTUE9OU0UgPSByZXN1bHQgPT4gKHtcclxuICAgIHR5cGU6IFwiU1VDQ0VTU19SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUxFRF9SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJGQUlMRURfUkVTUE9OU0VcIixcclxuICAgIHBheWxvYWQ6IHJlc3VsdFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IG1lc3NhZ2UgPT4gKHtcclxuICAgIHR5cGU6ICdTVUNDRVNTX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ0VSUk9SX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0VNUFRZX01FU1NBR0UnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX1JFR0lTVFJBVElPTicsXHJcbiAgICBwYXlsb2FkOiByZWdpc3RyYXRpb25zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGVwUmVnaXN0cmF0aW9uID0gc3RlcCA9PiAoe1xyXG4gICAgdHlwZTogJ1NURVBfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHN0ZXAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IGxvYWRlciA9PiAoe1xyXG4gICAgdHlwZTogJ0lTX0xPQURJTkcnLFxyXG4gICAgcGF5bG9hZDogbG9hZGVyLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbiA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5waG9uZSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfb25lYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLy8gLnRoZW4oY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb24pKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDEpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMSl9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJycpKSlcclxuICAgICAgICAuY2F0Y2gocj0+ci5qc29uKCkudGhlbihlPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMuaWluID8gXCLQmNCd0J0g0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvS4g0JLRiyDQsdGD0LTQtdGC0LUg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3RiyDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0LDQstGC0L7RgNC40LfQsNGG0LjRjyEgXCI6IFwiXCIgfHwgZS5lcnJvcnMucGFzc3dvcmQgPyBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiOiBcIlwiIHx8IGUuZXJyb3JzLnBob25lID8gXCLQn9C+0LvRjNCy0L7Qt9Cw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDRgtC10LvQtdGE0L7QvSDQvdC+0LzQtdGA0L7QvCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XCIgOiBlLmVycm9ycy5lbWFpbCB8fCBcIlwiIHx8ICAgZS5lcnJvcnMgKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJSU4oZS5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9KSkudGhlbigoKT0+ZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSUlOKHZhbCkge1xyXG4gICAgaWYodmFsICYmIHZhbC5paW4pIHtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly93d3cuaS1jcmVkaXQua3ovbG9naW5cIilcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB3b3JraW5nXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uQ29kZSA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5zb3VyY2UgPSdpLWNyZWRpdDEnO1xyXG4gICAgaWYoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZWdpc3RyYXRpb24uc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpICsnXzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaGVja19zbXNfY29kZWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbignJykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMikpKS50aGVuKCgpID0+IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+IGRpc3BhdGNoKGVycm9yTWVzc2FnZShcItCe0YLQv9GA0LDQstC70LXQvdC90YvQuSDQstCw0LzQuCDQutC+0LQg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRglwiKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvblNlY29uZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5yZWxhdGl2ZV9waG9uZV9udW1iZXIgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24ucmVsYXRpdmVfcGhvbmVfbnVtYmVyKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5hZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24uYWRkaXRpb25hbF9jb250YWN0X3Bob25lKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZWdpc3RyYXRpb25fc3RlcF90d29gLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDMpKSkudGhlbigoKSA9PiBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDMpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMucmVsYXRpdmVfbmFtZSB8fCBlLmVycm9ycy5yZWxhdGl2ZV9sYXN0X25hbWUgfHwgZS5lcnJvcnMucmVsYXRpdmVfcGhvbmVfbnVtYmVyIHx8IGUuZXJyb3JzLmFwYXJ0bWVudCB8fGUubWVzc2FnZSkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUxvYWRpbmcgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJEQVRFX0xPQURJTkdcIlxyXG59KVxyXG5leHBvcnQgY29uc3QgZGF0ZUZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICAgIHR5cGU6ICdEQVRFX0ZBSUxFRCcsXHJcbiAgICBwYXlsb2FkOiBlcnJtZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpb25zU3VjY2VzID0gcmVnaW9uID0+ICh7XHJcbiAgICB0eXBlOiAnUkVHSU9OX1NVQ0NFU1MnLFxyXG4gICAgcGF5bG9hZDogcmVnaW9uLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGluayA9IGxpbmsgPT4gKHtcclxuICAgIHR5cGU6IFwiQUREX0xJTktcIixcclxuICAgIHBheWxvYWQ6bGlua1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25UaGlyZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlciA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlcik7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbGFzdF9zdGVwYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJ9Cj0YHQv9C10YjQvdC+JykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFRpbWVvdXQoKCkgPT4ge2Rpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMCkpfSw2MDAwKSApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJykpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBuZXdDb29raWUoKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBSb3V0ZXIucHVzaCgnL3RoYW5rcycpKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiAgZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLmlkX2NhcmRfbnVtYmVyID8gXCLQndC+0LzQtdGAINGD0LTQvtGB0YLQstC+0YDQtdC90LjQtSDQu9C40YfQvdC+0YHRgtC4INGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L1cIiA6IFwiXCIgfHwgZS5lcnJvcnMuaWJhbl9hY2NvdW50IHx8IGUuZXJyb3JzLmNhcmRfbnVtYmVyIHx8IGUuZXJyb3JzIHx8ICBudWxsKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0aW5nQWN0aW9uKGhpc3RvcnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKVxyXG4gICAgaGlzdG9yeS5wdXNoKCcvdGhhbmtzJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVnaW9ucyA9IChyZWdpb25faWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGRhdGVMb2FkaW5nKHRydWUpKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaXR5LyR7cmVnaW9uX2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihyZWdpb25zID0+IGRpc3BhdGNoKHJlZ2lvbnNTdWNjZXMocmVnaW9ucykpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGF0Y2goZGF0ZUZhaWxlZChlcnJvci5tZXNzYWdlKSkpO1xyXG4gIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=