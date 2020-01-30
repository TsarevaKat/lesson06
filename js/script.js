'use strict';

const isNumber = function (n) {
  return !isNaN(+(n)) && isFinite(n);
};

function bot() {
  const num = Math.floor(1 - 0.5 + Math.random() * 100);
  // console.log('num: ', num);

  let index = 10;
  function botGame() {
    if (index > 0) {
      const numUser = prompt('Угадай чисто от 1 до 100');
      if (numUser === null) {
        alert('Пока :(');
        return 0;
      }
      if (!isNumber(numUser)) {
        alert('Это не число! Введи число!');
        botGame();
      } else if (numUser > num) {
        index--;
        alert(`Загаданное число меньше, осталось попыток ${index}`);
        botGame();
      } else if (numUser < num) {
        index--;
        alert(`Загаданное число больше, осталось попыток ${index}`);
        botGame();
      } else if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
          bot();
        } else {
          alert('Пока :(');
          return 0;
        }

    } else if (confirm('Попытки закончились, хотите сыграть еще?')) {
      bot();
    } else {
      alert('Пока :(');
      return 0;
    }
  }
  botGame();
}

bot();
