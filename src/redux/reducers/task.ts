import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "../../types/Task";

const initialState: Task[] = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks")!)
: [];

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addToTasks: (state, action: PayloadAction<Task>) => {
      localStorage.setItem(
        "tasks",
        JSON.stringify([...state, action.payload])
      );
        return [...state, action.payload];
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state = state.filter((item) => item.id !== action.payload);
      localStorage.setItem(
        "tasks",
        JSON.stringify([...state, action.payload])
      );
      return state;
    },
    updateTaskStatus: (state, action: PayloadAction<Task>) => {
      state = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem(
        "tasks",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addToTasks, deleteTask, updateTaskStatus} =
tasksSlice.actions;
