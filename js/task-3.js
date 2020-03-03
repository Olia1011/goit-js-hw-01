"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
let userPassword = prompt('Add your password');

 if (userPassword===null) {
    alert('Отменено пользователем!');
  } else if (userPassword===ADMIN_PASSWORD) {
       alert('Добро пожаловать!');
} else {
      alert('Доступ запрещен, неверный пароль!');
 }

  alert(message);




