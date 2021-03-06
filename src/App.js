import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App m-4">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
