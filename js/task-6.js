'use strict'

let input;
let total = 0;

do { 
   input = prompt('Введите число');
   if(Number.isNaN(Number(input)) || input === ''){
       alert('Было введено не число, поробуйте еще раз!');
   } else {
       total += Number(input);
   }
 }  while (input !==null); 
       alert(`Общая сумма чисел равна ${total}`);
   



