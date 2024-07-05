const wordleContainer = document.querySelectorAll(".container__word");
let wordRow = 0;

const correctWord = 'maska';
let word = [];

document.addEventListener('keyup', (e) => {
  enterLetter(e.key);
  checkWord(e.key);
});

function formatInput(length) {
  return wordleContainer[wordRow].children[length - 1]
};
 
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
  formatInput(length).value = letter
};

function checkWord(key) {
  if (key === 'Enter' && word.length === 5) {
    word.forEach((letter, index) => {
      const formatLetter = letter.toLowerCase();
      
      colorBorder(formatLetter, index);
    });
  
    wordRow++;
    word = [];
  };

  return;
};

function colorBorder(letter, index) {
  if (letter === correctWord[index]) {
    console.log(formatInput(index + 1).backgroundColor)
    formatInput(index + 1).style.border = '2px solid #20b2aa'
  } else if (correctWord.includes(letter)) {
    formatInput(index + 1).style.border = '2px solid #fff68f'
  } else {
    formatInput(index + 1).style.border = '2px solid #cc0000'
  };
};

