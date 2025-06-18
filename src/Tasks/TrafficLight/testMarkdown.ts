const trafficLightTestMd = `
import { act, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TrafficLight from "./TrafficLight";
import { timeoutMap } from "./timeoutMap";

describe("Traffic Light", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });
  it("should show the traffic light that defaults to green light, and other lights should be gray", () => {
    const { getByTestId } = render(<TrafficLight timeoutMap={timeoutMap} />);
    const greenLight = getByTestId("green-light");
    expect(greenLight).toBeInTheDocument();
    expect(greenLight).toHaveClass("bg-green-600");

    const amberLight = getByTestId("amber-light");
    expect(amberLight).toBeInTheDocument();
    expect(amberLight).toHaveClass("bg-gray-500");

    const redLight = getByTestId("red-light");
    expect(redLight).toBeInTheDocument();
    expect(redLight).toHaveClass("bg-gray-500");
  });
  describe("Cycle behavior", () => {
    it("should cycle between light colors at designated intervals", () => {
      const { getByTestId } = render(<TrafficLight timeoutMap={timeoutMap} />);
      const greenLight = getByTestId("green-light");
      const amberLight = getByTestId("amber-light");
      const redLight = getByTestId("red-light");

      act(() => vi.advanceTimersByTime(6000));
      expect(amberLight).toHaveClass("bg-amber-600");
      expect(greenLight).toHaveClass("bg-gray-500");
      expect(redLight).toHaveClass("bg-gray-500");

      act(() => vi.advanceTimersByTime(2000));
      expect(redLight).toHaveClass("bg-red-600");
      expect(amberLight).toHaveClass("bg-gray-500");
      expect(greenLight).toHaveClass("bg-gray-500");

      act(() => vi.advanceTimersByTime(4000));
      expect(greenLight).toHaveClass("bg-green-600");
      expect(redLight).toHaveClass("bg-gray-500");
      expect(amberLight).toHaveClass("bg-gray-500");
    });
  });
});
`;

export default trafficLightTestMd;
