const wordleContainer = document.querySelectorAll(".container__word");
let wordRow = 0;

const word = [];

document.addEventListener('keyup', (e) => {
  enterLetter(e.key)
});

function enterLetter(letter) {
  if (letter === 'Backspace' && word.length) {
    word.pop();
    puttingLetter(word.length + 1, '');
  };

  if (word.length < 5 && checkKey(letter)) {
    word.push(letter);
    puttingLetter(word.length, letter);
  };
};

function checkKey(value) {
  if (
    ((value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90)
    || 
    (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122))
    && value.length === 1
  ) {
    return value;
  };
};

function puttingLetter(length, letter = '') {
  wordleContainer[wordRow].children[length - 1].value = letter
}

