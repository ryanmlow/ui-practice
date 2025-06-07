import { useState, useEffect, Fragment } from "react";
import { JSX } from "react";

const Bar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const barFillTime = 3000;
    const fillInterval = barFillTime / 100;
    let count = 1;
    const interval = setInterval(() => {
      if (count <= 100) {
        count++;
        setWidth((prev) => prev + 1);
      }
    }, fillInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="mb-4 w-full rounded-2xl bg-teal-300"
      data-testid="progress-bar"
    >
      <div
        className="h-4 rounded-2xl bg-teal-600"
        style={{ width: `${width}%` }}
        data-testid="progress-bar-fill"
      />
    </div>
  );
};

const ProgressBar = () => {
  const [renderBars, setRenderBars] = useState<JSX.Element[]>([]);
  const addProgressBar = () => {
    setRenderBars((prev) => {
      const curr = [...prev];
      curr.push(<Bar />);
      return curr;
    });
  };

  return (
    <>
      <button
        className="mb-8 cursor-pointer rounded-2xl bg-teal-500 px-4 py-2 shadow-md shadow-teal-200 hover:shadow-lg"
        onClick={() => addProgressBar()}
      >
        Add
      </button>
      {renderBars.map((bar, idx) => (
        <Fragment key={idx}>{bar}</Fragment>
      ))}
    </>
  );
};

export default ProgressBar;
