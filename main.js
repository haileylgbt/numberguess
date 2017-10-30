var hasNotWon = true;

function popup(text) {
  alert(text);
}

function introduction() {
  popup("Harry: Hey H4RR.Y")
  popup(`H4RR.Y: YES, HARRY?`)
  popup(`Harry: Wanna play a guessing game?`)
  popup(`H4RR.Y: I DO NOT HAVE THE GUESSING MODULE INSTALLED, SO I'M AFRAID NOT.`)
  popup(`Harry: But you do have that new machine learning module, right?`)
  popup(`H4RR.Y: AFFIRMITIVE.`)
  popup(`Harry: Well, that's all you need to play!`)
  popup(`H4RR.Y: OK, BRING IT ON!`)
  popup(`Harry: That's the spirit!`)
  popup(`Harry: So, I'm going to pick a number-`)
  popup(`H4ARR.Y: BETWEEN 2 NUMBERS AND I HAVE TO GUESS IT?`)
  popup(`Harry: Yep, that's all there is to it!`)
  popup(`H4RR.Y: OK, LET'S DO THIS!`)
  popup(`Click on one of the game buttons below to start!`)
}

function oneGame() {
  hasNotWon = true;
  setNumber(rand(1, 10));
  popup(`Harry: I'm thinking of a number between 1 and 10.`)
  while (hasNotWon) {
    attemptToRemember()
    guess()
    popup(`H4RR.Y: ${answer}?`)
    if (checkAnswer()) {
      popup(`Harry: You're right! I was thinking of ${answer}!`)
      learn(rand(1, 2))
      hasNotWon = false;
    } else {
      popup(`Harry: Nope.`)
    }
  }
}
