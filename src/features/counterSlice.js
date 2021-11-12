import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: 0,
  //   incompleteTodos: 0,
  completedTodos: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCounts: (state, action) => {
      state.allTodos = state.allTodos += 1;
    },
    setRemoval: (state, action) => {
      if (action.payload === "wasChecked") {
        state.allTodos = state.allTodos -= 1;
        state.completedTodos = state.completedTodos -= 1;
      } else {
        state.allTodos = state.allTodos -= 1;
      }
    },
    setCompleted: (state, action) => {
      if (action.payload === "check") {
        state.completedTodos = state.completedTodos += 1;
      } else if (action.payload === "uncheck") {
        state.completedTodos = state.completedTodos -= 1;
        console.log("it was unchecked");
      }
    },
  },
});

export const { setCounts, setCompleted, setRemoval } = counterSlice.actions;
export const selectCounts = (state) => state.counter;
export default counterSlice.reducer;
