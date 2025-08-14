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
    text.textContent = "♥♥♥♥♥ ♥♥♥♥♥ ♥♥♥♥♥ ♥♥♥♥♥ ♥♥♥♥♥";
  }, 17500);
    setTimeout(() => {
    text.textContent = "Люблю тебя";
  }, 15000);
  setTimeout(() => {
    text.textContent = "как хорошое вино, с каждым годом все вкуснее";
  }, 12000);
  setTimeout(() => {
    text.textContent = "с днем рождения солнышко";
  }, 10500);
  setTimeout(() => {
    text.textContent = "озорять наш мир своим светом";
  }, 9000);
  setTimeout(() => {
    text.textContent = "чтобы ты продолжала радовать нас";
  }, 7500);
  setTimeout(() => {
    text.textContent = "чтобы мое солнышко всегда было здоровой";
  }, 6000);
  setTimeout(() => {
    text.textContent = "чтобы ты оставалась такой же красивой";
  }, 4500);
  setTimeout(() => {
    text.textContent = "спокойствия - чтобы вогрук тебя была мягкая тишина";
  }, 3000);
  setTimeout(() => {
    text.textContent = "счастья - ведь ты этого достойна";
  }, 1500);
  setTimeout(() => {
    text.textContent = "тоня, в этот прекраснный день хочу пожелать";
  }, 0);
  
}

changeText();

text.classList.add('show');

