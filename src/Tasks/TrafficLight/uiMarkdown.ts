const trafficLightUiMd = `
import { useEffect, useRef, useState } from "react";

export enum LIGHT {
  RED = "RED",
  AMBER = "AMBER",
  GREEN = "GREEN",
}

const colorCycle = [LIGHT.GREEN, LIGHT.AMBER, LIGHT.RED];
const trafficLightCss = "mx-auto h-24 w-24 rounded-4xl";

interface TrafficLightProps {
  timeoutMap: Record<LIGHT, number>;
}

const TrafficLight = (props: TrafficLightProps) => {
  const { timeoutMap } = props;
  const [activeLight, setActiveLight] = useState(LIGHT.GREEN);
  const lightPointerRef = useRef(0);
  const [secondsCount, setSecondsCount] = useState(
    timeoutMap[LIGHT.GREEN] / 1000,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsCount((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      if (lightPointerRef.current === 2) {
        lightPointerRef.current = 0;
      } else {
        lightPointerRef.current++;
      }
      setActiveLight(colorCycle[lightPointerRef.current]);
      setSecondsCount(timeoutMap[colorCycle[lightPointerRef.current]] / 1000);
    }, timeoutMap[activeLight]);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [activeLight, timeoutMap]);

  return (
    <div className="mx-64 flex flex-col justify-center gap-2 rounded-2xl bg-gray-200 px-12 py-8">
      <div
        data-testid="red-light"
        className={\`\${trafficLightCss} \${activeLight === LIGHT.RED ? "bg-red-600" : "bg-gray-500"}\`}
      ></div>
      <div
        data-testid="amber-light"
        className={\`\${trafficLightCss} \${activeLight === LIGHT.AMBER ? "bg-amber-600" : "bg-gray-500"}\`}
      ></div>
      <div
        data-testid="green-light"
        className={\`\${trafficLightCss} \${activeLight === LIGHT.GREEN ? "bg-green-600" : "bg-gray-500"}\`}
      ></div>
      <p className="text-blue-900">Changing in {secondsCount}</p>
    </div>
  );
};

export default TrafficLight;
`;

export default trafficLightUiMd;
