"use strict"

let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let userPassword = prompt('Add your password');

 if (userPassword===null) {
     message = 'Отменено пользователем!';
  } else if (userPassword===ADMIN_PASSWORD) {
     message =  'Добро пожаловать!';
} else {
     message = 'Доступ запрещен, неверный пароль!';
 }

  alert(message);




