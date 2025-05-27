import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/card/taskSlice";

const persistedState = JSON.parse(localStorage.getItem("reduxState")) || {};

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
