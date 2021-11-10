import React from "react";
import "./todoItem.styles.css";

import Checkbox from "@material-ui/core/Checkbox";

import { useDispatch } from "react-redux";
import { setCheck } from "../../features/todoSlice";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
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
    </div>
  );
};

export default TodoItem;
