"use strict"

const credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let balance;


let userOrder = prompt('Make your order');

if (userOrder === null) {
    alert('Отменено пользователем');
} else {
   totalPrice = userOrder * pricePerDroid;
}

if(totalPrice > credits) {
    alert('Недостаточно средств на счету');
} else {
    balance = credits - totalPrice;
    alert(`Вы купили ${userOrder} дроидов на счету осталось ${balance} кредитов`);
}