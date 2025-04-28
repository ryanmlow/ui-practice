import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Tabs from "./Tabs";

const mockTabs = ["HTML", "CSS", "JavaScript"];
const tab1Content =
  "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.";
const tab2Content =
  "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.";
const tab3Content =
  "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.";

describe("Base test", () => {
  it("should display tabs with the first tab open by default", () => {
    const { getByText, queryByText } = render(<Tabs tabs={mockTabs} />);
    expect(getByText(mockTabs[0])).toBeInTheDocument();
    expect(getByText(tab1Content)).toBeInTheDocument();
    expect(getByText(mockTabs[1])).toBeInTheDocument();
    expect(getByText(mockTabs[2])).toBeInTheDocument();
    expect(queryByText(tab2Content)).toBeNull();
    expect(queryByText(tab3Content)).toBeNull();
  });
  it("should show another tab's content when its header is clicked and other tabs content should not be shown", async () => {
    const user = userEvent.setup();

    const { getByText, queryByText, getAllByRole } = render(
      <Tabs tabs={mockTabs} />,
    );
    const headers = getAllByRole("button");
    const header2Btn = headers[1];
    await user.click(header2Btn);

    expect(getByText(tab2Content)).toBeInTheDocument();
    expect(queryByText(tab1Content)).toBeNull();
    expect(queryByText(tab3Content)).toBeNull();

    const header3Btn = headers[2];
    await user.click(header3Btn);

    expect(getByText(tab3Content)).toBeInTheDocument();
    expect(queryByText(tab1Content)).toBeNull();
    expect(queryByText(tab2Content)).toBeNull();
  });
});
