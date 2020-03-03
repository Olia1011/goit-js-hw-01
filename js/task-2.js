"use strict"

const total = 100;
const ordered = 50;
const userOrder = prompt('Make your offer');

if (userOrder > total) {
   alert('На складе недостаточно товара');
} else {
   alert('Заказ оформлен с вами свяжеться менеджер');
}

