import React, { useState } from "react";
import TodoForm from "./TodoForm";
import trashIcon from "../assets/trash.png";
import editIcon from "../assets/edit.png";

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const submitUpdate = (newValue) => {
    updateTodo(edit.id, newValue);

    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>;
  }

  return (
    <div className="todo">
      {todos.map((todo, index) => (
        <div className="todo-row" key={index}>
          <div key={todo.id}>{todo.text}</div>
          <img
            className="delete-icon"
            src={trashIcon}
            alt="delete button"
            onClick={() => removeTodo(todo.id)}
          />
          <img
            className="edit-icon"
            src={editIcon}
            alt="edit button"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default Todo;
