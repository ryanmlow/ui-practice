const jobBoardTestMarkdown = `
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import JobBoard, { getDateTime, JOB_BOARD_TITLE, JOB_ID_URL } from "./JobBoard";
import { userEvent } from "@testing-library/user-event";
import mockJobsData from "./mockJobsData";

describe("Base test", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("should display job board title", () => {
    const { getByText } = render(<JobBoard />);
    expect(getByText(JOB_BOARD_TITLE)).toBeInTheDocument();
  });

  it("should fetch and display 6 job details on load", async () => {
    const fetchMock = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockJobsData),
      }),
    );
    global.fetch = fetchMock as unknown as typeof fetch;

    const { getAllByTestId } = render(<JobBoard />);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(JOB_ID_URL);

    await waitFor(() => {
      const jobs = getAllByTestId("job");
      expect(jobs.length).toBe(6);
    });
  });
  describe("Load more", () => {
    afterEach(() => {
      global.fetch = originalFetch;
      vi.restoreAllMocks();
    });
    it("Should fetch data on button click", async () => {
      const user = userEvent.setup();
      const fetchMock = vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockJobsData),
        }),
      );
      global.fetch = fetchMock as unknown as typeof fetch;
      const { getAllByTestId, getByRole } = render(<JobBoard />);

      await waitFor(() => {
        const jobs = getAllByTestId("job");
        expect(jobs.length).toBe(6);
      });

      const loadMoreBtn = getByRole("button");
      expect(loadMoreBtn).toBeInTheDocument();

      await user.click(loadMoreBtn);

      expect(fetchMock).toHaveBeenCalledWith(JOB_ID_URL);

      await waitFor(() => {
        const jobs = getAllByTestId("job");
        expect(jobs.length).toBe(10);
      });
    });
  });
  describe("Get datetime", () => {
    it("should compute datetime correctly", () => {
      expect(getDateTime(1745859680)).toBe("4/29/2025, 1:01:20 AM");
      expect(getDateTime(1746118845)).toBe("5/2/2025, 1:00:45 AM");
      expect(getDateTime(1745859680)).toBe("4/29/2025, 1:01:20 AM");
    });
  });
});
`;

export default jobBoardTestMarkdown;
