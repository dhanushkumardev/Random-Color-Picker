function randomNumer() {
  return Math.floor(Math.random() * hexLetters.length);
}

const hexLetters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const button = document.querySelector(".btn");
const hero = document.querySelector(".hero-container");
const colorName = document.querySelector(".color-name");

button.addEventListener("click", function () {
  let hexCode = "#";
  //   let randomNumer = randomNumer();
  for (i = 0; i < 6; i++) {
    hexCode += hexLetters[randomNumer()];
  }
  console.log(hexCode);
  hero.style.backgroundColor = hexCode;
  colorName.innerHTML = hexCode;
});

function randomNumer() {
  return Math.floor(Math.random() * hexLetters.length);
}
