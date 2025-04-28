const diceRollerTestMarkdown = `
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import DiceRoller from "./DiceRoller";

describe("Base test", () => {
  it("should show number input field and the roll button", () => {
    const { getByRole } = render(<DiceRoller />);
    const addBtn = getByRole("button");
    expect(addBtn).toBeInTheDocument();

    const input = getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });
  it("should allow minimum value of 1 and maximum value of 12 for the number input", async () => {
    const { getByRole } = render(<DiceRoller />);
    const input = getByRole("spinbutton");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("min", "1");

    fireEvent.change(input, { target: { value: "0" } });
    expect(input).toHaveAttribute("value", "1");

    fireEvent.change(input, { target: { value: "13" } });
    expect(input).toHaveAttribute("value", "12");
  });
  it("should allow adjusting number of dies", async () => {
    const { getByRole } = render(<DiceRoller />);
    const input = getByRole("spinbutton");

    fireEvent.change(input, { target: { value: "2" } });
    expect(input).toHaveAttribute("value", "2");

    fireEvent.change(input, { target: { value: "3" } });
    expect(input).toHaveAttribute("value", "3");
  });

  describe("Roll button", () => {
    it('should display the correct number of dies when the "Roll" button is clicked', async () => {
      const user = userEvent.setup();
      const { getByRole, getAllByTestId } = render(<DiceRoller />);

      const rollBtn = getByRole("button");
      const input = getByRole("spinbutton");

      await user.click(rollBtn);

      const rolls = getAllByTestId("dice");
      expect(rolls.length).toBe(1);

      fireEvent.change(input, { target: { value: "2" } });
      await user.click(rollBtn);
      const rolls2 = getAllByTestId("dice");
      expect(rolls2.length).toBe(2);

      fireEvent.change(input, { target: { value: "12" } });
      await user.click(rollBtn);
      const rolls3 = getAllByTestId("dice");
      expect(rolls3.length).toBe(12);
    });
  });
});
`;

export default diceRollerTestMarkdown;
