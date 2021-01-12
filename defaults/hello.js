export const helloUser = () =>  {
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12)
      greet = 'Доброе утро';
  else if (hrs >= 12 && hrs <= 17)
      greet = 'Добрый день';
  else if (hrs >= 17 && hrs <= 24)
      greet = 'Добрый вечер';
  return greet
}
