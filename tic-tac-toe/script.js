const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const rows = document.querySelectorAll(".row");
const resetGameBtn = document.querySelector("#reset-game") 
const result = document.querySelector(".result");

const p1 = "O";
const p2 = "X";
let currentPlayer = p1;
rows.forEach((e) => {
  const span = e.children[0].children[0];

  e.addEventListener("click", (f) => {
    const dataRow = e.getAttribute("data-row");
    const dataColumn = e.getAttribute("data-column");

    if (board[dataRow][dataColumn] === "") {
      span.innerHTML = currentPlayer;
      board[dataRow][dataColumn] = currentPlayer;
      
      console.log(board);
      const winner = checkWinner();
     
      if (winner) {
        result.textContent = `${winner} wins!`;
      } else if (checkDraw()) {
        result.textContent = `Match Draw`;
      }else{
        currentPlayer = currentPlayer === "O" ? "X" : "O";
      }
    }
  });
});

function checkWinner() {
  // check for board rows
  let rowCount = 0;
  //   let boardValue = "X";
  let boardValue = board[0][0];
  for (let j = 0; j < board.length; j++) {
    boardValue = board[j][0];
    rowCount = 0;
    if (boardValue === "") {
      continue;
    }
    for (let i = 0; i < board[j].length; i++) {
      if (board[j][i] === boardValue) {
        rowCount++;
        if (rowCount === 3) {
          return boardValue;
        }
      }
    }
  }

  //   column Detection
  for (let i = 0; i < 3; i++) {
    let firtCell = board[0][i];
    if (
      firtCell !== "" &&
      board[1][i] === firtCell &&
      board[2][i] === firtCell
    ) {
      return board[0][i];
    }
  }

  //    Diagonal
  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  }
  //    Anti diagonal
  if (
    board[0][2] !== "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }
  return null;
}

function checkDraw() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

resetGameBtn.addEventListener("click", () => {
    resetGame();
})

function resetGame() {
  board.forEach((row) => row.fill(""));
  result.textContent = "";
  currentPlayer = p1;
  rows.forEach((e) => {
    const span = e.children[0].children[0];
    span.textContent = "";
  });
}
