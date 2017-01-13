import './main.styl';

import assets from './assets';
import Player from './player/player';
import Clock from './clock/clock';

const player = new Player();
const clock = new Clock();

document.addEventListener('DOMContentLoaded', () => {
  if (!navigator.onLine) {
    document.querySelector('#offline-message').style.display = 'block';
    document.querySelector('#spinner').remove();
    return;
  }
  assets.fetch().then(() => {
    player.init();
    clock.init();
  });
});
