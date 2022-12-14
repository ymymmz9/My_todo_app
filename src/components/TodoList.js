import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || todo.text === "") {
      return;
    }
    const newTodos = [todo, ...todos];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || newValue.text === "") {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = todos.filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  return (
    <div className="todo-list">
      <h1>Do it!</h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      ></Todo>
    </div>
  );
};

export default TodoList;
