const diceRollerUiMarkdown = `
import { useState } from "react";

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const DiceRoller = () => {
  const [rollTimes, setRollTimes] = useState(1);
  const [rollResult, setRollResult] = useState<number[]>([]);

  const generateDiceRoll = () => {
    const result: number[] = [];
    for (let i = 0; i < rollTimes; i++) {
      const roll = randomIntFromInterval(1, 6);
      result.push(roll);
    }
    setRollResult(result);
  };

  const handleChange = (inputVal: number) => {
    if (inputVal < 1) {
      setRollTimes(1);
    } else if (inputVal > 12) {
      setRollTimes(12);
    } else {
      setRollTimes(inputVal);
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-row items-center justify-center gap-4 rounded-xl bg-gray-300 py-4">
        <h2 className="ml-8 text-xl font-bold text-black">Number of dice</h2>
        <input
          className="rounded-lg border-4 border-amber-800 text-center text-xl font-bold text-black"
          type="number"
          value={rollTimes}
          min={1}
          max={12}
          onChange={(e) => handleChange(+e.target.value)}
        />
        <button
          className="mr-8 ml-auto cursor-pointer rounded-lg border-4 border-gray-600 bg-gray-100 text-black hover:bg-gray-600 hover:text-white"
          onClick={generateDiceRoll}
        >
          Roll
        </button>
      </div>
      <div className="grid grid-cols-3">
        {rollResult.map((res) => (
          <div
            data-testid="dice"
            className="m-4 rounded-lg bg-gray-300 py-8 text-2xl text-black"
          >
            {res}
          </div>
        ))}
      </div>
    </div>
  );
};
`;

export default diceRollerUiMarkdown;
