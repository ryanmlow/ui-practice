import { act, render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DigitalClock, { hours, minutes, seconds } from "./DigitalClock";

describe("DigitalClock Component", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });
  it("renders the initial time correctly", () => {
    const { getByText } = render(<DigitalClock />);
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    expect(
      getByText(hours < 10 ? `0${hours}` : `${hours}`),
    ).toBeInTheDocument();
    expect(
      getByText(minutes < 10 ? `0${minutes}` : `${minutes}`),
    ).toBeInTheDocument();
    expect(
      getByText(seconds < 10 ? `0${seconds}` : `${seconds}`),
    ).toBeInTheDocument();
  });

  it("should increment seconds every second", () => {
    const { getByText } = render(<DigitalClock />);

    act(() => vi.advanceTimersByTime(1000));

    expect(
      getByText(seconds < 10 ? `0${seconds + 1}` : seconds + 1),
    ).toBeInTheDocument();

    const secondsToNextMinute = 60 - seconds - 1;

    act(() => vi.advanceTimersByTime(secondsToNextMinute * 1000));
    expect(getByText("00")).toBeInTheDocument();
  });
  it("should increment minutes every 60 seconds", () => {
    const { getByText } = render(<DigitalClock />);

    act(() => vi.advanceTimersByTime(60 * 1000));

    expect(
      getByText(minutes < 10 ? `0${minutes + 1}` : minutes + 1),
    ).toBeInTheDocument();
  });

  it("should increment hours every 60 minutes", () => {
    const { getByText } = render(<DigitalClock />);

    act(() => vi.advanceTimersByTime(60 * 60 * 1000));

    expect(
      getByText(hours < 10 ? `0${hours + 1}` : hours + 1),
    ).toBeInTheDocument();
  });
});
