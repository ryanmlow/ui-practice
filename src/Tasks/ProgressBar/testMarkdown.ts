const ProgressBarTestMarkdown = `
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ProgressBar from "./ProgressBar";

describe("Base test", () => {
  it("should show the 'Add' Button", () => {
    const { getByRole } = render(<ProgressBar />);
    const addBtn = getByRole("button");
    expect(addBtn).toBeInTheDocument();
    expect(addBtn).toHaveTextContent("Add");
  });
  it('should show a progress bar when the "Add" button is clicked', async () => {
    const user = userEvent.setup();
    const { getByRole, getByTestId } = render(<ProgressBar />);
    const addBtn = getByRole("button");
    await user.click(addBtn);
    const bar = getByTestId("progress-bar");
    expect(bar).toBeInTheDocument();
  });
  it("should allow multiple progress bars to be added", async () => {
    const user = userEvent.setup();
    const { getByRole, getAllByTestId } = render(<ProgressBar />);
    const addBtn = getByRole("button");
    await user.click(addBtn);
    await user.click(addBtn);
    await user.click(addBtn);
    const bars = getAllByTestId("progress-bar");
    expect(bars.length).toBe(3);
  });
});
`;

export default ProgressBarTestMarkdown;
