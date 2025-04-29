const TodoListTestMarkdown = `
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import TodoList, { EMPTY_ERR_MSG, NO_TASK_ADDED_MSG } from "./TodoList";

describe("Base test", () => {
  it("should show the input box with the add task button", () => {
    const { getByRole } = render(<TodoList />);
    const addTaskBtn = getByRole("button");
    expect(addTaskBtn).toBeInTheDocument();

    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
  it("should show the error message that task should be not empty", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText(EMPTY_ERR_MSG)).toBeInTheDocument();
  });
  describe("Task handling", () => {
    it("should show no task added when there are no tasks", () => {
      const { getByText } = render(<TodoList />);
      expect(getByText(NO_TASK_ADDED_MSG)).toBeInTheDocument();
    });
    it("should show display new task when task is added, and delete task when delete icon is clicked", async () => {
      const user = userEvent.setup();

      const { getByRole, getByTestId } = render(<TodoList />);
      const addTaskBtn = getByRole("button");

      const input = getByRole("textbox");
      fireEvent.change(input, { target: { value: "Test task" } });

      expect(input).toHaveAttribute("value", "Test task");

      await user.click(addTaskBtn);

      const todoItem = getByTestId("todo-item");
      expect(todoItem).toBeInTheDocument();

      const deleteIcon = getByTestId("delete-task-icon");
      await user.click(deleteIcon);

      expect(todoItem).not.toBeInTheDocument();
    });
    it("should allow task to be checked and unchecked", async () => {
      const user = userEvent.setup();

      const { getByRole, getByTestId } = render(<TodoList />);
      const addTaskBtn = getByRole("button");

      const input = getByRole("textbox");
      fireEvent.change(input, { target: { value: "Test task" } });

      await user.click(addTaskBtn);

      const checkbox = getByTestId("todo-checkbox");
      await user.click(checkbox);

      const checkedIcon = getByTestId("checked-icon");
      expect(checkedIcon).toBeInTheDocument();

      await user.click(checkedIcon);
      expect(checkedIcon).not.toBeInTheDocument();
    });
  });
});
`;

export default TodoListTestMarkdown;
