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
var ibanContinue = function ibanContinue(val) {
  var error;

  if (!isValidIBANNumberContinue(val) !== true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsicmVxdWlyZWRkIiwidmFsIiwiZXJyb3IiLCJyZXF1aXJlZCIsImxlbmd0aCIsImlpbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ2YWxpZEVtYWlsbCIsImVtYWlsdmFsaWQiLCJ0ZXN0IiwidmFsaWRFbWFpbCIsImFjY2VwdENpcnJpbGljIiwiZmFsc3kiLCJhY2NlcHRDaXJyaWxpY09ubHkiLCJjaGVja0FscGhhYmV0IiwicGFzc3dvcmRDaGVjayIsInZhbGlkYXRlQ29uZmlybVBhc3N3b3JkIiwicGFzcyIsInZhbHVlIiwiaWluVmFsaWRhdGlvbiIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsImlzVmFsaWRJQkFOTnVtYmVyIiwiaW5wdXQiLCJDT0RFX0xFTkdUSFMiLCJCQU5LUyIsIm5hbWUiLCJpYmFuIiwidG9VcHBlckNhc2UiLCJkaWdpdHMiLCJiYW5rX2NvZGUiLCJiYW5rIiwibGV0dGVyIiwiY2hhckNvZGVBdCIsIm1vZDk3IiwiaXNWYWxpZElCQU5OdW1iZXIyIiwiaXNWYWxpZElCQU5OdW1iZXJDb250aW51ZSIsImliYW5Db250aW51ZSIsImdpdmVuRGF0ZUNhcmRJZCIsInJlcyIsIm15RGF0ZSIsIkRhdGUiLCJ0b2RheSIsInRvZGF5TSIsImdldE1vbnRoIiwidG9kYXlEIiwiZ2V0RGF0ZSIsInRvZGF5WSIsImdldEZ1bGxZZWFyIiwibXlNIiwibXlEIiwibXlZIiwiQ2hlY2tHaXZlZERhdGUiLCJDaGVja0V4cERhdGUiLCJleHBEYXRlQ2FyZElkIiwib25seUVuZ2xpc2giLCJjaGVja1N0cmluZ05hbWUiLCJzcGxpdCIsImlkTnVtYmVyIiwiaXNFeHBEYXRlT2ZDYXJkVmFsaWQiLCJleHBEYXRlIiwiZGF0ZSIsImNoZWNrQ2FyZFZhbGlkIiwibkNoZWNrIiwibkRpZ2l0IiwiYkV2ZW4iLCJuIiwiY0RpZ2l0IiwiY2hhckF0IiwidGV4dENoZWNrQ2FyZFZhbGlkIiwieWVhciIsImRhdGVTdHJpbmciLCJnZXRBZ2UiLCJub3ciLCJ5ZWFyTm93IiwiZ2V0WWVhciIsIm1vbnRoTm93IiwiZGF0ZU5vdyIsImRvYiIsInllYXJEb2IiLCJtb250aERvYiIsImRhdGVEb2IiLCJhZ2UiLCJ5ZWFyQWdlIiwibW9udGhBZ2UiLCJkYXRlQWdlIiwieWVhcnMiLCJtb250aHMiLCJkYXlzIiwidmFsaWRhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRCxFQUFTO0FBQzlCLE1BQUlDLEtBQUo7O0FBQ0EsTUFBRyxDQUFDRCxHQUFKLEVBQVM7QUFDUEMsU0FBSyxHQUFHLGlDQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsS0FBUDtBQUNILENBTk07QUFRQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixHQUFEO0FBQUEsU0FBU0EsR0FBRyxJQUFJQSxHQUFHLENBQUNHLE1BQXBCO0FBQUEsQ0FBakI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDSixHQUFELEVBQVU7QUFDNUIsTUFBR0EsR0FBRyxJQUFJQSxHQUFHLENBQUNHLE1BQUosS0FBYSxFQUF2QixFQUEyQixPQUFPLEtBQVA7QUFDM0IsTUFBRyxDQUFDSCxHQUFKLEVBQVMsT0FBTyxLQUFQO0FBQ1QsTUFBSUssRUFBRSxHQUFHLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFB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RixLQUVLO0FBQ0hHLFdBQU87QUFDUCxRQUFJQyxRQUFRLEdBQUcsS0FBS1IsUUFBTCxHQUFlSSxRQUE5QjtBQUNEO0FBRUQsTUFBSUgsT0FBTyxJQUFJSSxPQUFmLEVBQ0UsSUFBSUksT0FBTyxHQUFHUixPQUFPLEdBQUdJLE9BQXhCLENBREYsS0FFSztBQUNIRyxZQUFRO0FBQ1IsUUFBSUMsT0FBTyxHQUFHLEtBQUtSLE9BQUwsR0FBZUksT0FBN0I7O0FBRUEsUUFBSUcsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJBLGNBQVEsR0FBRyxFQUFYO0FBQ0FELGFBQU87QUFDUjtBQUNGO0FBRURELEtBQUcsR0FBRztBQUNGSSxTQUFLLEVBQUVILE9BREw7QUFFRkksVUFBTSxFQUFFSCxRQUZOO0FBR0ZJLFFBQUksRUFBRUg7QUFISixHQUFOO0FBTUEsU0FBT0gsR0FBRyxDQUFDSSxLQUFYO0FBQ0g7O0FBR00sSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3JHLEdBQUQsRUFBUztBQUM3QixNQUFHQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQU8sQ0FBUCxJQUFZLENBQWYsRUFBa0I7QUFDZCxRQUFHb0YsTUFBTSxDQUFDcEYsR0FBRCxDQUFOLEdBQVksRUFBWixJQUFrQm9GLE1BQU0sQ0FBQ3BGLEdBQUQsQ0FBTixHQUFZLEVBQWpDLEVBQXFDO0FBQ2pDLGFBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsTUFBR0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFPLENBQVAsSUFBWSxDQUFmLEVBQWtCO0FBQ2QsUUFBR29GLE1BQU0sQ0FBQ3BGLEdBQUQsQ0FBTixHQUFZLEVBQVosSUFBa0JvRixNQUFNLENBQUNwRixHQUFELENBQU4sR0FBWSxFQUFqQyxFQUFxQztBQUNqQyxhQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQU8sSUFBUDtBQUNILENBWk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9jb250aW51ZS4yMDhkMjk2NDI0MTUwNDBkNTc4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlcXVpcmVkZCA9ICh2YWwpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCF2YWwpIHtcclxuICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9ICh2YWwpID0+IHZhbCAmJiB2YWwubGVuZ3RoO1xyXG5leHBvcnQgY29uc3QgaWluID0gKHZhbCkgPT4gIHtcclxuXHRpZih2YWwgJiYgdmFsLmxlbmd0aCE9PTEyKSByZXR1cm4gZmFsc2U7XHJcblx0aWYoIXZhbCkgcmV0dXJuIGZhbHNlO1xyXG5cdHZhciBiMSA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExIF07XHJcblx0dmFyIGIyID0gWyAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEsIDIgXTtcclxuXHR2YXIgYSA9IFtdO1xyXG5cdHZhciBjb250cm9sbCA9IDA7XHJcblx0Zm9yKHZhciBpPTA7IGk8MTI7IGkrKyl7XHJcblx0XHRhW2ldID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyhpLCBpKzEpKTtcclxuXHRcdGlmKGk8MTEpIGNvbnRyb2xsICs9IGFbaV0qYjFbaV07XHJcblx0fVxyXG5cdGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuXHRpZihjb250cm9sbD09MTApIHtcclxuICAgICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTE7IGkrKylcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldKmIyW2ldO1xyXG4gICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIH1cclxuXHRpZihjb250cm9sbCE9YVsxMV0pIHJldHVybiBmYWxzZTtcclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkRW1haWxsID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbCk7XHJcbiAgICBpZighdmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBpZighZW1haWx2YWxpZCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCB2YWxpZEVtYWlsID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yO1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbCk7XHJcbiAgICBpZighdmFsKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcbiAgICBpZih2YWwpIHtcclxuICAgICAgICBpZighZW1haWx2YWxpZCkge1xyXG4gICAgICAgICAgICBlcnJvciA9J9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICAgIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZighdmFsICkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gICAgfVxyXG4gICAgaWYodmFsKSB7XHJcbiAgICAgICAgaWYoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxuICAgIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZih2YWwpIHtcclxuICAgICAgaWYoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBbHBoYWJldCA9ICh2YWwpID0+IC9bYS16QS1aMC05X10vaS50ZXN0KHZhbCk7XHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZENoZWNrID0gKHZhbCk9PiB7XHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZighdmFsKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgICB9XHJcblx0aWYodmFsICYmIHZhbC5sZW5ndGggPCA1KSAgZXJyb3IgPSAn0J/QsNGA0L7Qu9GMINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQvdC1INC80LXQvdGM0YjQtSA1INGB0LjQvNCy0L7Qu9C+0LInO1xyXG5cdHJldHVybiBlcnJvcjtcclxufVxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDb25maXJtUGFzc3dvcmQgPSAocGFzcywgdmFsdWUpID0+IHtcclxuICAgIGxldCBlcnJvciA9IFwiXCI7XHJcbiAgICBpZiAocGFzcyAmJiB2YWx1ZSkge1xyXG4gICAgICBpZiAocGFzcyAhPT0gdmFsdWUpIHtcclxuICAgICAgICBlcnJvciA9IFwiUGFzc3dvcmQgbm90IG1hdGNoZWRcIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH07XHJcblxyXG5leHBvcnQgY29uc3QgaWluVmFsaWRhdGlvbiA9ICh2YWwpID0+ICB7XHJcbiAgICBsZXQgZXJyb3I7XHJcblx0aWYodmFsICYmIHZhbC5sZW5ndGghPT0xMikgZXJyb3IgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyc7XHJcblx0dmFyIGIxID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEgXTtcclxuXHR2YXIgYjIgPSBbIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMSwgMiBdO1xyXG5cdHZhciBhID0gW107XHJcbiAgICB2YXIgY29udHJvbGwgPSAwO1xyXG4gICAgaWYodmFsKSB7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7IGk8MTI7IGkrKyl7XHJcbiAgICAgICAgICAgIGFbaV0gPSBwYXJzZUludCh2YWwuc3Vic3RyaW5nKGksIGkrMSkpO1xyXG4gICAgICAgICAgICBpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICAgICAgaWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8MTE7IGkrKylcclxuICAgICAgICAgICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgICAgICAgICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjb250cm9sbCE9YVsxMV0pIGVycm9yID0gJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDQmNCY0J0nO1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxuXHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG4gICAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgICAgICB7aWQ6ICc3NzAwJ30sXHJcbiAgICAgICAge2lkOiAnNzcwMSd9LFxyXG4gICAgICAgIHtpZDogJzc3MDInfSxcclxuICAgICAgICB7aWQ6ICc3NzA1J30sXHJcbiAgICAgICAge2lkOiAnNzcwNid9LFxyXG4gICAgICAgIHtpZDogJzc3MDcnfSxcclxuICAgICAgICB7aWQ6ICc3NzA4J30sXHJcbiAgICAgICAge2lkOiAnNzc0Nyd9LFxyXG4gICAgICAgIHtpZDogJzc3NzEnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc1J30sXHJcbiAgICAgICAge2lkOiAnNzc3Nid9LFxyXG4gICAgICAgIHtpZDogJzc3NzcnfSxcclxuICAgICAgICB7aWQ6ICc3Nzc4J30sXHJcbiAgICBdO1xyXG4gICAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgICAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgICBpZiAoIWNvZGUgfHwgcGhvbmUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwaG9uZV9udW1iZXIgPSBjb2RlWzFdO1xyXG4gICAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZihwaG9uZV9vcGVyYXRvci5sZW5ndGggPjApe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gICAgbGV0IGVycm9yXHJcbiAgICBpZihwaG9uZUNoZWNrKHZhbCkgPT09IHRydWUpIHtcclxuICAgICAgICBlcnJvciA9ICcnXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG59XHJcblxyXG4vLyBMdW5hIGFsZ29cclxuXHJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkSUJBTk51bWJlciA9IChpbnB1dCk9PiB7XHJcbiAgICB2YXIgQ09ERV9MRU5HVEhTID0gMjA7XHJcblxyXG4gICAgdmFyIEJBTktTID0gW1xyXG4gICAgICAgIHtpZDogJzk0NycsIG5hbWU6ICfQkNCeIFwi0JTQvtGH0LXRgNC90LjQuSDQkdCw0L3QuiBcItCQ0JvQrNCk0JAt0JHQkNCd0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzgyNicsIG5hbWU6ICfQkNCeIFwi0JDQotCk0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk0OScsIG5hbWU6ICfQkNCeIFwiQWx0eW4gQmFua1wiICjQlNCRIENoaW5hIENpdGljIEJhbmsgQ29ycG9yYXRpb24gTGltaXRlZCkgJ30sXHJcbiAgICAgICAge2lkOiAnOTEzJywgbmFtZTogJ9CQ0J4g0JTQkSBcItCR0JDQndCaINCa0JjQotCQ0K8g0JIg0JrQkNCX0JDQpdCh0KLQkNCd0JVcIid9LFxyXG4gICAgICAgIHtpZDogJzcyMicsIG5hbWU6ICfQkNCeIFwiS0FTUEkgQkFOS1wiJ30sXHJcbiAgICAgICAge2lkOiAnNzY2JywgbmFtZTogJ9CQ0J4gXCLQptC10L3RgtGA0LDQu9GM0L3Ri9C5INCU0LXQv9C+0LfQuNGC0LDRgNC40Lkg0KbQtdC90L3Ri9GFINCR0YPQvNCw0LNcIid9LFxyXG4gICAgICAgIHtpZDogJzgzMicsIG5hbWU6ICfQkNCeIFwi0KHQuNGC0LjQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzkwNycsIG5hbWU6ICfQkNCeIFwi0JHQsNC90Log0KDQsNC30LLQuNGC0LjRjyDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnNzAwJywgbmFtZTogJ9CV0JLQoNCQ0JfQmNCZ0KHQmtCY0Jkg0JHQkNCd0Jog0KDQkNCX0JLQmNCi0JjQryd9LFxyXG4gICAgICAgIHtpZDogJzk0OCcsIG5hbWU6ICfQkNCeIFwi0JXQstGA0LDQt9C40LnRgdC60LjQuSDQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnMDA5JywgbmFtZTogJ9Cd0JDQniDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LrQvtGA0L/QvtGA0LDRhtC40Y8gXCLQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQviDQtNC70Y8g0LPRgNCw0LbQtNCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzk3MicsIG5hbWU6ICfQkNCeIFwi0JbQuNC70YHRgtGA0L7QudGB0LHQtdGA0LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzI0NicsIG5hbWU6ICfQkNCeIFwi0JjRgdC70LDQvNGB0LrQuNC5INCR0LDQvdC6IFwiQWwgSGlsYWxcIid9LFxyXG4gICAgICAgIHtpZDogJzYwMScsIG5hbWU6ICfQkNCeIFwi0J3QsNGA0L7QtNC90YvQuSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnOTMwJywgbmFtZTogJ9CQ0J4gXCLQotC+0YDQs9C+0LLQvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0JHQsNC90Log0JrQuNGC0LDRjyDQsiDQsy4g0JDQu9C80LDRgtGLXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTAnLCBuYW1lOiAn0LMu0JzQvtGB0LrQstCwINCc0LXQttCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQkdCw0L3Quid9LFxyXG4gICAgICAgIHtpZDogJzg4NicsIG5hbWU6ICfQlNCRINCQ0J4gXCLQpdC+0YPQvCDQmtGA0LXQtNC40YIg0Y3QvdC0INCk0LjQvdCw0L3RgSDQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTY1JywgbmFtZTogJ9CQ0J4gXCJGb3J0ZUJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTYzJywgbmFtZTogJ9CQ0J4gXCLQmtCQ0JfQn9Ce0KfQotCQXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IEthc3NhIE5vdmFcIiAo0JTQvtGH0LXRgNC90LjQuSDQsdCw0L3QuiDQkNCeIFwiRm9ydGVCYW5rXCIpJ30sXHJcbiAgICAgICAge2lkOiAnODg1JywgbmFtZTogJ9CQ0J4gXCLQlNCRIFwi0JrQkNCX0JDQpdCh0KLQkNCdLdCX0JjQoNCQ0JDQoiDQmNCd0KLQldCg0J3QldCo0J3QmyDQkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNzc0JywgbmFtZTogJ9CQ0J4gXCJBc2lhQ3JlZGl0IEJhbmsgKNCQ0LfQuNGP0JrRgNC10LTQuNGCINCR0LDQvdC6KVwiICd9LFxyXG4gICAgICAgIHtpZDogJzU1MycsIG5hbWU6ICfQkNCeINCU0JEgXCLQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0J/QsNC60LjRgdGC0LDQvdCwXCIg0LIg0JrQsNC30LDRhdGB0YLQsNC90LUnfSxcclxuICAgICAgICB7aWQ6ICcxNDcnLCBuYW1lOiAnXCLQkdCw0L3Qui3QutCw0YHRgtC+0LTQuNCw0L0g0JDQniAgXCLQldCd0J/QpFwiJ30sXHJcbiAgICAgICAge2lkOiAnMTI1JywgbmFtZTogJ9Cg0JPQoyDQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0JHQsNC90Log0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9J30sXHJcbiAgICAgICAge2lkOiAnODQ5JywgbmFtZTogJ9CQ0J4gXCLQndGD0YDQsdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTE0JywgbmFtZTogJ9CU0JEg0JDQniBcItCh0LHQtdGA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzQzNScsIG5hbWU6ICfQkNCeIFwi0KjQuNC90YXQsNC9INCR0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvVwiJ30sXHJcbiAgICAgICAge2lkOiAnNzgxJywgbmFtZTogJ9CQ0J4gXCJDYXBpdGFsIEJhbmsgS2F6YWtoc3RhblwiJ30sXHJcbiAgICAgICAge2lkOiAnNjIwJywgbmFtZTogJ9CQ0J4gXCJUZW5ncmkgQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnOTk4JywgbmFtZTogJ9CQ0J4gXCJGaXJzdCBIZWFydGxhbmQgSnlzYW4gQmFua1wiJ30sXHJcbiAgICAgICAge2lkOiAnNDMyJywgbmFtZTogJ9CU0J4g0JDQniDQkdCw0L3QuiDQktCi0JEgKNCa0LDQt9Cw0YXRgdGC0LDQvSknfSxcclxuICAgICAgICB7aWQ6ICc4OTYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQsdCw0L3QuiBcItCX0LDQvNCw0L0t0JHQsNC90LpcIid9LFxyXG4nJ1xyXG4gICAgXTtcclxuICAgIHZhciBpYmFuID0gU3RyaW5nKGlucHV0KS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICAgICAgY29kZSA9IGliYW4ubWF0Y2goL14oW0EtWl17Mn0pKFxcZHsyfSkoXFxkezN9KShbQS1aXFxkXSspJC8pLCBkaWdpdHM7XHJcbiAgICBpZiAoIWNvZGUgfHwgaWJhbi5sZW5ndGggIT09IENPREVfTEVOR1RIUykge1xyXG4gICAgICAgIHJldHVybiAn0JfQsNC/0L7Qu9C90LjRgtC1INC/0L7Qu9C1INC00L4g0LrQvtC90YbQsCdcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHZhciBiYW5rX2NvZGUgPSBjb2RlWzNdO1xyXG5cclxuICAgIHZhciBiYW5rID0gQkFOS1MuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCA9PSBiYW5rX2NvZGVcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZihiYW5rLmxlbmd0aCA+MCl7XHJcbiAgICAgICAgcmV0dXJuIGJhbmtbMF0ubmFtZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INGB0YfQtdGCXCI7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGRpZ2l0cyA9IChjb2RlWzNdICsgY29kZVs0XSArIGNvZGVbMV0gKyBjb2RlWzJdKS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAobGV0dGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxldHRlci5jaGFyQ29kZUF0KDApIC0gNTU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZih0aGlzLm1vZDk3KGRpZ2l0cykgPT09IDEpe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCLQndC10L/RgNCw0LLQuNC70YzQvdC+XCJcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJQkFOTnVtYmVyMiA9IChpbnB1dCk9PiB7XHJcblxyXG4gICAgdmFyIENPREVfTEVOR1RIUyA9IDIwO1xyXG5cclxuICAgIHZhciBCQU5LUyA9IFtcclxuICAgICAgICB7aWQ6ICc5NDcnLCBuYW1lOiAn0JDQniBcItCU0L7Rh9C10YDQvdC40Lkg0JHQsNC90LogXCLQkNCb0KzQpNCQLdCR0JDQndCaXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjYnLCBuYW1lOiAn0JDQniBcItCQ0KLQpNCR0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc5NDknLCBuYW1lOiAn0JDQniBcIkFsdHluIEJhbmtcIiAo0JTQkSBDaGluYSBDaXRpYyBCYW5rIENvcnBvcmF0aW9uIExpbWl0ZWQpICd9LFxyXG4gICAgICAgIHtpZDogJzkxMycsIG5hbWU6ICfQkNCeINCU0JEgXCLQkdCQ0J3QmiDQmtCY0KLQkNCvINCSINCa0JDQl9CQ0KXQodCi0JDQndCVXCInfSxcclxuICAgICAgICB7aWQ6ICc3MjInLCBuYW1lOiAn0JDQniBcIktBU1BJIEJBTktcIid9LFxyXG4gICAgICAgIHtpZDogJzc2NicsIG5hbWU6ICfQkNCeIFwi0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNC10L/QvtC30LjRgtCw0YDQuNC5INCm0LXQvdC90YvRhSDQkdGD0LzQsNCzXCInfSxcclxuICAgICAgICB7aWQ6ICc4MzInLCBuYW1lOiAn0JDQniBcItCh0LjRgtC40LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5MDcnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6INCg0LDQt9Cy0LjRgtC40Y8g0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzcwMCcsIG5hbWU6ICfQldCS0KDQkNCX0JjQmdCh0JrQmNCZINCR0JDQndCaINCg0JDQl9CS0JjQotCY0K8nfSxcclxuICAgICAgICB7aWQ6ICc5NDgnLCBuYW1lOiAn0JDQniBcItCV0LLRgNCw0LfQuNC50YHQutC40Lkg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzAwOScsIG5hbWU6ICfQndCQ0J4g0JPQvtGB0YPQtNCw0YDRgdGC0LLQtdC90L3QsNGPINC60L7RgNC/0L7RgNCw0YbQuNGPIFwi0J/RgNCw0LLQuNGC0LXQu9GM0YHRgtCy0L4g0LTQu9GPINCz0YDQsNC20LTQsNC9XCInfSxcclxuICAgICAgICB7aWQ6ICc5NzInLCBuYW1lOiAn0JDQniBcItCW0LjQu9GB0YLRgNC+0LnRgdCx0LXRgNCx0LDQvdC6INCa0LDQt9Cw0YXRgdGC0LDQvdCwXCInfSxcclxuICAgICAgICB7aWQ6ICcyNDYnLCBuYW1lOiAn0JDQniBcItCY0YHQu9Cw0LzRgdC60LjQuSDQkdCw0L3QuiBcIkFsIEhpbGFsXCInfSxcclxuICAgICAgICB7aWQ6ICc2MDEnLCBuYW1lOiAn0JDQniBcItCd0LDRgNC+0LTQvdGL0Lkg0JHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzkzMCcsIG5hbWU6ICfQkNCeIFwi0KLQvtGA0LPQvtCy0L4t0L/RgNC+0LzRi9GI0LvQtdC90L3Ri9C5INCR0LDQvdC6INCa0LjRgtCw0Y8g0LIg0LMuINCQ0LvQvNCw0YLRi1wiJ30sXHJcbiAgICAgICAge2lkOiAnNTUwJywgbmFtZTogJ9CzLtCc0L7RgdC60LLQsCDQnNC10LbQs9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0JHQsNC90LonfSxcclxuICAgICAgICB7aWQ6ICc4ODYnLCBuYW1lOiAn0JTQkSDQkNCeIFwi0KXQvtGD0Lwg0JrRgNC10LTQuNGCINGN0L3QtCDQpNC40L3QsNC90YEg0JHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzk2NScsIG5hbWU6ICfQkNCeIFwiRm9ydGVCYW5rXCInfSxcclxuICAgICAgICB7aWQ6ICc5MjcnLCBuYW1lOiAn0JDQniBcItCa0LDQt9Cw0YXRgdGC0LDQvdGB0LrQsNGPINGE0L7QvdC00L7QstCw0Y8g0LHQuNGA0LbQsFwiJ30sXHJcbiAgICAgICAge2lkOiAnODIxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBcIkJhbmsgUkJLXCInfSxcclxuICAgICAgICB7aWQ6ICcyMjQnLCBuYW1lOiAn0KDQk9CfIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutC40Lkg0YbQtdC90YLRgCDQvNC10LbQsdCw0L3QutC+0LLRgdC60LjRhSDRgNCw0YHRh9C10YLQvtCyINCd0JHQoNCaXCInfSxcclxuICAgICAgICB7aWQ6ICcwNzAnLCBuYW1lOiAn0KDQk9CjIFwi0JrQvtC80LjRgtC10YIg0LrQsNC30L3QsNGH0LXQudGB0YLQstCwINCc0LjQvdC40YHRgtC10YDRgdGC0LLQsCDRhNC40L3QsNC90YHQvtCyINCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzU2MycsIG5hbWU6ICfQkNCeIFwi0JrQkNCX0J/QntCn0KLQkFwiJ30sXHJcbiAgICAgICAge2lkOiAnNTUxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBLYXNzYSBOb3ZhXCIgKNCU0L7Rh9C10YDQvdC40Lkg0LHQsNC90Log0JDQniBcIkZvcnRlQmFua1wiKSd9LFxyXG4gICAgICAgIHtpZDogJzg4NScsIG5hbWU6ICfQkNCeIFwi0JTQkSBcItCa0JDQl9CQ0KXQodCi0JDQnS3Ql9CY0KDQkNCQ0KIg0JjQndCi0JXQoNCd0JXQqNCd0Jsg0JHQkNCd0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzc3NCcsIG5hbWU6ICfQkNCeIFwiQXNpYUNyZWRpdCBCYW5rICjQkNC30LjRj9Ca0YDQtdC00LjRgiDQkdCw0L3QuilcIiAnfSxcclxuICAgICAgICB7aWQ6ICc1NTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCf0LDQutC40YHRgtCw0L3QsFwiINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1J30sXHJcbiAgICAgICAge2lkOiAnMTQ3JywgbmFtZTogJ1wi0JHQsNC90Lot0LrQsNGB0YLQvtC00LjQsNC9INCQ0J4gIFwi0JXQndCf0KRcIid9LFxyXG4gICAgICAgIHtpZDogJzEyNScsIG5hbWU6ICfQoNCT0KMg0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCg0LXRgdC/0YPQsdC70LjQutC4INCa0LDQt9Cw0YXRgdGC0LDQvSd9LFxyXG4gICAgICAgIHtpZDogJzg0OScsIG5hbWU6ICfQkNCeIFwi0J3Rg9GA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzkxNCcsIG5hbWU6ICfQlNCRINCQ0J4gXCLQodCx0LXRgNCx0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc0MzUnLCBuYW1lOiAn0JDQniBcItCo0LjQvdGF0LDQvSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzc4MScsIG5hbWU6ICfQkNCeIFwiQ2FwaXRhbCBCYW5rIEthemFraHN0YW5cIid9LFxyXG4gICAgICAgIHtpZDogJzYyMCcsIG5hbWU6ICfQkNCeIFwiVGVuZ3JpIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzk5OCcsIG5hbWU6ICfQkNCeIFwiRmlyc3QgSGVhcnRsYW5kIEp5c2FuIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzQzMicsIG5hbWU6ICfQlNCeINCQ0J4g0JHQsNC90Log0JLQotCRICjQmtCw0LfQsNGF0YHRgtCw0L0pJ30sXHJcbiAgICAgICAge2lkOiAnODk2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0LHQsNC90LogXCLQl9Cw0LzQsNC9LdCR0LDQvdC6XCInfSxcclxuJydcclxuICAgIF07XHJcbiAgICB2YXIgaWJhbiA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgICAgIGNvZGUgPSBpYmFuLm1hdGNoKC9eKFtBLVpdezJ9KShcXGR7Mn0pKFxcZHszfSkoW0EtWlxcZF0rKSQvKSwgZGlnaXRzO1xyXG4gICAgaWYgKCFjb2RlIHx8IGliYW4ubGVuZ3RoICE9PSBDT0RFX0xFTkdUSFMpIHtcclxuICAgICAgICAvLyByZXR1cm4gJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICB2YXIgYmFua19jb2RlID0gY29kZVszXTtcclxuXHJcbiAgICB2YXIgYmFuayA9IEJBTktTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gYmFua19jb2RlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYoYmFuay5sZW5ndGggPjApe1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgZGlnaXRzID0gKGNvZGVbM10gKyBjb2RlWzRdICsgY29kZVsxXSArIGNvZGVbMl0pLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIpIHtcclxuICAgICAgICByZXR1cm4gbGV0dGVyLmNoYXJDb2RlQXQoMCkgLSA1NTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHRoaXMubW9kOTcoZGlnaXRzKSA9PT0gMSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkSUJBTk51bWJlckNvbnRpbnVlID0gKGlucHV0KT0+IHtcclxuICAgIHZhciBDT0RFX0xFTkdUSFMgPSAyMDtcclxuXHJcbiAgICB2YXIgQkFOS1MgPSBbXHJcbiAgICAgICAge2lkOiAnOTQ3JywgbmFtZTogJ9CQ0J4gXCLQlNC+0YfQtdGA0L3QuNC5INCR0LDQvdC6IFwi0JDQm9Cs0KTQkC3QkdCQ0J3QmlwiJ30sXHJcbiAgICAgICAge2lkOiAnODI2JywgbmFtZTogJ9CQ0J4gXCLQkNCi0KTQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTEzJywgbmFtZTogJ9CQ0J4g0JTQkSBcItCR0JDQndCaINCa0JjQotCQ0K8g0JIg0JrQkNCX0JDQpdCh0KLQkNCd0JVcIid9LFxyXG4gICAgICAgIHtpZDogJzcyMicsIG5hbWU6ICfQkNCeIFwiS0FTUEkgQkFOS1wiJ30sXHJcbiAgICAgICAge2lkOiAnNzY2JywgbmFtZTogJ9CQ0J4gXCLQptC10L3RgtGA0LDQu9GM0L3Ri9C5INCU0LXQv9C+0LfQuNGC0LDRgNC40Lkg0KbQtdC90L3Ri9GFINCR0YPQvNCw0LNcIid9LFxyXG4gICAgICAgIHtpZDogJzgzMicsIG5hbWU6ICfQkNCeIFwi0KHQuNGC0LjQsdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzkwNycsIG5hbWU6ICfQkNCeIFwi0JHQsNC90Log0KDQsNC30LLQuNGC0LjRjyDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnNzAwJywgbmFtZTogJ9CV0JLQoNCQ0JfQmNCZ0KHQmtCY0Jkg0JHQkNCd0Jog0KDQkNCX0JLQmNCi0JjQryd9LFxyXG4gICAgICAgIHtpZDogJzk0OCcsIG5hbWU6ICfQkNCeIFwi0JXQstGA0LDQt9C40LnRgdC60LjQuSDQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnMDA5JywgbmFtZTogJ9Cd0JDQniDQk9C+0YHRg9C00LDRgNGB0YLQstC10L3QvdCw0Y8g0LrQvtGA0L/QvtGA0LDRhtC40Y8gXCLQn9GA0LDQstC40YLQtdC70YzRgdGC0LLQviDQtNC70Y8g0LPRgNCw0LbQtNCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzk3MicsIG5hbWU6ICfQkNCeIFwi0JbQuNC70YHRgtGA0L7QudGB0LHQtdGA0LHQsNC90Log0JrQsNC30LDRhdGB0YLQsNC90LBcIid9LFxyXG4gICAgICAgIHtpZDogJzI0NicsIG5hbWU6ICfQkNCeIFwi0JjRgdC70LDQvNGB0LrQuNC5INCR0LDQvdC6IFwiQWwgSGlsYWxcIid9LFxyXG4gICAgICAgIHtpZDogJzYwMScsIG5hbWU6ICfQkNCeIFwi0J3QsNGA0L7QtNC90YvQuSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L3QsFwiJ30sXHJcbiAgICAgICAge2lkOiAnOTMwJywgbmFtZTogJ9CQ0J4gXCLQotC+0YDQs9C+0LLQvi3Qv9GA0L7QvNGL0YjQu9C10L3QvdGL0Lkg0JHQsNC90Log0JrQuNGC0LDRjyDQsiDQsy4g0JDQu9C80LDRgtGLXCInfSxcclxuICAgICAgICB7aWQ6ICc1NTAnLCBuYW1lOiAn0LMu0JzQvtGB0LrQstCwINCc0LXQttCz0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQkdCw0L3Quid9LFxyXG4gICAgICAgIHtpZDogJzg4NicsIG5hbWU6ICfQlNCRINCQ0J4gXCLQpdC+0YPQvCDQmtGA0LXQtNC40YIg0Y3QvdC0INCk0LjQvdCw0L3RgSDQkdCw0L3QulwiJ30sXHJcbiAgICAgICAge2lkOiAnOTY1JywgbmFtZTogJ9CQ0J4gXCJGb3J0ZUJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzkyNycsIG5hbWU6ICfQkNCeIFwi0JrQsNC30LDRhdGB0YLQsNC90YHQutCw0Y8g0YTQvtC90LTQvtCy0LDRjyDQsdC40YDQttCwXCInfSxcclxuICAgICAgICB7aWQ6ICc4MjEnLCBuYW1lOiAn0JDQniBcItCR0LDQvdC6IFwiQmFuayBSQktcIid9LFxyXG4gICAgICAgIHtpZDogJzIyNCcsIG5hbWU6ICfQoNCT0J8gXCLQmtCw0LfQsNGF0YHRgtCw0L3RgdC60LjQuSDRhtC10L3RgtGAINC80LXQttCx0LDQvdC60L7QstGB0LrQuNGFINGA0LDRgdGH0LXRgtC+0LIg0J3QkdCg0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzA3MCcsIG5hbWU6ICfQoNCT0KMgXCLQmtC+0LzQuNGC0LXRgiDQutCw0LfQvdCw0YfQtdC50YHRgtCy0LAg0JzQuNC90LjRgdGC0LXRgNGB0YLQstCwINGE0LjQvdCw0L3RgdC+0LIg0KDQmlwiJ30sXHJcbiAgICAgICAge2lkOiAnNTUxJywgbmFtZTogJ9CQ0J4gXCLQkdCw0L3QuiBLYXNzYSBOb3ZhXCIgKNCU0L7Rh9C10YDQvdC40Lkg0LHQsNC90Log0JDQniBcIkZvcnRlQmFua1wiKSd9LFxyXG4gICAgICAgIHtpZDogJzg4NScsIG5hbWU6ICfQkNCeIFwi0JTQkSBcItCa0JDQl9CQ0KXQodCi0JDQnS3Ql9CY0KDQkNCQ0KIg0JjQndCi0JXQoNCd0JXQqNCd0Jsg0JHQkNCd0JpcIid9LFxyXG4gICAgICAgIHtpZDogJzc3NCcsIG5hbWU6ICfQkNCeIFwiQXNpYUNyZWRpdCBCYW5rICjQkNC30LjRj9Ca0YDQtdC00LjRgiDQkdCw0L3QuilcIiAnfSxcclxuICAgICAgICB7aWQ6ICc1NTMnLCBuYW1lOiAn0JDQniDQlNCRIFwi0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCf0LDQutC40YHRgtCw0L3QsFwiINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1J30sXHJcbiAgICAgICAge2lkOiAnMTQ3JywgbmFtZTogJ1wi0JHQsNC90Lot0LrQsNGB0YLQvtC00LjQsNC9INCQ0J4gIFwi0JXQndCf0KRcIid9LFxyXG4gICAgICAgIHtpZDogJzEyNScsIG5hbWU6ICfQoNCT0KMg0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCR0LDQvdC6INCg0LXRgdC/0YPQsdC70LjQutC4INCa0LDQt9Cw0YXRgdGC0LDQvSd9LFxyXG4gICAgICAgIHtpZDogJzg0OScsIG5hbWU6ICfQkNCeIFwi0J3Rg9GA0LHQsNC90LpcIid9LFxyXG4gICAgICAgIHtpZDogJzkxNCcsIG5hbWU6ICfQlNCRINCQ0J4gXCLQodCx0LXRgNCx0LDQvdC6XCInfSxcclxuICAgICAgICB7aWQ6ICc0MzUnLCBuYW1lOiAn0JDQniBcItCo0LjQvdGF0LDQvSDQkdCw0L3QuiDQmtCw0LfQsNGF0YHRgtCw0L1cIid9LFxyXG4gICAgICAgIHtpZDogJzc4MScsIG5hbWU6ICfQkNCeIFwiQ2FwaXRhbCBCYW5rIEthemFraHN0YW5cIid9LFxyXG4gICAgICAgIHtpZDogJzYyMCcsIG5hbWU6ICfQkNCeIFwiVGVuZ3JpIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzk5OCcsIG5hbWU6ICfQkNCeIFwiRmlyc3QgSGVhcnRsYW5kIEp5c2FuIEJhbmtcIid9LFxyXG4gICAgICAgIHtpZDogJzQzMicsIG5hbWU6ICfQlNCeINCQ0J4g0JHQsNC90Log0JLQotCRICjQmtCw0LfQsNGF0YHRgtCw0L0pJ30sXHJcbiAgICAgICAge2lkOiAnODk2JywgbmFtZTogJ9CQ0J4gXCLQmNGB0LvQsNC80YHQutC40Lkg0LHQsNC90LogXCLQl9Cw0LzQsNC9LdCR0LDQvdC6XCInfSxcclxuJydcclxuICAgIF07XHJcbiAgICB2YXIgaWJhbiA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgICAgIGNvZGUgPSBpYmFuLm1hdGNoKC9eKFtBLVpdezJ9KShcXGR7Mn0pKFxcZHszfSkoW0EtWlxcZF0rKSQvKSwgZGlnaXRzO1xyXG4gICAgaWYgKCFjb2RlIHx8IGliYW4ubGVuZ3RoICE9PSBDT0RFX0xFTkdUSFMpIHtcclxuICAgICAgICByZXR1cm4gJ9CX0LDQv9C+0LvQvdC40YLQtSDQv9C+0LvQtSDQtNC+INC60L7QvdGG0LAnXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICB2YXIgYmFua19jb2RlID0gY29kZVszXTtcclxuXHJcbiAgICB2YXIgYmFuayA9IEJBTktTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gYmFua19jb2RlXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaWYoYmFuay5sZW5ndGggPjApe1xyXG4gICAgICAgIHJldHVybiBiYW5rWzBdLm5hbWVcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBcItCd0LXQutC+0YDRgNC10LrRgtC90YvQuSDRgdGH0LXRglwiO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBkaWdpdHMgPSAoY29kZVszXSArIGNvZGVbNF0gKyBjb2RlWzFdICsgY29kZVsyXSkucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGxldHRlcikge1xyXG4gICAgICAgIHJldHVybiBsZXR0ZXIuY2hhckNvZGVBdCgwKSAtIDU1O1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYodGhpcy5tb2Q5NyhkaWdpdHMpID09PSAxKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3QvlwiXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGliYW5Db250aW51ZSA9ICh2YWwpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCFpc1ZhbGlkSUJBTk51bWJlckNvbnRpbnVlKHZhbCkhPT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDRgdGH0LXRgidcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvclxyXG59XHJcblxyXG4vLyBUaGlyZCBzdGVwXHJcblxyXG5leHBvcnQgY29uc3QgZ2l2ZW5EYXRlQ2FyZElkID0gKHZhbCkgPT4ge1xyXG4gICAgdmFyIHJlcyA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL18vZywgXCJcIik7XHJcbiAgICBpZihyZXMubGVuZ3RoICE9PSAxMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUodmFsLnN1YnN0cmluZyg2LDEwKSsnLScrdmFsLnN1YnN0cmluZygzLDUpKyctJyt2YWwuc3Vic3RyaW5nKDAsMikpO1xyXG4gICAgaWYobXlEYXRlID09ICdJbnZhbGlkIERhdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcblx0dmFyIHRvZGF5TSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciB0b2RheUQgPSB0b2RheS5nZXREYXRlKCk7XHJcblx0dmFyIHRvZGF5WSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG15TSA9IG15RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgbXlEID0gbXlEYXRlLmdldERhdGUoKTtcclxuXHR2YXIgbXlZID0gbXlEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBpZihteURhdGUgPT0gJ0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHRpZihteVk+dG9kYXlZKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cdGlmKG15WSA8IHRvZGF5WS0yNSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuICAgIGlmKG15WT50b2RheVkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbiAgICBpZihteVk9PT10b2RheVkpIHtcclxuICAgICAgICBpZihteU0+dG9kYXlNKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKG15WT09PXRvZGF5WSAmJiBteU09PT10b2RheU0pIHtcclxuICAgICAgICBpZihteUQ+dG9kYXlEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcbmV4cG9ydCBjb25zdCBDaGVja0dpdmVkRGF0ZSA9ICh2YWwpID0+IHtcclxuICAgIGxldCBlcnJvcjtcclxuICAgIGlmKCFnaXZlbkRhdGVDYXJkSWQodmFsKSkge1xyXG4gICAgICAgIGVycm9yID0gJ9CU0LDRgtCwINGD0LrQsNC30LDQvdCwINC90LXQv9GA0LDQstC40LvRjNC90L4nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja0V4cERhdGUgPSAodmFsKSA9PiB7XHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZighZXhwRGF0ZUNhcmRJZCh2YWwpKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0KTQvtGA0LzQsNGCINC00LDRgtGLINC90LXQv9GA0LDQstC40LvRjNC90YvQuSDQuNC70Lgg0YPQtC4g0LvQuNGH0L3QvtGB0YLQuCDQv9GA0L7RgdGA0L7Rh9C10L0gJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59XHJcbmV4cG9ydCBjb25zdCBleHBEYXRlQ2FyZElkID0gKHZhbCkgPT4ge1xyXG4gICAgdmFyIHJlcyA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL18vZywgXCJcIik7XHJcbiAgICBpZihyZXMubGVuZ3RoICE9PSAxMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUodmFsLnN1YnN0cmluZyg2LDEwKSsnLScrdmFsLnN1YnN0cmluZygzLDUpKyctJyt2YWwuc3Vic3RyaW5nKDAsMikpO1xyXG4gICAgaWYobXlEYXRlID09ICdJbnZhbGlkIERhdGUnKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXHJcblx0dmFyIHRvZGF5TSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xyXG5cdHZhciB0b2RheUQgPSB0b2RheS5nZXREYXRlKCk7XHJcblx0dmFyIHRvZGF5WSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcblx0dmFyIG15TSA9IG15RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHR2YXIgbXlEID0gbXlEYXRlLmdldERhdGUoKTtcclxuXHR2YXIgbXlZID0gbXlEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5cdGlmKG15WTx0b2RheVkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbiAgICBpZihteVk9PT10b2RheVkpIHtcclxuICAgICAgICBpZihteU08dG9kYXlNKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKG15WT09PXRvZGF5WSAmJiBteU09PT10b2RheU0pIHtcclxuICAgICAgICBpZihteUQ8dG9kYXlEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRyZXR1cm4gdHJ1ZVxyXG59XHJcbi8vIGV4cG9ydCBjb25zdCBnaXZlbkRhdGVDYXJkSWQgPSAodmFsKSA9PiB7XHJcbi8vICAgICB2YXIgcmVzID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvXy9nLCBcIlwiKTtcclxuLy8gICAgIGlmKHJlcy5sZW5ndGggIT09IDEwKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbi8vICAgICB9XHJcbi8vICAgICAvLyAwMi4wNS4xOTk5XHJcbi8vIFx0Ly8gY29uc3QgbXlEYXRlID0gbmV3IERhdGUodmFsKTtcclxuLy8gXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuLy8gXHR2YXIgdG9kYXlNID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XHJcbi8vIFx0dmFyIHRvZGF5RCA9IHRvZGF5LmdldERheSgpO1xyXG4vLyBcdHZhciB0b2RheVkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4vLyBcdHZhciBteU0gPSAoKSA9PiB7XHJcbi8vICAgICAgICAgaWYodmFsWzNdID09IDApIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbFs0XVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHZhbC5zdWJzdHJpbmcoMyw1KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9O1xyXG4vLyAgICAgdmFyIG15RCA9ICgpID0+IHtcclxuLy8gICAgICAgICBpZih2YWxbMF0gPT0gMCkge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsWzFdXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gdmFsLnN1YnN0cmluZygwLDIpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH07XHJcbi8vIFx0dmFyIG15WSA9IHZhbC5zdWJzdHJpbmcoNiw5KVxyXG5cclxuLy8gXHRpZihteVk+dG9kYXlZKSB7XHJcbi8vIFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vIFx0fVxyXG4vLyBcdGlmKG15WSA8IHRvZGF5WS0xMSkge1xyXG4vLyBcdFx0cmV0dXJuIGZhbHNlO1xyXG4vLyBcdH1cclxuLy8gXHRpZihteVkgPT09IHRvZGF5WSkge1xyXG4vLyBcdFx0aWYobXlNID09PSB0b2RheU0gJiYgbXlEID4gdG9kYXlEKSB7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZVxyXG4vLyBcdFx0fVxyXG4vLyBcdFx0aWYobXlNID4gdG9kYXlNKSB7XHJcbi8vIFx0XHRcdHJldHVybiBmYWxzZVxyXG4vLyBcdFx0fVxyXG4vLyBcdFx0cmV0dXJuIHRydWVcclxuLy8gXHR9XHJcbi8vIFx0cmV0dXJuIHRydWVcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IG9ubHlFbmdsaXNoID12YWw9PiAvXlthLXpBLVpcXHNdKiQvLnRlc3QodmFsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1N0cmluZ05hbWUgPSB2YWwgPT4ge1xyXG5cdGlmICh2YWwgJiYgdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoID09PSAyKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHQgfVxyXG5cdCByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpZE51bWJlciA9ICh2YWwpPT4ge1xyXG5cdHZhciByZXMgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9fL2csIFwiXCIpO1xyXG4gICAgdmFyIGVycm9yO1xyXG4gICAgaWYocmVzLmxlbmd0aCAhPT0gOSkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQvdC+0LzQtdGAJ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRXhwRGF0ZU9mQ2FyZFZhbGlkID0gKGlucHV0KSA9PntcclxuXHR2YXIgZXhwRGF0ZSA9IFN0cmluZyhpbnB1dCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXjAtOV0vZywgJycpO1xyXG5cdHZhciBkYXRlID0gZXhwRGF0ZS5tYXRjaCgvXihcXGR7Mn0pKFxcZHsyfSkkLyk7XHJcblxyXG5cdGlmKGV4cERhdGUubGVuZ3RoID09PSA0KXtcclxuXHRcdGlmKGRhdGVbMV0gPiAxMiB8fCBkYXRlWzJdIDwgMjApe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9XHJcblxyXG5cdH1lbHNle1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tDYXJkVmFsaWQ9ICh2YWx1ZSkgPT4ge1xyXG5cdGlmICgvW14wLTktXFxzXSsvLnRlc3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdGxldCBuQ2hlY2sgPSAwLCBuRGlnaXQgPSAwLCBiRXZlbiA9IGZhbHNlO1xyXG5cdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG5cclxuXHRpZih2YWx1ZS5sZW5ndGggIT09IDE2KXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9ZWxzZXtcclxuXHRcdGZvciAobGV0IG4gPSB2YWx1ZS5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG5cdFx0XHRsZXQgY0RpZ2l0ID0gdmFsdWUuY2hhckF0KG4pLFxyXG5cdFx0XHRcdG5EaWdpdCA9IHBhcnNlSW50KGNEaWdpdCwgMTApO1xyXG5cclxuXHRcdFx0aWYgKGJFdmVuKSB7XHJcblx0XHRcdFx0aWYgKChuRGlnaXQgKj0gMikgPiA5KSBuRGlnaXQgLT0gOTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bkNoZWNrICs9IG5EaWdpdDtcclxuXHRcdFx0YkV2ZW4gPSAhYkV2ZW47XHJcblx0XHR9XHJcblx0XHRpZigobkNoZWNrICUgMTApICE9PSAwKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdGV4dENoZWNrQ2FyZFZhbGlkID0gKHZhbHVlKSA9PiB7XHJcbiAgICBsZXQgZXJyb3I7XHJcbiAgICBpZighY2hlY2tDYXJkVmFsaWQpIHtcclxuICAgICAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0L3QvtC80LXRgCdcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHllYXIoZGF0ZVN0cmluZykge1xyXG4gICAgaWYoIGRhdGVTdHJpbmdbMF0gPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAnMjAnK2RhdGVTdHJpbmcuc3Vic3RyaW5nKDAsMik7XHJcbiAgICB9XHJcbiAgICAgICAgcmV0dXJuICcxOScrZGF0ZVN0cmluZy5zdWJzdHJpbmcoMCwyKTtcclxufVxyXG5mdW5jdGlvbiBnZXRBZ2UoZGF0ZVN0cmluZykge1xyXG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgeWVhck5vdyA9IG5vdy5nZXRZZWFyKCk7XHJcbiAgICB2YXIgbW9udGhOb3cgPSBub3cuZ2V0TW9udGgoKTtcclxuICAgIHZhciBkYXRlTm93ID0gbm93LmdldERhdGUoKTtcclxuXHJcbiAgICB2YXIgZG9iID0gbmV3IERhdGUoeWVhcihkYXRlU3RyaW5nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICBkYXRlU3RyaW5nLnN1YnN0cmluZygyLDQpLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVN0cmluZy5zdWJzdHJpbmcoNCw2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgdmFyIHllYXJEb2IgPSBkb2IuZ2V0WWVhcigpO1xyXG4gICAgdmFyIG1vbnRoRG9iID0gZG9iLmdldE1vbnRoKCk7XHJcbiAgICB2YXIgZGF0ZURvYiA9IGRvYi5nZXREYXRlKCk7XHJcbiAgICB2YXIgYWdlID0ge307XHJcblxyXG4gICAgdmFyIHllYXJBZ2UgPSB5ZWFyTm93IC0geWVhckRvYjtcclxuXHJcbiAgICBpZiAobW9udGhOb3cgPj0gbW9udGhEb2IpXHJcbiAgICAgIHZhciBtb250aEFnZSA9IG1vbnRoTm93IC0gbW9udGhEb2I7XHJcbiAgICBlbHNlIHtcclxuICAgICAgeWVhckFnZS0tO1xyXG4gICAgICB2YXIgbW9udGhBZ2UgPSAxMiArIG1vbnRoTm93IC1tb250aERvYjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZU5vdyA+PSBkYXRlRG9iKVxyXG4gICAgICB2YXIgZGF0ZUFnZSA9IGRhdGVOb3cgLSBkYXRlRG9iO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIG1vbnRoQWdlLS07XHJcbiAgICAgIHZhciBkYXRlQWdlID0gMzEgKyBkYXRlTm93IC0gZGF0ZURvYjtcclxuXHJcbiAgICAgIGlmIChtb250aEFnZSA8IDApIHtcclxuICAgICAgICBtb250aEFnZSA9IDExO1xyXG4gICAgICAgIHllYXJBZ2UtLTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFnZSA9IHtcclxuICAgICAgICB5ZWFyczogeWVhckFnZSxcclxuICAgICAgICBtb250aHM6IG1vbnRoQWdlLFxyXG4gICAgICAgIGRheXM6IGRhdGVBZ2VcclxuICAgICAgICB9O1xyXG5cclxuICAgIHJldHVybiBhZ2UueWVhcnM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdmFsaWRhZ2UgPSAoaWluKSA9PiB7XHJcbiAgICBpZihpaW5bNl0lMiAhPSAwKSB7XHJcbiAgICAgICAgaWYoZ2V0QWdlKGlpbik8MjEgfHwgZ2V0QWdlKGlpbik+NjMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoaWluWzZdJTIgPT0gMCkge1xyXG4gICAgICAgIGlmKGdldEFnZShpaW4pPDIxIHx8IGdldEFnZShpaW4pPjU4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=