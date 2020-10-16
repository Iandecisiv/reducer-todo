import React from "react";
import Todo from "./Todo";

const TodoList = ({ items, toggle }) => {
  return (
    <div className="todo-list">
      {items.map(item => (
        <Todo key={item.id} id={item.id} description={item.description} completed={item.completed} toggle={toggle} />
      ))}
    </div>
  );
};;

export default TodoList;