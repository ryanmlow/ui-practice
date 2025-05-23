const fileExplorerTestMd = `
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import FileExplorer from "./FileExplorer";
import { fileTree } from "./mockFileTree";
import { userEvent } from "@testing-library/user-event";

describe("Base test", () => {
  it("should show first level file paths", () => {
    const { getByText } = render(<FileExplorer fileTree={fileTree} />);
    expect(getByText("README.md")).toBeInTheDocument();
    expect(getByText("Documents")).toBeInTheDocument();
    expect(getByText("Others")).toBeInTheDocument();
  });
  it("should allow expansion and collapsing", async () => {
    const user = userEvent.setup();

    const { getByText, getByTestId } = render(
      <FileExplorer fileTree={fileTree} />,
    );
    const documentDropdown = getByTestId("dropdown-Documents");
    expect(documentDropdown).toBeInTheDocument();
    await user.click(documentDropdown);

    const wordDoc = getByText("Word.doc");
    const powerpointFolder = getByText("Powerpoints");

    expect(wordDoc).toBeInTheDocument();
    expect(powerpointFolder).toBeInTheDocument();

    const powerpointDropdown = getByTestId("dropdown-Powerpoints");
    await user.click(powerpointDropdown);

    const ppt1 = getByText("ppt1.ppt");
    const ppt2 = getByText("ppt2.ppt");
    expect(ppt1).toBeInTheDocument();
    expect(ppt2).toBeInTheDocument();

    await user.click(powerpointDropdown);

    expect(ppt1).not.toBeInTheDocument();
    expect(ppt2).not.toBeInTheDocument();

    await user.click(documentDropdown);

    expect(wordDoc).not.toBeInTheDocument();
    expect(powerpointFolder).not.toBeInTheDocument();
  });
});
`;

export default fileExplorerTestMd;
