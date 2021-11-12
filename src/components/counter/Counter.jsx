import React from "react";
import "./counter.styles.css";

const Counter = ({ todoCount }) => {
  return (
    <div className="counter">
      <div className="counter-box">
        {todoCount.allTodos}
        <span>total</span>
      </div>
      <div className="counter-box">
        {todoCount.allTodos - todoCount.completedTodos}
        <span>!done</span>
      </div>
      <div className="counter-box">
        {todoCount.completedTodos}
        <span>done</span>
      </div>
    </div>
  );
};

export default Counter;
