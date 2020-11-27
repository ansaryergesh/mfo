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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwicGhvbmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwiciIsImUiLCJlcnJvcnMiLCJpaW4iLCJwYXNzd29yZCIsImVtYWlsIiwic2V0VGltZW91dCIsImNoZWNrSUlOIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsImNvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwiZ2V0SXRlbSIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJjbGVhciIsIlJvdXRlciIsInB1c2giLCJpZF9jYXJkX251bWJlciIsImliYW5fYWNjb3VudCIsInRlc3RpbmdBY3Rpb24iLCJoaXN0b3J5IiwiZmV0Y2hSZWdpb25zIiwicmVnaW9uX2lkIiwiQWNjZXB0IiwiZXJyb3IiLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJyZWdpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ25DQyxRQUFJLEVBQUVDLG1EQUQ2QjtBQUVuQ0MsV0FBTyxFQUFFSDtBQUYwQixHQUFMO0FBQUEsQ0FBM0I7O0FBS1AsU0FBU0ksV0FBVCxDQUFxQkMsR0FBckIsRUFBMEI7QUFDdEIsU0FBT0MsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixZQUFwQixFQUFrQyxFQUFsQyxDQUFQO0FBQ0g7O0FBQ00sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsR0FBRztBQUFBLFNBQUs7QUFDL0JSLFFBQUksRUFBRUMsaURBRHlCO0FBRS9CQyxXQUFPLEVBQUVNO0FBRnNCLEdBQUw7QUFBQSxDQUF2QjtBQU1BLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsTUFBTTtBQUFBLFNBQUs7QUFDdkNWLFFBQUksRUFBRSxrQkFEaUM7QUFFdkNFLFdBQU8s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LEtBQUssQ0FBQ3pFLE9BQVAsQ0FBWCxDQUFaO0FBQUEsS0FyQlAsQ0FBUDtBQXNCRCxHQXhCeUI7QUFBQSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MmVhOTc1MmE3ZjZjYWI1YjFkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nTW9uZXkgPSBtb25leSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9ORVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogbW9uZXksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZURhdGUodmFsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2luZ0RheSA9IGRheSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuREFZX0NIQU5HRSxcclxuICAgIHBheWxvYWQ6IGRheSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUkVTUE9OU0UgPSByZXN1bHQgPT4gKHtcclxuICAgIHR5cGU6IFwiU1VDQ0VTU19SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUxFRF9SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJGQUlMRURfUkVTUE9OU0VcIixcclxuICAgIHBheWxvYWQ6IHJlc3VsdFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IG1lc3NhZ2UgPT4gKHtcclxuICAgIHR5cGU6ICdTVUNDRVNTX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ0VSUk9SX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0VNUFRZX01FU1NBR0UnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX1JFR0lTVFJBVElPTicsXHJcbiAgICBwYXlsb2FkOiByZWdpc3RyYXRpb25zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGVwUmVnaXN0cmF0aW9uID0gc3RlcCA9PiAoe1xyXG4gICAgdHlwZTogJ1NURVBfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHN0ZXAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IGxvYWRlciA9PiAoe1xyXG4gICAgdHlwZTogJ0lTX0xPQURJTkcnLFxyXG4gICAgcGF5bG9hZDogbG9hZGVyLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbiA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5waG9uZSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfb25lYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLy8gLnRoZW4oY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb24pKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDEpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMSl9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJycpKSlcclxuICAgICAgICAuY2F0Y2gocj0+ci5qc29uKCkudGhlbihlPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMuaWluID8gXCLQmNCd0J0g0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvS4g0JLRiyDQsdGD0LTQtdGC0LUg0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3RiyDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0LDQstGC0L7RgNC40LfQsNGG0LjRjyEgXCI6IFwiXCIgfHwgZS5lcnJvcnMucGFzc3dvcmQgPyBcItCf0LDRgNC+0LvQuCDQvdC1INGB0L7QstC/0LDQtNCw0Y7RglwiOiBcIlwiIHx8IGUuZXJyb3JzLnBob25lID8gXCLQn9C+0LvRjNCy0L7Qt9Cw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCDRgtC10LvQtdGE0L7QvSDQvdC+0LzQtdGA0L7QvCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XCIgOiBlLmVycm9ycy5lbWFpbCB8fCBcIlwiIHx8ICAgZS5lcnJvcnMgKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tJSU4oZS5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9KSkudGhlbigoKT0+ZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSUlOKHZhbCkge1xyXG4gICAgaWYodmFsICYmIHZhbC5paW4pIHtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly93d3cuaS1jcmVkaXQua3ovbG9naW5cIilcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCB3b3JraW5nXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uQ29kZSA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5zb3VyY2UgPSdpLWNyZWRpdDEnO1xyXG4gICAgaWYoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZWdpc3RyYXRpb24uc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpICsnXzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaGVja19zbXNfY29kZWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbignJykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMikpKS50aGVuKCgpID0+IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+IGRpc3BhdGNoKGVycm9yTWVzc2FnZShcItCe0YLQv9GA0LDQstC70LXQvdC90YvQuSDQstCw0LzQuCDQutC+0LQg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRglwiKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvblNlY29uZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5yZWxhdGl2ZV9waG9uZV9udW1iZXIgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24ucmVsYXRpdmVfcGhvbmVfbnVtYmVyKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5hZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24uYWRkaXRpb25hbF9jb250YWN0X3Bob25lKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZWdpc3RyYXRpb25fc3RlcF90d29gLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDMpKSkudGhlbigoKSA9PiBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDMpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMucmVsYXRpdmVfbmFtZSB8fCBlLmVycm9ycy5yZWxhdGl2ZV9sYXN0X25hbWUgfHwgZS5lcnJvcnMucmVsYXRpdmVfcGhvbmVfbnVtYmVyIHx8IGUuZXJyb3JzLmFwYXJ0bWVudCB8fGUubWVzc2FnZSkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUxvYWRpbmcgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJEQVRFX0xPQURJTkdcIlxyXG59KVxyXG5leHBvcnQgY29uc3QgZGF0ZUZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICAgIHR5cGU6ICdEQVRFX0ZBSUxFRCcsXHJcbiAgICBwYXlsb2FkOiBlcnJtZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpb25zU3VjY2VzID0gcmVnaW9uID0+ICh7XHJcbiAgICB0eXBlOiAnUkVHSU9OX1NVQ0NFU1MnLFxyXG4gICAgcGF5bG9hZDogcmVnaW9uLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGluayA9IGxpbmsgPT4gKHtcclxuICAgIHR5cGU6IFwiQUREX0xJTktcIixcclxuICAgIHBheWxvYWQ6bGlua1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25UaGlyZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlciA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlcik7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbGFzdF9zdGVwYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJ9Cj0YHQv9C10YjQvdC+JykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFRpbWVvdXQoKCkgPT4ge2Rpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMCkpfSw2MDAwKSApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJykpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUm91dGVyLnB1c2goJy90aGFua3MnKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gIGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5pZF9jYXJkX251bWJlciA/IFwi0J3QvtC80LXRgCDRg9C00L7RgdGC0LLQvtGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XCIgOiBcIlwiIHx8IGUuZXJyb3JzLmliYW5fYWNjb3VudCB8fCBlLmVycm9ycy5jYXJkX251bWJlciB8fCBlLmVycm9ycyB8fCAgbnVsbCkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdGluZ0FjdGlvbihoaXN0b3J5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RlcCcsICdmaW5hbCcpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMClcclxuICAgIGhpc3RvcnkucHVzaCgnL3RoYW5rcycpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFJlZ2lvbnMgPSAocmVnaW9uX2lkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChkYXRlTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvY2l0eS8ke3JlZ2lvbl9pZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVnaW9ucyA9PiBkaXNwYXRjaChyZWdpb25zU3VjY2VzKHJlZ2lvbnMpKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGRpc3BhdGNoKGRhdGVGYWlsZWQoZXJyb3IubWVzc2FnZSkpKTtcclxuICB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9