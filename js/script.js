'use strict';

const isNumber = function (n) {
  return !isNaN(+(n)) && isFinite(n);
};

function bot() {
  const num = 77;
  function botGame() {
    const numUser = prompt('Угадай чисто от 1 до 100');
    if (numUser === null) {
      return 0;
    }
    console.log('numUser: ', numUser);

    // numUser += numUser;
    if (!isNumber(numUser)) {
      alert('Это не число! Введи число!');
      botGame();
    } else
    if (numUser > num) {
      alert('Загаданное число меньше');
      botGame();
    } else
    if (numUser < num) {
      alert('Загаданное число больше');
      botGame();
    }
  }
  botGame();
}

bot();
