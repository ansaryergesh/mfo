webpackHotUpdate_N_E("pages/get_money",{

/***/ "./defaults/validations.js":
/*!*********************************!*\
  !*** ./defaults/validations.js ***!
  \*********************************/
/*! exports provided: requiredd, required, iin, validEmaill, validEmail, acceptCirrilic, acceptCirrilicOnly, checkAlphabet, passwordCheck, validateConfirmPassword, iinValidation, phoneCheck, phoneValidation, isValidIBANNumber, isValidIBANNumber2, givenDateCardId, expDateCardId, onlyEnglish, checkStringName, idNumber, isExpDateOfCardValid, checkCardValid, validage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredd", function() { return requiredd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iin", function() { return iin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmaill", function() { return validEmaill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validEmail", function() { return validEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptCirrilic", function() { return acceptCirrilic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acceptCirrilicOnly", function() { return acceptCirrilicOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAlphabet", function() { return checkAlphabet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordCheck", function() { return passwordCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConfirmPassword", function() { return validateConfirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iinValidation", function() { return iinValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneCheck", function() { return phoneCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneValidation", function() { return phoneValidation; });
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

var requiredd = function requiredd(val) {
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  return error;
};
var required = function required(val) {
  return val && val.length;
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
var validEmaill = function validEmaill(val) {
  var error;
  var emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  if (!val) {
    return false;
  }

  if (!emailvalid) {
    return false;
  }
};
var validEmail = function validEmail(val) {
  var error;
  var emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (!emailvalid) {
      error = 'Неправильный email';
    }
  }

  return error;
};
var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};
var acceptCirrilicOnly = function acceptCirrilicOnly(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error;

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};
var checkAlphabet = function checkAlphabet(val) {
  return /[a-zA-Z0-9_]/i.test(val);
};
var passwordCheck = function passwordCheck(val) {
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val && val.length < 5) error = 'Пароль должен быть не меньше 5 символов';
  return error;
};
var validateConfirmPassword = function validateConfirmPassword(pass, value) {
  var error = "";

  if (pass && value) {
    if (pass !== value) {
      error = "Password not matched";
    }
  }

  return error;
}; // export const iin = (val) =>  {
//     let error;
// 	if(val && val.length!==12);
// 	if(!val) return false;
// 	var b1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
// 	var b2 = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2 ];
// 	var a = [];
// 	var controll = 0;
// 	for(var i=0; i<12; i++){
// 		a[i] = parseInt(val.substring(i, i+1));
// 		if(i<11) controll += a[i]*b1[i];
// 	}
// 	controll = controll % 11;
// 	if(controll==10) {
//         controll = 0;
//         for(var i=0; i<11; i++)
//         controll += a[i]*b2[i];
//         controll = controll % 11;
//     }
// 	if(controll!=a[11]) return false;
// 	return true;
// }

var iinValidation = function iinValidation(val) {
  var error;
  if (val && val.length !== 12) error = 'Заполните все поля';
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

  if (controll != a[11]) error = 'Некорректный ИИН';
  return error;
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
};
var phoneValidation = function phoneValidation(val) {
  var error;

  if (phoneCheck(val) === true) {
    error = '';
  } else {
    error = '';
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

  if (myY < todayY - 11) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsicmVxdWlyZWRkIiwidmFsIiwiZXJyb3IiLCJyZXF1aXJlZCIsImxlbmd0aCIsImlpbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ2YWxpZEVtYWlsbCIsImVtYWlsdmFsaWQiLCJ0ZXN0IiwidmFsaWRFbWFpbCIsImFjY2VwdENpcnJpbGljIiwiZmFsc3kiLCJhY2NlcHRDaXJyaWxpY09ubHkiLCJjaGVja0FscGhhYmV0IiwicGFzc3dvcmRDaGVjayIsInZhbGlkYXRlQ29uZmlybVBhc3N3b3JkIiwicGFzcyIsInZhbHVlIiwiaWluVmFsaWRhdGlvbiIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsImlzVmFsaWRJQkFOTnVtYmVyIiwiaW5wdXQiLCJDT0RFX0xFTkdUSFMiLCJCQU5LUyIsIm5hbWUiLCJpYmFuIiwidG9VcHBlckNhc2UiLCJkaWdpdHMiLCJiYW5rX2NvZGUiLCJiYW5rIiwibGV0dGVyIiwiY2hhckNvZGVBdCIsIm1vZDk3IiwiaXNWYWxpZElCQU5OdW1iZXIyIiwiZ2l2ZW5EYXRlQ2FyZElkIiwicmVzIiwibXlEYXRlIiwiRGF0ZSIsInRvZGF5IiwidG9kYXlNIiwiZ2V0TW9udGgiLCJ0b2RheUQiLCJnZXREYXRlIiwidG9kYXlZIiwiZ2V0RnVsbFllYXIiLCJteU0iLCJteUQiLCJteVkiLCJleHBEYXRlQ2FyZElkIiwib25seUVuZ2xpc2giLCJjaGVja1N0cmluZ05hbWUiLCJzcGxpdCIsImlkTnVtYmVyIiwiaXNFeHBEYXRlT2ZDYXJkVmFsaWQiLCJleHBEYXRlIiwiZGF0ZSIsImNoZWNrQ2FyZFZhbGlkIiwibkNoZWNrIiwibkRpZ2l0IiwiYkV2ZW4iLCJuIiwiY0RpZ2l0IiwiY2hhckF0IiwieWVhciIsImRhdGVTdHJpbmciLCJnZXRBZ2UiLCJub3ciLCJ5ZWFyTm93IiwiZ2V0WWVhciIsIm1vbnRoTm93IiwiZGF0ZU5vdyIsImRvYiIsInllYXJEb2IiLCJtb250aERvYiIsImRhdGVEb2IiLCJhZ2UiLCJ5ZWFyQWdlIiwibW9udGhBZ2UiLCJkYXRlQWdlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwidmFsaWRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBUztBQUM5QixNQUFJQyxLQUFKOztBQUNBLE1BQUcsQ0FBQ0QsR0FBSixFQUFTO0FBQ1BDLFNBQUssR0FBRyxpQ0FBUjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDSCxDQU5NO0FBUUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsR0FBRDtBQUFBLFNBQVNBLEdBQUcsSUFBSUEsR0FBRyxDQUFDRyxNQUFwQjtBQUFBLENBQWpCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0osR0FBRCxFQUFVO0FBQzVCLE1BQUdBLEdBQUcsSUFBSUEsR0FBRyxDQUFDRyxNQUFKLEtBQWEsRUFBdkIsRUFBMkIsT0FBTyxLQUFQO0FBQzNCLE1BQUcsQ0FBQ0gsR0FBSixFQUFTLE9BQU8sS0FBUDtBQUNULE1BQUlLLEVBQUUsR0FBRyxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEVBQTdCLEVBQWlDLEVBQWpDLENBQVQ7QUFDQSxNQUFJQyxFQUFFLEdBQUcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVB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O0FBRUZJLFVBQU0sRUFBRUgsUUFGTjtBQUdGSSxRQUFJLEVBQUVIO0FBSEosR0FBTjtBQU1BLFNBQU9ILEdBQUcsQ0FBQ0ksS0FBWDtBQUNIOztBQUdNLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNoRyxHQUFELEVBQVM7QUFDN0IsTUFBRytFLE1BQU0sQ0FBQy9FLEdBQUQsQ0FBTixHQUFZLEVBQVosSUFBa0IrRSxNQUFNLENBQUMvRSxHQUFELENBQU4sR0FBWSxFQUFqQyxFQUFxQztBQUNqQyxXQUFPLEtBQVA7QUFDSDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDQUxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldF9tb25leS44NWY5NWU5MWE4Nzg1NmQ0ZTBhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlcXVpcmVkZCA9ICh2YWwpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCF2YWwpIHtcclxuICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoO1xyXG5leHBvcnQgY29uc3QgaWluID0gKHZhbCkgPT4gIHtcclxuXHRpZih2YWwgJiYgdmFsLmxlbmd0aCE9PTEyKSByZXR1cm4gZmFsc2U7XHJcblx0aWYoIXZhbCkgcmV0dXJuIGZhbHNlO1xyXG5cdHZhciBiMSA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExIF07XHJcblx0dmFyIGIyID0gWyAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEsIDIgXTtcclxuXHR2YXIgYSA9IFtdO1xyXG5cdHZhciBjb250cm9sbCA9IDA7XHJcblx0Zm9yKHZhciBpPTA7IGk8MTI7IGkrKyl7XHJcblx0XHRhW2ldID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyhpLCBpKzEpKTtcclxuXHRcdGlmKGk8MTEpIGNvbnRyb2xsICs9IGFbaV0qYjFbaV07XHJcblx0fVxyXG5cdGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuXHRpZihjb250cm9sbD09MTApIHtcclxuICAgICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTE7IGkrKylcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldKmIyW2ldO1xyXG4gICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIH1cclxuXHRpZihjb250cm9sbCE9YVsxMV0pIHJldHVybiBmYWxzZTtcclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkRW1haWxsID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbCk7XHJcbiAgICBpZighdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZighZW1haWx2YWxpZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCB2YWxpZEVtYWlsID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbCk7XHJcbiAgICBpZighdmFsKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcbiAgICBpZih2YWwpIHtcclxuICAgICAgICBpZighZW1haWx2YWxpZCkge1xyXG4gICAgICAgICAgICBlcnJvciA9J9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICAgIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZighdmFsICkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gICAgfVxyXG4gICAgaWYodmFsKSB7XHJcbiAgICAgICAgaWYoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxuICAgIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZih2YWwpIHtcclxuICAgICAgaWYoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBbHBoYWJldCA9ICh2YWwpID0+IC9bYS16QS1aMC05X10vaS50ZXN0KHZhbCk7XHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZENoZWNrID0gKHZhbCk9PiB7XHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZighdmFsKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcblx0aWYodmFsICYmIHZhbC5sZW5ndGggPCA1KSAgZXJyb3IgPSAn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSA1INGB0LjQvNCy0L7Qu9C+0LInO1xyXG5cdHJldHVybiBlcnJvcjtcclxufVxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDb25maXJtUGFzc3dvcmQgPSAocGFzcywgdmFsdWUpID0+IHtcclxuICAgIGxldCBlcnJvciA9IFwiXCI7XHJcbiAgICBpZiAocGFzcyAmJiB2YWx1ZSkge1xyXG4gICAgICBpZiAocGFzcyAhPT0gdmFsdWUpIHtcclxuICAgICAgICBlcnJvciA9IFwiUGFzc3dvcmQgbm90IG1hdGNoZWRcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH07XHJcbi8vIGV4cG9ydCBjb25zdCBpaW4gPSAodmFsKSA9PiAge1xyXG4vLyAgICAgbGV0IGVycm9yO1xyXG4vLyBcdGlmKHZhbCAmJiB2YWwubGVuZ3RoIT09MTIpO1xyXG4vLyBcdGlmKCF2YWwpIHJldHVybiBmYWxzZTtcclxuLy8gXHR2YXIgYjEgPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSBdO1xyXG4vLyBcdHZhciBiMiA9IFsgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxLCAyIF07XHJcbi8vIFx0dmFyIGEgPSBbXTtcclxuLy8gXHR2YXIgY29udHJvbGwgPSAwO1xyXG4vLyBcdGZvcih2YXIgaT0wOyBpPDEyOyBpKyspe1xyXG4vLyBcdFx0YVtpXSA9IHBhcnNlSW50KHZhbC5zdWJzdHJpbmcoaSwgaSsxKSk7XHJcbi8vIFx0XHRpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4vLyBcdH1cclxuLy8gXHRjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbi8vIFx0aWYoY29udHJvbGw9PTEwKSB7XHJcbi8vICAgICAgICAgY29udHJvbGwgPSAwO1xyXG4vLyAgICAgICAgIGZvcih2YXIgaT0wOyBpPDExOyBpKyspXHJcbi8vICAgICAgICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuLy8gICAgICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbi8vICAgICB9XHJcbi8vIFx0aWYoY29udHJvbGwhPWFbMTFdKSByZXR1cm4gZmFsc2U7XHJcbi8vIFx0cmV0dXJuIHRydWU7XHJcbi8vIH1cclxuZXhwb3J0IGNvbnN0IGlpblZhbGlkYXRpb24gPSAodmFsKSA9PiAge1xyXG4gICAgbGV0IGVycm9yO1xyXG5cdGlmKHZhbCAmJiB2YWwubGVuZ3RoIT09MTIpIGVycm9yID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8nO1xyXG5cdHZhciBiMSA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExIF07XHJcblx0dmFyIGIyID0gWyAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEsIDIgXTtcclxuXHR2YXIgYSA9IFtdO1xyXG5cdHZhciBjb250cm9sbCA9IDA7XHJcblx0Zm9yKHZhciBpPTA7IGk8MTI7IGkrKyl7XHJcblx0XHRhW2ldID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyhpLCBpKzEpKTtcclxuXHRcdGlmKGk8MTEpIGNvbnRyb2xsICs9IGFbaV0qYjFbaV07XHJcblx0fVxyXG5cdGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuXHRpZihjb250cm9sbD09MTApIHtcclxuICAgICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTE7IGkrKylcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldKmIyW2ldO1xyXG4gICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIH1cclxuXHRpZihjb250cm9sbCE9YVsxMV0pIGVycm9yID0gJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDQmNCY0J0nO1xyXG5cdHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG4gICAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgICAgICB7aWQ6ICc3NzAwJ30sXHJcbiAgICAgICAge2lkOiAnNzcwMSd9LFxyXG4gICAgICAgIHtpZDogJzc3MDInfSxcclxuICAgICAgICB7aWQ6ICc3NzA1J30sXHJcbiAgICAgICAge2lkOiAnNzcwNid9LFxyXG4gICAgICAgIHtpZDogJzc3MDcnfSxcclxuICAgICAgICB7aWQ6ICc3NzA4J30sXHJcbiAgICAgICAge2lkOiAnNzc0Nyd9LFxyXG4gICAgICAgIHtpZDogJzc3NzEnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc1J30sXHJcbiAgICAgICAge2lkOiAnNzc3Nid9LFxyXG4gICAgICAgIHtpZDogJzc3NzcnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc4J30sXHJcbiAgICBdO1xyXG4gICAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgICAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgICBpZiAoIWNvZGUgfHwgcGhvbmUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwaG9uZV9udW1iZXIgPSBjb2RlWzFdO1xyXG4gICAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihwaG9uZV9vcGVyYXRvci5sZW5ndGggPjApe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgaWYocGhvbmVDaGVjayh2YWwpID09PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3IgPSAnJ1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIGVycm9yID0gJydcclxuICAgIH1cclxufVxyXG5cclxuLy8gTHVuYSBhbGdvXHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZElCQU5OdW1iZXIgPSAoaW5wdXQpPT4ge1xyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc4NTYnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCm0LXQvdGC0YDQmtGA0LXQtNC40YJcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTYzJywgbmFtZTogJ9CQ0J4gXCLQmtCQ0JfQn9Ce0KfQotCQXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIGJhbmtbMF0ubmFtZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGB0YfQtdGCXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGRpZ2l0cyA9IChjb2RlWzNdICsgY29kZVs0XSArIGNvZGVbMV0gKyBjb2RlWzJdKS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldHRlci5jaGFyQ29kZUF0KDApIC0gNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLm1vZDk3KGRpZ2l0cykgPT09IDEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCLQndC10L/RgNCw0LLQuNC70YzQvdC+XCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyMiA9IChpbnB1dCk9PiB7XHJcblxyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc4NTYnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCm0LXQvdGC0YDQmtGA0LXQtNC40YJcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTYzJywgbmFtZTogJ9CQ0J4gXCLQmtCQ0JfQn9Ce0KfQotCQXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIC8vIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBkaWdpdHMgPSAoY29kZVszXSArIGNvZGVbNF0gKyBjb2RlWzFdICsgY29kZVsyXSkucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGxldHRlcikge1xyXG4gICAgICAgIHJldHVybiBsZXR0ZXIuY2hhckNvZGVBdCgwKSAtIDU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5tb2Q5NyhkaWdpdHMpID09PSAxKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuLy8gVGhpcmQgc3RlcFxyXG5cclxuZXhwb3J0IGNvbnN0IGdpdmVuRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKHZhbC5zdWJzdHJpbmcoNiwxMCkrJy0nK3ZhbC5zdWJzdHJpbmcoMyw1KSsnLScrdmFsLnN1YnN0cmluZygwLDIpKTtcclxuICAgIGlmKG15RGF0ZSA9PSAnSW52YWxpZCBEYXRlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG5cdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG5cdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBteU0gPSBteURhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIG15RCA9IG15RGF0ZS5nZXREYXRlKCk7XHJcblx0dmFyIG15WSA9IG15RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRpZihteVk+dG9kYXlZKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdGlmKG15WSA8IHRvZGF5WS0xMSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRpZihteVkgPT09IHRvZGF5WSkge1xyXG5cdFx0aWYobXlNID09PSB0b2RheU0gJiYgbXlEID4gdG9kYXlEKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0aWYobXlNID4gdG9kYXlNKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcblx0cmV0dXJuIHRydWVcclxufVxyXG5leHBvcnQgY29uc3QgZXhwRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKHZhbC5zdWJzdHJpbmcoNiwxMCkrJy0nK3ZhbC5zdWJzdHJpbmcoMyw1KSsnLScrdmFsLnN1YnN0cmluZygwLDIpKTtcclxuICAgIGlmKG15RGF0ZSA9PSAnSW52YWxpZCBEYXRlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG5cdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF0ZSgpO1xyXG5cdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG5cdHZhciBteU0gPSBteURhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIG15RCA9IG15RGF0ZS5nZXREYXRlKCk7XHJcblx0dmFyIG15WSA9IG15RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuXHRpZihteVk8dG9kYXlZKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuLy8gZXhwb3J0IGNvbnN0IGdpdmVuRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuLy8gICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4vLyAgICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuLy8gICAgICAgICByZXR1cm4gZmFsc2VcclxuLy8gICAgIH1cclxuLy8gICAgIC8vIDAyLjA1LjE5OTlcclxuLy8gXHQvLyBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwpO1xyXG4vLyBcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4vLyBcdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuLy8gXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF5KCk7XHJcbi8vIFx0dmFyIHRvZGF5WSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbi8vIFx0dmFyIG15TSA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZih2YWxbM10gPT0gMCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsWzRdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsLnN1YnN0cmluZygzLDUpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vICAgICB2YXIgbXlEID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmKHZhbFswXSA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB2YWxbMV1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB2YWwuc3Vic3RyaW5nKDAsMik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gXHR2YXIgbXlZID0gdmFsLnN1YnN0cmluZyg2LDkpXHJcblxyXG4vLyBcdGlmKG15WT50b2RheVkpIHtcclxuLy8gXHRcdHJldHVybiBmYWxzZTtcclxuLy8gXHR9XHJcbi8vIFx0aWYobXlZIDwgdG9kYXlZLTExKSB7XHJcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0fVxyXG4vLyBcdGlmKG15WSA9PT0gdG9kYXlZKSB7XHJcbi8vIFx0XHRpZihteU0gPT09IHRvZGF5TSAmJiBteUQgPiB0b2RheUQpIHtcclxuLy8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRpZihteU0gPiB0b2RheU0pIHtcclxuLy8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZVxyXG4vLyBcdH1cclxuLy8gXHRyZXR1cm4gdHJ1ZVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3Qgb25seUVuZ2xpc2ggPXZhbD0+IC9eW2EtekEtWlxcc10qJC8udGVzdCh2YWwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrU3RyaW5nTmFtZSA9IHZhbCA9PiB7XHJcblx0aWYgKHZhbCAmJiB2YWwucmVwbGFjZSgvXFxzKyQvLCAnJykuc3BsaXQoL1xcVysvKS5sZW5ndGggPT09IDIpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdCB9XHJcblx0IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlkTnVtYmVyID0gKHZhbCk9PiB7XHJcblx0dmFyIHJlcyA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL18vZywgXCJcIik7XHJcbiAgICBpZihyZXMubGVuZ3RoICE9PSA5KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRXhwRGF0ZU9mQ2FyZFZhbGlkID0gKGlucHV0KSA9PntcclxuXHR2YXIgZXhwRGF0ZSA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG5cdHZhciBkYXRlID0gZXhwRGF0ZS5tYXRjaCgvXihcXGR7Mn0pKFxcZHsyfSkkLyk7XHJcblxyXG5cdGlmKGV4cERhdGUubGVuZ3RoID09PSA0KXtcclxuXHRcdGlmKGRhdGVbMV0gPiAxMiB8fCBkYXRlWzJdIDwgMjApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tDYXJkVmFsaWQ9ICh2YWx1ZSkgPT4ge1xyXG5cdGlmICgvW14wLTktXFxzXSsvLnRlc3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGxldCBuQ2hlY2sgPSAwLCBuRGlnaXQgPSAwLCBiRXZlbiA9IGZhbHNlO1xyXG5cdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG5cclxuXHRpZih2YWx1ZS5sZW5ndGggIT09IDE2KXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9ZWxzZXtcclxuXHRcdGZvciAobGV0IG4gPSB2YWx1ZS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG5cdFx0XHRsZXQgY0RpZ2l0ID0gdmFsdWUuY2hhckF0KG4pLFxyXG5cdFx0XHRcdG5EaWdpdCA9IHBhcnNlSW50KGNEaWdpdCwgMTApO1xyXG5cclxuXHRcdFx0aWYgKGJFdmVuKSB7XHJcblx0XHRcdFx0aWYgKChuRGlnaXQgKj0gMikgPiA5KSBuRGlnaXQgLT0gOTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bkNoZWNrICs9IG5EaWdpdDtcclxuXHRcdFx0YkV2ZW4gPSAhYkV2ZW47XHJcblx0XHR9XHJcblx0XHRpZigobkNoZWNrICUgMTApICE9PSAwKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHllYXIoZGF0ZVN0cmluZykge1xyXG4gICAgaWYoIGRhdGVTdHJpbmdbMF0gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAnMjAnK2RhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMik7XHJcbiAgICB9XHJcbiAgICAgICAgcmV0dXJuICcxOScrZGF0ZVN0cmluZy5zdWJzdHJpbmcoMCwyKTtcclxufVxyXG5mdW5jdGlvbiBnZXRBZ2UoZGF0ZVN0cmluZykge1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhck5vdyA9IG5vdy5nZXRZZWFyKCk7XHJcbiAgICB2YXIgbW9udGhOb3cgPSBub3cuZ2V0TW9udGgoKTtcclxuICAgIHZhciBkYXRlTm93ID0gbm93LmdldERhdGUoKTtcclxuXHJcbiAgICB2YXIgZG9iID0gbmV3IERhdGUoeWVhcihkYXRlU3RyaW5nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygyLDQpLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cmluZy5zdWJzdHJpbmcoNCw2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgdmFyIHllYXJEb2IgPSBkb2IuZ2V0WWVhcigpO1xyXG4gICAgdmFyIG1vbnRoRG9iID0gZG9iLmdldE1vbnRoKCk7XHJcbiAgICB2YXIgZGF0ZURvYiA9IGRvYi5nZXREYXRlKCk7XHJcbiAgICB2YXIgYWdlID0ge307XHJcblxyXG4gICAgdmFyIHllYXJBZ2UgPSB5ZWFyTm93IC0geWVhckRvYjtcclxuXHJcbiAgICBpZiAobW9udGhOb3cgPj0gbW9udGhEb2IpXHJcbiAgICAgIHZhciBtb250aEFnZSA9IG1vbnRoTm93IC0gbW9udGhEb2I7XHJcbiAgICBlbHNlIHtcclxuICAgICAgeWVhckFnZS0tO1xyXG4gICAgICB2YXIgbW9udGhBZ2UgPSAxMiArIG1vbnRoTm93IC1tb250aERvYjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZU5vdyA+PSBkYXRlRG9iKVxyXG4gICAgICB2YXIgZGF0ZUFnZSA9IGRhdGVOb3cgLSBkYXRlRG9iO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIG1vbnRoQWdlLS07XHJcbiAgICAgIHZhciBkYXRlQWdlID0gMzEgKyBkYXRlTm93IC0gZGF0ZURvYjtcclxuXHJcbiAgICAgIGlmIChtb250aEFnZSA8IDApIHtcclxuICAgICAgICBtb250aEFnZSA9IDExO1xyXG4gICAgICAgIHllYXJBZ2UtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFnZSA9IHtcclxuICAgICAgICB5ZWFyczogeWVhckFnZSxcclxuICAgICAgICBtb250aHM6IG1vbnRoQWdlLFxyXG4gICAgICAgIGRheXM6IGRhdGVBZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiBhZ2UueWVhcnM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhZ2UgPSAoaWluKSA9PiB7XHJcbiAgICBpZihnZXRBZ2UoaWluKTwxOCB8fCBnZXRBZ2UoaWluKT42Mykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==