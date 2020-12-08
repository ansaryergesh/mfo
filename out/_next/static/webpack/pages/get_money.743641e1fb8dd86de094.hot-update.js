webpackHotUpdate_N_E("pages/get_money",{

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
    id: '856',
    name: 'АО "Банк ЦентрКредит"'
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
    id: '856',
    name: 'АО "Банк ЦентрКредит"'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnJlZHV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsIiwibGVuZ3RoIiwidmFsaWRFbWFpbCIsInRlc3QiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwiY29uZmlybVBhc3N3b3JkIiwiYWxsVmFsdWVzIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJjaGVja0FscGhhYmV0IiwicGFzc3dvcmRDaGVjayIsImlpbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJwaG9uZUNoZWNrIiwiUEhPTkVfT1BFUkFUT1JTIiwiaWQiLCJwaG9uZSIsIlN0cmluZyIsInJlcGxhY2UiLCJjb2RlIiwibWF0Y2giLCJwaG9uZV9udW1iZXIiLCJwaG9uZV9vcGVyYXRvciIsImZpbHRlciIsIml0ZW0iLCJpc1ZhbGlkSUJBTk51bWJlciIsImlucHV0IiwiQ09ERV9MRU5HVEhTIiwiQkFOS1MiLCJuYW1lIiwiaWJhbiIsInRvVXBwZXJDYXNlIiwiZGlnaXRzIiwiYmFua19jb2RlIiwiYmFuayIsImxldHRlciIsImNoYXJDb2RlQXQiLCJtb2Q5NyIsImlzVmFsaWRJQkFOTnVtYmVyMiIsImdpdmVuRGF0ZUNhcmRJZCIsInJlcyIsIm15RGF0ZSIsIkRhdGUiLCJ0b2RheSIsInRvZGF5TSIsImdldE1vbnRoIiwidG9kYXlEIiwiZ2V0RGF0ZSIsInRvZGF5WSIsImdldEZ1bGxZZWFyIiwibXlNIiwibXlEIiwibXlZIiwiZXhwRGF0ZUNhcmRJZCIsIm9ubHlFbmdsaXNoIiwiY2hlY2tTdHJpbmdOYW1lIiwic3BsaXQiLCJpZE51bWJlciIsImlzRXhwRGF0ZU9mQ2FyZFZhbGlkIiwiZXhwRGF0ZSIsImRhdGUiLCJjaGVja0NhcmRWYWxpZCIsInZhbHVlIiwibkNoZWNrIiwibkRpZ2l0IiwiYkV2ZW4iLCJuIiwiY0RpZ2l0IiwiY2hhckF0IiwieWVhciIsImRhdGVTdHJpbmciLCJnZXRBZ2UiLCJub3ciLCJ5ZWFyTm93IiwiZ2V0WWVhciIsIm1vbnRoTm93IiwiZGF0ZU5vdyIsImRvYiIsInllYXJEb2IiLCJtb250aERvYiIsImRhdGVEb2IiLCJhZ2UiLCJ5ZWFyQWdlIiwibW9udGhBZ2UiLCJkYXRlQWdlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwidmFsaWRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFEO0FBQUEsU0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLE1BQXBCO0FBQUEsQ0FBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDRixHQUFEO0FBQUEsU0FBUyw0Q0FBNENHLElBQTVDLENBQWlESCxHQUFqRCxDQUFUO0FBQUEsQ0FBbkI7QUFDQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFKLEdBQUcsRUFBSTtBQUNqQyxNQUFJSyxLQUFLLEdBQUcsbUJBQW1CRixJQUFuQixDQUF3QkgsR0FBeEIsQ0FBWjs7QUFDQSxNQUFHSyxLQUFLLEtBQUssS0FBYixFQUFvQjtBQUNoQixXQUFPLElBQVA7QUFDSDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDQU5NO0FBT0EsSUFBTUMsZUFBZSxHQUFJLFNBQW5CQSxlQUFtQixDQUFDQyxTQUFELEVBQWU7QUFDM0MsTUFBRyxNQUFJLElBQUlBLFNBQVMsQ0FBQ0MsUUFBckIsRUFBK0I7QUFDM0IsUUFBR0QsU0FBUyxDQUFDQyxRQUFWLEtBQXVCRCxTQUFTLENBQUNFLHFCQUFwQyxFQUEyRDtBQUN2RCxhQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELFNBQU8sS0FBUDtBQUNILENBUE07QUFRQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNWLEdBQUQ7QUFBQSxTQUFVLGdCQUFnQkcsSUFBaEIsQ0FBcUJILEdBQXJCLENBQVY7QUFBQSxD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QUlJLE9BQWYsRUFDRSxJQUFJSSxPQUFPLEdBQUdSLE9BQU8sR0FBR0ksT0FBeEIsQ0FERixLQUVLO0FBQ0hHLFlBQVE7QUFDUixRQUFJQyxPQUFPLEdBQUcsS0FBS1IsT0FBTCxHQUFlSSxPQUE3Qjs7QUFFQSxRQUFJRyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkEsY0FBUSxHQUFHLEVBQVg7QUFDQUQsYUFBTztBQUNSO0FBQ0Y7QUFFREQsS0FBRyxHQUFHO0FBQ0ZJLFNBQUssRUFBRUgsT0FETDtBQUVGSSxVQUFNLEVBQUVILFFBRk47QUFHRkksUUFBSSxFQUFFSDtBQUhKLEdBQU47QUFNQSxTQUFPSCxHQUFHLENBQUNJLEtBQVg7QUFDSDs7QUFHTSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDbkYsR0FBRCxFQUFTO0FBQzdCLE1BQUdrRSxNQUFNLENBQUNsRSxHQUFELENBQU4sR0FBWSxFQUFaLElBQWtCa0UsTUFBTSxDQUFDbEUsR0FBRCxDQUFOLEdBQVksRUFBakMsRUFBcUM7QUFDakMsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsU0FBTyxJQUFQO0FBQ0gsQ0FMTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRfbW9uZXkuNzQzNjQxZTFmYjhkZDg2ZGUwOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSAodmFsKSA9PiB2YWwgJiYgdmFsLmxlbmd0aDtcclxuZXhwb3J0IGNvbnN0IHZhbGlkRW1haWwgPSAodmFsKSA9PiAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbCk7XHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpYyA9IHZhbCA9PiB7XHJcbiAgICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gICAgaWYoZmFsc3kgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgY29uc3QgY29uZmlybVBhc3N3b3JkICA9IChhbGxWYWx1ZXMpID0+IHtcclxuICAgIGlmKG51bGwgfHwgYWxsVmFsdWVzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgaWYoYWxsVmFsdWVzLnBhc3N3b3JkID09PSBhbGxWYWx1ZXMucGFzc3dvcmRfY29uZmlybWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydCBjb25zdCBjaGVja0FscGhhYmV0ID0gKHZhbCkgPT4gXHQvW2EtekEtWjAtOV9dL2kudGVzdCh2YWwpO1xyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRDaGVjayA9ICh2YWwpPT4ge1xyXG5cdGlmKHZhbCAmJiB2YWwubGVuZ3RoIDwgNSkgcmV0dXJuIGZhbHNlO1xyXG5cdGlmKCF2YWwpIHJldHVybiBmYWxzZTtcclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlpbiA9ICh2YWwpID0+ICB7XHJcblx0aWYodmFsICYmIHZhbC5sZW5ndGghPT0xMikgcmV0dXJuIGZhbHNlO1xyXG5cdGlmKCF2YWwpIHJldHVybiBmYWxzZTtcclxuXHR2YXIgYjEgPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSBdO1xyXG5cdHZhciBiMiA9IFsgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxLCAyIF07XHJcblx0dmFyIGEgPSBbXTtcclxuXHR2YXIgY29udHJvbGwgPSAwO1xyXG5cdGZvcih2YXIgaT0wOyBpPDEyOyBpKyspe1xyXG5cdFx0YVtpXSA9IHBhcnNlSW50KHZhbC5zdWJzdHJpbmcoaSwgaSsxKSk7XHJcblx0XHRpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG5cdH1cclxuXHRjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcblx0aWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICAgICAgY29udHJvbGwgPSAwO1xyXG4gICAgICAgIGZvcih2YXIgaT0wOyBpPDExOyBpKyspXHJcbiAgICAgICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICB9XHJcblx0aWYoY29udHJvbGwhPWFbMTFdKSByZXR1cm4gZmFsc2U7XHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuICAgIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICAgICAge2lkOiAnNzcwMCd9LFxyXG4gICAgICAgIHtpZDogJzc3MDEnfSxcclxuICAgICAgICB7aWQ6ICc3NzAyJ30sXHJcbiAgICAgICAge2lkOiAnNzcwNSd9LFxyXG4gICAgICAgIHtpZDogJzc3MDYnfSxcclxuICAgICAgICB7aWQ6ICc3NzA3J30sXHJcbiAgICAgICAge2lkOiAnNzcwOCd9LFxyXG4gICAgICAgIHtpZDogJzc3NDcnfSxcclxuICAgICAgICB7aWQ6ICc3NzcxJ30sXHJcbiAgICAgICAge2lkOiAnNzc3NSd9LFxyXG4gICAgICAgIHtpZDogJzc3NzYnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc3J30sXHJcbiAgICAgICAge2lkOiAnNzc3OCd9LFxyXG4gICAgXTtcclxuICAgIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gICAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICAgIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4wKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gTHVuYSBhbGdvXHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZElCQU5OdW1iZXIgPSAoaW5wdXQpPT4ge1xyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc4NTYnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCm0LXQvdGC0YDQmtGA0LXQtNC40YJcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTYzJywgbmFtZTogJ9CQ0J4gXCLQmtCQ0JfQn9Ce0KfQotCQXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIGJhbmtbMF0ubmFtZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGB0YfQtdGCXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGRpZ2l0cyA9IChjb2RlWzNdICsgY29kZVs0XSArIGNvZGVbMV0gKyBjb2RlWzJdKS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldHRlci5jaGFyQ29kZUF0KDApIC0gNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLm1vZDk3KGRpZ2l0cykgPT09IDEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCLQndC10L/RgNCw0LLQuNC70YzQvdC+XCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyMiA9IChpbnB1dCk9PiB7XHJcblxyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc4NTYnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCm0LXQvdGC0YDQmtGA0LXQtNC40YJcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTYzJywgbmFtZTogJ9CQ0J4gXCLQmtCQ0JfQn9Ce0KfQotCQXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIC8vIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBkaWdpdHMgPSAoY29kZVszXSArIGNvZGVbNF0gKyBjb2RlWzFdICsgY29kZVsyXSkucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGxldHRlcikge1xyXG4gICAgICAgIHJldHVybiBsZXR0ZXIuY2hhckNvZGVBdCgwKSAtIDU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5tb2Q5NyhkaWdpdHMpID09PSAxKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gVGhpcmQgc3RlcFxyXG5cclxuZXhwb3J0IGNvbnN0IGdpdmVuRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKHZhbC5zdWJzdHJpbmcoNiwxMCkrJy0nK3ZhbC5zdWJzdHJpbmcoMyw1KSsnLScrdmFsLnN1YnN0cmluZygwLDIpKTtcclxuICAgIGlmKG15RGF0ZSA9PSAnSW52YWxpZCBEYXRlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG5cdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG5cdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBteU0gPSBteURhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIG15RCA9IG15RGF0ZS5nZXREYXRlKCk7XHJcblx0dmFyIG15WSA9IG15RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRpZihteVk+dG9kYXlZKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdGlmKG15WSA8IHRvZGF5WS0yNSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRpZihteVkgPT09IHRvZGF5WSkge1xyXG5cdFx0aWYobXlNID09PSB0b2RheU0gJiYgbXlEID4gdG9kYXlEKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0aWYobXlNID4gdG9kYXlNKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcblx0cmV0dXJuIHRydWVcclxufVxyXG5leHBvcnQgY29uc3QgZXhwRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKHZhbC5zdWJzdHJpbmcoNiwxMCkrJy0nK3ZhbC5zdWJzdHJpbmcoMyw1KSsnLScrdmFsLnN1YnN0cmluZygwLDIpKTtcclxuICAgIGlmKG15RGF0ZSA9PSAnSW52YWxpZCBEYXRlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG5cdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG5cdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBteU0gPSBteURhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIG15RCA9IG15RGF0ZS5nZXREYXRlKCk7XHJcblx0dmFyIG15WSA9IG15RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRpZihteVk8dG9kYXlZKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuLy8gZXhwb3J0IGNvbnN0IGdpdmVuRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuLy8gICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4vLyAgICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuLy8gICAgICAgICByZXR1cm4gZmFsc2VcclxuLy8gICAgIH1cclxuLy8gICAgIC8vIDAyLjA1LjE5OTlcclxuLy8gXHQvLyBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwpO1xyXG4vLyBcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4vLyBcdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuLy8gXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF5KCk7XHJcbi8vIFx0dmFyIHRvZGF5WSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbi8vIFx0dmFyIG15TSA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZih2YWxbM10gPT0gMCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsWzRdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsLnN1YnN0cmluZygzLDUpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vICAgICB2YXIgbXlEID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmKHZhbFswXSA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB2YWxbMV1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB2YWwuc3Vic3RyaW5nKDAsMik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gXHR2YXIgbXlZID0gdmFsLnN1YnN0cmluZyg2LDkpXHJcblxyXG4vLyBcdGlmKG15WT50b2RheVkpIHtcclxuLy8gXHRcdHJldHVybiBmYWxzZTtcclxuLy8gXHR9XHJcbi8vIFx0aWYobXlZIDwgdG9kYXlZLTExKSB7XHJcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0fVxyXG4vLyBcdGlmKG15WSA9PT0gdG9kYXlZKSB7XHJcbi8vIFx0XHRpZihteU0gPT09IHRvZGF5TSAmJiBteUQgPiB0b2RheUQpIHtcclxuLy8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRpZihteU0gPiB0b2RheU0pIHtcclxuLy8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZVxyXG4vLyBcdH1cclxuLy8gXHRyZXR1cm4gdHJ1ZVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3Qgb25seUVuZ2xpc2ggPXZhbD0+IC9eW2EtekEtWlxcc10qJC8udGVzdCh2YWwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrU3RyaW5nTmFtZSA9IHZhbCA9PiB7XHJcblx0aWYgKHZhbCAmJiB2YWwucmVwbGFjZSgvXFxzKyQvLCAnJykuc3BsaXQoL1xcVysvKS5sZW5ndGggPT09IDIpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdCB9XHJcblx0IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlkTnVtYmVyID0gKHZhbCk9PiB7XHJcblx0dmFyIHJlcyA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL18vZywgXCJcIik7XHJcbiAgICBpZihyZXMubGVuZ3RoICE9PSA5KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRXhwRGF0ZU9mQ2FyZFZhbGlkID0gKGlucHV0KSA9PntcclxuXHR2YXIgZXhwRGF0ZSA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG5cdHZhciBkYXRlID0gZXhwRGF0ZS5tYXRjaCgvXihcXGR7Mn0pKFxcZHsyfSkkLyk7XHJcblxyXG5cdGlmKGV4cERhdGUubGVuZ3RoID09PSA0KXtcclxuXHRcdGlmKGRhdGVbMV0gPiAxMiB8fCBkYXRlWzJdIDwgMjApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tDYXJkVmFsaWQ9ICh2YWx1ZSkgPT4ge1xyXG5cdGlmICgvW14wLTktXFxzXSsvLnRlc3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGxldCBuQ2hlY2sgPSAwLCBuRGlnaXQgPSAwLCBiRXZlbiA9IGZhbHNlO1xyXG5cdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG5cclxuXHRpZih2YWx1ZS5sZW5ndGggIT09IDE2KXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9ZWxzZXtcclxuXHRcdGZvciAobGV0IG4gPSB2YWx1ZS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG5cdFx0XHRsZXQgY0RpZ2l0ID0gdmFsdWUuY2hhckF0KG4pLFxyXG5cdFx0XHRcdG5EaWdpdCA9IHBhcnNlSW50KGNEaWdpdCwgMTApO1xyXG5cclxuXHRcdFx0aWYgKGJFdmVuKSB7XHJcblx0XHRcdFx0aWYgKChuRGlnaXQgKj0gMikgPiA5KSBuRGlnaXQgLT0gOTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bkNoZWNrICs9IG5EaWdpdDtcclxuXHRcdFx0YkV2ZW4gPSAhYkV2ZW47XHJcblx0XHR9XHJcblx0XHRpZigobkNoZWNrICUgMTApICE9PSAwKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHllYXIoZGF0ZVN0cmluZykge1xyXG4gICAgaWYoIGRhdGVTdHJpbmdbMF0gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAnMjAnK2RhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMik7XHJcbiAgICB9XHJcbiAgICAgICAgcmV0dXJuICcxOScrZGF0ZVN0cmluZy5zdWJzdHJpbmcoMCwyKTtcclxufVxyXG5mdW5jdGlvbiBnZXRBZ2UoZGF0ZVN0cmluZykge1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhck5vdyA9IG5vdy5nZXRZZWFyKCk7XHJcbiAgICB2YXIgbW9udGhOb3cgPSBub3cuZ2V0TW9udGgoKTtcclxuICAgIHZhciBkYXRlTm93ID0gbm93LmdldERhdGUoKTtcclxuXHJcbiAgICB2YXIgZG9iID0gbmV3IERhdGUoeWVhcihkYXRlU3RyaW5nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygyLDQpLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cmluZy5zdWJzdHJpbmcoNCw2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgdmFyIHllYXJEb2IgPSBkb2IuZ2V0WWVhcigpO1xyXG4gICAgdmFyIG1vbnRoRG9iID0gZG9iLmdldE1vbnRoKCk7XHJcbiAgICB2YXIgZGF0ZURvYiA9IGRvYi5nZXREYXRlKCk7XHJcbiAgICB2YXIgYWdlID0ge307XHJcblxyXG4gICAgdmFyIHllYXJBZ2UgPSB5ZWFyTm93IC0geWVhckRvYjtcclxuXHJcbiAgICBpZiAobW9udGhOb3cgPj0gbW9udGhEb2IpXHJcbiAgICAgIHZhciBtb250aEFnZSA9IG1vbnRoTm93IC0gbW9udGhEb2I7XHJcbiAgICBlbHNlIHtcclxuICAgICAgeWVhckFnZS0tO1xyXG4gICAgICB2YXIgbW9udGhBZ2UgPSAxMiArIG1vbnRoTm93IC1tb250aERvYjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZU5vdyA+PSBkYXRlRG9iKVxyXG4gICAgICB2YXIgZGF0ZUFnZSA9IGRhdGVOb3cgLSBkYXRlRG9iO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIG1vbnRoQWdlLS07XHJcbiAgICAgIHZhciBkYXRlQWdlID0gMzEgKyBkYXRlTm93IC0gZGF0ZURvYjtcclxuXHJcbiAgICAgIGlmIChtb250aEFnZSA8IDApIHtcclxuICAgICAgICBtb250aEFnZSA9IDExO1xyXG4gICAgICAgIHllYXJBZ2UtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFnZSA9IHtcclxuICAgICAgICB5ZWFyczogeWVhckFnZSxcclxuICAgICAgICBtb250aHM6IG1vbnRoQWdlLFxyXG4gICAgICAgIGRheXM6IGRhdGVBZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiBhZ2UueWVhcnM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhZ2UgPSAoaWluKSA9PiB7XHJcbiAgICBpZihnZXRBZ2UoaWluKTwxOCB8fCBnZXRBZ2UoaWluKT42Mykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==