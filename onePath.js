const BORDER_LENGTH = 30;
const ROW_LENGTH = 10;
const rowOne = makeRow('┃');
const rowTwo = makeRow('┃');
const rowThree = makeRow('┃');
const rowFour = makeRow('┃');
const rowFive = makeRow('┃');
const rowSix = makeRow('┃');
const rowSeven = makeRow('┃');
const rowEight = makeRow('┃');
const rowNine = makeRow('┃');
const rowZero = makeRow('┃');

function makePlayer() {
  let string = ''

  for (let index = 0; index < ROW_LENGTH + 5; index++) {
    string += ' ';
  }

  return string + '🙍‍♂️';
}

function makeBorderTopAndBelow() {
  let border = '🔳';

  for (let index = 1; index < BORDER_LENGTH; index++) {
    border += '━'
  }

  return border + ' 🔳';
}

function makeRow(symbol) {
  let row = symbol + ' ';

  for (let index = 0; index < ROW_LENGTH; index++) {
    row += '⚪ ';
  }

  return row + symbol;
}

function main() {
  console.log(makeBorderTopAndBelow());
  console.log(rowNine);
  console.log(rowEight);
  console.log(rowSeven);
  console.log(rowSix);
  console.log(rowFive);
  console.log(rowFour);
  console.log(rowThree);
  console.log(rowTwo);
  console.log(rowOne);
  console.log(rowZero);
  console.log(makeBorderTopAndBelow());
  console.log(makePlayer());
  console.log(makeBorderTopAndBelow());
}

main();
