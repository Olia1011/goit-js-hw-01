"use strict"

let price;
let message;
const country = prompt ('Введите страну доставки!');


switch(country.toLowerCase()) {
    case 'китай':
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'чили':
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'австралия': 
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'индия': 
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'ямайка': 
    price = 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    default:
    message = ('В вашей стране доставка не допустима!');
}
alert(message);