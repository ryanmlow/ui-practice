import { describe, it, expect, vi } from "vitest";
import debounce from "./debounce";

describe("debounce", () => {
  it("should debounce a function", () => {
    let callCount = 0;
    const add = vi.fn(() => callCount++);
    const debouncedFunc = debounce(add, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    expect(add).toHaveBeenCalledTimes(0);

    expect(callCount).toBe(0);

    setTimeout(() => {
      expect(callCount).toBe(1);
      expect(add).toHaveBeenCalledTimes(1);
    }, 150);
  });
});
