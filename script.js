const text = document.getElementById('text');

let stop = false;

function changeText() {
  if (stop) {
    return;
  }
  setTimeout(() => {
    text.textContent = "created by adi11ex";
    text.classList.add('show');
    changeText();
  }, 16500);
  setTimeout(() => {
    text.textContent = "created by adi11ex";
  }, 15000);
  setTimeout(() => {
    text.textContent = "с 14 февраля, за*бал";
  }, 12000);
  setTimeout(() => {
    text.textContent = "которых я знаю";
  }, 10500);
  setTimeout(() => {
    text.textContent = "альтушек";
  }, 9000);
  setTimeout(() => {
    text.textContent = "из всех";
  }, 7500);
  setTimeout(() => {
    text.textContent = "угарная";
  }, 6000);
  setTimeout(() => {
    text.textContent = "нефорская";
  }, 4500);
  setTimeout(() => {
    text.textContent = "милая";
  }, 3000);
  setTimeout(() => {
    text.textContent = "ты самый";
  }, 1500);
  setTimeout(() => {
    text.textContent = "Алуа";
  }, 0);
  
}

changeText();

text.classList.add('show');
