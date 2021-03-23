let credits = 23580;
const pricePerDroid = 3000;
const input = prompt('Сколько дроидов вы хотели бы купить?');
let totalPrice;

if (input === null) {
  console.log('Отменено пользователем');
} else {
  totalPrice = Number(input) * pricePerDroid;
  console.log(totalPrice);
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${input} дроидов, на счету осталось ${credits} кредитов`,
    );
  }
}
