webpackHotUpdate_N_E("pages/get_money",{

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
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
  } else {
    console.log("not working");
  }
}

var postRegistrationCode = function postRegistrationCode(registration) {
  return function (dispatch) {
    dispatch(emptyMessage());
    dispatch(isLoading(true));
    registration.source = 'i-credit1';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9BY3Rpb25DcmVhdG9ycy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2luZ01vbmV5IiwibW9uZXkiLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJwYXlsb2FkIiwicmVwbGFjZURhdGUiLCJ2YWwiLCJTdHJpbmciLCJyZXBsYWNlIiwiY2hhbmdpbmdEYXkiLCJkYXkiLCJTVUNDRVNTX1JFU1BPTlNFIiwicmVzdWx0IiwiRkFJTEVEX1JFU1BPTlNFIiwic3VjY2Vzc01lc3NhZ2UiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwiZW1wdHlNZXNzYWdlIiwiYWRkUmVnaXN0cmF0aW9uIiwicmVnaXN0cmF0aW9ucyIsInN0ZXBSZWdpc3RyYXRpb24iLCJzdGVwIiwiaXNMb2FkaW5nIiwibG9hZGVyIiwicG9zdFJlZ2lzdHJhdGlvbiIsInJlZ2lzdHJhdGlvbiIsImRpc3BhdGNoIiwicGhvbmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIndpbmRvdyIsInNjcm9sbFRvIiwiciIsImUiLCJlcnJvcnMiLCJpaW4iLCJwYXNzd29yZCIsImVtYWlsIiwic2V0VGltZW91dCIsImNoZWNrSUlOIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0UmVnaXN0cmF0aW9uQ29kZSIsInNvdXJjZSIsImdldEl0ZW0iLCJhY2Nlc3NfdG9rZW4iLCJwb3N0UmVnaXN0cmF0aW9uU2Vjb25kIiwicmVsYXRpdmVfcGhvbmVfbnVtYmVyIiwiYWRkaXRpb25hbF9jb250YWN0X3Bob25lIiwiQXV0aG9yaXphdGlvbiIsInJlbGF0aXZlX25hbWUiLCJyZWxhdGl2ZV9sYXN0X25hbWUiLCJhcGFydG1lbnQiLCJkYXRlTG9hZGluZyIsImRhdGVGYWlsZWQiLCJlcnJtZXNzIiwicmVnaW9uc1N1Y2NlcyIsInJlZ2lvbiIsImFkZExpbmsiLCJsaW5rIiwicG9zdFJlZ2lzdHJhdGlvblRoaXJkIiwiY2FyZF9udW1iZXIiLCJjbGVhciIsImlkX2NhcmRfbnVtYmVyIiwiaWJhbl9hY2NvdW50IiwidGVzdGluZ0FjdGlvbiIsImhpc3RvcnkiLCJmZXRjaFJlZ2lvbnMiLCJyZWdpb25faWQiLCJBY2NlcHQiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsInJlZ2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDbkNDLFFBQUksRUFBRUMsbURBRDZCO0FBRW5DQyxXQUFPLEVBQUVIO0FBRjBCLEdBQUw7QUFBQSxDQUEzQjs7QUFLUCxTQUFTSSxXQUFULENBQXFCQyxHQUFyQixFQUEwQjtBQUN0QixTQUFPQyxNQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZRSxPQUFaLENBQW9CLFlBQXBCLEVBQWtDLEVBQWxDLENBQVA7QUFDSDs7QUFDTSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxHQUFHO0FBQUEsU0FBSztBQUMvQlIsUUFBSSxFQUFFQyxpREFEeUI7QUFFL0JDLFdBQU8sRUFBRU07QUFGc0IsR0FBTDtBQUFBLENBQXZCO0FBTUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFBQyxNQUFNO0FBQUEsU0FBSztBQUN2Q1YsUUFBSSxFQUFFLGtCQURpQztBQUV2Q0UsV0FBTyxFQUFFUTtBQUY4QixHQUFMO0FBQUEsQ0FBL0I7S0FBTUQsZ0I7QUFLTixJQUFNRSxlQUFlLEdBQUcsU0FBbEJB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ZWJwYWNrL3BhZ2VzL2dldF9tb25leS4yNTQzMDVmZDY2NTcwODA3MjM2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQWN0aW9uVHlwZXMgZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdpbmdNb25leSA9IG1vbmV5ID0+ICh7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5NT05FWV9DSEFOR0UsXHJcbiAgICBwYXlsb2FkOiBtb25leSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlRGF0ZSh2YWwpIHtcclxuICAgIHJldHVybiBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGNoYW5naW5nRGF5ID0gZGF5ID0+ICh7XHJcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5EQVlfQ0hBTkdFLFxyXG4gICAgcGF5bG9hZDogZGF5LFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgU1VDQ0VTU19SRVNQT05TRSA9IHJlc3VsdCA9PiAoe1xyXG4gICAgdHlwZTogXCJTVUNDRVNTX1JFU1BPTlNFXCIsXHJcbiAgICBwYXlsb2FkOiByZXN1bHRcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgRkFJTEVEX1JFU1BPTlNFID0gcmVzdWx0ID0+ICh7XHJcbiAgICB0eXBlOiBcIkZBSUxFRF9SRVNQT05TRVwiLFxyXG4gICAgcGF5bG9hZDogcmVzdWx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gbWVzc2FnZSA9PiAoe1xyXG4gICAgdHlwZTogJ1NVQ0NFU1NfTUVTU0FHRScsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBlcnJvck1lc3NhZ2UgPSBtZXNzYWdlID0+ICh7XHJcbiAgICB0eXBlOiAnRVJST1JfTUVTU0FHRScsXHJcbiAgICBwYXlsb2FkOiBtZXNzYWdlLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGVtcHR5TWVzc2FnZSA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnRU1QVFlfTUVTU0FHRScsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFJlZ2lzdHJhdGlvbiA9IHJlZ2lzdHJhdGlvbnMgPT4gKHtcclxuICAgIHR5cGU6ICdBRERfUkVHSVNUUkFUSU9OJyxcclxuICAgIHBheWxvYWQ6IHJlZ2lzdHJhdGlvbnMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0ZXBSZWdpc3RyYXRpb24gPSBzdGVwID0+ICh7XHJcbiAgICB0eXBlOiAnU1RFUF9SRUdJU1RSQVRJT04nLFxyXG4gICAgcGF5bG9hZDogc3RlcCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaXNMb2FkaW5nID0gbG9hZGVyID0+ICh7XHJcbiAgICB0eXBlOiAnSVNfTE9BRElORycsXHJcbiAgICBwYXlsb2FkOiBsb2FkZXIsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSk7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnBob25lID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLnBob25lKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9yZWdpc3RyYXRpb25fc3RlcF9vbmVgLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAvLyAudGhlbihjb25zb2xlLmxvZyhyZXNwb25zZSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goYWRkUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbikpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RlcFwiLCAxKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB3aW5kb3cuc2Nyb2xsVG8oMCwwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdWNjZXNzTWVzc2FnZSgnJykpKVxyXG4gICAgICAgIC5jYXRjaChyPT5yLmpzb24oKS50aGVuKGU9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5paW4gPyBcItCY0J3QnSDRg9C20LUg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9LiDQktGLINCx0YPQtNC10YLQtSDQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdGLINC90LAg0YHRgtGA0LDQvdC40YbRgyDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGPISBcIjogXCJcIiB8fCBlLmVycm9ycy5wYXNzd29yZCA/IFwi0J/QsNGA0L7Qu9C4INC90LUg0YHQvtCy0L/QsNC00LDRjtGCXCI6IFwiXCIgfHwgZS5lcnJvcnMucGhvbmUgPyBcItCf0L7Qu9GM0LLQvtC30LDRgtC10LvRjCDRgSDRgtCw0LrQuNC8INGC0LXQu9C10YTQvtC9INC90L7QvNC10YDQvtC8INGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L1cIiA6IGUuZXJyb3JzLmVtYWlsIHx8IFwiXCIgfHwgICBlLmVycm9ycyApKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGVja0lJTihlLmVycm9ycyk7XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0pKS50aGVuKCgpPT5kaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJSU4odmFsKSB7XHJcbiAgICBpZih2YWwgJiYgdmFsLmlpbikge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IHdvcmtpbmdcIilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWdpc3RyYXRpb25Db2RlID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChlbXB0eU1lc3NhZ2UoKSk7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnNvdXJjZSA9J2ktY3JlZGl0MSc7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXRtX3NvdXJjZScpKSB7XHJcbiAgICAgICAgcmVnaXN0cmF0aW9uLnNvdXJjZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1dG1fc291cmNlJykgKydfMSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL2NoZWNrX3Ntc19jb2RlYCx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uKSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOicqJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuYWNjZXNzX3Rva2VuKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goYWRkUmVnaXN0cmF0aW9uKCcnKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigyKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goZW1wdHlNZXNzYWdlKCkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4ge2xvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RlcFwiLCAyKX0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2U9PiB3aW5kb3cuc2Nyb2xsVG8oMCwwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChpc0xvYWRpbmcoZmFsc2UpKSlcclxuICAgICAgICAuY2F0Y2gociA9PiByLmpzb24oKS50aGVuKGUgPT4gZGlzcGF0Y2goZXJyb3JNZXNzYWdlKFwi0J7RgtC/0YDQsNCy0LvQtdC90L3Ri9C5INCy0LDQvNC4INC60L7QtCDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCXCIpKSkpLnRoZW4oKCkgPT4gZGlzcGF0Y2goaXNMb2FkaW5nKGZhbHNlKSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVnaXN0cmF0aW9uU2Vjb25kID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLnJlbGF0aXZlX3Bob25lX251bWJlciA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5yZWxhdGl2ZV9waG9uZV9udW1iZXIpO1xyXG4gICAgcmVnaXN0cmF0aW9uLmFkZGl0aW9uYWxfY29udGFjdF9waG9uZSA9IHJlcGxhY2VEYXRlKHJlZ2lzdHJhdGlvbi5hZGRpdGlvbmFsX2NvbnRhY3RfcGhvbmUpO1xyXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3JlZ2lzdHJhdGlvbl9zdGVwX3R3b2Ase1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlZ2lzdHJhdGlvbiksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzonKicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+e1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGRpc3BhdGNoKHN0ZXBSZWdpc3RyYXRpb24oMykpKS50aGVuKCgpID0+IGRpc3BhdGNoKGVtcHR5TWVzc2FnZSgpKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHtsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0ZXBcIiwgMyl9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlPT4gd2luZG93LnNjcm9sbFRvKDAsMCkpXHJcbiAgICAgICAgLmNhdGNoKHIgPT4gci5qc29uKCkudGhlbihlID0+IGRpc3BhdGNoKGVycm9yTWVzc2FnZShlLmVycm9ycy5yZWxhdGl2ZV9uYW1lIHx8IGUuZXJyb3JzLnJlbGF0aXZlX2xhc3RfbmFtZSB8fCBlLmVycm9ycy5yZWxhdGl2ZV9waG9uZV9udW1iZXIgfHwgZS5lcnJvcnMuYXBhcnRtZW50IHx8ZS5tZXNzYWdlKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYXRlTG9hZGluZyA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiBcIkRBVEVfTE9BRElOR1wiXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBkYXRlRmFpbGVkID0gZXJybWVzcyA9PiAoe1xyXG4gICAgdHlwZTogJ0RBVEVfRkFJTEVEJyxcclxuICAgIHBheWxvYWQ6IGVycm1lc3MsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lvbnNTdWNjZXMgPSByZWdpb24gPT4gKHtcclxuICAgIHR5cGU6ICdSRUdJT05fU1VDQ0VTUycsXHJcbiAgICBwYXlsb2FkOiByZWdpb24sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRMaW5rID0gbGluayA9PiAoe1xyXG4gICAgdHlwZTogXCJBRERfTElOS1wiLFxyXG4gICAgcGF5bG9hZDpsaW5rXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdFJlZ2lzdHJhdGlvblRoaXJkID0gKHJlZ2lzdHJhdGlvbikgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChpc0xvYWRpbmcodHJ1ZSkpO1xyXG4gICAgcmVnaXN0cmF0aW9uLmNhcmRfbnVtYmVyID0gcmVwbGFjZURhdGUocmVnaXN0cmF0aW9uLmNhcmRfbnVtYmVyKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9sYXN0X3N0ZXBgLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb24pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6JyonLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PntcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBkaXNwYXRjaChzdWNjZXNzTWVzc2FnZSgn0KPRgdC/0LXRiNC90L4nKSkpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gc2V0VGltZW91dCgoKSA9PiB7ZGlzcGF0Y2goc3RlcFJlZ2lzdHJhdGlvbigwKSl9LDYwMDApIClcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG4gICAgICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXAnLCAnZmluYWwnKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZT0+IHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBSb3V0ZXIucHVzaCgnL3RoYW5rcycpKVxyXG4gICAgICAgIC5jYXRjaChyID0+IHIuanNvbigpLnRoZW4oZSA9PiAgZGlzcGF0Y2goZXJyb3JNZXNzYWdlKGUuZXJyb3JzLmlkX2NhcmRfbnVtYmVyID8gXCLQndC+0LzQtdGAINGD0LTQvtGB0YLQstC+0YDQtdC90LjQtSDQu9C40YfQvdC+0YHRgtC4INGD0LbQtSDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L1cIiA6IFwiXCIgfHwgZS5lcnJvcnMuaWJhbl9hY2NvdW50IHx8IGUuZXJyb3JzLmNhcmRfbnVtYmVyIHx8IGUuZXJyb3JzIHx8ICBudWxsKSkpKS50aGVuKCgpID0+IGRpc3BhdGNoKGlzTG9hZGluZyhmYWxzZSkpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0aW5nQWN0aW9uKGhpc3RvcnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdGVwJywgJ2ZpbmFsJylcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge2xvY2FsU3RvcmFnZS5jbGVhcigpfSw1MDAwKVxyXG4gICAgaGlzdG9yeS5wdXNoKCcvdGhhbmtzJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoUmVnaW9ucyA9IChyZWdpb25faWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKGRhdGVMb2FkaW5nKHRydWUpKTtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS9jaXR5LyR7cmVnaW9uX2lkfWAsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgRXJyb3IgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm1lc3MgPSBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJybWVzcztcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbihyZWdpb25zID0+IGRpc3BhdGNoKHJlZ2lvbnNTdWNjZXMocmVnaW9ucykpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGF0Y2goZGF0ZUZhaWxlZChlcnJvci5tZXNzYWdlKSkpO1xyXG4gIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=