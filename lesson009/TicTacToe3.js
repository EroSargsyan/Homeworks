function TicTacToe() {
  let array = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let x = 0;
  let y = 0;
  for (let i = 0; i < 3; i++) {
    while (array[i].indexOf("") != -1) {
      x = Math.round(Math.random() * 2);
      y = Math.round(Math.random() * 2);
      if (array[x][y] == "") {
        array[x][y] = "X";
      }
      x = Math.round(Math.random() * 2);
      y = Math.round(Math.random() * 2);
      if (array[x][y] == "") {
        array[x][y] = "O";
      }
    }
  }
  if (
    array[0][0] == array[0][1] &&
    array[0][0] == array[0][2] &&
    array[0][0] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[1][0] == array[1][1] &&
    array[1][0] == array[1][2] &&
    array[1][0] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[2][0] == array[2][1] &&
    array[2][0] == array[2][2] &&
    array[2][0] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[0][0] == array[1][0] &&
    array[0][0] == array[2][0] &&
    array[0][0] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[0][1] == array[1][1] &&
    array[0][1] == array[2][1] &&
    array[1][0] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[0][2] == array[1][2] &&
    array[0][2] == array[1][2] &&
    array[2][2] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[0][0] == array[1][1] &&
    array[0][0] == array[2][2] &&
    array[0][0] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[0][2] == array[1][1] &&
    array[0][2] == array[2][0] &&
    array[0][2] == "X"
  ) {
    return "Player1 Won!";
  } else if (
    array[0][0] == array[0][1] &&
    array[0][0] == array[0][2] &&
    array[0][0] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[1][0] == array[1][1] &&
    array[1][0] == array[1][2] &&
    array[1][0] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[2][0] == array[2][1] &&
    array[2][0] == array[2][2] &&
    array[2][0] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[0][0] == array[1][0] &&
    array[0][0] == array[2][0] &&
    array[0][0] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[0][1] == array[1][1] &&
    array[0][1] == array[2][1] &&
    array[1][0] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[0][2] == array[1][2] &&
    array[0][2] == array[1][2] &&
    array[2][2] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[0][0] == array[1][1] &&
    array[0][0] == array[2][2] &&
    array[0][0] == "O"
  ) {
    return "Player2 Won!";
  } else if (
    array[0][2] == array[1][1] &&
    array[0][2] == array[2][0] &&
    array[0][2] == "O"
  ) {
    return "Player2 Won!";
  } else {
    return "Draw";
  }
}
console.log(TicTacToe());
