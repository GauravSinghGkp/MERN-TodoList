import React, { useState } from "react";
import "./Components.css";
import axios from "axios";
function CreateTodo() {
  const [todo, setTodo] = useState();

  const handleAdd = () => {
    axios
      .post("http://localhost:3000/add", { todo: todo })
      .then(() => location.reload())
      .catch((error) => console.error(error));
  };

  return (
    <div className="create_todo">
      <input
        type="text"
        name="TodoInput"
        id="todo_input"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          handleAdd();
        }}>
        Add
      </button>
    </div>
  );
}

export default CreateTodo;
