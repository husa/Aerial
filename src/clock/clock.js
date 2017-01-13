import './clock.styl';


class Clock {
  init () {
    this.el = document.querySelector('#clock');
    this.interval = setInterval(this.update.bind(this), 1000);
    this.update();
  }

  update () {
    const time = this.getTime();
    if (this.el.innerText === time) return;
    this.el.innerText = time;
  }

  getTime () {
    const time = new Date();
    return `${time.getHours()}:${prependZero(time.getMinutes())}`;
  }
}

function prependZero (number) {
  return number < 10 ? `0${number}` : number;
}

export default Clock;
