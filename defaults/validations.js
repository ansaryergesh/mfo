export const requiredd = (val) => {
    let error;
    if(!val) {
      error = 'Поле обязательно для заполнения'
    }
    return error;
}

export const required = (val) => val && val.length;
export const iin = (val) =>  {
	if(val && val.length!==12) return false;
	if(!val) return false;
	var b1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
	var b2 = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2 ];
	var a = [];
	var controll = 0;
	for(var i=0; i<12; i++){
		a[i] = parseInt(val.substring(i, i+1));
		if(i<11) controll += a[i]*b1[i];
	}
	controll = controll % 11;
	if(controll==10) {
        controll = 0;
        for(var i=0; i<11; i++)
        controll += a[i]*b2[i];
        controll = controll % 11;
    }
	if(controll!=a[11]) return false;
	return true;
}

export const validEmaill = (val) => {
    let error;
    let emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    if(!val) {
        return false
    }
    if(!emailvalid) {
        return false
    }
}
export const validEmail = (val) => {
    let error;
    let emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
    if(!val) {
        error = 'Поле обязательно для заполнения'
    }
    if(val) {
        if(!emailvalid) {
            error ='Неправильный email'
        }
    }
    return error;
}
export const acceptCirrilic = val => {
    var falsy = /[a-zA-Z0-9_"*/]/i.test(val)
    let error;
    if(!val ) {
        error = 'Поле обязательно для заполнения'
    }
    if(val) {
        if(falsy === true) {
            error = 'Нужно вводить только на кириллице'
        }
    }

    return error;
}
export const acceptCirrilicOnly = val => {
    var falsy = /[a-zA-Z0-9_"*/]/i.test(val)
    let error;
    if(val) {
      if(falsy === true) {
        error = 'Нужно вводить только на кириллице'
      }
    }
    return error;
}

export const checkAlphabet = (val) => /[a-zA-Z0-9_]/i.test(val);
export const passwordCheck = (val)=> {
    let error;
    if(!val) {
        error = 'Поле обязательно для заполнения'
    }
	if(val && val.length < 5)  error = 'Пароль должен быть не меньше 5 символов';
	return error;
}
export const validateConfirmPassword = (pass, value) => {
    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "Password not matched";
      }
    }
    return error;
  };

export const iinValidation = (val) =>  {
    let error;
	if(val && val.length!==12) error = 'Заполните все поля';
	var b1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
	var b2 = [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2 ];
	var a = [];
    var controll = 0;
    if(val) {
        for(var i=0; i<12; i++){
            a[i] = parseInt(val.substring(i, i+1));
            if(i<11) controll += a[i]*b1[i];
        }
        controll = controll % 11;
        if(controll==10) {
            controll = 0;
            for(var i=0; i<11; i++)
            controll += a[i]*b2[i];
            controll = controll % 11;
        }
        if(controll!=a[11]) error = 'Некорректный ИИН';
        return error;
    }
	
}


export const phoneCheck = (val) => {
    var PHONE_OPERATORS = [
        {id: '7700'},
        {id: '7701'},
        {id: '7702'},
        {id: '7705'},
        {id: '7706'},
        {id: '7707'},
        {id: '7708'},
        {id: '7747'},
        {id: '7771'},
        {id: '7775'},
        {id: '7776'},
        {id: '7777'},
        {id: '7778'},
    ];
    var phone = String(val).replace(/[^A-Z0-9]/g, ''),
        code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);
    if (!code || phone.length !== 11) {
        return false
    }

    var phone_number = code[1];
    var phone_operator = PHONE_OPERATORS.filter(function(item) {
        return item.id == phone_number
    });

    if(phone_operator.length >0){
        return true
    }else{
        return false;
    }
}


export const phoneValidation = (val) => {
    let error
    if(phoneCheck(val) === true) {
        error = ''
    }else {
        error = 'Нет соответствующего оператора'
    }
    return error
}

// Luna algo

export const isValidIBANNumber = (input)=> {
    var CODE_LENGTHS = 20;

    var BANKS = [
        {id: '947', name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'},
        {id: '826', name: 'АО "АТФБанк"'},
        {id: '949', name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited) '},
        {id: '913', name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'},
        {id: '722', name: 'АО "KASPI BANK"'},
        {id: '766', name: 'АО "Центральный Депозитарий Ценных Бумаг"'},
        {id: '832', name: 'АО "Ситибанк Казахстан"'},
        {id: '907', name: 'АО "Банк Развития Казахстана"'},
        {id: '700', name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'},
        {id: '948', name: 'АО "Евразийский Банк"'},
        {id: '009', name: 'НАО Государственная корпорация "Правительство для граждан"'},
        {id: '972', name: 'АО "Жилстройсбербанк Казахстана"'},
        {id: '246', name: 'АО "Исламский Банк "Al Hilal"'},
        {id: '601', name: 'АО "Народный Банк Казахстана"'},
        {id: '930', name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'},
        {id: '550', name: 'г.Москва Межгосударственный Банк'},
        {id: '886', name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'},
        {id: '965', name: 'АО "ForteBank"'},
        {id: '856', name: 'АО "Банк ЦентрКредит"'},
        {id: '927', name: 'АО "Казахстанская фондовая биржа"'},
        {id: '821', name: 'АО "Банк "Bank RBK"'},
        {id: '224', name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'},
        {id: '070', name: 'РГУ "Комитет казначейства Министерства финансов РК"'},
        {id: '563', name: 'АО "КАЗПОЧТА"'},
        {id: '551', name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'},
        {id: '885', name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'},
        {id: '774', name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '},
        {id: '553', name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'},
        {id: '147', name: '"Банк-кастодиан АО  "ЕНПФ"'},
        {id: '125', name: 'РГУ Национальный Банк Республики Казахстан'},
        {id: '849', name: 'АО "Нурбанк"'},
        {id: '914', name: 'ДБ АО "Сбербанк"'},
        {id: '435', name: 'АО "Шинхан Банк Казахстан"'},
        {id: '781', name: 'АО "Capital Bank Kazakhstan"'},
        {id: '620', name: 'АО "Tengri Bank"'},
        {id: '998', name: 'АО "First Heartland Jysan Bank"'},
        {id: '432', name: 'ДО АО Банк ВТБ (Казахстан)'},
        {id: '896', name: 'АО "Исламский банк "Заман-Банк"'},
''
    ];
    var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
        code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/), digits;
    if (!code || iban.length !== CODE_LENGTHS) {
        return 'Заполните поле до конца'
        return false
    }
    var bank_code = code[3];

    var bank = BANKS.filter(function(item) {
        return item.id == bank_code
    });


    if(bank.length >0){
        return bank[0].name
    }else{
        return "Некорректный счет";
        return false;
    }




    digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
        return letter.charCodeAt(0) - 55;
    });

    if(this.mod97(digits) === 1){
        return true
    }else{
        return "Неправильно"
    }

}



export const isValidIBANNumber2 = (input)=> {

    var CODE_LENGTHS = 20;

    var BANKS = [
        {id: '947', name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'},
        {id: '826', name: 'АО "АТФБанк"'},
        {id: '949', name: 'АО "Altyn Bank" (ДБ China Citic Bank Corporation Limited) '},
        {id: '913', name: 'АО ДБ "БАНК КИТАЯ В КАЗАХСТАНЕ"'},
        {id: '722', name: 'АО "KASPI BANK"'},
        {id: '766', name: 'АО "Центральный Депозитарий Ценных Бумаг"'},
        {id: '832', name: 'АО "Ситибанк Казахстан"'},
        {id: '907', name: 'АО "Банк Развития Казахстана"'},
        {id: '700', name: 'ЕВРАЗИЙСКИЙ БАНК РАЗВИТИЯ'},
        {id: '948', name: 'АО "Евразийский Банк"'},
        {id: '009', name: 'НАО Государственная корпорация "Правительство для граждан"'},
        {id: '972', name: 'АО "Жилстройсбербанк Казахстана"'},
        {id: '246', name: 'АО "Исламский Банк "Al Hilal"'},
        {id: '601', name: 'АО "Народный Банк Казахстана"'},
        {id: '930', name: 'АО "Торгово-промышленный Банк Китая в г. Алматы"'},
        {id: '550', name: 'г.Москва Межгосударственный Банк'},
        {id: '886', name: 'ДБ АО "Хоум Кредит энд Финанс Банк"'},
        {id: '965', name: 'АО "ForteBank"'},
        {id: '856', name: 'АО "Банк ЦентрКредит"'},
        {id: '927', name: 'АО "Казахстанская фондовая биржа"'},
        {id: '821', name: 'АО "Банк "Bank RBK"'},
        {id: '224', name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'},
        {id: '070', name: 'РГУ "Комитет казначейства Министерства финансов РК"'},
        {id: '563', name: 'АО "КАЗПОЧТА"'},
        {id: '551', name: 'АО "Банк Kassa Nova" (Дочерний банк АО "ForteBank")'},
        {id: '885', name: 'АО "ДБ "КАЗАХСТАН-ЗИРААТ ИНТЕРНЕШНЛ БАНК"'},
        {id: '774', name: 'АО "AsiaCredit Bank (АзияКредит Банк)" '},
        {id: '553', name: 'АО ДБ "Национальный Банк Пакистана" в Казахстане'},
        {id: '147', name: '"Банк-кастодиан АО  "ЕНПФ"'},
        {id: '125', name: 'РГУ Национальный Банк Республики Казахстан'},
        {id: '849', name: 'АО "Нурбанк"'},
        {id: '914', name: 'ДБ АО "Сбербанк"'},
        {id: '435', name: 'АО "Шинхан Банк Казахстан"'},
        {id: '781', name: 'АО "Capital Bank Kazakhstan"'},
        {id: '620', name: 'АО "Tengri Bank"'},
        {id: '998', name: 'АО "First Heartland Jysan Bank"'},
        {id: '432', name: 'ДО АО Банк ВТБ (Казахстан)'},
        {id: '896', name: 'АО "Исламский банк "Заман-Банк"'},
''
    ];
    var iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''),
        code = iban.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/), digits;
    if (!code || iban.length !== CODE_LENGTHS) {
        // return 'Заполните поле до конца'
        return false
    }
    var bank_code = code[3];

    var bank = BANKS.filter(function(item) {
        return item.id == bank_code
    });


    if(bank.length >0){
        return true
    }else{
        return false;
    }




    digits = (code[3] + code[4] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
        return letter.charCodeAt(0) - 55;
    });

    if(this.mod97(digits) === 1){
        return true
    }else{
        return false
    }

}


// Third step

export const givenDateCardId = (val) => {
    var res = String(val).replace(/_/g, "");
    if(res.length !== 10) {
        return false
    }
    const myDate = new Date(val.substring(6,10)+'-'+val.substring(3,5)+'-'+val.substring(0,2));
    if(myDate == 'Invalid Date') {
        return false
    }
	const today = new Date()
	var todayM = today.getMonth() + 1;
	var todayD = today.getDate();
	var todayY = today.getFullYear();
	var myM = myDate.getMonth() + 1;
	var myD = myDate.getDate();
	var myY = myDate.getFullYear();

	if(myY>todayY) {
		return false;
	}
	if(myY < todayY-25) {
		return false;
	}
	if(myY === todayY) {
		if(myM === todayM && myD > todayD) {
			return false
		}
		if(myM > todayM) {
			return false
		}
		return true
	}
	return true
}
export const expDateCardId = (val) => {
    var res = String(val).replace(/_/g, "");
    if(res.length !== 10) {
        return false
    }
    const myDate = new Date(val.substring(6,10)+'-'+val.substring(3,5)+'-'+val.substring(0,2));
    if(myDate == 'Invalid Date') {
        return false
    }
	const today = new Date()
	var todayM = today.getMonth() + 1;
	var todayD = today.getDate();
	var todayY = today.getFullYear();
	var myM = myDate.getMonth() + 1;
	var myD = myDate.getDate();
	var myY = myDate.getFullYear();

	if(myY<todayY) {
		return false;
	}
	return true
}
// export const givenDateCardId = (val) => {
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

export const onlyEnglish =val=> /^[a-zA-Z\s]*$/.test(val);

export const checkStringName = val => {
	if (val && val.replace(/\s+$/, '').split(/\W+/).length === 2) {
		return true;
	 }
	 return false;
}

export const idNumber = (val)=> {
	var res = String(val).replace(/_/g, "");
    if(res.length !== 9) {
        return false
    }else {
        return true
    }
}

export const isExpDateOfCardValid = (input) =>{
	var expDate = String(input).toUpperCase().replace(/[^0-9]/g, '');
	var date = expDate.match(/^(\d{2})(\d{2})$/);

	if(expDate.length === 4){
		if(date[1] > 12 || date[2] < 20){
			return false;
		}else {
			return true
		}

	}else{
		return false
	}
}

export const checkCardValid= (value) => {
	if (/[^0-9-\s]+/.test(value)) return false;

	let nCheck = 0, nDigit = 0, bEven = false;
	value = value.replace(/\D/g, "");

	if(value.length !== 16){
		return false;
	}else{
		for (let n = value.length - 1; n >= 0; n--) {
			let cDigit = value.charAt(n),
				nDigit = parseInt(cDigit, 10);

			if (bEven) {
				if ((nDigit *= 2) > 9) nDigit -= 9;
			}

			nCheck += nDigit;
			bEven = !bEven;
		}
		if((nCheck % 10) !== 0){
			return false;
		}else{
			return true;
		}
	}
}


function year(dateString) {
    if( dateString[0] == 0) {
        return '20'+dateString.substring(0,2);
    }
        return '19'+dateString.substring(0,2);
}
function getAge(dateString) {
    var now = new Date();
    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var dob = new Date(year(dateString),
                       dateString.substring(2,4)-1,
                       dateString.substring(4,6)
                       );

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};

    var yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
      var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow -monthDob;
    }

    if (dateNow >= dateDob)
      var dateAge = dateNow - dateDob;
    else {
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


export const validage = (iin) => {
    if(iin[6]%2 != 0) {
        if(getAge(iin)<21 || getAge(iin)>63) {
            return false
        }
    }
    if(iin[6]%2 == 0) {
        if(getAge(iin)<21 || getAge(iin)>58) {
            return false
        }
    }
    return true;
}
