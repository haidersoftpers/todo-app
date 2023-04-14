import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    editTask: (state, action) => {
      let list = state.tasks.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.tasks = [...list];
    },
    deleteTask: (state, action) => {
      let newList = state.tasks.filter((item) => item.id != action.payload);
      state.tasks = newList;
    },
  },
});

export const { addTask, editTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;
