const spinTrigger = document.querySelector('.game__spin-btn'),
      spinWheel = document.querySelector('.game__spin-list'),
      betValue = document.querySelector('.game__bet-value'),
      incrBtn = document.querySelector('.game__bet-btn--incr'),
      decrBtn = document.querySelector('.game__bet-btn--decr');
      let changeValue = 10

function increaseBetValue () {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseBetValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

decrBtn.addEventListener('click', decreaseBetValue)
incrBtn.addEventListener('click', increaseBetValue);

let randomValue = Math.ceil(Math.random() * 3600);

 function gameHandler () {
    spinWheel.style.transform = `rotate(${randomValue}deg)`;

    randomValue += Math.ceil(Math.random() * 3600);
 }

spinTrigger.addEventListener('click', gameHandler);

document.querySelectorAll('.game__bet-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    let value = document.getElementById('number').value;

    document.querySelector('.game__value-balance').innerHTML = value;
  })
})
