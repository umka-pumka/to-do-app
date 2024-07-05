import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './index.css'; // Импортируем стили

const App = () => {
  return (
    <div className="app">
      <h1 className="app-title">Todo List</h1>
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;