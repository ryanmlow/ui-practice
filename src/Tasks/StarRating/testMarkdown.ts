const StarRatingTestMd = `
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { userEvent } from "@testing-library/user-event";
import StarRating from "./StarRating";

describe("StarRating", () => {
  it("should render the correct number of stars and filled stars", () => {
    const { getByTestId } = render(
      <StarRating maxStars={5} currentRating={3} />,
    );
    const star1 = getByTestId("star-0");
    expect(star1).toBeInTheDocument();
    expect(star1).toHaveAttribute("fill", "yellow");

    const star2 = getByTestId("star-1");
    expect(star2).toBeInTheDocument();
    expect(star2).toHaveAttribute("fill", "yellow");

    const star3 = getByTestId("star-2");
    expect(star3).toBeInTheDocument();
    expect(star3).toHaveAttribute("fill", "yellow");

    const star4 = getByTestId("star-3");
    expect(star4).toBeInTheDocument();
    expect(star4).toHaveAttribute("fill", "white");

    const star5 = getByTestId("star-4");
    expect(star5).toBeInTheDocument();
    expect(star5).toHaveAttribute("fill", "white");
  });

  it("should fill stars on click", async () => {
    const user = userEvent.setup();
    const { getByTestId } = render(
      <StarRating maxStars={5} currentRating={0} />,
    );

    const star1 = getByTestId("star-0");
    expect(star1).toHaveAttribute("fill", "white");
    const star2 = getByTestId("star-1");
    expect(star2).toHaveAttribute("fill", "white");
    await user.click(star2);
    expect(star1).toHaveAttribute("fill", "yellow");
    expect(star2).toHaveAttribute("fill", "yellow");

    const star3 = getByTestId("star-2");
    const star4 = getByTestId("star-3");
    await user.click(star4);
    expect(star1).toHaveAttribute("fill", "yellow");
    expect(star2).toHaveAttribute("fill", "yellow");
    expect(star3).toHaveAttribute("fill", "yellow");
    expect(star4).toHaveAttribute("fill", "yellow");

    const star5 = getByTestId("star-4");
    expect(star5).toHaveAttribute("fill", "white");
  });

  it("should fill stars on mouse enter and reset on mouse leave", async () => {
    const { getByTestId } = render(
      <StarRating maxStars={5} currentRating={0} />,
    );
    const star1 = getByTestId("star-0");
    expect(star1).toHaveAttribute("fill", "white");

    const star2 = getByTestId("star-1");
    expect(star2).toHaveAttribute("fill", "white");

    await userEvent.hover(star2);
    expect(star1).toHaveAttribute("fill", "yellow");
    expect(star2).toHaveAttribute("fill", "yellow");

    await userEvent.unhover(star2);
    expect(star1).toHaveAttribute("fill", "white");
    expect(star2).toHaveAttribute("fill", "white");
  });
});
`;

export default StarRatingTestMd;
