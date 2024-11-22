const BORDER_LENGTH = 30;
const ROW_LENGTH = 10;

function random(number) {
  return Math.floor(Math.random() * number);
}

function wait(multiplier) {
  for (let iterate = 0; iterate < multiplier * 100000; iterate++) {}
}

function newPositon(lastPosition, direction) {
  switch(direction) {
    case 0:
      return lastPosition + 10;
      
    case 1:
      return lastPosition - 1;
      
    case 2:
      return lastPosition - 10;
      
    case 3:
      return lastPosition + 1;

  }
}

function drawResultField(field) {
  const path = safePath();
  let updatedField = '';

  
}

function safePath() {
  let row = 9;
  let path = '' + (random(9) + 10 * row);
  let direction = 2;
  let lastPosition = path;

  while (+lastPosition > 9) {
    direction = (direction + random(3) + 3) % 4;
    if ((direction === 1 && lastPosition[1] === '0') || (direction === 3 && lastPosition[1] === '9') || (direction === 0 && lastPosition[0] === '9')) {
      direction = 2;
    }
    path += newPositon(+lastPosition, direction);
    lastPosition = path[path.length - 2] + path[path.length - 1];
    row = +lastPosition[0];
  }

  if (path.length > 50) {
    return safePath();
  }

  return path + ' ';
}

const field = makeRow('┃');
console.log(field)
drawResultField(field);

function makePlayer(playerGaveInput) {
  let string = ''

  for (let index = 0; index < ROW_LENGTH + 5; index++) {
    string += ' ';
  }

  return playerGaveInput ? string : string + '🙍‍♂️';
}

function makeBorderTopAndBelow() {
  let border = '🔳';

  for (let index = 1; index < BORDER_LENGTH; index++) {
    border += '━'
  }

  return border + ' 🔳';
}

function makeRow(symbol, userInput) {
  let field = '';
  let noOfRows = 10;

  while (noOfRows > 0) {
    field += symbol + ' ';
    for (let index = 0; index < ROW_LENGTH; index++) {
      if (index === userInput && noOfRows === 1) {
        field += '🙍‍♂️ ';
        continue;
      }

      field += '⚪ ';
    }

    noOfRows--;
    field += symbol + '\n';
  }

  return field;
}

function drawField(field, playerGaveInput) {
  console.clear();
  console.log(makeBorderTopAndBelow());
  console.log(field);
  console.log(makeBorderTopAndBelow());
  console.log(makePlayer(playerGaveInput));
  console.log(makeBorderTopAndBelow());
}

function main() {
  const field = makeRow('┃');
  drawField(field, false);
  const userInput = prompt('Move the player: ');
  const updatedRow = makeRow('┃', +userInput);
  drawField(updatedRow, true);
}

// main();
