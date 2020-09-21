'use strict';

const BASIC_WHITE = '#ffffff';
const BASIC_BLACK = '#000000';
const SHADOW_COLOR = '#00000070';
const ACCENT_COLOR = '#ff0000';
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

window.renderStatistics = (ctx, players, times) => {

  renderCloud(ctx, CLOUD_X + CLOUD_SHADOW_GAP, CLOUD_Y + CLOUD_SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, BASIC_WHITE);

  ctx.fillStyle = BASIC_BLACK;
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + CLOUD_PADDING_TOP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + CLOUD_PADDING_TOP + FONT_HEIGHT);

  let maxTime = getMaxElement(times);


  for (let i = 0; i < players.length; i++) {
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - (TIME_GAP + (BAR_HEIGHT * times[i] / maxTime) + FONT_HEIGHT + CLOUD_PADDING_BOTTOM));
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - CLOUD_PADDING_BOTTOM);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_HEIGHT - (FONT_HEIGHT + CLOUD_PADDING_BOTTOM), BAR_WIDTH, -(BAR_HEIGHT * times[i] / maxTime));
  }
};
