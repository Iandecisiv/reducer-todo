import React from "react";

const Todo = ({ id, description, completed, toggle}) => {
  console.log("well done");
  return(
    <div className={"togo-item" + (completed ? 'todo-completed' : '')} onClick={() => toggle(id)}>
    {description}
    </div>
  )
}
export default Todo;