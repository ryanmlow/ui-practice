const mortgageTestMarkdown = `
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Mortgage from "./Mortgage";
import { userEvent } from "@testing-library/user-event";

describe("Base test", () => {
  it("should display form fields and computed amounts defaulted to 0", () => {
    const { getByLabelText, getByTestId } = render(<Mortgage />);
    expect(getByLabelText("Amount")).toBeInTheDocument();
    expect(getByLabelText("Interest rate (Annual)")).toBeInTheDocument();
    expect(getByLabelText("Loan term (Years)")).toBeInTheDocument();

    const amountInput = getByTestId("amount-input");
    expect(amountInput).toHaveValue(null);
    const interestInput = getByTestId("interest-input");
    expect(interestInput).toHaveValue(null);
    const loanInput = getByTestId("loan-input");
    expect(loanInput).toHaveValue(null);
  });
  describe("Input validation", () => {
    it("should allow user to type in numbers into the fields", async () => {
      const user = userEvent.setup();
      const { getByTestId } = render(<Mortgage />);

      const amountInput = getByTestId("amount-input");
      await user.type(amountInput, "10000");
      expect(amountInput).toHaveValue(10000);

      const interestInput = getByTestId("interest-input");
      await user.type(interestInput, "10");
      expect(interestInput).toHaveValue(10);

      const loanInput = getByTestId("loan-input");
      await user.type(loanInput, "30");
      expect(loanInput).toHaveValue(30);
    });
    it("should not allow user to type in non-numeric characters into the fields", async () => {
      const user = userEvent.setup();
      const { getByTestId } = render(<Mortgage />);

      const amountInput = getByTestId("amount-input");
      await user.type(amountInput, "abc");
      expect(amountInput).toHaveValue(null);

      const interestInput = getByTestId("interest-input");
      await user.type(interestInput, "abc");
      expect(interestInput).toHaveValue(null);

      const loanInput = getByTestId("loan-input");
      await user.type(loanInput, "abc");
      expect(loanInput).toHaveValue(null);
    });
  });
  describe("Mortgage computation", () => {
    it("should compute mortgage values correctly", async () => {
      const user = userEvent.setup();
      const { getByTestId, getByRole } = render(<Mortgage />);

      const amountInput = getByTestId("amount-input");
      await user.type(amountInput, "1200000");
      expect(amountInput).toHaveValue(1200000);

      const interestInput = getByTestId("interest-input");
      await user.type(interestInput, "5");
      expect(interestInput).toHaveValue(5);

      const loanInput = getByTestId("loan-input");
      await user.type(loanInput, "30");
      expect(loanInput).toHaveValue(30);

      const calculateBtn = getByRole("button");
      await user.click(calculateBtn);

      const monthlyPayment = getByTestId("monthly-payment");
      expect(monthlyPayment.innerHTML).toBe("$6441.86");
      const totalPayment = getByTestId("total-payment");
      expect(totalPayment.innerHTML).toBe("$2319069.41");
      const totalInterest = getByTestId("total-interest");
      expect(totalInterest.innerHTML).toBe("$1119069.41");
    });
  });
});
`;

export default mortgageTestMarkdown;
