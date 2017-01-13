import './main.styl';

import assets from './assets';
import Player from './player/player';
import Clock from './clock/clock';

const player = new Player();
const clock = new Clock();

document.addEventListener('DOMContentLoaded', () => {
  assets.fetch().then(() => {
    player.init();
    clock.init();
  });
});
