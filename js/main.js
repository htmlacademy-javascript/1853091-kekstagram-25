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

checkStringLength();

const NAMES = [
  'Николай',
  'Владимир',
  'Ангела',
  'Отто',
  'Жаклин',
  'Хуан',
  'Зоран',
  'Аманда'
];

const DESCRIPTIONS = [
  'А с чего начинается ваше утро?',
  'Наконец-то оборудовал свой велосипед электромотором. Кто со мной на пробный заезд?',
  'Весна, ты где?',
  'Пффффф, подержи мое пиво!',
  'Не передать словами насколько я люблю баню!',
  'И всё-таки у нас мальчик! :D',
  'Марафон пробежал, теперь пора завтракать и на работу!'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

//Создаем объект фотографии

const createPhoto = (id) => {

  //Выбираем случайное описание фотографии из массива описаний
  const randomDescription = getRandomNumbIncluded(0, DESCRIPTIONS.length - 1);

  //Устанавливаем случайное число лайков в диапазоне от 15 до 200
  const randomLikes = getRandomNumbIncluded(15, 200);

  //Возвращаем объект фотографии
  return {
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: randomLikes,
    comments: []
  };
};

//Создаем массив из 25 фотографий, записываем в него объекты с помощью колбек функции createPhoto
const createPhotos = () => {
  const photos = [];
  for (let i = 1; i < 25; i++) {
    return photos.push(createPhoto(i));
  }
};

//Создаем комментарий
const createComment = (id) => {

  //Создаем URL аватарки
  const randomAvatar = getRandomNumbIncluded(0, 6);

  //Выбираем случайное имя из массива имен
  const randomName = getRandomNumbIncluded(0, NAMES.length - 1);

  //Выбираем случайное сообщение из массива комментариев
  const randomMessage = getRandomNumbIncluded(0, COMMENTS.length - 1);

  return {
    id,
    avatar: `img/avatar-${randomAvatar}.svg`,
    message: COMMENTS[randomMessage],
    name: NAMES[randomName]
  };
};

//Создаем массив из 3 комментариев

const createComments = () => {
  const comments = [];
  for (let i = 1; i < 3; i++) {
    return comments.push(createComment(i));
  }
};

createPhoto(createPhotos());
createComment(createComments());
