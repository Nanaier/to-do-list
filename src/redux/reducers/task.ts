import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task } from "src/types/Task";
import LOCAL_STORAGE_KEYS from "src/types/local-storage-keys";

interface TasksState {
  tasks: Task[];
  plannedList: Task[];
  inProgressList: Task[];
  completedList: Task[];
}

const tasksFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.Tasks)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.Tasks)!)
  : [];

const initialState: TasksState = {
  tasks: tasksFromLocalStorage,
  plannedList: tasksFromLocalStorage.filter((item: Task) => item.status === "planned"),
  inProgressList: tasksFromLocalStorage.filter((item: Task) => item.status === "in-progress"),
  completedList: tasksFromLocalStorage.filter((item: Task) => item.status === "completed"),
};


const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addToTasks: (state, action: PayloadAction<Task>) => {
      const updatedTasks = [...state.tasks, action.payload];
      localStorage.setItem(LOCAL_STORAGE_KEYS.Tasks, JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
        plannedList: updatedTasks.filter((item) => item.status === "planned"),
        inProgressList: updatedTasks.filter((item) => item.status === "in-progress"),
        completedList: updatedTasks.filter((item) => item.status === "completed"),
      };
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const updatedTasks = state.tasks.filter((item) => item.id !== action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEYS.Tasks, JSON.stringify(updatedTasks));
      return {
        ...state,
        tasks: updatedTasks,
        plannedList: updatedTasks.filter((item) => item.status === "planned"),
        inProgressList: updatedTasks.filter((item) => item.status === "in-progress"),
        completedList: updatedTasks.filter((item) => item.status === "completed"),
      };
    },
    updateTaskStatus: (state, action: PayloadAction<Task>) => {
      const updatedTasks = state.tasks.filter((item) => item.id !== action.payload.id);
      const updatedTaskList = [...updatedTasks, action.payload];
      localStorage.setItem(LOCAL_STORAGE_KEYS.Tasks, JSON.stringify(updatedTaskList));
      return {
        ...state,
        tasks: updatedTaskList,
        plannedList: updatedTaskList.filter((item) => item.status === "planned"),
        inProgressList: updatedTaskList.filter((item) => item.status === "in-progress"),
        completedList: updatedTaskList.filter((item) => item.status === "completed"),
      };
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addToTasks, deleteTask, updateTaskStatus } = tasksSlice.actions;
