let cards = [];

let sum = 0;

let message = "";

let messageEl = document.getElementById("message-el");

let cardsEl = document.getElementById("cards-el");

let hasBlackJack = false;

let isThere = false;
// let sumEl = document.querySelector("#sum-el");

let sumEl = document.getElementById("sum-el");
// let thirdCard = 5;
console.log(cards);
// creating Object
let player = {
  name: "Player",
  chips: 123,
  // sayHello: function () {
  //   console.log("hello");
  // },
};
// here name,chips are called keys and "Player" and 123 are called values

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
// 2 ways of accessing values in an object
// 1) player.name
// 2) player["name"]
// functions inside objects are called methods
// we can call the function inside object by using the below syntax
// player.sayHello()
function startGame() {
  isThere = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 11) {
    return 10;
  } else {
    return randomCard;
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? ";
  } else if (sum == 21) {
    message = " You've got a Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isThere = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isThere === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    console.log("newCard");
  }
}
