import './player.styl';

import assets from '../assets';

class Player {

  init () {
    this.el = this.createVideoElement();
    this.playNextVideo();
  }

  createVideoElement () {
    const video = document.createElement('video');
    video.controls = false;
    video.autoplay = true;
    video.classList.add('video');
    document.querySelector('#video-container').appendChild(video);
    return video;
  }

  playNextVideo () {
    const video = assets.getRandom(this.getTimeofDay());
    this.el.src = video.url;
    this.el.play();

    const events = [
      'abort',
      'canplay',
      'canplaythrough',
      'durationchange',
      'loadeddata',
      'loadedmetadata',
      'loadstart',
      'pause',
      'play',
      'playing',
      'progress',
      'ratechange',
      'seeked',
      'seeking',
      'stalled',
      'suspend',
      'timeupdate',
      'volumechange',
      'waiting'
    ];

    const el = this.el;

    events.forEach((e) => {
      (function (e) {
        el.addEventListener(e, () => {console.log(e)});
      }(e));
    });
  }

  getTimeofDay () {
    const time = new Date();
    const hours = time.getHours();
    return hours > 8 && hours < 20 ? 'day' : 'night';
  }

  removeLoadingIndicator () {

  }
}

export default Player;
