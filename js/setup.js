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
const WIZARDS_QUANTITY = 4;

const wizardsListElement = document.querySelector('.setup-similar-list');
const userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

//  Рандомайзер

const getRandom = (items) => {
  const item = items[Math.floor(Math.random() * items.length)];
  return item;
};

//  Генерация волшебников

const generateWizards = (firstNames, secondNames, coatColors, eyesColors) => {
  let wizardsList = [];
  for (let i = 0; i < WIZARDS_QUANTITY; i++) {
    let wizard = {
      name: getRandom(firstNames) + ' ' + getRandom(secondNames),
      coatColor: getRandom(coatColors),
      eyesColor: getRandom(eyesColors)
    };
    wizardsList.push(wizard);
  }
  return wizardsList;
};

const wizards = generateWizards(FIRST_NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS);

// Создание копий волшебников с определенными ранее свойствами

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const renderWizards = (wizard) => {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

//  Добавление копий волшебников в documentFragment

const fragment = document.createDocumentFragment();
for (let i = 0; i < WIZARDS_QUANTITY; i++) {
  fragment.appendChild(renderWizards(wizards[i]));
}

//  Отрисовка documentFragment в окне браузера
wizardsListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
