import './clock.styl';


class Clock {
  init () {
    this.el = document.querySelector('#clock');
    this.timeout = setTimeout(this.update.bind(this), 1000);
    this.update();
  }

  update () {
    this.el.innerText = this.getTime();
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
