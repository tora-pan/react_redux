import React from "react";
import "./todoItem.styles.css";

import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck, removeTodo } from "../../features/todoSlice";
import { setCompleted, setRemoval } from "../../features/counterSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
    if (done) {
      dispatch(setCompleted("uncheck"));
    } else {
      dispatch(setCompleted("check"));
    }
  };

  const removeCurrentTodo = () => {
    dispatch(removeTodo(id));
    if (done) {
      dispatch(setRemoval("wasChecked"));
    } else {
      dispatch(setRemoval());
    }
  };

  return (
    <div className="todo-item">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        {...label}
      />
      <p className={done ? "todo-item-done" : "todoItem-pending"}>{name}</p>
      <button className="remove-button" onClick={removeCurrentTodo}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
