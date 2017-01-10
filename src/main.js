import './main.styl';

import {getAssets} from './api';

function flattenAssets (assets) {
  return assets
    .map(asset => asset.assets)
    .reduce((all, current) => all.concat(current));
}

function getRandomAsset (assets) {
  return assets[Math.floor(Math.random() * assets.length)];
}

function appendToBody (url) {
  const video = document.createElement('video');
  video.src = url;
  video.controls = false;
  video.classList.add('video');
  document.querySelector('#video-container').appendChild(video);
  video.play();
}

getAssets().then(entries => {
  const assets = flattenAssets(entries);

  const asset = getRandomAsset(assets);

  appendToBody(asset.url);
});
