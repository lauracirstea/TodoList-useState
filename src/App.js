import React, { useEffect } from "react";
import useTodosWithFilter from "./useTodos";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import "./App.css";

function App({ match }) {
  const {
    todos,
    deleteItem,
    toggleTodo,
    setTodos,
    todosToDisplay,
    setActiveFilter
  } = useTodosWithFilter();

  useEffect(() => {
    const param = match.params.filter;
    if (param !== undefined) setActiveFilter(param.toLowerCase());
  });

  return (
    <div className="todo-app">
      <Form setTodos={setTodos} todos={todos} />

      <Filter setActiveFilter={setActiveFilter} />

      <TodoList
        todos={todosToDisplay}
        toggleTodo={toggleTodo}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
