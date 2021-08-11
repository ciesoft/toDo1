import { configureStore } from "@reduxjs/toolkit";
import { getTasksReducer, editTasksReducer } from "../reducers/getTasksReducer";

export const store = configureStore({
  reducer: {
    tasksList: getTasksReducer,
    editTask: editTasksReducer,
  },
});
