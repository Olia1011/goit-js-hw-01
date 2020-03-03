"use strict"

let price;
let message;
const country = prompt ('Введите страну доставки!');


switch(country.toLowerCase()) {
    case 'Китай':
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'Чили':
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'Австралия': 
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'Индия': 
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case 'Ямайка': 
    price = 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    default:
    message = ('В вашей стране доставка не допустима!');
}
alert(message);