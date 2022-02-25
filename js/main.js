//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomNumbIncluded = (min, max) => {
  if (max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1) + min); //Максимум и минимум включаются
};

getRandomNumbIncluded(1, 5);

const checkStringLength = (commentInputString, commentInputStringMax = 140) => {
  if (commentInputString.length > commentInputStringMax) {
    return false;
  }
  return true;
};

checkStringLength('loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremLoremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremLorem',);
