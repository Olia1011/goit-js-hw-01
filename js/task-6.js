'use strict'

let input;
let total = 0;
let message;

do { 
   input = prompt('Введите число');
   if(Number.isNaN(Number(input)) || input === ''){
       message = 'Было введено не число, поробуйте еще раз!';
   } else {
       total += Number(input);
   }
 }  while (input !==null); 
        message = `Общая сумма чисел равна ${total}`;
   



