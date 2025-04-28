const accordionTestMarkdown = `
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Accordion from "./Accordion";

const accordionConfig = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser",
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML",
  },
  {
    title: "JavaScript",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

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

`;

export default accordionTestMarkdown;
