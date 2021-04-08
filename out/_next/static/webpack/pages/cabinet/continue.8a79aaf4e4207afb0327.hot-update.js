webpackHotUpdate_N_E("pages/cabinet/continue",{

/***/ "./defaults/validations.js":
/*!*********************************!*\
  !*** ./defaults/validations.js ***!
  \*********************************/
/*! exports provided: requiredd, required, iin, validEmaill, validEmail, acceptCirrilic, acceptCirrilicOnly, checkAlphabet, passwordCheck, validateConfirmPassword, iinValidation, phoneCheck, phoneValidation, isValidIBANNumber, isValidIBANNumber2, isValidIBANNumberContinue, ibanContinue, givenDateCardId, CheckGivedDate, CheckExpDate, expDateCardId, onlyEnglish, checkStringName, idNumber, isExpDateOfCardValid, checkCardValid, textCheckCardValid, validage */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidIBANNumberContinue", function() { return isValidIBANNumberContinue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ibanContinue", function() { return ibanContinue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "givenDateCardId", function() { return givenDateCardId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckGivedDate", function() { return CheckGivedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckExpDate", function() { return CheckExpDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expDateCardId", function() { return expDateCardId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyEnglish", function() { return onlyEnglish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStringName", function() { return checkStringName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idNumber", function() { return idNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExpDateOfCardValid", function() { return isExpDateOfCardValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCardValid", function() { return checkCardValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textCheckCardValid", function() { return textCheckCardValid; });
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
};
var iinValidation = function iinValidation(val) {
  var error;
  if (val && val.length !== 12) error = 'Заполните все поля';
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;

  if (val) {
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
  }
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
    error = 'Нет соответствующего оператора';
  }

  return error;
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
};
var isValidIBANNumberContinue = function isValidIBANNumberContinue(input) {
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
    return false;
  }

  var bank_code = code[3];
  var bank = BANKS.filter(function (item) {
    return item.id == bank_code;
  });

  if (bank.length > 0) {
    return bank[0].name;
  } else {
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
var ibanContinue = function ibanContinue(val) {
  var error;

  if (isValidIBANNumberContinue(val) === 'false') {
    error = 'Некорректный счет';
  }

  return error;
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

  if (myDate == 'Invalid Date') {
    return false;
  }

  if (myY > todayY) {
    return false;
  }

  if (myY < todayY - 25) {
    return false;
  }

  if (myY > todayY) {
    return false;
  }

  if (myY === todayY) {
    if (myM > todayM) {
      return false;
    }
  }

  if (myY === todayY && myM === todayM) {
    if (myD > todayD) {
      return false;
    }
  }

  return true;
};
var CheckGivedDate = function CheckGivedDate(val) {
  var error;

  if (!givenDateCardId(val)) {
    error = 'Дата указана неправильно';
  }

  return error;
};
_c = CheckGivedDate;
var CheckExpDate = function CheckExpDate(val) {
  var error;

  if (!expDateCardId(val)) {
    error = 'Формат даты неправильный или уд. личности просрочен ';
  }

  return error;
};
_c2 = CheckExpDate;
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

  if (myY === todayY) {
    if (myM < todayM) {
      return false;
    }
  }

  if (myY === todayY && myM === todayM) {
    if (myD < todayD) {
      return false;
    }
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
  var error;

  if (res.length !== 9) {
    error = 'Неправильный номер';
  }

  return error;
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
var textCheckCardValid = function textCheckCardValid(value) {
  var error;

  if (!checkCardValid) {
    error = 'Неправильный номер';
  }

  return error;
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
  if (iin[6] % 2 != 0) {
    if (getAge(iin) < 21 || getAge(iin) > 63) {
      return false;
    }
  }

  if (iin[6] % 2 == 0) {
    if (getAge(iin) < 21 || getAge(iin) > 58) {
      return false;
    }
  }

  return true;
};

var _c, _c2;

$RefreshReg$(_c, "CheckGivedDate");
$RefreshReg$(_c2, "CheckExpDate");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsicmVxdWlyZWRkIiwidmFsIiwiZXJyb3IiLCJyZXF1aXJlZCIsImxlbmd0aCIsImlpbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ2YWxpZEVtYWlsbCIsImVtYWlsdmFsaWQiLCJ0ZXN0IiwidmFsaWRFbWFpbCIsImFjY2VwdENpcnJpbGljIiwiZmFsc3kiLCJhY2NlcHRDaXJyaWxpY09ubHkiLCJjaGVja0FscGhhYmV0IiwicGFzc3dvcmRDaGVjayIsInZhbGlkYXRlQ29uZmlybVBhc3N3b3JkIiwicGFzcyIsInZhbHVlIiwiaWluVmFsaWRhdGlvbiIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsImlzVmFsaWRJQkFOTnVtYmVyIiwiaW5wdXQiLCJDT0RFX0xFTkdUSFMiLCJCQU5LUyIsIm5hbWUiLCJpYmFuIiwidG9VcHBlckNhc2UiLCJkaWdpdHMiLCJiYW5rX2NvZGUiLCJiYW5rIiwibGV0dGVyIiwiY2hhckNvZGVBdCIsIm1vZDk3IiwiaXNWYWxpZElCQU5OdW1iZXIyIiwiaXNWYWxpZElCQU5OdW1iZXJDb250aW51ZSIsImliYW5Db250aW51ZSIsImdpdmVuRGF0ZUNhcmRJZCIsInJlcyIsIm15RGF0ZSIsIkRhdGUiLCJ0b2RheSIsInRvZGF5TSIsImdldE1vbnRoIiwidG9kYXlEIiwiZ2V0RGF0ZSIsInRvZGF5WSIsImdldEZ1bGxZZWFyIiwibXlNIiwibXlEIiwibXlZIiwiQ2hlY2tHaXZlZERhdGUiLCJDaGVja0V4cERhdGUiLCJleHBEYXRlQ2FyZElkIiwib25seUVuZ2xpc2giLCJjaGVja1N0cmluZ05hbWUiLCJzcGxpdCIsImlkTnVtYmVyIiwiaXNFeHBEYXRlT2ZDYXJkVmFsaWQiLCJleHBEYXRlIiwiZGF0ZSIsImNoZWNrQ2FyZFZhbGlkIiwibkNoZWNrIiwibkRpZ2l0IiwiYkV2ZW4iLCJuIiwiY0RpZ2l0IiwiY2hhckF0IiwidGV4dENoZWNrQ2FyZFZhbGlkIiwieWVhciIsImRhdGVTdHJpbmciLCJnZXRBZ2UiLCJub3ciLCJ5ZWFyTm93IiwiZ2V0WWVhciIsIm1vbnRoTm93IiwiZGF0ZU5vdyIsImRvYiIsInllYXJEb2IiLCJtb250aERvYiIsImRhdGVEb2IiLCJhZ2UiLCJ5ZWFyQWdlIiwibW9udGhBZ2UiLCJkYXRlQWdlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwidmFsaWRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQzlCLE1BQUlDLEtBQUo7O0FBQ0EsTUFBRyxDQUFDRCxHQUFKLEVBQVM7QUFDUEMsU0FBSyxHQUFHLGlDQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsS0FBUDtBQUNILENBTk07QUFRQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixHQUFEO0FBQUEsU0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNHLE1BQXBCO0FBQUEsQ0FBakI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDSixHQUFELEVBQVU7QUFDNUIsTUFBR0EsR0FBRyxJQUFJQSxHQUFHLENBQUNHLE1BQUosS0FBYSxFQUF2QixFQUEyQixPQUFPLEtBQVA7QUFDM0IsTUFBRyxDQUFDSCxHQUFKLEVBQVMsT0FBTyxLQUFQO0FBQ1QsTUFBSUssRUFBRSxHQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFB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RyxLQUFLUixRQUFMLEdBQWVJLFFBQTlCO0FBQ0Q7QUFFRCxNQUFJSCxPQUFPLElBQUlJLE9BQWYsRUFDRSxJQUFJSSxPQUFPLEdBQUdSLE9BQU8sR0FBR0ksT0FBeEIsQ0FERixLQUVLO0FBQ0hHLFlBQVE7QUFDUixRQUFJQyxPQUFPLEdBQUcsS0FBS1IsT0FBTCxHQUFlSSxPQUE3Qjs7QUFFQSxRQUFJRyxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkEsY0FBUSxHQUFHLEVBQVg7QUFDQUQsYUFBTztBQUNSO0FBQ0Y7QUFFREQsS0FBRyxHQUFHO0FBQ0ZJLFNBQUssRUFBRUgsT0FETDtBQUVGSSxVQUFNLEVBQUVILFFBRk47QUFHRkksUUFBSSxFQUFFSDtBQUhKLEdBQU47QUFNQSxTQUFPSCxHQUFHLENBQUNJLEtBQVg7QUFDSDs7QUFHTSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDckcsR0FBRCxFQUFTO0FBQzdCLE1BQUdBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBTyxDQUFQLElBQVksQ0FBZixFQUFrQjtBQUNkLFFBQUdvRixNQUFNLENBQUNwRixHQUFELENBQU4sR0FBWSxFQUFaLElBQWtCb0YsTUFBTSxDQUFDcEYsR0FBRCxDQUFOLEdBQVksRUFBakMsRUFBcUM7QUFDakMsYUFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFHQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8sQ0FBUCxJQUFZLENBQWYsRUFBa0I7QUFDZCxRQUFHb0YsTUFBTSxDQUFDcEYsR0FBRCxDQUFOLEdBQVksRUFBWixJQUFrQm9GLE1BQU0sQ0FBQ3BGLEdBQUQsQ0FBTixHQUFZLEVBQWpDLEVBQXFDO0FBQ2pDLGFBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBTyxJQUFQO0FBQ0gsQ0FaTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjhhNzlhYWY0ZTQyMDdhZmIwMzI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVxdWlyZWRkID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgaWYoIXZhbCkge1xyXG4gICAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gKHZhbCkgPT4gdmFsICYmIHZhbC5sZW5ndGg7XHJcbmV4cG9ydCBjb25zdCBpaW4gPSAodmFsKSA9PiAge1xyXG5cdGlmKHZhbCAmJiB2YWwubGVuZ3RoIT09MTIpIHJldHVybiBmYWxzZTtcclxuXHRpZighdmFsKSByZXR1cm4gZmFsc2U7XHJcblx0dmFyIGIxID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEgXTtcclxuXHR2YXIgYjIgPSBbIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMSwgMiBdO1xyXG5cdHZhciBhID0gW107XHJcblx0dmFyIGNvbnRyb2xsID0gMDtcclxuXHRmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuXHRcdGFbaV0gPSBwYXJzZUludCh2YWwuc3Vic3RyaW5nKGksIGkrMSkpO1xyXG5cdFx0aWYoaTwxMSkgY29udHJvbGwgKz0gYVtpXSpiMVtpXTtcclxuXHR9XHJcblx0Y29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG5cdGlmKGNvbnRyb2xsPT0xMCkge1xyXG4gICAgICAgIGNvbnRyb2xsID0gMDtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgICAgIGNvbnRyb2xsICs9IGFbaV0qYjJbaV07XHJcbiAgICAgICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgfVxyXG5cdGlmKGNvbnRyb2xsIT1hWzExXSkgcmV0dXJuIGZhbHNlO1xyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRFbWFpbGwgPSAodmFsKSA9PiB7XHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsKTtcclxuICAgIGlmKCF2YWwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIGlmKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IHZhbGlkRW1haWwgPSAodmFsKSA9PiB7XHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsKTtcclxuICAgIGlmKCF2YWwpIHtcclxuICAgICAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICAgIH1cclxuICAgIGlmKHZhbCkge1xyXG4gICAgICAgIGlmKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgICAgICAgIGVycm9yID0n0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5IGVtYWlsJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWMgPSB2YWwgPT4ge1xyXG4gICAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCF2YWwgKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcbiAgICBpZih2YWwpIHtcclxuICAgICAgICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpY09ubHkgPSB2YWwgPT4ge1xyXG4gICAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKHZhbCkge1xyXG4gICAgICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cd0YPQttC90L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0LjQu9C70LjRhtC1J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0FscGhhYmV0ID0gKHZhbCkgPT4gL1thLXpBLVowLTlfXS9pLnRlc3QodmFsKTtcclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSAodmFsKT0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCF2YWwpIHtcclxuICAgICAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICAgIH1cclxuXHRpZih2YWwgJiYgdmFsLmxlbmd0aCA8IDUpICBlcnJvciA9ICfQn9Cw0YDQvtC70Ywg0LTQvtC70LbQtdC9INCx0YvRgtGMINC90LUg0LzQtdC90YzRiNC1IDUg0YHQuNC80LLQvtC70L7Qsic7XHJcblx0cmV0dXJuIGVycm9yO1xyXG59XHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUNvbmZpcm1QYXNzd29yZCA9IChwYXNzLCB2YWx1ZSkgPT4ge1xyXG4gICAgbGV0IGVycm9yID0gXCJcIjtcclxuICAgIGlmIChwYXNzICYmIHZhbHVlKSB7XHJcbiAgICAgIGlmIChwYXNzICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIGVycm9yID0gXCJQYXNzd29yZCBub3QgbWF0Y2hlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBpaW5WYWxpZGF0aW9uID0gKHZhbCkgPT4gIHtcclxuICAgIGxldCBlcnJvcjtcclxuXHRpZih2YWwgJiYgdmFsLmxlbmd0aCE9PTEyKSBlcnJvciA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPJztcclxuXHR2YXIgYjEgPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSBdO1xyXG5cdHZhciBiMiA9IFsgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxLCAyIF07XHJcblx0dmFyIGEgPSBbXTtcclxuICAgIHZhciBjb250cm9sbCA9IDA7XHJcbiAgICBpZih2YWwpIHtcclxuICAgICAgICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuICAgICAgICAgICAgYVtpXSA9IHBhcnNlSW50KHZhbC5zdWJzdHJpbmcoaSwgaSsxKSk7XHJcbiAgICAgICAgICAgIGlmKGk8MTEpIGNvbnRyb2xsICs9IGFbaV0qYjFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgICBpZihjb250cm9sbD09MTApIHtcclxuICAgICAgICAgICAgY29udHJvbGwgPSAwO1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgICAgICAgICBjb250cm9sbCArPSBhW2ldKmIyW2ldO1xyXG4gICAgICAgICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNvbnRyb2xsIT1hWzExXSkgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCY0JjQnSc7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG5cdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lQ2hlY2sgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgUEhPTkVfT1BFUkFUT1JTID0gW1xyXG4gICAgICAgIHtpZDogJzc3MDAnfSxcclxuICAgICAgICB7aWQ6ICc3NzAxJ30sXHJcbiAgICAgICAge2lkOiAnNzcwMid9LFxyXG4gICAgICAgIHtpZDogJzc3MDUnfSxcclxuICAgICAgICB7aWQ6ICc3NzA2J30sXHJcbiAgICAgICAge2lkOiAnNzcwNyd9LFxyXG4gICAgICAgIHtpZDogJzc3MDgnfSxcclxuICAgICAgICB7aWQ6ICc3NzQ3J30sXHJcbiAgICAgICAge2lkOiAnNzc3MSd9LFxyXG4gICAgICAgIHtpZDogJzc3NzUnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc2J30sXHJcbiAgICAgICAge2lkOiAnNzc3Nyd9LFxyXG4gICAgICAgIHtpZDogJzc3NzgnfSxcclxuICAgIF07XHJcbiAgICB2YXIgcGhvbmUgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgICAgIGNvZGUgPSBwaG9uZS5tYXRjaCgvXihcXGR7NH0pKFxcZHszfSkoXFxkezR9KSQvKTtcclxuICAgIGlmICghY29kZSB8fCBwaG9uZS5sZW5ndGggIT09IDExKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBob25lX251bWJlciA9IGNvZGVbMV07XHJcbiAgICB2YXIgcGhvbmVfb3BlcmF0b3IgPSBQSE9ORV9PUEVSQVRPUlMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBwaG9uZV9udW1iZXJcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHBob25lX29wZXJhdG9yLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZVZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JcclxuICAgIGlmKHBob25lQ2hlY2sodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yID0gJydcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBlcnJvciA9ICfQndC10YIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4g0L7Qv9C10YDQsNGC0L7RgNCwJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbi8vIEx1bmEgYWxnb1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyID0gKGlucHV0KT0+IHtcclxuICAgIHZhciBDT0RFX0xFTkdUSFMgPSAyMDtcclxuXHJcbiAgICB2YXIgQkFOS1MgPSBbXHJcbiAgICAgICAge2lkOiAnOTQ3JywgbmFtZTogJ9CQ0J4gXCLQlNC+0YfQtdGA0L3QuNC5INCR0LDQvdC6IFwi0JDQm9Cs0KTQkC3QkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnODI2JywgbmFtZTogJ9CQ0J4gXCLQkNCi0KTQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTQ5JywgbmFtZTogJ9CQ0J4gXCJBbHR5biBCYW5rXCIgKNCU0JEgQ2hpbmEgQ2l0aWMgQmFuayBDb3Jwb3JhdGlvbiBMaW1pdGVkKSAnfSxcclxuICAgICAgICB7aWQ6ICc5MTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0JHQkNCd0Jog0JrQmNCi0JDQryDQkiDQmtCQ0JfQkNCl0KHQotCQ0J3QlVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzIyJywgbmFtZTogJ9CQ0J4gXCJLQVNQSSBCQU5LXCInfSxcclxuICAgICAgICB7aWQ6ICc3NjYnLCBuYW1lOiAn0JDQniBcItCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0JTQtdC/0L7Qt9C40YLQsNGA0LjQuSDQptC10L3QvdGL0YUg0JHRg9C80LDQs1wiJ30sXHJcbiAgICAgICAge2lkOiAnODMyJywgbmFtZTogJ9CQ0J4gXCLQodC40YLQuNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTA3JywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiDQoNCw0LfQstC40YLQuNGPINCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc3MDAnLCBuYW1lOiAn0JXQktCg0JDQl9CY0JnQodCa0JjQmSDQkdCQ0J3QmiDQoNCQ0JfQktCY0KLQmNCvJ30sXHJcbiAgICAgICAge2lkOiAnOTQ4JywgbmFtZTogJ9CQ0J4gXCLQldCy0YDQsNC30LjQudGB0LrQuNC5INCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICcwMDknLCBuYW1lOiAn0J3QkNCeINCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQutC+0YDQv9C+0YDQsNGG0LjRjyBcItCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC+INC00LvRjyDQs9GA0LDQttC00LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTcyJywgbmFtZTogJ9CQ0J4gXCLQltC40LvRgdGC0YDQvtC50YHQsdC10YDQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnMjQ2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0JHQsNC90LogXCJBbCBIaWxhbFwiJ30sXHJcbiAgICAgICAge2lkOiAnNjAxJywgbmFtZTogJ9CQ0J4gXCLQndCw0YDQvtC00L3Ri9C5INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc5MzAnLCBuYW1lOiAn0JDQniBcItCi0L7RgNCz0L7QstC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDQkdCw0L3QuiDQmtC40YLQsNGPINCyINCzLiDQkNC70LzQsNGC0YtcIid9LFxyXG4gICAgICAgIHtpZDogJzU1MCcsIG5hbWU6ICfQsy7QnNC+0YHQutCy0LAg0JzQtdC20LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCR0LDQvdC6J30sXHJcbiAgICAgICAge2lkOiAnODg2JywgbmFtZTogJ9CU0JEg0JDQniBcItCl0L7Rg9C8INCa0YDQtdC00LjRgiDRjdC90LQg0KTQuNC90LDQvdGBINCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NjUnLCBuYW1lOiAn0JDQniBcIkZvcnRlQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTI3JywgbmFtZTogJ9CQ0J4gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LDRjyDRhNC+0L3QtNC+0LLQsNGPINCx0LjRgNC20LBcIid9LFxyXG4gICAgICAgIHtpZDogJzgyMScsIG5hbWU6ICfQkNCeIFwi0JHQsNC90LogXCJCYW5rIFJCS1wiJ30sXHJcbiAgICAgICAge2lkOiAnMjI0JywgbmFtZTogJ9Cg0JPQnyBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQuNC5INGG0LXQvdGC0YAg0LzQtdC20LHQsNC90LrQvtCy0YHQutC40YUg0YDQsNGB0YfQtdGC0L7QsiDQndCR0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnMDcwJywgbmFtZTogJ9Cg0JPQoyBcItCa0L7QvNC40YLQtdGCINC60LDQt9C90LDRh9C10LnRgdGC0LLQsCDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0YTQuNC90LDQvdGB0L7QsiDQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICc1NjMnLCBuYW1lOiAn0JDQniBcItCa0JDQl9Cf0J7Qp9Ci0JBcIid9LFxyXG4gICAgICAgIHtpZDogJzU1MScsIG5hbWU6ICfQkNCeIFwi0JHQsNC90LogS2Fzc2EgTm92YVwiICjQlNC+0YfQtdGA0L3QuNC5INCx0LDQvdC6INCQ0J4gXCJGb3J0ZUJhbmtcIiknfSxcclxuICAgICAgICB7aWQ6ICc4ODUnLCBuYW1lOiAn0JDQniBcItCU0JEgXCLQmtCQ0JfQkNCl0KHQotCQ0J0t0JfQmNCg0JDQkNCiINCY0J3QotCV0KDQndCV0KjQndCbINCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc3NzQnLCBuYW1lOiAn0JDQniBcIkFzaWFDcmVkaXQgQmFuayAo0JDQt9C40Y/QmtGA0LXQtNC40YIg0JHQsNC90LopXCIgJ30sXHJcbiAgICAgICAge2lkOiAnNTUzJywgbmFtZTogJ9CQ0J4g0JTQkSBcItCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQkdCw0L3QuiDQn9Cw0LrQuNGB0YLQsNC90LBcIiDQsiDQmtCw0LfQsNGF0YHRgtCw0L3QtSd9LFxyXG4gICAgICAgIHtpZDogJzE0NycsIG5hbWU6ICdcItCR0LDQvdC6LdC60LDRgdGC0L7QtNC40LDQvSDQkNCeICBcItCV0J3Qn9CkXCInfSxcclxuICAgICAgICB7aWQ6ICcxMjUnLCBuYW1lOiAn0KDQk9CjINCd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQkdCw0L3QuiDQoNC10YHQv9GD0LHQu9C40LrQuCDQmtCw0LfQsNGF0YHRgtCw0L0nfSxcclxuICAgICAgICB7aWQ6ICc4NDknLCBuYW1lOiAn0JDQniBcItCd0YPRgNCx0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5MTQnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KHQsdC10YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnNDM1JywgbmFtZTogJ9CQ0J4gXCLQqNC40L3RhdCw0L0g0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc3ODEnLCBuYW1lOiAn0JDQniBcIkNhcGl0YWwgQmFuayBLYXpha2hzdGFuXCInfSxcclxuICAgICAgICB7aWQ6ICc2MjAnLCBuYW1lOiAn0JDQniBcIlRlbmdyaSBCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc5OTgnLCBuYW1lOiAn0JDQniBcIkZpcnN0IEhlYXJ0bGFuZCBKeXNhbiBCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc0MzInLCBuYW1lOiAn0JTQniDQkNCeINCR0LDQvdC6INCS0KLQkSAo0JrQsNC30LDRhdGB0YLQsNC9KSd9LFxyXG4gICAgICAgIHtpZDogJzg5NicsIG5hbWU6ICfQkNCeIFwi0JjRgdC70LDQvNGB0LrQuNC5INCx0LDQvdC6IFwi0JfQsNC80LDQvS3QkdCw0L3QulwiJ30sXHJcbicnXHJcbiAgICBdO1xyXG4gICAgdmFyIGliYW4gPSBTdHJpbmcoaW5wdXQpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgICAgICBjb2RlID0gaWJhbi5tYXRjaCgvXihbQS1aXXsyfSkoXFxkezJ9KShcXGR7M30pKFtBLVpcXGRdKykkLyksIGRpZ2l0cztcclxuICAgIGlmICghY29kZSB8fCBpYmFuLmxlbmd0aCAhPT0gQ09ERV9MRU5HVEhTKSB7XHJcbiAgICAgICAgcmV0dXJuICfQl9Cw0L/QvtC70L3QuNGC0LUg0L/QvtC70LUg0LTQviDQutC+0L3RhtCwJ1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdmFyIGJhbmtfY29kZSA9IGNvZGVbM107XHJcblxyXG4gICAgdmFyIGJhbmsgPSBCQU5LUy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkID09IGJhbmtfY29kZVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmKGJhbmsubGVuZ3RoID4wKXtcclxuICAgICAgICByZXR1cm4gYmFua1swXS5uYW1lXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCLQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0YHRh9C10YJcIjtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZGlnaXRzID0gKGNvZGVbM10gKyBjb2RlWzRdICsgY29kZVsxXSArIGNvZGVbMl0pLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbGV0dGVyLmNoYXJDb2RlQXQoMCkgLSA1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMubW9kOTcoZGlnaXRzKSA9PT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBcItCd0LXQv9GA0LDQstC40LvRjNC90L5cIlxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZElCQU5OdW1iZXIyID0gKGlucHV0KT0+IHtcclxuXHJcbiAgICB2YXIgQ09ERV9MRU5HVEhTID0gMjA7XHJcblxyXG4gICAgdmFyIEJBTktTID0gW1xyXG4gICAgICAgIHtpZDogJzk0NycsIG5hbWU6ICfQkNCeIFwi0JTQvtGH0LXRgNC90LjQuSDQkdCw0L3QuiBcItCQ0JvQrNCk0JAt0JHQkNCd0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzgyNicsIG5hbWU6ICfQkNCeIFwi0JDQotCk0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk0OScsIG5hbWU6ICfQkNCeIFwiQWx0eW4gQmFua1wiICjQlNCRIENoaW5hIENpdGljIEJhbmsgQ29ycG9yYXRpb24gTGltaXRlZCkgJ30sXHJcbiAgICAgICAge2lkOiAnOTEzJywgbmFtZTogJ9CQ0J4g0JTQkSBcItCR0JDQndCaINCa0JjQotCQ0K8g0JIg0JrQkNCX0JDQpdCh0KLQkNCd0JVcIid9LFxyXG4gICAgICAgIHtpZDogJzcyMicsIG5hbWU6ICfQkNCeIFwiS0FTUEkgQkFOS1wiJ30sXHJcbiAgICAgICAge2lkOiAnNzY2JywgbmFtZTogJ9CQ0J4gXCLQptC10L3RgtGA0LDQu9GM0L3Ri9C5INCU0LXQv9C+0LfQuNGC0LDRgNC40Lkg0KbQtdC90L3Ri9GFINCR0YPQvNCw0LNcIid9LFxyXG4gICAgICAgIHtpZDogJzgzMicsIG5hbWU6ICfQkNCeIFwi0KHQuNGC0LjQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzkwNycsIG5hbWU6ICfQkNCeIFwi0JHQsNC90Log0KDQsNC30LLQuNGC0LjRjyDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnNzAwJywgbmFtZTogJ9CV0JLQoNCQ0JfQmNCZ0KHQmtCY0Jkg0JHQkNCd0Jog0KDQkNCX0JLQmNCi0JjQryd9LFxyXG4gICAgICAgIHtpZDogJzk0OCcsIG5hbWU6ICfQkNCeIFwi0JXQstGA0LDQt9C40LnRgdC60LjQuSDQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnMDA5JywgbmFtZTogJ9Cd0JDQniDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LrQvtGA0L/QvtGA0LDRhtC40Y8gXCLQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQviDQtNC70Y8g0LPRgNCw0LbQtNCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzk3MicsIG5hbWU6ICfQkNCeIFwi0JbQuNC70YHRgtGA0L7QudGB0LHQtdGA0LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzI0NicsIG5hbWU6ICfQkNCeIFwi0JjRgdC70LDQvNGB0LrQuNC5INCR0LDQvdC6IFwiQWwgSGlsYWxcIid9LFxyXG4gICAgICAgIHtpZDogJzYwMScsIG5hbWU6ICfQkNCeIFwi0J3QsNGA0L7QtNC90YvQuSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnOTMwJywgbmFtZTogJ9CQ0J4gXCLQotC+0YDQs9C+0LLQvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0JHQsNC90Log0JrQuNGC0LDRjyDQsiDQsy4g0JDQu9C80LDRgtGLXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTAnLCBuYW1lOiAn0LMu0JzQvtGB0LrQstCwINCc0LXQttCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQkdCw0L3Quid9LFxyXG4gICAgICAgIHtpZDogJzg4NicsIG5hbWU6ICfQlNCRINCQ0J4gXCLQpdC+0YPQvCDQmtGA0LXQtNC40YIg0Y3QvdC0INCk0LjQvdCw0L3RgSDQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTY1JywgbmFtZTogJ9CQ0J4gXCJGb3J0ZUJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTYzJywgbmFtZTogJ9CQ0J4gXCLQmtCQ0JfQn9Ce0KfQotCQXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIC8vIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBkaWdpdHMgPSAoY29kZVszXSArIGNvZGVbNF0gKyBjb2RlWzFdICsgY29kZVsyXSkucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGxldHRlcikge1xyXG4gICAgICAgIHJldHVybiBsZXR0ZXIuY2hhckNvZGVBdCgwKSAtIDU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5tb2Q5NyhkaWdpdHMpID09PSAxKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyQ29udGludWUgPSAoaW5wdXQpPT4ge1xyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5MTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0JHQkNCd0Jog0JrQmNCi0JDQryDQkiDQmtCQ0JfQkNCl0KHQotCQ0J3QlVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzIyJywgbmFtZTogJ9CQ0J4gXCJLQVNQSSBCQU5LXCInfSxcclxuICAgICAgICB7aWQ6ICc3NjYnLCBuYW1lOiAn0JDQniBcItCm0LXQvdGC0YDQsNC70YzQvdGL0Lkg0JTQtdC/0L7Qt9C40YLQsNGA0LjQuSDQptC10L3QvdGL0YUg0JHRg9C80LDQs1wiJ30sXHJcbiAgICAgICAge2lkOiAnODMyJywgbmFtZTogJ9CQ0J4gXCLQodC40YLQuNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTA3JywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiDQoNCw0LfQstC40YLQuNGPINCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc3MDAnLCBuYW1lOiAn0JXQktCg0JDQl9CY0JnQodCa0JjQmSDQkdCQ0J3QmiDQoNCQ0JfQktCY0KLQmNCvJ30sXHJcbiAgICAgICAge2lkOiAnOTQ4JywgbmFtZTogJ9CQ0J4gXCLQldCy0YDQsNC30LjQudGB0LrQuNC5INCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICcwMDknLCBuYW1lOiAn0J3QkNCeINCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90LDRjyDQutC+0YDQv9C+0YDQsNGG0LjRjyBcItCf0YDQsNCy0LjRgtC10LvRjNGB0YLQstC+INC00LvRjyDQs9GA0LDQttC00LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnOTcyJywgbmFtZTogJ9CQ0J4gXCLQltC40LvRgdGC0YDQvtC50YHQsdC10YDQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnMjQ2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0JHQsNC90LogXCJBbCBIaWxhbFwiJ30sXHJcbiAgICAgICAge2lkOiAnNjAxJywgbmFtZTogJ9CQ0J4gXCLQndCw0YDQvtC00L3Ri9C5INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICc5MzAnLCBuYW1lOiAn0JDQniBcItCi0L7RgNCz0L7QstC+LdC/0YDQvtC80YvRiNC70LXQvdC90YvQuSDQkdCw0L3QuiDQmtC40YLQsNGPINCyINCzLiDQkNC70LzQsNGC0YtcIid9LFxyXG4gICAgICAgIHtpZDogJzU1MCcsIG5hbWU6ICfQsy7QnNC+0YHQutCy0LAg0JzQtdC20LPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3Ri9C5INCR0LDQvdC6J30sXHJcbiAgICAgICAge2lkOiAnODg2JywgbmFtZTogJ9CU0JEg0JDQniBcItCl0L7Rg9C8INCa0YDQtdC00LjRgiDRjdC90LQg0KTQuNC90LDQvdGBINCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NjUnLCBuYW1lOiAn0JDQniBcIkZvcnRlQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTI3JywgbmFtZTogJ9CQ0J4gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LDRjyDRhNC+0L3QtNC+0LLQsNGPINCx0LjRgNC20LBcIid9LFxyXG4gICAgICAgIHtpZDogJzgyMScsIG5hbWU6ICfQkNCeIFwi0JHQsNC90LogXCJCYW5rIFJCS1wiJ30sXHJcbiAgICAgICAge2lkOiAnMjI0JywgbmFtZTogJ9Cg0JPQnyBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQuNC5INGG0LXQvdGC0YAg0LzQtdC20LHQsNC90LrQvtCy0YHQutC40YUg0YDQsNGB0YfQtdGC0L7QsiDQndCR0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnMDcwJywgbmFtZTogJ9Cg0JPQoyBcItCa0L7QvNC40YLQtdGCINC60LDQt9C90LDRh9C10LnRgdGC0LLQsCDQnNC40L3QuNGB0YLQtdGA0YHRgtCy0LAg0YTQuNC90LDQvdGB0L7QsiDQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgdmFyIGJhbmtfY29kZSA9IGNvZGVbM107XHJcblxyXG4gICAgdmFyIGJhbmsgPSBCQU5LUy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLmlkID09IGJhbmtfY29kZVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmKGJhbmsubGVuZ3RoID4wKXtcclxuICAgICAgICByZXR1cm4gYmFua1swXS5uYW1lXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBkaWdpdHMgPSAoY29kZVszXSArIGNvZGVbNF0gKyBjb2RlWzFdICsgY29kZVsyXSkucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGxldHRlcikge1xyXG4gICAgICAgIHJldHVybiBsZXR0ZXIuY2hhckNvZGVBdCgwKSAtIDU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5tb2Q5NyhkaWdpdHMpID09PSAxKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3QvlwiXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGliYW5Db250aW51ZSA9ICh2YWwpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKGlzVmFsaWRJQkFOTnVtYmVyQ29udGludWUodmFsKT09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGB0YfQtdGCJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbi8vIFRoaXJkIHN0ZXBcclxuXHJcbmV4cG9ydCBjb25zdCBnaXZlbkRhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwuc3Vic3RyaW5nKDYsMTApKyctJyt2YWwuc3Vic3RyaW5nKDMsNSkrJy0nK3ZhbC5zdWJzdHJpbmcoMCwyKSk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERhdGUoKTtcclxuXHR2YXIgdG9kYXlZID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbXlNID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBteUQgPSBteURhdGUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBteVkgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGlmKG15RGF0ZSA9PSAnSW52YWxpZCBEYXRlJykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cdGlmKG15WT50b2RheVkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblx0aWYobXlZIDwgdG9kYXlZLTI1KSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG4gICAgaWYobXlZPnRvZGF5WSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuICAgIGlmKG15WT09PXRvZGF5WSkge1xyXG4gICAgICAgIGlmKG15TT50b2RheU0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYobXlZPT09dG9kYXlZICYmIG15TT09PXRvZGF5TSkge1xyXG4gICAgICAgIGlmKG15RD50b2RheUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuZXhwb3J0IGNvbnN0IENoZWNrR2l2ZWREYXRlID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgaWYoIWdpdmVuRGF0ZUNhcmRJZCh2YWwpKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0JTQsNGC0LAg0YPQutCw0LfQsNC90LAg0L3QtdC/0YDQsNCy0LjQu9GM0L3QvidcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoZWNrRXhwRGF0ZSA9ICh2YWwpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCFleHBEYXRlQ2FyZElkKHZhbCkpIHtcclxuICAgICAgICBlcnJvciA9ICfQpNC+0YDQvNCw0YIg0LTQsNGC0Ysg0L3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC40LvQuCDRg9C0LiDQu9C40YfQvdC+0YHRgtC4INC/0YDQvtGB0YDQvtGH0LXQvSAnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGV4cERhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbiAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwuc3Vic3RyaW5nKDYsMTApKyctJyt2YWwuc3Vic3RyaW5nKDMsNSkrJy0nK3ZhbC5zdWJzdHJpbmcoMCwyKSk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcblx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERhdGUoKTtcclxuXHR2YXIgdG9kYXlZID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuXHR2YXIgbXlNID0gbXlEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciBteUQgPSBteURhdGUuZ2V0RGF0ZSgpO1xyXG5cdHZhciBteVkgPSBteURhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0aWYobXlZPHRvZGF5WSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuICAgIGlmKG15WT09PXRvZGF5WSkge1xyXG4gICAgICAgIGlmKG15TTx0b2RheU0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYobXlZPT09dG9kYXlZICYmIG15TT09PXRvZGF5TSkge1xyXG4gICAgICAgIGlmKG15RDx0b2RheUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cdHJldHVybiB0cnVlXHJcbn1cclxuLy8gZXhwb3J0IGNvbnN0IGdpdmVuRGF0ZUNhcmRJZCA9ICh2YWwpID0+IHtcclxuLy8gICAgIHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4vLyAgICAgaWYocmVzLmxlbmd0aCAhPT0gMTApIHtcclxuLy8gICAgICAgICByZXR1cm4gZmFsc2VcclxuLy8gICAgIH1cclxuLy8gICAgIC8vIDAyLjA1LjE5OTlcclxuLy8gXHQvLyBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSh2YWwpO1xyXG4vLyBcdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4vLyBcdHZhciB0b2RheU0gPSB0b2RheS5nZXRNb250aCgpICsgMTtcclxuLy8gXHR2YXIgdG9kYXlEID0gdG9kYXkuZ2V0RGF5KCk7XHJcbi8vIFx0dmFyIHRvZGF5WSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbi8vIFx0dmFyIG15TSA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZih2YWxbM10gPT0gMCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsWzRdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsLnN1YnN0cmluZygzLDUpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vICAgICB2YXIgbXlEID0gKCkgPT4ge1xyXG4vLyAgICAgICAgIGlmKHZhbFswXSA9PSAwKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB2YWxbMV1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiB2YWwuc3Vic3RyaW5nKDAsMik7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gXHR2YXIgbXlZID0gdmFsLnN1YnN0cmluZyg2LDkpXHJcblxyXG4vLyBcdGlmKG15WT50b2RheVkpIHtcclxuLy8gXHRcdHJldHVybiBmYWxzZTtcclxuLy8gXHR9XHJcbi8vIFx0aWYobXlZIDwgdG9kYXlZLTExKSB7XHJcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0fVxyXG4vLyBcdGlmKG15WSA9PT0gdG9kYXlZKSB7XHJcbi8vIFx0XHRpZihteU0gPT09IHRvZGF5TSAmJiBteUQgPiB0b2RheUQpIHtcclxuLy8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRpZihteU0gPiB0b2RheU0pIHtcclxuLy8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcbi8vIFx0XHR9XHJcbi8vIFx0XHRyZXR1cm4gdHJ1ZVxyXG4vLyBcdH1cclxuLy8gXHRyZXR1cm4gdHJ1ZVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3Qgb25seUVuZ2xpc2ggPXZhbD0+IC9eW2EtekEtWlxcc10qJC8udGVzdCh2YWwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrU3RyaW5nTmFtZSA9IHZhbCA9PiB7XHJcblx0aWYgKHZhbCAmJiB2YWwucmVwbGFjZSgvXFxzKyQvLCAnJykuc3BsaXQoL1xcVysvKS5sZW5ndGggPT09IDIpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdCB9XHJcblx0IHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlkTnVtYmVyID0gKHZhbCk9PiB7XHJcblx0dmFyIHJlcyA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL18vZywgXCJcIik7XHJcbiAgICB2YXIgZXJyb3I7XHJcbiAgICBpZihyZXMubGVuZ3RoICE9PSA5KSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INC90L7QvNC10YAnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXNFeHBEYXRlT2ZDYXJkVmFsaWQgPSAoaW5wdXQpID0+e1xyXG5cdHZhciBleHBEYXRlID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcblx0dmFyIGRhdGUgPSBleHBEYXRlLm1hdGNoKC9eKFxcZHsyfSkoXFxkezJ9KSQvKTtcclxuXHJcblx0aWYoZXhwRGF0ZS5sZW5ndGggPT09IDQpe1xyXG5cdFx0aWYoZGF0ZVsxXSA+IDEyIHx8IGRhdGVbMl0gPCAyMCl7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH1cclxuXHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0NhcmRWYWxpZD0gKHZhbHVlKSA9PiB7XHJcblx0aWYgKC9bXjAtOS1cXHNdKy8udGVzdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcclxuXHJcblx0bGV0IG5DaGVjayA9IDAsIG5EaWdpdCA9IDAsIGJFdmVuID0gZmFsc2U7XHJcblx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XHJcblxyXG5cdGlmKHZhbHVlLmxlbmd0aCAhPT0gMTYpe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1lbHNle1xyXG5cdFx0Zm9yIChsZXQgbiA9IHZhbHVlLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcblx0XHRcdGxldCBjRGlnaXQgPSB2YWx1ZS5jaGFyQXQobiksXHJcblx0XHRcdFx0bkRpZ2l0ID0gcGFyc2VJbnQoY0RpZ2l0LCAxMCk7XHJcblxyXG5cdFx0XHRpZiAoYkV2ZW4pIHtcclxuXHRcdFx0XHRpZiAoKG5EaWdpdCAqPSAyKSA+IDkpIG5EaWdpdCAtPSA5O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuQ2hlY2sgKz0gbkRpZ2l0O1xyXG5cdFx0XHRiRXZlbiA9ICFiRXZlbjtcclxuXHRcdH1cclxuXHRcdGlmKChuQ2hlY2sgJSAxMCkgIT09IDApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0ZXh0Q2hlY2tDYXJkVmFsaWQgPSAodmFsdWUpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCFjaGVja0NhcmRWYWxpZCkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQvdC+0LzQtdGAJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24geWVhcihkYXRlU3RyaW5nKSB7XHJcbiAgICBpZiggZGF0ZVN0cmluZ1swXSA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuICcyMCcrZGF0ZVN0cmluZy5zdWJzdHJpbmcoMCwyKTtcclxuICAgIH1cclxuICAgICAgICByZXR1cm4gJzE5JytkYXRlU3RyaW5nLnN1YnN0cmluZygwLDIpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFnZShkYXRlU3RyaW5nKSB7XHJcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcclxuICAgIHZhciB5ZWFyTm93ID0gbm93LmdldFllYXIoKTtcclxuICAgIHZhciBtb250aE5vdyA9IG5vdy5nZXRNb250aCgpO1xyXG4gICAgdmFyIGRhdGVOb3cgPSBub3cuZ2V0RGF0ZSgpO1xyXG5cclxuICAgIHZhciBkb2IgPSBuZXcgRGF0ZSh5ZWFyKGRhdGVTdHJpbmcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGVTdHJpbmcuc3Vic3RyaW5nKDIsNCktMSxcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZyg0LDYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICB2YXIgeWVhckRvYiA9IGRvYi5nZXRZZWFyKCk7XHJcbiAgICB2YXIgbW9udGhEb2IgPSBkb2IuZ2V0TW9udGgoKTtcclxuICAgIHZhciBkYXRlRG9iID0gZG9iLmdldERhdGUoKTtcclxuICAgIHZhciBhZ2UgPSB7fTtcclxuXHJcbiAgICB2YXIgeWVhckFnZSA9IHllYXJOb3cgLSB5ZWFyRG9iO1xyXG5cclxuICAgIGlmIChtb250aE5vdyA+PSBtb250aERvYilcclxuICAgICAgdmFyIG1vbnRoQWdlID0gbW9udGhOb3cgLSBtb250aERvYjtcclxuICAgIGVsc2Uge1xyXG4gICAgICB5ZWFyQWdlLS07XHJcbiAgICAgIHZhciBtb250aEFnZSA9IDEyICsgbW9udGhOb3cgLW1vbnRoRG9iO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRlTm93ID49IGRhdGVEb2IpXHJcbiAgICAgIHZhciBkYXRlQWdlID0gZGF0ZU5vdyAtIGRhdGVEb2I7XHJcbiAgICBlbHNlIHtcclxuICAgICAgbW9udGhBZ2UtLTtcclxuICAgICAgdmFyIGRhdGVBZ2UgPSAzMSArIGRhdGVOb3cgLSBkYXRlRG9iO1xyXG5cclxuICAgICAgaWYgKG1vbnRoQWdlIDwgMCkge1xyXG4gICAgICAgIG1vbnRoQWdlID0gMTE7XHJcbiAgICAgICAgeWVhckFnZS0tO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWdlID0ge1xyXG4gICAgICAgIHllYXJzOiB5ZWFyQWdlLFxyXG4gICAgICAgIG1vbnRoczogbW9udGhBZ2UsXHJcbiAgICAgICAgZGF5czogZGF0ZUFnZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGFnZS55ZWFycztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGFnZSA9IChpaW4pID0+IHtcclxuICAgIGlmKGlpbls2XSUyICE9IDApIHtcclxuICAgICAgICBpZihnZXRBZ2UoaWluKTwyMSB8fCBnZXRBZ2UoaWluKT42Mykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihpaW5bNl0lMiA9PSAwKSB7XHJcbiAgICAgICAgaWYoZ2V0QWdlKGlpbik8MjEgfHwgZ2V0QWdlKGlpbik+NTgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==