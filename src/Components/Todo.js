import React from "react";
import "./Todo.css";
import {CiEdit} from 'react-icons/ci'


function Todo({ task, handleDelete, handleEdit }) {
  return (
    <div className="todo-container">
      <div className="todo-wrapper">
      <div className="bullet-point"><CiEdit/></div>
        <div className="todo-text">
          <p> {task.todo}</p>
        </div>
        <div className="todo-buttons">
          <p onClick={() => handleDelete(task.id)}>❌ <span className="tooltip-text">Delete</span></p>{" "}
          <p onClick={() => handleEdit(task.id)}>📝 <span className="tooltip-text">Edit</span></p>{" "}        </div>{" "}
      </div>
    </div>
  );
}

export default Todo;
