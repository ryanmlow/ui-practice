import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import TestimonialCard, { testimonialText } from "./TestimonialCard";

describe("Testimonial Card", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <TestimonialCard
        name="Sarah Dole"
        handle="@sarahdole"
        testimonial={testimonialText}
      />,
    );
    expect(getByText(testimonialText)).toBeInTheDocument();
    expect(getByText("Sarah Dole")).toBeInTheDocument();
    expect(getByText("@sarahdole")).toBeInTheDocument();
  });
});
