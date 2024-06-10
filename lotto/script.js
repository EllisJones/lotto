let player = {
  // creates an empty array for the players selected numbers.
  selectedNumbers: [],
};

function pickSix(arr) {
  // creates 6 unique random numbers between 1-50
  while (arr.length < 6) {
    temp = Math.floor(Math.random() * 50);
    if (arr.includes(temp)) {
    } else {
      arr.push(temp);
    }
  }
}

function luckyDip() {
  // empties the players current selected numbers, replaces them with 6 new ones, and shows these values on the DOM.
  player.selectedNumbers = [];
  pickSix(player.selectedNumbers);
  for (let i = 0; i < player.selectedNumbers.length; i++) {
    document.getElementById(`ball${i + 1}`).innerHTML =
      player.selectedNumbers[i];
  }
  console.log(player.selectedNumbers);
}

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
    console.log(`selected numbers ${player.selectedNumbers}`);
    console.log(`winners: ${winningNumbers}`);
    console.log(`you have ${matchingNumbers.length} matching numbers!`);
  }
}

function resetNumbers() {
  // clears the players selected numbers, and changes the dom to show that.
  player.selectedNumbers = [];
  console.log(player.selectedNumbers);
  for (let i = 0; i < 6; i++) {
    document.getElementById(`ball${i + 1}`).innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", (event) => {
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("chooseNumbers");
  let span = document.getElementsByClassName("close")[0];
  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
