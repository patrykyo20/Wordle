const wordleContainer = document.querySelector(".container__word");

const word = [];

document.addEventListener('keyup', (e) => {
  if (e.key === 'Backspace') {
    word.pop();
  };

  if (word.length < 5 && checkKey(e.key)) {
    word.push(e.key);
  };

  console.log(word);
});

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

