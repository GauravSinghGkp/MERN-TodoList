import React from "react";
import "./Components.css";
import axios from "axios";

function Todo({ todo, id, done }) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then(() => location.reload())
      .catch((error) => console.error(error));
  };
  const handleComplete = (id) => {
    axios
      .put(`http://localhost:3000/update/${id}`)
      .then(() => location.reload())
      .catch((error) => console.error(error));
  };
  return (
    <div className="todo-container">
      <div className="task">
        <input
          type="checkbox"
          name="complete"
          id="complete"
          onChange={() => handleComplete(id)}
          checked={done}
        />
        <p className={done ? "todo strikethrough" : "todo"}>{todo}</p>
      </div>
      <img
        src="delete.png"
        alt="delete"
        className="del-btn"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
}

export default Todo;
