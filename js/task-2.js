"use strict"

const total = 100;
const ordered = 50;
let message;
let userOrder = prompt('Make your offer');

if (userOrder > total) {
   alert (message = 'На складе недостаточно товара');
} else {
   alert(message = 'Заказ оформлен с вами свяжеться менеджер');
}

