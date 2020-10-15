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
const FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
const WIZARDS_QUANTITY = 4;

const wizardsListElement = document.querySelector('.setup-similar-list');
const userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

//  Рандомайзер

const getRandomItemFromArray = (items) => {
  const item = items[Math.floor(Math.random() * items.length)];
  return item;
};

//  Генерация волшебников

const generateWizards = (firstNames, secondNames, coatColors, eyesColors) => {
  let wizardsList = [];
  for (let i = 0; i < WIZARDS_QUANTITY; i++) {
    let wizard = {
      name: getRandomItemFromArray(firstNames) + ' ' + getRandomItemFromArray(secondNames),
      coatColor: getRandomItemFromArray(coatColors),
      eyesColor: getRandomItemFromArray(eyesColors)
    };
    wizardsList.push(wizard);
  }
  return wizardsList;
};

const wizards = generateWizards(FIRST_NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS);

// Создание копий волшебников с определенными ранее свойствами

const wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

const createWizardElement = (wizard) => {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

//  Добавление копий волшебников в documentFragment

const createWizardsFragment = (generatedWizards) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < generatedWizards.length; i++) {
    fragment.appendChild(createWizardElement(generatedWizards[i]));
  }
  return fragment;
};

//  Отрисовка documentFragment в окне браузера
wizardsListElement.appendChild(createWizardsFragment(wizards));

document.querySelector('.setup-similar').classList.remove('hidden');

// Находим элементы для открытия и закрытия попапа

const setupOpenButton = document.querySelector('.setup-open');
const setupCloseButton = document.querySelector('.setup-close');
const setupOpenIcon = document.querySelector(`.setup-open-icon`);
const setupUserName = document.querySelector('.setup-user-name');

// Функция показа попапа

const openPopup = () => {
  userDialog.classList.remove('hidden');

  setupCloseButton.addEventListener('click', function () {
    closePopup();
  });
  document.addEventListener('keydown', onPopupEscapePress);
  setupCloseButton.addEventListener('keydown', onCloseButtonEnterPress);
  setupWizardCoat.addEventListener('click', function () {
    setUpPlayerAppearance(setupWizardCoat, setupWizardCoatInput, COAT_COLORS);
  });
  setupWizardEyes.addEventListener('click', function () {
    setUpPlayerAppearance(setupWizardEyes, setupWizardEyesInput, EYES_COLORS);
  });
  setupFireball.addEventListener('click', function () {
    setUpFireballAppearance(setupFireball, setupFireballInput, FIREBALL_COLORS);
  });
};

// Функция скрытия попапа

const closePopup = () => {
  userDialog.classList.add('hidden');

  setupCloseButton.removeEventListener('click', function () {
    closePopup();
  });
  document.removeEventListener('keydown', onPopupEscapePress);
  setupCloseButton.removeEventListener('keydown', onCloseButtonEnterPress);
  setupWizardCoat.removeEventListener('click', function () {
    setUpPlayerAppearance(setupWizardCoat, setupWizardCoatInput, COAT_COLORS);
  });
  setupWizardEyes.removeEventListener('click', function () {
    setUpPlayerAppearance(setupWizardEyes, setupWizardEyesInput, EYES_COLORS);
  });
  setupFireball.removeEventListener('click', function () {
    setUpFireballAppearance(setupFireball, setupFireballInput, FIREBALL_COLORS);
  });
};

// Вспомогательные функции для обработчиков (Альтернативный ввод)

const onSetupIconEnterPress = (evt) => {
  if (evt.key === 'Enter') {
    openPopup();
  }
};

const onPopupEscapePress = (evt) => {
  if (evt.target !== setupUserName && evt.key === 'Escape') {
    closePopup();
  }
};

const onCloseButtonEnterPress = (evt) => {
  if (evt.key === 'Enter') {
    closePopup();
  }
};

// Обработчики, необходимые для показа попапа при первичной загрузке страницы

setupOpenButton.addEventListener('click', function () {
  openPopup();
});

setupOpenIcon.addEventListener('keydown', onSetupIconEnterPress);

// Находим элементы персонажа

const setupPlayer = document.querySelector('.setup-player');
const setupWizardCoat = setupPlayer.querySelector('.wizard-coat');
const setupWizardEyes = setupPlayer.querySelector('.wizard-eyes');
const setupFireball = setupPlayer.querySelector('.setup-fireball-wrap');
const setupWizardCoatInput = setupPlayer.querySelector('input[name="coat-color"]');
const setupWizardEyesInput = setupPlayer.querySelector('input[name="eyes-color"]');
const setupFireballInput = setupPlayer.querySelector('input[name="fireball-color"]');

// Вспомогательные функции по заданию внешнего вида игрока

const setUpPlayerAppearance = (element, input, colors) => {
  const generatedColor = getRandomItemFromArray(colors);
  element.style.fill = generatedColor;
  input.value = generatedColor;
};

const setUpFireballAppearance = (element, input, colors) => {
  const generatedColor = getRandomItemFromArray(colors);
  element.style.backgroundColor = generatedColor;
  input.value = generatedColor;
};
