const squares = document.querySelectorAll(".square");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
let count = 0;
let flag = false;
let currentPlayer = "X";

const conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
squares.forEach((square) =>
  square.addEventListener("click",()=>{input(square)})
);
restartBtn.addEventListener("click", restartGame);

function restartGame() {
  count = 0;
  currentPlayer = "X";
  statusText.textContent = `${currentPlayer}'s turn`;
  squares.forEach((square) => (square.textContent = ""));
}
function checkWinner() {
  for (let condition of conditions) {
    let val1 = squares[condition[0]].innerText;
    let val2 = squares[condition[1]].innerText;
    let val3 = squares[condition[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        statusText.textContent = `${val1} wins `;
        flag = true;
        setTimeout(restartGame, 2000);
      }
    }
  }
}
function input(square){
  if (currentPlayer === "X") {
    if (square.innerText == "") {
      square.innerText = currentPlayer;
      currentPlayer = "0";
      count++;
    }
  } else {
    if (square.innerText == "") {
      square.innerText = currentPlayer;
      currentPlayer = "X";
      count++;
    }
  }
  statusText.textContent = `${currentPlayer}'s turn`;
  checkWinner();
  if (count === 9 && flag === false) {
    statusText.textContent = `It's draw`;
    setTimeout(restartGame, 2000);
  }
}