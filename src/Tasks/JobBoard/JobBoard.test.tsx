import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import JobBoard, { JOB_BOARD_TITLE } from "./JobBoard";

describe("Base test", () => {
  it("should display job board title", () => {
    const { getByText } = render(<JobBoard />);
    expect(getByText(JOB_BOARD_TITLE)).toBeInTheDocument();
  });
});
