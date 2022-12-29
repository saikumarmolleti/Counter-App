let countEl = document.getElementById('count-el');
let totalEl = document.getElementById('total-el');
let errorEl = document.getElementById('error-el');
let warningEl = document.getElementById('warning-el');
let totalCountEl = document.getElementById('totalCount-el');

let count = 0;

function increment() {
  count = count + 1;
  countEl.innerHTML = count;
  errorEl.innerHTML = '';
  warningEl.innerHTML = '';
  console.log('Button was clicked incremented');
}

function decrement() {
  if (count > 0) {
    count = count - 1;
    countEl.innerHTML = count;
  } else {
    errorEl.innerHTML = 'Count should me More than zero Only';
  }
  warningEl.innerHTML = '';

  console.log('Button was clicked decremented');
}

function save() {
  if (count > 0) {
    let countStr = count + ' - ';
    totalEl.textContent += countStr;
    count = 0;
    countEl.innerHTML = count;
    errorEl.innerHTML = '';
  } else {
    warningEl.innerHTML =
      'Pleace Click on the increment Button "0" is not valid';
  }
}

function reset() {
  countEl.innerHTML = 0;
  totalEl.innerHTML = 'Previous Count :';
  errorEl.innerHTML = '';
  warningEl.innerHTML = '';
  console.log('all reset finished');
}
reset();
