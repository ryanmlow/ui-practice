import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Accordion from "./Accordion";
import accordionConfig from "./accordionConfig";

describe("Accordion", () => {
  it("should render accordion titles", () => {
    const { getByText } = render(
      <Accordion accordionConfig={accordionConfig} />,
    );

    expect(getByText("HTML")).toBeInTheDocument();
    expect(getByText("CSS")).toBeInTheDocument();
    expect(getByText("JavaScript")).toBeInTheDocument();
  });

  it("should show accordion content when accordion is clicked and hide when clicked again", async () => {
    const user = userEvent.setup();

    const { getByText } = render(
      <Accordion accordionConfig={accordionConfig} />,
    );

    const htmlSection = getByText("HTML");
    await user.click(htmlSection);

    const htmlContent = getByText(accordionConfig[0].content);
    expect(htmlContent).toBeInTheDocument();

    await user.click(htmlSection);
    expect(htmlContent).not.toBeInTheDocument();
  });
  it("should allow multiple sections to be opend at once", async () => {
    const user = userEvent.setup();

    const { getByText } = render(
      <Accordion accordionConfig={accordionConfig} />,
    );

    const htmlSection = getByText("HTML");
    const cssSection = getByText("CSS");
    const jsSection = getByText("JavaScript");
    await user.click(htmlSection);
    await user.click(cssSection);
    await user.click(jsSection);

    const htmlContent = getByText(accordionConfig[0].content);
    const cssContent = getByText(accordionConfig[1].content);
    const jsContent = getByText(accordionConfig[2].content);

    expect(htmlContent).toBeInTheDocument();
    expect(cssContent).toBeInTheDocument();
    expect(jsContent).toBeInTheDocument();
  });
});
