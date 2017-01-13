const AERIAL_URL = 'http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/entries.json';

const MAX_CACHE_AGE = 60 * 60 * 1000; // 1 hour

export function fetchAssets () {
  const cache = localStorage.getItem('assetsCache');
  const cacheTimestamp = JSON.parse(localStorage.getItem('assetsCacheTimestamp'));

  if (cache && cacheTimestamp > Date.now() - MAX_CACHE_AGE) return Promise.resolve(JSON.parse(cache));

  return fetch(AERIAL_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
    .then(response => response.text())
    .then(response => {
      localStorage.setItem('assetsCache', response);
      localStorage.setItem('assetsCacheTimestamp', Date.now());
      return response;
    })
    .then(JSON.parse);
}
