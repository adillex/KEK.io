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
  }, 22500);
  setTimeout(() => {
    text.textContent = "created by adi11ex";
  }, 20000);
    setTimeout(() => {
    text.textContent = "какой кринж, хорошо что я пьян";
  }, 17500);
    setTimeout(() => {
    text.textContent = "с 14 февраля";
  }, 15000);
  setTimeout(() => {
    text.textContent = "и из всех кого я хотел бы знать";
  }, 12000);
  setTimeout(() => {
    text.textContent = "из всех кого я знаю";
  }, 10500);
  setTimeout(() => {
    text.textContent = "заботливая";
  }, 9000);
  setTimeout(() => {
    text.textContent = "обоятельная";
  }, 7500);
  setTimeout(() => {
    text.textContent = "угарная";
  }, 6000);
  setTimeout(() => {
    text.textContent = "приятная";
  }, 4500);
  setTimeout(() => {
    text.textContent = "милая";
  }, 3000);
  setTimeout(() => {
    text.textContent = "ты самая";
  }, 1500);
  setTimeout(() => {
    text.textContent = "В этот прекраснный день хочу сказать";
  }, 0);
  
}

changeText();

text.classList.add('show');
