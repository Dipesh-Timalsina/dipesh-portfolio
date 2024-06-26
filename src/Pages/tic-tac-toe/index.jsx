import { useEffect, useState } from "react";
import "./styles.css";


function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <>
      <div className="layout">
        <div className="topsection">
          <div className="tic-tac-toe-container">
            <div className="row">
              <Square value={squares[0]} onClick={() => handleClick(0)} />
              <Square value={squares[1]} onClick={() => handleClick(1)} />
              <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
              <Square value={squares[3]} onClick={() => handleClick(3)} />
              <Square value={squares[4]} onClick={() => handleClick(4)} />
              <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
              <Square value={squares[6]} onClick={() => handleClick(6)} />
              <Square value={squares[7]} onClick={() => handleClick(7)} />
              <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1 className="status">{status}</h1>
            <button className="restart-button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>

        <div className="learnings">
          <h1>Learnings</h1>
          <ol>
            <li>
              Utilized useState hook to manage three main states: squares (for
              storing the state of each square in the tic-tac-toe grid), isXTurn
              (to track whose turn it is - X or O), and status (to display game
              status messages).
            </li>

            <li>
              Implemented handleClick function to handle square clicks. It
              updates the squares array based on the current player (X or O) and
              toggles turns using isXTurn.
            </li>
            <li>
              Implemented getWinner function to check winning conditions based
              on predefined winning patterns (rows, columns, diagonals). It
              returns the winning player (X or O) or null if there is no winner.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
