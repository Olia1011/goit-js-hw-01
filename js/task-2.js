"use strict"

const total = 100;
const ordered = 50;
let message;
const userOrder = prompt('Make your offer');

if (userOrder > total) {
   message = 'На складе недостаточно товара';
} else {
   message = 'Заказ оформлен с вами свяжеться менеджер';
}
alert(message);

