import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
const App = () => {
  return (
    <div className="container">
      <h1>Todos</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
