'use strict';

const BASIC_WHITE = '#ffffff';
const BASIC_BLACK = '#000000';
const SHADOW_COLOR = '#00000070';
const ACCENT_COLOR = 'rgba(255, 0, 0, 1)';
const FONT_HEIGHT = 20;
const TIME_GAP = 10;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CLOUD_SHADOW_GAP = 10;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_PADDING_TOP = 25;
const CLOUD_PADDING_BOTTOM = 10;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const GAP = 50;
let barColor = '#000000';

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = (array) => {
  let maxElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

const renderHeaderText = (ctx, fontSize, fontFamily, textColor, firstLine, secondLine) => {
  ctx.fillStyle = textColor;
  ctx.font = fontSize + ' ' + fontFamily;
  ctx.fillText(firstLine, CLOUD_X + GAP, CLOUD_Y + CLOUD_PADDING_TOP);
  ctx.fillText(secondLine, CLOUD_X + GAP, CLOUD_Y + CLOUD_PADDING_TOP + FONT_HEIGHT);
};

const getBarColor = (name) => {
  if (name === 'Вы') {
    return ACCENT_COLOR;
  } else {
    return 'hsl(240, ' + getRandomSaturation() + '%, 50%)';
  }
};

const getRandomSaturation = () => {
  return Math.ceil(Math.random() * (100 - 1) + 1);
};

const renderChart = (ctx, names, times) => {

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    ctx.fillStyle = BASIC_BLACK;
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - (TIME_GAP + (BAR_HEIGHT * times[i] / maxTime) + FONT_HEIGHT + CLOUD_PADDING_BOTTOM));
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - CLOUD_PADDING_BOTTOM);

    barColor = getBarColor(names[i]);
    ctx.fillStyle = barColor;
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - (FONT_HEIGHT + CLOUD_PADDING_BOTTOM), BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));
  }
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, BASIC_WHITE);
  renderHeaderText(ctx, '16px', 'PT Mono', BASIC_BLACK, 'Ура вы победили!', 'Список результатов:');
  renderChart(ctx, names, times);
};
