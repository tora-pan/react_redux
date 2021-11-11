import React from "react";
import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import Filter from "./components/filter/Filter";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app-container">
        <div className="app-todo-container">
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        <Input />
        <Filter />
      </div>
    </div>
  );
}

export default App;
