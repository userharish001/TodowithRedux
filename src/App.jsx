import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/Todo"
import Tabs from "./components/Tabs"
import TodoList from "./components/TodoList";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="container">
      <div className="app_title">Todo App</div>
      <Alert />
      <TodoForm />
      <Tabs />
      <TodoList />
    </div>
  );
}

export default App;
