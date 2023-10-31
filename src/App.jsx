import React from "react";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleAddItem(value) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: crypto.randomUUID(),
        value,
        isCompleted: false,
      },
    ]);
  }

  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
      <CreateTodo handleAddItem={handleAddItem} />
    </>
  );
}

export default App;
