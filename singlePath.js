const BORDER_LENGTH = 30;
const ROW_LENGTH = 10;

function random(number) {
  return Math.floor(Math.random() * number);
}

function wait(multiplier) {
  for (let iterate = 0; iterate < multiplier * 100000; iterate++) { }
}

function isSafePath(safePath, target) {
  for (let index = 0; index < safePath.length; index += 2) {
    if (target === +(safePath[index] + safePath[index + 1])) {
      return true;
    }
  }

  return false;
}

function makeRow(symbol, userInput) {
  let field = '';
  let noOfRows = 9;
  const row = Math.floor(userInput / 10);
  const column = userInput % 10;

  while (noOfRows >= 0) {
    field += symbol + ' ';
    for (let index = 0; index < ROW_LENGTH; index++) {
      if (index === row && noOfRows === column) {
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

function newPositon(lastPosition, direction) {
  switch (direction) {
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

function drawResultField(symbol, path) {
  let field = '';

  for (let index = 99; index >= 0; index--) {
    if (index % 10 === 0) {
      field += symbol + '\n';
    }

    if (isSafePath(path, index)) {
      field += '🟢 ';
      continue;
    }

    field += '⚪ ';
  }

  return field;
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

// const field = makeRow('┃');
// console.log(field)

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
  const userInput = prompt('Start From Position : ');
  const updatedRow = makeRow('┃', +userInput);
  // drawField(updatedRow, true);

  const path = safePath();

  console.log(path)

  console.log(drawResultField('┃', path));
}

main();
