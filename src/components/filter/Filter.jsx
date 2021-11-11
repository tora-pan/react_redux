import React from "react";

import { useDispatch } from "react-redux";
import { filterTodoList, showTheUnfinished } from "../../features/todoSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const showAll = () => {
    dispatch(filterTodoList("ALL"));
  };
  const showUnfinished = () => {
    dispatch(filterTodoList("UNFINISHED"));
  };
  const showCompleted = () => {
    dispatch(filterTodoList("COMPLETED"));
  };
  return (
    <div>
      <button className="filter-button" onClick={showAll}>
        All
      </button>
      <button className="filter-button" onClick={showUnfinished}>
        Unfinished
      </button>
      <button className="filter-button" onClick={showCompleted}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
