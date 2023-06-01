function createGame() {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const pairs = numbers.concat(numbers);
  const shuffledPairs = shuffle(pairs); // 20 цифр в рандомном порядке

  const container = document.querySelector(".game-container");
  shuffledPairs.forEach((number) => { // создаем карты по рандомному массиву
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.number = number;
    card.textContent = number;
    card.addEventListener("click", flipCard);
    container.appendChild(card);
  });
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let phoneNumber = "+7";

function flipCard(event) {
  const card = event.target;
  card.classList.toggle("flipped");
  const flippedCards = document.querySelectorAll(".card.flipped");
 
  if (flippedCards.length === 2) {
    removeclick(); // убираем возможность переворачивать карты
    const number1 = flippedCards[0].dataset.number;
    const number2 = flippedCards[1].dataset.number;
    if (number1 == number2) {
      phoneNumber += `${number1}`;
      setTimeout(checkMatch, 1000, flippedCards[0], flippedCards[1]);
    } else {
      setTimeout(checkMatch, 1000, flippedCards[0], flippedCards[1]);
    }
    document.getElementById("phone-number").value = phoneNumber;
    setTimeout(giveclick, 1010); // возвращаем обработчик клика после того как 2 выбранные перевернулись обратно
  }
}

function checkMatch(card1, card2) {
  card1.classList.remove("flipped");
  card2.classList.remove("flipped");
}

function removeclick() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.removeEventListener("click", flipCard);
  });
}

function giveclick() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
}

document.getElementById("cleartel").addEventListener("click", function (event) {
    event.preventDefault();
    phoneNumber = "+7";
    document.getElementById("phone-number").value = "";
  });
