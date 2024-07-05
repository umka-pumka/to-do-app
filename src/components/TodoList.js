import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);

  // Фильтрация задач
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'important') {
      return todo.important;
    } else {
      return true; // Все задачи
    }
  });

  return (
    <div>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;