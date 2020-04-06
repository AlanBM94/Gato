import { initialState } from "./GameContext";

export default (state, action) => {
  const { type, payload } = action;
  const { board } = state;

  const checkWhoWon = () => {
    if (!state.player1.turn) {
      state.player1.win = true;
    } else {
      state.player2.win = true;
    }
  };

  const checkForRows = () => {
    if (
      (board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x") ||
      (board[0][0] === "o" && board[0][1] === "o" && board[0][2] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
    if (
      (board[1][0] === "x" && board[1][1] === "x" && board[1][2] === "x") ||
      (board[1][0] === "o" && board[1][1] === "o" && board[1][2] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
    if (
      (board[2][0] === "x" && board[2][1] === "x" && board[2][2] === "x") ||
      (board[2][0] === "o" && board[2][1] === "o" && board[2][2] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
  };

  const checkForColumns = () => {
    if (
      (board[0][2] === "x" && board[1][2] === "x" && board[2][2] === "x") ||
      (board[0][2] === "o" && board[1][2] === "o" && board[2][2] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
    if (
      (board[0][1] === "x" && board[1][1] === "x" && board[2][1] === "x") ||
      (board[0][1] === "o" && board[1][1] === "o" && board[2][1] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
    if (
      (board[0][0] === "x" && board[1][0] === "x" && board[2][0] === "x") ||
      (board[0][0] === "o" && board[1][0] === "o" && board[2][0] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
  };

  const checkForDiagonals = () => {
    if (
      (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x") ||
      (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
    if (
      (board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x") ||
      (board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o")
    ) {
      state.gameOver = true;
      checkWhoWon();
    }
  };

  const checkIfIsATie = () => {
    if (
      board[0][0] !== "" &&
      board[0][1] !== "" &&
      board[0][2] !== "" &&
      board[1][0] !== "" &&
      board[1][1] !== "" &&
      board[1][2] !== "" &&
      board[2][0] !== "" &&
      board[2][1] !== "" &&
      board[2][2] !== ""
    ) {
      state.isATie = true;
      state.gameOver = true;
    }
  };

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
      checkForColumns();
      checkForDiagonals();
      checkIfIsATie();
      return state;
    case "RESTART_GAME":
      state.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      state.player1 = {
        turn: true,
        win: false,
      };
      state.player2 = {
        turn: false,
        win: false,
      };
      state.gameOver = false;
      state.tie = false;
      state.someoneWin = false;
      state.isATie = false;
      return state;
    default:
      return state;
  }
};
