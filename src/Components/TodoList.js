import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <div className="todo-list-container">
      <div className="todo-list-wrapper">
        <div className="todo-list-heading">
          {todos.length < 1 ? <h2>No todos added</h2> : <h2>List of todos</h2>}
        </div>
        {todos.map((task, key) => {
          return (
            <Todo
              task={task}
              key={key}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
