import React, { useContext, useState } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react-lite";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const todoStore = useContext(TodoStore);
  const { addTodo } = todoStore;

  return (
    <>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={_ => {
            addTodo({
              title: title,
              completed: false
            });
            setTitle("");
          }}
        >
          Add todo
        </button>
      </div>
    </>
  );
};

export default observer(AddTodo);
