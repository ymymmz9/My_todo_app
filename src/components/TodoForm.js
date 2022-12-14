import React, { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
          <input
            type="text"
            placeholder="할 일을 수정하세요."
            name="text"
            className="todo-input edit"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button edit">update</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="할 일을 입력하세요."
            name="text"
            className="todo-input"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button">Add</button>
        </div>
      )}
    </form>
  );
};

export default TodoForm;
