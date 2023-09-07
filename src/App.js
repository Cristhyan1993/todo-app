import React, { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (editId) {
      const idToEdit = todos.find((todo) => todo.id === editId);
      const updatedTodos = todos.map((todo) =>
        todo.id === idToEdit.id
          ? (todo = { id: todo.id, todo: userInput })
          : { id: todo.id, todo: todo.todo }
      );

      setTodos([...updatedTodos]);
      setEditId("");
      setUserInput("");
      return;
    }

    if (userInput !== "") {
      setTodos([{ id: Date.now(), todo: userInput }, ...todos]);
      setUserInput("");
    }
  }

  function handleDelete(idToDelete) {
    const deletedTodo = todos.filter((todo) => todo.id !== idToDelete);
    console.log(deletedTodo);
    setTodos([...deletedTodo]);
  }

  function handleEdit(idToEdit) {
    const editedId = todos.find((todo) => todo.id === idToEdit);
    setUserInput(editedId.todo);
    setEditId(idToEdit);
  }

  return (
    <div className="App">
      <div className="main">
        <div className="heading-container">
          <div className="heading-wrapper">
            <h1>
              <span className="span">my</span>Todo App{" "}
              <span className="span">✔</span>
            </h1>
          </div>
        </div>
        <div className="form-container">
          <Form
            userInput={userInput}
            setUserInput={setUserInput}
            handleSubmit={handleSubmit}
            editId={editId}
          />
        </div>
        <div className="todo-list-container">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
