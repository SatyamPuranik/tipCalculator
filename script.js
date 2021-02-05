const form = document.querySelector('.form');
const billAmt = document.querySelector('#billamt');
const service = document.querySelector('#service');
const people = document.querySelector('#people');
const outputDiv = document.querySelector('.output');
const tip = document.querySelector('.tip');
const each = document.querySelector('.each');

const calculate = (e) => {
  e.preventDefault();

  if (
    billAmt.value <= 0 ||
    billAmt.value === '' ||
    people.value <= 0 ||
    people.value === ''
  ) {
    alert('Fill every input properly');
  } else {
    let amount = (billAmt.value * service.value) / 100;
    amount = Math.ceil(amount);
    amount = amount / people.value;
    amount = amount.toFixed(2);

    outputDiv.classList.add('show');

    tip.innerHTML = `<strong>${amount}</strong>`;

    if (people.value === 1) {
      each.style.display = 'none';
    } else {
      each.style.display = 'inline-block';
    }
  }
};

const inputChange = () => {
  outputDiv.className = 'output';
  tip.innerHTML = '';
  each.style.display = 'none';
};

form.addEventListener('submit', calculate);
billAmt.addEventListener('keypress', inputChange);
people.addEventListener('keypress', inputChange);
service.addEventListener('change', inputChange);
