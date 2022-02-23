//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumbIncluded(min, max) {
  if (max <= min) {
    return console.log('Предел интервала не может быть меньше или равен его началу');
  }
  return Math.floor(Math.random() * (max - min + 1) + min); //Максимум и минимум включаются
}

getRandomNumbIncluded(1, 5);

function checkStringLength(commentInputString, commentInputStringMax = 140) {
  if (commentInputString.length > commentInputStringMax) {
    return console.log('Длина комментария ограничена 140 символами.');
  }
  return console.log('Введите комментарий');
}

checkStringLength('loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremLoremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremLorem',);
