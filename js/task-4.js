"use strict"

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;


let userOrder = prompt('Make your order');

if (userOrder === null) {
    message = 'Отменено пользователем';
} else {
   totalPrice = userOrder * pricePerDroid;
}

if(totalPrice > credits) {
    message = 'Недостаточно средств на счету';
} else {
    let balance = credits - totalPrice;
    message = `Вы купили ${userOrder} дроидов на счету осталось ${balance} кредитов`;
}
alert(message);