const ticTacToeUiMd = `
import { useEffect, useRef, useState } from "react";

enum Player {
  Player1 = "Player 1",
  Player2 = "Player 2",
}

const playerIconMap = {
  [Player.Player1]: "O",
  [Player.Player2]: "X",
};
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const initialBoardState = Array(9).fill("");
  const [currentPlayer, setCurrentplayer] = useState(Player.Player1);
  const [board, setBoard] = useState(initialBoardState);
  const [endGameMsg, setEndGameMsg] = useState("");
  const resetFlag = useRef(false);

  useEffect(() => {
    let winner;
    const currentPlayerIcon = playerIconMap[currentPlayer];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a] === currentPlayerIcon &&
        board[b] === currentPlayerIcon &&
        board[c] === currentPlayerIcon
      ) {
        winner = currentPlayer;
        break;
      }
    }

    if (winner) {
      setEndGameMsg(\`\${winner} wins!\`);
    } else if (!board.includes("")) {
      setEndGameMsg("It's a draw!");
    } else if (!resetFlag.current && board.some((item) => item !== "")) {
      setCurrentplayer((prev) =>
        prev === Player.Player1 ? Player.Player2 : Player.Player1,
      );
    } else {
      resetFlag.current = false;
    }
  }, [board]);

  const handleClick = (idx: number) => {
    if (board[idx] === "") {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[idx] = playerIconMap[currentPlayer];

        return newBoard;
      });
    }
  };

  const resetBoard = () => {
    resetFlag.current = true;
    setBoard(initialBoardState);
    setCurrentplayer(Player.Player1);
    setEndGameMsg("");
  };

  return (
    <div className="rounded-2xl bg-amber-100">
      <h1 className="py-4 text-black">Tic Tac Toe</h1>

      <div className={endGameMsg ? "bg-amber-500" : ""}>
        <p className="py-4 text-2xl font-bold text-black">
          {endGameMsg ? endGameMsg : \`\${currentPlayer}'s turn\`}
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4">
        {board.map((item, idx) => (
          <div
            data-testid={\`tile-\${idx}\`}
            key={idx}
            className={\`min-h-56 cursor-pointer rounded-lg bg-amber-400 py-10 hover:bg-amber-200 \${board[idx] !== "" || endGameMsg ? "pointer-events-none" : ""}\`}
            onClick={() => {
              handleClick(idx);
            }}
          >
            <p
              data-testid={\`tile-\${idx}-value\`}
              className="text-9xl font-bold text-black"
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <button
        className="my-4 cursor-pointer rounded-2xl border-2 border-amber-200 bg-amber-300 px-8 py-2 text-black hover:bg-amber-100"
        onClick={() => resetBoard()}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
`;

export default ticTacToeUiMd;
