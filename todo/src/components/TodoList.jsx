import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import "./Components.css";
import Todo from "./Todo";
import { useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="todo_list">
      <h1>TodoList</h1>
      <CreateTodo />
      {todos.map((item) => (
        <Todo key={item._id} todo={item.todo} id={item._id} done={item.done} />
      ))}
    </div>
  );
}

export default TodoList;
