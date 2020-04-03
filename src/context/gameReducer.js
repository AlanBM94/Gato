export default (state, action) => {
  const { type, payload } = action;

  const checkForRows = () => {
    const { board } = state;
    if (
      (board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") ||
      (board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o")
    ) {
      state.gameOver = true;
    }
  };

  //   const checkForColumns = () => {};

  //   const checkForDiagonals = () => {};

  switch (type) {
    case "PRESS_IN_TURN":
      if (state.player1.turn) {
        state.player1.turn = false;
        state.player2.turn = true;
      } else {
        state.player1.turn = true;
        state.player2.turn = false;
      }
      return state;
    case "SET_BOARD":
      const { xCoordinate, yCoordinate, sign } = payload;
      state.board[yCoordinate][xCoordinate] = sign;
      return state;
    case "CHECK_IF_SOMEONE_WIN":
      checkForRows();
      return state;
    default:
      return state;
  }
};
