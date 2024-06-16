const selectNumbers = document.getElementById("selectNumbers");
let playModal = document.getElementById("playModal");
let resultSelected = document.getElementById("resultSelected");
let resultWinning = document.getElementById("resultWinning");
let resultMatching = document.getElementById("resultMatching");
let prize = document.getElementById("prize");

let player = {
  // creates an empty array for the players selected numbers.
  selectedNumbers: [],
};
let prizes = {
  0: "Nothing",
  1: "Nothing",
  2: "£30",
  3: "£140",
  4: "£1,750",
  5: "£1,000,000",
  6: "jackpot",
};

function pickSix(arr) {
  // creates 6 unique random numbers between 1-50
  while (arr.length < 6) {
    temp = Math.floor(Math.random() * 50) + 1;
    if (arr.includes(temp)) {
    } else {
      arr.push(temp);
    }
  }
}
function resetNumbers() {
  // clears the players selected numbers, and changes the dom to show that.
  for (let i = 0; i < player.selectedNumbers.length; i++) {
    document
      .getElementById(player.selectedNumbers[i])
      .classList.toggle("selected");
  }
  player.selectedNumbers = [];
  for (let i = 0; i < 6; i++) {
    document.getElementById(`ball${i + 1}`).innerHTML = "";
  }
}

function updateNumbers() {
  for (let i = 0; i < player.selectedNumbers.length; i++) {
    document.getElementById(`ball${i + 1}`).innerHTML =
      player.selectedNumbers[i];
    document
      .getElementById(player.selectedNumbers[i])
      .classList.toggle("selected");
  }
}

function luckyDip() {
  // empties the players current selected numbers, replaces them with 6 new ones, and shows these values on the DOM.
  for (let i = 0; i < player.selectedNumbers.length; i++) {
    document
      .getElementById(player.selectedNumbers[i])
      .classList.toggle("selected");
  }
  player.selectedNumbers = [];
  pickSix(player.selectedNumbers);
  updateNumbers();
  console.log(player.selectedNumbers);
}

document.addEventListener("DOMContentLoaded", (event) => {
  let modal = document.getElementById("selectionModal");
  let chooseNumbers = document.getElementById("chooseNumbers");
  // When the user clicks the button, resets the selected numbers and opens the modal to select new ones.
  chooseNumbers.onclick = function () {
    modal.style.display = "block";
  };
});

selectNumbers.addEventListener("click", function (event) {
  if (event.target && event.target.matches(".selectBall")) {
    // Get the data-id attribute of the clicked button
    const buttonId = Number(event.target.getAttribute("id"));
    console.log(buttonId);
    if (player.selectedNumbers.includes(buttonId)) {
      //if the player has already selected this number, it wil remove it from the selected numbers
      console.log(buttonId);
      player.selectedNumbers.pop(buttonId);
      document.getElementById(buttonId).classList.toggle("selected");
    } else if (player.selectedNumbers.length < 6) {
      // if the player has not already selected this number, and there is 5 or less numbers already selected.
      player.selectedNumbers.push(buttonId);
      document.getElementById(buttonId).classList.toggle("selected");
    } else {
      //if the player already has 6 numbers selected, does nothing.
    }
  }
});
document
  .getElementById("confirm")
  .addEventListener("click", (confirmSelection) => {
    if (player.selectedNumbers.length === 6) {
      updateNumbers();
      for (let i = 0; i < player.selectedNumbers.length; i++) {
        document
          .getElementById(player.selectedNumbers[i])
          .classList.toggle("selected");
        document.getElementById("selectionModal").style.display = "none";
      }
    } else if (player.selectedNumbers.length < 6) {
      console.log("pick more numbers");
    }
  });

function play() {
  //checks to see whether the player has 6 numbers selected.

  if (player.selectedNumbers.length != 6) {
    console.log("you need to select your numbers in order to play.");
    return;
  } else {
    // picks 6 winning numbers and compares them to the 6 selected by the player.
    let winningNumbers = [];
    pickSix(winningNumbers);
    let numbersToCheck = new Set(player.selectedNumbers);
    let matchingNumbers = winningNumbers.filter((number) =>
      numbersToCheck.has(number)
    );
    resultSelected.innerHTML = `selected numbers: ${player.selectedNumbers}`;
    resultWinning.innerHTML = `The Winning Numbers: ${winningNumbers}`;
    resultMatching.innerHTML = `You have ${matchingNumbers.length} matching numbers!`;
    prize.innerHTML = `You Win: ${prizes[matchingNumbers.length]}`;
    playModal.style.display = "block";
  }
}
function closePlay() {
  playModal.style.display = "none";
}
