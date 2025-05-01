const todoUiMarkdown = `
import { useEffect, useState } from "react";
import { MdCheckCircle, MdDeleteOutline } from "react-icons/md";

export const EMPTY_ERR_MSG = "Task cannot be empty";
export const NO_TASK_ADDED_MSG = "No task added yet";

const TodoList = () => {
  type Task = {
    id: number;
    name: string;
    completed: boolean;
  };
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (taskInput.length === 0) {
      setBtnDisabled(taskInput.length === 0);
      setErr(EMPTY_ERR_MSG);
    } else {
      setErr("");
      setBtnDisabled(false);
    }
  }, [taskInput]);

  const addTask = () => {
    const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
    setTasks((prev) => [
      ...prev,
      { id: newId, name: taskInput, completed: false },
    ]);
    setTaskInput("");
  };

  const handleChange = (value: string) => {
    setTaskInput(value);
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => {
      const taskCopy = [...prev];
      return taskCopy.filter((task) => task.id !== id);
    });
  };

  const handleChecked = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      }),
    );
  };
  return (
    <div>
      <h1 className="mt-4">Todo List</h1>
      <div className="mt-4 flex flex-col rounded-2xl bg-gray-200 p-8">
        <div className="flex flex-row items-center py-4">
          <input
            className="flex-10/12 rounded-xl border-4 bg-gray-600 py-8 pl-4 text-left placeholder:text-white placeholder:italic placeholder:opacity-50"
            type="text"
            placeholder="Add your task"
            value={taskInput}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="flex-2/12">
            <button
              className="cursor-pointer rounded-lg bg-gray-600 px-4 py-2 font-bold hover:bg-gray-400 hover:text-white disabled:cursor-default disabled:bg-gray-400"
              onClick={() => addTask()}
              disabled={btnDisabled}
            >
              Add Task
            </button>
          </div>
        </div>
        {err && <p className="ml-2 text-left text-red-500 italic">{err}</p>}
        <ol className="mx-2 my-8 flex flex-1/2 flex-col gap-2">
          {tasks.length >= 1 ? (
            tasks.map((task) => (
              <li
                data-testid="todo-item"
                key={task.id}
                className="flex w-full items-center rounded-lg bg-gray-300 py-4"
              >
                <div
                  onClick={() => handleChecked(task.id)}
                  className="ml-8 cursor-pointer"
                  data-testid="todo-checkbox"
                >
                  {task.completed ? (
                    <MdCheckCircle
                      data-testid="checked-icon"
                      className="h-6 w-6 text-gray-800"
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-xl border-3 border-gray-100 bg-gray-300" />
                  )}
                </div>
                <span className="ml-4 flex-11/12 pl-4 text-left text-black">
                  {task.name}
                </span>
                <MdDeleteOutline
                  data-testid="delete-task-icon"
                  onClick={() => handleDelete(task.id)}
                  className="mr-4 h-6 w-6 cursor-pointer text-black hover:text-gray-600"
                />
              </li>
            ))
          ) : (
            <div>
              <p className="text-2xl font-bold text-black">No task added yet</p>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};
`;

export default todoUiMarkdown;
