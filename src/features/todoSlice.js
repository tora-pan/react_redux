import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => action.payload !== item.id
      );
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done = !item.done;
        }
      });
    },
    filterTodoList: (state, action) => {
      switch (action.payload) {
        case "ALL":
          break;
        case "UNFINISHED":
          const newState = state.todoList.filter((item) => item.done);
          state.todoList = newState;
          break;
        case "COMPLETED":
          console.log("this is COMPLETED");
          break;
        default:
          console.log("default");
      }
    },
    showTheUnfinished: (state, action) => {
      console.log("getting called");
      state.todoList = state.todoList.filter((item) => item.done);
    },
  },
});

export const {
  saveTodo,
  setCheck,
  removeTodo,
  filterTodoList,
  showTheUnfinished,
} = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
