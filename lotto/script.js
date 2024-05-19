let player = {
  selectedNumbers: [],
};
console.log(player.selectedNumbers);

function pickSix(arr) {
  while (arr.length < 6) {
    temp = Math.floor(Math.random() * 50);
    if (arr.includes(temp)) {
    } else {
      arr.push(temp);
    }
  }
}

function luckyDip() {
  player.selectedNumbers = [];
  pickSix(player.selectedNumbers);
  for (let i = 0; i < player.selectedNumbers.length; i++) {
    document.getElementById(`ball${i + 1}`).innerHTML =
      player.selectedNumbers[i];
  }
  console.log(player.selectedNumbers);
}

function play() {
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
play();
