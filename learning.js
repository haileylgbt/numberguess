var numberThoughtOf = 0;
var answer = 0;
var rememberRangeChance = 99;
var numberLow = 0;
var numberHigh = 0;
var remembersRange = false;

function rand(r1, r2) {
  return Math.floor(Math.random() * r2) + r1;
}

function setNumber(n) {
  numberThoughtOf = n;
  numberLow = n - rand(5, 10);
  numberHigh = n + rand(5, 10);
}

function stupidGuess() {
  answer = rand(1, 100);
}

function attemptToRemember() {
  var remember = rand(1, (100 - rememberRangeChance));
  if (remember === 1) {
    remembersRange = true;
  } else {
    remembersRange = false;
  }
}

function guess() {
  if (remembersRange) {
    answer = rand(numberLow, numberHigh);
  } else if (!remembersRange) {
    stupidGuess();
  }
}

function learn(n) {
  rememberRangeChance += n;
}

function checkAnswer() {
  if (answer === numberThoughtOf) {
    return true;
  } else {
    return false;
  }
}
