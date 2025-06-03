import { render } from "@testing-library/react";
import LikeButton, { API_URL } from "./LikeButton";
import { userEvent } from "@testing-library/user-event";

describe("Base test", () => {
  it("shouws a button with like text", () => {
    const { getByText } = render(<LikeButton />);
    expect(getByText("Like")).toBeInTheDocument();
  });
  describe("Click behavior", () => {
    const originalFetch = global.fetch;
    const mockPayload = {
      method: "POST",
      body: JSON.stringify({ action: "like" }),
    };

    afterEach(() => {
      global.fetch = originalFetch;
      vi.restoreAllMocks();
    });
    const successResponse = { message: "Success!" };
    const errorResponse = {
      message:
        "Unknown error during attempted {{action}}. Please try again later.!",
    };
    it("should change status from default to liked on click", async () => {
      const user = userEvent.setup();

      const fetchMock = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(successResponse),
        }),
      );
      global.fetch = fetchMock as unknown as typeof fetch;

      const { getByRole } = render(<LikeButton />);
      const button = getByRole("button");

      await user.click(button);

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(API_URL, mockPayload);
      expect(fetchMock).toHaveReturnedWith(Promise.resolve(successResponse));
    });
    it("should throw error when API returns error", async () => {
      const user = userEvent.setup();

      const fetchMock = vi.fn(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve(errorResponse),
        }),
      );
      global.fetch = fetchMock as unknown as typeof fetch;

      const { getByRole } = render(<LikeButton />);
      const button = getByRole("button");

      await user.click(button);

      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(API_URL, mockPayload);

      expect(fetchMock).toHaveReturnedWith(Promise.resolve(errorResponse));
    });
  });
});
