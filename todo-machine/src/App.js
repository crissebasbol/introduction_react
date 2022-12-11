import React from "react";
import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todo_list = [
  {
    text: "Buy onions",
    completed: false,
  },
  {
    text: "Finish course React",
    completed: false,
  },
  {
    text: "Make design",
    completed: false,
  },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todo_list.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
