import todoReducer, { addTask, editTask, deleteTask } from "./todoSlice";

describe("todo reducer", () => {
  const initialState = {
    tasks: [],
  };
  it("should handle initial state", () => {
    expect(todoReducer(undefined, { type: "unknown" })).toEqual({
      tasks: [],
    });
  });
  it("should handle add task", () => {
    const { tasks } = todoReducer(
      initialState,
      addTask({ id: 1, task: "test", completed: true })
    );
    expect(ta`2sks).toHaveLength(1);
  });
  it("should handle delete task", () => {
    const { tasks } = todoReducer({tasks:[{ id: 1, task: "test", completed: true }]}, deleteTask(1));
    expect(tasks).toHaveLength(0);
  });
});
