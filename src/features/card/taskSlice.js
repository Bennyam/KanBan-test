import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusses: ["Todo", "Ongoing", "Blocked", "Done"],
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeStatus: {
      prepare(id, status) {
        return {
          payload: {
            id,
            status,
          },
        };
      },
      reducer(state, action) {
        const task = state.tasks.find((task) => task.id === action.payload.id);
        task.status = action.payload.status;
      },
    },
    addTask: {
      prepare(title, priority) {
        return {
          payload: {
            title,
            status: "Todo",
            id: crypto.randomUUID(),
            points: priority,
            teamMembers: "",
          },
        };
      },
      reducer(state, action) {
        state.tasks.push(action.payload);
      },
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    addTeamMembers: {
      prepare(id, members) {
        return {
          payload: {
            id,
            members,
          },
        };
      },
      reducer(state, action) {
        const task = state.tasks.find((task) => task.id === action.payload.id);
        task.teamMembers = action.payload.members;
        console.log(action.payload);
        console.log(task);
      },
    },
  },
});

export const { changeStatus, addTask, deleteTask, addTeamMembers } =
  taskSlice.actions;

export default taskSlice.reducer;
