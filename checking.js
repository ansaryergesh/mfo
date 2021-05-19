const isValidIBANNumberContinue = (input)=> {
  var CODE_LENGTHS = 20;

  var BANKS = [
      {id: '947', name: 'АО "Дочерний Банк "АЛЬФА-БАНК"'},
      {id: '826', name: 'АО "АТФБанк"'},
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
      {id: '927', name: 'АО "Казахстанская фондовая биржа"'},
      {id: '821', name: 'АО "Банк "Bank RBK"'},
      {id: '224', name: 'РГП "Казахстанский центр межбанковских расчетов НБРК"'},
      {id: '070', name: 'РГУ "Комитет казначейства Министерства финансов РК"'},
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
      return false
  }
  var bank_code = code[3];

  var bank = BANKS.filter(function(item) {
      return item.id == bank_code
  });


  if(bank.length >0){
      return bank[0].name
  }else{
      return false
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

console.log(isValidIBANNumberContinue('KZ129885555555555555'))