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
        dispatch(errorMessage(e.errors.iin !== undefined ? "ИНН уже зарегистрирован. Вы будете перенаправлены на страницу авторизация! " :  true ? "Пароли не совпадают" : undefined));
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
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
  } else {
    console.log("not working");
  }
}

var postRegistrationCode = function postRegistrationCode(registration) {
  return function (dispatch) {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.source = 'icredit1';

    if (localStorage.getItem('utm_source')) {
      registration.source = localStorage.getItem('utm_source') + '_1';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwicGhvbmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwiciIsImUiLCJlcnJvcnMiLCJpaW4iLCJ1bmRlZmluZWQiLCJzZXRUaW1lb3V0IiwiY2hlY2tJSU4iLCJSb3V0ZXIiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInBvc3RSZWdpc3RyYXRpb25Db2RlIiwic291cmNlIiwiZ2V0SXRlbSIsImFjY2Vzc190b2tlbiIsInBvc3RSZWdpc3RyYXRpb25TZWNvbmQiLCJyZWxhdGl2ZV9waG9uZV9udW1iZXIiLCJhZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUiLCJBdXRob3JpemF0aW9uIiwicmVsYXRpdmVfbmFtZSIsInJlbGF0aXZlX2xhc3RfbmFtZSIsImFwYXJ0bWVudCIsImRhdGVMb2FkaW5nIiwiZGF0ZUZhaWxlZCIsImVycm1lc3MiLCJyZWdpb25zU3VjY2VzIiwicmVnaW9uIiwiYWRkTGluayIsImxpbmsiLCJwb3N0UmVnaXN0cmF0aW9uVGhpcmQiLCJjYXJkX251bWJlciIsImNsZWFyIiwiaWRfY2FyZF9udW1iZXIiLCJpYmFuX2FjY291bnQiLCJ0ZXN0aW5nQWN0aW9uIiwiaGlzdG9yeSIsImZldGNoUmVnaW9ucyIsInJlZ2lvbl9pZCIsIkFjY2VwdCIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVnaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuQ0MsUUFBSSxFQUFFQyxtREFENkI7QUFFbkNDLFdBQU8sRUFBRUg7QUFGMEIsR0FBTDtBQUFBLENBQTNCOztBQUtQLFNBQVNJLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNIOztBQUNNLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLEdBQUc7QUFBQSxTQUFLO0FBQy9CUixRQUFJLEVBQUVDLGlEQUR5QjtBQUUvQkMsV0FBTyxFQUFFTTtBQUZzQixHQUFMO0FBQUEsQ0FBdkI7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLE1BQU07QUFBQSxTQUFLO0FBQ3ZDVixRQUFJLEVBQUUsa0JBRGlDO0FBRXZDRSxXQUFPLEVBQUVRO0FBRjhCLEdBQUw7QUFBQSxDQUEvQjtLQUFNRCxnQjtBQUtOLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0Is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QXNDb0QsU0FBdEMsR0FBbUQ7QUFDN0QvQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0Isa0JBRFQ7QUFFUGdELGNBQU0sRUFBRTtBQUZEO0FBRG9ELEtBQW5ELENBQUwsQ0FNSjlDLElBTkksQ0FNQyxVQUFBQyxRQUFRLEVBQUk7QUFDaEIsVUFBSUEsUUFBUSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2YsZUFBT0QsUUFBUDtBQUNEOztBQUVELFVBQU04QyxLQUFLLEdBQUcsSUFBSUMsS0FBSixpQkFBbUIvQyxRQUFRLENBQUNnRCxNQUE1QixlQUF1Q2hELFFBQVEsQ0FBQ2lELFVBQWhELEVBQWQ7QUFDQUgsV0FBSyxDQUFDOUMsUUFBTixHQUFpQkEsUUFBakI7QUFDQSxZQUFNOEMsS0FBTjtBQUNELEtBZEksRUFlTCxVQUFBQSxLQUFLLEVBQUk7QUFDUCxVQUFNZixPQUFPLEdBQUcsSUFBSWdCLEtBQUosQ0FBVUQsS0FBSyxDQUFDbkUsT0FBaEIsQ0FBaEI7QUFDQSxZQUFNb0QsT0FBTjtBQUNELEtBbEJJLEVBbUJKaEMsSUFuQkksQ0FtQkMsVUFBQUMsUUFBUTtBQUFBLGFBQUlBLFFBQVEsQ0FBQ0UsSUFBVCxFQUFKO0FBQUEsS0FuQlQsRUFvQkpILElBcEJJLENBb0JDLFVBQUFtRCxPQUFPO0FBQUEsYUFBSTVELFFBQVEsQ0FBQzBDLGFBQWEsQ0FBQ2tCLE9BQUQsQ0FBZCxDQUFaO0FBQUEsS0FwQlIsV0FxQkUsVUFBQUosS0FBSztBQUFBLGFBQUl4RCxRQUFRLENBQUN3QyxVQUFVLENBQUNnQixLQUFLLENBQUNuRSxPQUFQLENBQVgsQ0FBWjtBQUFBLEtBckJQLENBQVA7QUFzQkQsR0F4QnlCO0FBQUEsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWFkOWE3OThmNGU0NDhiNDY2MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFjdGlvblR5cGVzIGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nTW9uZXkgPSBtb25leSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9ORVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogbW9uZXksXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gcmVwbGFjZURhdGUodmFsKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxyXG59XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2luZ0RheSA9IGRheSA9PiAoe1xyXG4gICAgdHlwZTogQWN0aW9uVHlwZXMuREFZX0NIQU5HRSxcclxuICAgIHBheWxvYWQ6IGRheSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNVQ0NFU1NfUkVTUE9OU0UgPSByZXN1bHQgPT4gKHtcclxuICAgIHR5cGU6IFwiU1VDQ0VTU19SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZBSUxFRF9SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJGQUlMRURfUkVTUE9OU0VcIixcclxuICAgIHBheWxvYWQ6IHJlc3VsdFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IG1lc3NhZ2UgPT4gKHtcclxuICAgIHR5cGU6ICdTVUNDRVNTX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZXJyb3JNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ0VSUk9SX01FU1NBR0UnLFxyXG4gICAgcGF5bG9hZDogbWVzc2FnZSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBlbXB0eU1lc3NhZ2UgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0VNUFRZX01FU1NBR0UnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRSZWdpc3RyYXRpb24gPSByZWdpc3RyYXRpb25zID0+ICh7XHJcbiAgICB0eXBlOiAnQUREX1JFR0lTVFJBVElPTicsXHJcbiAgICBwYXlsb2FkOiByZWdpc3RyYXRpb25zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGVwUmVnaXN0cmF0aW9uID0gc3RlcCA9PiAoe1xyXG4gICAgdHlwZTogJ1NURVBfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHN0ZXAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IGxvYWRlciA9PiAoe1xyXG4gICAgdHlwZTogJ0lTX0xPQURJTkcnLFxyXG4gICAgcGF5bG9hZDogbG9hZGVyLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbiA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpO1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5waG9uZSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvcmVnaXN0cmF0aW9uX3N0ZXBfb25lYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLy8gLnRoZW4oY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbihyZWdpc3RyYXRpb24pKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDEpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMSl9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJycpKSlcclxuICAgICAgICAuY2F0Y2gocj0+ci5qc29uKCkudGhlbihlPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChlcnJvck1lc3NhZ2UoICBlLmVycm9ycy5paW4gIT09IHVuZGVmaW5lZCA/IFwi0JjQndCdINGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0uINCS0Ysg0LHRg9C00LXRgtC1INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90Ysg0L3QsCDRgdGC0YDQsNC90LjRhtGDINCw0LLRgtC+0YDQuNC30LDRhtC40Y8hIFwiOiBcItCh0LjRgdGC0LXQvNCwINC90LUg0YDQsNCx0L7RgtCw0LXRgi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtVwiIHx8XHJcbiAgICAgICAgICAgIGUuZXJyb3JzLnBhc3N3b3JkID8gXCLQn9Cw0YDQvtC70Lgg0L3QtSDRgdC+0LLQv9Cw0LTQsNGO0YJcIjogXCJcIiB8fFxyXG4gICAgICAgICAgICBlLmVycm9ycy5lbWFpbCB8fFxyXG4gICAgICAgICAgICBlLmVycm9ycy5waG9uZSA/IFwi0J/QvtC70YzQstC+0LfQsNGC0LXQu9GMINGBINGC0LDQutC40Lwg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgNC+0Lwg0YPQttC1INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvVwiIDogXCJcIiAgfHxcclxuICAgICAgICAgICAgZS5lcnJvcnMgfHxcclxuICAgICAgICAgICAgZS5tZXNzYWdlIHx8IFwi0Jog0YHQvtC20LXQu9C10L3QuNGOINGB0LXRgNCy0LjRgSDQstGA0LXQvNC80LXQvdC+INC90LUg0YDQsNCx0L7RgtCw0LXRgi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtVwiXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoZWNrSUlOKGUuZXJyb3JzKTtcclxuICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgfSkpLnRoZW4oKCk9PmRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lJTih2YWwpIHtcclxuICAgIGlmKHZhbCAmJiB2YWwuaWluKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJub3Qgd29ya2luZ1wiKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvbkNvZGUgPSAocmVnaXN0cmF0aW9uKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKTtcclxuICAgIGRpc3BhdGNoKGlzTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZWdpc3RyYXRpb24uc291cmNlID0naWNyZWRpdDEnO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3V0bV9zb3VyY2UnKSkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvbi5zb3VyY2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXRtX3NvdXJjZScpICsnXzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaGVja19zbXNfY29kZWAse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlc3BvbnNlLmFjY2Vzc190b2tlbil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGFkZFJlZ2lzdHJhdGlvbignJykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMikpKS50aGVuKCgpID0+IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMil9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+IGRpc3BhdGNoKGVycm9yTWVzc2FnZShcItCe0YLQv9GA0LDQstC70LXQvdC90YvQuSDQstCw0LzQuCDQutC+0LQg0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRglwiKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvblNlY29uZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5yZWxhdGl2ZV9waG9uZV9udW1iZXIgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24ucmVsYXRpdmVfcGhvbmVfbnVtYmVyKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5hZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUgPSByZXBsYWNlRGF0ZShyZWdpc3RyYXRpb24uYWRkaXRpb25hbF9jb250YWN0X3Bob25lKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZWdpc3RyYXRpb25fc3RlcF90d29gLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdGVwUmVnaXN0cmF0aW9uKDMpKSkudGhlbigoKSA9PiBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB7bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdGVwXCIsIDMpfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHdpbmRvdy5zY3JvbGxUbygwLDApKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiBkaXNwYXRjaChlcnJvck1lc3NhZ2UoZS5lcnJvcnMucmVsYXRpdmVfbmFtZSB8fCBlLmVycm9ycy5yZWxhdGl2ZV9sYXN0X25hbWUgfHwgZS5lcnJvcnMucmVsYXRpdmVfcGhvbmVfbnVtYmVyIHx8IGUuZXJyb3JzLmFwYXJ0bWVudCB8fGUubWVzc2FnZSkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGF0ZUxvYWRpbmcgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJEQVRFX0xPQURJTkdcIlxyXG59KVxyXG5leHBvcnQgY29uc3QgZGF0ZUZhaWxlZCA9IGVycm1lc3MgPT4gKHtcclxuICAgIHR5cGU6ICdEQVRFX0ZBSUxFRCcsXHJcbiAgICBwYXlsb2FkOiBlcnJtZXNzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpb25zU3VjY2VzID0gcmVnaW9uID0+ICh7XHJcbiAgICB0eXBlOiAnUkVHSU9OX1NVQ0NFU1MnLFxyXG4gICAgcGF5bG9hZDogcmVnaW9uLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGluayA9IGxpbmsgPT4gKHtcclxuICAgIHR5cGU6IFwiQUREX0xJTktcIixcclxuICAgIHBheWxvYWQ6bGlua1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25UaGlyZCA9IChyZWdpc3RyYXRpb24pID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goaXNMb2FkaW5nKHRydWUpKTtcclxuICAgIHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlciA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5jYXJkX251bWJlcik7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvbGFzdF9zdGVwYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3VjY2Vzc01lc3NhZ2UoJ9Cj0YHQv9C10YjQvdC+JykpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldFRpbWVvdXQoKCkgPT4ge2Rpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMCkpfSw2MDAwKSApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJykpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gUm91dGVyLnB1c2goJy90aGFua3MnKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gIGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5pZF9jYXJkX251bWJlciA/IFwi0J3QvtC80LXRgCDRg9C00L7RgdGC0LLQvtGA0LXQvdC40LUg0LvQuNGH0L3QvtGB0YLQuCDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9XCIgOiBcIlwiIHx8IGUuZXJyb3JzLmliYW5fYWNjb3VudCB8fCBlLmVycm9ycy5jYXJkX251bWJlciB8fCBlLmVycm9ycyB8fCAgbnVsbCkpKSkudGhlbigoKSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdGVzdGluZ0FjdGlvbihoaXN0b3J5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RlcCcsICdmaW5hbCcpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtsb2NhbFN0b3JhZ2UuY2xlYXIoKX0sNTAwMClcclxuICAgIGhpc3RvcnkucHVzaCgnL3RoYW5rcycpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFJlZ2lvbnMgPSAocmVnaW9uX2lkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaChkYXRlTG9hZGluZyh0cnVlKSk7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvY2l0eS8ke3JlZ2lvbl9pZH1gLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yID0+IHtcclxuICAgICAgICBjb25zdCBlcnJtZXNzID0gbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm1lc3M7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVnaW9ucyA9PiBkaXNwYXRjaChyZWdpb25zU3VjY2VzKHJlZ2lvbnMpKSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGRpc3BhdGNoKGRhdGVGYWlsZWQoZXJyb3IubWVzc2FnZSkpKTtcclxuICB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9