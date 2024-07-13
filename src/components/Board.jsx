import React, { useEffect } from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [clickState, setClickState] = useState(Array(9).fill(null));
  const [active, setActive] = useState(Array(9).fill(false));

  const handleClick = (index) => {
    if (clickState[index] !== null) return;
    const copyState = [...clickState];
    const copyActiveState = [...active];
    if (copyState[index] === null) copyState[index] = player1Turn ? "X" : "O";
    copyActiveState[index] = true;
    setClickState(copyState);
    setActive(copyActiveState);
    setPlayer1Turn(!player1Turn);
  };

  const checkWinner = () => {
    const winningCase = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winningCase) {
      const [a, b, c] = logic;
      if (
        clickState[a] !== null &&
        clickState[a] === clickState[b] &&
        clickState[a] === clickState[c]
      ) {
        return clickState[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleReset = () => {
    setClickState(Array(9).fill(null));
    setActive(Array(9).fill(false));
    setPlayer1Turn(true);
  };

  return (
    <>
      <div className="main-container">
        <div className="scoreboard">
          <div
            className={`player1 ${
              player1Turn ? "active-player" : "inactive-player"
            }`}
          >
            Player 1: X
          </div>
          <div
            className={`player2 ${
              player1Turn ? "inactive-player" : "active-player"
            }`}
          >
            Player 2: O
          </div>
        </div>
        {isWinner && (
          <>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "2rem",
                color: "white",
              }}
            >
              {isWinner} won 🎊
            </p>
            <button onClick={() => handleReset()} className="btn">
              Play again!
            </button>
          </>
        )}
        <div className="board">
          <div className="row">
            <Square
              active={active[0]}
              onClick={() => handleClick(0)}
              value={clickState[0]}
            />
            <Square
              active={active[1]}
              onClick={() => handleClick(1)}
              value={clickState[1]}
            />
            <Square
              active={active[2]}
              onClick={() => handleClick(2)}
              value={clickState[2]}
            />
          </div>
          <div className="row">
            <Square
              active={active[3]}
              onClick={() => handleClick(3)}
              value={clickState[3]}
            />
            <Square
              active={active[4]}
              onClick={() => handleClick(4)}
              value={clickState[4]}
            />
            <Square
              active={active[5]}
              onClick={() => handleClick(5)}
              value={clickState[5]}
            />
          </div>
          <div className="row">
            <Square
              active={active[6]}
              onClick={() => handleClick(6)}
              value={clickState[6]}
            />
            <Square
              active={active[7]}
              onClick={() => handleClick(7)}
              value={clickState[7]}
            />
            <Square
              active={active[8]}
              onClick={() => handleClick(8)}
              value={clickState[8]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
