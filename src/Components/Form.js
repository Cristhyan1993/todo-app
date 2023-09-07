import React from "react";
import "./Form.css";

function Form({ userInput, setUserInput, handleSubmit, editId }) {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">Enter Todo</label>
          <input className="form-input"
            type="text"
            id="todo"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
            size={30}
            placeholder="Wash motorbike"
          />
          <button type="submit">{editId ? "Edit" : "Add"}</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
