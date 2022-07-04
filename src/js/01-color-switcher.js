function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let idIntteerval = null;

btnStart.addEventListener('click', () => {
  btnDis();
  console.log(btnStart.disabled);
  idIntteerval = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = `${color}`;
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(idIntteerval);
  btnDis();
});

function btnDis() {
  if (!btnStart.disabled) {
    btnStart.disabled = true;
    btnStop.disabled = false;
  } else {
    btnStart.disabled = false;
    btnStop.disabled = true;
  }
}
