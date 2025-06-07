import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TicTacToe from "./TicTacToe";

describe("Base test", () => {
  it("should render the tic tac toe board with the title and default to Player 1's turn", () => {
    const { getByText } = render(<TicTacToe />);
    expect(getByText("Tic Tac Toe")).toBeInTheDocument();
    expect(getByText("Player 1's turn")).toBeInTheDocument();
  });
  it("should allow clicking of board tiles, with player turns rotating after each tile is clicked", async () => {
    const user = userEvent.setup();
    const { getByText, getByTestId } = render(<TicTacToe />);

    const tile0 = getByTestId("tile-0");
    expect(tile0).toBeInTheDocument();
    await user.click(tile0);

    const tile0Value = getByTestId("tile-0-value");
    expect(tile0Value.innerHTML).toBe("O");
    expect(getByText("Player 2's turn")).toBeInTheDocument();

    const tile1 = getByTestId("tile-1");
    await user.click(tile1);
    const tile1Value = getByTestId("tile-1-value");
    expect(tile1Value.innerHTML).toBe("X");
  });
  it("should not allow clicking of a tile if it is already taken", async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(<TicTacToe />);

    const tile0 = getByTestId("tile-0");
    await user.click(tile0);
    const tile0Value = getByTestId("tile-0-value");
    expect(tile0Value.innerHTML).toBe("O");

    await user.click(tile0);
    expect(tile0Value.innerHTML).toBe("O");
  });
  it("should reset the board when reset button is clicked", async () => {
    const user = userEvent.setup();
    const { getByTestId, getByRole } = render(<TicTacToe />);

    const tile0 = getByTestId("tile-0");
    await user.click(tile0);
    const tile0Value = getByTestId("tile-0-value");
    expect(tile0Value.innerHTML).toBe("O");

    const tile1 = getByTestId("tile-1");
    await user.click(tile1);
    const tile1Value = getByTestId("tile-1-value");
    expect(tile1Value.innerHTML).toBe("X");

    const resetBtn = getByRole("button");
    await user.click(resetBtn);
    expect(tile0Value.innerHTML).toBe("");
    expect(tile1Value.innerHTML).toBe("");
  });
  describe("Game flow", () => {
    it("should show winning message if player 1 wins", async () => {
      const user = userEvent.setup();
      const { getByTestId, getByText } = render(<TicTacToe />);

      await user.click(getByTestId("tile-0"));
      await user.click(getByTestId("tile-3"));
      await user.click(getByTestId("tile-4"));
      await user.click(getByTestId("tile-6"));
      await user.click(getByTestId("tile-8"));

      expect(getByText("Player 1 wins!")).toBeInTheDocument();
    });
    it("should show winning message if player 2 wins", async () => {
      const user = userEvent.setup();
      const { getByTestId, getByText } = render(<TicTacToe />);

      await user.click(getByTestId("tile-0"));
      await user.click(getByTestId("tile-3"));
      await user.click(getByTestId("tile-6"));
      await user.click(getByTestId("tile-4"));
      await user.click(getByTestId("tile-8"));
      await user.click(getByTestId("tile-5"));

      expect(getByText("Player 2 wins!")).toBeInTheDocument();
    });
    it("should show draw message if match ends in a draw", async () => {
      const user = userEvent.setup();
      const { getByTestId, getByText } = render(<TicTacToe />);

      await user.click(getByTestId("tile-3"));
      await user.click(getByTestId("tile-0"));
      await user.click(getByTestId("tile-1"));
      await user.click(getByTestId("tile-4"));
      await user.click(getByTestId("tile-5"));
      await user.click(getByTestId("tile-2"));
      await user.click(getByTestId("tile-6"));
      await user.click(getByTestId("tile-7"));
      await user.click(getByTestId("tile-8"));
      expect(getByText("It's a draw!")).toBeInTheDocument();
    });
  });
});
