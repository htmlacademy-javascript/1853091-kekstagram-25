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

const ALL_PHOTO_COUNT = 25;

// Функция загрузки фотографии

const uploadedPhoto = () => {

  // Генерируем ID от 1 до 25 (используем цикл, потому-что ID не должен повторяться)

  let randomId = () => {
    for (let i = 1; i <= 25; i++) {
      randomId = i;
    }
  };

  // Генерируем URL

  let randomUrl = () => {
    for (let i = 1; i <= 25; i++) {
      randomUrl = `photos/${i}.jpg`;
    }
  };

  // Получаем случайное описание из массива описаний

  const randomDescription = getRandomNumbIncluded(0, DESCRIPTIONS.length - 1);

  // Генерируем случайное число лайков от 15 до 200

  const randomLikes = getRandomNumbIncluded(15, 200);

  // Получаем ID комментария

  const commentId = getRandomNumbIncluded(0, 25);

  // Получаем номер аватарки от 1 до 6

  let randomAvatar = () => {
    for (let i = 1; i <= 6; i++) {
      randomAvatar = `img/avatar-${i}.svg`;
    }
  };

  // Получаем случайный комментарий из массива комментариев

  const randomMessage = getRandomNumbIncluded(0, COMMENTS.length - 1);

  // Получаем случайное имя из массива имен

  const randomNameIndex = getRandomNumbIncluded(0, NAMES.length - 1);

  // Создание объекта загруженной фотографии

  return {
    id: randomId,
    url: randomUrl,
    description: DESCRIPTIONS[randomDescription],
    likes: randomLikes,
    comments: [
      {
        id: commentId,
        avatar: randomAvatar,
        message: COMMENTS[randomMessage],
        name: NAMES[randomNameIndex]
      }
    ]
  };
};

// Создание массива из 25 фотографий

const allPhotos = Array.from({length: ALL_PHOTO_COUNT}, uploadedPhoto);

allPhotos();
