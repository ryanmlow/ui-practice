import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Modal from "./Modal";
import modalConfig from "./modalConfig";

describe("Base test", () => {
  it("should show open modal button", () => {
    const { getByText } = render(<Modal {...modalConfig} />);
    expect(getByText("Open modal")).toBeInTheDocument();
  });
  it('should open modal with correct contents when "Open modal" button is clicked', async () => {
    const user = userEvent.setup();
    const { getByText, queryByText } = render(<Modal {...modalConfig} />);

    expect(queryByText(modalConfig.title)).not.toBeInTheDocument();
    expect(queryByText(modalConfig.content)).not.toBeInTheDocument();

    await user.click(getByText("Open modal"));

    expect(getByText(modalConfig.title)).toBeInTheDocument();
    expect(getByText(modalConfig.content)).toBeInTheDocument();
  });
  it("should close modal when close button is clicked", async () => {
    const user = userEvent.setup();
    const { getByText, queryByText } = render(<Modal {...modalConfig} />);

    await user.click(getByText("Open modal"));

    expect(queryByText(modalConfig.title)).toBeInTheDocument();
    expect(queryByText(modalConfig.content)).toBeInTheDocument();

    await user.click(getByText("Close"));

    expect(queryByText(modalConfig.title)).not.toBeInTheDocument();
    expect(queryByText(modalConfig.content)).not.toBeInTheDocument();
  });
});
