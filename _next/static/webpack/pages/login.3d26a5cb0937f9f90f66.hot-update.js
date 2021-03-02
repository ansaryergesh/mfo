webpackHotUpdate_N_E("pages/login",{

/***/ "./defaults/validationredux.js":
/*!*************************************!*\
  !*** ./defaults/validationredux.js ***!
  \*************************************/
/*! exports provided: required, validEmail, acceptCirrilic, confirmPassword, checkAlphabet, passwordCheck, iin, phoneCheck, isValidIBANNumber, isValidIBANNumber2, givenDateCardId, expDateCardId, onlyEnglish, checkStringName, idNumber, isExpDateOfCardValid, checkCardValid, validage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptCirrilic", function() { return acceptCirrilic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPassword", function() { return confirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAlphabet", function() { return checkAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordCheck", function() { return passwordCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iin", function() { return iin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneCheck", function() { return phoneCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIBANNumber", function() { return isValidIBANNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIBANNumber2", function() { return isValidIBANNumber2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "givenDateCardId", function() { return givenDateCardId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expDateCardId", function() { return expDateCardId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyEnglish", function() { return onlyEnglish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStringName", function() { return checkStringName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idNumber", function() { return idNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpDateOfCardValid", function() { return isExpDateOfCardValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCardValid", function() { return checkCardValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validage", function() { return validage; });
var _this = undefined;

var required = function required(val) {
  return val && val.length;
};
var validEmail = function validEmail(val) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
};
var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);

  if (falsy === false) {
    return true;
  }

  return false;
};
var confirmPassword = function confirmPassword(allValues) {
  if ( false || allValues.password) {
    if (allValues.password === allValues.password_confirmation) {
      return true;
    }
  }

  return false;
};
var checkAlphabet = function checkAlphabet(val) {
  return /[a-zA-Z0-9_]/i.test(val);
};
var passwordCheck = function passwordCheck(val) {
  if (val && val.length < 5) return false;
  if (!val) return false;
  return true;
};
var iin = function iin(val) {
  if (val && val.length !== 12) return false;
  if (!val) return false;
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;

  for (var i = 0; i < 12; i++) {
    a[i] = parseInt(val.substring(i, i + 1));
    if (i < 11) controll += a[i] * b1[i];
  }

  controll = controll % 11;

  if (controll == 10) {
    controll = 0;

    for (var i = 0; i < 11; i++) {
      controll += a[i] * b2[i];
    }

    controll = controll % 11;
  }

  if (controll != a[11]) return false;
  return true;
};
var phoneCheck = function phoneCheck(val) {
  var PHONE_OPERATORS = [{
    id: '7700'
  }, {
    id: '7701'
  }, {
    id: '7702'
  }, {
    id: '7705'
  }, {
    id: '7706'
  }, {
    id: '7707'
  }, {
    id: '7708'
  }, {
    id: '7747'
  }, {
    id: '7771'
  }, {
    id: '7775'
  }, {
    id: '7776'
  }, {
    id: '7777'
  }, {
    id: '7778'
  }];
  var phone = String(val).replace(/[^A-Z0-9]/g, ''),
      code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (!code || phone.length !== 11) {
    return false;
  }

  var phone_number = code[1];
  var phone_operator = PHONE_OPERATORS.filter(function (item) {
    return item.id == phone_number;
  });

  if (phone_operator.length > 0) {
    return true;
  } else {
    return false;
  }
}; // Luna algo

var isValidIBANNumber = function isValidIBANNumber(input) {
  var CODE_LENGTHS = 20;
  var BANKS = [{
    id: '947',
    name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'
  }, {
    id: '826',
    name: 'АО "АТФБанк"'
  }, {
    id: '913',
    name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'
  }, {
    id: '722',
    name: 'АО "KASPI BANK"'
  }, {
    id: '766',
    name: 'АО "Центральный Депозитарий Ценных Бумаг"'
  }, {
    id: '832',
    name: 'АО "Ситибанк Казахстан"'
  }, {
    id: '907',
    name: 'АО "Банк Развития Казахстана"'
  }, {
    id: '700',
    name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'
  }, {
    id: '948',
    name: 'АО "Евразийский Банк"'
  }, {
    id: '009',
    name: 'НАО Государственная корпорация "Правительство для граждан"'
  }, {
    id: '972',
    name: 'АО "Жилстройсбербанк Казахстана"'
  }, {
    id: '246',
    name: 'АО "Исламский Банк "Al Hilal"'
  }, {
    id: '601',
    name: 'АО "Народный Банк Казахстана"'
  }, {
    id: '930',
    name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'
  }, {
    id: '550',
    name: 'г.Москва Межгосударственный Банк'
  }, {
    id: '886',
    name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'
  }, {
    id: '965',
    name: 'АО "ForteBank"'
  }, {
    id: '927',
    name: 'АО "Казахстанская фондовая биржа"'
  }, {
    id: '821',
    name: 'АО "Банк "Bank RBK"'
  }, {
    id: '224',
    name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'
  }, {
    id: '070',
    name: 'РГУ "Комитет казначейства Министерства финансов РК"'
  }, {
    id: '551',
    name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'
  }, {
    id: '885',
    name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'
  }, {
    id: '774',
    name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '
  }, {
    id: '553',
    name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'
  }, {
    id: '147',
    name: '"Банк-кастодиан АО  "ЕНПФ"'
  }, {
    id: '125',
    name: 'РГУ Национальный Банк Республики Казахстан'
  }, {
    id: '849',
    name: 'АО "Нурбанк"'
  }, {
    id: '914',
    name: 'ДБ АО "Сбербанк"'
  }, {
    id: '435',
    name: 'АО "Шинхан Банк Казахстан"'
  }, {
    id: '781',
    name: 'АО "Capital Bank Kazakhstan"'
  }, {
    id: '620',
    name: 'АО "Tengri Bank"'
  }, {
    id: '998',
    name: 'АО "First Heartland Jysan Bank"'
  }, {
    id: '432',
    name: 'ДО АО Банк ВТБ (Казахстан)'
  }, {
    id: '896',
    name: 'АО "Исламский банк "Заман-Банк"'
  }, ''];
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/),
      digits;

  if (!code || iban.length !== CODE_LENGTHS) {
    return 'Заполните поле до конца';
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return bank[0].name;
  } else {
    return "Некорректный счет";
    return false;
  }

  digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  if (_this.mod97(digits) === 1) {
    return true;
  } else {
    return "Неправильно";
  }
};
var isValidIBANNumber2 = function isValidIBANNumber2(input) {
  var CODE_LENGTHS = 20;
  var BANKS = [{
    id: '947',
    name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'
  }, {
    id: '826',
    name: 'АО "АТФБанк"'
  }, {
    id: '949',
    name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited) '
  }, {
    id: '913',
    name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'
  }, {
    id: '722',
    name: 'АО "KASPI BANK"'
  }, {
    id: '766',
    name: 'АО "Центральный Депозитарий Ценных Бумаг"'
  }, {
    id: '832',
    name: 'АО "Ситибанк Казахстан"'
  }, {
    id: '907',
    name: 'АО "Банк Развития Казахстана"'
  }, {
    id: '700',
    name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'
  }, {
    id: '948',
    name: 'АО "Евразийский Банк"'
  }, {
    id: '009',
    name: 'НАО Государственная корпорация "Правительство для граждан"'
  }, {
    id: '972',
    name: 'АО "Жилстройсбербанк Казахстана"'
  }, {
    id: '246',
    name: 'АО "Исламский Банк "Al Hilal"'
  }, {
    id: '601',
    name: 'АО "Народный Банк Казахстана"'
  }, {
    id: '930',
    name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'
  }, {
    id: '550',
    name: 'г.Москва Межгосударственный Банк'
  }, {
    id: '886',
    name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'
  }, {
    id: '965',
    name: 'АО "ForteBank"'
  }, {
    id: '927',
    name: 'АО "Казахстанская фондовая биржа"'
  }, {
    id: '821',
    name: 'АО "Банк "Bank RBK"'
  }, {
    id: '224',
    name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'
  }, {
    id: '070',
    name: 'РГУ "Комитет казначейства Министерства финансов РК"'
  }, {
    id: '563',
    name: 'АО "КАЗПОЧТА"'
  }, {
    id: '551',
    name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'
  }, {
    id: '885',
    name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'
  }, {
    id: '774',
    name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '
  }, {
    id: '553',
    name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'
  }, {
    id: '147',
    name: '"Банк-кастодиан АО  "ЕНПФ"'
  }, {
    id: '125',
    name: 'РГУ Национальный Банк Республики Казахстан'
  }, {
    id: '849',
    name: 'АО "Нурбанк"'
  }, {
    id: '914',
    name: 'ДБ АО "Сбербанк"'
  }, {
    id: '435',
    name: 'АО "Шинхан Банк Казахстан"'
  }, {
    id: '781',
    name: 'АО "Capital Bank Kazakhstan"'
  }, {
    id: '620',
    name: 'АО "Tengri Bank"'
  }, {
    id: '998',
    name: 'АО "First Heartland Jysan Bank"'
  }, {
    id: '432',
    name: 'ДО АО Банк ВТБ (Казахстан)'
  }, {
    id: '896',
    name: 'АО "Исламский банк "Заман-Банк"'
  }, ''];
  var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
      code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/),
      digits;

  if (!code || iban.length !== CODE_LENGTHS) {
    // return 'Заполните поле до конца'
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return true;
  } else {
    return false;
  }

  digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return letter.charCodeAt(0) - 55;
  });

  if (_this.mod97(digits) === 1) {
    return true;
  } else {
    return false;
  }
}; // Third step

var givenDateCardId = function givenDateCardId(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 10) {
    return false;
  }

  var myDate = new Date(val.substring(6, 10) + '-' + val.substring(3, 5) + '-' + val.substring(0, 2));

  if (myDate == 'Invalid Date') {
    return false;
  }

  var today = new Date();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayY = today.getFullYear();
  var myM = myDate.getMonth() + 1;
  var myD = myDate.getDate();
  var myY = myDate.getFullYear();

  if (myY > todayY) {
    return false;
  }

  if (myY < todayY - 25) {
    return false;
  }

  if (myY === todayY) {
    if (myM === todayM && myD > todayD) {
      return false;
    }

    if (myM > todayM) {
      return false;
    }

    return true;
  }

  return true;
};
var expDateCardId = function expDateCardId(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 10) {
    return false;
  }

  var myDate = new Date(val.substring(6, 10) + '-' + val.substring(3, 5) + '-' + val.substring(0, 2));

  if (myDate == 'Invalid Date') {
    return false;
  }

  var today = new Date();
  var todayM = today.getMonth() + 1;
  var todayD = today.getDate();
  var todayY = today.getFullYear();
  var myM = myDate.getMonth() + 1;
  var myD = myDate.getDate();
  var myY = myDate.getFullYear();

  if (myY < todayY) {
    return false;
  }

  return true;
}; // export const givenDateCardId = (val) => {
//     var res = String(val).replace(/_/g, "");
//     if(res.length !== 10) {
//         return false
//     }
//     // 02.05.1999
// 	// const myDate = new Date(val);
// 	const today = new Date()
// 	var todayM = today.getMonth() + 1;
// 	var todayD = today.getDay();
// 	var todayY = today.getFullYear();
// 	var myM = () => {
//         if(val[3] == 0) {
//             return val[4]
//         }
//         else {
//             return val.substring(3,5);
//         }
//     };
//     var myD = () => {
//         if(val[0] == 0) {
//             return val[1]
//         }
//         else {
//             return val.substring(0,2);
//         }
//     };
// 	var myY = val.substring(6,9)
// 	if(myY>todayY) {
// 		return false;
// 	}
// 	if(myY < todayY-11) {
// 		return false;
// 	}
// 	if(myY === todayY) {
// 		if(myM === todayM && myD > todayD) {
// 			return false
// 		}
// 		if(myM > todayM) {
// 			return false
// 		}
// 		return true
// 	}
// 	return true
// }

var onlyEnglish = function onlyEnglish(val) {
  return /^[a-zA-Z\s]*$/.test(val);
};
var checkStringName = function checkStringName(val) {
  if (val && val.replace(/\s+$/, '').split(/\W+/).length === 2) {
    return true;
  }

  return false;
};
var idNumber = function idNumber(val) {
  var res = String(val).replace(/_/g, "");

  if (res.length !== 9) {
    return false;
  } else {
    return true;
  }
};
var isExpDateOfCardValid = function isExpDateOfCardValid(input) {
  var expDate = String(input).toUpperCase().replace(/[^0-9]/g, '');
  var date = expDate.match(/^(\d{2})(\d{2})$/);

  if (expDate.length === 4) {
    if (date[1] > 12 || date[2] < 20) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};
var checkCardValid = function checkCardValid(value) {
  if (/[^0-9-\s]+/.test(value)) return false;
  var nCheck = 0,
      nDigit = 0,
      bEven = false;
  value = value.replace(/\D/g, "");

  if (value.length !== 16) {
    return false;
  } else {
    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
          _nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((_nDigit *= 2) > 9) _nDigit -= 9;
      }

      nCheck += _nDigit;
      bEven = !bEven;
    }

    if (nCheck % 10 !== 0) {
      return false;
    } else {
      return true;
    }
  }
};

function year(dateString) {
  if (dateString[0] == 0) {
    return '20' + dateString.substring(0, 2);
  }

  return '19' + dateString.substring(0, 2);
}

function getAge(dateString) {
  var now = new Date();
  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();
  var dob = new Date(year(dateString), dateString.substring(2, 4) - 1, dateString.substring(4, 6));
  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var yearAge = yearNow - yearDob;
  if (monthNow >= monthDob) var monthAge = monthNow - monthDob;else {
    yearAge--;
    var monthAge = 12 + monthNow - monthDob;
  }
  if (dateNow >= dateDob) var dateAge = dateNow - dateDob;else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }
  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge
  };
  return age.years;
}

var validage = function validage(iin) {
  if (getAge(iin) < 18 || getAge(iin) > 63) {
    return false;
  }

  return true;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnJlZHV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsIiwibGVuZ3RoIiwidmFsaWRFbWFpbCIsInRlc3QiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwiY29uZmlybVBhc3N3b3JkIiwiYWxsVmFsdWVzIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJjaGVja0FscGhhYmV0IiwicGFzc3dvcmRDaGVjayIsImlpbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJwaG9uZUNoZWNrIiwiUEhPTkVfT1BFUkFUT1JTIiwiaWQiLCJwaG9uZSIsIlN0cmluZyIsInJlcGxhY2UiLCJjb2RlIiwibWF0Y2giLCJwaG9uZV9udW1iZXIiLCJwaG9uZV9vcGVyYXRvciIsImZpbHRlciIsIml0ZW0iLCJpc1ZhbGlkSUJBTk51bWJlciIsImlucHV0IiwiQ09ERV9MRU5HVEhTIiwiQkFOS1MiLCJuYW1lIiwiaWJhbiIsInRvVXBwZXJDYXNlIiwiZGlnaXRzIiwiYmFua19jb2RlIiwiYmFuayIsImxldHRlciIsImNoYXJDb2RlQXQiLCJtb2Q5NyIsImlzVmFsaWRJQkFOTnVtYmVyMiIsImdpdmVuRGF0ZUNhcmRJZCIsInJlcyIsIm15RGF0ZSIsIkRhdGUiLCJ0b2RheSIsInRvZGF5TSIsImdldE1vbnRoIiwidG9kYXlEIiwiZ2V0RGF0ZSIsInRvZGF5WSIsImdldEZ1bGxZZWFyIiwibXlNIiwibXlEIiwibXlZIiwiZXhwRGF0ZUNhcmRJZCIsIm9ubHlFbmdsaXNoIiwiY2hlY2tTdHJpbmdOYW1lIiwic3BsaXQiLCJpZE51bWJlciIsImlzRXhwRGF0ZU9mQ2FyZFZhbGlkIiwiZXhwRGF0ZSIsImRhdGUiLCJjaGVja0NhcmRWYWxpZCIsInZhbHVlIiwibkNoZWNrIiwibkRpZ2l0IiwiYkV2ZW4iLCJuIiwiY0RpZ2l0IiwiY2hhckF0IiwieWVhciIsImRhdGVTdHJpbmciLCJnZXRBZ2UiLCJub3ciLCJ5ZWFyTm93IiwiZ2V0WWVhciIsIm1vbnRoTm93IiwiZGF0ZU5vdyIsImRvYiIsInllYXJEb2IiLCJtb250aERvYiIsImRhdGVEb2IiLCJhZ2UiLCJ5ZWFyQWdlIiwibW9udGhBZ2UiLCJkYXRlQWdlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwidmFsaWRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFEO0FBQUEsU0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLE1BQXBCO0FBQUEsQ0FBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixHQUFEO0FBQUEsU0FBUyw0Q0FBNENHLElBQTVDLENBQWlESCxHQUFqRCxDQUFUO0FBQUEsQ0FBbkI7QUFDQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFKLEdBQUcsRUFBSTtBQUNqQyxNQUFJSyxLQUFLLEdBQUcsbUJBQW1CRixJQUFuQixDQUF3QkgsR0FBeEIsQ0FBWjs7QUFDQSxNQUFHSyxLQUFLLEtBQUssS0FBYixFQUFvQjtBQUNoQixXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDQU5NO0FBT0EsSUFBTUMsZUFBZSxHQUFJLFNBQW5CQSxlQUFtQixDQUFDQyxTQUFELEVBQWU7QUFDM0MsTUFBRyxNQUFJLElBQUlBLFNBQVMsQ0FBQ0MsUUFBckIsRUFBK0I7QUFDM0IsUUFBR0QsU0FBUyxDQUFDQyxRQUFWLEtBQXVCRCxTQUFTLENBQUNFLHFCQUFwQyxFQUEyRDtBQUN2RCxhQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELFNBQU8sS0FBUDtBQUNILENBUE07QUFRQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLEdBQUQ7QUFBQSxTQUFVLGdCQUFnQkcsSUFBaEIsQ0FBcUJILEdBQXJCLENBQVY7QUFBQSxD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SCxPQURMO0FBRUZJLFVBQU0sRUFBRUgsUUFGTjtBQUdGSSxRQUFJLEVBQUVIO0FBSEosR0FBTjtBQU1BLFNBQU9ILEdBQUcsQ0FBQ0ksS0FBWDtBQUNIOztBQUdNLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNuRixHQUFELEVBQVM7QUFDN0IsTUFBR2tFLE1BQU0sQ0FBQ2xFLEdBQUQsQ0FBTixHQUFZLEVBQVosSUFBa0JrRSxNQUFNLENBQUNsRSxHQUFELENBQU4sR0FBWSxFQUFqQyxFQUFxQztBQUNqQyxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjNkMjZhNWNiMDkzN2Y5ZjkwZjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGg7XHJcbmV4cG9ydCBjb25zdCB2YWxpZEVtYWlsID0gKHZhbCkgPT4gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWMgPSB2YWwgPT4ge1xyXG4gICAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICAgIGlmKGZhbHN5ID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbmZpcm1QYXNzd29yZCAgPSAoYWxsVmFsdWVzKSA9PiB7XHJcbiAgICBpZihudWxsIHx8IGFsbFZhbHVlcy5wYXNzd29yZCkge1xyXG4gICAgICAgIGlmKGFsbFZhbHVlcy5wYXNzd29yZCA9PT0gYWxsVmFsdWVzLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgY29uc3QgY2hlY2tBbHBoYWJldCA9ICh2YWwpID0+IFx0L1thLXpBLVowLTlfXS9pLnRlc3QodmFsKTtcclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSAodmFsKT0+IHtcclxuXHRpZih2YWwgJiYgdmFsLmxlbmd0aCA8IDUpIHJldHVybiBmYWxzZTtcclxuXHRpZighdmFsKSByZXR1cm4gZmFsc2U7XHJcblx0cmV0dXJuIHRydWVcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpaW4gPSAodmFsKSA9PiAge1xyXG4gIGlmKHZhbCAmJiB2YWwubGVuZ3RoIT09MTIpIHJldHVybiBmYWxzZTtcclxuICBpZighdmFsKSByZXR1cm4gZmFsc2U7XHJcbiAgdmFyIGIxID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEgXTtcclxuICB2YXIgYjIgPSBbIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMSwgMiBdO1xyXG4gIHZhciBhID0gW107XHJcbiAgdmFyIGNvbnRyb2xsID0gMDtcclxuICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuXHRhW2ldID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyhpLCBpKzEpKTtcclxuXHRpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4gIH1cclxuICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgaWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICBjb250cm9sbCA9IDA7XHJcbiAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICB9XHJcbiAgaWYoY29udHJvbGwhPWFbMTFdKSByZXR1cm4gZmFsc2U7XHJcbiAgXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuICAgIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICAgICAge2lkOiAnNzcwMCd9LFxyXG4gICAgICAgIHtpZDogJzc3MDEnfSxcclxuICAgICAgICB7aWQ6ICc3NzAyJ30sXHJcbiAgICAgICAge2lkOiAnNzcwNSd9LFxyXG4gICAgICAgIHtpZDogJzc3MDYnfSxcclxuICAgICAgICB7aWQ6ICc3NzA3J30sXHJcbiAgICAgICAge2lkOiAnNzcwOCd9LFxyXG4gICAgICAgIHtpZDogJzc3NDcnfSxcclxuICAgICAgICB7aWQ6ICc3NzcxJ30sXHJcbiAgICAgICAge2lkOiAnNzc3NSd9LFxyXG4gICAgICAgIHtpZDogJzc3NzYnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc3J30sXHJcbiAgICAgICAge2lkOiAnNzc3OCd9LFxyXG4gICAgXTtcclxuICAgIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gICAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICAgIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4wKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gTHVuYSBhbGdvXHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZElCQU5OdW1iZXIgPSAoaW5wdXQpPT4ge1xyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5MTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0JHQkNCd0Jog0JrQmNCi0JDQryDQkiDQmtCQ0JfQkNCl0KHQotCQ0J3QlVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzIyJywgbmFtZTogJ9CQ0J4gXCJLQVNQSSBCQU5LXCInfSxcclxuICAgICAgICB7aWQ6ICc3NjYnLCBuYW1lOiAn0JDQniBcItCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0JTQtdC/0L7Qt9C40YLQsNGA0LjQuSDQptC10L3QvdGL0YUg0JHRg9C80LDQs1wiJ30sXHJcbiAgICAgICAge2lkOiAnODMyJywgbmFtZTogJ9CQ0J4gXCLQodC40YLQuNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTA3JywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiDQoNCw0LfQstC40YLQuNGPINCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc3MDAnLCBuYW1lOiAn0JXQktCg0JDQl9CY0JnQodCa0JjQmSDQkdCQ0J3QmiDQoNCQ0JfQktCY0KLQmNCvJ30sXHJcbiAgICAgICAge2lkOiAnOTQ4JywgbmFtZTogJ9CQ0J4gXCLQldCy0YDQsNC30LjQudGB0LrQuNC5INCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICcwMDknLCBuYW1lOiAn0J3QkNCeINCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQutC+0YDQv9C+0YDQsNGG0LjRjyBcItCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC+INC00LvRjyDQs9GA0LDQttC00LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTcyJywgbmFtZTogJ9CQ0J4gXCLQltC40LvRgdGC0YDQvtC50YHQsdC10YDQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnMjQ2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0JHQsNC90LogXCJBbCBIaWxhbFwiJ30sXHJcbiAgICAgICAge2lkOiAnNjAxJywgbmFtZTogJ9CQ0J4gXCLQndCw0YDQvtC00L3Ri9C5INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc5MzAnLCBuYW1lOiAn0JDQniBcItCi0L7RgNCz0L7QstC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDQkdCw0L3QuiDQmtC40YLQsNGPINCyINCzLiDQkNC70LzQsNGC0YtcIid9LFxyXG4gICAgICAgIHtpZDogJzU1MCcsIG5hbWU6ICfQsy7QnNC+0YHQutCy0LAg0JzQtdC20LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCR0LDQvdC6J30sXHJcbiAgICAgICAge2lkOiAnODg2JywgbmFtZTogJ9CU0JEg0JDQniBcItCl0L7Rg9C8INCa0YDQtdC00LjRgiDRjdC90LQg0KTQuNC90LDQvdGBINCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NjUnLCBuYW1lOiAn0JDQniBcIkZvcnRlQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTI3JywgbmFtZTogJ9CQ0J4gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LDRjyDRhNC+0L3QtNC+0LLQsNGPINCx0LjRgNC20LBcIid9LFxyXG4gICAgICAgIHtpZDogJzgyMScsIG5hbWU6ICfQkNCeIFwi0JHQsNC90LogXCJCYW5rIFJCS1wiJ30sXHJcbiAgICAgICAge2lkOiAnMjI0JywgbmFtZTogJ9Cg0JPQnyBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQuNC5INGG0LXQvdGC0YAg0LzQtdC20LHQsNC90LrQvtCy0YHQutC40YUg0YDQsNGB0YfQtdGC0L7QsiDQndCR0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnMDcwJywgbmFtZTogJ9Cg0JPQoyBcItCa0L7QvNC40YLQtdGCINC60LDQt9C90LDRh9C10LnRgdGC0LLQsCDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0YTQuNC90LDQvdGB0L7QsiDQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIGJhbmtbMF0ubmFtZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGB0YfQtdGCXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGRpZ2l0cyA9IChjb2RlWzNdICsgY29kZVs0XSArIGNvZGVbMV0gKyBjb2RlWzJdKS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldHRlci5jaGFyQ29kZUF0KDApIC0gNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLm1vZDk3KGRpZ2l0cykgPT09IDEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCLQndC10L/RgNCw0LLQuNC70YzQvdC+XCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyMiA9IChpbnB1dCk9PiB7XHJcblxyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc5MjcnLCBuYW1lOiAn0JDQniBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQsNGPINGE0L7QvdC00L7QstCw0Y8g0LHQuNGA0LbQsFwiJ30sXHJcbiAgICAgICAge2lkOiAnODIxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBcIkJhbmsgUkJLXCInfSxcclxuICAgICAgICB7aWQ6ICcyMjQnLCBuYW1lOiAn0KDQk9CfIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutC40Lkg0YbQtdC90YLRgCDQvNC10LbQsdCw0L3QutC+0LLRgdC60LjRhSDRgNCw0YHRh9C10YLQvtCyINCd0JHQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICcwNzAnLCBuYW1lOiAn0KDQk9CjIFwi0JrQvtC80LjRgtC10YIg0LrQsNC30L3QsNGH0LXQudGB0YLQstCwINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRhNC40L3QsNC90YHQvtCyINCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzU2MycsIG5hbWU6ICfQkNCeIFwi0JrQkNCX0J/QntCn0KLQkFwiJ30sXHJcbiAgICAgICAge2lkOiAnNTUxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBLYXNzYSBOb3ZhXCIgKNCU0L7Rh9C10YDQvdC40Lkg0LHQsNC90Log0JDQniBcIkZvcnRlQmFua1wiKSd9LFxyXG4gICAgICAgIHtpZDogJzg4NScsIG5hbWU6ICfQkNCeIFwi0JTQkSBcItCa0JDQl9CQ0KXQodCi0JDQnS3Ql9CY0KDQkNCQ0KIg0JjQndCi0JXQoNCd0JXQqNCd0Jsg0JHQkNCd0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzc3NCcsIG5hbWU6ICfQkNCeIFwiQXNpYUNyZWRpdCBCYW5rICjQkNC30LjRj9Ca0YDQtdC00LjRgiDQkdCw0L3QuilcIiAnfSxcclxuICAgICAgICB7aWQ6ICc1NTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCf0LDQutC40YHRgtCw0L3QsFwiINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1J30sXHJcbiAgICAgICAge2lkOiAnMTQ3JywgbmFtZTogJ1wi0JHQsNC90Lot0LrQsNGB0YLQvtC00LjQsNC9INCQ0J4gIFwi0JXQndCf0KRcIid9LFxyXG4gICAgICAgIHtpZDogJzEyNScsIG5hbWU6ICfQoNCT0KMg0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCg0LXRgdC/0YPQsdC70LjQutC4INCa0LDQt9Cw0YXRgdGC0LDQvSd9LFxyXG4gICAgICAgIHtpZDogJzg0OScsIG5hbWU6ICfQkNCeIFwi0J3Rg9GA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzkxNCcsIG5hbWU6ICfQlNCRINCQ0J4gXCLQodCx0LXRgNCx0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc0MzUnLCBuYW1lOiAn0JDQniBcItCo0LjQvdGF0LDQvSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzc4MScsIG5hbWU6ICfQkNCeIFwiQ2FwaXRhbCBCYW5rIEthemFraHN0YW5cIid9LFxyXG4gICAgICAgIHtpZDogJzYyMCcsIG5hbWU6ICfQkNCeIFwiVGVuZ3JpIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzk5OCcsIG5hbWU6ICfQkNCeIFwiRmlyc3QgSGVhcnRsYW5kIEp5c2FuIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzQzMicsIG5hbWU6ICfQlNCeINCQ0J4g0JHQsNC90Log0JLQotCRICjQmtCw0LfQsNGF0YHRgtCw0L0pJ30sXHJcbiAgICAgICAge2lkOiAnODk2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0LHQsNC90LogXCLQl9Cw0LzQsNC9LdCR0LDQvdC6XCInfSxcclxuJydcclxuICAgIF07XHJcbiAgICB2YXIgaWJhbiA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgICAgIGNvZGUgPSBpYmFuLm1hdGNoKC9eKFtBLVpdezJ9KShcXGR7Mn0pKFxcZHszfSkoW0EtWlxcZF0rKSQvKSwgZGlnaXRzO1xyXG4gICAgaWYgKCFjb2RlIHx8IGliYW4ubGVuZ3RoICE9PSBDT0RFX0xFTkdUSFMpIHtcclxuICAgICAgICAvLyByZXR1cm4gJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICB2YXIgYmFua19jb2RlID0gY29kZVszXTtcclxuXHJcbiAgICB2YXIgYmFuayA9IEJBTktTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gYmFua19jb2RlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYoYmFuay5sZW5ndGggPjApe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZGlnaXRzID0gKGNvZGVbM10gKyBjb2RlWzRdICsgY29kZVsxXSArIGNvZGVbMl0pLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbGV0dGVyLmNoYXJDb2RlQXQoMCkgLSA1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMubW9kOTcoZGlnaXRzKSA9PT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8vIFRoaXJkIHN0ZXBcclxuXHJcbmV4cG9ydCBjb25zdCBnaXZlbkRhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwuc3Vic3RyaW5nKDYsMTApKyctJyt2YWwuc3Vic3RyaW5nKDMsNSkrJy0nK3ZhbC5zdWJzdHJpbmcoMCwyKSk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERhdGUoKTtcclxuXHR2YXIgdG9kYXlZID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbXlNID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBteUQgPSBteURhdGUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBteVkgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0aWYobXlZPnRvZGF5WSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRpZihteVkgPCB0b2RheVktMjUpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0aWYobXlZID09PSB0b2RheVkpIHtcclxuXHRcdGlmKG15TSA9PT0gdG9kYXlNICYmIG15RCA+IHRvZGF5RCkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGlmKG15TSA+IHRvZGF5TSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4cERhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwuc3Vic3RyaW5nKDYsMTApKyctJyt2YWwuc3Vic3RyaW5nKDMsNSkrJy0nK3ZhbC5zdWJzdHJpbmcoMCwyKSk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERhdGUoKTtcclxuXHR2YXIgdG9kYXlZID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbXlNID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBteUQgPSBteURhdGUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBteVkgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0aWYobXlZPHRvZGF5WSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBnaXZlbkRhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbi8vICAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuLy8gICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbi8vICAgICB9XHJcbi8vICAgICAvLyAwMi4wNS4xOTk5XHJcbi8vIFx0Ly8gY29uc3QgbXlEYXRlID0gbmV3IERhdGUodmFsKTtcclxuLy8gXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuLy8gXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbi8vIFx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERheSgpO1xyXG4vLyBcdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4vLyBcdHZhciBteU0gPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYodmFsWzNdID09IDApIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbFs0XVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbC5zdWJzdHJpbmcoMyw1KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG4vLyAgICAgdmFyIG15RCA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZih2YWxbMF0gPT0gMCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsWzFdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsLnN1YnN0cmluZygwLDIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vIFx0dmFyIG15WSA9IHZhbC5zdWJzdHJpbmcoNiw5KVxyXG5cclxuLy8gXHRpZihteVk+dG9kYXlZKSB7XHJcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0fVxyXG4vLyBcdGlmKG15WSA8IHRvZGF5WS0xMSkge1xyXG4vLyBcdFx0cmV0dXJuIGZhbHNlO1xyXG4vLyBcdH1cclxuLy8gXHRpZihteVkgPT09IHRvZGF5WSkge1xyXG4vLyBcdFx0aWYobXlNID09PSB0b2RheU0gJiYgbXlEID4gdG9kYXlEKSB7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZVxyXG4vLyBcdFx0fVxyXG4vLyBcdFx0aWYobXlNID4gdG9kYXlNKSB7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZVxyXG4vLyBcdFx0fVxyXG4vLyBcdFx0cmV0dXJuIHRydWVcclxuLy8gXHR9XHJcbi8vIFx0cmV0dXJuIHRydWVcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IG9ubHlFbmdsaXNoID12YWw9PiAvXlthLXpBLVpcXHNdKiQvLnRlc3QodmFsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1N0cmluZ05hbWUgPSB2YWwgPT4ge1xyXG5cdGlmICh2YWwgJiYgdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoID09PSAyKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHQgfVxyXG5cdCByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpZE51bWJlciA9ICh2YWwpPT4ge1xyXG5cdHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gOSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpc0V4cERhdGVPZkNhcmRWYWxpZCA9IChpbnB1dCkgPT57XHJcblx0dmFyIGV4cERhdGUgPSBTdHJpbmcoaW5wdXQpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW14wLTldL2csICcnKTtcclxuXHR2YXIgZGF0ZSA9IGV4cERhdGUubWF0Y2goL14oXFxkezJ9KShcXGR7Mn0pJC8pO1xyXG5cclxuXHRpZihleHBEYXRlLmxlbmd0aCA9PT0gNCl7XHJcblx0XHRpZihkYXRlWzFdID4gMTIgfHwgZGF0ZVsyXSA8IDIwKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fWVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrQ2FyZFZhbGlkPSAodmFsdWUpID0+IHtcclxuXHRpZiAoL1teMC05LVxcc10rLy50ZXN0KHZhbHVlKSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRsZXQgbkNoZWNrID0gMCwgbkRpZ2l0ID0gMCwgYkV2ZW4gPSBmYWxzZTtcclxuXHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcclxuXHJcblx0aWYodmFsdWUubGVuZ3RoICE9PSAxNil7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fWVsc2V7XHJcblx0XHRmb3IgKGxldCBuID0gdmFsdWUubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuXHRcdFx0bGV0IGNEaWdpdCA9IHZhbHVlLmNoYXJBdChuKSxcclxuXHRcdFx0XHRuRGlnaXQgPSBwYXJzZUludChjRGlnaXQsIDEwKTtcclxuXHJcblx0XHRcdGlmIChiRXZlbikge1xyXG5cdFx0XHRcdGlmICgobkRpZ2l0ICo9IDIpID4gOSkgbkRpZ2l0IC09IDk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5DaGVjayArPSBuRGlnaXQ7XHJcblx0XHRcdGJFdmVuID0gIWJFdmVuO1xyXG5cdFx0fVxyXG5cdFx0aWYoKG5DaGVjayAlIDEwKSAhPT0gMCl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB5ZWFyKGRhdGVTdHJpbmcpIHtcclxuICAgIGlmKCBkYXRlU3RyaW5nWzBdID09IDApIHtcclxuICAgICAgICByZXR1cm4gJzIwJytkYXRlU3RyaW5nLnN1YnN0cmluZygwLDIpO1xyXG4gICAgfVxyXG4gICAgICAgIHJldHVybiAnMTknK2RhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0QWdlKGRhdGVTdHJpbmcpIHtcclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIHllYXJOb3cgPSBub3cuZ2V0WWVhcigpO1xyXG4gICAgdmFyIG1vbnRoTm93ID0gbm93LmdldE1vbnRoKCk7XHJcbiAgICB2YXIgZGF0ZU5vdyA9IG5vdy5nZXREYXRlKCk7XHJcblxyXG4gICAgdmFyIGRvYiA9IG5ldyBEYXRlKHllYXIoZGF0ZVN0cmluZyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cmluZy5zdWJzdHJpbmcoMiw0KS0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGVTdHJpbmcuc3Vic3RyaW5nKDQsNilcclxuICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgIHZhciB5ZWFyRG9iID0gZG9iLmdldFllYXIoKTtcclxuICAgIHZhciBtb250aERvYiA9IGRvYi5nZXRNb250aCgpO1xyXG4gICAgdmFyIGRhdGVEb2IgPSBkb2IuZ2V0RGF0ZSgpO1xyXG4gICAgdmFyIGFnZSA9IHt9O1xyXG5cclxuICAgIHZhciB5ZWFyQWdlID0geWVhck5vdyAtIHllYXJEb2I7XHJcblxyXG4gICAgaWYgKG1vbnRoTm93ID49IG1vbnRoRG9iKVxyXG4gICAgICB2YXIgbW9udGhBZ2UgPSBtb250aE5vdyAtIG1vbnRoRG9iO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIHllYXJBZ2UtLTtcclxuICAgICAgdmFyIG1vbnRoQWdlID0gMTIgKyBtb250aE5vdyAtbW9udGhEb2I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGVOb3cgPj0gZGF0ZURvYilcclxuICAgICAgdmFyIGRhdGVBZ2UgPSBkYXRlTm93IC0gZGF0ZURvYjtcclxuICAgIGVsc2Uge1xyXG4gICAgICBtb250aEFnZS0tO1xyXG4gICAgICB2YXIgZGF0ZUFnZSA9IDMxICsgZGF0ZU5vdyAtIGRhdGVEb2I7XHJcblxyXG4gICAgICBpZiAobW9udGhBZ2UgPCAwKSB7XHJcbiAgICAgICAgbW9udGhBZ2UgPSAxMTtcclxuICAgICAgICB5ZWFyQWdlLS07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZ2UgPSB7XHJcbiAgICAgICAgeWVhcnM6IHllYXJBZ2UsXHJcbiAgICAgICAgbW9udGhzOiBtb250aEFnZSxcclxuICAgICAgICBkYXlzOiBkYXRlQWdlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gYWdlLnllYXJzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYWdlID0gKGlpbikgPT4ge1xyXG4gICAgaWYoZ2V0QWdlKGlpbik8MTggfHwgZ2V0QWdlKGlpbik+NjMpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=