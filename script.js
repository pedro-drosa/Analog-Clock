let digitalEl = document.querySelector('.digital');

let sEl = document.querySelector('.p_s');
let mEl = document.querySelector('.p_m');
let hEl = document.querySelector('.p_h');


function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalEl.innerHTML = `${fixZero(hour)} : ${fixZero(minute)} : ${fixZero(second)}`;
}

function fixZero(number) {
  return number < 10 ? `0${number}` : number;
}

setInterval(updateClock, 1000);