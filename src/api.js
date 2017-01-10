const AERIAL_URL = 'http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/entries.json';

export function getAssets () {
  return fetch(AERIAL_URL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/plain'
    }
  }).then(response => response.text()).then(JSON.parse);
}
