import { combineReducers } from "redux";

import todoReducer from "./todo-list/todo.reducer";

export default combineReducers({
  todos: todoReducer,
});
