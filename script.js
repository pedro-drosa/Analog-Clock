let digitalEl = document.querySelector('.digital');

let sEl = document.querySelector('.p_s');
let mEl = document.querySelector('.p_m');
let hEl = document.querySelector('.p_h');

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalEl.innerHTML = `${fixZero(hour)} : ${fixZero(minute)} : ${fixZero(
    second
  )}`;

  let sDeg = (360 / 60) * second - 90;
  let mDeg = (360 / 60) * minute - 90;
  let hDeg = (360 / 12) * hour - 90;

  sEl.style.transform = `rotate(${sDeg}deg)`;
  mEl.style.transform = `rotate(${mDeg}deg)`;
  hEl.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(number) {
  return number < 10 ? `0${number}` : number;
}

setInterval(updateClock, 1000);
updateClock();
