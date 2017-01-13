import {fetchAssets} from './api';

class Assets {

  constructor () {
    this.assets = [];
  }

  fetch () {
    return fetchAssets().then(this.flatten.bind(this)).then(this.cache.bind(this));
  }

  flatten (assets) {
    return assets
      .map(asset => asset.assets)
      .reduce((all, current) => all.concat(current));
  }

  cache (assets) {
    this.assets = assets;
    return assets;
  }

  getRandom (timeOfDay) {
    const assets = this.assets.filter(a => a.timeOfDay === timeOfDay);
    return assets[Math.floor(Math.random() * assets.length)];
  }
}

const assets = new Assets();

export default assets;
