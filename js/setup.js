'use strict';
//  Входные данные

const FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

//  Рандомайзер

const getRandom = (items) => {
  const item = items[Math.floor(Math.random() * items.length)];
  return item;
};

//  Генерация вида волшебников

const similarWizard = (firstNames, secondNames, coatColors, eyesColors) => {
  let wizard = {
    name: getRandom(firstNames) + ' ' + getRandom(secondNames),
    coatColor: getRandom(coatColors),
    eyesColor: getRandom(eyesColors)
  };
  return wizard;
};

for (var i = 0; i < 4; i++) {
  similarWizard(FIRST_NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS);
}
