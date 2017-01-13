import './player.styl';

import assets from '../assets';

class Player {

  init () {
    this.el = this.createVideoElement();
    this.location = document.querySelector('#location');
    this.playNextVideo();
  }

  createVideoElement () {
    const video = document.createElement('video');
    video.controls = false;
    video.autoplay = true;
    video.classList.add('video');
    document.querySelector('#video-container').appendChild(video);
    video.addEventListener('playing', () => {
      this.removeSpinner();
    });
    video.addEventListener('pause', () => {
      this.playNextVideo();
    });

    return video;
  }

  playNextVideo () {
    const video = assets.getRandom(this.getTimeofDay());
    this.el.src = video.url;
    this.updateLocation(video);
    this.el.play();


    // const events = [
    //   'abort',
    //   'canplay',
    //   'canplaythrough',
    //   'durationchange',
    //   'loadeddata',
    //   'loadedmetadata',
    //   'loadstart',
    //   'pause',
    //   'play',
    //   'playing',
    //   'progress',
    //   'ratechange',
    //   'seeked',
    //   'seeking',
    //   'stalled',
    //   'suspend',
    //   'timeupdate',
    //   'volumechange',
    //   'waiting'
    // ];

    // const el = this.el;

    // events.forEach((e) => {
    //   (function (e) {
    //     el.addEventListener(e, () => {console.log(e)});
    //   }(e));
    // });
  }

  getTimeofDay () {
    const time = new Date();
    const hours = time.getHours();
    return hours > 8 && hours < 20 ? 'day' : 'night';
  }

  removeSpinner () {
    const spinner = document.querySelector('#spinner');
    if (!spinner) return;
    spinner.remove();
  }

  updateLocation (video) {
    this.location.innerText = video.accessibilityLabel;
  }
}

export default Player;
