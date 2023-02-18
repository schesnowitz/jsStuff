let player = {
  name: "Steve",
  chips: 100,
};
let playerEl = document.getElementById("player-el");

let cards = [];
let hasBJ = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let total = 0;
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  total = firstCard + secondCard;
  renderGame();
}

playerEl.textContent = `Player name: ${player.name}  Chip count: ${player.chips}`;

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + total;
  if (total <= 20) {
    message = "wanna draw a new card?";
  } else if (total === 21) {
    message = "You got BlackJack Baby!";
  } else {
    message = "Busted!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBJ === false) {
    let card = getRandomCard();
    total += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
