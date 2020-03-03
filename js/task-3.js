"use strict"

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userPassword = prompt('Add your password');

 if (userPassword===null) {
    alert(message = 'Отменено пользователем!');
  } else if (userPassword===ADMIN_PASSWORD) {
       alert(message = 'Добро пожаловать!');
} else {
      alert(message = 'Доступ запрещен, неверный пароль!');
 }

  alert(message);


//  const quantityStudents = 15;
//  confirm('начать случайный выбор студентов');
//   const isOk = confirm('начать случайный выбор');
// let randomNumber =  Math.random() * quantityStudents;

//  if (isOk) {
//     console.log(Math.ceil(randomNumber));
//  }else {
//     alert('Отменено пользователем');
//  }
// alert(`выбран студент ${randomNumber}`);


